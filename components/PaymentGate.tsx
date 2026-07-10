"use client";

import { useEffect } from "react";

/**
 * Full-screen payment gate. Blocks the entire site until the project is paid
 * for. When the client settles the invoice, set LOCKED to false (or delete the
 * <PaymentGate /> line in app/layout.tsx) and redeploy to unlock the site.
 */
const LOCKED = false;

export default function PaymentGate() {
  useEffect(() => {
    if (!LOCKED) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);

  if (!LOCKED) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project payment required"
      style={{ zIndex: 2147483000 }}
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-navy-950 px-6 text-center text-cream"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(212,171,95,0.16), transparent 55%), radial-gradient(circle at 80% 90%, rgba(212,171,95,0.08), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-xl">
        {/* padlock mark */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9 text-gold-300"
            aria-hidden
          >
            <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
            <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
            <circle cx="12" cy="15" r="1.4" />
            <path d="M12 16.4v2.1" />
          </svg>
        </div>

        <p className="text-[0.7rem] font-bold uppercase tracking-[0.4em] text-gold-300">
          Access Restricted
        </p>

        <h1 className="font-display mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          This project is{" "}
          <span className="text-shimmer italic">unpaid</span> for viewing.
        </h1>

        <p className="mx-auto mt-6 max-w-md leading-relaxed text-cream/75">
          This website has been built and is ready to go live. Access is on hold
          until the outstanding balance is settled.
        </p>

        {/* amount */}
        <div className="mx-auto mt-9 inline-flex flex-col items-center rounded-2xl border border-gold-400/30 bg-cream/[0.04] px-10 py-6 backdrop-blur-sm">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cream/60">
            Balance due
          </span>
          <span className="font-display mt-1 text-6xl font-semibold text-gold-300">
            $400
          </span>
        </div>

        <p className="mx-auto mt-9 max-w-md text-sm leading-relaxed text-cream/70">
          Please settle the invoice to unlock the site. Once payment is
          received, the project goes live immediately.
        </p>

        <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

        <p className="mt-8 text-xs uppercase tracking-[0.24em] text-cream/45">
          Built by Scavolution
        </p>
      </div>
    </div>
  );
}
