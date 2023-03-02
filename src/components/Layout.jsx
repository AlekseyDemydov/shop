// import { useDispatch, useSelector } from "react-redux"
// import { decrement, increment } from "redux/myValue/slice"
import s from './Layout.module.scss';

import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const Layout = () => {
  // const dispatch = useDispatch()
  // const value = useSelector(state=>state.myValue)
  return (
    <>
      <div className={s.container}>
        <AppBar />
        <hr />
        <br />
        <Outlet />
      </div>

      {/* {value}
      <br />
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement(10))}>Increment</button> */}
    </>
  );
};
