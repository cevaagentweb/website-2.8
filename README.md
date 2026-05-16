# Fresia Monoblock Klimatizácia — Next.js landing page

Ready-to-deploy Next.js landing page for Vercel.

## What is included

- Next.js App Router
- Tailwind CSS design system
- Slovak copy for a monoblock air-conditioner landing page
- Product/spec data centralized in `src/lib/site.ts`
- Contact form API using SMTP through `nodemailer`
- No database required
- SVG product mockup in `public/product-monoblock.svg`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Upload this folder to GitHub or import it directly into Vercel.
2. Vercel should detect Next.js automatically.
3. Add environment variables from `.env.example` in Vercel Project Settings → Environment Variables.
4. Deploy.

## Editing the product

Change brand, phone, e-mail and technical parameters here:

```txt
src/lib/site.ts
```

Important: the current technical parameters are a strong commercial placeholder based on the market segment. Before public launch, replace them with values from your final supplier datasheet, energy label, CE Declaration of Conformity, user manual and EPREL registration.

## Contact form without database

The form posts to `/api/contact`. It sends an email through SMTP. Required Vercel env variables:

```txt
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
CONTACT_TO
```

Optional:

```txt
SMTP_SECURE
CONTACT_FROM
```

If SMTP is not configured, the page still has a `mailto:` fallback button.

## Suggested next edits before launch

- Replace `Fresia Mono 12` with the final product name.
- Replace technical specs with final certified values.
- Replace SVG mockup with real product renders/photos.
- Add privacy policy and company footer details.
- Add Google Analytics / Google Ads conversion tracking.
- Add structured product data once price, availability and EAN are known.
