import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from "./styles/EmptyCart.module.css"
import { HiEmojiSad } from "react-icons/hi";

const EmptyCart = () => {

    const handleLinkClick = () => { 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className={style.EmptyCartContainer}>
    
    <div className={style.titleEmpty}>
      <h1>...Ohh parece que no has elegido ningun manga<HiEmojiSad /></h1>
    </div>

      <Link to="/Productos" onClick={handleLinkClick}>Compra tu manga favorito aca</Link>

    </div>
  )
}

export default EmptyCart