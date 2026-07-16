"use client";

import Image from "next/image";
import Link from "next/link";
import { useModal } from "./ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="navy-glow grain relative overflow-hidden text-cream">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
        aria-hidden
      />
      <div
        className="orb animate-pulse-glow -right-24 top-10 h-80 w-80 bg-gold-500/10"
        aria-hidden
      />

      {/* CTA band */}
      <div className="relative mx-auto max-w-6xl px-5 pt-20 lg:px-8">
        <div className="flex flex-col items-center gap-8 border-b border-cream/10 pb-16 text-center">
          <Image
            src="/images/bridge-emblem.png"
            alt=""
            aria-hidden
            width={88}
            height={88}
            className="animate-float h-20 w-20 object-contain drop-shadow-[0_10px_25px_rgba(212,171,95,0.35)]"
          />
          <p className="font-display max-w-3xl text-3xl font-medium italic leading-snug text-cream sm:text-4xl">
            The future you&rsquo;re looking for doesn&rsquo;t require less{" "}
            <span className="text-shimmer not-italic font-semibold">ambition</span>. It requires deeper{" "}
            <span className="text-shimmer not-italic font-semibold">alignment</span>.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-cream/65">
            The Bridge Identity Reset&trade; is an eight-week journey to help
            you reconnect with yourself and build what comes next with clarity,
            confidence, and purpose.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => openModal("training")}
              className="btn btn-gold"
            >
              Get the Free Training
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </button>
            <button
              type="button"
              onClick={() => openModal("clarity")}
              className="btn btn-outline-light"
            >
              Book a Clarity Call
            </button>
            <Link href="/program" className="btn btn-outline-light">
              Explore the Program
            </Link>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="relative mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/lumerapath-mark.png"
                alt=""
                aria-hidden
                width={40}
                height={48}
                className="h-10 w-auto brightness-110"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-[0.06em] text-cream">
                  LUMERA
                </span>
                <span className="mt-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.5em] text-gold-400">
                  Path
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/60">
              An 8-week lived experience for high-achieving women leaders ready
              to reconnect with themselves while building what comes next, 
              without losing their ambition, leadership, or vision in the
              process.
            </p>
          </div>

          <div>
            <p className="overline-label overline-label--bare overline-label--light">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="transition-colors hover:text-gold-300"
                >
                  The Bridge Identity Reset&trade;
                </Link>
              </li>
              <li>
                <Link
                  href="/program#curriculum"
                  className="transition-colors hover:text-gold-300"
                >
                  The 8-Week Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/program#coaches"
                  className="transition-colors hover:text-gold-300"
                >
                  Meet Allye + Amanda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="overline-label overline-label--bare overline-label--light">
              Take a step
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>
                <button
                  type="button"
                  onClick={() => openModal("training")}
                  className="transition-colors hover:text-gold-300"
                >
                  Get the Free Training
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModal("clarity")}
                  className="transition-colors hover:text-gold-300"
                >
                  Book a Clarity Call
                </button>
              </li>
              <li>
                <Link
                  href="/program#waitlist"
                  className="transition-colors hover:text-gold-300"
                >
                  Join the Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-cream/45">
            &copy; {new Date().getFullYear()} Lumera Path. All rights reserved.
            The Bridge Identity Reset&trade; and the A3 Flow Method are trademarks
            of Lumera Path.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400/80">
            Awareness &middot; Alignment &middot; Action
          </p>
        </div>
      </div>
    </footer>
  );
}
