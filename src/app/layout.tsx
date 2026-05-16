import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.productName} | Monobloková klimatizácia bez vonkajšej jednotky`,
  description:
    "Landing page pre monoblokovú klimatizáciu bez vonkajšej jednotky. Chladenie, kúrenie, Wi‑Fi a montáž cez dva priestupy v stene.",
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: `${site.productName} | Klimatizácia bez vonkajšej jednotky`,
    description:
      "Elegantné riešenie klimatizácie do bytu, kancelárie alebo apartmánu bez klasickej vonkajšej jednotky.",
    type: "website",
    locale: "sk_SK"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
