import { Link, Outlet } from 'react-router-dom';
import { Slide } from 'Utils/Slider/Slider';

import s from './DashboardPage.module.scss';
import auto from './img/auto.jpg';
import moto from './img/moto.jpg';

export const DashboardPage = () => {
  return (
    <>
      {/* <Link to="/dashboard/car">
        <img src={auto} alt="" className={s.imgSlide} />
      </Link>
      &nbsp;&nbsp;
      <Link to="/dashboard/moto">
        <img src={moto} alt="" className={s.imgSlide} />
      </Link>
      <br />
      <br /> */}
      <Slide
      title1='car'
        link1={
          <Link to="/dashboard/car">
            <img src={auto} alt="" className={s.imgSlide} />
          </Link>
        }
        title2='moto'
        link2={
          <Link to="/dashboard/moto">
            <img src={moto} alt="" className={s.imgSlide} />
          </Link>
        }
      />
      <Outlet />
    </>
  );
};
