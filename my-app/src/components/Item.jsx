import style from "./styles/item.module.css";
import ItemCount from "./ItemCount";
import ItemButtoDetail from "./ItemButtoDetail";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CartContext";
import { useContext, useState } from "react";

function Item({ producto }) {
  const { addItem } = useContext(CardContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setPurchase(true);
  };

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

      {purchase ? (
        <Link
          to="/cart"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            border: "1px solid",
            padding: "5px",
          }}
        >
          Ir al carrito
        </Link>
      ) : (
        <ItemCount stock={producto.stock} onAdd={onAdd} />
      )}
      <h3>Stock: {producto.stock}</h3>
    </div>
  );
}

export default Item;
