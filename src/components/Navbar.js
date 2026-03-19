import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Mission', href: '#mission' },
  { label: 'Network', href: '#network' },
  { label: 'Shop', href: '#shop' },
  { label: 'Prodotti', href: '#prodotti' },
  { label: 'Editoria', href: '#editoria' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.2rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        .navbar.scrolled {
          background: rgba(26, 61, 43, 0.97);
          backdrop-filter: blur(12px);
          padding: 0.8rem 3rem;
          box-shadow: 0 2px 40px rgba(0,0,0,0.15);
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--white);
          text-decoration: none;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-logo span {
          color: var(--lime);
        }
        .nav-logo-dot {
          width: 8px;
          height: 8px;
          background: var(--lime);
          border-radius: 50%;
          display: inline-block;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: rgba(255,255,255,0.8);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--lime);
          transition: width 0.3s ease;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--lime);
        }
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        .nav-cta {
          background: var(--lime);
          color: var(--green-dark) !important;
          padding: 0.55rem 1.4rem;
          border-radius: 100px;
          font-weight: 600 !important;
          transition: all 0.2s ease !important;
        }
        .nav-cta:hover {
          background: var(--lime-bright) !important;
          transform: translateY(-1px);
        }
        .nav-cta::after { display: none !important; }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--white);
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: var(--green-dark);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }
        .mobile-menu a {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--white);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .mobile-menu a:hover { color: var(--lime); }
        @media (max-width: 768px) {
          .navbar { padding: 1rem 1.5rem; }
          .navbar.scrolled { padding: 0.8rem 1.5rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="nav-logo">
          Terra <span>D'Amore</span>
          <span className="nav-logo-dot" />
        </a>
        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${l.label === 'Contatti' ? 'nav-cta' : ''}${active === l.href ? ' active' : ''}`}
                onClick={e => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={e => handleNavClick(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
