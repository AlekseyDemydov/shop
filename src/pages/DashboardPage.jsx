import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { data } from './CatalogList/data';

import { List } from './CatalogList/List';
import s from './Style.module.scss';

export const DashboardPage = () => {
  useLogOutRedirect();
  return (
    <>
    
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
      
       
    </>
  );
};
