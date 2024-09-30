import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Nav.css";
import '../styles/darkmode.css';

// Component for the navigation bar
const Navbar = ({ isOpen, toggleMenu, closeMenu }) => { // Accept props
  return (
    <nav>
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? 'line line1 open' : 'line'}></div>
        <div className={isOpen ? 'line line2 open' : 'line'}></div>
        <div className={isOpen ? 'line line3 open' : 'line'}></div>
      </div>
      {/* Menu links */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Me</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
