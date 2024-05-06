import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Inkludera gemensamma stilar
import about_image from '../assets/about_image.jpg';
import projects_image from '../assets/projects_image.jpg';
import contact_image from '../assets/contact_image.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Välkommen till Min Portfolio!</h1>
      <p className="home-text">Utforska min webbplats för att lära dig mer om mig och mina projekt.</p>
      
      {/* Bildgalleri med länkar */}
      <div className="home-gallery">
        <Link to="/about" className="home-link">
          <img src={about_image} alt="Om mig" className="gallery-image" />
          <span className="gallery-caption">Om mig</span>
        </Link>
        <Link to="/projects" className="home-link">
          <img src={projects_image} alt="Projekt" className="gallery-image" />
          <span className="gallery-caption">Projekt</span>
        </Link>
        <Link to="/contact" className="home-link">
          <img src={contact_image} alt="Kontakt" className="gallery-image" />
          <span className="gallery-caption">Kontakt</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;