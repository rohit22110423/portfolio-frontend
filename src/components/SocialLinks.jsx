import React from 'react';
// You might need to install a package for icons, like react-icons
// Run: npm install react-icons
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;