import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';
import './styles/darkmode.css';

// Get the container element where the app will be mounted
const container = document.getElementById('root');

// Create a root instance for rendering React elements
const root = createRoot(container);

// Render the main App component wrapped in a Redux Provider
// to provide the Redux store to all components
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);