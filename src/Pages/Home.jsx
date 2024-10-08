import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';
import '../styles/Home.css';
import '../index.css';
import '../styles/darkmode.css';
import about_image from '../assets/about_image.jpg';
import projects_image from '../assets/projects_image.jpg';
import contact_image from '../assets/contact_image.jpg';

// Component for the home page
const Home = () => {
  return (
    <div className="home-container content"> {/* Lägg till klassen "content" här */}
      <h1 className="home-title">Welcome to My Portfolio!</h1>
      <p className="home-text">Explore my website to learn more about me and my projects.</p>
      
      {/* Image gallery with links */}
      <div className="home-gallery">
        <Link to="/about" className="home-link">
          <img src={about_image} alt="Om mig" className="gallery-image" />
          <span className="gallery-caption">About Me</span>
        </Link>
        <Link to="/projects" className="home-link">
          <img src={projects_image} alt="Projekt" className="gallery-image" />
          <span className="gallery-caption">Projects</span>
        </Link>
        <Link to="/contact" className="home-link">
          <img src={contact_image} alt="Kontakt" className="gallery-image" />
          <span className="gallery-caption">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
