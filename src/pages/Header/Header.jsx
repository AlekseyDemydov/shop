import { Basket } from 'pages/Basket/Basket';
import logo from './img/logo.png';
import { StyledLink } from 'Utils/StyledLink';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <Link to="/shop">
            <img src={logo} alt="" className={s.logo} />
          </Link>
          <StyledLink to="/shop/dashboard">Dashboard</StyledLink>
        
        </nav>
        <div>
          <Basket />
        </div>
      </header>
    </>
  );
};
