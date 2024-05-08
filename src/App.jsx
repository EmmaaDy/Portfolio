// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ExampleComponent from './components/ExampleComponent';
import './App.css'; // Gemensam CSS för båda lägen

function AppWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

function App() {
  const themeMode = useSelector(state => state.theme.mode);

  return (
    <Router>
      <div className={`theme-${themeMode}`}> {/* Tilldela klassen baserat på temaläget */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/example" element={<ExampleComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppWrapper;
