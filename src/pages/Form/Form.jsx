import axios from 'axios';
import React from 'react';

export const Form = (props) => {
  const TOKEN = '5929832704:AAH-RXP0_n5acEoTgDqHJjUWgdvN7ORkM2U';
  const CHAT = '-1001889830077';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const nameInput = React.createRef();
  const textInput = React.createRef();

  const Send = e => {
    e.preventDefault();
    let message = '';
    message += `<b>Новый заказ</b>\n`;
    message += `<b>name: </b>${nameInput.current.value}\n`;
    message += `<b>text: </b>${textInput.current.value}\n`;
    message += `<b>order: \n</b>${(props.item).join('\n')}\n`;
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
        console.log('err');
      })
      .finally(() => {
        console.log('done');
      });
  };

  return (
    <>
      <form id="form" type="submit">
        <input type="text" id="name" name="name" ref={nameInput} />
        <input type="text" id="text" name="text" ref={textInput} />
        <button id="submit" type="submit" onClick={Send}>
          отправить
        </button>
      </form>
    </>
  );
};
