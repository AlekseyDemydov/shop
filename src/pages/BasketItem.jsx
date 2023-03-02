import { useCart } from 'react-use-cart';
import s from './Style.module.scss';
export const BasketItem = () => {
  const {
    items,
    // isEmpty,
    // totalUniqueItems,
    // totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      {items.map((item, index) => {
        return (
          <>
            <div className={s.basketBox}>
              <img src={item.img} alt="" className={s.img} />
              <div>
                <div key={index}>{item.title}</div>
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
          </>
        );
      })}
      <h5>total price: {cartTotal} $</h5>
      <button onClick={() => emptyCart()}>clear</button>
    </>
  );
};
