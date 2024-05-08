import React from 'react';
import Navbar from './Navbar'; 
import '../styles/Button.css';
import '../styles/darkmode.css';
import "/src/styles/Header.css";
import { useSelector } from 'react-redux';
import ButtonToggleTheme from './ButtonToggleTheme';


const Header = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <header className={`header ${theme}`}>
      <h1><span className="first-letter">P</span>ortfolio</h1>
      <Navbar />
      <ButtonToggleTheme /> {/* Include the button component here */}
    </header>
  );
};

export default Header;