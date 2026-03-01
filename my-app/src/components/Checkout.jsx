import { useContext, useState, useEffect } from "react";
import style from "./styles/Chekout.module.css";
import { CardContext } from "../context/CartContext";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";
import Loading from "./Loading";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cart, total, clear } = useContext(CardContext);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const terminarCompra = async (data) => {
    const { name, lastName, address, mail, secondMail } = data;

    if (!name || !lastName || !address || !mail || !secondMail) {
      setError("Por favor complete todos los datos");
      return;
    }

    if (mail !== secondMail) {
      setError("Los correos no coinciden");
      return;
    }

    setIsLoading(true);
    setError(null);

    const order = {
      comprador: { name, lastName, address, mail },
      carrito: cart,
      total: total(),
      fecha: serverTimestamp(),
    };

    try {
      const orderCollection = collection(db, "orders");
      const res = await addDoc(orderCollection, order);
      setOrderId(res.id);

      for (const item of cart) {
        const productRef = doc(db, "productos", item.id);
        await updateDoc(productRef, {
          stock: item.stock - item.cantidad
        });
      }

      clear();
    } catch (err) {
      console.error(err);
      setError("Error al generar la orden");
    } finally {
      setIsLoading(false);
    }
  };

  if (!cart.length && !orderId) return <EmptyCart />;

  return (
    <>
      {isLoading ? (
        <Loading text="...Cargando compra" />
      ) : orderId ? (
        <div className={style.shop}>
          <div className={style.shopStyle}>
            <h2>Muchas gracias por comprar</h2>
            <h3>Su orden es: {orderId}</h3>
            <Link to="/productos">Volver a comprar</Link>

          </div>
        </div>
      ) : (
        <div className={style.fondo}>
          <div className={style.formContainer}>
            <h1>Completar los datos de compra</h1>
            {error && <span style={{ color: "red", padding: "10px", fontSize: "0.8rem" }}>{error}</span>}

            <form className={style.formStyle} onSubmit={handleSubmit(terminarCompra)}>
              <div className={style.banner}>
                {errors?.name?.type === "required" && <span>Nombre obligatorio</span>}
                {errors?.name?.type === "minLength" && <span>El nombre minimo necestia 4 caracteres</span>}
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Escribe tu nombre"
                  {...register("name", { required: true, minLength: 4 })}
                />
              </div>

              <div className={style.banner}>
                {errors?.lastName?.type === "required" && <span>Apellido obligatorio</span>}
                {errors?.lastName?.type === "minLength" && <span>El apellido necesita 8 caracteres</span>}
                <label>Apellido</label>
                <input
                  type="text"
                  placeholder="Escribe tu apellido"
                  {...register("lastName", { required: true, minLength: 8 })}
                />
              </div>

              <div className={style.banner}>
                {errors?.address?.type === "required" && <span>Dirección obligatoria</span>}
                {errors?.address?.type === "minLength" && <span>La dirección es demasiada corta</span>}
                {errors?.address?.type === "maxLength" && <span>La direccion es demasiada larga</span>}
                <label>Dirección</label>
                <input
                  type="text"
                  placeholder="Escribe tu dirección"
                  {...register("address", { required: true, minLength: 8, maxLength: 30 })}
                />
              </div>

              <div className={style.banner}>
                {errors?.mail?.type === "required" && <span>Correo obligatorio</span>}
                <label>Correo</label>
                <input
                  type="email"
                  placeholder="Escribe tu correo"
                  {...register("mail", { required: true })}
                />
              </div>

              <div className={style.banner}>
                {errors?.secondMail?.type === "required" && <span>Correo obligatorio</span>}
                {errors?.secondMail?.type === "equalsMail" && <span>Los correos no coinciden</span>}
                <label>Repetir correo</label>
                <input
                  type="email"
                  placeholder="Escribe otra vez tu correo"
                  {...register("secondMail", { required: true, validate: { equalsMail: mil2 => mil2 === getValues().mail } })}
                />
              </div>

              <div className={style.btnCompra}>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Comprando..." : "Compra completada"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
