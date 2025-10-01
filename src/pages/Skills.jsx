import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
  FaDocker, FaPython, FaJava, FaBrain, FaProjectDiagram,
  FaLaptopCode, FaDatabase, FaCogs, FaCode, FaServer, FaUniversity
} from "react-icons/fa";
import {
  SiJavascript, SiExpress, SiFastapi, SiPostman,
  SiMongodb, SiMysql, SiGithub, SiC,
  SiNumpy, SiPandas, SiScikitlearn, SiTensorflow,
  SiPytorch, SiOpencv
} from "react-icons/si";

const skillsData = {
  "Frontend Development": [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  "Backend Development": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "REST APIs", icon: <SiPostman /> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  "Programming Languages": [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <SiC /> },
  ],
  "AI / ML & Data Science": [
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "OpenCV", icon: <SiOpencv /> },
    { name: "NLP", icon: <FaBrain /> },
    { name: "Machine Learning", icon: <FaBrain /> },
    { name: "Deep Learning", icon: <FaBrain /> },
  ],
  "Computer Science Core": [
    { name: "System Design", icon: <FaProjectDiagram /> },
    { name: "CS Fundamentals", icon: <FaProjectDiagram /> },
  ],
};

const categoryMeta = {
  "Frontend Development": { icon: <FaLaptopCode />, class: "frontend" },
  "Backend Development": { icon: <FaServer />, class: "backend" },
  Databases: { icon: <FaDatabase />, class: "database" },
  "DevOps & Tools": { icon: <FaCogs />, class: "devops" },
  "Programming Languages": { icon: <FaCode />, class: "languages" },
  "AI / ML & Data Science": { icon: <FaBrain />, class: "aiml" },
  "Computer Science Core": { icon: <FaUniversity />, class: "core" },
};

const Skills = () => {
  const [elementRef, isVisible] = useScrollAnimation();
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (domain) => {
    setOpenCategory(openCategory === domain ? null : domain);
  };

  return (
    <section
      id="skills"
      ref={elementRef}
      className={`skills-section fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="skills-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Click a section to explore 🛠️</p>
      </div>

      <div className="skills-accordion">
        {Object.entries(skillsData).map(([domain, skills], i) => {
          const meta = categoryMeta[domain] || {};
          return (
            <div key={i} className={`accordion-item ${openCategory === domain ? "open" : ""}`}>
              <button
                className={`accordion-header ${meta.class} ${openCategory === domain ? "active" : ""}`}
                onClick={() => toggleCategory(domain)}
              >
                <span className="header-icon">{meta.icon}</span>
                {domain}
                <span className="accordion-arrow">
                  {openCategory === domain ? "▲" : "▼"}
                </span>
              </button>
              <ul className="skills-list">
                {skills.map((skill, idx) => (
                  <li key={idx} className="skill-item" style={{ transitionDelay: `${idx * 0.05}s` }}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;