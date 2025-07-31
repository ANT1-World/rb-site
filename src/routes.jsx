import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";
import Distributors from "./pages/distributors";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/a-fonte" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/distribuidores" element={<Distributors />} />
    </Routes>
  );
}
