import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../Immagini/Logo.png";
import { brandContent } from "../content/brand";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Phygital", to: "/approccio-phygital" },
  { label: "Network", to: "/network" },
  { label: "Produttori", to: "/produttori" },
  { label: "Editoria", to: "/editoria" },
  { label: "Chi siamo", to: "/chi-siamo" },
  { label: "Contatti", to: "/contatti" },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand-lockup" aria-label="Vai alla home">
            <img src={logo} alt="Logo Terra D'Amore" className="brand-logo" />
            <span>
              <strong>{brandContent.shortName}</strong>
              <small>{brandContent.tagline}</small>
            </span>
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-label="Apri il menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${isMenuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contatti" className="button button-solid button-small">
              Parliamone
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img src={logo} alt="Logo Terra D'Amore" className="footer-logo" />
            <p className="eyebrow">Terra D'Amore Network</p>
            <h2>Una rete che mette in relazione territorio, prodotti e persone.</h2>
          </div>
          <div className="footer-meta">
            <p>{brandContent.contacts.address}</p>
            <a href={`tel:${brandContent.contacts.phone.replace(/\s+/g, "")}`}>
              {brandContent.contacts.phone}
            </a>
            <a href={`mailto:${brandContent.contacts.email}`}>
              {brandContent.contacts.email}
            </a>
            <p>Progetto collegato: {brandContent.supportProject}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
