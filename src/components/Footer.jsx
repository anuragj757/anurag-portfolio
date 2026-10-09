import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container" style={{ padding: '40px var(--container-padding)', backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
        
        <div>
          <span className="t-mono-label" style={{ color: 'var(--bg-color)', fontSize: '1rem' }}>ANURAG JADHAV</span>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <span className="sticker sticker-alt" style={{ padding: '4px 8px', fontSize: '0.65rem' }}>FULL-STACK DEVELOPER</span>
          <span className="sticker sticker-alt" style={{ padding: '4px 8px', fontSize: '0.65rem' }}>AI BUILDER</span>
          <span className="sticker sticker-alt" style={{ padding: '4px 8px', fontSize: '0.65rem' }}>DIGITAL CREATOR</span>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span className="t-mono-micro" style={{ color: 'var(--border-color)' }}>© 2026</span>
          <a href="https://github.com/anuragj757" target="_blank" rel="noopener noreferrer" className="t-mono-label" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--bg-color)' }}>
            GITHUB <ArrowUpRight size={12} />
          </a>
          <a href="https://www.linkedin.com/in/anurag-jadhav-1b84a2371/" target="_blank" rel="noopener noreferrer" className="t-mono-label" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--bg-color)' }}>
            LINKEDIN <ArrowUpRight size={12} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
