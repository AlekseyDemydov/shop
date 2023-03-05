import { Carusel } from './Carusel/Carusel';
import s from './Slider.module.scss'

export const Slide = props => {
  return (
    <Carusel>
      <div className={s.item}>{props.link1} <p>{props.title1}</p></div>
      <div className={s.item}>{props.link2} <p>{props.title2}</p></div>
      <div className={s.item}>{props.link1} <p>{props.title1}</p></div>
      <div className={s.item}>{props.link2} <p>{props.title2}</p></div>
      <div className={s.item}>{props.link1} <p>{props.title1}</p></div>
      <div className={s.item}>{props.link2} <p>{props.title2}</p></div>
      <div className={s.item}>{props.link1} <p>{props.title1}</p></div>
    </Carusel>
  );
};
