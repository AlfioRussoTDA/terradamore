import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { producers } from "../content/producers";

export default function ProducerDetailPage() {
  const { slug } = useParams();
  const producer = producers.find((item) => item.slug === slug);

  if (!producer) {
    return (
      <div className="page-shell inner-page">
        <section className="page-hero">
          <div className="container narrow">
            <p className="eyebrow">Produttore non trovato</p>
            <h1>Questo profilo non è disponibile.</h1>
            <Link to="/produttori" className="button button-outline">
              Torna ai produttori
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell inner-page">
      <section className="page-hero page-hero-detail">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">{producer.zone}</p>
            <h1>{producer.name}</h1>
            <p>{producer.story}</p>
            <div className="pill-row">
              {producer.categories.map((category) => (
                <span key={category} className="tiny-pill">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className={`detail-media theme-${producer.image}`} aria-hidden="true">
            <span>{producer.highlights[0]}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <article className="detail-card">
              <p className="eyebrow">Prodotti</p>
              <h2>Il paniere di questo produttore</h2>
              <ul className="bullet-list large">
                {producer.products.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal>
            <article className="detail-card">
              <p className="eyebrow">Punti di forza</p>
              <h2>Cosa rende unica questa realtà</h2>
              <ul className="bullet-list large">
                {producer.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Connessione</p>
            <h2>Vuoi inserire questa realtà nel racconto del network?</h2>
          </div>
          <div className="button-row">
            <Link to="/contatti" className="button button-solid">
              Contatta il team
            </Link>
            <Link to="/produttori" className="button button-outline">
              Torna alla griglia
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
