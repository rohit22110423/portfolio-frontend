import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // <-- Import the new page
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/footer.jsx";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <SocialLinks />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* <-- Add the new route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;