import dandadan1 from "../assets/image/dandadan01.png";
import dandadan2 from "../assets/image/dandadan02.png";
import dandadan3 from "../assets/image/dandadan03.png";
import dandadan4 from "../assets/image/dandadan04.png";
import dandadan5 from "../assets/image/dandadan05.png";
import dandadan6 from "../assets/image/dandadan06.png";

const mangas = [
  {
    id: 1,
    nombre: "Dandadan",
    volumen: 1,
    precio: 9500,
    image: dandadan1,
    stock: 6,
    detalle: "Dandadan o dan da dan es una serie de manga japonés escrita e ilustrada por Yukinobu Tatsu. Se publica en la aplicación y web Shōnen Jump+ de Shūeisha desde el 6 de abril de 2021. Shūeisha también publica sus entregas en la web y app Manga Plus en español e inglés. Una adaptación a serie anime de televisión producida por Science Saru se estrenó el 4 de octubre de 2024.",
  },
  {
    id: 2,
    nombre: "Dandadan",
    volumen: 2,
    precio: 9500,
    image: dandadan2,
    stock: 4,
    detalle: "Dandadan o dan da dan es una serie de manga japonés escrita e ilustrada por Yukinobu Tatsu. Se publica en la aplicación y web Shōnen Jump+ de Shūeisha desde el 6 de abril de 2021. Shūeisha también publica sus entregas en la web y app Manga Plus en español e inglés. Una adaptación a serie anime de televisión producida por Science Saru se estrenó el 4 de octubre de 2024.",
  },
  {
    id: 3,
    nombre: "Dandadan",
    volumen: 3,
    precio: 9500,
    image: dandadan3,
    stock: 9,
    detalle: "Dandadan o dan da dan es una serie de manga japonés escrita e ilustrada por Yukinobu Tatsu. Se publica en la aplicación y web Shōnen Jump+ de Shūeisha desde el 6 de abril de 2021. Shūeisha también publica sus entregas en la web y app Manga Plus en español e inglés. Una adaptación a serie anime de televisión producida por Science Saru se estrenó el 4 de octubre de 2024.",
  },
  {
    id: 4,
    nombre: "Dandadan",
    volumen: 4,
    precio: 9500,
    image: dandadan4,
    stock: 4,
    detalle: "Dandadan o dan da dan es una serie de manga japonés escrita e ilustrada por Yukinobu Tatsu. Se publica en la aplicación y web Shōnen Jump+ de Shūeisha desde el 6 de abril de 2021. Shūeisha también publica sus entregas en la web y app Manga Plus en español e inglés. Una adaptación a serie anime de televisión producida por Science Saru se estrenó el 4 de octubre de 2024.",
  },
  {
    id: 5,
    nombre: "Dandadan",
    volumen: 5,
    precio: 9500,
    image: dandadan5,
    stock: 6,
    detalle: "Dandadan o dan da dan es una serie de manga japonés escrita e ilustrada por Yukinobu Tatsu. Se publica en la aplicación y web Shōnen Jump+ de Shūeisha desde el 6 de abril de 2021. Shūeisha también publica sus entregas en la web y app Manga Plus en español e inglés. Una adaptación a serie anime de televisión producida por Science Saru se estrenó el 4 de octubre de 2024.",
  },
  {
    id: 6,
    nombre: "Dandadan",
    volumen: 6,
    precio: 9500,
    image: dandadan6,
    stock: 3,
    detalle: "Dandadan o dan da dan es una serie de manga japonés escrita e ilustrada por Yukinobu Tatsu. Se publica en la aplicación y web Shōnen Jump+ de Shūeisha desde el 6 de abril de 2021. Shūeisha también publica sus entregas en la web y app Manga Plus en español e inglés. Una adaptación a serie anime de televisión producida por Science Saru se estrenó el 4 de octubre de 2024.",
  },
];

export default mangas;

let error = false;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error");
      } else {
        resolve(mangas);
      }
    }, 3000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mang = mangas.find((man) => man.id === Number(id));

      if (mang) {
        resolve(mang);
      } else {
        reject("El producto no existe");
      }
    }, 1);
  });
};
