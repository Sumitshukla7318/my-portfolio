import React from 'react';
import { FaGraduationCap, FaMoneyCheckAlt, FaShoppingCart, FaImage, FaChartBar, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const sectionStyle = {
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const cardStyle = {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(56, 189, 248, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    color: '#38bdf8',
    marginBottom: '1rem',
  };

  const projectTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#f8fafc',
  };

  const projectDescStyle = {
    fontSize: '1rem',
    color: '#94a3b8',
    marginTop: '0.5rem',
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    fontSize: '0.9rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#3b82f6',
    transition: 'background 0.3s ease',
  };

  const liveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#10b981',
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <p style={paraStyle}>
        Here are some of the practical and full-stack projects I've built using React, Django, SQL, and other technologies.
        These showcase my ability to design, develop, and deploy real-world applications.
      </p>

      <div style={gridStyle}>
        {/* Project 1 */}
        <div style={cardStyle}>
          <FaGraduationCap style={iconStyle} />
          <div style={projectTitleStyle}>Online Academy</div>
          <div style={projectDescStyle}>
            A learning platform with course listing, video lectures, quiz modules, and user dashboards.
          </div>
          <div>
            <a href="https://github.com/Sumitshukla7318/Online-Academy" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <FaGithub /> GitHub
            </a>
            <a href="https://online-academy-live.vercel.app" target="_blank" rel="noopener noreferrer" style={liveButtonStyle}>
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div style={cardStyle}>
          <FaMoneyCheckAlt style={iconStyle} />
          <div style={projectTitleStyle}>Banking Automation</div>
          <div style={projectDescStyle}>
            Simulates digital banking features like account creation, transactions, and mini statements with a secure backend.
          </div>
          <div>
            <a href="https://github.com/Sumitshukla7318/BankProject" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <FaGithub /> GitHub
            </a>
            <a href="https://banking-app.vercel.app" target="_blank" rel="noopener noreferrer" style={liveButtonStyle}>
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div style={cardStyle}>
          <FaShoppingCart style={iconStyle} />
          <div style={projectTitleStyle}>E-Commerce Platform</div>
          <div style={projectDescStyle}>
            A full-featured shopping platform with cart, payment flow, order tracking, and user management.
          </div>
          <div>
            <a href="https://github.com/Sumitshukla7318/ecommerce-website" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <FaGithub /> GitHub
            </a>
            <a href="https://shopzone.vercel.app" target="_blank" rel="noopener noreferrer" style={liveButtonStyle}>
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div style={cardStyle}>
          <FaImage style={iconStyle} />
          <div style={projectTitleStyle}>Image Optimizer</div>
          <div style={projectDescStyle}>
            A web tool that compresses and optimizes images for faster web performance without quality loss.
          </div>
          <div>
            <a href="https://github.com/Sumitshukla7318/ImgCompressPro" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <FaGithub /> GitHub
            </a>
            <a href="https://imgopt.vercel.app" target="_blank" rel="noopener noreferrer" style={liveButtonStyle}>
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div style={cardStyle}>
          <FaChartBar style={iconStyle} />
          <div style={projectTitleStyle}>Dashboard Analytics</div>
          <div style={projectDescStyle}>
            Interactive dashboards to visualize data trends, KPIs, and metrics using chart libraries and APIs.
          </div>
          <div>
            <a href="https://github.com/Sumitshukla7318/SalesTracker" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <FaGithub /> GitHub
            </a>
            <a href="https://analytics-board.vercel.app" target="_blank" rel="noopener noreferrer" style={liveButtonStyle}>
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
