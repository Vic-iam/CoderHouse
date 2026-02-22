import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {
    const [cart, setCart]=useState([])


    const addItem = (item, qty) => {
        console.log(item,qty)
    }


    const clear = () =>{
        setCart([])
    }


    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart = (id) => {
         return cart.some((prod)=> prod.id !== id)
    }

    return (

        <>
        <CardContext.Provider 
        value={{cart, addItem, clear, removeItem, isInCart}}>
          {children}
        </CardContext.Provider>
        </>

    )
}