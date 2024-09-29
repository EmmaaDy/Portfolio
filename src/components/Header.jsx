import React from 'react';
import Navbar from './Navbar'; 
import '../Styles/Button.css';
import '../Styles/darkmode.css';
import "/src/Styles/Header.css";
import { useSelector } from 'react-redux';
import ButtonToggleTheme from './ButtonToggleTheme';

// Header component including navigation bar and theme toggle button
const Header = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    // Header section with dynamic class based on theme mode
    <header className={`header ${theme}`}>
      <h1><span className="first-letter">P</span>ortfolio</h1>
      <Navbar />
      <ButtonToggleTheme /> {/* Include the button component here */}
    </header>
  );
};

export default Header;