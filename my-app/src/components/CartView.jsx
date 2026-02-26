import React, { useContext } from 'react'
import { CardContext } from '../context/CartContext'

const CartView = () => {

  const {cart, removeItem} = useContext(CardContext)

  return (
    <div style={{padding: "120px 100px", display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center"}}>
      <h1>Lista de compras</h1>

      <div>
        
        {

           cart.map((compra) => {
            <div key={compra.id} >


              <img src={compra.image} alt={compra.nombre} style={{width: "10rem"}}/>
              <p> {compra.nombre} </p>
              <p> {compra.precio} </p>
              <p> {compra.stock} </p>
              <p> precio final :%{compra.precio*compra.stock},00  </p>
              <button onClick={() => removeItem(compra.id)}>X</button>
          

            </div>
           })


        }


      </div>

    </div>
  )
}

export default CartView