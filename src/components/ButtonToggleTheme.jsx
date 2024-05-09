import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/store";
import Button from "../assets/Click.png";
import "../styles/Button.css";

// Component for toggling the theme
const ButtonToggleTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  // Function to handle button click and toggle theme
  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="button-container">
      <img src={Button} alt="Button" className="button-img" onClick={handleClick} />
    </div>
  );
};

export default ButtonToggleTheme;