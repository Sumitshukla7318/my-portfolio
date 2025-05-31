// Certifications.jsx
import React from 'react';

function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        backgroundColor: '#0f172a',
        color: '#f1f5f9',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Certifications</h2>
      <p
        style={{
          maxWidth: '800px',
          margin: '0 auto 2rem',
          fontSize: '1.2rem',
          lineHeight: '1.8',
        }}
      >
        These certifications reflect my commitment to continuous learning and staying updated with industry trends.
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1.5rem' }}>
          ✅ Full Stack Python Developer - ARUDAN Technologies
        </li>
        
      </ul>
    </section>
  );
}

export default Certifications;
