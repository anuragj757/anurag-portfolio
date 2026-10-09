import React from 'react';

const ToolkitSection = () => {
  return (
    <section className="container section-padding border-bottom relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute shape-blob" style={{ width: '60vw', height: '60vw', background: 'var(--border-color)', opacity: 0.3, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, animationDuration: '15s' }}></div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '80px', textAlign: 'center' }}>
        
        {/* BUILD */}
        <div>
          <span className="sticker" style={{ marginBottom: '24px', display: 'inline-block' }}>BUILD</span>
          <h3 className="display-medium" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 1.1 }}>
            WEB DEV<br/>
            <span className="text-accent-1">REACT</span> NODE <span className="text-outline">PYTHON</span><br/>
            C++ <span className="text-accent-2">SQL</span>
          </h3>
        </div>

        {/* AI */}
        <div>
          <span className="sticker sticker-alt" style={{ marginBottom: '24px', display: 'inline-block', border: '2px solid var(--text-primary)' }}>AI</span>
          <h3 className="display-medium" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 1.1 }}>
            GROQ <span className="text-outline">N8N</span> GENERATIVE AI<br/>
            <span className="text-accent-2">AI WORKFLOWS</span> APIs
          </h3>
        </div>

        {/* CREATE */}
        <div>
          <span className="sticker" style={{ marginBottom: '24px', display: 'inline-block', background: 'var(--text-primary)' }}>CREATE</span>
          <h3 className="display-medium" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 1.1 }}>
            <span className="text-outline">SOCIAL MEDIA</span> CONTENT<br/>
            DIGITAL MARKETING <span className="text-accent-1">EMAIL MARKETING</span><br/>
            CANVA
          </h3>
        </div>

      </div>

    </section>
  );
};

export default ToolkitSection;
