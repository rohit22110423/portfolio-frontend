import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMicrosoft } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [elementRef, isVisible] = useScrollAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setStatus(result.message);
      e.target.reset();
    } catch (err) {
      setStatus(`${err.message}`);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={elementRef}
      className={`contact-section fade-in-section ${isVisible ? "is-visible" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 className="section-title">Get In Touch</motion.h2>
      <motion.p className="contact-note">
        Don’t be shy, say hi 👋 — always happy to chat or collaborate!
      </motion.p>

      <motion.div className="contact-icons">
        <a
          href="https://wa.me/7307395201"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="contact-icon whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a href="mailto:rohit7307395201@gmail.com" title="Gmail" className="contact-icon gmail">
          <FaEnvelope />
        </a>
        <a href="mailto:rohit22110423@snuchennai.edu.in" title="Outlook" className="contact-icon outlook">
          <FaMicrosoft />
        </a>
      </motion.div>

      <motion.form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message 🚀</button>
      </motion.form>

      {status && <motion.p className="status-message">{status}</motion.p>}
    </motion.section>
  );
};

export default Contact;
