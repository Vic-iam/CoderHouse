"use client";
import style from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import { FaChevronDown } from "react-icons/fa6";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/image/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const menuRef = useRef(null)

    useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  

  const handleLinkClick = () => { 
    setIsOpen(false);
    setShowCat(false); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={style.header}>
      <nav>
        <div className={style.divLogo}>
         <Link to="/"> <img src={logo} alt={"logo"} />  </Link> 
        </div>
        <div className={`${style.divLinks} ${isOpen ? style.open : ""}`}>
          <Link to="/" onClick={handleLinkClick}>
            Inicio
          </Link>
          <div
            className={style.productosDropdown}
            onClick={() => setShowCat(!showCat)}>
            <h2 style={{ display: "flex", gap: "5px" }}>
              Productos <FaChevronDown />
            </h2>
            {showCat && (
              <div className={style.dropdownMenu}>
                <Link to="/Productos" onClick={handleLinkClick}>
                  Ver todos
                </Link>
                <Link to="/categoria/mas-populares" onClick={handleLinkClick}>
                  Más populares
                </Link>
                <Link to="/categoria/mas-vendido" onClick={handleLinkClick}>
                  Más vendidos
                </Link>
                <Link to="/categoria/nuevos" onClick={handleLinkClick}>
                  Nuevos
                </Link>
              </div>
            )}
          </div>
          <CartWidget />
        </div>

        <button
          className={style.itemToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
