import React from 'react';
import Navbar from './Navbar'; 
import '../Styles/Header.css'; // Inkludera header-specifika stilar
import '../index.css'; // Inkludera gemensamma stilar

const Header = () => {
  return (
    <header className="header">
      <h1><span className="first-letter">P</span>ortfolio</h1>
      <Navbar />
    </header>
  );
};

export default Header;