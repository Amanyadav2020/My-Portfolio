import React from 'react';
import './CSS/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project-card">
        <h3>Retailer Loyalty & Rewards</h3>
        <ul>
          <li>
            Played a key role in developing a <strong>loyalty and rewards platform</strong> for retailers, contractors, and distributors using <strong>ASP.NET MVC</strong>, <strong>Entity Framework</strong>, and <strong>SQL Server Management Studio (SSMS)</strong>.
          </li>
          <li>
            Designed and implemented <strong>target-based incentive schemes</strong> and <strong>point redemption features</strong>, which significantly improved <strong>user engagement</strong> and <strong>customer retention</strong>.
          </li>
          <li>
            <strong>Technologies:</strong> ASP.NET MVC, Entity Framework, LINQ, Stored Procedure, SQL Server (SSMS)
          </li>
        </ul>

      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h3>Nexify Fund Management</h3>
        <ul>
          <li>
            Contributed to the development of a financial management platform built using the
            <strong> .NET Framework (MVC)</strong>, <strong> SQL Server (SSMS)</strong>, and <strong> Entity Framework</strong>.
          </li>
          <li>
            Played a key role in integrating <strong>third-party APIs</strong> and developing a <strong>secure payment gateway</strong> to support real-time transactions.
          </li>
          <li>
            <strong>Technologies:</strong> .NET Framework MVC, Web API, REST, Entity Framework, Stored Procedure, SSMS, Third-Party API Integration
          </li>
        </ul>

      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h3>HR Management System (HRMS)</h3>
        <ul>
          <li>
            Designed and developed a comprehensive <strong>HR Management Web Application</strong> using <strong>ASP.NET MVC</strong>, <strong>Web API</strong>, and <strong>PostgreSQL</strong>.
          </li>
          <li>
            Contributed to key modules such as <strong>Staff Attendance</strong> and <strong>Salary Management</strong>, ensuring accurate tracking and payroll generation.
          </li>
          <li>
            Implemented <strong>background services</strong> for automated <strong>attendance data import</strong> and <strong>salary slip generation</strong>, improving operational efficiency.
          </li>
          <li><strong>Technologies:</strong> ASP.NET MVC, Web API, REST, Entity Framework, LINQ, PostgreSQL</li>
        </ul>
      </div>

      {/* Project 4 */}
      <div className="project-card">
        <h3>University Management Information System (UMIS)</h3>
        <ul>
          <li>
            Contributed to the development of a comprehensive <strong>University Management Web Application</strong> using <strong>ASP.NET MVC</strong>, <strong>Web API</strong>, <strong>Entity Framework</strong>, <strong>LINQ</strong>, and <strong>PostgreSQL</strong>.
          </li>
          <li>
            Implemented critical modules such as <strong>External Student Registration</strong> and automated background services like <strong>Exam Center Allocation</strong>, streamlining administrative processes and improving data accuracy.
          </li>
          <li><strong>Technologies:</strong> ASP.NET MVC, Web API, REST, Entity Framework, LINQ, PostgreSQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
