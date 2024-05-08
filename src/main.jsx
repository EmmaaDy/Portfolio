import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';
import './styles/darkmode.css';

const container = document.getElementById('root');
const root = createRoot(container); // Skapar en root-instans

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);