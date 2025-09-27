import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const profilePicPath = 'Rohit.jpg'; 

const skills = [
  'JavaScript (ES6+)',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML5 & CSS3',
  'Python',
  'Git & GitHub'
];

const About = () => {
  const [elementRef, isVisible] = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={elementRef}
      className={`about-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Rohit Kumar, a passionate full-stack developer with a love for building elegant and efficient solutions for the web. My journey into programming started with a deep curiosity for how things work, and it has since evolved into a career where I get to build meaningful applications that can impact users' lives.
          </p>
          <p>
            I specialize in the MERN stack and enjoy the process of turning a complex problem into a simple, beautiful, and intuitive design. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-list">
            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <img src={profilePicPath} alt="Rohit Kumar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;