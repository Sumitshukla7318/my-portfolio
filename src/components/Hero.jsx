import React from 'react';

function Hero() {
  const styles = {
    section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(to right, #0f172a, #1e293b)',
      color: '#f8fafc',
      textAlign: 'center',
      padding: '0 2rem',
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#38bdf8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    p: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      lineHeight: '1.6',
      marginBottom: '2rem',
      fontWeight: 300,
    },
    btn: {
      backgroundColor: '#38bdf8',
      color: '#0f172a',
      border: 'none',
      padding: '0.8rem 2rem',
      borderRadius: '25px',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    },
    btnHover: {
      backgroundColor: '#0ea5e9',
      transform: 'scale(1.05)',
    }
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, styles.btnHover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, styles.btn);
  };

  return (
    <section style={styles.section} id="home">
      <div>
        <h1 style={styles.h1}>Hi, I'm Sumit Shukla</h1>
        <p style={styles.p}>
          I'm a passionate Full Stack Developer skilled in Python, Django, SQL, and React.
          I love building modern web applications with interactive UI and efficient backend logic.
          I’ve completed my BCA and have worked on e-commerce platforms, chat apps, and practical tools like an image compressor.
        </p>
        <a
          href="/projects"
          style={styles.btn}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
