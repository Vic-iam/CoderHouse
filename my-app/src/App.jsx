import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contacto from "./routes/Contacto";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import ItemDetail from "./components/ItemDetail";
import Error from "./components/Error";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ItemList" element={<ItemListContainer />} />
        <Route path="/Item" element={<ItemListContainer />} />
        
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Cart" element={<CartWidget />} />
        <Route path="/ItemDetail" element={<ItemDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
