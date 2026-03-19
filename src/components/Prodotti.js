import React, { useState } from 'react';

const categories = [
  {
    id: 'frutta',
    label: '🍎 Frutta',
    items: [
      { name: 'Mele dell\'Etna', transforms: ['Sidro di Mele', 'Aceto di Mele', 'Confettura alla Cannella'] },
      { name: 'Arance', transforms: ['Marmellata', 'Succo & Polpa', 'Scorzette al Cioccolato'] },
      { name: 'Limoni', transforms: ['Limoncello', 'Marmellata', 'Estrazione Oli & Bucce'] },
      { name: 'Fico d\'India', transforms: ['Mostarda Siciliana', 'Liquore di Fico d\'India'] },
    ]
  },
  {
    id: 'fruttasecca',
    label: '🫘 Frutta Secca',
    items: [
      { name: 'Pistacchi', transforms: ['Crema Spalmabile', 'Pesto di Pistacchio', 'Pasta Pura 100%'] },
      { name: 'Mandorle', transforms: ['Frutta Martorana', 'Latte di Mandorla', 'Torrone Cubbaita'] },
    ]
  },
  {
    id: 'vino',
    label: '🍇 Uva & Vino',
    items: [
      { name: 'Uva da Tavola', transforms: ['Vino Passito', 'Vino Cotto per Dolci', 'Succo d\'Uva'] },
    ]
  },
  {
    id: 'verdure',
    label: '🍅 Verdure',
    items: [
      { name: 'Pomodori', transforms: ['Passata', 'Conserve', 'Pelati Siciliani'] },
      { name: 'Verdure Miste', transforms: ['Sott\'olio', 'Giardiniera', 'Pesto Verde'] },
    ]
  },
  {
    id: 'cereali',
    label: '🌾 Cereali',
    items: [
      { name: 'Grani Antichi', transforms: ['Farine Artigianali', 'Pasta Trafilata', 'Pane di Casa'] },
    ]
  },
  {
    id: 'altro',
    label: '🫚 Altro',
    items: [
      { name: 'Olive', transforms: ['Olio EVO', 'Olive in Salamoia', 'Crema d\'Olive'] },
      { name: 'Fiori Eduli', transforms: ['Miele Millefiori', 'Sciroppi', 'Tisane'] },
      { name: 'Erbe & Formaggi', transforms: ['Caciocavallo', 'Ricotta', 'Formaggi Stagionati'] },
    ]
  },
];

export default function Prodotti() {
  const [activeTab, setActiveTab] = useState('frutta');
  const [hoveredItem, setHoveredItem] = useState(null);

  const active = categories.find(c => c.id === activeTab);

  return (
    <>
      <style>{`
        .prodotti {
          background: var(--green-dark);
          padding: 8rem 0;
          overflow: hidden;
        }
        .prodotti-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        .prodotti-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .prodotti-label {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--lime);
          margin-bottom: 1.2rem;
        }
        .prodotti-label::before, .prodotti-label::after {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--lime);
        }
        .prodotti-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--white);
          margin-bottom: 1rem;
        }
        .prodotti-title em { font-style: italic; color: var(--lime); }
        .prodotti-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.5);
          max-width: 500px;
          margin: 0 auto;
        }

        .prodotti-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          justify-content: center;
        }
        .prodotti-tab {
          padding: 0.55rem 1.2rem;
          border-radius: 100px;
          border: 1.5px solid rgba(255,255,255,0.15);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }
        .prodotti-tab:hover {
          border-color: rgba(255,255,255,0.4);
          color: var(--white);
        }
        .prodotti-tab.active {
          background: var(--lime);
          border-color: var(--lime);
          color: var(--green-dark);
          font-weight: 700;
        }

        .prodotti-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5px;
        }
        .prodotti-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .prodotti-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--lime);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }
        .prodotti-card:hover::before { transform: scaleY(1); }
        .prodotti-card:hover {
          background: rgba(168, 211, 46, 0.05);
          border-color: rgba(168, 211, 46, 0.2);
        }
        .prodotti-card-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1rem;
        }
        .prodotti-transforms {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .prodotti-transform {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
        }
        .prodotti-transform::before {
          content: '→';
          color: var(--lime);
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .prodotti-inner { padding: 0 1.5rem; }
          .prodotti { padding: 5rem 0; }
        }
      `}</style>

      <section className="prodotti" id="prodotti">
        <div className="prodotti-inner">
          <div className="prodotti-header" data-reveal>
            <div className="prodotti-label">Il Nostro Paniere</div>
            <h2 className="prodotti-title">Dal campo<br />alla <em>tavola</em></h2>
            <p className="prodotti-desc">Prodotti freschi e le loro trasformazioni artigianali, per fare un viaggio nella vita di ciò che consumi.</p>
          </div>

          <div className="prodotti-tabs" data-reveal>
            {categories.map(c => (
              <button
                key={c.id}
                className={`prodotti-tab${activeTab === c.id ? ' active' : ''}`}
                onClick={() => setActiveTab(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="prodotti-grid">
            {active?.items.map((item, i) => (
              <div key={i} className="prodotti-card" data-reveal data-reveal-delay={String(Math.min(i + 1, 5))}>
                <div className="prodotti-card-name">{item.name}</div>
                <div className="prodotti-transforms">
                  {item.transforms.map((t, j) => (
                    <span key={j} className="prodotti-transform">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
