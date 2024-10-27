import React from 'react';
import './MainHeading.css'; // External CSS file for styling
import "./Projects.css"

var projects = [
    {
        image: "Plant.jpg",
        name: "Smart Plant Monitoring system",
        description: "Senses the moisture level of the soil and regulates the water supply as needed",
        badges: ["Arduino"],
    },
    {
        image: "Arvr.jpg",
        name: "Open world Interactive game",
        description: "An open world experience where user can explore the city",
        badges: ["Unreal Engine", "Blender"],
    },
    {
      image: "Journal.jpeg",
      name: "Journal Web App",
      description: "Includes journal templates that can be used for daily tracking",
      badges: ["Web Development"],
  }
    
]


const ProjectCard = ({ project }) => {
    const { image, name, description, badges } = project;

    return (
        <div className="project-card" id="projects" style={{ backgroundImage: `url(${image})` }}>
            <div className="project-card-content">
                <h2 className="project-name">{name}</h2>
                <p className="project-description">{description}</p>
                <div className="badges">
                    {badges.map((badge, index) => (
                        <span key={index} className="badge">{badge}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
  return (
    <div >
        <h2 className='section-title'>Projects</h2>
        <div className='projects-container'>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>

      </div>
  );
};

export default Projects;
