"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import OpenModalButton from "./OpenModalButton";
import ShiftGraphic from "./ShiftGraphic";

const beats = [
  {
    kicker: "The hidden cost",
    number: "01",
    accent: "Cage",
    title: "High performance can quietly become a very polished cage.",
    body: "You keep the room calm, move the plan forward, and carry the decisions that touch everyone. The outside signal reads capable. The inside signal reads tired of proving.",
  },
  {
    kicker: "The pattern",
    number: "02",
    accent: "Pattern",
    title: "The system keeps rewarding the part of you that is running out of air.",
    body: "Every rescue, every extra yes, every silent compromise trains the room to expect more from the version of you that actually needs rest, clarity, and a new standard.",
  },
  {
    kicker: "The disconnection",
    number: "03",
    accent: "Disconnection",
    title: "You can execute almost anything, except answer this.",
    body: "What do I actually want? What am I building toward? What legacy do I care about?",
  },
  {
    kicker: "The corporate high-performance trap",
    number: "04",
    accent: "Trap",
    title: "An operating system built on over-functioning and always being the one everyone leans on.",
    body: "It gets results, but it slowly pulls you further from yourself.",
  },
];

function usePinnedProgress() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const travel = section.offsetHeight - window.innerHeight;
      const value = travel > 0 ? -rect.top / travel : 0;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}

export default function PinnedShiftSection() {
  const { ref, progress } = usePinnedProgress();
  const activeIndex = Math.min(
    beats.length - 1,
    Math.floor(progress * beats.length)
  );
  const active = beats[activeIndex];

  // Jump directly to a beat (Amanda's request: clickable navigation instead
  // of discovering the scroll interaction).
  const goToBeat = (index: number) => {
    const section = ref.current;
    if (!section) return;
    const travel = section.offsetHeight - window.innerHeight;
    const top =
      window.scrollY +
      section.getBoundingClientRect().top +
      (travel * (index + 0.5)) / beats.length;
    if (window.__lenis) {
      window.__lenis.scrollTo(top, { duration: 1.1 });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="pinned-shift relative h-[560vh] bg-navy-950">
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden text-cream">
        {/* Duotone backdrop */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/allye-amanda.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,35,0.98)_0%,rgba(10,18,35,0.95)_44%,rgba(10,18,35,0.74)_100%)]" />
          <div className="pinned-scanline" />
        </div>

        {/* Scroll load bar */}
        <div className="pinned-loadbar" aria-hidden>
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>

        {/* Animated motif graphic */}
        <ShiftGraphic index={activeIndex} />

        {/* Header row */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-24 md:pt-28 lg:px-8">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="h-px w-10 shrink-0 bg-gold-400" aria-hidden />
            <span
              key={active.kicker}
              className="pinned-kicker text-[0.68rem] font-bold uppercase tracking-[0.38em] text-gold-300"
            >
              {active.kicker}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5">
            {beats.map((beat, index) => (
              <button
                key={beat.number}
                type="button"
                onClick={() => goToBeat(index)}
                aria-label={`Go to part ${index + 1}: ${beat.kicker}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-[0.72rem] font-bold transition-all duration-500 sm:h-9 sm:w-9 ${
                  index === activeIndex
                    ? "border-gold-400 bg-gold-400 text-navy-950 shadow-[0_0_16px_rgb(212_171_95/0.6)]"
                    : index < activeIndex
                      ? "border-gold-500/60 bg-gold-500/15 text-gold-300 hover:bg-gold-500/30"
                      : "border-cream/25 text-cream/55 hover:border-gold-400/60 hover:text-gold-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <span className="font-display ml-2 hidden text-sm italic text-cream/55 md:inline">
              {active.number} / 04
            </span>
          </div>
        </div>

        {/* Kinetic copy stage */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-start px-5 pt-8 lg:pt-12 lg:px-8">
          <div className="w-full max-w-3xl">
            <div className="relative min-h-[27rem] sm:min-h-[26rem]">
              {beats.map((beat, index) => (
                <article
                  key={beat.title}
                  className={`pinned-kinetic-copy absolute inset-x-0 top-0 ${
                    index === activeIndex ? "is-active" : ""
                  } ${index < activeIndex ? "is-past" : ""}`}
                >
                  <span className="pinned-number">{beat.number}</span>
                  <h2 className="font-display mt-2 max-w-[20ch] text-[2.05rem] font-semibold leading-[1.06] text-cream sm:text-[2.7rem] lg:text-[3.05rem]">
                    {beat.title}
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-cream/72 sm:text-[1.02rem]">
                    {beat.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <OpenModalButton modal="training" className="btn btn-gold">
                Get the Free Training
                <span className="btn-arrow" aria-hidden>
                  →
                </span>
              </OpenModalButton>
              <OpenModalButton modal="clarity" className="btn btn-outline-light">
                Book a Clarity Call
              </OpenModalButton>
              <Link href="/program" className="btn btn-outline-light">
                Explore the Program
              </Link>
            </div>
            <p className="mt-5 text-xs tracking-wide text-cream/45">
              90 minutes, live and free. No pitch, no pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
