import { useCart } from 'react-use-cart';
import s from './Basket.module.scss';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BasketItem } from './BasketItem';

export const Basket = () => {
  const {
    // items,
    isEmpty,
    // totalUniqueItems,
    totalItems,
    // cartTotal,
    // updateItemQuantity,
    // removeItem,
    // emptyCart,
  } = useCart();

  return (
    <>
      {['bottom'].map(placement => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body className={s.popoverBody}>
                {isEmpty && <p>your basket is empty</p>}

                {!isEmpty && <BasketItem />}
              </Popover.Body>
            </Popover>
          }
        >
          <Button>
            корзина <span>({totalItems})</span>
          </Button>
        </OverlayTrigger>
      ))}
    </>
  );
};
