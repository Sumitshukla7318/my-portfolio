import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(90deg, #0f172a, #1e293b)',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    flexWrap: 'wrap',
  };

  const logoStyles = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#38bdf8',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: '1px',
  };

  const menuStyles = isMobile
    ? {
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        width: '100%',
        marginTop: '1rem',
        gap: '1rem',
        listStyle: 'none',
        padding: 0,
      }
    : {
        display: 'flex',
        gap: '1.8rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      };

  const toggleIconStyles = {
    fontSize: '1.8rem',
    color: 'white',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
  };

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s, border-bottom 0.3s',
  };

  const linkHoverStyles = {
    color: '#38bdf8',
    borderBottom: '2px solid #38bdf8',
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyles);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyles);
  };

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false); // Close menu on mobile
  };

  return (
    <nav style={navStyles}>
      <div style={logoStyles}>Sumit Shukla</div>

      {/* Toggle icon (hamburger or close) */}
      <div style={toggleIconStyles} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <ul style={menuStyles}>
        {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Resume', 'Contact'].map((item) => (
          <li key={item} style={{ fontSize: '1.1rem', textAlign: isMobile ? 'center' : 'left' }}>
            <Link
              to={`/${item.toLowerCase()}`}
              style={linkStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleLinkClick}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
