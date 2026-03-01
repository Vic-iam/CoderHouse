import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from "./styles/EmptyCart.module.css"

const EmptyCart = () => {

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className={style.EmptyCartContainer}>

      <div className={style.EmptyCartStyle}>
        <div className={style.titleEmpty}>
          <h1>...Ohh parece que no has elegido ningun manga</h1>
        </div>
        <Link to="/Productos" onClick={handleLinkClick}>Compra tu manga favorito aca</Link>
      </div>
    </div>
  )
}

export default EmptyCart