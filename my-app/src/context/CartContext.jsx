import { createContext, useState } from "react";

export const cardContext = createContext();

export const cardProvider = ({children}) => {
    const [cart, setCart]=useState([])


    return (

        <>
        <cardContext.Provider value={{cart}}>
          {children}
        </cardContext.Provider>
        </>

    )
}