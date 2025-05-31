import React from 'react';
import { Link } from 'react-router-dom'; // For SPA navigation

function Navbar() {
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
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#38bdf8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      letterSpacing: '1px',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      gap: '1.8rem',
      margin: 0,
      padding: 0,
    },
    li: {
      fontSize: '1.1rem',
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
    }
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
    <nav style={styles.nav}>
      <div style={styles.logo}>Sumit Shukla</div>
      <ul style={styles.ul}>
        {['Home', 'About', 'Projects', 'Skills', 'Certifications','Resume','Contact'].map((item) => (
          <li key={item} style={styles.li}>
            <Link
              to={`/${item.toLowerCase()}`}
              style={styles.a}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
