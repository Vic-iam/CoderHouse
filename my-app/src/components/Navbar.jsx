"client react";
import React from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.divLogo}>
          <h1>TuManga</h1>
        </div>
        <div className={styles.divLinks}>
             <Link to="/">Inicio</Link>
             <Link to="/Products">Productos</Link>
             <Link to="/Contacto">Contacto</Link>
             <Link to="/Cart"><CiShoppingCart />Shop</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
