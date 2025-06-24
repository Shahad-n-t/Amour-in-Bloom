import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import logo from "../images/headers/logo.jpg"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>



  return (
    <nav className={`navbar ${openMenu? "open" : ""}`}>
      <a href='/' className='logo'>
      <img src={logo} alt='Amour in Bloom logo'/>
      </a>
      

      <ul className={`nav-links ${openMenu ? "visible" : "" }`}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/About'>About</Link>
        </li>
        <li>
            <Link to='/Categories'>Categories</Link>
        </li>
        <li>
            <Link to='/ContactUs'>Contact us</Link>
        </li>
        <li>
             <Link to='/ShoppingCart'>Shopping Cart</Link>
        </li>
        <li>
            <Link to='/TrackOrder'>Track my Order</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;