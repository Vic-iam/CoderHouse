import React, { useContext } from "react";
import style from "./styles/CartWidget.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CardContext } from "../context/CartContext";

function CartWidget() {


    const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const {cartCantidad} = useContext(CardContext)

  return (
    <div className={style.cartWidget}>
      <div className={style.cartLink}>
        <NavLink to="/cart" className={style.cartPoint} onClick={handleLinkClick}>
          <CiShoppingCart /><span>{cartCantidad()}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default CartWidget;
