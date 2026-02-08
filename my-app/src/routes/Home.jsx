import style from "./styles/Home.module.css";
import fondoBanner from "../assets/image/fondoManga.png"
import { useState } from "react";

function Home() {


  return (
    <div className={style.containerHome}>

      <div className={style.presentationHome}>

        <div className={style.titleHome}>

        <h1>Descubri los mejores mangas</h1>
        <p>Explora nuevas historias, generos y autores</p>

        </div>
      </div>


    </div>
  );
}

export default Home;
