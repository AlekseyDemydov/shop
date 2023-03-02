import { useCart } from 'react-use-cart';
import s from './List.module.scss';
export const List = props => {

const{addItem} = useCart()

  return (
    <div className={s.li} key={props.id}>
      <img src={props.img} alt="" className={s.img} />
      <div>
        <h5>{props.title}</h5>
        <h5>{props.price} $</h5>
      </div>
      <p>{props.text}</p>
      <button onClick={()=>addItem(props.item)}>add to basket</button>
    </div>
  );
};
