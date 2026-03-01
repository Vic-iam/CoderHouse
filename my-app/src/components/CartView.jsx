import React, { useContext } from "react";
import { CardContext } from "../context/CartContext";
import style from "./styles/CartView.module.css";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, removeItem, clear, total, updateQuantity } =
    useContext(CardContext);

  return (
    <div className={style.CartViewContainer}>
      <h1>Lista de compras</h1>

      <div className={style.cartCard}>
        {cart.map((compra) => (
          <div key={compra.id} className={style.cartIndex}>
            
            <button
              onClick={() => removeItem(compra.id)}
              className={style.cartBtn}
            >
              <GoX />
            </button>

            <div className={style.CartViewImg}>
              <img
                src={compra.image}
                alt={compra.nombre}
              />
            </div>

            <div className={style.cartInformation}>
              <h2>{compra.nombre}</h2>
              <p>Precio: ${compra.precio}</p>
              <p>Stock disponible: {compra.stock}</p>

              <div className={style.counterBox}>
                <button
                  disabled={compra.cantidad === 1}
                  onClick={() =>
                    compra.cantidad > 1 &&
                    updateQuantity(compra.id, compra.cantidad - 1)
                  }
                >
                  -
                </button>

                <span key={compra.cantidad} className={style.count}>
                  {compra.cantidad}
                </span>

                <button
                  disabled={compra.cantidad === compra.stock}
                  onClick={() =>
                    compra.cantidad < compra.stock &&
                    updateQuantity(compra.id, compra.cantidad + 1)
                  }
                >
                  +
                </button>
              </div>

              <p className={style.subtotal}>
                Subtotal: ${compra.precio * compra.cantidad}
              </p>
            </div>
          </div>
        ))}

        <div className={style.totalSection}>
          <h2>Total a pagar: ${total()}</h2>

          <div className={style.buttonOptions}>
            <button onClick={clear} className={style.btnClear}>
              Vaciar carrito
            </button>

            <Link to="/chekout" className={style.btnShop}>
              Terminar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
