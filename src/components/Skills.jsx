import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaDatabase,FaJava} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDjango,SiC,SiCplusplus} from 'react-icons/si';

function Skills() {
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
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
    padding: '0 2rem',
  };

  const skillCardStyle = {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '1rem',
    padding: '1.5rem 1rem',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 12px rgba(56, 189, 248, 0.1)',
  };

  const iconStyle = {
    fontSize: '2.2rem',
    color: '#38bdf8',
    marginBottom: '0.5rem',
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#f8fafc',
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={headingStyle}>Skills</h2>
      <p style={paraStyle}>
        I'm proficient in a wide range of tools and technologies used for building modern, full-stack applications.
        Always ready to adapt, learn, and work on new challenges.
      </p>

      <div style={gridStyle}>

        <div style={skillCardStyle}><SiC style={iconStyle} /><div style={labelStyle}>C</div></div>
        <div style={skillCardStyle}><SiCplusplus style={iconStyle} /><div style={labelStyle}>C++</div></div>
        <div style={skillCardStyle}><FaJava style={iconStyle} /><div style={labelStyle}>Java</div></div>
        <div style={skillCardStyle}><FaJs style={iconStyle} /><div style={labelStyle}>JavaScript</div></div>
        <div style={skillCardStyle}><FaPython style={iconStyle} /><div style={labelStyle}>Python</div></div>
        <div style={skillCardStyle}><SiDjango style={iconStyle} /><div style={labelStyle}>Django</div></div>
        <div style={skillCardStyle}><FaDatabase style={iconStyle} /><div style={labelStyle}>SQL</div></div>
        <div style={skillCardStyle}><FaGitAlt style={iconStyle} /><div style={labelStyle}>Git</div></div>
        <div style={skillCardStyle}><FaHtml5 style={iconStyle} /><div style={labelStyle}>HTML5</div></div>
        <div style={skillCardStyle}><FaCss3Alt style={iconStyle} /><div style={labelStyle}>CSS3</div></div>
        <div style={skillCardStyle}><SiMongodb style={iconStyle} /><div style={labelStyle}>MongoDB</div></div>

      </div>
    </section>
  );
}

export default Skills;
