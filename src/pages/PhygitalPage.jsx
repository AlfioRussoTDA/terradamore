import { Link } from "react-router-dom";
import phygitalHub from "../assets/phygital-hub.svg";
import Reveal from "../components/Reveal";
import { brandContent } from "../content/brand";

export default function PhygitalPage() {
  const { phygitalPage } = brandContent;

  return (
    <div className="page-shell inner-page">
      <section className="page-hero">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">{phygitalPage.title}</p>
            <h1>{phygitalPage.subtitle}</h1>
            <p>{phygitalPage.intro}</p>
          </div>
          <img
            src={phygitalHub}
            alt="Cliente che ritira una busta Terra D'Amore davanti a scaffali con fresco, trasformati e pannello dati."
            className="scene-illustration page-illustration"
          />
        </div>
      </section>

      <section className="section section-light">
        <div className="container card-grid three-up">
          {phygitalPage.hubPoints.map((item) => (
            <Reveal key={item.title}>
              <article className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Scaffale integrato</p>
              <h2>Dalla terra al barattolo, nello stesso spazio e nella stessa narrazione.</h2>
              <p>
                Nei nostri hub il prodotto fresco convive con la sua trasformazione di
                eccellenza. Cosi il cliente capisce immediatamente filiera corta, materia
                prima e derivato, con la possibilita di tracciare tutto digitalmente.
              </p>
            </div>
          </Reveal>
          <div className="card-grid two-up">
            {phygitalPage.shelfPairs.map((pair) => (
              <Reveal key={pair.fresh}>
                <article className="detail-card">
                  <div className="basket-flow">
                    <div>
                      <span className="basket-label">Prodotto fresco</span>
                      <p>{pair.fresh}</p>
                    </div>
                    <div>
                      <span className="basket-label">Trasformazione d'eccellenza</span>
                      <p>{pair.transformed}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="section-heading narrow">
              <p className="eyebrow">La connessione invisibile</p>
              <h2>Tecnologia LoRaWAN, QR e contenuti editoriali al servizio della fiducia.</h2>
            </div>
          </Reveal>
          <div className="card-grid three-up">
            {phygitalPage.connectionSteps.map((step, index) => (
              <Reveal key={step.title}>
                <article className="info-card dark-card">
                  <p className="eyebrow">Step {index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Per i partner</p>
            <h2>Questo non e un extra tecnologico: e il cuore operativo del business model.</h2>
          </div>
          <div className="button-row">
            <Link to="/network" className="button button-solid">
              Vai alla pagina network
            </Link>
            <Link to="/contatti" className="button button-outline">
              Parla con il team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
