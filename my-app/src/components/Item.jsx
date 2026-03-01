import style from "./styles/item.module.css";
import ItemCount from "./ItemCount";
import ItemButtoDetail from "./ItemButtoDetail";
import { Link } from "react-router-dom";
import { CardContext } from "../context/CartContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

function Item({ producto }) {
  const { addItem,getProductQuantity } = useContext(CardContext);
  const [purchase, setPurchase] = useState(false);

  const quantityInCart = getProductQuantity(producto.id);
  const availableStock = producto.stock - quantityInCart;

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setPurchase(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${producto.nombre} a tu carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000
    })
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
        <ItemCount stock={availableStock} onAdd={onAdd} />
      )}
      <h3>Stock: {availableStock}</h3>
    </div>
  );
}

export default Item;
