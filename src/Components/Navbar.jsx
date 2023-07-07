import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open and closed
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Abhishek</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? < FaBars/> : < FaTimes/>}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" >
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/project" className="nav-link" onClick={closeMenu}>
              Project
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
