import React from 'react';

const missionSteps = [
  {
    num: '01',
    icon: '🌾',
    title: 'Produttori',
    text: 'Individuare produttori che amano il loro lavoro e mettono ogni sforzo per avere prodotti di qualità eccellente.'
  },
  {
    num: '02',
    icon: '🫙',
    title: 'Trasformatori',
    text: 'Individuare trasformatori che sappiano esaltare e conservare la fragranza dei frutti della terra.'
  },
  {
    num: '03',
    icon: '🏪',
    title: 'Fruit Store',
    text: 'Trovare gestori di Fruit Store che vogliono fare il salto di qualità e distinguersi nel mercato.'
  },
  {
    num: '04',
    icon: '🌐',
    title: 'Network',
    text: 'Creare un Network per garantire freschezza e sinergia e promuovere i brand di qualità in tutto il mondo.'
  },
];

export default function Mission() {
  return (
    <>
      <style>{`
        .mission {
          background: var(--green-dark);
          padding: 8rem 0;
          overflow: hidden;
          position: relative;
        }
        .mission-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-size: 20vw;
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }
        .mission-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
          position: relative;
          z-index: 1;
        }
        .mission-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5rem;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .mission-label {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--lime);
          margin-bottom: 1rem;
        }
        .mission-label::before {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--lime);
        }
        .mission-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--white);
        }
        .mission-title em {
          font-style: italic;
          color: var(--lime);
        }
        .mission-tagline {
          font-family: var(--font-alt);
          font-style: italic;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.5);
          max-width: 360px;
          line-height: 1.6;
          text-align: right;
        }

        .mission-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5px;
        }
        .mission-step {
          padding: 3rem 2rem;
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
          transition: all 0.4s ease;
          background: rgba(255,255,255,0.02);
        }
        .mission-step:hover {
          background: rgba(168, 211, 46, 0.06);
          border-color: rgba(168, 211, 46, 0.3);
        }
        .mission-step-num {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--lime);
          margin-bottom: 1.5rem;
        }
        .mission-step-icon {
          font-size: 2.5rem;
          margin-bottom: 1.2rem;
          display: block;
          filter: grayscale(0.3);
          transition: transform 0.3s ease;
        }
        .mission-step:hover .mission-step-icon {
          transform: scale(1.15) rotate(-5deg);
        }
        .mission-step-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.8rem;
        }
        .mission-step-text {
          font-size: 0.87rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
        }
        .mission-step-arrow {
          position: absolute;
          top: 50%;
          right: -1rem;
          transform: translateY(-50%);
          color: var(--lime);
          font-size: 1.2rem;
          opacity: 0.4;
          z-index: 2;
        }
        .mission-step:last-child .mission-step-arrow { display: none; }

        @media (max-width: 1024px) {
          .mission-steps { grid-template-columns: repeat(2, 1fr); }
          .mission-step-arrow { display: none; }
        }
        @media (max-width: 600px) {
          .mission-steps { grid-template-columns: 1fr; }
          .mission-inner { padding: 0 1.5rem; }
          .mission { padding: 5rem 0; }
          .mission-tagline { text-align: left; }
        }
      `}</style>

      <section className="mission" id="mission">
        <div className="mission-bg-text">Mission</div>
        <div className="mission-inner">
          <div className="mission-header">
            <div>
              <div className="mission-label" data-reveal>Our Mission</div>
              <h2 className="mission-title" data-reveal data-reveal-delay="1">
                Costruire<br />il <em>futuro</em><br />del gusto
              </h2>
            </div>
            <p className="mission-tagline" data-reveal data-reveal-delay="2">
              Un network che unisce produttori, trasformatori e store in un ecosistema di qualità autentica.
            </p>
          </div>

          <div className="mission-steps">
            {missionSteps.map((step, i) => (
              <div key={step.num} className="mission-step" data-reveal data-reveal-delay={String(i + 1)}>
                <div className="mission-step-num">{step.num}</div>
                <span className="mission-step-icon">{step.icon}</span>
                <div className="mission-step-title">{step.title}</div>
                <p className="mission-step-text">{step.text}</p>
                {i < missionSteps.length - 1 && <span className="mission-step-arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
