"use client";

import { useEffect, useRef, useState } from "react";

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

        <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-5 pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8">
          {/* Left: kinetic phase copy */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold-500" aria-hidden />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.34em] text-gold-700">
                The 8-week journey
              </span>
            </div>

            <div className="relative mt-6 min-h-[19rem] sm:min-h-[17rem]">
              {phases.map((phase, index) => (
                <article
                  key={phase.phase}
                  className={`journey-copy absolute inset-0 ${
                    index === activeIndex ? "is-active" : ""
                  } ${index < activeIndex ? "is-past" : ""}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-6xl font-semibold leading-none text-gold-500/25 sm:text-7xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-4xl font-semibold leading-[1.02] text-navy-900 sm:text-5xl">
                      {phase.phase}
                    </h2>
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-700">
                    {phase.label}
                  </p>
                  <p className="mt-5 max-w-xl leading-relaxed text-ink-soft sm:text-lg">
                    {phase.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {phases.map((phase, index) => (
                <span
                  key={phase.phase}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] transition-all duration-500 ${
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

          {/* Right: navy itinerary panel */}
          <div className="journey-panel p-7 sm:p-9" aria-hidden>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gold-300">
                  The A3 Itinerary
                </p>
                <p className="font-display mt-1 text-2xl font-semibold text-cream">
                  8 weeks, four movements
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-shimmer text-3xl font-semibold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cream/45">
                  of 04
                </p>
              </div>
            </div>

            <div className="relative mt-7">
              <div className="journey-spine">
                <span style={{ transform: `scaleY(${spineFill})` }} />
              </div>

              <div className="space-y-1.5">
                {phases.map((phase, index) => {
                  const state =
                    index === activeIndex
                      ? "is-active"
                      : index < activeIndex
                        ? "is-done"
                        : "";
                  return (
                    <div key={phase.phase} className={`journey-row ${state}`}>
                      <div className="journey-row-head">
                        <span className="journey-row-marker">
                          {index < activeIndex ? "✓" : index + 1}
                        </span>
                        <div className="flex-1">
                          <p
                            className={`font-display text-xl font-semibold transition-colors duration-500 ${
                              index === activeIndex
                                ? "text-cream"
                                : "text-cream/55"
                            }`}
                          >
                            {phase.phase}
                          </p>
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-cream/35">
                            {phase.weeks[0].week.replace("Week ", "Wk ")}
                            {" – "}
                            {phase.weeks[1].week.replace("Week ", "")}
                          </p>
                        </div>
                        <span
                          className={`text-[0.6rem] font-bold uppercase tracking-[0.16em] transition-colors duration-500 ${
                            index === activeIndex
                              ? "text-gold-300"
                              : "text-cream/25"
                          }`}
                        >
                          {phase.label.split(" ")[0]}
                        </span>
                      </div>

                      <div className="journey-weeks">
                        <div>
                          <div className="mt-3 grid gap-2.5">
                            {phase.weeks.map((w) => (
                              <div
                                key={w.week}
                                className="flex items-center gap-3 rounded-xl border border-gold-400/25 bg-cream/[0.06] px-4 py-3"
                              >
                                <span className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-gold-300">
                                  {w.week}
                                </span>
                                <span className="font-display text-lg font-semibold text-cream">
                                  {w.title}
                                </span>
                                <span className="ml-auto hidden rounded-full bg-gold-400/15 px-2.5 py-1 text-[0.54rem] font-bold uppercase tracking-[0.14em] text-gold-300 sm:inline">
                                  {w.tag}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-7 flex items-center justify-between border-t border-cream/10 pt-5">
              <p className="text-xs leading-relaxed text-cream/55">
                Currently viewing{" "}
                <span className="font-semibold text-gold-300">
                  {active.phase}
                </span>
              </p>
              <p className="font-display text-sm italic text-cream/45">
                {active.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
