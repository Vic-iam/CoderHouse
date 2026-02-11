import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../data/productos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    getOneProduct(id)
      .then(res => setDetail(res))
      .catch(err => console.log(err))
  }, [id])

  if (!detail) {
    return <p style={{padding:"120px 40px", textAlign:"center", fontSize: "1.5rem"}}>Cargando...</p>
  }

  return <ItemDetail detail={detail} />
}

export default ItemDetailContainer
