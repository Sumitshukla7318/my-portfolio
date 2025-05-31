import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    nav: {
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
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#38bdf8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      letterSpacing: '1px',
    },
    toggleIcon: {
      fontSize: '1.8rem',
      color: 'white',
      cursor: 'pointer',
      display: 'none',
    },
    ul: {
      listStyle: 'none',
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
      margin: '1rem 0 0',
      padding: 0,
    },
    ulDesktop: {
      listStyle: 'none',
      display: 'flex',
      gap: '1.8rem',
      margin: 0,
      padding: 0,
    },
    li: {
      fontSize: '1.1rem',
      textAlign: 'center',
    },
    a: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.3s, border-bottom 0.3s',
      borderBottom: '2px solid transparent',
    },
    aHover: {
      color: '#38bdf8',
      borderBottom: '2px solid #38bdf8',
    },
    mediaQuery: `
      @media (min-width: 768px) {
        .menu-toggle {
          display: none !important;
        }
        .menu-items {
          display: flex !important;
          flex-direction: row !important;
          width: auto !important;
          margin: 0 !important;
        }
      }
    `,
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = styles.aHover.color;
    e.target.style.borderBottom = styles.aHover.borderBottom;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = styles.a.color;
    e.target.style.borderBottom = styles.a.borderBottom;
  };

  return (
    <>
      <style>{styles.mediaQuery}</style>
      <nav style={styles.nav}>
        <div style={styles.logo}>Sumit Shukla</div>

        {/* Toggle icon for mobile */}
        <div
          className="menu-toggle"
          style={styles.toggleIcon}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Items */}
        <ul className="menu-items" style={window.innerWidth >= 768 ? styles.ulDesktop : styles.ul}>
          {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Resume', 'Contact'].map((item) => (
            <li key={item} style={styles.li}>
              <Link
                to={`/${item.toLowerCase()}`}
                style={styles.a}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
