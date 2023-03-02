import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { CartProvider } from 'react-use-cart';
import { Basket } from './Basket';
import { data } from './CatalogList/data';

import { List } from './CatalogList/List';
import s from './Style.module.scss';

export const DashboardPage = () => {
  useLogOutRedirect();
  return (
    <>
    <CartProvider>
      <div className={s.box}>
        {data.productData.map((item, index) => {
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
        <Basket />
        </CartProvider>
    </>
  );
};
