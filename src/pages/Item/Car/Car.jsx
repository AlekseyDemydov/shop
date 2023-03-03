import { data } from 'pages/CatalogList/data';
import { List } from 'pages/CatalogList/List';
import s from '../Item.module.scss';
export const Car = () => {
  return (
    <div className={s.box}>
      {data.car.map((item, index) => {
        return (
          <List
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            text={item.text}
            id={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
