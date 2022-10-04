import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import Search from "../Search/Search";
import Accordion from "../Acordion";

import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"

import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import brandNameLogo from "..//../assets/brand-name-logo.png";
import clothingLogo from "..//../assets/clothing-logo.png";
import gapLogo from "..//../assets/gap-logo.png";
import masoreLogo from "..//../assets/masore-logo.png";
import shopImg from "..//../assets/shop-drop-img.jpg";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleOpenCart() {
    setOpenCart(!openCart);
  }
  function handleCloseCart() {
    setOpenCart(!openCart);
  }
  function handleSearchClick() {
    setOpenSearch(true);
  }

  const handleOpenHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  let homeList = ` 
    <ul>
      <li>Home Page 1</li>
      <li>Home Page 2</li>
      <li>Home Page 3</li>
      <li>Home Page 4</li>
      <li>Home Page 5</li>
      <li>Home Page 6</li>
      <li>Home Page 7</li>
      <li>Home Page 8</li>
      <li>Home Page 9</li>
      <li>Home Page 10</li>
    </ul>
  `
  let shopList = `
  <ul>
    <li>Shop Page</li>
    <li>Shop Details</li>
    <li>Cart Page</li> 
  </ul>
  `

  let pagesList = `
  <ul>
    <li>404 Page</li>
    <li>About</li>
    <li>Cart</li> 
    <li>Checkout</li> 
    <li>Contact</li> 
    <li>Wishlist</li> 
  </ul>
  `

  let newsList = `
  <ul>
    <li>Blog</li>
    <li>Blog Single</li> 
  </ul>
  `
  

  return (
    <nav className="navbar-container">
      <div className="hamburger-button">
        <GiHamburgerMenu onClick={handleOpenHamburger} />
      </div>
      <div className="navbar-title">DUROTAN </div>
      <div className="navbar-links">
        <Dropdown className="d-inline mx-2 ">
          <Dropdown.Toggle
            id="dropdown-autoclose-true "
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
              top: 0,
            }}
          >
            {" "}
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              width: "1000px",
            }}
          >
            <div className="homeDropdown-container">
              <div className="dropDownContainer">
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>STYLES</h3>
                  </Dropdown.Item>

                  <ul>
                    <Dropdown.Item href="#">
                      <li>Default</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Modern</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Collections</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Dark skin </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Classic</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Best selling</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Sidebar</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Minibal</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Shopable</li>
                    </Dropdown.Item>
                  </ul>
                </div>
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>TOPIC</h3>
                  </Dropdown.Item>

                  <ul>
                    <Dropdown.Item href="#">
                      <li>Default</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Modern</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Collections</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Dark skin </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Classic</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Best selling</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Sidebar</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Minibal</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Shopable</li>
                    </Dropdown.Item>
                  </ul>
                </div>
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>BRANDS</h3>
                  </Dropdown.Item>

                  <div>
                    <Dropdown.Item href="#">
                      <div className="brands">
                        <img src={brandNameLogo} />
                        <img src={clothingLogo} />
                        <img src={gapLogo} />
                        <img src={masoreLogo} />
                      </div>
                    </Dropdown.Item>
                  </div>
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
              top: 0,
            }}
          >
            {" "}
            <Link to="/shop" className="navbar-link">
              Shop
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              width: "1000px",
            }}
          >
            <div className="homeDropdown-container">
              <div className="shopDropdown-container">
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>SHOP</h3>
                  </Dropdown.Item>

                  <ul>
                    <Dropdown.Item href="#">
                      <li>Default</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Modern</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Collections</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Dark skin </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Classic</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Best selling</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Sidebar</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Minibal</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Shopable</li>
                    </Dropdown.Item>
                  </ul>
                </div>
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>PRODUCT LAYOUT</h3>
                  </Dropdown.Item>

                  <ul>
                    <Dropdown.Item href="#">
                      <li>Default</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Modern</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Collections</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Dark skin </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Classic</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Best selling</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Sidebar</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Minibal</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Shopable</li>
                    </Dropdown.Item>
                  </ul>
                </div>
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>PRODUCT TYPES</h3>
                  </Dropdown.Item>

                  <ul>
                    <Dropdown.Item href="#">
                      <li>Default</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Modern</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Collections</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Dark skin </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Classic</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Best selling</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Sidebar</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Minibal</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Shopable</li>
                    </Dropdown.Item>
                  </ul>
                </div>
                <div>
                  <Dropdown.Item>
                    {" "}
                    <h3>OTHERS</h3>
                  </Dropdown.Item>

                  <ul>
                    <Dropdown.Item href="#">
                      <li>Default</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Full Width</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Modern</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Collections</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Dark skin </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Classic</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Best selling</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Sidebar</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Minibal</li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>Shopable</li>
                    </Dropdown.Item>
                  </ul>
                </div>
                <div className="imageShop">
                  <img src={shopImg} className="shopImg" />
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
              top: 0,
            }}
          >
            <Link to="/products" className="navbar-link">
              Product
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <ul>
              <Dropdown.Item href="#">
                <li>Product1</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product2</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product3</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product4</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product5</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product6</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product7</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product8</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product9</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Product10</li>
              </Dropdown.Item>
            </ul>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
              top: 0,
            }}
          >
            {" "}
            <Link to="/blog" className="navbar-link">
              Blog
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <ul>
              <Dropdown.Item href="#">
                <li>Full width</li>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <li>Blog post</li>
              </Dropdown.Item>
            </ul>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "relative",
              top: 0,
            }}
          >
            {" "}
            <Link to="/pages" className="navbar-link">
              Pages
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">
              <li>404</li>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <li>About</li>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <li>Cart</li>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <li>Checkout</li>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <li>Order complete</li>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <li>Contact</li>
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <li>Wish list</li>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="navbar-languages">EN FR</div>
      <div className="navbar-icons">
        <AiOutlineSearch
          onClick={() => handleSearchClick()}
        />

        <Link to="/contact" className="navbar-icon-link">
          <AiOutlineUser />
        </Link>

        <Link to="/cart" className="navbar-icon-link">
          <AiOutlineShoppingCart />
        </Link>
      </div>
      <Search
        closeSearch={() => setOpenSearch(false)}
        openSearchState={openSearch}
      />
      {/* "navbar-list navbar-list-active" */}
      <div className={isHamburgerOpen === true ? "navbar-list navbar-list-active" : "navbar-list"}>
        <div className="navbar-list-left" onClick={handleOpenHamburger}>

        </div>
        <div className="navbar-list-right">
          <div className="close-navbar-list-btn" onClick={handleOpenHamburger}>
            X
          </div>
          <h2 className="navbar-list-title">DUROTAN</h2>
          <div>
            <Accordion title="HOME" content={homeList}/>
            <Accordion title="ABOUT" content="" />
            <Accordion title="SHOP" content={shopList} />
            <Accordion title="PAGES" content={pagesList} />
            <Accordion title="NEWS" content={newsList} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
