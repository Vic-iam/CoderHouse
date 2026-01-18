import React from "react";
import styles from "./styles/CartWidget.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className={styles.cartWidget}>

      <Link to="/Cart">
        <CiShoppingCart />
        Carrito
      </Link>
    </div>
  );
}

export default CartWidget;
