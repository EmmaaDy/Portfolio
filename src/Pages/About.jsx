import React from 'react';
import '../index.css';
import '../styles/About.css';
import '../styles/darkmode.css';
import avatar from '../assets/avatar.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; // Import icons

// Component for the About Me section
const About = () => {
  return (
    <div className="aboutme-container">
        <div className="aboutme-header">
            <div className="aboutme-header-content">
                <img src={avatar} alt="Emma Dybdorf" className="aboutme-avatar" />
                <h1 className="aboutme-heading">About Me</h1>
            </div>
        </div>
        <p className="aboutme-description">Hello! My name is Emma Dybdorf. I am a passionate web developer with experience in creating responsive and user-friendly websites. I love learning new techniques and continuously improving my skills.</p>
        <div className="aboutme-skills">
            <h2 className="aboutme-subheading">Skills</h2>
            <div className="aboutme-skills-icons">
                <div className="skill-box"><FaHtml5 className="skill-icon" /><span>HTML/CSS</span></div>
                <div className="skill-box"><FaCss3Alt className="skill-icon" /><span>CSS</span></div>
                <div className="skill-box"><FaJs className="skill-icon" /><span>JavaScript</span></div>
                <div className="skill-box"><FaReact className="skill-icon" /><span>React</span></div>
                <div className="skill-box"><FaNodeJs className="skill-icon" /><span>Node.js</span></div>
            </div>
        </div>
        <div className="aboutme-background">
            <h2 className="aboutme-subheading">Background</h2>
            <p className="aboutme-description">I have a background in computer science from Folkuniversitetet, and I have worked on several projects involving both frontend and backend development.</p>
        </div>
    </div>
  );
};

export default About;