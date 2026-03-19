import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { producers } from "../content/producers";

const categoryFilters = ["Tutti", "Agrumi", "Mele", "Frutti antichi", "Frutta secca", "Vino"];
const areaFilters = ["Tutte", "Etna", "Simeto", "Val di Noto", "Pantelleria"];

function matchesArea(zone, filter) {
  if (filter === "Tutte") {
    return true;
  }

  return zone.toLowerCase().includes(filter.toLowerCase());
}

export default function ProducersPage() {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const [activeArea, setActiveArea] = useState("Tutte");

  const filteredProducers = producers.filter((producer) => {
    const categoryMatch =
      activeCategory === "Tutti" || producer.categories.includes(activeCategory);
    const areaMatch = matchesArea(producer.zone, activeArea);

    return categoryMatch && areaMatch;
  });

  return (
    <div className="page-shell inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Produttori</p>
          <h1>Volti, zone e trasformazioni che tengono vivo il network.</h1>
          <p>
            Una vetrina pubblica dedicata a chi coltiva, seleziona e trasforma con cura.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="filters-panel">
              <div>
                <span className="filter-label">Categoria</span>
                <div className="filter-row">
                  {categoryFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className={`filter-pill ${activeCategory === filter ? "is-active" : ""}`}
                      onClick={() => setActiveCategory(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="filter-label">Zona</span>
                <div className="filter-row">
                  {areaFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className={`filter-pill ${activeArea === filter ? "is-active" : ""}`}
                      onClick={() => setActiveArea(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="card-grid three-up">
            {filteredProducers.map((producer) => (
              <Reveal key={producer.slug}>
                <article className="profile-card">
                  <div className={`profile-media theme-${producer.image}`} aria-hidden="true">
                    <span>{producer.zone}</span>
                  </div>
                  <div className="profile-copy">
                    <div className="pill-row">
                      {producer.categories.map((category) => (
                        <span key={category} className="tiny-pill">
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3>{producer.name}</h3>
                    <p>{producer.shortBio}</p>
                    <ul className="bullet-list">
                      {producer.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>
                    <Link to={`/produttori/${producer.slug}`} className="text-link">
                      Apri profilo
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filteredProducers.length === 0 ? (
            <Reveal>
              <div className="empty-state">
                Nessun produttore corrisponde ai filtri scelti. Prova a riaprire il paniere.
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>
    </div>
  );
}
