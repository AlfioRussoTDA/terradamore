import React, { useState, useEffect } from 'react';

export default function Editoria() {
  const [articoli, setArticoli] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState(null);
  const [filtro, setFiltro] = useState('Tutti');
  const [articoloAperto, setArticoloAperto] = useState(null);

  useEffect(() => {
    fetchArticoli();
  }, []);

  const fetchArticoli = async () => {
    try {
      const response = await fetch('/api/articoli');
      if (!response.ok) throw new Error('Errore nel caricamento');
      const data = await response.json();
      setArticoli(data);
    } catch (err) {
      setErrore(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categorie = ['Tutti', ...new Set(articoli.map(a => a.categoria).filter(Boolean))];
  const filtrati = filtro === 'Tutti' ? articoli : articoli.filter(a => a.categoria === filtro);

  return (
    <>
      <style>{`
        .editoria {
          background: var(--cream);
          padding: 8rem 0;
          min-height: 60vh;
        }
        .editoria-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        .editoria-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .editoria-label {
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
        .editoria-label::before, .editoria-label::after {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--green-mid);
        }
        .editoria-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--green-dark);
          margin-bottom: 1rem;
        }
        .editoria-title em { font-style: italic; color: var(--green-mid); }
        .editoria-desc {
          font-size: 1rem;
          color: var(--text-light);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Filtri */
        .editoria-filtri {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3rem;
        }
        .filtro-btn {
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          border: 1.5px solid rgba(26,61,43,0.15);
          background: transparent;
          color: var(--text-mid);
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }
        .filtro-btn:hover {
          border-color: var(--green-mid);
          color: var(--green-dark);
        }
        .filtro-btn.active {
          background: var(--green-dark);
          border-color: var(--green-dark);
          color: var(--white);
          font-weight: 600;
        }

        /* Grid articoli */
        .articoli-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .articolo-card {
          background: var(--white);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(26,61,43,0.08);
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .articolo-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(26,61,43,0.12);
          border-color: rgba(168,211,46,0.4);
        }
        .articolo-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          background: var(--green-dark);
          display: block;
        }
        .articolo-img-placeholder {
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, var(--green-dark), var(--green-mid));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }
        .articolo-body {
          padding: 1.5rem;
        }
        .articolo-meta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
        }
        .articolo-categoria {
          padding: 0.25rem 0.7rem;
          background: rgba(168,211,46,0.15);
          color: var(--green-mid);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .articolo-data {
          font-size: 0.75rem;
          color: var(--text-light);
        }
        .articolo-titolo {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--green-dark);
          line-height: 1.3;
          margin-bottom: 0.6rem;
          transition: color 0.2s ease;
        }
        .articolo-card:hover .articolo-titolo {
          color: var(--green-mid);
        }
        .articolo-estratto {
          font-size: 0.85rem;
          color: var(--text-light);
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .articolo-leggi {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--green-mid);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Loading e errore */
        .editoria-loading {
          text-align: center;
          padding: 4rem;
          color: var(--text-light);
        }
        .loading-dots {
          display: inline-flex;
          gap: 6px;
          margin-top: 1rem;
        }
        .loading-dot {
          width: 8px;
          height: 8px;
          background: var(--green-mid);
          border-radius: 50%;
          animation: bounce 1.2s ease-in-out infinite;
        }
        .loading-dot:nth-child(2) { animation-delay: 0.2s; }
        .loading-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
        .editoria-errore {
          text-align: center;
          padding: 3rem;
          color: var(--text-light);
          background: rgba(26,61,43,0.04);
          border-radius: 16px;
          border: 1px dashed rgba(26,61,43,0.15);
        }
        .editoria-vuoto {
          text-align: center;
          padding: 4rem;
          color: var(--text-light);
          font-size: 1rem;
        }

        /* Modal articolo aperto */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(26,61,43,0.7);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          backdrop-filter: blur(4px);
        }
        .modal-content {
          background: var(--white);
          border-radius: 20px;
          max-width: 700px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
        }
        .modal-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }
        .modal-img-placeholder {
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, var(--green-dark), var(--green-mid));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          border-radius: 20px 20px 0 0;
        }
        .modal-body {
          padding: 2rem 2.5rem 2.5rem;
        }
        .modal-meta {
          display: flex;
          gap: 0.8rem;
          align-items: center;
          margin-bottom: 1rem;
        }
        .modal-titolo {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--green-dark);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .modal-testo {
          font-size: 1rem;
          color: var(--text-mid);
          line-height: 1.8;
          white-space: pre-wrap;
        }
        .modal-chiudi {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .modal-chiudi:hover {
          background: var(--white);
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .articoli-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .articoli-grid { grid-template-columns: 1fr; }
          .editoria-inner { padding: 0 1.5rem; }
          .editoria { padding: 5rem 0; }
          .modal-body { padding: 1.5rem; }
          .modal-titolo { font-size: 1.4rem; }
        }
      `}</style>

      <section className="editoria" id="editoria">
        <div className="editoria-inner">
          <div className="editoria-header" data-reveal>
            <div className="editoria-label">Editoria del Network</div>
            <h2 className="editoria-title">Storie, sapori<br />e <em>tradizioni</em></h2>
            <p className="editoria-desc">
              Contenuti per tutti e per ciascuno durante tutto l'anno.
              Storie di terra, produttori e sapori autentici.
            </p>
          </div>

          {loading && (
            <div className="editoria-loading">
              <p>Caricamento articoli...</p>
              <div className="loading-dots">
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
              </div>
            </div>
          )}

          {errore && (
            <div className="editoria-errore">
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌱</p>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--green-dark)' }}>
                Presto online!
              </p>
              <p>Gli articoli saranno disponibili a breve.</p>
            </div>
          )}

          {!loading && !errore && (
            <>
              {categorie.length > 1 && (
                <div className="editoria-filtri" data-reveal>
                  {categorie.map(c => (
                    <button
                      key={c}
                      className={`filtro-btn${filtro === c ? ' active' : ''}`}
                      onClick={() => setFiltro(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}

              {filtrati.length === 0 ? (
                <div className="editoria-vuoto">
                  <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</p>
                  <p>Nessun articolo pubblicato ancora. Torna presto!</p>
                </div>
              ) : (
                <div className="articoli-grid">
                  {filtrati.map((articolo, i) => (
                    <div
                      key={articolo.id}
                      className="articolo-card"
                      data-reveal
                      data-reveal-delay={String(Math.min(i + 1, 5))}
                      onClick={() => setArticoloAperto(articolo)}
                    >
                      {articolo.immagine ? (
                        <img src={articolo.immagine} alt={articolo.titolo} className="articolo-img" />
                      ) : (
                        <div className="articolo-img-placeholder">🌿</div>
                      )}
                      <div className="articolo-body">
                        <div className="articolo-meta">
                          {articolo.categoria && (
                            <span className="articolo-categoria">{articolo.categoria}</span>
                          )}
                          {articolo.data && (
                            <span className="articolo-data">
                              {new Date(articolo.data).toLocaleDateString('it-IT', {
                                day: 'numeric', month: 'long', year: 'numeric'
                              })}
                            </span>
                          )}
                        </div>
                        <h3 className="articolo-titolo">{articolo.titolo}</h3>
                        {articolo.estratto && (
                          <p className="articolo-estratto">{articolo.estratto}</p>
                        )}
                        <span className="articolo-leggi">Leggi →</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Modal */}
      {articoloAperto && (
        <div className="modal-overlay" onClick={() => setArticoloAperto(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-chiudi" onClick={() => setArticoloAperto(null)}>✕</button>
            {articoloAperto.immagine ? (
              <img src={articoloAperto.immagine} alt={articoloAperto.titolo} className="modal-img" />
            ) : (
              <div className="modal-img-placeholder">🌿</div>
            )}
            <div className="modal-body">
              <div className="modal-meta">
                {articoloAperto.categoria && (
                  <span className="articolo-categoria">{articoloAperto.categoria}</span>
                )}
                {articoloAperto.data && (
                  <span className="articolo-data">
                    {new Date(articoloAperto.data).toLocaleDateString('it-IT', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </span>
                )}
              </div>
              <h2 className="modal-titolo">{articoloAperto.titolo}</h2>
              <p className="modal-testo">{articoloAperto.contenuto || articoloAperto.estratto}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
