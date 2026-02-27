import React, { useContext, useState } from "react";
import style from "./styles/ItemDetail.module.css";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CardContext } from "../context/CartContext";

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CardContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
  };

  return (
    <div className={style.containerItem}>
      <div className={style.cardManga}>
        <div className={style.LinkStyle}>
          <Link
            to="/Productos"
            className={style.icon}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <GoChevronLeft /> Regresar
          </Link>
        </div>
        <div className={style.imgStyle}>
          <img src={detail.image} />
        </div>
        <h1>{detail.nombre}</h1>
        <p>Precio: ${detail.precio}</p>
        <p>Volumen: {detail.volumen} </p>
        <p>Genero: {detail.genero?.join(",")} </p>
        {purchase ? (
          <Link
            to="/cartView"
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
          <ItemCount stock={detail.stock} onAdd={onAdd} />
        )}
        <p style={{ textAlign: "center", opacity: "0.8" }}>
          Stock: {detail.stock}
        </p>
      </div>

      <div className={style.textInformation}>
        <h2>{detail.detalle} </h2>
      </div>
    </div>
  );
};

export default ItemDetail;
