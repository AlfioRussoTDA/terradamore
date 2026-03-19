import React from 'react';

const visionItems = [
  { num: '01', title: 'Essenziale', text: 'Ritornare all\'essenziale attraverso i sapori della Terra, le Tradizioni e le Relazioni umane.' },
  { num: '02', title: 'Benessere', text: 'Promuovere il benessere e la salute collettiva valorizzando i produttori virtuosi.' },
  { num: '03', title: 'Produttori', text: 'Promuovere i produttori virtuosi che amano il loro lavoro e rispettano la terra.' },
  { num: '04', title: 'Network', text: 'Creare un network di qualità superiore dove innovazione e trasparenza rigenerano il territorio.' },
];

export default function Vision() {
  return (
    <>
      <style>{`
        .vision {
          background: var(--cream);
          padding: 8rem 0;
          overflow: hidden;
        }
        .vision-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--green-mid);
          margin-bottom: 1.5rem;
        }
        .section-label::before {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--green-mid);
        }

        .vision-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
          margin-bottom: 6rem;
        }
        .vision-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--green-dark);
        }
        .vision-title em {
          font-style: italic;
          color: var(--green-mid);
        }
        .vision-quote {
          font-family: var(--font-alt);
          font-style: italic;
          font-size: 1.15rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-mid);
          border-left: 3px solid var(--lime);
          padding-left: 1.5rem;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
        }
        .vision-card {
          background: var(--green-dark);
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .vision-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          background: var(--lime);
          transition: height 0.4s ease;
          z-index: 0;
        }
        .vision-card:hover::before { height: 100%; }
        .vision-card:hover .vision-card-num,
        .vision-card:hover .vision-card-title,
        .vision-card:hover .vision-card-text {
          color: var(--green-dark);
        }
        .vision-card > * { position: relative; z-index: 1; }

        .vision-card-num {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(168, 211, 46, 0.25);
          line-height: 1;
          margin-bottom: 1.5rem;
          transition: color 0.3s ease;
        }
        .vision-card:hover .vision-card-num {
          color: rgba(26, 61, 43, 0.2);
        }
        .vision-card-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.8rem;
          transition: color 0.3s ease;
        }
        .vision-card-text {
          font-size: 0.88rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.65);
          transition: color 0.3s ease;
        }

        @media (max-width: 1024px) {
          .vision-grid { grid-template-columns: repeat(2, 1fr); }
          .vision-header { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 600px) {
          .vision-grid { grid-template-columns: 1fr; }
          .vision-inner { padding: 0 1.5rem; }
          .vision { padding: 5rem 0; }
        }
      `}</style>

      <section className="vision" id="vision">
        <div className="vision-inner">
          <span className="section-label" data-reveal>Our Vision</span>
          <div className="vision-header">
            <h2 className="vision-title" data-reveal data-reveal-delay="1">
              Un ritorno<br />consapevole<br />all'<em>essenziale</em>
            </h2>
            <blockquote className="vision-quote" data-reveal data-reveal-delay="2">
              La nostra visione è riscoprire nei sapori autentici della Terra, nelle Tradizioni
              e nelle Relazioni umane il fondamento di un nuovo equilibrio. Innovazione tecnologica
              e trasparenza come ponte per rigenerare il territorio.
            </blockquote>
          </div>
          <div className="vision-grid">
            {visionItems.map((item, i) => (
              <div key={item.num} className="vision-card" data-reveal data-reveal-delay={String(i + 1)}>
                <div className="vision-card-num">{item.num}</div>
                <div className="vision-card-title">{item.title}</div>
                <p className="vision-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
