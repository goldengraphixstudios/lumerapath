"use client";

import { useEffect, useRef, useState } from "react";
import JourneyGraphic from "./JourneyGraphic";
import Reveal from "./Reveal";

const phases = [
  {
    phase: "Awareness",
    label: "See the operating pattern",
    description:
      "Understand the hidden patterns, roles, expectations, and survival strategies that have been quietly shaping your reality.",
    weeks: [
      { week: "Week 1", title: "The Mirror Moment™", tag: "Diagnose" },
      { week: "Week 2", title: "The Approval Blueprint™", tag: "Decode" },
    ],
  },
  {
    phase: "Alignment",
    label: "Return to your internal standard",
    description:
      "Reconnect with your values, intuition, and vision so your decisions come from clarity, not fear or external validation.",
    weeks: [
      { week: "Week 3", title: "Your Internal Compass™", tag: "Reconnect" },
      { week: "Week 4", title: "The Expansion Experience™", tag: "Expand" },
      { week: "Week 5", title: "The Action Momentum™", tag: "Build" },
    ],
  },
  {
    phase: "Action",
    label: "Move toward your next chapter",
    description:
      "Build sustainable structures, aligned momentum, and a concrete plan toward your next chapter.",
    weeks: [
      { week: "Week 6", title: "The Authentic Relationship™", tag: "Embody" },
      { week: "Week 7", title: "The Bridge North Star™", tag: "Anchor" },
      { week: "Week 8", title: "Embodying The Bridge™", tag: "Sustain" },
    ],
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
      const next = travel > 0 ? -rect.top / travel : 0;
      setProgress(Math.min(1, Math.max(0, next)));
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

export default function PinnedJourneySection() {
  const { ref, progress } = usePinnedProgress();
  const activeIndex = Math.min(
    phases.length - 1,
    Math.floor(progress * phases.length)
  );
  const active = phases[activeIndex];
  const spineFill = (activeIndex + 0.75) / phases.length;

  // Jump straight to a phase (Amanda's request: clickable phase names
  // instead of relying on scroll discovery).
  const goToPhase = (index: number) => {
    const section = ref.current;
    if (!section) return;
    const travel = section.offsetHeight - window.innerHeight;
    const top =
      window.scrollY +
      section.getBoundingClientRect().top +
      (travel * (index + 0.5)) / phases.length;
    if (window.__lenis) {
      window.__lenis.scrollTo(top, { duration: 1.1 });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Intro: the A3 Flows Method */}
      <section
        id="curriculum"
        className="relative scroll-mt-24 overflow-hidden bg-cream-deep pb-4 pt-24 lg:pt-28"
      >
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="overline-label overline-label--center">
              The 8-week journey
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              What&rsquo;s Inside the{" "}
              <span className="text-shimmer italic">8-Week Journey?</span>
            </h2>
            <p className="mt-7 leading-relaxed text-ink-soft">
              The A&sup3; Flows&trade; Method,{" "}
              <strong className="text-navy-900">
                Awareness &middot; Alignment &middot; Action
              </strong>
              , is the foundation of The Bridge Identity Reset&trade;. Rather
              than treating growth as a series of disconnected lessons, it
              provides an intentional pathway where each week builds upon the
              last, helping you transform awareness into alignment, alignment
              into action, and action into a sustainable way of leading and
              living with clarity, purpose, and authenticity.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        ref={ref}
        className="journey-lock relative h-[440vh] bg-cream-deep"
      >
        <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
          <div className="absolute inset-0" aria-hidden>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(212,171,95,0.22),transparent_32%),radial-gradient(circle_at_86%_78%,rgba(15,28,54,0.14),transparent_36%),linear-gradient(180deg,#f8f1e5,#f1e6d3)]" />
            <div className="journey-grid" />
          </div>

          <div className="pinned-loadbar" aria-hidden>
            <span
              style={{
                transform: `scaleX(${progress})`,
                background: "linear-gradient(to right,#a97c26,#d4ab5f,#c3922e)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8">
            {/* Left: kinetic phase copy */}
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold-500" aria-hidden />
                <span className="text-[0.74rem] font-bold uppercase tracking-[0.34em] text-gold-700">
                  The A&sup3; Flows&trade; Method
                </span>
              </div>

              <div className="relative mt-7 min-h-[21rem] sm:min-h-[19rem]">
                {phases.map((phase, index) => (
                  <article
                    key={phase.phase}
                    className={`journey-copy absolute inset-0 ${
                      index === activeIndex ? "is-active" : ""
                    } ${index < activeIndex ? "is-past" : ""}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-7xl font-semibold leading-none text-gold-500/25 sm:text-8xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-5xl font-semibold leading-[1.0] text-navy-900 sm:text-6xl lg:text-[4.25rem]">
                        {phase.phase}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.26em] text-gold-700">
                      {phase.label}
                    </p>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                      {phase.description}
                    </p>

                    {/* Static stacked mode only: every phase's weeks shown
                        inline, since the medallion column (which only ever
                        shows the "active" phase) is hidden there. */}
                    <div className="journey-inline-weeks mt-6 grid gap-3 sm:grid-cols-2">
                      {phase.weeks.map((w) => (
                        <div key={w.week} className="journey-week-card">
                          <div className="flex items-center justify-between">
                            <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold-700">
                              {w.week}
                            </span>
                            <span className="rounded-full bg-gold-400/15 px-2.5 py-1 text-[0.54rem] font-bold uppercase tracking-[0.14em] text-gold-700">
                              {w.tag}
                            </span>
                          </div>
                          <p className="font-display mt-2 text-lg font-semibold leading-tight text-navy-900 sm:text-xl">
                            {w.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="journey-pills mt-4 flex flex-wrap gap-2.5">
                {phases.map((phase, index) => (
                  <button
                    key={phase.phase}
                    type="button"
                    onClick={() => goToPhase(index)}
                    aria-label={`Go to phase ${index + 1}: ${phase.phase}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-all duration-500 ${
                      index === activeIndex
                        ? "border-gold-500/50 bg-navy-900 text-gold-300"
                        : index < activeIndex
                          ? "border-gold-500/40 bg-gold-400/15 text-gold-700 hover:bg-gold-400/30"
                          : "border-navy-900/12 bg-white/60 text-ink-soft/70 hover:border-gold-500/40 hover:text-gold-700"
                    }`}
                  >
                    {phase.phase}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: animated phase medallion (hidden in static stacked
                mode; see .journey-inline-weeks above for the mobile
                equivalent) */}
            <div className="journey-medallion-col flex flex-col items-center" aria-hidden>
              <div className="journey-medallion">
                {/* progress + phase-node ring */}
                <svg className="journey-ring" viewBox="0 0 320 320" fill="none">
                  <circle cx="160" cy="160" r="150" stroke="rgb(15 28 54 / 0.1)" strokeWidth="2" />
                  <circle
                    cx="160"
                    cy="160"
                    r="150"
                    stroke="url(#jgProgress)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 150}
                    strokeDashoffset={2 * Math.PI * 150 * (1 - spineFill)}
                    transform="rotate(-90 160 160)"
                    style={{ transition: "stroke-dashoffset 0.25s linear" }}
                  />
                  <defs>
                    <linearGradient id="jgProgress" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a97c26" />
                      <stop offset="55%" stopColor="#d4ab5f" />
                      <stop offset="100%" stopColor="#f6e3af" />
                    </linearGradient>
                  </defs>
                  {phases.map((_, i) => {
                    const angle = ((-90 + i * 120) * Math.PI) / 180;
                    const cx = Math.round((160 + 150 * Math.cos(angle)) * 100) / 100;
                    const cy = Math.round((160 + 150 * Math.sin(angle)) * 100) / 100;
                    const reached = i <= activeIndex;
                    return (
                      <g key={i} style={{ transition: "all 0.5s ease" }}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r={i === activeIndex ? 11 : 7}
                          fill={reached ? "#0f1c36" : "#f1e6d3"}
                          stroke={reached ? "#d4ab5f" : "rgb(15 28 54 / 0.2)"}
                          strokeWidth="2"
                        />
                        {i === activeIndex && (
                          <circle cx={cx} cy={cy} r="11" fill="none" stroke="#d4ab5f" strokeWidth="2">
                            <animate attributeName="r" values="11;20" dur="1.8s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.7;0" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* rotating dashed accent ring */}
                <div className="journey-medallion-ring animate-spin-slow" aria-hidden />

                {/* animated motif */}
                <JourneyGraphic index={activeIndex} />

                {/* phase index badge */}
                <div className="journey-medallion-badge">
                  <span className="font-display text-shimmer text-2xl font-semibold">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-ink-soft/60">
                    of 03
                  </span>
                </div>
              </div>

              {/* active week cards */}
              <div
                className={`mt-8 grid w-full gap-3 ${
                  active.weeks.length === 3
                    ? "max-w-xl sm:grid-cols-3"
                    : "max-w-md sm:grid-cols-2"
                }`}
              >
                {active.weeks.map((w) => (
                  <div key={w.week} className="journey-week-card">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold-700">
                        {w.week}
                      </span>
                      <span className="rounded-full bg-gold-400/15 px-2.5 py-1 text-[0.54rem] font-bold uppercase tracking-[0.14em] text-gold-700">
                        {w.tag}
                      </span>
                    </div>
                    <p className="font-display mt-2 text-lg font-semibold leading-tight text-navy-900 sm:text-xl">
                      {w.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
