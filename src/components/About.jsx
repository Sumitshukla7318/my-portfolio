import React from 'react';
import { FaLaptopCode, FaGraduationCap, FaRocket } from 'react-icons/fa';

function About() {
  const sectionStyle = {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: '#f1f5f9',
    padding: '5rem 2rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    color: '#38bdf8',
    fontWeight: 'bold',
  };

  const paraStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
  };

  const iconsContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
    gap: '2rem',
    flexWrap: 'wrap',
  };

  const iconCard = {
    backgroundColor: '#1e293b',
    boxShadow: '0 4px 15px rgba(56, 189, 248, 0.2)',
    padding: '2rem',
    borderRadius: '1rem',
    width: '260px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #334155',
  };

  const iconStyle = {
    fontSize: '2.8rem',
    color: '#38bdf8',
    marginBottom: '1rem',
  };

  const iconTitle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#f8fafc',
  };

  const iconText = {
    fontSize: '0.95rem',
    color: '#94a3b8',
    marginTop: '0.5rem',
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paraStyle}>
  I'm <strong>Sumit Shukla</strong>, a passionate Full Stack Developer with a completed <strong>BCA</strong> degree.  
  I specialize in building sleek, functional web apps using <strong>Python, Django, React, SQL</strong>, and more.  
  I thrive on solving real-world problems with code, crafting projects like e-commerce platforms, chat apps, and tools like image compressors.  
  I'm always exploring, always learning — and always ready for the next challenge.
</p>

      <div style={iconsContainer}>
        <div style={iconCard}>
          <FaGraduationCap style={iconStyle} />
          <div style={iconTitle}>BCA Graduate</div>
          <div style={iconText}>
            Building strong fundamentals in programming, data, and application development.
          </div>
        </div>
        <div style={iconCard}>
          <FaLaptopCode style={iconStyle} />
          <div style={iconTitle}>Full Stack Developer</div>
          <div style={iconText}>
            From frontend designs to backend logic — I build complete web solutions.
          </div>
        </div>
        <div style={iconCard}>
          <FaRocket style={iconStyle} />
          <div style={iconTitle}>Project Driven</div>
          <div style={iconText}>
            My learning comes alive through meaningful, practical, and beautiful projects.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
