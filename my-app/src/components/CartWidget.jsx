import React from "react";
import style from "./styles/CartWidget.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className={style.cartWidget}>
      <div className={style.cartLink}>
        <Link to="/Cart">
          <CiShoppingCart />Carrito<span>{10}</span>
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
