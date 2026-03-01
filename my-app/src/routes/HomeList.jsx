import style from "./styles/Home.module.css";
import Goku from "../assets/image/goku3.png";
import { Link } from "react-router-dom";

function HomeList() {
  return (
    <div className={style.containerHome}>

      <section className={style.presentationHome}>
        <div className={style.borderPresentation}>

          <div className={style.imagePresentation}>
            <img src={Goku} alt="Goku" />
          </div>

          <div className={style.titleHome}>
            <h1>Descubrí los mejores mangas</h1>
            <p>Explorá nuevas historias, géneros y autores</p>

            <Link to="/productos" className={style.ctaButton}>
              Ver Catálogo
            </Link>
          </div>

        </div>
      </section>

      <section className={style.categoriesSection}>
        <h2>Categorías Populares</h2>

        <div className={style.categoriesGrid}>
          <div className={style.categoryCard}>Shonen</div>
          <div className={style.categoryCard}>Seinen</div>
          <div className={style.categoryCard}>Shojo</div>
          <div className={style.categoryCard}>Isekai</div>
        </div>
      </section>

      <section className={style.featureSection}>
        <h2>Mangas Destacados</h2>
        <p>Los títulos más vendidos del momento</p>
      </section>

    </div>
  );
}

export default HomeList;
