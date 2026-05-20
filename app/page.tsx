import MotionButtons from "./motion-buttons";

const hotspots = [
  { href: "#apps", label: "Apps", className: "hotspot nav-apps" },
  { href: "#websites", label: "Websites", className: "hotspot nav-websites" },
  { href: "#top", label: "Home", className: "hotspot nav-logo" },
  { href: "#ai", label: "AI solutions", className: "hotspot nav-ai" },
  { href: "#about", label: "About", className: "hotspot nav-about" },
  { href: "#contact", label: "Start a project", className: "hotspot nav-start" },
  { href: "#apps", label: "Explore services", className: "hotspot hero-play" },
  { href: "#apps", label: "Learn more about PDF readers and OCR", className: "hotspot learn-pdf" },
  { href: "#apps", label: "Learn more about Excel and VBA macros", className: "hotspot learn-vba" },
  { href: "#apps", label: "Learn more about mini SaaS apps", className: "hotspot learn-saas" },
  { href: "#websites", label: "Website design panel", className: "hotspot website-panel-left" },
  { href: "#websites", label: "Website clarity panel", className: "hotspot website-panel-right" },
  { href: "#ai", label: "AI central brain", className: "hotspot ai-brain" },
  { href: "#contact", label: "Start a project", className: "hotspot final-start" },
];

export default function Home() {
  return (
    <main className="pixel-page" id="top">
      <MotionButtons />

      <h1 className="sr-only">Small apps. Websites. AI brain.</h1>
      <p className="sr-only">
        Productivity systems for modern businesses. Small productivity apps, clean websites,
        and AI solutions that eliminate repetitive tasks.
      </p>

      <div className="design-frame">
        <img
          className="design-image"
          src="/assets/approved-website-template.png"
          alt="Full website template for small apps, websites, and AI solutions"
          width="836"
          height="1881"
        />

        <section id="about" className="anchor-section" aria-label="About" />
        <section id="apps" className="anchor-section apps-anchor" aria-label="Apps" />
        <section id="websites" className="anchor-section websites-anchor" aria-label="Websites" />
        <section id="ai" className="anchor-section ai-anchor" aria-label="AI solutions" />
        <section id="contact" className="anchor-section contact-anchor" aria-label="Contact" />

        {hotspots.map((hotspot) => (
          <a
            key={`${hotspot.href}-${hotspot.className}`}
            href={hotspot.href}
            aria-label={hotspot.label}
            className={`${hotspot.className} magnetic`}
            data-drag-id={hotspot.className.replace(/\s+/g, "-")}
          />
        ))}
      </div>
    </main>
  );
}
