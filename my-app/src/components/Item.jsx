import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {


  return (

    <Link to={`/Item/${producto.id}`}>Ver detalle</Link>

  )
}

export default Item;