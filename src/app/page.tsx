import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { benefits, faqs, installationSteps, site, specs, useCases } from "@/lib/site";

const nav = [
  ["Výhody", "#vyhody"],
  ["Montáž", "#montaz"],
  ["Parametre", "#parametre"],
  ["Dopyt", "#dopyt"]
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-navy ring-1 ring-ink/10 backdrop-blur">{children}</span>;
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Fresia domov">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm font-bold text-white">F</span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.24em] text-ink">{site.brand}</span>
              <span className="block text-xs text-graphite">monobloková klimatizácia</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-graphite md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-ink">
                {label}
              </a>
            ))}
          </nav>

          <a href="#dopyt" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-panel transition hover:-translate-y-0.5 hover:bg-navy">
            Vyžiadať cenu
          </a>
        </div>
      </header>

      <section id="top" className="noise relative pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="relative z-10">
            <div className="mb-7 flex flex-wrap gap-3">
              <Badge>Bez vonkajšej jednotky</Badge>
              <Badge>Chladenie + kúrenie</Badge>
              <Badge>Wi‑Fi ovládanie</Badge>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal">{site.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-ink sm:text-7xl lg:text-8xl">
              {site.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">{site.hero.subtitle}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-graphite">{site.hero.note}</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#dopyt" className="rounded-full bg-teal px-7 py-4 text-center text-sm font-bold text-white shadow-panel transition hover:-translate-y-0.5 hover:bg-navy">
                Chcem cenovú ponuku
              </a>
              <a href="#parametre" className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-ink ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:ring-teal/40">
                Pozrieť parametre
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [site.product.cooling, "chladenie"],
                [site.product.heating, "kúrenie"],
                [site.product.space, "priestor"],
                [site.product.noise, "hlučnosť"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl bg-white/75 p-4 shadow-panel ring-1 ring-ink/5 backdrop-blur">
                  <p className="text-2xl font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-graphite">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-xl rounded-4xl bg-white p-4 shadow-soft ring-1 ring-ink/5 sm:p-7">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-ice blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-mist via-white to-ice p-8">
                <div className="air-line top-[43%]" />
                <div className="air-line" />
                <div className="air-line" />
                <div className="air-line" />
                <Image
                  src="/product-monoblock.svg"
                  alt="Monobloková klimatizácia Fresia Mono na stene"
                  width={840}
                  height={620}
                  priority
                  className="relative z-10 h-auto w-full animate-float"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["2×", "prestup cez stenu"],
                  ["20,5 cm", "tenký profil"],
                  ["Wi‑Fi", "aplikácia"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl bg-mist p-4 text-center">
                    <p className="text-xl font-semibold text-ink">{value}</p>
                    <p className="mt-1 text-xs text-graphite">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vyhody" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Prečo monoblok"
            title="Riešenie pre miesta, kde klasická split klimatizácia naráža na problém."
            text="Monoblok má celý chladiaci okruh v interiérovej jednotke. Namiesto veľkej vonkajšej jednotky pracuje s dvomi vzduchovými priestupmi cez stenu."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="group rounded-4xl bg-white p-6 shadow-panel ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-mist text-sm font-bold text-teal ring-1 ring-ink/5">0{index + 1}</div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ice">Vhodné použitie</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Keď chcete klimatizovať bez veľkej zmeny fasády.</h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              Najsilnejší predajný argument nie je len výkon, ale možnosť inštalácie v objektoch, kde by bežná vonkajšia jednotka neprešla technicky alebo administratívne.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="rounded-3xl bg-white/8 p-5 ring-1 ring-white/10 backdrop-blur">
                <p className="text-base font-semibold leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="montaz" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Montáž"
            title="Jednoduchší systém než split, ale stále technická montáž."
            text="Web predáva jednoduchosť, ale nepodsúva, že ide o zariadenie bez zásahu. Zákazník musí rozumieť, že sú potrebné dva prestupy cez obvodovú stenu."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {installationSteps.map((item) => (
              <article key={item.step} className="relative overflow-hidden rounded-4xl bg-white p-6 shadow-panel ring-1 ring-ink/5">
                <span className="absolute right-5 top-4 text-6xl font-semibold tracking-tighter text-teal/10">{item.step}</span>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal">Krok {item.step}</p>
                <h3 className="mt-8 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="parametre" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="sticky top-28 rounded-4xl bg-gradient-to-br from-navy to-ink p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-ice">Parametre</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Obchodný základ pre produktový list.</h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              Hodnoty sú centralizované v <code className="rounded bg-white/10 px-1.5 py-0.5">src/lib/site.ts</code>. Po dodaní finálneho čínskeho datasheetu prepíšete len tento súbor.
            </p>
            <p className="mt-6 rounded-3xl bg-white/8 p-4 text-sm leading-7 text-white/72 ring-1 ring-white/10">{site.disclaimer}</p>
          </div>

          <div className="rounded-4xl bg-white p-4 shadow-soft ring-1 ring-ink/5 sm:p-6">
            <div className="grid divide-y divide-ink/8">
              {specs.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <span className="text-sm font-medium text-graphite">{label}</span>
                  <span className="text-base font-semibold text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl bg-white p-6 shadow-soft ring-1 ring-ink/5 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal">Porovnanie</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">Prečo nie mobilná klimatizácia?</h2>
              <p className="mt-5 text-base leading-8 text-graphite">
                Mobilná klimatizácia je rýchle riešenie, ale hadica v okne, hluk a nižší komfort bývajú slabé miesta. Monoblok je pevné nástenné riešenie bez externej jednotky.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl ring-1 ring-ink/10">
              <table className="w-full border-collapse bg-white text-left text-sm">
                <thead className="bg-mist text-ink">
                  <tr>
                    <th className="p-4 font-semibold">Riešenie</th>
                    <th className="p-4 font-semibold">Výhoda</th>
                    <th className="p-4 font-semibold">Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/8 text-graphite">
                  <tr>
                    <td className="p-4 font-semibold text-ink">Monoblok</td>
                    <td className="p-4">Pevné riešenie bez vonkajšej jednotky</td>
                    <td className="p-4">Vyžaduje prestupy cez stenu</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Mobilná klimatizácia</td>
                    <td className="p-4">Bez montáže do steny</td>
                    <td className="p-4">Hadica do okna, nižší komfort</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-ink">Split klimatizácia</td>
                    <td className="p-4">Vysoký výkon a tichá vnútorná časť</td>
                    <td className="p-4">Vonkajšia jednotka na fasáde/balkóne</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="FAQ" title="Otázky, ktoré zákazník rieši pred kúpou." />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl bg-white p-6 shadow-panel ring-1 ring-ink/5 open:shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-semibold text-ink">
                  <span className="inline-flex w-full items-center justify-between gap-6">
                    {faq.question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-teal transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-graphite">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="dopyt" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal">Predajná stránka</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">Zákazník nemusí rozumieť technike. Musí pochopiť, či je to riešenie pre jeho byt.</h2>
            <p className="mt-6 text-lg leading-8 text-graphite">
              Preto landing page vedie cez problém, použitie, montáž, parametre a jednoduchý dopyt. Je pripravená pre SEO aj Google Ads kampane na frázy typu „klimatizácia bez vonkajšej jednotky“.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-graphite">
              <p><strong className="text-ink">Kontakt:</strong> {site.email}</p>
              <p><strong className="text-ink">Telefón:</strong> {site.phone}</p>
              <p><strong className="text-ink">Produkt:</strong> {site.productName}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-ink/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.brand}. Monobloková klimatizácia bez vonkajšej jednotky.</p>
          <div className="flex gap-5">
            <a className="hover:text-ink" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="hover:text-ink" href="#top">Hore</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
