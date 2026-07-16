import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OpenModalButton from "@/components/OpenModalButton";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Stories from the executive women who walked The Bridge Identity Reset™ and came out leading from clarity, conviction, and self-trust.",
  robots: { index: false },
};

/**
 * Placeholder testimonials page, intentionally not linked in the nav.
 * When Allye + Amanda send real client stories, replace the placeholder
 * cards below with the quotes and publish by adding the nav link.
 */
const placeholders = [0, 1, 2];

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-vignette grain relative overflow-hidden pb-20 pt-40 lg:pb-24 lg:pt-48">
        <div
          className="orb animate-pulse-glow -top-16 right-[10%] h-80 w-80 bg-gold-300/30"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal variant="blur">
            <p className="overline-label overline-label--center">
              Client stories
            </p>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-navy-900 sm:text-6xl">
              Real Women. Real Leadership.{" "}
              <span className="text-shimmer italic">Real Stories.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-ink-soft">
              The first cohorts of The Bridge Identity Reset&trade; are doing
              the deep work right now. Their stories will live here soon, told
              in their own words.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-deep py-20 lg:py-24">
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {placeholders.map((i) => (
              <Reveal
                key={i}
                delay={i * 120}
                className="card-lux flex flex-col p-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-gold-400/70"
                  aria-hidden
                >
                  <path d="M9.5 6.5C6.5 7.6 5 10 5 13.4V18h5v-5H7.7c0-2 .8-3.4 2.6-4.2Z" />
                  <path d="M19 6.5c-3 1.1-4.5 3.5-4.5 6.9V18h5v-5h-2.3c0-2 .8-3.4 2.6-4.2Z" />
                </svg>
                <div className="mt-5 space-y-2.5" aria-hidden>
                  <div className="h-2.5 w-full rounded-full bg-navy-900/8" />
                  <div className="h-2.5 w-11/12 rounded-full bg-navy-900/8" />
                  <div className="h-2.5 w-4/5 rounded-full bg-navy-900/8" />
                </div>
                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-sm font-semibold text-gold-600">
                    ✦
                  </span>
                  <div className="space-y-1.5" aria-hidden>
                    <div className="h-2 w-24 rounded-full bg-navy-900/10" />
                    <div className="h-2 w-16 rounded-full bg-navy-900/8" />
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Story coming soon
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-2xl text-center">
            <div className="gold-rule mb-10" />
            <p className="font-display text-2xl italic leading-snug text-navy-900">
              Want to be one of the women these stories are about?
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <OpenModalButton modal="training" className="btn btn-gold">
                Get the Free Training
                <span className="btn-arrow" aria-hidden>
                  →
                </span>
              </OpenModalButton>
              <OpenModalButton modal="clarity" className="btn btn-outline">
                Book a Clarity Call
              </OpenModalButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-8">
          <Image
            src="/images/bridge-emblem.png"
            alt=""
            aria-hidden
            width={72}
            height={72}
            className="animate-float h-16 w-16 object-contain"
          />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
            Are you a Bridge Identity Reset&trade; participant with a story to
            share? We&rsquo;d be honored to feature it. Reach out through the
            contact form on the home page.
          </p>
        </div>
      </section>
    </>
  );
}
