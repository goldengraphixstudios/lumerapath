"use client";

import { useEffect, useRef, useState } from "react";
import JourneyGraphic from "./JourneyGraphic";

const phases = [
  {
    phase: "Awareness",
    label: "See the operating pattern",
    description:
      "The first movement is diagnostic. You stop making the pressure personal and start seeing the roles, expectations, and survival strategies that shaped the current chapter.",
    weeks: [
      { week: "Week 1", title: "The Mirror Moment", tag: "Diagnose" },
      { week: "Week 2", title: "The Approval Blueprint", tag: "Decode" },
    ],
  },
  {
    phase: "Alignment",
    label: "Return to your internal standard",
    description:
      "Once the pattern is visible, you rebuild the compass. Values, desire, intuition, and legacy stop being abstract ideas and become real decision criteria.",
    weeks: [
      { week: "Week 3", title: "Your Internal Compass", tag: "Reconnect" },
      { week: "Week 4", title: "The Legacy Vision", tag: "Define" },
    ],
  },
  {
    phase: "Action",
    label: "Move without leaking yourself",
    description:
      "The third movement converts clarity into structure. You define the moves, boundaries, conversations, and commitments that can survive real pressure.",
    weeks: [
      { week: "Week 5", title: "The Action Momentum", tag: "Build" },
      { week: "Week 6", title: "The Authentic Leadership", tag: "Embody" },
    ],
  },
  {
    phase: "Integration",
    label: "Make the new way durable",
    description:
      "The final movement anchors the work into a leadership system you can keep using after the program ends, especially when life gets loud again.",
    weeks: [
      { week: "Week 7", title: "The Bridge North Star", tag: "Anchor" },
      { week: "Week 8", title: "Embodying The Bridge", tag: "Sustain" },
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

  return (
    <section
      id="curriculum"
      ref={ref}
      className="journey-lock relative h-[560vh] scroll-mt-24 bg-cream-deep"
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

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8">
          {/* Left: kinetic phase copy */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold-500" aria-hidden />
              <span className="text-[0.74rem] font-bold uppercase tracking-[0.34em] text-gold-700">
                The 8-week journey
              </span>
            </div>

            <div className="relative mt-7 min-h-[22rem] sm:min-h-[20rem]">
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
                    <h2 className="font-display text-5xl font-semibold leading-[1.0] text-navy-900 sm:text-6xl lg:text-[4.25rem]">
                      {phase.phase}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.26em] text-gold-700">
                    {phase.label}
                  </p>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                    {phase.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {phases.map((phase, index) => (
                <span
                  key={phase.phase}
                  className={`rounded-full border px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-all duration-500 ${
                    index === activeIndex
                      ? "border-gold-500/50 bg-navy-900 text-gold-300"
                      : index < activeIndex
                        ? "border-gold-500/40 bg-gold-400/15 text-gold-700"
                        : "border-navy-900/12 bg-white/60 text-ink-soft/70"
                  }`}
                >
                  {phase.phase}
                </span>
              ))}
            </div>
          </div>

          {/* Right: animated phase medallion */}
          <div className="flex flex-col items-center" aria-hidden>
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
                  const angle = (-90 + i * 90) * (Math.PI / 180);
                  const cx = 160 + 150 * Math.cos(angle);
                  const cy = 160 + 150 * Math.sin(angle);
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
                  of 04
                </span>
              </div>
            </div>

            {/* active week cards */}
            <div className="mt-8 grid w-full max-w-md gap-3 sm:grid-cols-2">
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
                  <p className="font-display mt-2 text-xl font-semibold leading-tight text-navy-900">
                    {w.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
