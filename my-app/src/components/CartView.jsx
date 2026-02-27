import React, { useContext } from "react";
import { CardContext } from "../context/CartContext";
import style from "./styles/CartView.module.css";
import { GoX } from "react-icons/go";

const CartView = () => {
  const { cart, removeItem } = useContext(CardContext);

  return (
    <div className={style.CartViewContainer}>
      <h1>Lista de compras</h1>

      <div className={style.cartCard}>
        {cart.map((compra) => (
          <div key={compra.id} className={style.cartIndex}>
            <div className={style.cartInformation}>
              <img
                src={compra.image}
                alt={compra.nombre}
                className={style.CartViewImg}
              />
              <h2> {compra.nombre} </h2>
              <p>Precio: {compra.precio} </p>
              <p>Stock: {compra.stock} </p>
              <p>Precio final: ${compra.precio * compra.stock},00 </p>
              </div>

              <button
                onClick={() => removeItem(compra.id)}
                className={style.cartBtn}
              >
                <GoX />
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartView;
