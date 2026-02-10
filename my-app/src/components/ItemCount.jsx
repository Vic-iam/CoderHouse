import { useState, useEffect } from "react";
import style from "./styles/ItemCount.module.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [comprar, setComprar] = useState(false);

   const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
   }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    useEffect(() => {

    }, [comprar]);

  return (
    <div className={style.containerItemCount}>
      <div  className={style.styleCount}>
      <button className={style.buttonRestar} onClick={restar}>-</button>
      <div key={count} className={style.countNumber}>
      <span>{count}</span>
      </div>
      <button className={style.buttonSumar} onClick={sumar}>+</button>
      </div>
      <div>
        <Link to="/Cart" className={style.buttonComprar} onClick={() => setComprar(true)}>Comprar</Link>
      </div>
    </div>
  );
};

export default ItemCount;
