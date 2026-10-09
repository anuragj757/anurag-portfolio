import React from 'react';

const projects = [
  {
    id: '02',
    title: 'VERI CLAUSE AI',
    category: 'AI × LEGAL TECH',
    description: 'An AI-powered legal document assistant designed to simplify complex legal documents and help users understand contract clauses and potential risks.',
    tech: 'AI · DOCUMENT PROCESSING',
    year: '2025',
    bgColor: 'var(--text-primary)',
    textColor: 'var(--bg-color)',
    image: '/veri-clause-home.png'
  },
];

const BuildSection = () => {
  return (
    <section id="build" className="container section-padding border-bottom relative">
      
      {/* Section Header */}
      <div style={{ marginBottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <span className="t-mono-label" style={{ marginBottom: '16px', display: 'inline-block', border: '1px solid var(--text-primary)', padding: '4px 12px', borderRadius: '50px' }}>01 / WORK</span>
        <h2 className="display-large text-outline">
          BUILDING<br />
          <span style={{ color: 'var(--text-primary)', WebkitTextStroke: '0' }}>THINGS.</span>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>

        {/* -------------------------------------------------- */}
        {/* TECH PULSE CASE STUDY (VISUAL SEQUENCE)            */}
        {/* -------------------------------------------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1400px', margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid var(--text-primary)', paddingBottom: '24px', gap: '24px' }}>
            <div>
              <span className="t-mono-label" style={{ color: 'var(--text-secondary)' }}>01 / TECH PULSE</span>
              <h3 className="display-medium" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '16px' }}>AI-POWERED TECH<br/>NEWS AUTOMATION</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <span className="t-mono-micro">AI × AUTOMATION × EMAIL</span>
              <span className="t-mono-micro text-accent-1">REACT · VITE · N8N · GROQ · RSS · GMAIL</span>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <a href="https://tech-pulse-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="sticker" style={{ fontSize: '0.65rem' }}>LIVE ↗</a>
                <a href="https://github.com/anuragj757/tech-pulse-website" target="_blank" rel="noopener noreferrer" className="sticker sticker-alt" style={{ fontSize: '0.65rem' }}>GITHUB ↗</a>
              </div>
            </div>
          </div>

          <p className="t-body-large" style={{ maxWidth: '800px', margin: '40px 0 60px' }}>
            AI-powered technology-news email automation that fetches technology news, uses AI to curate and write the newsletter, formats the email, and delivers it through Gmail.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            
            {/* 01 PRODUCT */}
            <div className="editorial-image relative" style={{ width: '90%', maxWidth: '1000px', alignSelf: 'flex-start', padding: 0, zIndex: 10 }}>
              <div style={{ borderBottom: '1px solid var(--text-primary)', padding: '12px 16px', display: 'flex', gap: '8px', background: '#f0f0f0', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
              </div>
              <img src="/tech-pulse-home.png" alt="Tech Pulse Homepage" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
              
              <div className="absolute t-mono-micro" style={{ top: '-12px', right: '20px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>PRODUCT</div>
              <div className="absolute t-mono-micro" style={{ top: '-12px', right: '100px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px', color: 'var(--accent-primary)' }}>AI NEWSLETTER</div>
            </div>

            {/* 02 AUTOMATION */}
            <div className="editorial-image relative" style={{ width: '85%', maxWidth: '900px', alignSelf: 'flex-end', marginTop: '-10%', zIndex: 20, padding: '4px', background: 'var(--text-primary)' }}>
              <img src="/tech-pulse-n8n.png" alt="Tech Pulse n8n Workflow" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
              
              <div className="absolute t-mono-micro" style={{ bottom: '-12px', left: '20px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>N8N × GROQ</div>
              <div className="absolute t-mono-micro" style={{ bottom: '-12px', left: '120px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>AUTOMATION</div>
              
              <div className="absolute" style={{ top: '-20px', right: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <span className="sticker" style={{ padding: '4px 8px', fontSize: '0.6rem', transform: 'rotate(2deg)' }}>RSS → AI AGENT → HTML → GMAIL</span>
              </div>
            </div>

            {/* 03 OUTPUT */}
            <div className="editorial-image relative" style={{ width: '75%', maxWidth: '800px', alignSelf: 'flex-start', marginTop: '-8%', marginLeft: '5%', zIndex: 30, padding: 0 }}>
              <img src="/tech-pulse-gmail.png" alt="Tech Pulse Gmail Output" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
              
              <div className="absolute t-mono-micro" style={{ top: '-12px', right: '20px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>OUTPUT</div>
              <div className="absolute t-mono-micro" style={{ top: '-12px', right: '90px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px', color: 'var(--accent-secondary)' }}>AI-GENERATED NEWSLETTER</div>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* OTHER PROJECTS                                     */}
        {/* -------------------------------------------------- */}
        {projects.map((project, index) => (
          <div key={project.id} className="relative" style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            
            {/* Visual Poster */}
            {project.image ? (
              <div className="editorial-image relative" style={{ 
                flex: '1 1 400px', 
                background: project.bgColor,
                padding: '24px',
                zIndex: 10,
                boxShadow: '12px 12px 0 var(--accent-primary)'
              }}>
                <div style={{ borderBottom: '1px solid var(--text-primary)', padding: '8px 12px', display: 'flex', gap: '8px', background: '#f0f0f0', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
                </div>
                <div style={{ width: '100%', background: '#fff' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
                </div>
                
                <div className="absolute t-mono-micro" style={{ bottom: '-15px', right: '20px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px', color: 'var(--accent-secondary)' }}>
                  {project.tech}
                </div>
              </div>
            ) : (
              <div className="editorial-image relative" style={{ 
                flex: '1 1 400px', 
                aspectRatio: '16/10', 
                background: project.bgColor,
                color: project.textColor || 'var(--text-primary)',
                border: project.hasBorder ? '2px solid var(--text-primary)' : '2px solid transparent',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 10
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="t-mono-micro" style={{ border: `1px solid ${project.textColor || 'var(--text-primary)'}`, padding: '4px 8px', borderRadius: '4px' }}>{project.year}</span>
                  <span className="t-mono-micro">{project.tech}</span>
                </div>
                <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                  <h3 className="display-medium" style={{ lineHeight: 0.9 }}>{project.title}</h3>
                  <p className="t-mono-label" style={{ marginTop: '16px', color: project.textColor === '#ffffff' || project.textColor === 'var(--bg-color)' ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)' }}>{project.category}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <div className="graphic-star" style={{ background: project.textColor || 'var(--text-primary)' }}></div>
                </div>
              </div>
            )}

            {/* Overlapping Info & Large Number */}
            <div style={{ flex: '1 1 300px', position: 'relative', zIndex: 5, padding: '20px' }}>
              
              <div className="display-huge absolute" style={{ 
                color: 'var(--border-color)', 
                opacity: 0.5, 
                top: '-50px', 
                [index % 2 === 0 ? 'left' : 'right']: '0', 
                zIndex: -1,
                fontSize: 'clamp(8rem, 15vw, 15rem)'
              }}>
                {project.id}
              </div>

              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                  <span className="sticker">{project.category.split(' ')[0]}</span>
                </div>
                <h4 className="display-medium" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '16px' }}>{project.title}</h4>
                <p className="t-body-large">{project.description}</p>
              </div>
              
            </div>

          </div>
        ))}

        {/* -------------------------------------------------- */}
        {/* UPCHAAR CASE STUDY (VISUAL SEQUENCE)               */}
        {/* -------------------------------------------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1400px', margin: '0 auto', paddingInline: 'clamp(20px, 4vw, 64px)' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid var(--text-primary)', paddingBottom: '24px', gap: '24px' }}>
            <div>
              <span className="t-mono-label" style={{ color: 'var(--text-secondary)' }}>03 / UPCHAAR</span>
              <h3 className="display-medium" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '16px' }}>COMPREHENSIVE DIGITAL<br/>HEALTHCARE</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <span className="t-mono-micro">DIGITAL HEALTHCARE</span>
              <span className="t-mono-micro text-accent-1">WEB DEVELOPMENT · UI</span>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <a href="https://upcharr.vercel.app/" target="_blank" rel="noopener noreferrer" className="sticker" style={{ fontSize: '0.65rem' }}>LIVE ↗</a>
                <a href="https://github.com/anuragj757/Upchaar" target="_blank" rel="noopener noreferrer" className="sticker sticker-alt" style={{ fontSize: '0.65rem' }}>GITHUB ↗</a>
              </div>
            </div>
          </div>

          <p className="t-body-large" style={{ maxWidth: '800px', margin: '40px 0 60px' }}>
            A comprehensive digital platform designed for hospital administration and management with multilingual support.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            
            {/* 01 DASHBOARD */}
            <div className="editorial-image relative" style={{ width: '85%', maxWidth: '1000px', alignSelf: 'flex-start', padding: 0, zIndex: 10 }}>
              <div style={{ borderBottom: '1px solid var(--text-primary)', padding: '12px 16px', display: 'flex', gap: '8px', background: '#f0f0f0', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
              </div>
              <img src="/upchaar-dashboard.png" alt="Upchaar Dashboard" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
              
              <div className="absolute t-mono-micro" style={{ top: '-12px', right: '20px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>DOCTOR DASHBOARD</div>
            </div>

            {/* 02 AI FEATURES */}
            <div className="editorial-image relative" style={{ width: '75%', maxWidth: '800px', alignSelf: 'flex-end', marginTop: '-15%', zIndex: 20, padding: '8px', background: 'var(--accent-primary)', boxShadow: '12px 12px 0 var(--text-primary)' }}>
              <img src="/upchaar-ai-features.png" alt="Upchaar AI Features" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
              
              <div className="absolute t-mono-micro" style={{ bottom: '-12px', left: '20px', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>PLATFORM & AI</div>
            </div>

            {/* 03 DOCTORS DIRECTORY */}
            <div className="editorial-image relative" style={{ width: '60%', maxWidth: '700px', alignSelf: 'flex-start', marginTop: '-10%', marginLeft: '10%', zIndex: 30, padding: 0 }}>
              <div style={{ borderBottom: '1px solid var(--text-primary)', padding: '8px', display: 'flex', background: '#fff', justifyContent: 'center' }}>
                <span className="t-mono-micro">DIRECTORY</span>
              </div>
              <img src="/upchaar-doctors.png" alt="Upchaar Doctors Directory" style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
            </div>

          </div>
        </div>

      </div>
      
    </section>
  );
};

export default BuildSection;
