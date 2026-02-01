import { useState, useEffect, use } from "react";
import style from "./styles/ItemCount.module.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const [comprar, setComprar] = useState(false);

   const sumar = () => {
    if (count < 10) {
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
      <button className={style.buttonRestar} onClick={restar}>-</button>
      <span>{count}</span>
      <button className={style.buttonSumar} onClick={sumar}>+</button>
      <div>
        <button className={style.buttonComprar} onClick={() => setComprar(true)}>Comprar</button>
      </div>
    </div>
  );
};

export default ItemCount;
