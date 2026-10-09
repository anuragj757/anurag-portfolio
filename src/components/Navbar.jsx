import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: 'max-content',
        maxWidth: '90vw'
      }}>
        
        <a href="#" className="pill-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div className="graphic-star" style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', animation: 'none' }}></div>
          ANURAG
        </a>

        <div className="desktop-menu" style={{ display: 'flex', gap: '8px' }}>
          <a href="#build" className="pill-nav">WORK</a>
          <a href="#create" className="pill-nav">CREATE</a>
          <a href="#about" className="pill-nav">ABOUT</a>
          <a href="#contact" className="pill-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--text-primary)', color: 'var(--bg-color)' }}>
            CONTACT <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle pill-nav" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', cursor: 'pointer', padding: '6px 12px' }}
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--bg-color)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          gap: '2rem'
        }}>
          <a href="#build" className="display-medium" onClick={() => setIsOpen(false)}>WORK</a>
          <a href="#create" className="display-medium" onClick={() => setIsOpen(false)}>CREATE</a>
          <a href="#about" className="display-medium" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#contact" className="display-medium text-accent-1" onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
