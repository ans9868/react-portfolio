import React from 'react';
import ProjectCard from '../components/UI/ProjectCard';

const projects = [
  {
    title: "Database Project: Château NYC",
    description: "A full-stack web application with a modern UI and robust backend. This was a project for a Database course at NYU. Features include user authentication, data management, and real-time updates.",
    githubUrl: "https://github.com/TheChosenO1/DBProject",
    technologies: ["React", "Node.js", "Express", "JEST", "CSS", "JavaScript", "A lot of Postgres"]
  },
  {
    title: "Full Stack Certificate (University of Helsinki) (Pre-AI age)",
    description: "A full-stack web certificate that forced me to learn a lot of new technologies and skills. Features include user authentication, data management, and real-time updates.",
    githubUrl: "https://github.com/ans9868/FullStack/",
    technologies: ["React", "Node.js", "Express", "MongoDB", "CRUD", "MongoDB", "playwright", "Jest", "HTML", "CSS", "JavaScript", "And so much more!"]
  },
  {
    title: "Classifying Alziemers disease From EEG data",
    description: "Classifying alziemers disease From EEG data. This was a project for a Graduate Neuroscience course at NYU. Special thanks to Professor Varol and TA Malhar. The official roup can be found here: https://www.neuroinformaticslab.com/",
    githubUrl: "https://github.com/ans9868/eeg-ds004504",
    technologies: ["Python", "PySpark", "ML", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Plotly", "SciPy", "XGBoost", "MLP's", "and much more!"]
  },
  {
    title: "Data Structures and Algorithms Course (Pre-AI age)",
    description: "My Data Structures and Algorithms Course. This was a course at NYU that taught me a lot about the basics of algorithms and data structures.",
    githubUrl: "https://github.com/ans9868/Data-Structures-and-Algorithms",
    technologies: ["Python", "Runtime Analysis", "Big O Notation", "Recursion", "Dynamic Programming", "Brute force", "crying", "mental breakdowns", "tears of joy when finding the solution", "and much more!"]
  },
  // Add more projects here as needed
];

export default function Projects() {
  return (
    <div className="page-content">
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 