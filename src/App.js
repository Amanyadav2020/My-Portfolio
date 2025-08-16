import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from '../src/Components/About';
import Skills from '../src/Components/Skills';
import Experience from './Components/Experience';
import Projects from '../src/Components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
    </div>
  );
}

export default App;
