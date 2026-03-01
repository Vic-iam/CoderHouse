import React from "react";
import style from "./styles/Chekout.module.css";

const Chekout = () => {
  return (
    <div className={style.formContainer}>

     <h1>Completar los datos de compra</h1>

      <div className={style.formStyle}>
        <div className={style.banner}>
          <label>Escribe tu nombre</label>
          <input placeholder="Escribe tu nombre" type="text" alt="text" />
        </div>
        <div className={style.banner}>
          <label>Escribe tu apellido</label>
          <input placeholder="Escribe tu apellido" type="text" alt="text" />
        </div>
        <div className={style.banner}>
          <label>Escribe tu direccion</label>
          <input placeholder="Escribe tu direccion" type="text" alt="text" />
        </div>
        <div className={style.banner}>
          <label>Escribe tu correo</label>
          <input placeholder="Escribe tu correo" type="text" alt="text" /> 
        </div>
        <div className={style.banner}>
          <label>Repite el correo</label>
          <input placeholder="Repite el correo" type="text" alt="text" />
        </div>
      </div>
      <div className={style.btnCompra}>
        <button>Completar compra</button>
      </div>
    </div>
  );
};

export default Chekout;
