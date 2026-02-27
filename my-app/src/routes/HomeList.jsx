import style from "./styles/Home.module.css";
import Goku from "../assets/image/goku3.png";
import { Link } from "react-router-dom";

function Home() {

    const handleLinkClick = () => { 
    setIsOpen(false);
    setShowCat(false); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.containerHome}>
      <div className={style.presentationHome}>
        <div className={style.borderPresentation}>
          <div className={style.imagePresentation}>
            <img src={Goku} alt="Goku" />
          </div>
          <div className={style.titleHome}>
            <h1>Descubri los mejores mangas</h1>
            <p>Explora nuevas historias, generos y autores</p>
            <Link to="/Productos" onClick={handleLinkClick}>Ver productos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
