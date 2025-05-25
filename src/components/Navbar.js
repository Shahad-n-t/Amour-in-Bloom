import React, { useState } from 'react';
import logo from "../images/headers/logo.jpg"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>



  return (
    <nav className={`navbar ${menuOpen? "open" : ""}`}>
      <a href='/' className='logo'>
      <img src={logo} alt='Amour in Bloom logo'/>
      </a>
      

      <ul className={`nav-links ${menuOpen ? "visible" : "" }`}>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/'>About</a>
        </li>
        <li>
            <a href='/'>Contact Us</a>
        </li>
        <li>
            <a href='/'>Categories</a>
        </li>
        <li>
            <a href='/'>Shopping Cart</a>
        </li>
        <li>
            <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;