import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fresia Studio | Small Apps, Websites, AI Systems",
  description:
    "Minimal SaaS tools, PDF readers, OCR workflows, VBA macros, websites, and AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
