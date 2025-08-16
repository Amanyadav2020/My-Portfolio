import React from 'react';
import './CSS/About.css'; // Styling file

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <h3 style={{textAlign:"center"}}>Full Stack Developer | ASP.NET MVC | SQL Server | .NET Core | React</h3><br></br>
      <p>
        Motivated and results-driven Full Stack Software Developer with <strong>3+ years of experience</strong>, currently focused on developing robust, data-driven web applications using <strong>ASP.NET MVC</strong> and <strong>SQL Server (SSMS)</strong>.
      </p>
      <p>
        Previously worked with <strong>.NET Core, Web API</strong> and <strong>React.js</strong> to build scalable, high-performance solutions — and continue to apply that knowledge in maintaining clean architecture, RESTful services, and modern development practices.
      </p>
      <p>
        Skilled in <strong>end-to-end feature development</strong>, <strong>API integration</strong>, and <strong>performance optimization</strong>, with a strong emphasis on clean code, maintainability, and Agile workflows.
      </p>
      <ul style={{marginLeft:'15px'}}>
        <li><strong>Location:</strong> Mumbai</li>
        <li><strong>Education:</strong> Bachelor’s Degree | CGPA: 8.40</li>
        <li><strong>Mindset:</strong> Eager to stay current with evolving technologies and continuously sharpen my skills</li>
      </ul>
      <p>
        Open to opportunities where I can contribute to impactful projects while growing with a forward-thinking team.
      </p>
    </section>


  );
};

export default About;
