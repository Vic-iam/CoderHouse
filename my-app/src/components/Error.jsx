import React from 'react'
import style from "./styles/Error.module.css"
import lupa from "../assets/image/lupa.png"

const Error = () => {
  return (

    <div className={style.errorContainer}>

    <h2>Error....Busqueda no encontrada</h2>

   <div className={style.lupaStyle}>

    <img src={lupa} alt='Error' />

   </div>

    </div>

  )
}

export default Error