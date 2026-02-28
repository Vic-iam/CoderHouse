import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/CartContext";
import CartView from "./CartView";
import EmptyCart from "./EmptyCart";
import Loading from "./Loading";

const CartContainer = () => {

  const { cart } = useContext(CardContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading
        ? <Loading text={"Cargando datos..."} />
        : cart.length > 0
          ? <CartView />
          : <EmptyCart />
      }
    </>
  )
}


export default CartContainer;
