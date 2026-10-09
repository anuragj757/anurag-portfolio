import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="container section-padding border-bottom relative">
      
      <div style={{ marginBottom: '80px', textAlign: 'center' }}>
        <h2 className="display-large text-outline">MILESTONES</h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        
        {/* Stamp 1 */}
        <div className="editorial-image" style={{ 
          width: '300px', 
          height: '300px', 
          borderRadius: '50%', 
          background: 'var(--accent-secondary)', 
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px',
          transform: 'rotate(-5deg)'
        }}>
          <div className="graphic-star" style={{ background: '#fff', marginBottom: '16px' }}></div>
          <div className="display-medium" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>IDEATHON 2025</div>
          <div className="display-medium" style={{ fontSize: '2.5rem', lineHeight: 1 }}>WINNER</div>
          <div className="t-mono-micro" style={{ marginTop: '16px', color: '#fff' }}>NIAT PUNE</div>
        </div>

        {/* Stamp 2 */}
        <div className="editorial-image" style={{ 
          width: '300px', 
          height: '300px', 
          borderRadius: '50%', 
          background: 'var(--text-primary)', 
          color: 'var(--bg-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px',
          transform: 'rotate(4deg)',
          marginTop: '40px'
        }}>
          <div className="t-mono-micro" style={{ marginBottom: '16px', color: '#fff' }}>SOCIAL MEDIA HEAD</div>
          <div className="graphic-star spin-slow" style={{ background: '#fff', marginBottom: '16px' }}></div>
          <div className="display-medium" style={{ fontSize: '2.5rem', lineHeight: 1 }}>GEN AI<br/>CLUB</div>
        </div>

        {/* Stamp 3 */}
        <div className="editorial-image" style={{ 
          width: '300px', 
          height: '300px', 
          borderRadius: '50%', 
          background: 'var(--accent-primary)', 
          color: '#fff',
          border: '2px solid var(--text-primary)',
          boxShadow: '12px 12px 0 var(--text-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px',
          transform: 'rotate(-2deg)',
          marginTop: '10px'
        }}>
          <div className="display-medium" style={{ fontSize: '1.5rem', marginBottom: '16px', lineHeight: 1.1 }}>NXTWAVE ×<br/>OPENAI<br/>BUILDATHON<br/>FINALIST</div>
          <div className="graphic-star" style={{ background: '#fff', marginBottom: '16px' }}></div>
          <div className="t-mono-micro" style={{ color: '#fff' }}>FINALIST • 2026</div>
        </div>

      </div>

    </section>
  );
};

export default ExperienceSection;
