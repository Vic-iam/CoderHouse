import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contacto from "./routes/Contacto";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from "./components/Error";

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<ItemListContainer />} />

        <Route path="/Item/:id" element={<ItemDetailContainer />} />

        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Cart" element={<CartWidget />} />

        <Route path="*" element={<Error />} />

      </Routes>

      <Footer />
      
    </>
  );
}

export default App;
