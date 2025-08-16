import React from 'react';
import './CSS/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>


      {/* Experience 2 */}
      <div className="experience-card">
        <h3>Webiknows IT Solutions Pvt. Ltd.</h3>
        <p className="role">Sr. Software Engineer</p>
        <p className="date-location">Feb 2024 – Present | Thane, Maharashtra</p>
        <ul>
          <li>Delivered <strong>end-to-end feature development</strong> using <strong>ASP.NET MVC</strong>, <strong>Web API</strong>, <strong>Entity Framework</strong>, and <strong>SSMS</strong> based on Jira requirements.</li>
          <li>Translated <strong>business logic</strong> into clean, maintainable code with corresponding front-end pages.</li>
          <li><strong>Optimized performance</strong> by improving code efficiency and query execution time.</li>
          <li>Deployed builds, collaborated with <strong>QA</strong>, and managed <strong>production releases</strong>.</li>
          <li>Followed <strong>Agile practices</strong>, ensuring timely and quality delivery of tasks.</li>
        </ul>
      </div>
      {/* Experience 1 */}
      <div className="experience-card">
        <h3>CodeArray Technologies Pvt. Ltd.</h3>
        <p className="role">Software Developer</p>
        <p className="date-location">June 2022 – Feb 2024 | Mumbai, Maharashtra</p>
        <ul>
          <li>Started as a <strong>fresher</strong>, learning project workflows and completing assigned tasks under senior developers.</li>
          <li>Gained experience in <strong>requirement analysis</strong>, <strong>coding</strong>, and following <strong>best practices</strong>.</li>
          <li>Progressed to independently handling project features and collaborating directly with the <strong>Project Manager</strong>.</li>
          <li>Managed <strong>deployment</strong> to UAT environments and performed <strong>self-testing</strong> to ensure quality.</li>
          <li>Contributed to <strong>maintainable code</strong>, documentation, and team <strong>code reviews</strong>.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
