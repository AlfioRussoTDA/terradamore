import { Link } from "react-router-dom";
import editorialMosaic from "../assets/editorial-mosaic.svg";
import Reveal from "../components/Reveal";
import { brandContent } from "../content/brand";
import { articles } from "../content/articles";

export default function EditorialPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="page-shell inner-page">
      <section className="page-hero">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">Editoria del network</p>
            <h1>{brandContent.editorialModel.title}: 100 voci, un'unica sinfonia.</h1>
            <p>{brandContent.editorialModel.intro}</p>
          </div>
          <img
            src={editorialMosaic}
            alt="Mosaico di contenuti con volti, prodotti e dati del network Terra D'Amore."
            className="scene-illustration page-illustration"
          />
        </div>
      </section>

      <section className="section section-light">
        <div className="container card-grid three-up">
          {brandContent.editorialModel.pillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <article className="info-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Linea editoriale</p>
              <h2>Tre rubriche fisse che danno ritmo, coerenza e autorevolezza al network.</h2>
            </div>
          </Reveal>
          <div className="rubric-grid">
            {brandContent.editorialModel.rubrics.map((rubric) => (
              <Reveal key={rubric.name}>
                <article className="rubric-card">
                  <h3>{rubric.name}</h3>
                  <div className="rubric-copy">
                    <div>
                      <span className="basket-label">Contenuto micro</span>
                      <p>{rubric.micro}</p>
                    </div>
                    <div>
                      <span className="basket-label">Potenziale macro</span>
                      <p>{rubric.macro}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <article className="featured-article">
              <div className={`featured-media theme-${featuredArticle.coverImage}`} />
              <div className="featured-copy">
                <div className="pill-row">
                  <span className="tiny-pill">{featuredArticle.category}</span>
                  <span className="tiny-pill">{featuredArticle.readTime}</span>
                </div>
                <h2>{featuredArticle.title}</h2>
                <p>{featuredArticle.excerpt}</p>
                <Link to={`/editoria/${featuredArticle.slug}`} className="button button-solid">
                  Leggi l'articolo
                </Link>
              </div>
            </article>
          </Reveal>

          <div className="card-grid two-up">
            {otherArticles.map((article) => (
              <Reveal key={article.slug}>
                <article className="article-card">
                  <div className={`article-media theme-${article.coverImage}`} aria-hidden="true" />
                  <div className="article-copy">
                    <div className="pill-row">
                      <span className="tiny-pill">{article.category}</span>
                      <span className="tiny-pill">{article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Link to={`/editoria/${article.slug}`} className="text-link">
                      Vai al dettaglio
                    </Link>
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
              <p className="eyebrow">Perche l'editoria condivisa vince</p>
              <h2>Non facciamo un post per volta: costruiamo un palinsesto che aumenta il valore di tutti.</h2>
            </div>
          </Reveal>
          <div className="card-grid three-up">
            {brandContent.editorialModel.reasons.map((reason) => (
              <Reveal key={reason}>
                <article className="info-card dark-card">
                  <p>{reason}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
