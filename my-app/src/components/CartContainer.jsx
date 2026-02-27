import React, { useContext } from 'react'
import { CardContext } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const CartContainer = () => {

  const {cart} = useContext(CardContext)

  return (

    <>
    
     {
      cart.length 
      ? <CartView />
      : <EmptyCart />
     }
    
    </>


  )
}

export default CartContainer