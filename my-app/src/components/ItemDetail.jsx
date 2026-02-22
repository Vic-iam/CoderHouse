import React, { useContext } from "react";
import style from "./styles/ItemDetail.module.css";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CardContext } from "../context/CartContext";

const ItemDetail = ({ detail }) => {
  const {cart , addItem } = useContext(CardContext);

  console.log(context);

  const onAdd = (cantidad) => {
    console.log(`Agregaste del ${detail.nombre}, ${cantidad} unidades `);
    addItem(detail, cantidad);
  };

  if (!detail) return <p>Cargando...</p>;

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
        <ItemCount stock={detail.stock} onAdd={onAdd} />
        <p style={{ textAlign: "center", opacity: "0.8" }}>
          Stock: {detail.stock}{" "}
        </p>
      </div>

      <div className={style.textInformation}>
        <h2>{detail.detalle} </h2>
      </div>
    </div>
  );
};

export default ItemDetail;
