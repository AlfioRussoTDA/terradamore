import React, { useState } from 'react';

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', ruolo: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nome: '', email: '', ruolo: '', messaggio: '' });
  };

  return (
    <>
      <style>{`
        .contatti {
          background: var(--green-dark);
          padding: 8rem 0 0;
          overflow: hidden;
        }
        .contatti-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        .contatti-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          margin-bottom: 6rem;
        }
        .contatti-left {}
        .contatti-label {
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
        .contatti-label::before {
          content: '';
          width: 30px;
          height: 1.5px;
          background: var(--lime);
        }
        .contatti-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .contatti-title em { font-style: italic; color: var(--lime); }
        .contatti-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 380px;
        }
        .contatti-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contatti-info-item {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }
        .contatti-info-icon {
          width: 36px;
          height: 36px;
          background: rgba(168,211,46,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .contatti-info-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
        }
        .contatti-info-text a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contatti-info-text a:hover { color: var(--lime); }

        /* Form */
        .contatti-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .form-input, .form-select, .form-textarea {
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          color: var(--white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          outline: none;
          width: 100%;
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--lime);
          background: rgba(168,211,46,0.05);
        }
        .form-select option { background: var(--green-dark); color: var(--white); }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit {
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
          align-self: flex-start;
        }
        .form-submit:hover {
          background: var(--lime-bright);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(168,211,46,0.3);
        }
        .form-success {
          background: rgba(168,211,46,0.15);
          border: 1.5px solid rgba(168,211,46,0.4);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          color: var(--lime);
          font-size: 0.9rem;
          font-weight: 500;
          text-align: center;
        }

        /* Footer */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 100%;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
        }
        .footer-logo span { color: var(--lime); }
        .footer-copy {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-links a {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.05em;
        }
        .footer-links a:hover { color: var(--lime); }

        @media (max-width: 900px) {
          .contatti-layout { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .contatti-inner { padding: 0 1.5rem; }
          .contatti { padding: 5rem 0 0; }
          .footer { padding: 2rem 1.5rem; }
          .footer-links { display: none; }
        }
      `}</style>

      <section className="contatti" id="contatti">
        <div className="contatti-inner">
          <div className="contatti-layout">
            <div className="contatti-left">
              <div className="contatti-label" data-reveal>Contatti</div>
              <h2 className="contatti-title" data-reveal data-reveal-delay="1">
                Entra a far<br />parte del<br /><em>network</em>
              </h2>
              <p className="contatti-desc" data-reveal data-reveal-delay="2">
                Sei un produttore, trasformatore o gestore di store? Scrivici.
                Costruiamo insieme il futuro del gusto siciliano.
              </p>
              <div className="contatti-info" data-reveal data-reveal-delay="3">
                <div className="contatti-info-item">
                  <div className="contatti-info-icon">📞</div>
                  <div className="contatti-info-text">
                    <a href="tel:+393458465003">+39 345 846 5003</a>
                  </div>
                </div>
                <div className="contatti-info-item">
                  <div className="contatti-info-icon">📧</div>
                  <div className="contatti-info-text">
                    <a href="mailto:alfio@terradamorenetwork.com">alfio@terradamorenetwork.com</a>
                  </div>
                </div>
                <div className="contatti-info-item">
                  <div className="contatti-info-icon">🌐</div>
                  <div className="contatti-info-text">
                    <a href="https://www.terradamorenetwork.com" target="_blank" rel="noreferrer">
                      www.terradamorenetwork.com
                    </a>
                  </div>
                </div>
                <div className="contatti-info-item">
                  <div className="contatti-info-icon">📍</div>
                  <div className="contatti-info-text">Biancavilla, Valle del Simeto, Sicilia</div>
                </div>
              </div>
            </div>

            <form className="contatti-form" onSubmit={handleSubmit} data-reveal data-reveal-delay="2">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nome</label>
                  <input className="form-input" name="nome" placeholder="Il tuo nome" value={form.nome} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" name="email" placeholder="tua@email.it" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Sei un...</label>
                <select className="form-select" name="ruolo" value={form.ruolo} onChange={handleChange}>
                  <option value="">Seleziona il tuo ruolo</option>
                  <option>Produttore Agricolo</option>
                  <option>Trasformatore</option>
                  <option>Gestore Store</option>
                  <option>Ristoratore / HoReCa</option>
                  <option>Consumatore</option>
                  <option>Investitore</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Messaggio</label>
                <textarea
                  className="form-textarea"
                  name="messaggio"
                  placeholder="Raccontaci di te e come vorresti collaborare..."
                  value={form.messaggio}
                  onChange={handleChange}
                  required
                />
              </div>
              {sent ? (
                <div className="form-success">✓ Messaggio inviato! Ti risponderemo presto.</div>
              ) : (
                <button type="submit" className="form-submit">Invia Messaggio →</button>
              )}
            </form>
          </div>

          <footer className="footer">
            <div className="footer-logo">Terra <span>D'Amore</span></div>
            <div className="footer-links">
              <a href="#vision">Vision</a>
              <a href="#mission">Mission</a>
              <a href="#network">Network</a>
              <a href="#shop">Shop</a>
              <a href="#prodotti">Prodotti</a>
            </div>
            <div className="footer-copy">© 2025 Terra D'Amore · Biancavilla, Sicilia</div>
          </footer>
        </div>
      </section>
    </>
  );
}
