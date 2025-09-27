import React from "react";

// Add 'onViewDetails' to the props
const ProjectCard = ({ project, onViewDetails }) => {
  const { title, description, tech = [] } = project;

  return (
    <div className="project-card">
      <div>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-tech-list">
          {tech.map((techName, i) => (
            <li key={i}>{techName}</li>
          ))}
        </ul>
      </div>
      {/* This button will open the modal */}
      <button onClick={() => onViewDetails(project)} className="view-details-button">
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;