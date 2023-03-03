import { data } from 'pages/CatalogList/data';
import { List } from 'pages/CatalogList/List';
import s from '../Item.module.scss';
export const Moto = () => {
  return (
    <div className={s.box}>
      {data.moto.map((item, index) => {
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
