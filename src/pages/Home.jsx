import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Home = () => {
  const [elementRef, isVisible] = useScrollAnimation();

  return (
    <motion.section
      id="home"
      ref={elementRef}
      className="home-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="intro"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I'm
      </motion.p>
      <motion.h1
        className="name"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Rohit Kumar.
      </motion.h1>
      <motion.h2
        className="subtitle"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        className="tagline"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I'm a passionate full-stack developer specializing in creating (and occasionally
        designing) exceptional, high-quality websites and applications.
      </motion.p>
    </motion.section>
  );
};

export default Home;
