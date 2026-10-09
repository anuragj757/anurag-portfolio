import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="container section-padding border-bottom relative">
      
      <div className="grid-layout" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Playful Large Statement */}
        <div style={{ gridColumn: 'span 12', marginBottom: '80px', textAlign: 'center' }}>
          <h2 className="display-huge" style={{ position: 'relative', display: 'inline-block' }}>
            I LIKE<br/>
            <span className="text-accent-1" style={{ position: 'relative', zIndex: 2 }}>BUILDING</span><br/>
            THINGS.
            <div className="graphic-star-outline absolute" style={{ bottom: '10%', right: '-10%', zIndex: 1 }}></div>
          </h2>
        </div>

        {/* Editorial Statement */}
        <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '100px' }}>
          <h3 className="display-medium" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.2 }}>
            TECHNICAL ENOUGH TO <span className="text-accent-2 text-outline">BUILD IT</span>. <br/>
            CREATIVE ENOUGH TO MAKE PEOPLE <span className="text-outline">CARE</span>.
          </h3>
        </div>

        {/* Info Blocks */}
        <div style={{ gridColumn: 'span 12', display: 'flex', flexWrap: 'wrap', gap: '2px', background: 'var(--text-primary)', border: '2px solid var(--text-primary)' }}>
          
          <div style={{ flex: '1 1 250px', background: 'var(--bg-color)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="t-mono-label">IDENTITY</span>
            <span className="display-medium" style={{ fontSize: '2rem' }}>ANURAG<br/>JADHAV</span>
          </div>

          <div style={{ flex: '1 1 250px', background: 'var(--bg-color)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="t-mono-label">EDUCATION</span>
            <span className="display-medium" style={{ fontSize: '2rem' }}>B.TECH<br/>DATA SCIENCE</span>
          </div>

          <div style={{ flex: '1 1 250px', background: 'var(--bg-color)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="t-mono-label">LOCATION</span>
            <span className="display-medium" style={{ fontSize: '2rem' }}>PUNE,<br/>INDIA</span>
          </div>

          <div style={{ flex: '1 1 250px', background: 'var(--accent-primary)', color: 'var(--bg-color)', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="t-mono-label" style={{ color: 'rgba(255,255,255,0.7)' }}>FOCUS</span>
            <span className="display-medium" style={{ fontSize: '2rem', lineHeight: 1.1 }}>AI<br/>WEB<br/>DATA<br/>MEDIA</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
