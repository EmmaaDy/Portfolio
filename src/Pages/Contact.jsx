import React from 'react';
import '../index.css';
import '../Styles/Contact.css';
import '../Styles/darkmode.css';
import Contactform from '../components/Contactform';

// Component for the contact page
const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-description">Here you can contact me.</p>
    </div>
  );
};

export default Contact;