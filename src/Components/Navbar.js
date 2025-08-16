import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaDownload,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import './CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Portfolio</h2>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          <FaHome style={{ marginRight: '6px' }} />
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
          <FaUser style={{ marginRight: '6px' }} />
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
          <FaCode style={{ marginRight: '6px' }} />
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={500} onClick={closeMenu}>
          <FaBriefcase style={{ marginRight: '6px' }} />
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
          <FaProjectDiagram style={{ marginRight: '6px' }} />
          Projects
        </Link>
        <a href="/AmanYadavResume.pdf" download className="resume-link" onClick={closeMenu}>
          <FaDownload style={{ marginRight: '6px' }} />
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
