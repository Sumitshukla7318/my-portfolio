import React from 'react';
import { Link } from 'react-router-dom'; // For SPA navigation

const footerStyle = {
  backgroundColor: '#111',
  color: '#eee',
  textAlign: 'center',
  padding: '2rem 1rem',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const linkStyle = {
  color: '#eee',
  textDecoration: 'none',
  fontSize: '1rem',
  position: 'relative',
  transition: 'color 0.3s ease',
};

const socialContainerStyle = {
  display: 'flex',
  gap: '1.2rem',
  justifyContent: 'center',
};

const iconStyle = {
  fontSize: '1.5rem',
  color: '#eee',
  transition: 'color 0.3s ease, transform 0.3s ease',
  cursor: 'pointer',
};

const Footer = () => {
  const handleMouseEnter = (e) => {
    e.target.style.color = '#00bcd4';
    e.target.style.transform = 'scale(1.2)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#eee';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <footer style={footerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/skills" style={linkStyle}>Skills</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>

      <div style={socialContainerStyle}>
        <a
          href="https://github.com/sumitshukla-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://linkedin.com/in/sumitshukla-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="mailto:youremail@example.com"
          aria-label="Email"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fas fa-envelope" />
        </a>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#777' }}>
        © {new Date().getFullYear()} Sumit Shukla. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
