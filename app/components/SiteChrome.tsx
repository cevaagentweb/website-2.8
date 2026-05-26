import Link from "next/link";
import type { ReactNode } from "react";

type NavKey = "projects" | "services" | "about" | "contact";

const navItems: Array<{ href: string; label: string; key: NavKey }> = [
  { href: "/realizacie-projekty", label: "Projekty", key: "projects" },
  { href: "/sluzby", label: "Služby", key: "services" },
  { href: "/o-nas", label: "O nás", key: "about" },
  { href: "/kontakt", label: "Kontakt", key: "contact" },
];

export function Header({ active }: { active?: NavKey }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          arkitect*
        </Link>
        <div className="nav-pill">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href} className={active === item.key ? "active" : undefined}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/kontakt" className="nav-cta-btn">
          Napíšte nám
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="site-footer fade-in">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              arkitect*
            </Link>
            <p>Digitálne riešenia na mieru.</p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigácia</h4>
              <Link href="/realizacie-projekty">Projekty</Link>
              <Link href="/sluzby">Služby</Link>
              <Link href="/o-nas">O nás</Link>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <Link href="/kontakt">Napíšte nám</Link>
              <a href="mailto:info@arkitect.sk">info@arkitect.sk</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 arkitect*. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  active,
  children,
}: {
  active?: NavKey;
  children: ReactNode;
}) {
  return (
    <>
      <Header active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function PlaceholderPage() {
  return (
    <PageShell>
      <section className="page-404">
        <span className="subtitle">404</span>
        <h1>Stránka nenájdená</h1>
        <p>
          Táto stránka ešte nie je pripravená.
          <br />
          Vráťte sa na hlavnú stránku.
        </p>
        <Link href="/" className="btn-back">
          ← Späť domov
        </Link>
      </section>
    </PageShell>
  );
}
