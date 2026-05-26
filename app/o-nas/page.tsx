import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "O nás",
  description: "Sme tím profesionálov zameraných na AI a automatizáciu.",
};

export default function AboutPage() {
  return (
    <PageShell active="about">
      <section className="subpage-hero fade-in">
        <span className="subtitle">O nás</span>
        <h1>Digitálne partnerstvo</h1>
        <p>Pomáhame firmám rásť pomocou moderných technológií, AI a automatizácie.</p>
      </section>

      <section className="about-section fade-in delay-1">
        <div className="about-container">
          <div className="about-text">
            <h2>Kto sme</h2>
            <p>
              Sme technologické štúdio zamerané na tvorbu inovatívnych riešení. Naším cieľom je odbremeniť
              vás od repetitívnych úloh prostredníctvom automatizácie a implementácie umelej inteligencie do
              vašich každodenných procesov.
            </p>
            <p>
              V AI xSolutions veríme, že technológie by mali slúžiť ľuďom, nie naopak. Preto navrhujeme a
              vyvíjame systémy, ktoré sú nielen funkčné, ale aj intuitívne a jednoduché na používanie.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>10x</h3>
              <p>Zvýšenie efektivity</p>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <p>Zameranie na výsledky</p>
            </div>
            <div className="stat-box">
              <h3>∞</h3>
              <p>Možnosti škálovania</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
