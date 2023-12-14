// Skills.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="scatter-container">
        <div className="skill-item">
          <i className="fab fa-js-square fa-3x"></i>
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-react fa-3x"></i>
          <span>React</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-node fa-3x"></i>
          <span>Node.js</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-python fa-3x"></i>
          <span>Python (Flask)</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-html5 fa-3x"></i>
          <span>HTML5, CSS3</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-git fa-3x"></i>
          <span>Git, GitHub</span>
        </div>
        <div className="skill-item">
          <i className="fas fa-database fa-3x"></i>
          <span>Database Management (SQL, PostgreSQL)</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-flask fa-3x"></i>
          <span>Flask</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-react fa-3x"></i>
          <span>Material-UI</span>
        </div>
        <div className="skill-item">
          <i className="fab fa-css3-alt fa-3x"></i>
          <span>Tailwind CSS</span>
        </div>
      </div>
      <div className="skills-description">
        <p>
          I'm proficient in a variety of technologies, allowing me to create dynamic and responsive web applications. My skills range from front-end development using JavaScript and React to back-end technologies like Node.js, Python with Flask, and database management with SQL and PostgreSQL.
        </p>
        <p>
          I also have experience working with version control systems such as Git and GitHub. Whether it's designing user interfaces, implementing responsive layouts, or managing databases, I enjoy bringing ideas to life through clean and efficient code.
        </p>
      </div>
    </div>
  );
};

export default Skills;
