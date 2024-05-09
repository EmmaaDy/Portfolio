import React from 'react';
import { useSelector } from 'react-redux';

// Example component to demonstrate conditional theming
const ExampleComponent = () => {

  // Retrieve the current theme mode from Redux store
  const theme = useSelector(state => state.theme.mode);

  return (
    // Apply conditional class based on the current theme mode
    <div className={`example-component ${theme === 'dark' ? 'light-theme' : 'light-theme'}`}>
      {/* Innehåll */}
    </div>
  );
};

export default ExampleComponent;