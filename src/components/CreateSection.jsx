import React, { useState, useEffect, useRef } from 'react';

const CreateSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const baseItems = [
    '/ai-learning-carousel-1.png', 
    '/ai-learning-carousel-2.png', 
    '/ai-learning-carousel-3.png',
    '/ai-learning-carousel-4.png',
    '/ai-learning-carousel-5.png'
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % baseItems.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, baseItems.length]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    setIsHovered(true);
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    setIsHovered(false);
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % baseItems.length);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      setCurrentSlide((prev) => (prev - 1 + baseItems.length) % baseItems.length);
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % baseItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + baseItems.length) % baseItems.length);

  return (
    <section id="create" className="container section-padding border-bottom relative overflow-hidden">
      
      {/* Decorative */}
      <div className="absolute shape-blob" style={{ width: '50vw', height: '50vw', background: 'var(--accent-secondary)', opacity: 0.05, top: '20%', right: '-20%', zIndex: 0 }}></div>

      {/* Section Header */}
      <div style={{ marginBottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <span className="t-mono-label" style={{ marginBottom: '16px', display: 'inline-block', border: '1px solid var(--text-primary)', padding: '4px 12px', borderRadius: '50px' }}>02 / CREATE</span>
        <h2 className="display-large text-outline">
          MAKING<br />
          <span style={{ color: 'var(--text-primary)', WebkitTextStroke: '0' }}>THINGS</span><br/>
          PEOPLE SEE.
        </h2>
      </div>

      {/* GEN AI CLUB CASE STUDY AREA */}
      <div className="relative z-10" style={{ border: '2px solid var(--text-primary)', background: 'var(--bg-color)', padding: '40px', marginBottom: '80px', boxShadow: '12px 12px 0 var(--accent-primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <h3 className="display-medium" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.9 }}>GEN AI CLUB</h3>
            <p className="t-mono-label" style={{ marginTop: '8px' }}>NIAT PUNE</p>
          </div>
          <div className="sticker sticker-alt" style={{ border: '2px solid var(--text-primary)', transform: 'rotate(2deg)' }}>
            SOCIAL MEDIA HEAD
          </div>
        </div>
        
        {/* Irregular Collage */}
        <div className="relative" style={{ minHeight: '600px', width: '100%' }}>
          
          {/* Main Campaign Image (Large) */}
          <div className="absolute editorial-image" style={{ width: '45%', height: 'auto', top: 0, left: '5%', background: '#111', zIndex: 2, padding: 0, border: '2px solid var(--text-primary)', boxShadow: '8px 8px 0 var(--text-primary)' }}>
            <img src="/emergent-ai-campaign.png" alt="Emergent AI Campaign Poster" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          {/* Event Poster (Rotated, Overlapping) */}
          <div className="absolute editorial-image" style={{ width: '28%', height: 'auto', top: '5%', right: '32%', rotate: '3deg', background: 'var(--accent-secondary)', zIndex: 4, padding: 0, border: '2px solid var(--text-primary)', boxShadow: '8px 8px 0 var(--text-primary)' }} tabIndex={0}>
            <img src="/ai-meme-mania.png" alt="AI Meme Mania Poster" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
          </div>

          {/* Carousel (Wide, bottom overlapping) */}
          <div 
            className="absolute editorial-image" 
            style={{ width: '30%', aspectRatio: '1/1', bottom: '5%', right: '0%', transform: 'rotate(-2deg)', background: '#fff', zIndex: 3, overflow: 'hidden', border: '2px solid var(--text-primary)', boxShadow: '8px 8px 0 var(--text-primary)' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div style={{ display: 'flex', width: '100%', height: '100%', transition: 'transform 0.5s ease', transform: `translateX(-${currentSlide * 100}%)` }}>
              {baseItems.map((item, i) => (
                <div key={i} style={{ minWidth: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
                  <img src={item} alt={`AI Learning Carousel ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
              ))}
            </div>

            {/* Desktop Navigation Arrows */}
            {isHovered && (
              <>
                <button onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  &#8592;
                </button>
                <button onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  &#8594;
                </button>
              </>
            )}
          </div>


          {/* Annotations */}
          <div className="absolute t-mono-micro" style={{ top: '-15px', left: '15%', background: '#fff', padding: '2px 8px', border: '1px solid var(--text-primary)', zIndex: 10 }}>WORKSHOP</div>
          <div className="absolute t-mono-micro" style={{ top: 'calc(5% - 15px)', right: '32%', background: '#fff', padding: '2px 8px', border: '1px solid var(--text-primary)', zIndex: 10 }}>POSTER</div>
          <div className="absolute t-mono-micro" style={{ top: '45%', right: '0%', background: '#fff', padding: '2px 8px', border: '1px solid var(--text-primary)', zIndex: 10 }}>CAROUSEL</div>

        </div>
      </div>

    </section>
  );
};

export default CreateSection;
