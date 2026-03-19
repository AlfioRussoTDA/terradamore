import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { articles } from "../content/articles";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="page-shell inner-page">
        <section className="page-hero">
          <div className="container narrow">
            <p className="eyebrow">Articolo non trovato</p>
            <h1>Questa pagina non è disponibile.</h1>
            <Link to="/editoria" className="button button-outline">
              Torna all'editoria
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
            <div className="pill-row">
              <span className="tiny-pill">{article.category}</span>
              <span className="tiny-pill">{article.readTime}</span>
            </div>
            <h1>{article.title}</h1>
            <p>{article.intro}</p>
          </div>
          <div className={`detail-media theme-${article.coverImage}`} aria-hidden="true">
            <span>{article.category}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          {article.sections.map((section) => (
            <Reveal key={section.title}>
              <article className="article-section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Continua il viaggio</p>
            <h2>Passa dai contenuti ai protagonisti della filiera.</h2>
          </div>
          <div className="button-row">
            <Link to="/produttori" className="button button-solid">
              Esplora i produttori
            </Link>
            <Link to="/editoria" className="button button-outline">
              Altri articoli
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
