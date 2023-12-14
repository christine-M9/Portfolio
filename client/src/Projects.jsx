// Projects.jsx
import React from 'react';


const Projects = () => {
  const githubUsername = 'christine-M9';

  const projects = [
    {
      title: 'KeNHA Web Service',
      description:
        "This is a fullstack web application of KeNHA company that gives an overview of the company's projects and works. It has a backend database that stores data and fetch() fetches the info to the frontend.",
      githubLink: `https://github.com/${githubUsername}/KeNHA-Project-MGMT-System`,
      liveLink: 'https://kenha-web-service.onrender.com/',
    },
    {
      title: 'Students Tracker Python Application',
      description:
        'This is a Python CLI application designed to manage and monitor students data and progress within an educational institution.',
      githubLink: `https://github.com/${githubUsername}/Students-Tracker-Python-Application`,
      liveLink: null, // No live link for this project
    },
    {
      title: 'My Personal Website',
      description:
        'This is my personal website showcasing my portfolio, skills, and projects. It is designed to provide information about me and my work.',
      githubLink: `https://github.com/${githubUsername}/My-Personal-Website`,
      liveLink: 'https://christine-m9.github.io/My-Personal-Website/',
    },
    {
      title: 'Animal Record System',
      description:
        'This web application demonstrates how to fetch animal data from a public API, generating animal record data, and displaying information.',
      githubLink: `https://github.com/${githubUsername}/Animal-record-system`,
      liveLink: 'https://christine-m9.github.io/Animal-record-system/',
    },
    // more projects to be added
  ];

  return (
    <div className="projects">
      <h3>Projects</h3>
      <p>Here are some of the projects I've worked on:</p>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
