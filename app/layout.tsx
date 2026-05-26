import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "arkitect* | Digitálne riešenia",
    template: "%s | arkitect*",
  },
  description:
    "Tvoríme mini aplikácie, AI riešenia a weby. Menej manuálnej práce, viac automatizácie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
