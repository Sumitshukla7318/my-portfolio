// Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section id="resume" style={{
      backgroundColor: '#1e293b',
      color: '#f8fafc',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Resume</h2>
      <p style={{
        maxWidth: '800px',
        margin: '0 auto 2rem',
        fontSize: '1.2rem',
        lineHeight: '1.8'
      }}>
        Download my resume to get a detailed view of my technical skills, experience, education, and certifications.
      </p>
      <a href="/SumitShuklaResume  .pdf" download className="btn" style={{
        padding: '0.8rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#3b82f6',
        color: '#fff',
        borderRadius: '0.5rem',
        textDecoration: 'none'
      }}>
        📄 Download Resume
      </a>
    </section>
  );
}

export default Resume;
