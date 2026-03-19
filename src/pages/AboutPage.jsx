import Reveal from "../components/Reveal";
import { brandContent } from "../content/brand";

export default function AboutPage() {
  return (
    <div className="page-shell inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Chi siamo</p>
          <h1>Una struttura narrativa e commerciale pensata per far dialogare tutta la filiera.</h1>
          <p>
            Terra D'Amore Network nasce per rimettere al centro il rapporto tra persone,
            prodotti, territori e trasformazioni.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <Reveal>
            <article className="detail-card">
              <p className="eyebrow">Vision</p>
              <h2>Ritrovare l'essenziale senza rinunciare all'innovazione.</h2>
              <ul className="bullet-list large">
                {brandContent.vision.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal>
            <article className="detail-card">
              <p className="eyebrow">Mission</p>
              <h2>Costruire una rete leggibile, utile e riconoscibile.</h2>
              <ul className="bullet-list large">
                {brandContent.mission.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Modello</p>
              <h2>Come funziona il sistema Terra D'Amore.</h2>
            </div>
          </Reveal>
          <div className="card-grid four-up">
            {brandContent.ecosystem.map((item) => (
              <Reveal key={item.title}>
                <article className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
