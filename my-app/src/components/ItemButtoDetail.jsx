import React from 'react'
import style from "./styles/ItemButtoDetail.module.css"
import { Link } from 'react-router-dom'

const ItemButtoDetail = ({ producto }) => {
  return (
        <div className={style.verDetalle}>
          <Link 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={`/Item/${producto.id}` }>Ver detalle</Link>
    
        </div>
  )
}

export default ItemButtoDetail