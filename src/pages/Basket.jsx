import { useCart } from 'react-use-cart';
import s from './Style.module.scss';
// export const Basket = () => {
//   const {
//     items,
//     isEmpty,
//     totalUniqueItems,
//     totalItems,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   if (isEmpty) return <h1>your basket is empty</h1>;
//   return (
//     <>
//       <div>
//         <h5>
//           basket ({totalUniqueItems}) total items : ({totalItems})
//         </h5>
//         <table>
//           <tbody>
//             {items.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>
//                     <img src={item.img} alt="" className={s.img} />
//                   </td>
//                   <td>{item.title}</td>
//                   <td>{item.price} $</td>
//                   <td>quantity ({item.quantity})</td>
//                   <td>
//                     <button
//                       onClick={() =>
//                         updateItemQuantity(item.id, item.quantity - 1)
//                       }
//                     >
//                       -
//                     </button>
//                     <button
//                       onClick={() =>
//                         updateItemQuantity(item.id, item.quantity + 1)
//                       }
//                     >
//                       +
//                     </button>
//                     <button onClick={() => removeItem(item.id)}>remove</button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div>
//         <h3>total price: {cartTotal} $</h3>
//       </div>
//       <div>
//         <button onClick={() => emptyCart()}>clear</button>
//       </div>
//     </>
//   );
// };

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
              {!isEmpty && <BasketItem/>}
              
                
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
