
import { useCart } from 'react-use-cart';
import s from './Basket.module.scss';

export const BasketItem = () => {

  
  const { items, cartTotal, emptyCart, updateItemQuantity, removeItem } =
    useCart();
    
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className={s.basketBox} key={index}>
            <img src={item.img} alt="" className={s.img} />
            <div>
              <div className={s.price}>
                <div>{item.title}</div>
                <div>{item.price*item.quantity} $</div>
              </div>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className={s.quantity}>{item.quantity}</span>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)} className={s.remove}>
                remove
              </button>
            </div>
          </div>
        );
      })}
      <h5>total price: {cartTotal} $</h5>
      <button onClick={() => emptyCart()} className={s.clear}>
        clear
      </button>
      
    </>
  );
};
