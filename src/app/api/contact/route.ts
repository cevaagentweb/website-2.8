import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
};

function clean(value: unknown) {
  return String(value || "").trim().slice(0, 1500);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ message: "Neplatné dáta formulára." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const location = clean(payload.location);
  const message = clean(payload.message);

  if (!name || !email) {
    return NextResponse.json({ message: "Vyplňte meno a e-mail." }, { status: 400 });
  }

  const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"];
  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    return NextResponse.json(
      {
        message: `Formulár ešte nie je napojený na SMTP. Vo Verceli doplňte premenné: ${missing.join(", ")}. Zatiaľ použite tlačidlo „Poslať cez e-mail“.`,
      },
      { status: 501 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.55; color: #10202a;">
      <h2>Nový dopyt: ${site.productName}</h2>
      <p><strong>Meno:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefón:</strong> ${phone || "—"}</p>
      <p><strong>Miesto / priestor:</strong> ${location || "—"}</p>
      <p><strong>Správa:</strong><br>${message.replace(/\n/g, "<br>") || "—"}</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.CONTACT_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Dopyt – ${site.productName} – ${name}`,
    text: `Nový dopyt: ${site.productName}\n\nMeno: ${name}\nE-mail: ${email}\nTelefón: ${phone || "—"}\nMiesto / priestor: ${location || "—"}\n\nSpráva:\n${message || "—"}`,
    html
  });

  return NextResponse.json({ ok: true });
}
