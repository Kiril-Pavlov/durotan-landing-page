import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import HomeDropDown from './menu-drop-lists/HomeDropDown';
import PagesDropDown from './menu-drop-lists/PagesDropDown';
import ShopDropDown from './menu-drop-lists/ShopDropDown';
import BlogDropDown from './menu-drop-lists/BlogDropDown';
import ProductDropDown from './menu-drop-lists/ProductDropDown';

import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

import "./Navbar.css"

const Navbar = () => {
    const [openHome, setOpenHome] = useState(false);
    const [openShop, setOpenShop] = useState(false);
    const [openBlog, setOpenBlog] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    const [openProducts, setOpenProducts] = useState(false);
    const [openCart, setOpenCart] = useState(false);
 


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
    return (
        <div>
            <nav className='navbar-container'>
                <h1 className='navbar-title'>
                    DUROTAN
                </h1>
                <div className='navbar-links'>
                    <Link to="/" className='navbar-link' onMouseEnter={handleOpenHome} onMouseLeave={handleCloseHome}>
                        Home
                    </Link>
                    <Link to="/shop" className='navbar-link' onMouseEnter={handleOpenShop} onMouseLeave={handleCloseShop}>
                        Shop
                    </Link>
                    <Link to="/products" className='navbar-link' onMouseEnter={handleOpenProducts} onMouseLeave={handleCloseProducts}>
                        Product
                    </Link>
                    <Link to="/blog" className='navbar-link' onMouseEnter={handleOpenBlog} onMouseLeave={handleCloseBlog}>
                        Blog
                    </Link>
                    <Link to="/pages" className='navbar-link' onMouseEnter={handleOpenPages} onMouseLeave={handleClosePages}>
                        Pages
                    </Link>
                </div>
                <div className='navbar-languages'>
                    EN FR
                </div>
                <div className='navbar-icons'>
                    <AiOutlineSearch />
                    
                    <Link to="/contact" className='navbar-link'>
                    <AiOutlineUser />
                    </Link>
                    
                    <AiOutlineShoppingCart />
                </div>
            </nav>
            {openHome && <HomeDropDown />}
            {openProducts && <ProductDropDown />}
            {openShop && <ShopDropDown />}
            {openBlog && <BlogDropDown />}
            {openPages && <PagesDropDown />}
        </div>
    )
}

export default Navbar