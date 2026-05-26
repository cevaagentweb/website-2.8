import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás ohľadom vašich potrieb pre AI a automatizáciu.",
};

export default function ContactPage() {
  return (
    <PageShell active="contact">
      <section className="subpage-hero fade-in">
        <span className="subtitle">Kontakt</span>
        <h1>Spojme sa</h1>
        <p>Sme pripravení vypočuť si vaše potreby a nájsť to najlepšie riešenie.</p>
      </section>

      <section className="contact-section fade-in delay-1">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Naše údaje</h2>

            <div className="info-block">
              <h4>Sídlo spoločnosti</h4>
              <p>
                Cementárenská 15
                <br />
                Stupava
              </p>
            </div>

            <div className="info-block">
              <h4>Fakturačné údaje</h4>
              <p>
                AI xSolutions
                <br />
                IČO: 12345678
                <br />
                DIČ: 2021234567
              </p>
            </div>

            <div className="info-block">
              <h4>Kontakt</h4>
              <p>
                <a href="tel:+421912345678">+421 912 345 678</a>
                <br />
                <a href="mailto:lepsiaprouktivitadnes@bsktm.eu">lepsiaprouktivitadnes@bsktm.eu</a>
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Napíšte nám</h2>
            <form className="contact-form" action="#" method="POST">
              <div className="form-group">
                <label htmlFor="name">Meno a priezvisko</label>
                <input type="text" id="name" name="name" placeholder="Váš kontakt..." required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="vas@email.sk" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Správa</label>
                <textarea id="message" name="message" rows={5} placeholder="Ako vám vieme pomôcť?" required />
              </div>
              <button type="submit" className="submit-btn">
                Odoslať správu
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
