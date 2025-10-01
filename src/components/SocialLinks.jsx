import React from 'react';
// You might need to install a package for icons, like react-icons
// Run: npm install react-icons
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="https://github.com/rohit22110423" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rohit-kumar-098094223/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;