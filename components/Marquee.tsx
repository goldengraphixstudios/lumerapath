const items = [
  "Awareness",
  "Alignment",
  "Action",
  "Integration",
  "Real Transformation",
  "Real Life",
  "Real You",
];

function Track() {
  return (
    <div className="marquee-track" aria-hidden>
      {items.map((item) => (
        <span
          key={item}
          className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
        >
          <span className="font-display text-2xl italic tracking-wide text-cream/85 sm:text-3xl">
            {item}
          </span>
          <span className="text-gold-400">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold-400/20 bg-navy-950 py-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(40rem 8rem at 50% 50%, rgb(212 171 95 / 0.12), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="marquee" role="presentation">
        <Track />
        <Track />
      </div>
    </div>
  );
}
