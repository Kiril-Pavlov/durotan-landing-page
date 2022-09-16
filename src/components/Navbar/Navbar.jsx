import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeDropDown from "./menu-drop-lists/HomeDropDown";
import PagesDropDown from "./menu-drop-lists/PagesDropDown";
import ShopDropDown from "./menu-drop-lists/ShopDropDown";
import BlogDropDown from "./menu-drop-lists/BlogDropDown";
import ProductDropDown from "./menu-drop-lists/ProductDropDown";
import Cart from "../../pages/Cart/Cart";
import Search from "../Search/Search";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [openHome, setOpenHome] = useState(false);
  const [openShop, setOpenShop] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  function handleOpenHome() {
    setOpenHome(!openHome);
  }
  function handleCloseHome() {
    setOpenHome(!openHome);
  }
  function handleOpenShop() {
    setOpenShop(!openShop);
  }
  function handleCloseShop() {
    setOpenShop(!openShop);
  }
  function handleOpenProducts() {
    setOpenProducts(!openProducts);
  }
  function handleCloseProducts() {
    setOpenProducts(!openProducts);
  }
  function handleOpenBlog() {
    setOpenBlog(!openBlog);
  }
  function handleCloseBlog() {
    setOpenBlog(!openBlog);
  }
  function handleOpenPages() {
    setOpenPages(!openPages);
  }
  function handleClosePages() {
    setOpenPages(!openPages);
  }
  function handleOpenCart() {
    setOpenCart(!openCart);
  }
  function handleCloseCart() {
    setOpenCart(!openCart);
  }
  function handleSearchClick() {
    setOpenSearch(true);
  }
  return (
    <div>
      <nav className="navbar-container">
        <h1 className="navbar-title">DUROTAN</h1>
        <div className="navbar-links">
          <Link
            to="/"
            className="navbar-link"
            onMouseEnter={handleOpenHome}
            onMouseLeave={handleCloseHome}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="navbar-link"
            onMouseEnter={handleOpenShop}
            onMouseLeave={handleCloseShop}
          >
            Shop
          </Link>
          <Link
            to="/products"
            className="navbar-link"
            onMouseEnter={handleOpenProducts}
            onMouseLeave={handleCloseProducts}
          >
            Product
          </Link>
          <Link
            to="/blog"
            className="navbar-link"
            onMouseEnter={handleOpenBlog}
            onMouseLeave={handleCloseBlog}
          >
            Blog
          </Link>
          <Link
            to="/pages"
            className="navbar-link"
            onMouseEnter={handleOpenPages}
            onMouseLeave={handleClosePages}
          >
            Pages
          </Link>
        </div>
        <div className="navbar-languages">EN FR</div>
        <div className="navbar-icons">
          <AiOutlineSearch
            className="navbar-searchBtn"
            onClick={() => handleSearchClick()}
          />

          <Link to="/contact" className="navbar-link">
            <AiOutlineUser />
          </Link>

          <Link to="/cart" className="navbar-link">
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </nav>
      {openHome && <HomeDropDown />}
      {openProducts && <ProductDropDown />}
      {openShop && <ShopDropDown />}
      {openBlog && <BlogDropDown />}
      {openPages && <PagesDropDown />}
      {openCart && <Cart />}
      <Search
        closeSearch={() => setOpenSearch(false)}
        openSearchState={openSearch}
      />
    </div>
  );
};

export default Navbar;
