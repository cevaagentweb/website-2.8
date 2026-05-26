import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Realizácie & Projekty",
  description: "Naše realizácie — mini aplikácie, AI riešenia a webové stránky.",
};

const sections = [
  {
    id: "mini-apps",
    number: "01",
    title: "Mini aplikácie",
    description: "Produktivitné nástroje na zjednodušenie denných procesov.",
    items: [
      {
        title: "Automatické pečiatkovanie PDF",
        tag: "PDF workflow",
        body: "Automatické vkladanie firemnej pečiatky a podpisu do PDF dokumentov.",
      },
      {
        title: "OCR párovanie bločkov a platieb",
        tag: "OCR",
        body: "Prepojenie údajov z bločkov s bankovými výpismi pre rýchlejšie účtovníctvo.",
      },
      {
        title: "Triedenie a kategorizácia PDF",
        tag: "Spracovanie PDF",
        body: "Automatické rozdelenie veľkého množstva dokumentov do skupín.",
      },
      {
        title: "Premena exportu na objednávku",
        tag: "Formátovanie",
        body: "Transformácia technických exportov na čistý, klientsky pripravený výstup.",
      },
    ],
  },
  {
    id: "ai-solutions",
    number: "02",
    title: "AI riešenia",
    description: "Inteligentné systémy na automatizáciu a spracovanie dát.",
    items: [
      {
        title: "AI príprava faktúr pre POHODA",
        tag: "AI workflow",
        body: "AI systém na hromadnú prípravu fakturačných podkladov pre import do POHODY.",
      },
      {
        title: "Inteligentné spracovanie dokumentov",
        tag: "AI",
        body: "Automatická extrakcia a klasifikácia údajov z neštruktúrovaných dokumentov.",
      },
    ],
  },
  {
    id: "websites",
    number: "03",
    title: "Webové stránky",
    description: "Moderné weby a webové aplikácie na mieru.",
    items: [
      {
        title: "Firemná prezentácia",
        tag: "Web",
        body: "Čistý, moderný web pre prezentáciu služieb a produktov.",
      },
      {
        title: "Interný dashboard",
        tag: "Web app",
        body: "Webová aplikácia na správu interných procesov a dát.",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <PageShell active="projects">
      <section className="subpage-hero fade-in">
        <span className="subtitle">Realizácie & Projekty</span>
        <h1>Naša práca</h1>
        <p>Ukážky riešení, ktoré sme pripravili pre klientov.</p>
      </section>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="project-section">
          <div className="section-header fade-in">
            <span className="section-number">{section.number}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>

          <div className="project-list">
            {section.items.map((item) => (
              <div key={item.title} className="project-item fade-in">
                <div className="project-item-header">
                  <h3>{item.title}</h3>
                  <span className="tag">{item.tag}</span>
                </div>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
