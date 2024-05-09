import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Nav.css";
import '../styles/darkmode.css';

// Component for the navigation bar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State variable to track whether the menu is open or closed

  // Function to toggle between open and closed menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? 'line line1 open' : 'line'}></div>
        <div className={isOpen ? 'line line2 open' : 'line'}></div>
        <div className={isOpen ? 'line line3 open' : 'line'}></div>
      </div>
      {/* Menu links */}
      <div className={isOpen ? 'menu open' : 'menu'}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Me</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;