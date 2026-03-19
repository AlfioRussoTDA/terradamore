import React from 'react';

const networkNodes = [
  { id: 'hub', label: 'HUB', x: 50, y: 50, size: 'large', color: '#a8d32e' },
  { id: 'prod', label: '100+ Produttori', x: 15, y: 65, size: 'medium', color: '#fff' },
  { id: 'trasf', label: 'Trasformatori', x: 15, y: 35, size: 'medium', color: '#fff' },
  { id: 'logistica', label: 'Hub Logistico', x: 30, y: 80, size: 'small', color: '#fff' },
  { id: 'iot', label: 'Sensori IoT', x: 5, y: 50, size: 'small', color: '#4a8c5c' },
  { id: 'stores', label: '5+ Store', x: 82, y: 65, size: 'medium', color: '#fff' },
  { id: 'ecomm', label: 'E-Commerce', x: 82, y: 35, size: 'medium', color: '#fff' },
  { id: 'horeca', label: 'HoReCa B2B', x: 92, y: 50, size: 'small', color: '#4a8c5c' },
  { id: 'fintech', label: 'Fintech', x: 50, y: 12, size: 'small', color: '#4a8c5c' },
  { id: 'eco', label: 'Eco-Packaging', x: 50, y: 88, size: 'small', color: '#4a8c5c' },
];

export default function Network() {
  return (
    <>
      <style>{`
        .network {
          background: var(--cream);
          padding: 8rem 0;
          overflow: hidden;
        }
        .network-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        .network-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .network-label {
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
        .network-label::before, .network-label::after {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--green-mid);
        }
        .network-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--green-dark);
          margin-bottom: 1rem;
        }
        .network-title em { font-style: italic; color: var(--green-mid); }
        .network-desc {
          font-size: 1rem;
          color: var(--text-light);
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .network-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .network-visual {
          position: relative;
          aspect-ratio: 1;
          max-width: 480px;
        }
        .network-svg {
          width: 100%;
          height: 100%;
        }

        .network-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .network-feature {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
          padding: 1.5rem;
          border: 1px solid rgba(26, 61, 43, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .network-feature:hover {
          border-color: var(--lime);
          background: rgba(168, 211, 46, 0.05);
          transform: translateX(6px);
        }
        .network-feature-icon {
          width: 44px;
          height: 44px;
          background: var(--green-dark);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .network-feature-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--green-dark);
          margin-bottom: 0.3rem;
        }
        .network-feature-text {
          font-size: 0.85rem;
          color: var(--text-light);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .network-body { grid-template-columns: 1fr; }
          .network-visual { max-width: 360px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .network-inner { padding: 0 1.5rem; }
          .network { padding: 5rem 0; }
        }
      `}</style>

      <section className="network" id="network">
        <div className="network-inner">
          <div className="network-header" data-reveal>
            <div className="network-label">Phygital Green-Net</div>
            <h2 className="network-title">L'ecosistema<br /><em>connesso</em></h2>
            <p className="network-desc">
              Un network che unisce filiera fisica, mercato digitale, dati e finanza
              in un unico ecosistema integrato e sostenibile.
            </p>
          </div>

          <div className="network-body">
            <div className="network-visual" data-reveal>
              <svg className="network-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                {networkNodes.slice(1).map(node => (
                  <line
                    key={node.id}
                    x1="200" y1="200"
                    x2={node.x * 4} y2={node.y * 4}
                    stroke={node.size === 'small' ? 'rgba(74,140,92,0.3)' : 'rgba(168,211,46,0.4)'}
                    strokeWidth={node.size === 'small' ? '1' : '1.5'}
                    strokeDasharray={node.size === 'small' ? '4 4' : '0'}
                  />
                ))}
                {/* Nodes */}
                {networkNodes.map(node => {
                  const cx = node.x * 4;
                  const cy = node.y * 4;
                  const r = node.size === 'large' ? 32 : node.size === 'medium' ? 18 : 10;
                  return (
                    <g key={node.id}>
                      {node.size === 'large' && (
                        <>
                          <circle cx={cx} cy={cy} r={r + 20} fill="rgba(168,211,46,0.07)" />
                          <circle cx={cx} cy={cy} r={r + 10} fill="rgba(168,211,46,0.12)" />
                        </>
                      )}
                      <circle
                        cx={cx} cy={cy} r={r}
                        fill={node.size === 'large' ? '#a8d32e' : node.size === 'small' ? '#1a3d2b' : '#2d6142'}
                        stroke={node.size === 'large' ? 'none' : 'rgba(168,211,46,0.3)'}
                        strokeWidth="1"
                      />
                      <text
                        x={cx} y={cy + (node.size === 'large' ? 5 : 4)}
                        textAnchor="middle"
                        fill={node.size === 'large' ? '#1a3d2b' : '#fff'}
                        fontSize={node.size === 'large' ? '11' : node.size === 'medium' ? '7' : '5.5'}
                        fontWeight="700"
                        fontFamily="DM Sans, sans-serif"
                      >
                        {node.label.length > 10 ? node.label.split(' ')[0] : node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="network-features">
              {[
                { icon: '📡', title: 'Filiera Tracciata', text: 'Sensori IoT LoRaWAN per tracciare temperatura, umidità e raccolta in tempo reale.' },
                { icon: '🏪', title: 'Mercato Phygital', text: 'Store fisici integrati con e-commerce. Click & Collect dal negozio di Biancavilla.' },
                { icon: '🤝', title: 'HoReCa & B2B', text: 'Canale dedicato per ristoranti, hotel e chef che cercano eccellenza locale.' },
                { icon: '♻️', title: 'Eco-Packaging', text: 'Logistica circolare con packaging naturale e riciclabile per ridurre l\'impatto.' },
              ].map((f, i) => (
                <div key={i} className="network-feature" data-reveal data-reveal-delay={String(i + 1)}>
                  <div className="network-feature-icon">{f.icon}</div>
                  <div>
                    <div className="network-feature-title">{f.title}</div>
                    <p className="network-feature-text">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
