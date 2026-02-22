import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Footer from "./components/Footer";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import CartWidget from "./components/CartWidget";
import Error from "./components/Error";

import { cardProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <cardProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Productos" element={<ItemListContainer />} />

          <Route path="/Item/:id" element={<ItemDetailContainer />} />

          <Route path="/categoria/:type" element={<ItemListContainer />} />

          <Route path="/Cart" element={<CartWidget />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </cardProvider>
    </>
  );
}

export default App;
