// ThemeToggle.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './store/themeSlice';
import '../styles/darkmode.css';


const ThemeToggle = () => {
  console.log("ThemeToggle renderas"); // Detta bör logga när komponenten laddas

  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.theme.mode);

  const simpleClick = () => {
    console.log("Knappen klickades"); // Detta bör logga när du klickar på knappen
  };

  return (
    <button onClick={simpleClick}>
      Klicka mig
    </button>
  );
};


export default ThemeToggle;