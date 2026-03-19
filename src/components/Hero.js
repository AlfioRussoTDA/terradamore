import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const rippleRef = useRef(null);

  const scrollToVision = () => {
    document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: var(--green-dark);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-bg-circles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(168, 211, 46, 0.15);
          animation: ripple 4s ease-out infinite;
        }
        .hero-circle:nth-child(1) { width: 200px; height: 200px; top: 10%; right: 15%; animation-delay: 0s; }
        .hero-circle:nth-child(2) { width: 350px; height: 350px; top: 5%; right: 10%; animation-delay: 0.8s; }
        .hero-circle:nth-child(3) { width: 500px; height: 500px; top: -2%; right: 5%; animation-delay: 1.6s; }
        .hero-circle:nth-child(4) { width: 200px; height: 200px; bottom: 20%; left: 5%; animation-delay: 0.5s; }
        .hero-circle:nth-child(5) { width: 320px; height: 320px; bottom: 15%; left: 0%; animation-delay: 1.2s; }

        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 2rem;
          max-width: 1000px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--lime);
          margin-bottom: 1.8rem;
          animation: fadeIn 1s ease forwards;
        }
        .hero-eyebrow-line {
          width: 40px;
          height: 1.5px;
          background: var(--lime);
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 9vw, 7rem);
          font-weight: 900;
          color: var(--white);
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin-bottom: 0.3em;
          animation: fadeUp 1s ease 0.2s both;
        }
        .hero-title em {
          font-style: italic;
          color: var(--lime);
        }

        .hero-subtitle {
          font-family: var(--font-alt);
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0.6);
          margin-bottom: 3rem;
          line-height: 1.6;
          animation: fadeUp 1s ease 0.4s both;
        }

        .hero-tags {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
          animation: fadeUp 1s ease 0.6s both;
        }
        .hero-tag {
          padding: 0.45rem 1.2rem;
          border: 1px solid rgba(168, 211, 46, 0.4);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          transition: all 0.3s ease;
        }
        .hero-tag:hover {
          border-color: var(--lime);
          color: var(--lime);
          background: rgba(168, 211, 46, 0.08);
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 1s ease 0.8s both;
        }
        .btn-primary {
          padding: 1rem 2.5rem;
          background: var(--lime);
          color: var(--green-dark);
          border: none;
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--lime-bright);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .btn-primary:hover::before { transform: scaleX(1); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(168, 211, 46, 0.3); }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-outline {
          padding: 1rem 2.5rem;
          background: transparent;
          color: var(--white);
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          border-color: var(--white);
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
        }

        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: fadeIn 1s ease 1.5s both;
        }
        .hero-scroll-text {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }
        .hero-scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(168,211,46,0.7), transparent);
          animation: float 2s ease-in-out infinite;
        }

        .hero-stats {
          position: absolute;
          bottom: 5rem;
          right: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: fadeIn 1.2s ease 1s both;
        }
        .hero-stat {
          text-align: right;
        }
        .hero-stat-num {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--lime);
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        @media (max-width: 768px) {
          .hero-stats { display: none; }
          .hero-title { font-size: 3rem; }
        }
      `}</style>

      <section className="hero" id="hero">
        <div className="hero-grain" />
        <div className="hero-bg-circles">
          <div className="hero-circle" />
          <div className="hero-circle" />
          <div className="hero-circle" />
          <div className="hero-circle" />
          <div className="hero-circle" />
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Biancavilla · Valle del Simeto · Sicilia
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title">
            Terra<br /><em>D'Amore</em>
          </h1>
          <p className="hero-subtitle">
            L'ecosistema phygital che connette la tradizione agricola<br />
            all'innovazione digitale. Network · Shop · E-Commerce
          </p>
          <div className="hero-tags">
            {['Tradizione', 'Sostenibilità', 'Innovazione', 'Salute', 'Natura', 'Qualità'].map(tag => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToVision}>
              <span>Scopri il Progetto</span>
            </button>
            <button className="btn-outline" onClick={() => document.querySelector('#prodotti')?.scrollIntoView({ behavior: 'smooth' })}>
              I Nostri Prodotti
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">100+</div>
            <div className="hero-stat-label">Produttori</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">5+</div>
            <div className="hero-stat-label">Store Fisici</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">∞</div>
            <div className="hero-stat-label">Qualità</div>
          </div>
        </div>

        <div className="hero-scroll" onClick={scrollToVision}>
          <span className="hero-scroll-text">Scorri</span>
          <div className="hero-scroll-line" />
        </div>
      </section>
    </>
  );
}
