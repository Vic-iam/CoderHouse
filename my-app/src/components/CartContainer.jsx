import React, { useContext, useEffect, useState } from 'react'
import { CardContext } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'
import Loading from './Loading'

const CartContainer = () => {

  const { cart } = useContext(CardContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  })

  return (

    <>

      {isLoading
        ?
        <Loading text={"Cargando datos..."} />
        :
        cart.lenght
        ? <CartView />
        : <EmptyCart />
      }

    </>


  )
}

export default CartContainer