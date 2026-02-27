import style from "./styles/Home.module.css";
import Goku from "../assets/image/goku3.png"

function HomeList() {


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

          </div>

        </div>

      </div>


      <div>



      </div>


    </div>
  );
}

export default HomeList;
