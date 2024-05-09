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

// Wrapper component to provide Redux store to the entire app
function AppWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

// Main component containing the router and application structure
function App() {
  // Select theme mode from Redux store
  const themeMode = useSelector(state => state.theme.mode);

  return (
    <Router>
      <div className={`theme-${themeMode}`}> {/* Apply theme class */}
        <Header /> {/* Header component */}
        <Routes> {/* React Router routes */}
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/about" element={<About />} /> {/* About page route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects page route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
          <Route path="/example" element={<ExampleComponent />} /> {/* Example page route */}
        </Routes>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default AppWrapper; // Export the AppWrapper component