import style from "./styles/item.module.css";
import ItemCount from "./ItemCount";
import ItemButtoDetail from "./ItemButtoDetail";

function Item({ producto, onAdd }) {
  return (
    <div className={style.mangaCard}>

      <div className={style.imageManga}>
        <img src={producto.image} alt={producto.nombre} />
      </div>

      <div className={style.infoManga}>
        <h2>{producto.nombre}</h2>
        <h4>{producto.detalle}</h4>
        <p>Volumen: {producto.volumen}</p>
        <p>Precio: ${producto.precio}</p>
        <ItemButtoDetail producto={producto} />
      </div>

      <ItemCount stock={producto.stock} onAdd={onAdd}/>
      <h3>Stock: {producto.stock}</h3>
    </div>
  );
}

export default Item;
