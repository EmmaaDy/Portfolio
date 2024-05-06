import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Importera CSS för stilar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Tillståndsvariabel för att hålla reda på om menyn är öppen eller stängd

  // Funktion för att växla mellan öppen och stängd meny
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* Hamburgerikonsymbol */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? 'line line1 open' : 'line'}></div>
        <div className={isOpen ? 'line line2 open' : 'line'}></div>
        <div className={isOpen ? 'line line3 open' : 'line'}></div>
      </div>
      {/* Meny länkar */}
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
