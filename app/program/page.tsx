import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OpenModalButton from "@/components/OpenModalButton";
import WaitlistForm from "@/components/WaitlistForm";
import Marquee from "@/components/Marquee";
import PinnedJourneySection from "@/components/PinnedJourneySection";
import Icon from "@/components/Icon";

const pageDescription =
  "An 8-week leadership program built by former executives, for driven women leaders ready to move from exhaustion and self-doubt to clear, confident direction.";

const ogImages = [
  {
    url: "/images/og-cover.jpg",
    width: 1200,
    height: 630,
    alt: "The Bridge Identity Reset™, an 8-week leadership program for high-performing women",
  },
];

export const metadata: Metadata = {
  title: "The Bridge Identity Reset™, The 8-Week Program",
  description: pageDescription,
  openGraph: {
    title: "The Bridge Identity Reset™, The 8-Week Program",
    description: pageDescription,
    url: "https://bridge.lumerapath.com/program/",
    siteName: "The Bridge Identity Reset™",
    type: "website",
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bridge Identity Reset™, The 8-Week Program",
    description: pageDescription,
    images: ogImages,
  },
};

const audience = [
  {
    icon: "doorway" as const,
    title: "You're still in the room, and starting to wonder why.",
    body: "You hold a senior leadership position, and by every external measure you're succeeding. But privately, you're second-guessing your choices and quietly asking whether this is really the life you want to keep building.",
  },
  {
    icon: "compass" as const,
    title: "You've just been laid off, and you refuse to just land anywhere.",
    body: "A layoff can feel like a crisis or a turning point. You're choosing to make it the latter. Before you update your resume and repeat the same pattern, you want to get clear on what you actually want your next chapter to look like.",
  },
  {
    icon: "sparkle" as const,
    title: "You feel the pull toward something different, but you can't name it yet.",
    body: "You sense that a shift is coming, in your role, your industry, or the way you lead altogether. You don't want to make a move driven by exhaustion or fear. You want to move from clarity.",
  },
];

const outcomes = [
  "Making confident decisions under pressure, without the spiral afterward",
  "Leading from clarity and conviction, not approval-seeking or obligation",
  "Closing the gap between the leader everyone sees and the woman actually living it",
  "Replacing performed confidence with deep, earned self-trust",
  "Building a career and life that feels meaningful, sustainable, and genuinely yours",
  "Moving forward with direction and ease, instead of endless second-guessing",
  "Walking away with powerful tools and frameworks they'll use long after the program ends",
];

const included = [
  {
    title: "8 Weeks of Small-Group Coaching",
    body: "With executive women navigating similar crossroads, cohorts kept intentionally small so you receive focused attention and coaching tailored to your specific challenges.",
    icon: "users" as const,
  },
  {
    title: "Two Coaches in the Room",
    body: "One specializing in deep inner clarity work, one bringing practical structure and execution strategy. A rare combination you won't find in most programs.",
    icon: "coaches" as const,
  },
  {
    title: "Private Community Access",
    body: "For peer support, real connection, and real-time wins between sessions.",
    icon: "community" as const,
  },
  {
    title: "Step-by-Step Curriculum",
    body: "With guided prompts, exercises, and worksheets designed to move you forward every single week.",
    icon: "checklist" as const,
  },
];

const bonuses = [
  {
    icon: "refresh" as const,
    title: "Week 9, Life Happens Check-In™",
    body: "Progression. Recalibration. Real-life support. Revisit your roadmap, strengthen accountability, and reconnect with your vision when life gets in the way.",
  },
  {
    icon: "clock" as const,
    title: "Weekly Integration Session",
    body: "One additional live hour each week to work through the material, clarify questions, and deepen implementation at your own pace.",
  },
  {
    icon: "lifebuoy" as const,
    title: "Support Materials",
    body: "Curated content aligned with each week's theme, meditations, short videos, audios, articles, nervous system practices, and reflection prompts to support real-life integration between sessions.",
  },
];

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-vignette grain relative overflow-hidden pb-14 pt-24 lg:pb-16">
        <div
          className="orb animate-pulse-glow -top-16 left-[12%] h-80 w-80 bg-gold-300/30"
          aria-hidden
        />
        <div
          className="orb animate-float right-[-6%] top-[45%] h-72 w-72 bg-sand/80"
          aria-hidden
        />
        {/* giant editorial ghost word */}
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -bottom-8 left-1 select-none text-[8rem] font-semibold italic leading-none text-navy-900/[0.045] sm:text-[13rem] lg:text-[17rem]"
        >
          Bridge
        </span>
        {/* vertical method label */}
        <span
          aria-hidden
          className="absolute right-5 top-1/2 hidden origin-right -translate-y-1/2 rotate-90 text-[0.58rem] font-bold uppercase tracking-[0.42em] text-gold-700/55 lg:block"
        >
          Awareness &middot; Alignment &middot; Action
        </span>

        <div className="relative mx-auto grid min-h-[calc(100svh-9rem)] max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          {/* Left */}
          <div>
            <Reveal variant="blur">
              <div className="flex items-center gap-3.5">
                <span className="relative flex h-11 w-11 items-center justify-center">
                  <span
                    className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-gold-500/50"
                    aria-hidden
                  />
                  <Image
                    src="/images/bridge-emblem.png"
                    alt=""
                    aria-hidden
                    width={30}
                    height={30}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gold-700">
                  The Bridge Identity Reset&trade;
                </span>
              </div>
            </Reveal>
            <Reveal delay={110} variant="blur">
              <h1 className="font-display mt-7 text-[2.35rem] font-semibold leading-[1.04] text-navy-900 sm:text-[3rem] lg:text-[3.55rem]">
                You&rsquo;ve Proven You Can Succeed. Now Imagine What Success
                Can Look Like When It&rsquo;s{" "}
                <span className="flourish text-shimmer italic">
                  Built for You.
                  <svg viewBox="0 0 320 24" preserveAspectRatio="none" aria-hidden>
                    <path d="M4 18 C 80 8, 240 6, 316 14" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={190}>
              <p className="mt-7 max-w-xl leading-relaxed text-ink-soft sm:text-lg">
                That&rsquo;s what becomes possible when you stop operating from
                fear, outside approval, and the obligation to carry everything
                alone, and start moving from clarity, conviction, and a sense
                of purpose that genuinely feels like yours.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft/85">
                No magic formulas. No quick-fix mindset fluff. Just the deep
                work that changes how you lead,{" "}
                <em className="font-display text-base text-navy-900">
                  for good.
                </em>
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm font-medium text-navy-900">
                {[
                  "Built by Fortune 500 executives",
                  "ICF-certified coaching",
                  "Cohorts kept intentionally small",
                ].map((c, i) => (
                  <span key={c} className="flex items-center gap-4">
                    {i > 0 && (
                      <span
                        className="h-1 w-1 rounded-full bg-gold-500"
                        aria-hidden
                      />
                    )}
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href="#waitlist" className="btn btn-gold">
                  Join the Waitlist
                  <span className="btn-arrow" aria-hidden>
                    →
                  </span>
                </a>
                <OpenModalButton modal="clarity" className="btn btn-outline">
                  Book a Clarity Call
                </OpenModalButton>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image
                    src="/images/allye-new.jpg"
                    alt="Allye"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border-2 border-cream object-cover object-top shadow-card"
                  />
                  <Image
                    src="/images/amanda-new.jpeg"
                    alt="Amanda"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border-2 border-cream object-cover object-top shadow-card"
                  />
                </div>
                <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
                  Guided by{" "}
                  <span className="font-semibold text-navy-900">
                    Allye + Amanda
                  </span>
                  , former executives who sat exactly where you are.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: editorial arch portrait */}
          <Reveal
            delay={220}
            variant="zoom"
            className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="relative">
              <div
                className="animate-spin-slow pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full border border-dashed border-gold-500/45"
                aria-hidden
              />
              <span
                className="animate-twinkle pointer-events-none absolute -left-3 top-16 text-xl text-gold-500"
                aria-hidden
              >
                ✦
              </span>

              <div className="arch relative overflow-hidden shadow-[0_44px_86px_-32px_rgb(15_28_54/0.45)]">
                <div className="relative aspect-[4/4.7]">
                  <Image
                    src="/images/allye-amanda.jpg"
                    alt="Allye and Amanda, the executives-turned-coaches behind the program"
                    fill
                    priority
                    sizes="(min-width: 1024px) 26rem, 88vw"
                    className="object-cover object-[42%_26%]"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div
                className="arch pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-gold-500/40"
                aria-hidden
              />

              {/* floating 8 weeks card */}
              <div className="animate-float absolute -left-4 top-12 rounded-2xl border border-gold-400/40 bg-white/85 px-5 py-3.5 shadow-card backdrop-blur sm:-left-6">
                <p className="font-display text-3xl font-semibold text-gold-600">
                  8
                </p>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-navy-900">
                  weeks of depth
                </p>
              </div>

              {/* floating proof card */}
              <div className="animate-float-rev absolute -right-3 bottom-14 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-navy-900/92 px-5 py-3.5 shadow-soft backdrop-blur sm:-right-6">
                <span className="text-lg text-gold-300" aria-hidden>
                  ✦
                </span>
                <span className="text-left text-[0.62rem] font-bold uppercase leading-tight tracking-[0.16em] text-cream">
                  Two coaches
                  <br />
                  in the room
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* The Real Problem */}
      <section className="navy-glow grain relative overflow-hidden py-24 text-cream lg:py-32">
        <div
          className="orb animate-pulse-glow right-[5%] top-[10%] h-72 w-72 bg-gold-500/10"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left">
            <p className="overline-label overline-label--light">
              The real problem
            </p>
            <h2 className="font-display mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              The higher you climb, the more you&rsquo;re expected to be{" "}
              <span className="text-shimmer italic">the strong one.</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-cream/75">
              The calm one. The capable one. The one who has it handled. And
              that&rsquo;s exactly why it gets so heavy.{" "}
              <em className="font-display text-xl text-gold-300">
                And so lonely.
              </em>
            </p>
          </Reveal>
          <Reveal delay={150} variant="right">
            <div className="grain relative space-y-5 overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 leading-relaxed text-cream/85 backdrop-blur-sm sm:p-10">
              <div
                className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/80 to-transparent"
                aria-hidden
              />
              <p>
                Most leadership programs will teach you how to communicate
                better, influence more, and project confidence in the room.
                Which is valuable, if your biggest challenge is how you show up
                on the outside.
              </p>
              <p>
                But if the real issue is what&rsquo;s happening beneath the
                surface, more polish won&rsquo;t reach it. You can&rsquo;t
                strategize your way out of a deep internal conflict between the
                leader everyone sees and the woman quietly overwhelmed and
                running on empty behind the scenes.
              </p>
              <Icon
                name="quote"
                className="h-8 w-8 text-gold-400/70"
                strokeWidth={1.4}
              />
              <p className="font-display -mt-1 text-2xl italic leading-snug text-gold-300">
                So, if you want to keep rising, and want your success to feel
                like it genuinely belongs to you, this is where that begins.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* This is for you */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="orb animate-float left-[-8%] top-[25%] h-80 w-80 bg-sand/70"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="overline-label overline-label--center">
              This is for you if
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              This Program Was Built for{" "}
              <span className="text-shimmer italic">Women Like You.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {audience.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 130}
                className="card-lux group flex flex-col p-8"
              >
                <div
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                  aria-hidden
                />
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-600 transition-all duration-500 group-hover:-rotate-6 group-hover:bg-gold-500 group-hover:text-white"
                  aria-hidden
                >
                  <Icon name={card.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold leading-snug text-navy-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {card.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p className="font-display text-2xl italic text-gold-600">
              Wherever you are right now, The Bridge Identity Reset&trade; meets
              you there, and helps you move forward with intention.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What you'll build */}
      <section className="grain relative overflow-hidden bg-cream-deep py-24 lg:py-32">
        <div
          className="orb animate-pulse-glow right-[-6%] top-[15%] h-80 w-80 bg-gold-300/30"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Reveal variant="left">
                <p className="overline-label">What you&rsquo;ll build</p>
                <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
                  In 8 weeks, this is what most participants{" "}
                  <span className="text-shimmer italic">experience:</span>
                </h2>
              </Reveal>
              <Reveal delay={150} variant="left">
                <p className="mt-9 leading-relaxed text-ink-soft">
                  And perhaps most importantly, finally being in a room where
                  the pressure lifts. A space with women who share your
                  experiences, understand your struggles, and have nothing to
                  prove to each other. Where honest conversation replaces
                  performance, and real growth becomes possible.
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  We&rsquo;ve watched this transformation happen for women
                  leaders again and again, because The Bridge
                  Accelerator&trade; doesn&rsquo;t just create a safe space for
                  sharing.{" "}
                  <strong className="text-navy-900">
                    It works at the identity level.
                  </strong>{" "}
                  That&rsquo;s why the results don&rsquo;t fade when the program
                  ends. They change how your success feels from the inside out.
                </p>
              </Reveal>
            </div>
            <ul className="grid gap-3">
              {outcomes.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 80}
                  variant="right"
                  className="group flex items-start gap-4 rounded-2xl bg-white px-6 py-4 shadow-[0_8px_24px_-14px_rgb(18_32_63/0.18)] transition-all duration-400 hover:translate-x-1.5 hover:shadow-[0_14px_32px_-14px_rgb(195_146_46/0.4)]"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-600 transition-colors duration-400 group-hover:bg-gold-500 group-hover:text-white"
                    aria-hidden
                  >
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <p className="text-sm leading-relaxed text-ink sm:text-base">
                    {item}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
        <div
          className="orb animate-float right-[-8%] bottom-[10%] h-96 w-96 bg-gold-300/20"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="overline-label overline-label--center">
              Meet your coaches
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              If We Haven&rsquo;t Met Yet, {" "}
              <span className="text-shimmer italic">
                Hi, We&rsquo;re Allye + Amanda.
              </span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {[
              {
                img: "/images/allye-new.jpg",
                alt: "Allye, ICF-certified executive coach",
                name: "Allye",
                role: "ICF-Certified Executive Coach",
                pos: "object-[50%_18%]",
                bio: "Before becoming an ICF-certified executive coach, Allye spent more than two decades as a senior executive leading large-scale transformations inside global Fortune 500 companies, building complex strategies, navigating high-stakes environments, and guiding multicultural teams through significant change. Along the way, a cancer diagnosis transformed everything she thought she knew about leadership, success, and what it means to truly show up. That experience taught her what no boardroom ever could: how to lead through adversity without losing yourself in the process.",
                variant: "left" as const,
              },
              {
                img: "/images/amanda-new.jpeg",
                alt: "Amanda, executive coach and program strategist",
                name: "Amanda",
                role: "Executive Coach · Program Strategist",
                pos: "object-[50%_24%]",
                bio: "Amanda brings 15+ years in demanding corporate environments, directing complex programs, managing large portfolios, and overseeing teams of 180+ consultants. She knows firsthand what it means to be the person everyone relies on, while quietly carrying far more than anyone around her could see.",
                variant: "right" as const,
              },
            ].map((coach, i) => (
              <Reveal
                key={coach.name}
                delay={i * 150}
                variant={coach.variant}
                className="card-lux group overflow-hidden !rounded-[2rem] p-0"
              >
                <div className="photo-zoom relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={coach.img}
                    alt={coach.alt}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className={`object-cover ${coach.pos}`}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-30"
                    aria-hidden
                  />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="font-display text-4xl font-semibold text-white drop-shadow-lg">
                      {coach.name}
                    </h3>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                    <Icon name="sparkle" className="h-4 w-4" strokeWidth={1.4} />
                    {coach.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {coach.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-3xl text-center">
            <div className="gold-rule mb-12" />
            <p className="leading-relaxed text-ink-soft">
              For years, we both did what high achievers do: kept pushing,
              optimizing, and powering through. But more effort never closed the
              real gap, the distance between the leader everyone saw and the
              woman who wanted more depth, meaning, and purpose. So we stopped
              looking for shortcuts. We did the deep work in our own lives, and
              built a method that actually works for women in leadership. The
              kind of woman who wants success and prosperity, but also real
              connection and a life she genuinely loves.
            </p>
            <p className="font-display mt-7 text-2xl italic leading-snug text-navy-900">
              That work became The Bridge Identity Reset&trade;, a structured,
              deeply supportive 8-week program that moves driven women leaders
              from exhaustion and internal noise into a grounded sense of
              direction that finally feels{" "}
              <span className="text-shimmer">made for her.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Invitation */}
      <section className="navy-glow grain relative overflow-hidden py-24 text-center text-cream lg:py-28">
        <div
          className="orb animate-pulse-glow left-[20%] top-[20%] h-64 w-64 bg-gold-500/15"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal variant="zoom">
            <div className="relative mx-auto h-24 w-24">
              <span
                className="absolute inset-0 rounded-full border border-gold-400/50"
                style={{ animation: "ping-ring 3s cubic-bezier(0,0,0.2,1) infinite" }}
                aria-hidden
              />
              <Image
                src="/images/bridge-emblem.png"
                alt=""
                aria-hidden
                width={96}
                height={96}
                className="animate-float relative h-24 w-24 object-contain drop-shadow-[0_14px_30px_rgba(212,171,95,0.45)]"
              />
            </div>
            <h2 className="font-display mt-9 text-4xl font-semibold sm:text-5xl">
              You are{" "}
              <span className="text-shimmer italic">officially invited.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-cream/80">
              Join The Bridge Identity Reset&trade;, the only 8-week leadership
              program with high-touch group coaching built by and for executive
              women. Designed to move you from confusion, lack of purpose, and
              self-doubt into clear, confident direction that finally feels like
              yours.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-cream/55">
              No borrowed frameworks. No surface-level pep talks. No performing
              certainty just to survive another quarter.
            </p>
            <a href="#waitlist" className="btn btn-gold mt-10">
              Join the Waitlist
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="overline-label overline-label--center">
              What&rsquo;s included
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              You&rsquo;ll Get&hellip;
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={i * 110} className="card-lux group p-8">
                <div className="flex items-start gap-5">
                  <span
                    className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-gold-300 shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    aria-hidden
                  >
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="font-display text-xl italic text-gold-600">
              And so much more&hellip;
            </p>
          </Reveal>
        </div>
      </section>

      <PinnedJourneySection />

      <section className="relative overflow-hidden bg-cream-deep py-24 lg:py-28">
        <div
          className="orb animate-pulse-glow right-[-6%] top-[10%] h-80 w-80 bg-gold-300/25"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="overline-label overline-label--center">
              Beyond the 8 weeks
            </p>
            <h3 className="font-display mt-4 text-3xl font-semibold text-navy-900 sm:text-4xl">
              Bonus Support &amp;{" "}
              <span className="text-shimmer italic">Integration</span>
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {bonuses.map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 110}
                className="group relative overflow-hidden rounded-3xl border border-gold-400/30 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/60 hover:shadow-[0_24px_50px_-20px_rgb(195_146_46/0.4)]"
              >
                <div
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
                  aria-hidden
                />
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/12 text-gold-600 transition-all duration-500 group-hover:bg-navy-900 group-hover:text-gold-300"
                    aria-hidden
                  >
                    <Icon name={b.icon} className="h-6 w-6" />
                  </span>
                  <span
                    className="font-display text-4xl italic text-gold-400/45 transition-colors duration-500 group-hover:text-gold-500"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-display mt-5 text-2xl font-semibold leading-snug text-navy-900">
                  {b.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {b.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="font-display text-xl italic text-gold-600">
              And so much more&hellip;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="navy-glow grain relative scroll-mt-24 overflow-hidden py-24 text-center text-cream lg:py-32"
      >
        <div
          className="orb animate-pulse-glow right-[10%] top-[15%] h-72 w-72 bg-gold-500/12"
          aria-hidden
        />
        <div
          className="orb animate-float left-[-5%] bottom-[10%] h-64 w-64 bg-navy-700/60"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="overline-label overline-label--light overline-label--center">
              Limited spots by design
            </p>
            <h2 className="font-display mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Join the Waitlist for{" "}
              <span className="text-shimmer italic">
                The Bridge Identity Reset&trade;
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-cream/80">
              Spots in each cohort are limited by design, so every participant
              receives the level of personal attention this program is built
              around. Waitlist members receive priority access before the next
              round opens to the public. If the current cohort is full,
              you&rsquo;ll be the first to know when new spots become available.
            </p>
          </Reveal>
          <Reveal delay={150} variant="zoom" className="mt-10">
            <div className="ring-conic rounded-3xl border border-cream/10 bg-cream/[0.05] p-8 backdrop-blur-sm sm:p-10">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
                Where should we send your early access notification?
              </p>
              <WaitlistForm />
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="gold-rule mx-auto mt-16 max-w-md" />
            <p className="font-display mt-12 text-2xl italic text-cream">
              Not sure yet? Let&rsquo;s talk.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/70">
              A Clarity Call is a no-pressure conversation to help you decide if
              this is the right fit, the right time, and the right next step for
              you.
            </p>
            <OpenModalButton
              modal="clarity"
              className="btn btn-outline-light mt-8"
            >
              Book a Clarity Call
            </OpenModalButton>
            <p className="mt-7 text-xs text-cream/50">
              We also offer one-on-one coaching for those interested in more
              dedicated support.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
