import { useState } from "react";
import networkSynergy from "../assets/network-synergy.svg";
import Reveal from "../components/Reveal";
import { brandContent } from "../content/brand";

const initialForm = {
  organization: "",
  role: "",
  email: "",
  goal: "",
};

export default function NetworkPage() {
  const { networkPage } = brandContent;
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function validate(data) {
    const nextErrors = {};

    if (!data.organization.trim()) {
      nextErrors.organization = "Inserisci il nome della tua realta.";
    }

    if (!data.role.trim()) {
      nextErrors.role = "Indica il tuo ruolo nel network.";
    }

    if (!data.email.trim()) {
      nextErrors.email = "Inserisci una email di contatto.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      nextErrors.email = "Inserisci una email valida.";
    }

    if (!data.goal.trim()) {
      nextErrors.goal = "Spiega in breve cosa stai cercando.";
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
    }, 800);
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
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">Network</p>
            <h1>{networkPage.title}</h1>
            <p>{networkPage.intro}</p>
          </div>
          <img
            src={networkSynergy}
            alt="Mappa relazionale del network Terra D'Amore con nodi, partner e connessioni."
            className="scene-illustration page-illustration"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Per produttori</p>
              <h2>Dal lavoro in campo a un brand digitale premium.</h2>
            </div>
          </Reveal>
          <div className="card-grid two-up">
            {networkPage.producerBenefits.map((benefit) => (
              <Reveal key={benefit.title}>
                <article className="detail-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Per hub e partner di rete</p>
              <h2>Una struttura pronta all'uso, ma capace di valorizzare le differenze locali.</h2>
            </div>
          </Reveal>
          <div className="card-grid two-up">
            {networkPage.partnerBenefits.map((benefit) => (
              <Reveal key={benefit.title}>
                <article className="detail-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Prima vs Dopo</p>
              <h2>Dall'isolamento operativo a un sistema che crea valore condiviso.</h2>
            </div>
          </Reveal>
          <div className="comparison-table">
            <div className="comparison-row comparison-head">
              <strong>Sfida tradizionale</strong>
              <strong>Soluzione Terra D'Amore - NET</strong>
            </div>
            {networkPage.comparison.map((item) => (
              <div key={item.traditional} className="comparison-row">
                <p>{item.traditional}</p>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="section-heading narrow">
              <p className="eyebrow">Ingresso nel network</p>
              <h2>Un percorso semplice, progressivo e orientato alla relazione.</h2>
            </div>
          </Reveal>
          <div className="card-grid three-up">
            {networkPage.steps.map((step, index) => (
              <Reveal key={step}>
                <article className="info-card dark-card">
                  <p className="eyebrow">Step {index + 1}</p>
                  <p>{step}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container detail-grid">
          <Reveal>
            <article className="detail-card">
              <p className="eyebrow">Richiedi un confronto</p>
              <h2>Unisciti alla rete che trasforma visibilita, logistica e reputazione in un unico asset.</h2>
              <p>
                Questo modulo e un primo passo per capire se Terra D'Amore puo diventare
                il tuo acceleratore commerciale, editoriale o territoriale.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <form className="detail-card contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Azienda o progetto
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.organization)}
                />
                {errors.organization ? <small>{errors.organization}</small> : null}
              </label>

              <label>
                Ruolo
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.role)}
                />
                {errors.role ? <small>{errors.role}</small> : null}
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
                Cosa cerchi nel network?
                <textarea
                  name="goal"
                  rows="4"
                  value={formData.goal}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.goal)}
                />
                {errors.goal ? <small>{errors.goal}</small> : null}
              </label>

              <div className="button-row button-row-start">
                <button type="submit" className="button button-solid" disabled={status === "sending"}>
                  {status === "sending" ? "Invio in corso..." : "Invia candidatura"}
                </button>
              </div>

              {status === "success" ? (
                <p className="form-feedback success">
                  Richiesta registrata. Nel prossimo step possiamo collegarla a CRM o email automation.
                </p>
              ) : null}

              {status === "error" ? (
                <p className="form-feedback error">
                  Completa i campi obbligatori per inviare la richiesta.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
