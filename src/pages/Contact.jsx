import React, { useState } from "react";
import { sendContactForm } from "../api";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [status, setStatus] = useState("");
  const [elementRef, isVisible] = useScrollAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      await sendContactForm(data);
      setStatus("Message sent successfully ✅");
      e.target.reset();
    } catch (error) {
      setStatus(`❌ ${error.message}`);
    }
  };

  return (
    <section
      id="contact"
      ref={elementRef}
      className={`contact-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <h2 className="section-title">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </section>
  );
};

export default Contact;