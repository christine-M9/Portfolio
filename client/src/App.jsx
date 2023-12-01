// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './About';
import ContactMe from './Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>CHRISTINE KHEKAME JUMA - PORTFOLIO</h1>
        </header>

        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
