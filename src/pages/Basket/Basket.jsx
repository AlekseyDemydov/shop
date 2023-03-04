import { useCart } from 'react-use-cart';
import s from './Basket.module.scss';
import {ReactComponent as BasketLogo} from './img/basket.svg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BasketItem } from './BasketItem';
// import { ButtonStyle } from 'Utils/StyledLink';

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
      {['bottom-end'].map(placement => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          rootClose={true}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body className={s.popoverBody}>
                {isEmpty && <p>your basket is empty</p>}

                {!isEmpty && <BasketItem />}
              </Popover.Body>
            </Popover>
          }
        >
          <button className={s.btnBasket}>
           <BasketLogo className={s.imgBasket}/> <span>{totalItems}</span>
           
          </button>
        </OverlayTrigger>
      ))}
    </>
  );
};
