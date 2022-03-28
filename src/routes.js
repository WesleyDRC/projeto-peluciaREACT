import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import Contato from "./components/pages/Contato";
import Home from "./components/pages/Home";
import UrsosDePelucia from "./components/pages/UrsosDePelucia";
import CoracoesDePelucia from "./components/pages/CoracoesDePelucia";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WhatsApp from "./components/layout/WhatsApp";

function Rotas() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <WhatsApp />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contato />}></Route>
          <Route path="/ursos-de-pelucia" element={<UrsosDePelucia />}></Route>
          <Route
            path="/coracoes-de-pelucia"
            element={<CoracoesDePelucia />}
          ></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default Rotas;
