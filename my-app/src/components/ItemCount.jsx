import { useState, useEffect } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [comprar, setComprar] = useState(false);

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

  const pulsar = () => {
    setComprar(true);
  };

  useEffect(() => {
    console.log("Count actual:", count);
  }, [count]);

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>

      {!comprar ? (
        <button onClick={pulsar}>Comprar</button>
      ) : (
        <p>Producto agregado al carrito ✔</p>
      )}
    </div>
  );
};

export default ItemCount;
