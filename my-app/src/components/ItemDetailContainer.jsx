import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../data/productos'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOneProduct(id)
      .then(res => setDetail(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [id])



  return (
    
    <div>
      
      { loading ? <Loading text={"Cargando detalles..." } /> : <ItemDetail detail={detail} />}

    </div>
    
  ) 
    
}

export default ItemDetailContainer
