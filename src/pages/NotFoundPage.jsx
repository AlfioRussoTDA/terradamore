import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page-shell inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">404</p>
          <h1>Questa pagina non esiste.</h1>
          <p>Torniamo al cuore del progetto e riprendiamo il percorso da lì.</p>
          <Link to="/" className="button button-solid">
            Vai alla home
          </Link>
        </div>
      </section>
    </div>
  );
}
