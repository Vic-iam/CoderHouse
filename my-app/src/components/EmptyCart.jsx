import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{padding: "120px 100px", display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center"}}>

      <h1>Tu carro esta vacio</h1>
      <Link to="/Productos">Compra aca </Link>

    </div>
  )
}

export default EmptyCart