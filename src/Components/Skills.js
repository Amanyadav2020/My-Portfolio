// import React from 'react';
// import './CSS/Skills.css'; // Styling file

// const Skills = () => {
//   const skills = [
//     "DotNet Core MVC",
//     "DotNet Core Web API",
//     "React.js",
//     "Entity Framework Core",
//     "JQuery",
//     "C#",
//     "JavaScript",
//     "SSMS",
//     "IIS",
//     "LINQ"
//   ];

//   return (
//     <section className="skills-section" id="skills">
//       <h2>Skills</h2>
//       <div className="skillContainer">
//         <ul className="skills-list">
//           {skills.map((skill, index) => (
//             <li key={index}>• {skill}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import './CSS/Skills.css'; // Updated CSS

const skills = [
  {
    name: "HTML",
    image: "/html.png",
    description: "Markup language for creating webpages."
  },
  {
    name: "CSS",
    image: "/css.png",
    description: "Stylesheet language used for describing the look of a document."
  },
  {
    name: "JavaScript",
    image: "/javascript.png",
    description: "Programming language for web development."
  },
  {
    name: "React.js",
    image: "/react.png",
    description: "A JavaScript library for building user interfaces."
  },
  {
    name: "C#",
    image: "/csharp.png",
    description: "Modern, object-oriented programming language developed by Microsoft."
  },
  {
    name: "Entity Framework Core",
    image: "/images/efcore.png",
    description: "Object-relational mapper for .NET."
  },
  {
    name: "DotNet Core MVC",
    image: "/NETcore.png",
    description: "MVC web app framework by Microsoft."
  },
  {
    name: "DotNet Core Web API",
    image: "/webapi.png",
    description: "Framework for building RESTful services."
  },
  {
    name: "LINQ",
    image: "/images/linq.png",
    description: "Query syntax in C# for working with data."
  },
  {
    name: "SSMS",
    image: "/sqlserver.png",
    description: "SQL Server Management Studio for database management."
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

