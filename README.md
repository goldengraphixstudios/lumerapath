# Lumera Path, The Bridge Accelerator™

Custom-coded offer funnel for Lumera Path (Hybrid Offer Funnel Build package):
two full pages + two conversion pop-ups, built with Next.js 16, Tailwind CSS v4,
and TypeScript. Designed to deploy on Vercel and live on a subdomain
(e.g. `bridge.lumerapath.com`) while the client's WordPress site stays on the
root domain.

## Scope

| Component | Route / trigger |
| --- | --- |
| Home Page | `/` |
| 8-Week Program Sales Page | `/program` |
| Free Training / Masterclass registration pop-up | Any "Get the Free Training" / "Save My Seat" CTA |
| Clarity Call pre-qualification pop-up | Any "Book a Clarity Call" CTA |
| Waitlist capture | `/program#waitlist` |

## Lead capture

All forms POST to `app/api/leads/route.ts` with a `type` of
`free-training`, `clarity-call`, or `waitlist`. Submissions are currently
logged server-side, wire this route to the approved destination
(Supabase table, Resend email, or the client's CRM) before launch.

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
vercel --prod
```

Then point the chosen subdomain's DNS at the Vercel deployment.

## Assets

Brand images live in `public/images/` (sourced from the client's
`Share_WebSite.zip`). Logo PNGs were processed to have transparent
backgrounds. Coach photos: `allye.png` and `amanda.jpeg`, confirm with the
client which coach is which before launch.
