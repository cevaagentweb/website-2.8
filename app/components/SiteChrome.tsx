import Link from "next/link";
import type { ReactNode } from "react";

type NavKey = "home" | "projects" | "about" | "contact";

const navItems: Array<{ href: string; label: string; key: NavKey }> = [
  { href: "/", label: "Domov", key: "home" },
  { href: "/realizacie-projekty", label: "Projekty", key: "projects" },
  { href: "/o-nas", label: "O nás", key: "about" },
  { href: "/kontakt", label: "Kontakt", key: "contact" },
];

export function Header({ active }: { active?: NavKey }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          AI xSolutions
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
              AI xSolutions
            </Link>
            <p>Digitálne riešenia na mieru.</p>
            <p className="company-details mt-10">
              Cementárenská 15, Stupava
              <br />
              IČO: 12345678 | DIČ: 2021234567
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigácia</h4>
              <Link href="/">Domov</Link>
              <Link href="/realizacie-projekty">Projekty</Link>
              <Link href="/o-nas">O nás</Link>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <a href="tel:+421912345678">+421 912 345 678</a>
              <a href="mailto:lepsiaprouktivitadnes@bsktm.eu">lepsiaprouktivitadnes@bsktm.eu</a>
              <div className="social-links mt-10">
                <a href="#" aria-label="Instagram">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AI xSolutions. Všetky práva vyhradené.</p>
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
