import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'A cool project that does amazing things.',
      img: 'https://via.placeholder.com/300',
      link: 'https://github.com/your_project_1_repo'
    },
    {
      title: 'Project 2',
      description: 'Another awesome project that solves problems.',
      img: 'https://via.placeholder.com/300',
      link: 'https://github.com/your_project_2_repo'
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
