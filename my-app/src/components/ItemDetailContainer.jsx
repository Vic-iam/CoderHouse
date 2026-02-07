import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../data/productos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  
  const { id } = useParams()
  const [detail, setDetail] = useState({})
  
  useEffect(() => {
    getOneProduct(id)
    .then((res)=> setDetail(res))
    .catch((err)=> console.log(err))
  }, [id])
  
  if (!detail) return <p style={{display:"flex",padding: "100px 40px"
  }}>Cargando...</p>

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer