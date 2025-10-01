import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from 'framer-motion';

// Components
import Footer from "./components/footer.jsx";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks.jsx";
import ThreeDBackground from "./components/ThreeDBackground.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

// Lazy-loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Page wrapper for animation
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <CustomCursor />
      <ThreeDBackground />
      <Navbar />
      <SocialLinks />
      <main>
        <Suspense fallback={null}>
          <PageWrapper><Home /></PageWrapper>
          <PageWrapper><About /></PageWrapper>
          <PageWrapper><Skills /></PageWrapper>
          <PageWrapper><Projects /></PageWrapper>
          <PageWrapper><Contact /></PageWrapper>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
