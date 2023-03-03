
import s from './Layout.module.scss';

import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';

export const Layout = () => {

  return (
    <>
      <div className={s.container}>
        <AppBar />
       
        <Outlet />
      </div>
    </>
  );
};
