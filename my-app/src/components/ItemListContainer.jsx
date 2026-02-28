import { useEffect, useState } from "react";
import style from "./styles/ItemListContainer.module.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemListContainer() {
  const { type } = useParams();
  const [tumanga, setTumanga] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const manCollection = type ? query(collection(db, "productos"), where("categoria", "==", type)): collection(db, "productos")
    getDocs(manCollection)
    .then((res)=> {
      const list = res.docs.map((doc) =>{
        return {
          id:doc.id,
          ...doc.data()
        }
      })
      setTumanga(list)
    })
    .catch((error)=>(error))
    .finally(()=> setLoading(false))
  },[type])



  return (
    <div className={style.itemListContainerr}>
      <div className={style.titleListContainer}>
        <h1>Lista de productos</h1>
      </div>

      {loading ? (
        <Loading
          text={type ? "Cargando categoria..." : "Cargando productos..."}
        />
      ) : (
        <ItemList productos={tumanga} />
      )}
    </div>
  );
}

export default ItemListContainer;
