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
        caseStudy: "/assets/case-study-1.jpg",
      },
      {
        title: "OCR párovanie bločkov a platieb",
        tag: "OCR",
        body: "Prepojenie údajov z bločkov s bankovými výpismi pre rýchlejšie účtovníctvo.",
        caseStudy: "/assets/case-study-3.jpg",
      },
      {
        title: "Triedenie a kategorizácia PDF",
        tag: "Spracovanie PDF",
        body: "Automatické rozdelenie veľkého množstva dokumentov do skupín.",
        caseStudy: "/assets/case-study-4.jpg",
      },
      {
        title: "Premena exportu na objednávku",
        tag: "Formátovanie",
        body: "Transformácia technických exportov na čistý, klientsky pripravený výstup.",
        caseStudy: "/assets/case-study-5.jpg",
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
        caseStudy: "/assets/case-study-2.jpg",
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
                {item.caseStudy ? (
                  <div className="project-item-content">
                    <p>{item.body}</p>
                    <a href={item.caseStudy} target="_blank" rel="noreferrer" className="pdf-btn">
                      <PdfIcon />
                      Čítať PDF
                    </a>
                  </div>
                ) : (
                  <p>{item.body}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}

function PdfIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
