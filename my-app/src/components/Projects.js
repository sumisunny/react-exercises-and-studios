import React, { useState } from 'react';
import projectData from '../data.json';

function MyProjects() {
  const [index, setIndex] = useState(0);
  const currentProject = projectData.projects[index];
  const currentProjectImage = require(`../images/${currentProject.image}`).default;

  function handleClick() {
    if (index < projectData.projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div>
      <h2>My Knitting Projects</h2>
      <div className="project-gallery">
        <div className="project-card">
          <img src={currentProjectImage} alt={currentProject.title} />
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
          <a href={currentProject.link}>Learn More</a>
        </div>
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default MyProjects;
