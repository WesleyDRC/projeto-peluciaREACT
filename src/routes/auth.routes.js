import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "../components/layout/Container";
import Contato from "../components/pages/Contato";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbar/index";
import NotFound from "../components/pages/NotFound";
import Auth from "../components/pages/signin/Auth";
import ProductPage from "../components/pages/ProductPage";
import CartPage from "../components/pages/CartPage";

function AuthRoutes() {
  return (
    <Router>
          <Navbar />
          <Container customClass="min-height">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contato />}></Route>
              <Route path="/filtro/:filtro" element={<Products />}></Route>
              <Route path="/my-account" element={<Auth />}></Route>
              <Route path="/product/:id" element={<ProductPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </Container>
          <Footer />
    </Router>
  );
}

export default AuthRoutes;
