import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const [invalid, setInvalid] = useState(null)

  useEffect(() => {
    const manDetail= doc(db, "productos", id)
    getDoc(manDetail)
    .then((res) => {
      if(res.data()){
        setDetail({id:res.id, ...res.data()})
      }else
        setInvalid(true)
    })
    .catch((err)=> (err))
    .finally(()=> setLoading(false)) 
  },[id])

  if(invalid){
    return(
      <div style={{display: "flex", justifyContent: "center",alignItems: "center",flexDirection: "column",gap: "10px", padding: "140px", height: "95vh", textAlign: "center"}}>
        <h2>El manga no existe</h2>
        <Link to="/productos">Regresar</Link>
      </div>
    )
  }


  return (
    
    <div>
      
      { loading ? <Loading text={"Cargando detalles..." } /> : <ItemDetail detail={detail} />}

    </div>
    
  ) 
    
}

export default ItemDetailContainer
