"client react";
import React from "react";
import style from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <nav>
        <div className={style.divLogo}>
          <h1>tuManga</h1>
        </div>

        <div
          className={`${style.divLinks} ${isOpen ? style.open : ""}`}
          onClick={() => setIsOpen(false)}
        >
          <Link to="/">Inicio</Link>
          <Link to="/ItemList">Productos</Link>
          <Link to="/Contacto">Contacto</Link>
          <CartWidget />
        </div>

        <div
          className={`${style.itemToggle} ${isOpen ? style.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
