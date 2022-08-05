import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import Contato from "./components/pages/Contato";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ProductWanted from "./components/pages/ProductWanted";

function Rotas() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contato />}></Route>
          <Route path="filtro/:filtro" element={<Products />}></Route>
          <Route path="/busca/:filtro" element={<ProductWanted />} ></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default Rotas;
