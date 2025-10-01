import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useParallax } from '../hooks/useParallax'; 

const profilePicPath = '/profile.jpg'; 

const About = () => {
  const [elementRef, isVisible] = useScrollAnimation();
  const offset = useParallax(0.1);

  return (
    <motion.section
      id="about"
      ref={elementRef}
      className={`about-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ y: offset }} 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="about-left-column"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="about-bio">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              Hello! I'm Rohit Kumar, a passionate full-stack developer with a love for building elegant and efficient solutions for the web. My journey into programming started with a deep curiosity for how things work, and it has since evolved into a career where I get to build meaningful applications.
            </p>
            <p>
              I specialize in the MERN stack and enjoy the process of turning a complex problem into a simple, beautiful, and intuitive design. I'm always eager to learn new technologies and improve my craft.
            </p>
          </div>
        </div>

        <div className="education-timeline">
          <h2 className="section-title">Education</h2>
          {["B.Tech", "Class XII", "Class X"].map((_, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: isVisible ? 0 : -30, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                {idx === 0 && (
                  <>
                    <h3>Bachelor of Technology in Computer Science</h3>
                    <p className="timeline-institution">Shiv Nadar University Chennai</p>
                    <p className="timeline-dates">August 2022 - May 2026</p>
                  </>
                )}
                {idx === 1 && (
                  <>
                    <h3>Class XII</h3>
                    <p className="timeline-institution">Vidyagyan School Sitapur</p>
                    <p className="timeline-dates">March 2021 - May 2022</p>
                  </>
                )}
                {idx === 2 && (
                  <>
                    <h3>Class X</h3>
                    <p className="timeline-institution">Vidyagyan School Sitapur</p>
                    <p className="timeline-dates">March 2019 - May 2020</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="about-right-column"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="image-wrapper">
          <img src={profilePicPath} alt="Rohit Kumar" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
