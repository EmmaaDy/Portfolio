// ThemeProvider.jsx
import React from 'react';
import { useSelector } from 'react-redux';

// Component for providing theme-based styling to children components
const ThemeProvider = ({ children }) => {

  // Get the current theme mode from Redux store
  const theme = useSelector((state) => state.theme.mode);

  // Render children components with appropriate theme class
  return (
    <div className={`theme-${theme}`}>
      {children}
    </div>
  );
};

export default ThemeProvider;