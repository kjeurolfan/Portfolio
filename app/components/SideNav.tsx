'use client';

import { useEffect, useState } from 'react';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'certifications', 'projects', 'github', 'education'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Trigger when the section is in the upper third of the screen
          if (rect.top <= 300) {
            current = section;
          }
        }
      }

      // If at the absolute bottom of the page, force the last section to be active
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = sections[sections.length - 1];
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="side-nav">
        <div className="nav-logo">{'// Ken Eurolfan'}</div>
        <div className="nav-links">
          <button onClick={() => scrollTo('hero')} className={`nav-btn ${activeSection === 'hero' ? 'active' : ''}`}>Top</button>
          <button onClick={() => scrollTo('about')} className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => scrollTo('skills')} className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`}>Skills</button>
          <button onClick={() => scrollTo('experience')} className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`}>Experience</button>
          <button onClick={() => scrollTo('certifications')} className={`nav-btn ${activeSection === 'certifications' ? 'active' : ''}`}>Certifications</button>
          <button onClick={() => scrollTo('projects')} className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => scrollTo('github')} className={`nav-btn ${activeSection === 'github' ? 'active' : ''}`}>GitHub</button>
          <button onClick={() => scrollTo('education')} className={`nav-btn ${activeSection === 'education' ? 'active' : ''}`}>Education</button>
        </div>
      </nav>
      <style jsx>{`
        .side-nav {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: 200px;
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(20px);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 40px 20px;
          z-index: 100;
        }
        .nav-logo {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 60px;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }
        .nav-btn {
          background: transparent;
          border: none;
          color: #86868b;
          text-align: left;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s;
          padding: 8px 12px;
          border-radius: 8px;
        }
        .nav-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 900px) {
          .side-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
