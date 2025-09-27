import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import icons for the menu
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    // State to track whether the mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">RK</Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Navigation Links - add 'active' class when menu is open */}
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/">Home</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/about">About</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/projects">Projects</Link></li>
                <li onClick={() => setIsMenuOpen(false)}><Link to="/contact">Contact</Link></li>
                <li>
                    <a 
                        href="/rohit-kumar-resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="resume-button"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;