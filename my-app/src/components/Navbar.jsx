import style from "./styles/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import { FaChevronDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/image/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const menuRef = useRef(null);

  

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setShowCat(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);


  const handleLinkClick = () => {
    setIsOpen(false);
    setShowCat(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.divLogo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {isOpen && (
          <div
            className={style.backdrop}
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          ref={menuRef}
          className={`${style.divLinks} ${isOpen ? style.open : ""}`}
        >
          <NavLink to="/"  onClick={handleLinkClick}>
            Inicio
          </NavLink>

          <div className={style.productosDropdown}>
            <div
              className={style.dropdownTitle}
              onClick={() => setShowCat(!showCat)}
            >
              Productos <FaChevronDown />
            </div>

            {showCat && (
              <div className={style.dropdownMenu}>
                <NavLink to="/Productos" onClick={handleLinkClick}>
                  Ver todos
                </NavLink>
                <NavLink to="/categoria/mas-populares" onClick={handleLinkClick}>
                  Más populares
                </NavLink>
                <NavLink to="/categoria/mas-vendido" onClick={handleLinkClick}>
                  Más vendidos
                </NavLink>
                <NavLink to="/categoria/nuevos" onClick={handleLinkClick}>
                  Nuevos
                </NavLink>
              </div>
            )}
          </div>

          <CartWidget onClick={handleLinkClick} />
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
