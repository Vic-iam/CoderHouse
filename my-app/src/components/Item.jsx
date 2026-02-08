import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./styles/Item.module.css"

const Item = ({ producto }) => {


  return (

  
    <div className={style.verDetalle}>
      <Link 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={`/Item/${producto.id}` }>Ver detalle</Link>

    </div>

  )
}

export default Item;