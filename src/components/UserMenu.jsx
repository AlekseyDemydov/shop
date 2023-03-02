import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userSlice';
import s from './scss/Style.module.scss'

export const UserMenu = () => {
  const login = useSelector(state => state.user.login);
  const dispatch = useDispatch()
  return (
    <>
      <div className={s.basketBox}>
        <div className={s.basket}></div>
        &nbsp; &nbsp;
        {login}
        &nbsp; &nbsp;
        <button onClick={()=>dispatch(logOut())}>Log Out</button>
      </div>
    </>
  );
};
