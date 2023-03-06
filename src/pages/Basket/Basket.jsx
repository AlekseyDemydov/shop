import { useCart } from 'react-use-cart';
import s from './Basket.module.scss';
import { ReactComponent as BasketLogo } from './img/basket.svg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BasketItem } from './BasketItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ButtonStyle } from 'Utils/StyledLink';

export const Basket = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
    
  };
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
      {
      ['bottom-end'].map(placement => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          rootClose={true}
          rootCloseEvent='click'
          show={show}
          target={target}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body className={s.popoverBody}>
                {isEmpty && <p>your basket is empty</p>}

                {!isEmpty && <div><BasketItem /> <Link to="/shop/basket" 
                onClick={handleClick}
              
                >офрмить</Link></div>}
              </Popover.Body>
            </Popover>
          }
        >
          <button className={s.btnBasket} 
          onClick={handleClick}
          >
            <BasketLogo className={s.imgBasket} />{' '}
            <span className={s.total}>{totalItems}</span>
          </button>
        </OverlayTrigger>
      ))}
    </>
  );
};
