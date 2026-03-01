import React, { useContext, useState, useEffect } from "react";
import style from "./styles/Chekout.module.css";
import { CardContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";
import Loading from "./Loading";

const Chekout = () => {

  const [buyer, setBuyer] = useState({});
  const [secondMail, setSecondMail] = useState("");
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { cart, total, clear } = useContext(CardContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const buyerData = (e) => {
    setBuyer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const terminarCompra = (e) => {
    e.preventDefault();

    if (!buyer.nombre || !buyer.sendNombre || !buyer.mail || !buyer.address) {
      setError("Por favor complete todos los datos");
      return;
    }

    if (buyer.mail !== secondMail) {
      setError("Los correos no coinciden");
      return;
    }

    setIsLoading(true);
    setError(null);

    let order = {
      comprador: buyer,
      carrito: cart,
      total: total(),
      fecha: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch(() => setError("Error al generar la orden"))
      .finally(() => setIsLoading(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {isLoading ? (
        <Loading text="...Cargando compra" />
      ) : orderId ? (
        <div style={{ padding: "140px 100px" }}>
          <h2>Muchas gracias por comprar</h2>
          <h3>Su orden es: {orderId}</h3>
        </div>
      ) : (
        <div className={style.formContainer}>
          <h1>Completar los datos de compra</h1>
          {error && <span>{error}</span>}

          <form className={style.formStyle} onSubmit={terminarCompra}>

            <div className={style.banner}>
              <label>Nombre</label>
              <input
                name="nombre"
                placeholder="Escribe tu nombre"
                type="text"
                onChange={buyerData}
              />
            </div>

            <div className={style.banner}>
              <label>Apellido</label>
              <input
                name="sendNombre"
                placeholder="Escribe tu apellido"
                type="text"
                onChange={buyerData}
              />
            </div>

            <div className={style.banner}>
              <label>Dirección</label>
              <input
                name="address"
                placeholder="Escribe tu direccion"
                type="text"
                onChange={buyerData}
              />
            </div>

            <div className={style.banner}>
              <label>Correo</label>
              <input
                name="mail"
                type="email"
                placeholder="Escribte tu correo"
                onChange={buyerData}
              />
            </div>

            <div className={style.banner}>
              <label>Repetir correo</label>
              <input
                type="email"
                placeholder="Escribe otra vez tu correo"
                onChange={(e) => setSecondMail(e.target.value)}
              />
            </div>

            <div className={style.btnCompra}>
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Comprando..." : "Compra completada"}
              </button>
            </div>

          </form>
        </div>
      )}
    </>
  );
};

export default Chekout;
