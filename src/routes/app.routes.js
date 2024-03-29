import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "../components/layout/Container";
import Home from "../components/pages/Home";
import Contato from "../components/pages/Contato";
import Products from "../components/pages/Products";
import NotFound from "../components/pages/NotFound";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/navbarprivate/index";
import ProductPage from "../components/pages/ProductPage";
import CartPage from "../components/pages/CartPage";
import FinalizeOrder from "../components/pages/FinalizeOrder";
import Success from "../components/pages/Success";

import MyAccount from "../components/pages/MyAccount";
import Address from "../components/pages/Address";
import Password from "../components/pages/Password";

import Purchase from "../components/pages/Purchase";
import PurchaseAll from "../components/pages/PurchaseAll";

function AppRoutes() {
  return (
    <Router>
          <Navbar />
          <Container customClass="min-height">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contato />}></Route>
              <Route path="/filtro/:filtro" element={<Products />}></Route>
              <Route path="/my-account/profile" element={<MyAccount />}></Route>
              <Route path="/my-account/address" element={<Address />}></Route>
              <Route path="/my-account/password" element={<Password />}></Route>
              <Route path="/my-account/purchase" element={<Purchase />}></Route>
              <Route path="/my-account/purchase/all" element={<PurchaseAll />}></Route>
              <Route path="/product/:id" element={<ProductPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/finalize-order" element={<FinalizeOrder />}></Route>
              <Route path="/ordersuccess" element={<Success />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </Container>
          <Footer />
    </Router>
  );
}

export default AppRoutes;
