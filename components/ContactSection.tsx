import Image from "next/image";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const trust = [
  {
    title: "A real human reply",
    body: "Allye or Amanda reads your note personally and points you to the step that actually fits, no funnel, no autoresponder maze.",
  },
  {
    title: "Clarity before commitment",
    body: "Start with the free training or a no-pressure clarity call. You decide what, if anything, comes next.",
  },
  {
    title: "Built by executives, for executives",
    body: "Two former Fortune 500 leaders who have sat exactly where you are, guiding small cohorts with nothing to prove.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="navy-glow grain relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div
        className="orb animate-pulse-glow right-[6%] top-[8%] h-80 w-80 bg-gold-500/12"
        aria-hidden
      />
      <div
        className="orb animate-float left-[-6%] bottom-[6%] h-72 w-72 bg-navy-700/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.92fr] lg:px-8">
        {/* Persuasive left column */}
        <div className="text-cream">
          <Reveal variant="left">
            <div className="flex items-center gap-4">
              <Image
                src="/images/bridge-emblem.png"
                alt=""
                aria-hidden
                width={56}
                height={56}
                className="animate-float h-14 w-14 object-contain drop-shadow-[0_10px_22px_rgba(212,171,95,0.4)]"
              />
              <p className="overline-label overline-label--bare overline-label--light">
                Start the conversation
              </p>
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.06] sm:text-5xl">
              Ready to build a next chapter that{" "}
              <span className="text-shimmer italic">actually feels like yours?</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-cream/75">
              Tell us where you are right now. Whether the right first step is
              the free training, the waitlist, or a private conversation,
              we&rsquo;ll meet you there and help you move with intention.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {trust.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 110}
                variant="left"
                className="flex items-start gap-4"
              >
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-sm text-gold-300"
                  aria-hidden
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-cream">{item.title}</p>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-cream/60">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-10 flex items-center gap-4 border-t border-cream/10 pt-6">
              <div className="flex -space-x-3">
                <Image
                  src="/images/allye-new.jpg"
                  alt="Allye"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-navy-900 object-cover object-top"
                />
                <Image
                  src="/images/amanda-new.jpeg"
                  alt="Amanda"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-navy-900 object-cover object-top"
                />
              </div>
              <p className="text-sm text-cream/70">
                <span className="font-semibold text-cream">Allye + Amanda</span>{" "}
                personally read every message.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal variant="right" delay={120}>
          <div className="ring-conic rounded-[2rem] p-1.5">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
