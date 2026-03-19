import React from 'react';

const shopFeatures = [
  { icon: '🏛️', title: 'Brand Riconoscibile', text: 'Ogni negozio si distingue per facciata esterna e stile architettonico unico nel suo genere.' },
  { icon: '🌿', title: 'Packaging Naturale', text: 'Materiali naturali e riciclabili per ogni prodotto, dal sacchetto alla confezione regalo.' },
  { icon: '🛤️', title: 'Percorso Guidato', text: 'Un cammino immersivo che porta il cliente in un viaggio naturale tra profumi e sapori.' },
  { icon: '🗂️', title: 'Scaffalatura Tematica', text: 'Prodotti naturali accostati alle loro trasformazioni, per raccontare la storia di ogni frutto.' },
];

export default function Shop() {
  return (
    <>
      <style>{`
        .shop {
          background: var(--cream);
          padding: 8rem 0;
          overflow: hidden;
        }
        .shop-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        .shop-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .shop-text-col {}
        .shop-label {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--green-mid);
          margin-bottom: 1.2rem;
        }
        .shop-label::before {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--green-mid);
        }
        .shop-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--green-dark);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .shop-title em { font-style: italic; color: var(--green-mid); }
        .shop-desc {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--text-mid);
          margin-bottom: 2.5rem;
          max-width: 420px;
        }
        .shop-highlight {
          background: var(--green-dark);
          color: var(--white);
          padding: 2rem;
          border-radius: 16px;
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }
        .shop-highlight-icon {
          font-size: 2rem;
          flex-shrink: 0;
          animation: float 3s ease-in-out infinite;
        }
        .shop-highlight-title {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--lime);
          margin-bottom: 0.4rem;
        }
        .shop-highlight-text {
          font-size: 0.87rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
        }

        .shop-features-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5px;
        }
        .shop-feature {
          padding: 2rem 1.5rem;
          background: var(--green-dark);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .shop-feature::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--lime);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .shop-feature:hover::after { transform: scaleX(1); }
        .shop-feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
          transition: transform 0.3s ease;
        }
        .shop-feature:hover .shop-feature-icon {
          transform: translateY(-4px);
        }
        .shop-feature-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }
        .shop-feature-text {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .shop-layout { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 600px) {
          .shop-inner { padding: 0 1.5rem; }
          .shop { padding: 5rem 0; }
          .shop-features-col { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="shop" id="shop">
        <div className="shop-inner">
          <div className="shop-layout">
            <div className="shop-text-col">
              <div className="shop-label" data-reveal>I Nostri Store</div>
              <h2 className="shop-title" data-reveal data-reveal-delay="1">
                Un'<em>esperienza</em><br />immersiva<br />nel gusto
              </h2>
              <p className="shop-desc" data-reveal data-reveal-delay="2">
                I nostri Fruit Store sono spazi progettati per connettere il consumatore
                con la vita del prodotto. Un percorso sensoriale tra freschezza e trasformazione.
              </p>
              <div className="shop-highlight" data-reveal data-reveal-delay="3">
                <span className="shop-highlight-icon">📱</span>
                <div>
                  <div className="shop-highlight-title">Schermo Interattivo App Sensitive</div>
                  <p className="shop-highlight-text">
                    Ogni store è dotato di un display touch con dati live dalla filiera tracciata:
                    umidità, temperatura, data di raccolta e storia del produttore.
                  </p>
                </div>
              </div>
            </div>

            <div className="shop-features-col">
              {shopFeatures.map((f, i) => (
                <div key={i} className="shop-feature" data-reveal data-reveal-delay={String(i + 1)}>
                  <span className="shop-feature-icon">{f.icon}</span>
                  <div className="shop-feature-title">{f.title}</div>
                  <p className="shop-feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
