"client react";
import React from "react";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.divLogo}>
          <h1>TuManga</h1>
        </div>
        <div className={styles.divLinks}>
             <Link to="/">Inicio</Link>
             <Link to="/ItemList">Productos</Link>
             <Link to="/Contacto">Contacto</Link>
             <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
