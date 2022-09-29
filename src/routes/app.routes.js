import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "../components/layout/Container";
import Home from "../components/pages/Home";
import Contato from "../components/pages/Contato";
import Products from "../components/pages/Products";
import NotFound from "../components/pages/NotFound";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbarprivate/index";
import DashBoard from "../components/pages/dashboard/Dashboard";
import ProductPage from "../components/pages/ProductPage";
import CartPage from "../components/pages/CartPage";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contato />}></Route>
          <Route exact path="filtro/:filtro" element={<Products />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route exact path="/my-account" element={<DashBoard />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
