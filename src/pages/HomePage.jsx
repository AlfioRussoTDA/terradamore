import { Link } from "react-router-dom";
import basketShowcase from "../../Immagini/Trasformazione.png";
import editorialMosaic from "../assets/editorial-mosaic.svg";
import networkSynergy from "../assets/network-synergy.svg";
import phygitalHub from "../assets/phygital-hub.svg";
import logo from "../../Immagini/Logo.png";
import Reveal from "../components/Reveal";
import { brandContent } from "../content/brand";

const previewCards = [
  {
    title: "Approccio Phygital",
    text: "Hub fisici, click & collect, scaffali integrati e dati di campo che diventano esperienza di acquisto.",
    to: "/approccio-phygital",
    image: phygitalHub,
    alt: "Illustrazione di un hub phygital con scaffali, borsa click and collect e pannello dati.",
  },
  {
    title: "Unisciti al Network",
    text: "Per produttori, hub e partner: tecnologia, logistica e reputazione condivisa come asset strategico.",
    to: "/network",
    image: networkSynergy,
    alt: "Illustrazione della rete Terra D'Amore con nodi collegati sul territorio.",
  },
  {
    title: "Il Magazine della Terra",
    text: "Cento storie, tre rubriche e un palinsesto continuo che trasforma il territorio in un magazine vivo.",
    to: "/editoria",
    image: editorialMosaic,
    alt: "Mosaico editoriale con schermi e contenuti del network Terra D'Amore.",
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow badge">{brandContent.heroLabel}</span>
            <h1>{brandContent.name}</h1>
            <p className="hero-tagline">{brandContent.tagline}</p>
            <p className="hero-intro">{brandContent.heroIntro}</p>
            <div className="button-row">
              {brandContent.heroButtons.map((button) => (
                <Link key={button.to} to={button.to} className="button button-solid">
                  {button.label}
                </Link>
              ))}
            </div>
            <ul className="hero-highlights">
              {brandContent.heroHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            
            <div className="visual-card jar-card">
              <span className="visual-label">Filiera narrata</span>
              <strong>Dalla terra</strong>
              <small>al prodotto finito</small>
            </div>
            <div className="visual-card basket-card">
              <span className="visual-icon">◎</span>
              <strong>Shop</strong>
              <small>network e retail experience</small>
            </div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Benvenuti</p>
              <h2>Un unico spazio, fisico e virtuale.</h2>
              <p>{brandContent.welcome}</p>
            </div>
          </Reveal>

          <div className="card-grid three-up home-values-grid">
            {brandContent.homeValueCards.map((item) => (
              <Reveal key={item.title}>
                <article className="info-card value-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading narrow">
              <p className="eyebrow">Why Choose Us</p>
              <h2>Qualità, ricercatezza e relazioni che si sentono.</h2>
            </div>
          </Reveal>
          <div className="card-grid three-up">
            {brandContent.whyChooseUs.map((item) => (
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

      <section className="section section-accent">
        <div className="container split-grid">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Vision</p>
              <h2>Un ritorno consapevole all'essenziale.</h2>
            </div>
          </Reveal>
          <div className="stack-list">
            {brandContent.vision.map((item, index) => (
              <Reveal key={item}>
                <article className="stack-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading narrow">
              <p className="eyebrow">Sistema</p>
              <h2>Come prende forma la rete, nella pratica.</h2>
              <p>
                Terra D'Amore non si appoggia a uno slogan rigido: prende forma
                attraverso un sistema che seleziona, connette, distribuisce e racconta.
              </p>
            </div>
          </Reveal>
          <div className="card-grid two-up system-grid">
            {brandContent.homeSystem.map((item) => (
              <Reveal key={item.title}>
                <article className="info-card system-card">
                  <span className="system-tag">{item.title}</span>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="section-heading narrow">
              <p className="eyebrow">Parole chiave</p>
              <h2>Il lessico che guida il progetto.</h2>
            </div>
          </Reveal>
          <div className="keyword-cloud">
            {brandContent.keywords.map((keyword) => (
              <Reveal key={keyword} className="keyword-wrap">
                <span className="keyword-pill">{keyword}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Il paniere</p>
              <h2>Fragranza del fresco, valore della trasformazione.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="basket-showcase">
              <div className="basket-showcase-copy">
                <p>
                  Il paniere non si limita a elencare categorie: mette in scena la relazione
                  tra il prodotto fresco e la sua evoluzione, cosi il cliente capisce subito
                  cosa compra, cosa puo ritrovare dopo e quale storia c'e dietro.
                </p>
              </div>
              <img
                src={basketShowcase}
                alt="Dal fresco alla trasformazione con arance, conserve e prodotti del paniere."
                className="scene-illustration"
              />
            </div>
          </Reveal>
          <div className="card-grid three-up">
            {brandContent.basket.map((item) => (
              <Reveal key={item.title}>
                <article className="info-card rich-basket-card">
                  <h3>{item.title}</h3>
                  <div className="basket-flow">
                    <div>
                      <span className="basket-label">Fresco</span>
                      <p>{item.fresh}</p>
                    </div>
                    <div>
                      <span className="basket-label">Trasformazione</span>
                      <p>{item.transformation}</p>
                    </div>
                  </div>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Network & Shop</p>
              <h2>Un ecosistema che tiene insieme racconto, vendita e relazione.</h2>
            </div>
          </Reveal>
          <div className="card-grid four-up">
            {brandContent.ecosystem.map((item) => (
              <Reveal key={item.title}>
                <article className="info-card dark-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="shop-panel">
              <div>
                <p className="eyebrow">Retail experience</p>
                <h3>Il negozio come sentiero guidato tra fresco e trasformato.</h3>
                <div className="button-row button-row-start">
                  <Link to="/approccio-phygital" className="button button-outline">
                    Leggi l'approccio phygital
                  </Link>
                </div>
              </div>
              <ul className="feature-list">
                {brandContent.shopFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Tre leve del sistema</p>
              <h2>Dove il progetto convince davvero partner, produttori e pubblico.</h2>
            </div>
          </Reveal>

          <div className="card-grid three-up preview-grid">
            {previewCards.map((card) => (
              <Reveal key={card.title}>
                <article className="preview-card">
                  <img src={card.image} alt={card.alt} className="preview-image" />
                  <div className="preview-copy">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <Link to={card.to} className="text-link">
                      Approfondisci
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container cta-panel">
          <Reveal>
            <div>
              <p className="eyebrow">Prossimo passo</p>
              <h2>Scopri chi coltiva il network, come funziona il sistema e dove puo crescere.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="button-row">
              <Link to="/network" className="button button-solid">
                Vai alla pagina network
              </Link>
              <Link to="/editoria" className="button button-outline">
                Scopri il magazine
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
