import React, { useEffect, useState } from "react";
import { getProjects } from "../api";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal"; // This will now work correctly
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [elementRef, isVisible] = useScrollAnimation();

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch projects. The backend server might not be running.");
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        ref={elementRef}
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">My Projects</h2>
        {loading && <p>Loading projects...</p>}
        {error && <p style={{ color: "#e74c3c" }}>{error}</p>}
        <div className="projects-grid">
          {projects.length > 0 ?
            projects.map((p) => (
              <ProjectCard 
                key={p._id} 
                project={p} 
                onViewDetails={handleViewDetails} 
              />
            )) : (
              !loading && <p>No projects available to display.</p>
            )
          }
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Projects;