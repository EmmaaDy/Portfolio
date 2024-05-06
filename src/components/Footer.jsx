// Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css'; // Importera CSS-filen för styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* LinkedIn-ikon */}
      <a
        href="https://www.linkedin.com/in/emma-dybdorf-023315290/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {/* GitHub-ikon */}
      <a
        href="https://github.com/EmmaaDy"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;

