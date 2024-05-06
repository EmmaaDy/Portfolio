import React from 'react';
import '../index.css'; // Inkludera gemensamma stilar
import Contactform from '../components/Contactform';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-description">Here you can contact me.</p>
      <Contactform />
    </div>
  );
};

export default Contact;
