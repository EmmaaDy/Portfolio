import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'; // Inkludera gemensamma stilar

const Projects = () => {
  const [repos, setRepos] = useState([]); // State för att lagra repositories

  useEffect(() => {
    axios.get('https://api.github.com/users/EmmaaDy/repos')
      .then(response => {
        setRepos(response.data); // Spara data i state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Tom dependency array för att köra endast vid första render

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <p className="projects-description">Here are some of the projects I have worked on.</p>
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