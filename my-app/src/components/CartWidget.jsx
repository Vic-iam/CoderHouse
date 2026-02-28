import React, { useContext } from "react";
import style from "./styles/CartWidget.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CartContext";

function CartWidget() {

  const {cartCantidad} = useContext(CardContext)

  return (
    <div className={style.cartWidget}>
      <div className={style.cartLink}>
        <Link to="/cart" className={style.cartPoint}>
          <CiShoppingCart /><span>{cartCantidad()}</span>
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
