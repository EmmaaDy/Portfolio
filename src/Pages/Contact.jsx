import React from 'react';
import '../index.css';
import '../styles/Contact.css';
import '../styles/darkmode.css';
import Contactform from '../components/Contactform';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-description">Here you can contact me.</p>
      <p className="arrow">&#x2193;</p> {/* Unicode arrow */}
    </div>
  );
};

export default Contact;
