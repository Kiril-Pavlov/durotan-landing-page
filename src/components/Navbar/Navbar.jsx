import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <h1 className='navbar-title'>
            DUROTAN
        </h1>
        <div className='navbar-links'>
            <Link to="/">
                Home
            </Link>
            <Link to="/shop">
                Shop
            </Link>
            <Link to="/products">
                Product
            </Link>
            <Link to="/blog">
                Blog
            </Link>
            <Link to="/pages">
                Pages
            </Link>
        </div>
        <div className='navbar-languages'>
            EN FR
        </div>
        <div className='navbar-user'>
            react icons
        </div>
    </nav>
  )
}

export default Navbar