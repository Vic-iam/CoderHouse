"client react";
import React from "react";
import style from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "./CartWidget";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

      const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

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
          <Link to="/" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/Productos" onClick={handleLinkClick}>Productos</Link>
          <CartWidget  />
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
