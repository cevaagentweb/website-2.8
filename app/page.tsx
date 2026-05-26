import Link from "next/link";
import { PageShell } from "./components/SiteChrome";

const projectCards = [
  {
    href: "/realizacie-projekty#mini-apps",
    className: "delay-1",
    image: "/assets/ocean_wave.png",
    title: (
      <>
        MINI
        <br />
        APPS
      </>
    ),
    body: (
      <>
        Produktivitné mini aplikácie
        <br />
        na mieru.
      </>
    ),
  },
  {
    href: "/realizacie-projekty#ai-solutions",
    className: "delay-2",
    image: "/assets/puzzle_tower.png",
    title: (
      <>
        AI
        <br />
        RIEŠENIA
      </>
    ),
    body: (
      <>
        Automatizácia a inteligentné
        <br />
        spracovanie dát.
      </>
    ),
  },
  {
    href: "/realizacie-projekty#websites",
    className: "delay-3",
    image: "/assets/honey_comb.png",
    title: (
      <>
        WEBOVÉ
        <br />
        STRÁNKY
      </>
    ),
    body: (
      <>
        Moderné weby a webové
        <br />
        aplikácie.
      </>
    ),
  },
];

export default function Home() {
  return (
    <PageShell active="projects">
      <section className="hero fade-in">
        <span className="subtitle">Čo robíme</span>
        <h1>Design & Build</h1>
        <p>
          Tvoríme digitálne nástroje, ktoré šetria čas
          <br />a zjednodušujú prácu.
        </p>
      </section>

      <section className="projects">
        {projectCards.map((card) => (
          <Link key={card.href} href={card.href} className={`project-card fade-in ${card.className}`}>
            <div className="project-bg" style={{ backgroundImage: `url('${card.image}')` }} />
            <div className="project-content">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </div>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
