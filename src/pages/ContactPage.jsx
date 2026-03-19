import { useState } from "react";
import Reveal from "../components/Reveal";
import { brandContent } from "../content/brand";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function validate(data) {
    const nextErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = "Inserisci il tuo nome.";
    }

    if (!data.email.trim()) {
      nextErrors.email = "Inserisci una mail.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      nextErrors.email = "Inserisci una mail valida.";
    }

    if (!data.message.trim()) {
      nextErrors.message = "Raccontaci di cosa hai bisogno.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    window.setTimeout(() => {
      setStatus("success");
      setFormData(initialForm);
    }, 700);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  }

  return (
    <div className="page-shell inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Contatti</p>
          <h1>Apriamo una conversazione sul territorio, sui prodotti o sul network.</h1>
          <p>
            Se vuoi collaborare, raccontare una realtà produttiva o costruire un nuovo
            punto di contatto, partiamo da qui.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <article className="detail-card contact-card">
              <p className="eyebrow">Riferimenti</p>
              <h2>Terra D'Amore Network</h2>
              <div className="contact-list">
                <a href={`tel:${brandContent.contacts.phone.replace(/\s+/g, "")}`}>
                  {brandContent.contacts.phone}
                </a>
                <a href={`mailto:${brandContent.contacts.email}`}>
                  {brandContent.contacts.email}
                </a>
                <a href={`https://${brandContent.contacts.website}`} target="_blank" rel="noreferrer">
                  {brandContent.contacts.website}
                </a>
                <p>{brandContent.contacts.address}</p>
                <p>Progetto collegato: {brandContent.supportProject}</p>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <form className="detail-card contact-form" onSubmit={handleSubmit} noValidate>
              <p className="eyebrow">Scrivici</p>
              <h2>Un primo contatto, semplice e diretto.</h2>

              <label>
                Nome
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <small>{errors.name}</small> : null}
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>

              <label>
                Messaggio
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <small>{errors.message}</small> : null}
              </label>

              <div className="button-row button-row-start">
                <button type="submit" className="button button-solid" disabled={status === "sending"}>
                  {status === "sending" ? "Invio in corso..." : "Invia richiesta"}
                </button>
                <a
                  className="button button-outline"
                  href={`mailto:${brandContent.contacts.email}?subject=Contatto%20dal%20sito%20Terra%20D'Amore`}
                >
                  Oppure via email
                </a>
              </div>

              {status === "success" ? (
                <p className="form-feedback success">
                  Messaggio registrato localmente. Nel prossimo step potremo collegarlo a un backend.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="form-feedback error">
                  Controlla i campi obbligatori prima di inviare.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
