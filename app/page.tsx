import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OpenModalButton from "@/components/OpenModalButton";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import PinnedShiftSection from "@/components/PinnedShiftSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Stop Performing Success. Start Owning It. | Lumera Path",
  description:
    "We work with high-performing women who are ready to stop leading from pressure, fear, and overwhelm, and start leading from purpose.",
};

const forYouIf = [
  {
    title: "You're excelling on paper",
    body: "You're in a leadership role, excelling on paper, but privately questioning whether this is the right path, the right role, or the right version of success for you.",
  },
  {
    title: "You've recently been laid off",
    body: "You've recently been laid off from a leadership position, and instead of chasing the next title, you want to use this moment to get genuinely clear on what you want before you take your next step.",
  },
  {
    title: "You're considering a career shift",
    body: "You feel the pull toward something different, but you're not sure what that looks like yet, and you don't want to make a move driven by exhaustion or fear.",
  },
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`animate-twinkle pointer-events-none absolute text-gold-500 ${className}`}
      aria-hidden
    >
      ✦
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-vignette grain relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div
          className="orb animate-pulse-glow -top-20 right-[8%] h-96 w-96 bg-gold-300/30"
          aria-hidden
        />
        <div
          className="orb animate-float -bottom-24 left-[-6%] h-80 w-80 bg-sand/80"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative">
            <Sparkle className="-left-8 top-2 hidden text-xl lg:block" />
            <Reveal variant="blur">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 bg-white/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-700 backdrop-blur-sm">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
                </span>
                For women in leadership
              </span>
            </Reveal>
            <Reveal delay={120} variant="blur">
              <h1 className="font-display mt-7 text-5xl font-semibold leading-[1.04] text-navy-900 sm:text-6xl lg:text-[4.6rem]">
                Stop Performing Success.{" "}
                <span className="flourish text-shimmer italic">
                  Start Owning It.
                  <svg viewBox="0 0 320 24" preserveAspectRatio="none" aria-hidden>
                    <path d="M4 18 C 80 8, 240 6, 316 14" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
                We work with high-performing women who are ready to stop leading
                from pressure, fear, and overwhelm, and start leading from{" "}
                <em className="font-display text-xl text-navy-900">purpose.</em>
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
                We help you build the self-awareness to see what&rsquo;s actually
                driving your decisions, the emotional resilience to stop
                second-guessing yourself, and a clear plan aligned with what you
                actually want, so your next chapter feels as good on the inside
                as it looks on the outside.
              </p>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <OpenModalButton modal="training" className="btn btn-gold">
                  Get the Free Training
                  <span className="btn-arrow" aria-hidden>
                    →
                  </span>
                </OpenModalButton>
                <Link href="/program" className="btn btn-outline">
                  Explore the Program
                </Link>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm italic text-ink-soft/80">
                <span className="text-gold-500" aria-hidden>
                  ✦
                </span>
                Join the executive women who have already started owning their
                success.
              </p>
            </Reveal>
          </div>

          {/* Layered hero composition */}
          <Reveal delay={250} variant="zoom" className="relative mx-auto w-full max-w-md">
            <div className="relative px-6 pt-6">
              {/* rotating dashed ring */}
              <div
                className="animate-spin-slow pointer-events-none absolute -right-4 -top-4 h-40 w-40 rounded-full border border-dashed border-gold-500/50"
                aria-hidden
              />
              <Sparkle className="right-2 top-10 text-2xl" />
              <Sparkle className="-left-2 bottom-24 text-sm" />

              <div className="arch relative overflow-hidden shadow-[0_40px_80px_-30px_rgb(15_28_54/0.45)]">
                <Image
                  src="/images/coach-hero.jpg"
                  alt="A grounded, confident executive woman"
                  width={1086}
                  height={1448}
                  priority
                  sizes="(min-width: 640px) 28rem, 100vw"
                  className="w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              {/* gold arch outline offset */}
              <div
                className="arch pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-gold-500/40"
                aria-hidden
              />

              {/* floating quote card */}
              <div className="animate-float absolute -bottom-8 -left-2 max-w-[240px] rounded-2xl bg-navy-900/95 px-6 py-5 shadow-[0_24px_50px_-20px_rgb(10_18_35/0.7)] backdrop-blur sm:-left-10">
                <p className="font-display text-lg italic leading-snug text-gold-300">
                  &ldquo;Real transformation. Real life. Real you.&rdquo;
                </p>
              </div>

              {/* floating badge */}
              <div className="animate-float-rev absolute -right-3 top-16 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-white/90 px-5 py-3.5 shadow-card backdrop-blur sm:-right-8">
                <Image
                  src="/images/bridge-emblem.png"
                  alt=""
                  aria-hidden
                  width={38}
                  height={38}
                  className="h-9 w-9 object-contain"
                />
                <span className="text-left text-[0.65rem] font-bold uppercase leading-tight tracking-[0.18em] text-navy-900">
                  8-Week
                  <br />
                  Lived Experience
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stat strip */}
        <Reveal delay={300} className="relative mx-auto mt-24 max-w-4xl px-5 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-navy-900/10 rounded-3xl border border-navy-900/8 bg-white/70 py-7 shadow-card backdrop-blur-sm">
            {[
              { end: 8, suffix: "", label: "Weeks of guided depth" },
              { end: 2, suffix: "", label: "Executive coaches in the room" },
              { end: 90, suffix: "min", label: "Free monthly masterclass" },
            ].map((s) => (
              <div key={s.label} className="px-4 text-center">
                <p className="font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
                  <CountUp end={s.end} suffix={s.suffix} className="text-gold-gradient" />
                </p>
                <p className="mx-auto mt-2 max-w-[10rem] text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Pinned scroll narrative */}
      <PinnedShiftSection />

      {/* Marquee ribbon */}
      <Marquee />

      {/* Solution */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="orb animate-float right-[-8%] top-[20%] h-96 w-96 bg-gold-300/20"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal
              variant="left"
              className="relative order-2 mx-auto w-full max-w-md lg:order-1"
            >
              <div className="relative px-5 pt-5">
                <div
                  className="animate-spin-slow pointer-events-none absolute -left-3 top-0 h-32 w-32 rounded-full border border-dashed border-gold-500/40"
                  aria-hidden
                />
                <div className="arch-sm photo-zoom relative overflow-hidden shadow-[0_36px_70px_-28px_rgb(15_28_54/0.4)]">
                  <Image
                    src="/images/allye-desk.jpg"
                    alt="A calm, grounded leader reconnecting with herself"
                    width={1199}
                    height={1312}
                    sizes="(min-width: 640px) 28rem, 100vw"
                    className="w-full object-cover"
                  />
                </div>
                <div
                  className="arch-sm pointer-events-none absolute inset-0 -translate-x-3 translate-y-3 border border-gold-500/40"
                  aria-hidden
                />
                <div className="animate-float absolute -bottom-7 right-0 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:-right-6">
                  <Image
                    src="/images/a3flows-logo.png"
                    alt=""
                    aria-hidden
                    width={44}
                    height={33}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-[0.65rem] font-bold uppercase leading-tight tracking-[0.16em] text-navy-900">
                    The A3
                    <br />
                    Flow Method
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <p className="overline-label">The way back</p>
                <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
                  This Is How You{" "}
                  <span className="text-shimmer italic">
                    Come Back to Yourself.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-7 leading-relaxed text-ink-soft">
                  You don&rsquo;t need more hype, quick fixes, or
                  &ldquo;confidence tips&rdquo; that just teach you how to
                  achieve more. You&rsquo;re already there. That&rsquo;s why The
                  Bridge Accelerator&trade; was built by former
                  executives-turned-coaches who learned this the hard way, so
                  you don&rsquo;t have to. It&rsquo;s designed for ambitious
                  women under real pressure who need real traction without
                  sacrificing depth.
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Together, we pull back the curtain on what&rsquo;s been
                  quietly running your decisions, the second-guessing, the
                  approval-seeking, the perfectionism, and the slow erosion of
                  who you actually are, so you can reconnect with your values,
                  your desires, and your own voice. Then we turn that clarity
                  into a concrete plan you can move on with confidence, and
                  feel genuinely proud of.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-gold-400/30 bg-cream-deep/60 px-7 py-6">
                  <div
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300"
                    aria-hidden
                  />
                  <p className="font-medium leading-relaxed text-navy-900">
                    Our goal is simple: help you stop leading from pressure and
                    expectation, and start leading from{" "}
                    <em className="font-display text-lg">truth.</em>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* This is for you if */}
          <div className="mt-28">
            <Reveal className="text-center">
              <p className="overline-label overline-label--center">
                A quiet checkpoint
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold text-navy-900 sm:text-4xl">
                This is for you if&hellip;
              </h3>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {forYouIf.map((card, i) => (
                <Reveal
                  key={card.title}
                  delay={i * 130}
                  className="card-lux group p-8"
                >
                  <div
                    className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                    aria-hidden
                  />
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/15 text-gold-600 transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-gold-500 group-hover:text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <h4 className="font-display mt-6 text-2xl font-semibold text-navy-900">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {card.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12 text-center">
              <p className="font-display text-2xl italic text-gold-600">
                If any of these sounds like you, you&rsquo;re in the right
                place.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Free Training callout */}
      <section className="relative py-8 lg:py-12">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal variant="zoom">
            <div className="ring-conic grain relative overflow-hidden rounded-[2.5rem] bg-cream-deep px-8 py-16 shadow-[0_40px_80px_-32px_rgb(18_32_63/0.3)] sm:px-14 lg:px-20">
              <div
                className="orb animate-pulse-glow -right-24 -top-24 h-72 w-72 bg-gold-300/40"
                aria-hidden
              />
              <div
                className="orb animate-float -bottom-28 -left-20 h-72 w-72 bg-navy-900/10"
                aria-hidden
              />
              <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <span className="inline-flex items-center gap-2.5 rounded-full bg-navy-900 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold-300">
                    <span className="relative flex h-2 w-2" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                    </span>
                    Free live training
                  </span>
                  <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-navy-900 sm:text-[2.6rem]">
                    The Leadership Shift from{" "}
                    <span className="italic">Performance</span> to{" "}
                    <span className="text-shimmer italic">Alignment</span>
                  </h2>
                  <p className="mt-6 leading-relaxed text-ink-soft">
                    Learn how to lead with clarity, confidence, and purpose, 
                    without exhausting yourself trying to prove, please, or hold
                    everything together.
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    In this free training, we&rsquo;ll walk you through the{" "}
                    <strong className="text-navy-900">A3 Flow Method</strong>, 
                    a practical framework for ambitious, high-performing women
                    who are excelling on the outside but quietly losing
                    themselves on the inside, who need to get clear faster,
                    stop leading from pressure, and build a path forward
                    designed around who they actually are.
                  </p>
                  <OpenModalButton modal="training" className="btn btn-navy mt-9">
                    Save My Seat
                    <span className="btn-arrow" aria-hidden>
                      →
                    </span>
                  </OpenModalButton>
                </div>
                <div className="relative mx-auto flex max-w-xs flex-col items-center text-center">
                  <div
                    className="animate-spin-slow pointer-events-none absolute -inset-6 rounded-full border border-dashed border-gold-500/40"
                    aria-hidden
                  />
                  <Image
                    src="/images/a3flows-logo.png"
                    alt="A3 Flows, Awareness. Alignment. Action."
                    width={300}
                    height={226}
                    className="animate-float w-52 drop-shadow-[0_16px_30px_rgba(169,124,38,0.25)]"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft/70">
                    90 minutes &middot; Live &middot; Free
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program teaser band */}
      <section className="relative py-10 lg:py-14">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal variant="zoom">
            <Link
              href="/program"
              className="group ring-conic grain relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-navy-900 p-8 shadow-[0_40px_80px_-34px_rgb(10_18_35/0.6)] transition-transform duration-500 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div className="flex items-center gap-6">
                <Image
                  src="/images/bridge-emblem.png"
                  alt=""
                  aria-hidden
                  width={80}
                  height={80}
                  className="animate-float h-16 w-16 shrink-0 object-contain drop-shadow-[0_12px_24px_rgba(212,171,95,0.4)]"
                />
                <div>
                  <p className="overline-label overline-label--bare overline-label--light">
                    The Bridge Accelerator&trade; &middot;{" "}
                    <CountUp end={8} className="text-gold-300" />-week program
                  </p>
                  <p className="font-display mt-2 max-w-xl text-2xl font-semibold leading-snug text-cream sm:text-3xl">
                    Explore the full journey from{" "}
                    <span className="text-shimmer italic">
                      pressure to purpose.
                    </span>
                  </p>
                </div>
              </div>
              <span className="btn btn-gold shrink-0">
                See the Program
                <span className="btn-arrow" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Primary contact conversion */}
      <ContactSection />
    </>
  );
}
