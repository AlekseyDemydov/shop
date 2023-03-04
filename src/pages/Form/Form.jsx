import axios from 'axios';
import { useCart } from 'react-use-cart';
import Notiflix from 'notiflix';
import React from 'react';
import s from './Form.module.scss'


export const Form = props => {
  const {emptyCart } =
  useCart();


  const TOKEN = '5929832704:AAH-RXP0_n5acEoTgDqHJjUWgdvN7ORkM2U';
  const CHAT = '-1001889830077';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const nameInput = React.createRef();
  const textInput = React.createRef();

  const Send = e => {
    e.preventDefault();

    if (nameInput.current.value === '') {
      Notiflix.Notify.failure('введіть ім`я');
    }
    if (textInput.current.value === '') {
      Notiflix.Notify.failure('введіть повідомлення');
    } else {
      let message = '';
      message += `<b>Новый заказ</b>\n`;
      message += `<b>name: </b>${nameInput.current.value}\n`;
      message += `<b>text: </b>${textInput.current.value}\n`;
      message += `<b>order: \n</b>${props.item.join('\n')}\n`;
      message += `<b>total summ: </b>${props.summ} $\n`;

      axios
        .post(URI_API, {
          chat_id: CHAT,
          parse_mode: 'html',
          text: message,
        })
        .then(res => {
          setTimeout(() => {
            nameInput.current.value = '';
            textInput.current.value = '';
          }, 500);
        })
        .catch(err => {
          Notiflix.Notify.error('warning');
        })
        .finally(() => {
          Notiflix.Notify.success('done');
        });
    }
    emptyCart()
    
  };

  return (
    <>
      <form id="form" type="submit" className={s.form}>
        <input type="text" ref={nameInput} className={s.input} placeholder='введіть ім`я'/>
        <input type="text" ref={textInput} className={s.input} placeholder='введіть повідомлення'/>
        <button id="submit" type="submit" onClick={Send} className={s.btmForm}>
          отправить
        </button>
      </form>
    </>
  );
};
