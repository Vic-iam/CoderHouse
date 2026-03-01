import { useState } from "react";
import style from "./styles/ItemCount.module.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const purchase = () => {
    onAdd(count);
  };

  return (
    <div className={style.containerItemCount}>
      <div className={style.styleCount}>
        <button
          className={style.buttonRestar}
          onClick={restar}
          disabled={count === 1}
        >
          -
        </button>

        <div className={style.countNumber}>
          <span>{count}</span>
        </div>

        <button
          className={style.buttonSumar}
          onClick={sumar}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <div>
        <button
          className={style.buttonComprar}
          onClick={purchase}
          disabled={stock === 0}
        >
          {stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
