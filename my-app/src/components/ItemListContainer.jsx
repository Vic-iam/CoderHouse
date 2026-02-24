import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../data/productos";
import style from "./styles/ItemListContainer.module.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function ItemListContainer() {
 
  const { type } = useParams();
  const [tumanga, setTumanga] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);

    const request = type
      ? getProductsByCategory(type)
      : getProducts();

    request
      .then(res => setTumanga(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));

  }, [type]);


  return (
    <div className={style.itemListContainerr}>
      <div className={style.titleListContainer}>
        <h1>Lista de productos</h1>
      </div>

     {
      loading 
      ? <Loading text={type ? "Cargando categoria..." : "Cargando productos..."}/> 
      : 

         <ItemList productos={tumanga} />

    
     }
      
    </div>
  );
}

export default ItemListContainer;
