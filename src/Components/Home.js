// src/components/Home.js
import React from 'react';
import { FaPhone, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './CSS/Home.css';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <h1>Hello 👋, I'm <span className="name-highlight">Aman Yadav</span></h1>
      <h2>Software Developer</h2>
      <div className="home-icons">
        <a href="https://www.linkedin.com/in/aman-yadav-b63147216/" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:yadav200289@gmail.com">
          <FaEnvelope size={24} />
        </a>
        <a href="tel:+919594457453" target="_blank" rel="noreferrer">
          <FaPhone size={24} />
        </a>
      </div>
    </section>
  );
};

export default Home;
