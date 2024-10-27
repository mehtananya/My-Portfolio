// src/Skills.js
import React from 'react';
import "./MySkills.css"; 
var skills = [
  'HTML',
  'CSS', 
  'Python',
  'Writing and Editing',
  'React JS',
  'Javascript'
// Okay...
// BTS???
//  Hacking likh de (Twitter pe account uda deti he)
  
];

const Skills = () => {
  return (
    <>
    <div id = "skills" className="skills">
      <h2 className='section-title'>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Skills;
