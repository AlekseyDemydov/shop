import { Basket } from 'pages/Basket/Basket';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <div>
          <Basket />
          <button>Log Out</button>
        </div>
      </header>
    </>
  );
};
