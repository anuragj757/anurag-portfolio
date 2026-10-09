import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', overflow: 'hidden' }}>
      
      {/* Marquee */}
      <div className="marquee" style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--accent-primary)', padding: '16px 0' }}>
        <div className="marquee-content">
          AVAILABLE FOR OPPORTUNITIES ✦ LET'S BUILD SOMETHING ✦ AVAILABLE FOR OPPORTUNITIES ✦ LET'S BUILD SOMETHING ✦ AVAILABLE FOR OPPORTUNITIES ✦ LET'S BUILD SOMETHING ✦ 
        </div>
      </div>

      <div className="container section-padding" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <h2 className="display-huge" style={{ marginBottom: '24px', color: 'var(--bg-color)' }}>
          LET'S<br />
          BUILD<br />
          SOMETHING.
        </h2>
        
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
          <a href="mailto:anuragj757@gmail.com" className="pill-nav" style={{ fontSize: '1rem', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            EMAIL <ArrowUpRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/anurag-jadhav-1b84a2371/" target="_blank" rel="noopener noreferrer" className="pill-nav" style={{ fontSize: '1rem', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--accent-secondary)', color: '#fff', borderColor: 'var(--accent-secondary)' }}>
            LINKEDIN <ArrowUpRight size={18} />
          </a>
          <a href="https://github.com/anuragj757" target="_blank" rel="noopener noreferrer" className="pill-nav" style={{ fontSize: '1rem', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            GITHUB <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
      
    </section>
  );
};

export default ContactSection;
