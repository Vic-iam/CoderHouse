import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, cantidad: prod.cantidad + qty };
          } else {
            return prod;
          }
        }),
      );
    } else {
      setCart([...cart, { ...item, cantidad: qty }]);
    }
  };

  const updateQuantity = (id, qty) => {
  setCart(
    cart.map((prod) =>
      prod.id === id
        ? { ...prod, cantidad: qty }
        : prod
    )
  );
};

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const total = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  };

  const cartCantidad = () => {
    return cart.reduce((acc, prod) => acc + (prod.cantidad || 0), 0);
  };

  return (
    <>
      <CardContext.Provider
        value={{
          cart,
          addItem,
          clear,
          removeItem,
          isInCart,
          total,
          cartCantidad,
          updateQuantity,
        }}
      >
        {children}
      </CardContext.Provider>
    </>
  );
};
