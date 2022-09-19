import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import Pages from "./pages/Pages/Pages";
import Products from "./pages/Product/Products";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Navigate } from "react-router";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
       {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Search/>
      <Footer />
    </div>
  );
}

export default App;
