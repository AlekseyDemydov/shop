import { Link, Outlet } from 'react-router-dom';

export const DashboardPage = () => {
  return (
    <>
      <Link to="/dashboard/car">Car</Link>
      &nbsp;&nbsp;
      <Link to="/dashboard/moto">Moto</Link>
      <br />
      <br />
      <Outlet />
    </>
  );
};
