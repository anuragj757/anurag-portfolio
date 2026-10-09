import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingBottom: '60px', overflow: 'hidden' }}>
      
      {/* Decorative Elements */}
      <div className="absolute shape-blob" style={{ width: '40vw', height: '40vw', background: 'var(--accent-primary)', opacity: 0.05, top: '10%', left: '-10%', zIndex: 0 }}></div>
      <div className="absolute shape-blob" style={{ width: '30vw', height: '30vw', background: 'var(--accent-secondary)', opacity: 0.05, bottom: '-5%', right: '-5%', zIndex: 0, animationDelay: '-4s' }}></div>

      {/* Hero Typography */}
      <div className="container relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div className="relative" style={{ width: '100%' }}>
          
          {/* Floating Labels */}
          <div className="absolute t-mono-micro" style={{ top: '-10%', left: '10%', transform: 'rotate(-10deg)', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>
            PUNE / INDIA
          </div>
          <div className="absolute t-mono-micro" style={{ top: '5%', right: '5%', transform: 'rotate(5deg)', background: '#fff', border: '1px solid var(--text-primary)', padding: '4px 8px' }}>
            DATA SCIENCE
          </div>
          <div className="absolute sticker" style={{ bottom: '15%', left: '15%', zIndex: 20 }}>
            AI BUILDER
          </div>
          <div className="absolute sticker sticker-alt" style={{ bottom: '5%', right: '15%', zIndex: 20 }}>
            DIGITAL CREATOR
          </div>

          <h1 className="display-huge relative z-10" style={{ display: 'inline-block' }}>
            ANURAG<br />
            <span className="text-outline">JADHAV</span>
          </h1>

          <div className="graphic-star-outline absolute" style={{ top: '40%', right: '20%' }}></div>

        </div>

        <h2 className="display-medium" style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
          I BUILD. I CREATE. I SHIP.
        </h2>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
          <span className="pill-nav" style={{ borderStyle: 'dashed' }}>FULL-STACK</span>
          <span className="pill-nav" style={{ borderStyle: 'dashed' }}>AI / AUTOMATION</span>
          <span className="pill-nav" style={{ borderStyle: 'dashed' }}>SOCIAL MEDIA</span>
          <span className="pill-nav" style={{ borderStyle: 'dashed' }}>DIGITAL CONTENT</span>
        </div>

      </div>

      {/* Central Collage */}
      <div className="container relative z-20" style={{ width: '100%', maxWidth: '1200px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-40px' }}>
        
        {/* Frame 1: Tech Pulse */}
        <div className="absolute editorial-image" style={{ width: '45%', aspectRatio: '16/10', left: '15%', top: '0', zIndex: 10, transform: 'rotate(-3deg)' }}>
          <div style={{ borderBottom: '1px solid var(--text-primary)', padding: '6px 10px', display: 'flex', gap: '6px', background: '#f0f0f0' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div>
          </div>
          <div style={{ width: '100%', height: 'calc(100% - 21px)', background: '#fff', overflow: 'hidden' }}>
            <img src="/tech-pulse-home.png" alt="Tech Pulse Homepage" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }} />
          </div>
        </div>

        {/* Frame 2: Veri Clause AI */}
        <div className="absolute editorial-image" style={{ width: '35%', aspectRatio: '4/3', right: '10%', top: '20%', zIndex: 15, transform: 'rotate(4deg)', background: 'var(--text-primary)', color: 'var(--bg-color)' }}>
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', opacity: 0.7 }}>LEGAL TECH</div>
            <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', lineHeight: 1, marginTop: '8px' }}>VERI CLAUSE AI</div>
          </div>
        </div>

        {/* Frame 3: Social / Content */}
        <div className="absolute editorial-image" style={{ width: '25%', aspectRatio: '1/1', left: '30%', bottom: '-20%', zIndex: 20, transform: 'rotate(-8deg)', background: 'var(--accent-primary)', color: '#fff' }}>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
            <div className="graphic-star" style={{ background: '#fff', marginBottom: '12px' }}></div>
            <div style={{ fontSize: '1rem', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>SOCIAL<br/>CREATIVE</div>
          </div>
        </div>

        {/* SVG Annotations */}
        <svg className="absolute" width="100%" height="100%" style={{ zIndex: 25, pointerEvents: 'none' }}>
          {/* Hand-drawn arrow from Tech Pulse to Veri Clause */}
          <path d="M 650 150 Q 750 100, 850 180" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeDasharray="6 6" />
          <circle cx="850" cy="180" r="5" fill="var(--accent-secondary)" />
          
          {/* Annotation text */}
          <text x="750" y="90" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-primary)" fontWeight="bold">AI MODELS</text>
        </svg>

      </div>

      <div className="absolute" style={{ bottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 30 }}>
        <span className="t-mono-micro">SCROLL ↓</span>
      </div>
      
    </section>
  );
};

export default Hero;
