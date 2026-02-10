import React from "react";
import style from "./styles/ItemDetail.module.css";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detail }) => {
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
        <ItemCount  stock={detail.stock}/>
        <p style={{textAlign: "center", opacity: "0.8"}}>Stock: {detail.stock} </p>
      </div>

      <div className={style.textInformation}>
        <h2>{detail.detalle} </h2>
      </div>
    </div>
  );
};

export default ItemDetail;
