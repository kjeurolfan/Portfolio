'use client';

import { useState, useEffect } from 'react';
import CodeParticles from './components/CodeParticles';
import AIPrompt from './components/AIPrompt';
import SideNav from './components/SideNav';
import { GitHubCalendar } from 'react-github-calendar';
import Preloader from './components/Preloader';

export default function Portfolio() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [symposiumIndex, setSymposiumIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const symposiumCerts = [
    '/Portfolio/COLLEGE SYMPOSIUM CERTIFICATE 1.jpg',
    '/Portfolio/COLLEGE SYMPOSIUM CERTIFICATE 2.jpg'
  ];

  const nextSymposium = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSymposiumIndex((prev) => (prev + 1) % symposiumCerts.length);
  };

  const prevSymposium = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSymposiumIndex((prev) => (prev - 1 + symposiumCerts.length) % symposiumCerts.length);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`codeverse-wrapper ${loading ? 'hide-content' : 'show-content'}`}>
        <CodeParticles />
      <SideNav />
      
      <main className="main-content">
        <div className="container">
        {/* HERO SECTION */}
        <header id="hero" className="hero">
          <div className="profile-pic-container">
            <img src="/Portfolio/DSC_9033.JPG" alt="Ken Justine Eurolfan" />
          </div>
          <h1 className="hero-name">KEN JUSTINE EUROLFAN</h1>
          <AIPrompt />
          
          <div className="contact-row">
            <a href="mailto:keneurolfan@gmail.com" className="data-link" title="Email">
              <span className="icon">✉</span> Email
            </a>
            <div className="node-connector"></div>
            <a href="#" className="data-link disabled" title="Phone">
              <span className="icon">✆</span> 09267467081
            </a>
            <div className="node-connector"></div>
            <a href="https://www.linkedin.com/in/ken-justine-eurolfan-04079b353/" target="_blank" rel="noreferrer" className="data-link" title="LinkedIn">
              <span className="icon">in</span> LinkedIn
            </a>
          </div>

          <div className="action-row" style={{ marginTop: '30px' }}>
            <a href="/Portfolio/Ken%20Justine%20Eurolfan-%20Resume.pdf.pdf" target="_blank" rel="noreferrer" className="resume-btn">
              View Resume
            </a>
          </div>
        </header>

        {/* ABOUT ME */}
        <section id="about" className="section-container">
          <h2 className="section-header">About Me</h2>
          <div className="data-cube about-cube" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#d1d1d6', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Hi there! I'm <b style={{ color: '#ffffff' }}>Ken Justine Eurolfan</b>, a Software Developer Intern specializing in <b style={{ color: '#ffffff' }}>Front-End</b> and <b style={{ color: '#ffffff' }}>QA</b>.
            </p>
            <p style={{ color: '#a1a1a6', fontSize: '1.05rem', lineHeight: '1.8' }}>
              I’m a results-driven developer with a passion for clean UI and rock-solid code. My skills includes a mix of <b style={{ color: '#ffffff' }}>Front-End</b> expertise and a strong IT foundation in <b style={{ color: '#ffffff' }}>C#, Next.js, and SQL</b>. 
              I thrive on using <b style={{ color: '#ffffff' }}>AI</b>-augmented workflows to rapidly prototype and debug, making sure everything I do meets the highest quality standards. 
              Whether I’m crafting a new feature or running functional tests, I’m focused on delivering flawless digital solutions with a friendly, collaborative attitude!
            </p>
          </div>
        </section>

        {/* SKILLS - CONSTELLATION */}
        <section id="skills" className="section-container">
          <h2 className="section-header">Expertise & Skills</h2>
          <div className="constellation-container">
            <div className="orbit outer-orbit">
              <div className="skill-node soft-skill" style={{ '--angle': '0deg' } as any}><span>QA Methodology</span></div>
              <div className="skill-node soft-skill" style={{ '--angle': '72deg' } as any}><span>Front-End Dev</span></div>
              <div className="skill-node soft-skill" style={{ '--angle': '144deg' } as any}><span>Problem Solving</span></div>
              <div className="skill-node soft-skill" style={{ '--angle': '216deg' } as any}><span>Communication</span></div>
              <div className="skill-node soft-skill" style={{ '--angle': '288deg' } as any}><span>Teamwork</span></div>
            </div>
            <div className="orbit inner-orbit">
              <div className="skill-node core-skill" style={{ '--angle': '0deg' } as any}><span>Next.js</span></div>
              <div className="skill-node core-skill" style={{ '--angle': '60deg' } as any}><span>React</span></div>
              <div className="skill-node core-skill" style={{ '--angle': '120deg' } as any}><span>C#</span></div>
              <div className="skill-node core-skill" style={{ '--angle': '180deg' } as any}><span>SQL</span></div>
              <div className="skill-node core-skill" style={{ '--angle': '240deg' } as any}><span>Python</span></div>
              <div className="skill-node core-skill" style={{ '--angle': '300deg' } as any}><span>Java</span></div>
            </div>
            <div className="center-core">
              <div className="core-pulse"></div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section id="experience" className="section-container">
          <h2 className="section-header">Professional Experience</h2>
          
          <div className="experience-timeline">
            <div className="timeline-line"></div>
            
            <div className="experience-card data-cube">
              <div className="exp-pulse"></div>
              
              <div className="exp-header">
                <div className="exp-titles">
                  <h3>Software Developer Intern <span className="exp-tag">Front-End & QA</span></h3>
                  <div className="exp-meta">
                    <span className="company">Inspire Holdings Inc. – BGC</span>
                    <span className="duration">Jan 2026 – Present</span>
                  </div>
                </div>
              </div>
              
              <div className="exp-body">
                <div className="task-item">
                  <div className="task-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                  <p>Develop responsive UI components using Next.js, TypeScript, and Tailwind CSS, leveraging <strong>AI-driven workflows</strong> to reduce development time by 40% while maintaining code standards.</p>
                </div>
                <div className="task-item">
                  <div className="task-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <p>Conduct comprehensive <strong>Functional and Regression Testing</strong> to ensure application stability and UI consistency.</p>
                </div>
                <div className="task-item">
                  <div className="task-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  </div>
                  <p>Manage AI-assisted debugging and refactoring, focusing on <strong>code verification</strong> and architectural integrity.</p>
                </div>
                <div className="task-item">
                  <div className="task-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  <p>Collaborate with design teams to translate <strong>Figma mockups</strong> into interactive, high-performance web pages.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section-container">
          <h2 className="section-header">Certifications</h2>
          
          <div className="cube-grid">
            <div className="data-cube standard-cube highlight-cert" onClick={() => setLightboxImg('/Portfolio/cert1.jpg')}>
              <div className="cube-img" style={{ height: '280px', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/Portfolio/cert1.jpg" alt="National Hackathon" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
              </div>
              <div className="cube-header">
                <h3>National Hackathon</h3>
                <span className="type-tag">Top 10 Finalist</span>
              </div>
            </div>

            <div className="data-cube standard-cube highlight-cert" onClick={() => setLightboxImg('/Portfolio/sixsigma.png')}>
              <div className="cube-img" style={{ height: '280px', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/Portfolio/sixsigma.png" alt="Lean Six Sigma Yellow Belt" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
              </div>
              <div className="cube-header">
                <h3>Lean Six Sigma Yellow Belt</h3>
                <span className="type-tag">Quality Management</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column' }}>
            <div className="data-cube standard-cube highlight-cert" style={{ width: '100%', marginBottom: '24px' }} onClick={() => setLightboxImg(symposiumCerts[symposiumIndex])}>
              <div className="cube-img" style={{ height: '320px', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <img src={symposiumCerts[symposiumIndex]} alt={`College Symposium ${symposiumIndex + 1}`} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                
                <button 
                  onClick={prevSymposium} 
                  style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.8)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', transition: '0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                >
                  &#8592;
                </button>
                <button 
                  onClick={nextSymposium} 
                  style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.8)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', transition: '0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                >
                  &#8594;
                </button>
              </div>
              <div className="cube-header">
                <h3>College Symposium</h3>
                <span className="type-tag">Capstone Exhibition</span>
              </div>
            </div>

            <div className="cube-grid" style={{ width: '100%' }}>
              <div className="data-cube compact-cube highlight-cert" onClick={() => setLightboxImg('/Portfolio/sql.png')} style={{ maxWidth: '100%', display: 'flex', alignItems: 'center', gap: '20px', flexDirection: 'row', padding: '20px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#080808', flexShrink: 0 }}>
                  <img src="/Portfolio/sql.png" alt="SQL Injection Attacks" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="cube-header" style={{ alignItems: 'flex-start', textAlign: 'left', margin: 0 }}>
                  <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: '#fff' }}>SQL Injection Attacks</h3>
                  <span className="type-tag">EC-Council</span>
                </div>
              </div>

              <div className="data-cube compact-cube highlight-cert" onClick={() => setLightboxImg('/Portfolio/cybersec.png')} style={{ maxWidth: '100%', display: 'flex', alignItems: 'center', gap: '20px', flexDirection: 'row', padding: '20px' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#080808', flexShrink: 0 }}>
                  <img src="/Portfolio/cybersec.png" alt="Cyber Security Fundamentals" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="cube-header" style={{ alignItems: 'flex-start', textAlign: 'left', margin: 0 }}>
                  <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: '#fff' }}>Cyber Security Fundamentals</h3>
                  <span className="type-tag">EC-Council</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS - DATA CUBES */}
        <section id="projects" className="section-container">
          <h2 className="section-header">Featured Projects</h2>
          
          <a href="https://www.facebook.com/profile.php?id=61581728527126" target="_blank" rel="noreferrer" className="data-cube featured-cube" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="cube-content">
              <div className="cube-header">
                <h3>HANAPP Mobile App</h3>
                <span className="type-tag">Cross-Platform Service Application</span>
              </div>
              <p className="cube-desc">
                A comprehensive mobile application connecting service seekers with local providers. Engineered with real-time chat functionality, secure booking systems, and integrated online payment gateways.
              </p>
              <div className="cube-badges">
                <span className="sleek-badge">Top 10 National Hackathon</span>
                <span className="sleek-badge">Capstone Symposium 2025</span>
                <span className="sleek-badge outline">QA Testing</span>
              </div>
            </div>
            <div className="cube-media-container" style={{ overflow: 'visible' }}>
              <div className="mobile-mockup">
                <div className="mobile-notch"></div>
                <div className="mobile-screen">
                  <div className="app-carousel">
                    <img src="/Portfolio/HANAPP/550998622_1985002748937938_4529148100484100999_n.png" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/552621190_1606206827211553_1265367446479688378_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/553034872_1142714280632226_7521329975645035963_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/553216230_1463574394905015_5159388525666690684_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/553456009_819161087311177_8182851808572986536_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/557451693_1139621238360098_1611483959546296859_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/557532092_2314536515632713_1866779433140785168_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/558025728_4142470156026548_7191836406409101173_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/562661459_2335007450271964_2636894785553406147_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/579945256_1368885291270507_3511201134164389510_n.jpg" alt="HanApp Screenshot" />
                    <img src="/Portfolio/HANAPP/591336964_1362581622317513_4329797413332711127_n.jpg" alt="HanApp Screenshot" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className="cube-grid">
            <div className="data-cube standard-cube">
              <div className="cube-img">
                <img src="/Portfolio/godr.jpg" alt="Guardians of the Digital Realm" style={{ objectPosition: 'center' }} />
              </div>
              <div className="cube-header">
                <h3>Guardians of the Digital Realm</h3>
                <span className="type-tag">Game Dev</span>
              </div>
              <p className="cube-desc">Cybersecurity Educational Game. Executed comprehensive QA & Functional Testing protocols.</p>
              <div className="cube-badges"><span className="sleek-badge outline">QA Testing</span> <span className="sleek-badge outline">Godot</span></div>
            </div>
            <div className="data-cube standard-cube">
              <div className="cube-img">
                <img src="/Portfolio/ategirl.png" alt="AteGirlPH" style={{ objectPosition: 'top center' }} />
              </div>
              <div className="cube-header">
                <h3>AteGirlPH</h3>
                <span className="type-tag">Web Dev</span>
              </div>
              <p className="cube-desc">Home service booking platform. Conducted full-stack functional testing and SQL validation.</p>
              <div className="cube-badges"><span className="sleek-badge outline">SQL Validation</span></div>
            </div>
          </div>

          <div className="secondary-projects">
            <div className="data-cube compact-cube">
              <div className="cube-header">
                <h3>Performance Monitor</h3>
                <span className="type-tag">System Tool</span>
              </div>
              <p className="cube-desc">Automated grading utility for educators. Streamlines data categorization and reporting.</p>
              <div className="cube-badges"><span className="sleek-badge outline">C# .NET</span></div>
            </div>
          </div>
        </section>

        {/* GITHUB SECTION */}
        <section id="github" className="section-container">
          <h2 className="section-header">GitHub Profile</h2>
          
          <div className="github-container">
            {/* Profile Card */}
            <div className="github-profile-card data-cube">
              <div className="gh-avatar">
                <img src="https://avatars.githubusercontent.com/u/74643144?v=4" alt="GitHub Avatar" />
              </div>
              <div className="gh-info">
                <h3>Ken Justine Eurolfan</h3>
                <span>@kjeurolfan</span>
                <div className="gh-stats">
                  <span className="sleek-badge outline">3 Public Repos</span>
                  <span className="sleek-badge outline">3 Followers</span>
                </div>
              </div>
              <a href="https://github.com/kjeurolfan" target="_blank" rel="noreferrer" className="gh-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>

            {/* Pinned Repos */}
            <div className="gh-repos">
              <a href="https://github.com/kjeurolfan/hanapp-frontend" target="_blank" rel="noreferrer" className="gh-repo-card data-cube">
                <div className="repo-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  <h4>hanapp-frontend</h4>
                </div>
                <div className="repo-lang">
                  <span className="lang-dot ts"></span> TypeScript
                </div>
              </a>
              <a href="https://github.com/kjeurolfan/Portfolio" target="_blank" rel="noreferrer" className="gh-repo-card data-cube">
                <div className="repo-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  <h4>Portfolio</h4>
                </div>
                <div className="repo-lang">
                  <span className="lang-dot ts"></span> TypeScript
                </div>
              </a>
              <a href="https://github.com/kjeurolfan/practice" target="_blank" rel="noreferrer" className="gh-repo-card data-cube">
                <div className="repo-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  <h4>practice</h4>
                </div>
                <div className="repo-lang">
                  <span className="lang-dot ts"></span> TypeScript
                </div>
              </a>
            </div>

            {/* Contribution Graph */}
            <div className="gh-calendar data-cube">
              <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '20px', fontWeight: '500', alignSelf: 'flex-start' }}>Contributions in the last year</h3>
              {mounted && (
                <GitHubCalendar 
                  key={`gh-reload-${Date.now()}`}
                  username="kjeurolfan" 
                  colorScheme="dark" 
                  theme={{ 
                    light: ['rgba(255,255,255,0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'], 
                    dark: ['rgba(255,255,255,0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'] 
                  }} 
                />
              )}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-container">
          <h2 className="section-header">Education</h2>
          
          <div className="knowledge-chain">
            <div className="chain-block edu-block">
              <div className="block-icon" style={{ overflow: 'hidden', background: '#fff' }}>
                <img src="/Portfolio/STI.png" alt="STI College Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </div>
              <div className="block-details">
                <h4>STI COLLEGE - GLOBAL CITY</h4>
                <span className="deg">BS Information Technology</span>
                <span className="date">2022 - Present</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="matrix-footer">
          <p>&copy; 2026 Ken Justine P. Eurolfan</p>
        </footer>
        </div>
      </main>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="View" />
            <button className="close-btn" onClick={() => setLightboxImg(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .hide-content {
          opacity: 0;
          height: 100vh;
          overflow: hidden;
          pointer-events: none;
        }

        .show-content {
          opacity: 1;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .codeverse-wrapper {
          min-height: 100vh;
          position: relative;
          color: var(--text-primary);
          z-index: 1;
        }

        .main-content {
          margin-left: 200px;
          width: calc(100% - 200px);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 80px 24px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          font-family: var(--font-outfit), sans-serif;
          color: #ffffff;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
          text-align: center;
        }

        .section-container {
          margin-bottom: 80px;
          position: relative;
        }

        /* HERO */
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 80px;
        }

        .profile-pic-container {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        /* MOBILE MOCKUP CAROUSEL */
        .mobile-mockup {
          width: 240px;
          height: 480px;
          background: #000;
          border: 12px solid #2a2a2d;
          border-radius: 40px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.1);
          overflow: hidden;
          margin: 0 auto;
        }

        .mobile-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 110px;
          height: 25px;
          background: #2a2a2d;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          z-index: 10;
        }

        .mobile-notch::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 6px;
          background: #1a1a1c;
          border-radius: 10px;
        }

        .mobile-screen {
          width: 100%;
          height: 100%;
          background: #111;
          overflow: hidden;
          position: relative;
        }

        .app-carousel {
          display: flex;
          width: max-content;
          height: 100%;
          animation: autoSlide 25s infinite linear alternate;
        }

        @keyframes autoSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-216px * 10)); } /* 11 images total, shift by 10 */
        }

        .app-carousel img {
          width: 216px;
          height: 100%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .profile-pic-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-name {
          font-family: var(--font-outfit), sans-serif;
          font-size: 4rem;
          font-weight: 700;
          background: linear-gradient(180deg, #ffffff 0%, #a1a1a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .data-link {
          color: #a1a1a6;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: 0.2s;
        }
        
        .data-link:hover {
          color: #ffffff;
        }

        .data-link.disabled { pointer-events: none; }

        .node-connector {
          width: 4px;
          height: 4px;
          background: #333333;
          border-radius: 50%;
        }

        .resume-btn {
          display: inline-block;
          background: #ffffff;
          color: #000000;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px 24px;
          border-radius: 30px;
          text-decoration: none;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }
        
        .resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
          background: #e2e2e6;
        }

        /* CONSTELLATION */
        .constellation-container {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .orbit {
          position: absolute;
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: spin linear infinite;
          transform-style: preserve-3d;
        }

        .outer-orbit {
          width: 400px;
          height: 400px;
          animation-duration: 60s;
        }

        .inner-orbit {
          width: 200px;
          height: 200px;
          animation-duration: 30s;
          animation-direction: reverse;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .skill-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: rotate(var(--angle)) translateY(-50%) translateX(-50%) rotate(calc(var(--angle) * -1));
          transform-origin: 0 0;
        }

        .outer-orbit .skill-node { transform: rotate(var(--angle)) translateY(-200px) rotate(calc(var(--angle) * -1)); }
        .inner-orbit .skill-node { transform: rotate(var(--angle)) translateY(-100px) rotate(calc(var(--angle) * -1)); }

        .outer-orbit .skill-node span {
           display: block;
           animation: counterSpin 60s linear infinite;
        }
        .inner-orbit .skill-node span {
           display: block;
           animation: counterSpin 30s linear infinite reverse;
        }

        @keyframes counterSpin {
          100% { transform: rotate(-360deg); }
        }

        .skill-node span {
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #d1d1d6;
          white-space: nowrap;
          transition: 0.3s;
          backdrop-filter: blur(5px);
        }

        .core-skill span {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(30, 30, 30, 0.8);
        }

        .skill-node:hover span {
          scale: 1.1;
          z-index: 10;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .center-core {
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          position: absolute;
          animation: pulse 4s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.3); opacity: 0.3; }
        }

        /* DATA CUBES */
        .data-cube {
          background: rgba(20, 20, 20, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 30px;
          position: relative;
          transition: 0.4s;
        }

        .data-cube:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(30, 30, 30, 0.4);
          transform: translateY(-4px);
        }

        /* EXPERIENCE TIMELINE */
        .experience-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 30px;
        }

        .timeline-line {
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.05));
          border-radius: 2px;
        }

        .experience-card {
          position: relative;
          padding: 30px 40px;
        }

        .exp-pulse {
          width: 14px;
          height: 14px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          left: -30px;
          top: 40px;
          box-shadow: 0 0 15px rgba(255,255,255,0.8);
          animation: nodePulse 2s infinite alternate;
          z-index: 2;
        }

        @keyframes nodePulse {
          0% { transform: scale(1); box-shadow: 0 0 10px rgba(255,255,255,0.5); }
          100% { transform: scale(1.3); box-shadow: 0 0 20px rgba(255,255,255,1); }
        }

        .exp-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 20px;
        }

        .exp-titles h3 {
          font-size: 1.4rem;
          color: #ffffff;
          margin: 0 0 12px 0;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .exp-tag {
          font-size: 0.75rem;
          padding: 4px 10px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .exp-meta {
          display: flex;
          gap: 20px;
          color: #a1a1a6;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .company { color: #d1d1d6; }
        
        .exp-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .task-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
        }

        .task-item:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.15);
          transform: translateX(5px);
        }

        .task-icon {
          color: #ffffff;
          background: rgba(255,255,255,0.1);
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .task-item p {
          margin: 0;
          color: #a1a1a6;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .task-item strong {
          color: #ffffff;
          font-weight: 600;
        }

        .featured-cube {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
          animation: featureGlow 3s ease-in-out infinite alternate;
        }

        .featured-cube:hover {
          animation: none;
          box-shadow: 0 0 55px rgba(255, 255, 255, 0.6), inset 0 0 25px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.9) !important;
        }

        .about-cube {
          animation: featureGlow 3s ease-in-out infinite alternate;
        }

        .about-cube:hover {
          animation: none;
          box-shadow: 0 0 55px rgba(255, 255, 255, 0.6), inset 0 0 25px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.9) !important;
        }

        @keyframes featureGlow {
          0% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 45px rgba(255, 255, 255, 0.45), inset 0 0 20px rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.6);
          }
        }

        .cube-header h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin: 0 0 5px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .type-tag {
          color: #a1a1a6;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .cube-img {
          width: 100%;
          height: 220px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cube-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .standard-cube:hover .cube-img img {
          transform: scale(1.05);
        }

        .cube-desc {
          color: #a1a1a6;
          line-height: 1.6;
          margin: 20px 0;
          font-size: 0.95rem;
        }

        .cube-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .sleek-badge {
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
        
        .sleek-badge.outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cube-media-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-ui {
          width: 220px;
          height: 280px;
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          position: relative;
          z-index: 2;
        }

        .ui-header { background: rgba(255,255,255,0.05); padding: 12px; text-align: center; font-size: 0.8rem; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; }
        .ui-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; }
        .ui-msg { padding: 8px 12px; border-radius: 16px; font-size: 0.75rem; max-width: 85%; color: #fff; }
        .ui-msg.left { background: rgba(255,255,255,0.1); align-self: flex-start; border-bottom-left-radius: 4px; }
        .ui-msg.right { background: #007aff; align-self: flex-end; border-bottom-right-radius: 4px; }

        .orbiting-cert {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          z-index: 3;
          animation: floatOrb 8s ease-in-out infinite;
          right: -10px;
          top: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        .orbiting-cert img { width: 100%; height: 100%; object-fit: cover; }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .qa-stamp {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 6px 12px;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          backdrop-filter: blur(5px);
          background: rgba(255, 255, 255, 0.05);
          z-index: 4;
        }

        .cube-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .secondary-projects {
          margin-top: 24px;
          display: flex;
          justify-content: center;
        }

        .compact-cube {
          width: 100%;
          max-width: 500px;
          text-align: center;
          padding: 24px;
        }

        .compact-cube .cube-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .compact-cube .cube-desc {
          margin: 12px 0;
        }

        .compact-cube .cube-badges {
          justify-content: center;
        }

        /* GITHUB SECTION */
        .github-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .github-profile-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 30px;
        }

        .gh-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.1);
        }

        .gh-avatar img { width: 100%; height: 100%; object-fit: cover; }

        .gh-info { flex-grow: 1; display: flex; flex-direction: column; gap: 6px; }
        .gh-info h3 { margin: 0; color: #fff; font-size: 1.3rem; font-weight: 600; }
        .gh-info span { color: #a1a1a6; font-size: 0.9rem; }
        .gh-stats { display: flex; gap: 10px; margin-top: 8px; }

        .gh-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: 0.3s;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .gh-btn:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); border-color: rgba(255,255,255,0.4); }

        .gh-repos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .gh-repo-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          min-height: 120px;
          color: inherit;
        }

        .repo-header {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          margin-bottom: 16px;
        }

        .repo-header h4 { margin: 0; font-size: 1.1rem; font-weight: 600; }

        .repo-lang {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a1a1a6;
          font-size: 0.85rem;
        }

        .lang-dot { width: 10px; height: 10px; border-radius: 50%; }
        .lang-dot.ts { background: #3178c6; }

        .gh-calendar {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
          overflow-x: auto;
        }

        /* KNOWLEDGE CHAIN */
        .knowledge-chain {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .chain-block {
          background: rgba(20, 20, 20, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px 30px;
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .chain-block:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(30, 30, 30, 0.4);
          transform: translateY(-2px);
        }

        .chain-link {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          position: relative;
        }

        .block-icon {
          width: 50px; height: 50px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
        }

        .block-details h4 { margin: 0 0 4px; font-size: 1.1rem; color: #ffffff; font-weight: 500; }
        .block-details p { margin: 4px 0 0; font-size: 0.9rem; color: #a1a1a6; }
        .deg { color: #d1d1d6; font-size: 0.9rem; display: block; font-weight: 500; }
        .date { color: #86868b; font-size: 0.85rem; display: block; margin-top: 4px; }

        .tag { font-size: 0.7rem; padding: 4px 10px; border-radius: 12px; margin-bottom: 8px; display: inline-block; font-weight: 500; }
        .solid-tag { background: rgba(255, 255, 255, 0.1); color: #ffffff; }

        .highlight-cert { cursor: pointer; }

        /* FOOTER */
        .matrix-footer {
          text-align: center;
          margin-top: 100px;
          color: #86868b;
          font-size: 0.9rem;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px);
          z-index: 1000; display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        .lightbox-content { position: relative; max-width: 90%; max-height: 90%; }
        .lightbox-content img { max-width: 100%; max-height: 90vh; display: block; border-radius: 12px; }
        .close-btn { 
          position: absolute; top: -50px; right: 0; background: rgba(255,255,255,0.1); border: none; 
          color: #ffffff; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);
          transition: 0.2s;
        }
        .close-btn:hover { background: rgba(255,255,255,0.2); }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 900px) {
          .main-content {
            margin-left: 0;
            width: 100%;
          }
          .experience-timeline { padding-left: 15px; }
          .timeline-line { left: 0; }
          .exp-pulse { left: -21px; width: 10px; height: 10px; }
          .experience-card { padding: 20px; }
          .task-item { flex-direction: column; gap: 12px; padding: 16px; }
          .task-icon { width: 28px; height: 28px; min-width: 28px; }
          .gh-repos { grid-template-columns: 1fr; }
          .github-profile-card { flex-direction: column; text-align: center; }
          .gh-info { align-items: center; }
          .featured-cube, .cube-grid { grid-template-columns: 1fr; }
          .cube-media-container { margin-top: 40px; }
          .hero-name { font-size: 2.5rem; }
          .contact-row { flex-direction: column; gap: 10px; }
          .node-connector { display: none; }
          .constellation-container { height: 300px; }
          .outer-orbit { width: 280px; height: 280px; }
          .inner-orbit { width: 140px; height: 140px; }
          .outer-orbit .skill-node { transform: rotate(var(--angle)) translateY(-140px) rotate(calc(var(--angle) * -1)); }
          .inner-orbit .skill-node { transform: rotate(var(--angle)) translateY(-70px) rotate(calc(var(--angle) * -1)); }
        }
      `}</style>
      </div>
    </>
  );
}