import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Contacto from "./routes/Contacto";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
