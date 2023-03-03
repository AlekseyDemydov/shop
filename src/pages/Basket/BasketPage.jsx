import { useCart } from 'react-use-cart';
import { BasketPageItem } from './BasketPageItem';

export const BasketPage = () => {
  const {
    // items,
    isEmpty,
    // totalUniqueItems,
    // totalItems,
    // cartTotal,
    // updateItemQuantity,
    // removeItem,
    // emptyCart,
  } = useCart();
  return (
    <>
      <div>
        {isEmpty && <p>your basket is empty</p>}

        {!isEmpty && <BasketPageItem />}
      </div>
    </>
  );
};
