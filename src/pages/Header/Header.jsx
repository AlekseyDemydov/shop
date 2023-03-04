import { Basket } from 'pages/Basket/Basket';

import { StyledLink } from 'Utils/StyledLink';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <nav>
          {/* <Link to="/dashboard">Dashboard</Link> */}

          <StyledLink to="/dashboard">Dashboard</StyledLink>
          &nbsp;&nbsp;
          {/* <Link to="/login">Log In</Link> */}
        </nav>
        <div>
          <Basket />
        </div>
      </header>
    </>
  );
};
