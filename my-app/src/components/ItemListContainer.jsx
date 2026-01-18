import React from 'react';
import styles from './styles/ItemListContainer.module.css';

function ItemListContainer({ name }) {
  return (
    //Prueba de props
    <div className={styles.itemListContainer}>
      <h1>Hola, {name}</h1>
    </div>
  );
}

export default ItemListContainer;