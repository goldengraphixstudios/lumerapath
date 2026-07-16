"use client";

/**
 * Animated line-art symbols for the 8-week journey medallion.
 *   0 Awareness — an opening eye (seeing the pattern)
 *   1 Alignment — a compass needle finding true north
 *   2 Action    — ascending steps with a climbing light
 */

const GOLD = "#d4ab5f";
const GOLD_LT = "#f6e3af";
const GOLD_MD = "#e3c68c";

function Eye() {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 320 320" fill="none">
      {ticks.map((a) => {
        const r1 = 128;
        const r2 = 140;
        const rad = (a * Math.PI) / 180;
        const rnd = (v: number) => Math.round(v * 100) / 100;
        return (
          <line
            key={a}
            x1={rnd(160 + r1 * Math.cos(rad))}
            y1={rnd(160 + r1 * Math.sin(rad))}
            x2={rnd(160 + r2 * Math.cos(rad))}
            y2={rnd(160 + r2 * Math.sin(rad))}
            stroke={GOLD}
            strokeWidth="2"
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.15;0.6;0.15" dur="3s" begin={`${(a / 360) * 3}s`} repeatCount="indefinite" />
          </line>
        );
      })}
      <path d="M52 160 Q160 90 268 160 Q160 230 52 160 Z" stroke={GOLD} strokeWidth="2.5" />
      <circle cx="160" cy="160" r="40" stroke={GOLD} strokeWidth="2">
        <animate attributeName="r" values="36;44;36" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="160" r="16" fill={GOLD_MD}>
        <animate attributeName="r" values="13;18;13" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="169" cy="151" r="5" fill={GOLD_LT} />
      <circle cx="160" cy="160" r="50" stroke={GOLD} strokeWidth="1.5">
        <animate attributeName="r" values="46;122" dur="4.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="4.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function Compass() {
  const cardinals = [0, 90, 180, 270];
  return (
    <svg viewBox="0 0 320 320" fill="none">
      <circle cx="160" cy="160" r="130" stroke={GOLD} strokeWidth="1.5" strokeDasharray="2 15" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 160 160" to="360 160 160" dur="60s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="160" r="108" stroke={GOLD} strokeWidth="2" opacity="0.7" />
      {cardinals.map((a) => {
        const rad = (a * Math.PI) / 180;
        const rnd = (v: number) => Math.round(v * 100) / 100;
        return (
          <line
            key={a}
            x1={rnd(160 + 108 * Math.cos(rad))}
            y1={rnd(160 + 108 * Math.sin(rad))}
            x2={rnd(160 + 92 * Math.cos(rad))}
            y2={rnd(160 + 92 * Math.sin(rad))}
            stroke={GOLD}
            strokeWidth="2.5"
            opacity="0.7"
          />
        );
      })}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-16 160 160;12 160 160;-8 160 160;-16 160 160" dur="7s" repeatCount="indefinite" />
        <path d="M160 62 L173 160 L160 148 L147 160 Z" fill={GOLD_LT} />
        <path d="M160 258 L147 160 L160 172 L173 160 Z" fill={GOLD} opacity="0.35" />
      </g>
      <circle cx="160" cy="160" r="8" fill={GOLD_MD} />
    </svg>
  );
}

function Steps() {
  const step = "M56 246 H104 V206 H152 V166 H200 V126 H248";
  const risers = [
    [104, 226],
    [152, 186],
    [200, 146],
    [248, 106],
  ];
  return (
    <svg viewBox="0 0 320 320" fill="none">
      <path d={step} stroke={GOLD} strokeWidth="2.5" strokeLinejoin="round" opacity="0.85" />
      <path id="pgStairs" d={step} stroke="none" fill="none" />
      {risers.map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r="3.4" fill={GOLD_MD}>
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* up chevron at the summit */}
      <path d="M232 96 L248 80 L264 96" stroke={GOLD_LT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M248 80 V116" stroke={GOLD_LT} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      {/* climbing light */}
      <circle r="7" fill={GOLD_LT}>
        <animateMotion dur="4.4s" repeatCount="indefinite">
          <mpath href="#pgStairs" />
        </animateMotion>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const motifs = [Eye, Compass, Steps];

export default function JourneyGraphic({ index }: { index: number }) {
  return (
    <div className="journey-motif" aria-hidden>
      {motifs.map((Motif, i) => (
        <div key={i} className={`jg-layer ${i === index ? "is-active" : ""}`}>
          <Motif />
        </div>
      ))}
    </div>
  );
}
