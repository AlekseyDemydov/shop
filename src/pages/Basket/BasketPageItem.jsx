import { Form } from 'pages/Form/Form';
// import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import s from './Basket.module.scss';

export const BasketPageItem = () => {
  const {
    items,
    isEmpty,
    cartTotal,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className={s.basketBox} key={index}>
            <img src={item.img} alt="" className={s.img} />
            <div>
              <div>{item.title}</div>
              <div>{item.price} $</div>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
          </div>
        );
      })}
      <h5>total price: {cartTotal} $</h5>
      <button onClick={() => emptyCart()}>clear</button>
      <br />

      {!isEmpty && (
        <Form
          item={items.map(item => {
            return item.title;
          })}
          summ={cartTotal}
        />
      )}
    </>
  );
};
