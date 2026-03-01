import React, { useContext } from "react";
import { CardContext } from "../context/CartContext";
import style from "./styles/CartView.module.css";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, removeItem, clear, total, updateQuantity } = useContext(CardContext);

  const preConfirm = () => {
    Swal.fire({
      title: "Estas seguro de borrar el carrito?",
      text: "Perderas el registro de tu producto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si, Seguro!"
    }).then((result) => {
      if (result.isConfirmed) {
        clear()
        Swal.fire({
          title: "Carrito borrado!",
          text: "Tu carrito esta vacio.",
          icon: "success"
        });
      }
    });
  }

  const preItem = (id) => {
    Swal.fire({
      title: "Estas seguro que quieres eliminar el productos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si eliminar!",
      cancelButtonText: "No!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id)
        Swal.fire({
          title: "Eliminar!",
          icon: "success",
        });
      }
    });
  }

  const shopConfi = () => {
    Swal.fire({
      title: "Compra realizada!",
      icon: "success",
      draggable: true
    });
  }


  return (
    <div className={style.CartViewContainer}>
      <h1>Lista de compras</h1>

      <div className={style.cartCard}>
        {cart.map((compra) => (
          <div key={compra.id} className={style.cartIndex}>

            <button
              onClick={() => preItem(compra.id)}
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
            <button onClick={preConfirm} className={style.btnClear}>
              Vaciar carrito
            </button>

            <Link to="/checkout" onClick={shopConfi} className={style.btnShop}>
              Terminar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
