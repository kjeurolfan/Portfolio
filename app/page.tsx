'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="background-gradient"></div>
      
      <div className="container">
        <header className="hero">
          <div className="profile-container">
            <div className="profile-ring">
              <img src="/1x1ID.jpg" className="profile-pic" alt="Ken Justine" />
            </div>
          </div>
          <h1 className="hero-name">Ken Justine P. Eurolfan</h1>
          <div className="hero-role">IT Professional &bull; QA Specialist &bull; Taguig City</div>
          
          <div className="contact-row">
            <a href="mailto:keneurolfan@gmail.com" className="icon-link" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>Email</span>
            </a>
            <div className="separator"></div>
            <a href="#" className="icon-link disabled" title="Phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>09267467081</span>
            </a>
            <div className="separator"></div>
            <a href="https://www.linkedin.com/in/ken-justine-eurolfan-04079b353/" target="_blank" rel="noreferrer" className="icon-link" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* --- ADDED: About Me Section --- */}
        <div className="glass-card about-section">
          <h2 className="section-header">About Me</h2>
          <p className="about-text">
            Dedicated <b>QA Specialist</b> and IT professional with a strong foundation in software testing, 
            technical support, and network infrastructure. I bridge the gap between development and user experience 
            by ensuring rigorous quality standards through <b>functional testing, SQL validation, and automated tools</b>.
          </p>
          <p className="about-text">
             My background in <b>C# and Python</b> allows me to understand code logic deeply, enabling more effective 
             debugging and communication with development teams. I am versatile, results-driven, and committed to delivering flawless digital solutions.
          </p>
        </div>
        {/* ------------------------------- */}

        {/* Skills Grid */}
        <div className="section-grid">
          <div className="glass-card skills-card">
            <h2 className="section-header">Technical Expertise</h2>
            <div className="tags-container">
              {['Python', 'Java', 'HTML', 'SAP S4 HANA', 'SQL', 'C#', 'Agile & Scrum'].map(skill => (
                <span key={skill} className="pill pill-primary">{skill}</span>
              ))}
            </div>
          </div>
          <div className="glass-card skills-card">
            <h2 className="section-header">Professional Soft Skills</h2>
            <div className="tags-container">
              {['QA Methodology', 'Problem Solving', 'Communication', 'Teamwork'].map(skill => (
                <span key={skill} className="pill pill-secondary">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Project */}
        <h2 className="section-label">Featured Project</h2>
        <div className="glass-card highlight-card">
          <div className="highlight-content">
            <div className="highlight-header">
              <h3>HANAPP Mobile App</h3>
              <p className="project-type">Cross-Platform Service Application</p>
            </div>
            <p className="description">
              A comprehensive mobile application connecting service seekers with local providers. 
              Engineered with real-time chat functionality, secure booking systems, and integrated online payment gateways.
            </p>
            <div className="badges-row">
              <span className="badge badge-gold">🏆 Top 10 National Hackathon</span>
              <span className="badge badge-purple">🎖️ Capstone Symposium 2025</span>
              <span className="badge badge-purple">🎖️ QA Testing</span>
            </div>
          </div>
          
          <div className="highlight-media" onClick={() => setLightboxImg('/cert1.jpg')}>
            <div className="img-overlay">
              <span>View Certificate</span>
            </div>
            <img src="/cert1.jpg" alt="Hackathon Certificate" />
          </div>
        </div>

        {/* Certifications - Six Sigma */}
        <h2 className="section-label">Featured Certification</h2>
        <div className="glass-card highlight-card reverse-mobile">
          <div className="highlight-media" onClick={() => setLightboxImg('/sixsigma.png')}>
            <div className="img-overlay">
              <span>View Credential</span>
            </div>
            <img src="/sixsigma.png" alt="Lean Six Sigma Certificate" />
          </div>
          <div className="highlight-content">
            <div className="highlight-header">
              <span className="pill pill-warning">Quality Management</span>
              <h3>Lean Six Sigma Yellow Belt</h3>
            </div>
            <p className="description">
              Specialized training in process improvement methodologies and waste reduction strategies. 
              Verified by <b>Prof. Marcelo Fernandes</b>, with a focus on QA efficiency.
            </p>
            <div className="meta-row">
              <span>📅 Issued: Oct 2025</span>
            </div>
          </div>
        </div>

        {/* Selected Works Grid */}
        <h2 className="section-label">Other Works</h2>
        <div className="grid-3">
          <ProjectCard 
            title="Guardians of the Digital Realm" 
            badge="Game Dev" 
            desc="Cybersecurity Educational Game. Executed comprehensive QA & Functional Testing protocols." 
            tags={['QA Testing','Godot', 'SQLite', 'XML']} 
          />
          <ProjectCard 
            title="Performance Monitor" 
            badge="System Tool" 
            desc="Automated grading utility for educators. Streamlines data categorization and reporting." 
            tags={['C#', '.NET', 'Automation']} 
          />
          <ProjectCard 
            title="AteGirlPH" 
            badge="Web Dev" 
            desc="Home service booking platform. Conducted full-stack functional testing and SQL validation." 
            tags={['QA Testing', 'SQL', 'QA']} 
          />
        </div>

        <div className="divider"></div>

        {/* Education & Other Certs */}
        <div className="dual-column">
          <div className="glass-card column-card">
            <h2 className="section-header">Education</h2>
            <div className="edu-item">
              <div className="icon-box">🎓</div>
              <div className="edu-details">
                <h4>STI College - Global City</h4>
                <span className="degree">BS Information Technology</span>
                <span className="year">2022 - Present</span>
              </div>
            </div>
          </div>

          <div className="glass-card column-card">
            <h2 className="section-header">Other Certifications</h2>
            <div className="cert-list">
              <CertItem title="SQL Injection Attacks" provider="EC-Council" date="Oct 2024" />
              <CertItem title="Cyber Security Fundamentals" provider="EC-Council" date="Oct 2024" />
            </div>
          </div>
        </div>

        <footer>
          <p>&copy; 2026 Ken Justine P. Eurolfan</p>
          <p className="footer-sub">Built with React & Next.js</p>
        </footer>
      </div>

      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Full Screen" />
            <button className="close-btn" onClick={() => setLightboxImg(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        :root {
          --bg-dark: #0f172a;
          --bg-card: rgba(30, 41, 59, 0.5);
          --border-color: rgba(148, 163, 184, 0.1);
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --accent-blue: #38bdf8;
          --accent-purple: #818cf8;
          --accent-gold: #fbbf24;
        }

        body {
          background-color: var(--bg-dark);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          margin: 0;
          overflow-x: hidden;
        }

        .main-wrapper {
          min-height: 100vh;
          position: relative;
        }

        /* Ambient Background */
        .background-gradient {
          position: fixed;
          top: -20%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
          z-index: -1;
          filter: blur(60px);
          animation: float 10s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, 40px); }
          100% { transform: translate(0, 0); }
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        /* Hero */
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 60px; /* Reduced margin to fit About section */
        }

        .profile-ring {
          padding: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
          margin-bottom: 24px;
        }

        .profile-pic {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--bg-dark);
          display: block;
        }

        .hero-name {
          font-size: 2.5rem;
          margin: 0 0 10px;
          font-weight: 700;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-role {
          font-size: 1rem;
          color: var(--accent-blue);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .separator { width: 1px; height: 16px; background: var(--border-color); }

        .icon-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.2s;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .icon-link:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }
        
        .icon-link.disabled { cursor: default; }

        /* General Card Styling */
        .glass-card {
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 30px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-2px);
          border-color: rgba(148, 163, 184, 0.3);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }

        /* About Section Specifics */
        .about-section {
          margin-bottom: 40px;
          text-align: center;
          border: 1px solid rgba(129, 140, 248, 0.15); /* Slight tint for emphasis */
          background: rgba(30, 41, 59, 0.7); /* Slightly darker for contrast */
        }
        
        .about-text {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 15px;
          font-size: 1rem;
        }
        
        .about-text b {
          color: var(--text-primary);
          font-weight: 600;
        }
        
        .about-text:last-child { margin-bottom: 0; }

        .section-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin: 60px 0 20px;
          padding-left: 5px;
        }

        .section-header {
          font-size: 1rem;
          color: var(--text-primary);
          margin: 0 0 20px 0;
          font-weight: 600;
        }

        /* Skills */
        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          font-size: 0.75rem;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 500;
        }

        .pill-primary { background: rgba(56, 189, 248, 0.1); color: var(--accent-blue); border: 1px solid rgba(56, 189, 248, 0.2); }
        .pill-secondary { background: rgba(255, 255, 255, 0.05); color: var(--text-secondary); border: 1px solid var(--border-color); }
        .pill-warning { background: rgba(251, 191, 36, 0.1); color: var(--accent-gold); border: 1px solid rgba(251, 191, 36, 0.2); }

        /* Highlight Projects */
        .highlight-card {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: center;
          padding: 0;
          overflow: hidden;
        }
        
        .highlight-card.reverse-mobile {
           grid-template-columns: 0.8fr 1.2fr;
        }

        .highlight-content { padding: 40px; }
        .highlight-media {
          height: 100%;
          min-height: 250px;
          position: relative;
          cursor: zoom-in;
          overflow: hidden;
        }

        .highlight-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .highlight-media:hover img { transform: scale(1.05); }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
        }
        
        .img-overlay span {
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .highlight-media:hover .img-overlay { opacity: 1; }

        .highlight-header h3 {
          margin: 0;
          font-size: 1.5rem;
          color: white;
        }

        .project-type {
          font-size: 0.9rem;
          color: var(--accent-blue);
          margin: 5px 0 15px;
        }

        .description {
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .badges-row { display: flex; flex-wrap: wrap; gap: 10px; }
        .badge { font-size: 0.75rem; padding: 6px 12px; border-radius: 6px; font-weight: 600; }
        .badge-gold { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }
        .badge-purple { background: rgba(139, 92, 246, 0.15); color: #a78bfa; }

        /* Standard Grid */
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--border-color), transparent);
          margin: 80px 0;
        }

        /* Education & Dual */
        .dual-column { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        .edu-item {
          display: flex;
          align-items: start;
          gap: 15px;
        }

        .icon-box {
          font-size: 1.5rem;
          background: rgba(255,255,255,0.05);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .edu-details h4 { margin: 0 0 4px; font-size: 1rem; }
        .degree { display: block; font-size: 0.9rem; color: var(--text-secondary); }
        .year { font-size: 0.8rem; color: var(--accent-blue); font-weight: 500; margin-top: 5px; display: block; }

        .cert-list { display: flex; flex-direction: column; gap: 15px; }

        /* Footer */
        footer {
          text-align: center;
          margin-top: 100px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .footer-sub { font-size: 0.8rem; opacity: 0.6; }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        .lightbox-content { position: relative; max-width: 90%; max-height: 90%; }
        .lightbox-content img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 0 50px rgba(0,0,0,0.5); }
        
        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.7;
          transition: 0.2s;
        }
        .close-btn:hover { opacity: 1; transform: scale(1.1); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Responsive */
        @media (max-width: 768px) {
          .section-grid, .highlight-card, .dual-column, .highlight-card.reverse-mobile {
            grid-template-columns: 1fr;
          }
          .highlight-media { min-height: 200px; order: -1; }
          .hero-name { font-size: 2rem; }
          .container { padding: 40px 20px; }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ title, badge, desc, tags }: any) {
  return (
    <div className="glass-card project-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f1f5f9' }}>{title}</h3>
        <span style={{ fontSize: '0.7rem', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>{badge}</span>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tags.map((t: string) => (
          <span key={t} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', padding: '4px 8px', borderRadius: '4px' }}>{t}</span>
        ))}
      </div>
      <style jsx>{`
        .project-card { display: flex; flex-direction: column; height: 100%; }
      `}</style>
    </div>
  );
}

function CertItem({ title, provider, date }: any) {
  return (
    <div className="cert-row">
      <div className="cert-check">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <div className="cert-text">
        <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#e2e8f0' }}>{title}</h4>
        <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>{provider} • <span style={{ color: '#38bdf8' }}>{date}</span></div>
      </div>
      <style jsx>{`
        .cert-row { display: flex; gap: 12px; align-items: start; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .cert-row:last-child { border-bottom: none; padding-bottom: 0; }
        .cert-check { 
          color: #10b981; 
          background: rgba(16, 185, 129, 0.1); 
          width: 24px; height: 24px; 
          border-radius: 50%; 
          display: flex; align-items: center; justify-content: center; 
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}