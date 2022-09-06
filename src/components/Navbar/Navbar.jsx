import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar-container'>
                <h1 className='navbar-title'>
                    DUROTAN
                </h1>
                <div className='navbar-links'>
                    <Link to="/" className='navbar-link'>
                        Home
                    </Link>
                    <Link to="/shop" className='navbar-link'>
                        Shop
                    </Link>
                    <Link to="/products" className='navbar-link'>
                        Product
                    </Link>
                    <Link to="/blog" className='navbar-link'>
                        Blog
                    </Link>
                    <Link to="/pages" className='navbar-link'>
                        Pages
                    </Link>
                </div>
                <div className='navbar-languages'>
                    EN FR
                </div>
                <div className='navbar-icons'>
                    <AiOutlineSearch />
                    <AiOutlineUser />
                    <AiOutlineShoppingCart />
                </div>
            </nav>
        </div>
    )
}

export default Navbar