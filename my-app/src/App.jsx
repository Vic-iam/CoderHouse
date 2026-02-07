import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contacto from "./routes/Contacto";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ItemList" element={<ItemListContainer />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Cart" element={<CartWidget />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
