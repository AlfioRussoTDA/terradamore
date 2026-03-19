import React from 'react';

const items = ['Tradizione', '·', 'Sostenibilità', '·', 'Innovazione', '·', 'Salute', '·', 'Network', '·', 'Natura', '·', 'Qualità', '·', 'Sicilia', '·', 'Freschezza', '·'];

export default function Ticker() {
  const repeated = [...items, ...items];
  return (
    <>
      <style>{`
        .ticker {
          background: var(--lime);
          padding: 0.85rem 0;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }
        .ticker-inner {
          display: flex;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .ticker-item {
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--green-dark);
          padding: 0 1.2rem;
        }
      `}</style>
      <div className="ticker">
        <div className="ticker-inner">
          {repeated.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}
