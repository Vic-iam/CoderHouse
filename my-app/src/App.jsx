import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import CartWidget from "./components/CartWidget";
import Error from "./components/Error";

import { CardProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import CartView from "./components/CartView";
import HomeListContainer from "./routes/HomeList.Container";
import Chekout from "./components/Chekout";

function App() {
  return (
    <>
      <CardProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeListContainer />} />

          <Route path="/Productos" element={<ItemListContainer />} />

          <Route path="/Item/:id" element={<ItemDetailContainer />} />

          <Route path="/categoria/:type" element={<ItemListContainer />} />

          <Route path="/cart" element={<CartContainer />} />
 
          <Route path="/cartView" element={<CartView />} />

          <Route path="/cartWidget" element={<CartWidget />} />

          <Route path="/chekout" element={<Chekout />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </CardProvider>
    </>
  );
}

export default App;
