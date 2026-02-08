import React, {useState} from "react";
import style from "./styles/ItemListContainer.module.css";
import { Link } from "react-router-dom";

import tumanga from "../data/productos.jsx";
import ItemCount from "./ItemCount.jsx";
import Item from "./Item.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterGenre from "./FilterGenre.jsx";

function ItemListContainer() {
  const [search, setSearch] = useState("");
  const [genero, setGenero] = useState("");

  const filtrados = tumanga.filter((m) => {
    const matchTitulo = m.nombre.toLowerCase().includes(search.toLowerCase());

    const matchGenero = genero === "" || m.genero === genero;

    return matchTitulo && matchGenero;
  });

  return (
    <div className={style.itemListContainer}>
      <div className={style.titleListContainer}>
        <h1>Lista de productos</h1>
      </div>

      <div className={style.inputContainer}>

      <SearchBar value={search} onchange={setSearch} />
      <FilterGenre genero={genero} setGenero={setGenero}/>

      </div>

      <div className={style.containerManga}>
        {tumanga.map((producto) => (
          <div className={style.mangaCard} key={producto.id}>
            <h4> {producto.titulo} </h4>
            <div className={style.imageManga}>
              <img src={producto.image} alt={producto.nombre} />
            </div>

            <div className={style.infoManga}>
              <h2>{producto.nombre}</h2>
              <h4> {producto.detalle} </h4>
              <div className={style.genero}></div>
              <p>Volumen: {producto.volumen}</p>
              <p>Precio: ${producto.precio}</p>
              <Item producto={producto} />
            </div>

            <ItemCount stock={producto.stock} />
            <h3>Stock: {producto.stock}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
