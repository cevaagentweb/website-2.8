"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(site.ctaEmailSubject);
    const body = encodeURIComponent(
      `Dobrý deň,\n\nmám záujem o ${site.productName}. Prosím o cenovú ponuku a informácie k montáži.\n\nMeno:\nTelefón:\nMesto/obec:\nTyp priestoru:\nPribližná plocha miestnosti:\n\nĎakujem.`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || "Formulár sa nepodarilo odoslať.");
      }

      setStatus("sent");
      setMessage("Dopyt bol odoslaný. Ozveme sa vám s cenou a návrhom riešenia.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Formulár sa nepodarilo odoslať.");
    }
  }

  return (
    <div className="rounded-4xl bg-white p-5 shadow-soft ring-1 ring-ink/5 sm:p-7">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">Cenová ponuka</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Pošlite nám miestnosť a spôsob montáže.</h3>
        <p className="mt-3 text-sm leading-6 text-graphite">
          Formulár je bez databázy. Po doplnení SMTP údajov vo Verceli pošle dopyt priamo na {site.email}.
        </p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Meno
          <input
            required
            name="name"
            className="rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            placeholder="Meno a priezvisko"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-ink">
            E-mail
            <input
              required
              type="email"
              name="email"
              className="rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
              placeholder="vas@email.sk"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-ink">
            Telefón
            <input
              name="phone"
              className="rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
              placeholder="+421..."
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Kde sa má klimatizácia montovať?
          <input
            name="location"
            className="rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            placeholder="Mesto, typ priestoru, približná plocha"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Správa
          <textarea
            name="message"
            rows={4}
            className="rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            placeholder="Napr. byt v Bratislave, miestnosť 24 m², nie je možné osadiť vonkajšiu jednotku."
          />
        </label>

        <button
          disabled={status === "sending"}
          className="rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-panel transition hover:-translate-y-0.5 hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Odosielam..." : "Odoslať dopyt"}
        </button>

        {message && (
          <p className={`rounded-2xl px-4 py-3 text-sm ${status === "sent" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}>
            {message}
          </p>
        )}
      </form>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        <a className="rounded-full bg-mist px-4 py-2 font-semibold text-ink transition hover:bg-ice" href={mailtoHref}>
          Poslať cez e-mail
        </a>
        <a className="rounded-full bg-mist px-4 py-2 font-semibold text-ink transition hover:bg-ice" href={`tel:${site.phone.replace(/\s/g, "")}`}>
          Zavolať {site.phone}
        </a>
      </div>
    </div>
  );
}
