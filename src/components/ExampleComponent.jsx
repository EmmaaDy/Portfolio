import React from 'react';
import { useSelector } from 'react-redux';

const ExampleComponent = () => {
  const theme = useSelector(state => state.theme.mode);

  return (
    <div className={`example-component ${theme === 'dark' ? 'light-theme' : 'light-theme'}`}>
      {/* Innehåll */}
    </div>
  );
};

export default ExampleComponent;