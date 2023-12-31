// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h2>Welcome to My Developer Portfolio</h2>
        <p>Hi, I'm Christine Khekame Juma, a passionate software developer.</p>
      </div>

      <div className="intro">
        <h3>Introduction</h3>
        <p>
          I'm dedicated to creating innovative and user-friendly applications. My expertise
          lies in utilizing cutting-edge technologies to deliver robust and scalable solutions.
        </p>
      </div>

      <div className="featured-project">
        <h3>Featured Project</h3>
        <p>
          Explore my latest project.
          Visit the project live or on GitHub to see the code and its functionality.
        </p>
       
      </div>

      <div className="technologies">
        <h3>Technologies</h3>
        <p>
          Proficient in:
          <span> JavaScript (React, Node.js), Python, Flask, HTML5, CSS, Git, GitHub</span>
       
        </p>
      </div>

      
    </div>
  );
};

export default Home;
