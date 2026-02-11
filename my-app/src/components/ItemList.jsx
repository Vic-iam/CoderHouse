import Item from "./Item";
import style from "./styles/ItemList.module.css";

const ItemList = ({ productos }) => {
  return (
    <div className={style.containerManga}>
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
