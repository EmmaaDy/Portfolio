import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import '../styles/Button.css';
import '../styles/darkmode.css';
import "../styles/Header.css"; 
import { useSelector } from 'react-redux';
import ButtonToggleTheme from './ButtonToggleTheme';

// Header component including navigation bar and theme toggle button
const Header = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false); // State variable to track whether the menu is open or closed

  // Function to toggle between open and closed menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${theme}`}>
      <h1>
        <Link to="/" className="header-title" onClick={closeMenu}>
          <span className="first-letter">P</span>ortfolio
        </Link>
      </h1>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} /> {/* Pass states and functions */}
      <ButtonToggleTheme />
    </header>
  );
};

export default Header;
