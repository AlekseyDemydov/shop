import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/userSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    e.currentTarget.reset();
    navigate("/dashboard", {replace:true})
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <br />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};