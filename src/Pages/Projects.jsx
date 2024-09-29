import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import '../Styles/Projects.css'; 
import '../Styles/darkmode.css'; 

const Projects = () => {
  const [repos, setRepos] = useState([]); // State to store repositories

  useEffect(() => {
    axios.get('https://api.github.com/users/EmmaaDy/repos')
      .then(response => {
        setRepos(response.data); // Save data in state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run only on first render

  return (
    <div className="projects-container"> {/* Container styles for the projects section */}
      <h1 className="projects-heading">My Projects</h1> {/* Projects heading */}
      <p className="projects-description">Here are some of the projects I have worked on.</p> {/* Projects description */}
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={`https://github.com/EmmaaDy/${repo.name}`} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;