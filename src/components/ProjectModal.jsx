import React from 'react';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { 
    title = 'No Title', 
    description = 'No description available.', 
    longDescription = 'No detailed description provided.',
    tech = [], 
    githubLink = '', 
    liveLink = '' 
  } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-button" onClick={onClose}>
          <FiX />
        </button>

        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>

        <div className="modal-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>

        <div className="modal-body">
          <p>{longDescription}</p>
        </div>
        
        <div className="modal-footer">
          <h3>Technologies Used:</h3>
          <ul className="modal-tech-list">
            {tech.map((techName, i) => (
              <li key={i}>{techName}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;