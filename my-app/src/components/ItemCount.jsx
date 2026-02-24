import { useState } from "react";
import style from "./styles/ItemCount.module.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

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


    console.log("onAdd:", onAdd)


  const purchase = () => {
     onAdd(count)
  } 

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
        <button className={style.buttonComprar} onClick={() =>onAdd(count)}>Comprar</button>
      </div>
    </div>
  );
};

export default ItemCount;
