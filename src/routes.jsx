// routes.jsx

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy";
import FAQ from "./pages/Faq/Faq";
import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/ProductList/Products";
import Contact from "./pages/Contact/Contact";
//import ProductCard from "./pages/ProductCard/ProductCard";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/return-policy" element={<ReturnPolicy />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;
