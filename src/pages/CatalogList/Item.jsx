import s from './List.module.scss';
export const Item = ({ data, funk }) => {

    return (
      <ul className={s.ul}>
        {data.map(e => (
          <li key={e.id} className={s.li}>
            <img src={e.img} alt="" className={s.img}/>
            <div>
              <h2>{e.title}</h2>
              <h3>{e.price}</h3>
            </div>
            <p>{e.text}</p>
            <button onClick={funk}>add</button>
          </li>
        ))}
      </ul>
    );
  };