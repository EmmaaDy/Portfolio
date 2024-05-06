// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home'; // Antag att du har en Home-komponent
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Startsida */}
        <Route path="/about" element={<About />} /> {/* Om mig */}
        <Route path="/projects" element={<Projects />} /> {/* Projekt */}
        <Route path="/contact" element={<Contact />} /> {/* Kontakt */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
