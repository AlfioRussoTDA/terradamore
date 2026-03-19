# 🌿 Terra D'Amore — Sito Web

Sito React completo per **Terra D'Amore Network** — Network · Shop · E-Commerce di prodotti siciliani della terra.

## Struttura

```
src/
  components/
    Navbar.js       → Navigazione sticky con menu mobile
    Hero.js         → Sezione hero animata con statistiche
    Ticker.js       → Striscia di parole chiave animata
    Vision.js       → 4 pilastri della vision
    Mission.js      → 4 step della missione
    Network.js      → Visualizzazione network SVG + features
    Prodotti.js     → Paniere prodotti con tabs interattivi
    Shop.js         → Caratteristiche degli store fisici
    Contatti.js     → Form di contatto + footer
  App.js            → App principale (cursor, reveal animations)
  index.css         → Variabili CSS, animazioni globali
  index.js          → Entry point React
```

## Avvio in locale

```bash
cd terradamore
npm install
npm start
```

## Deploy su Vercel

### Metodo 1 — Via GitHub (raccomandato)
1. Crea un repo su GitHub e fai push di questa cartella
2. Vai su [vercel.com](https://vercel.com) → "New Project"
3. Importa il repo GitHub → Vercel lo detecta automaticamente come CRA
4. Clicca **Deploy** → online in 2 minuti ✅

### Metodo 2 — Via CLI Vercel
```bash
npm install -g vercel
cd terradamore
vercel
```
Segui le istruzioni nel terminale.

## Personalizzazioni rapide

| Cosa vuoi cambiare | Dove |
|---|---|
| Colori brand | `src/index.css` variabili `:root` |
| Testi Hero | `src/components/Hero.js` |
| Numero store/produttori | `src/components/Hero.js` (hero-stats) |
| Lista prodotti | `src/components/Prodotti.js` (categories array) |
| Email/telefono contatti | `src/components/Contatti.js` |
| Dominio custom su Vercel | Dashboard Vercel → Settings → Domains |

## Prossimi step consigliati

- [ ] Collegare il form contatti a **Formspree** o **EmailJS** per ricevere email reali
- [ ] Aggiungere sezione **E-Commerce** con Shopify o WooCommerce embed
- [ ] Integrare **CMS headless** (Contentful, Sanity) per gestire i prodotti
- [ ] Aggiungere **Google Analytics** / Vercel Analytics
- [ ] Sezione **Blog/Editoria** con storie dei produttori
