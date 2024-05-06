import React from 'react';
import '../index.css'; // Inkludera gemensamma stilar

const About = () => {
  return (
    <div className="aboutme-container">
        <h1 className="aboutme-heading">Om Mig</h1>
        <p className="aboutme-description">Hej! Mitt namn är Emma Dybdorf. Jag är en passionerad webbutvecklare med erfarenhet av att skapa responsiva och användarvänliga webbplatser. Jag älskar att lära mig nya tekniker och förbättra mina färdigheter kontinuerligt.</p>
        <h2 className="aboutme-subheading">Färdigheter</h2>
        <ul className="aboutme-list">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
        </ul>
        <h2 className="aboutme-subheading">Bakgrund</h2>
        <p className="aboutme-description">Jag har en bakgrund inom datavetenskap från Folkuniversitetet, och jag har arbetat med flera projekt som involverar både frontend och backend utveckling.</p>
    </div>
  );
};

export default About;