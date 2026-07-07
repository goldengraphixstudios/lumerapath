"use client";

/**
 * Animated line-art motifs for the home "shift" pinned section.
 * Each motif symbolizes the active beat's idea and cross-fades in:
 *   0 Cage    — high performance as a polished cage
 *   1 Loop    — the reinforcing pattern that keeps taking from you
 *   2 Lens    — noise given structure / clarity
 *   3 Bridge  — awareness → alignment → action
 * SMIL keeps every animation self-contained inside the SVG.
 */

const GOLD = "#d4ab5f";
const GOLD_LT = "#f6e3af";
const GOLD_MD = "#e3c68c";

function Cage() {
  const bars = [
    { x: 60, y: 108 },
    { x: 95, y: 88 },
    { x: 130, y: 73 },
    { x: 160, y: 67 },
    { x: 190, y: 73 },
    { x: 225, y: 88 },
    { x: 260, y: 108 },
  ];
  return (
    <svg viewBox="0 0 320 320" fill="none">
      <circle cx="160" cy="50" r="13" stroke={GOLD} strokeWidth="2" opacity="0.7">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 160 50"
          to="360 160 50"
          dur="14s"
          repeatCount="indefinite"
        />
      </circle>
      <path d="M160 63 V72" stroke={GOLD} strokeWidth="2" opacity="0.7" />
      <path d="M54 110 Q160 40 266 110" stroke={GOLD} strokeWidth="2.5" />
      {bars.map((b) => (
        <path
          key={b.x}
          d={`M${b.x} ${b.y} V278`}
          stroke={GOLD}
          strokeWidth="2"
          opacity="0.85"
        />
      ))}
      <path d="M52 278 H268" stroke={GOLD} strokeWidth="2.5" />
      <ellipse cx="160" cy="180" rx="106" ry="15" stroke={GOLD} strokeWidth="1.5" opacity="0.5">
        <animate attributeName="cy" values="120;250;120" dur="6.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.12;0.55;0.12" dur="6.5s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="160" cy="214" r="9" fill={GOLD_MD}>
        <animate attributeName="r" values="8;11.5;8" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.75;1;0.75" dur="2.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function Loop() {
  const path =
    "M160 160 C128 122 78 122 78 160 C78 198 128 198 160 160 C192 122 242 122 242 160 C242 198 192 198 160 160 Z";
  return (
    <svg viewBox="0 0 320 320" fill="none">
      <circle cx="160" cy="160" r="122" stroke={GOLD} strokeWidth="1.5" strokeDasharray="3 11" opacity="0.35">
        <animateTransform attributeName="transform" type="rotate" from="0 160 160" to="360 160 160" dur="34s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="160" r="98" stroke={GOLD} strokeWidth="1.5" strokeDasharray="2 13" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="360 160 160" to="0 160 160" dur="24s" repeatCount="indefinite" />
      </circle>
      <path id="pgLoopPath" d={path} stroke={GOLD} strokeWidth="2.5" opacity="0.85" />
      <circle r="7" fill={GOLD_LT}>
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#pgLoopPath" />
        </animateMotion>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle r="4.5" fill={GOLD} opacity="0.55">
        <animateMotion dur="5s" begin="-2.5s" repeatCount="indefinite">
          <mpath href="#pgLoopPath" />
        </animateMotion>
      </circle>
      <circle cx="160" cy="160" r="4" fill={GOLD_MD} />
    </svg>
  );
}

function Lens() {
  const dots = [
    [108, 108],
    [160, 96],
    [212, 108],
    [96, 160],
    [224, 160],
    [108, 212],
    [160, 224],
    [212, 212],
  ];
  const hex = "M160 92 L219 126 L219 194 L160 228 L101 194 L101 126 Z";
  return (
    <svg viewBox="0 0 320 320" fill="none">
      <circle cx="160" cy="160" r="120" stroke={GOLD} strokeWidth="1.5" strokeDasharray="28 16" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0 160 160" to="360 160 160" dur="44s" repeatCount="indefinite" />
      </circle>
      <path d={hex} stroke={GOLD} strokeWidth="2" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" from="0 160 160" to="360 160 160" dur="26s" repeatCount="indefinite" />
      </path>
      <path d={hex} stroke={GOLD} strokeWidth="1" opacity="0.4" transform="scale(0.62)" style={{ transformOrigin: "center" }}>
        <animateTransform attributeName="transform" type="rotate" from="360 160 160" to="0 160 160" dur="18s" repeatCount="indefinite" additive="sum" />
      </path>
      {dots.map(([cx, cy], i) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill={GOLD_MD}>
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="2.6s"
            begin={`${i * 0.28}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      <circle cx="160" cy="160" r="30" stroke={GOLD_LT} strokeWidth="2">
        <animate attributeName="r" values="26;40;26" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;1;0.45" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="160" r="5" fill={GOLD_LT} />
    </svg>
  );
}

function Bridge() {
  const cable = "M40 198 Q104 150 160 182 Q216 150 280 198";
  const suspenders = [
    [70, 170],
    [104, 152],
    [137, 172],
    [160, 182],
    [183, 172],
    [216, 152],
    [250, 170],
  ];
  return (
    <svg viewBox="0 0 320 320" fill="none">
      {/* water reflection */}
      {[248, 262, 276].map((y, i) => (
        <path key={y} d={`M${70 + i * 12} ${y} H${250 - i * 12}`} stroke={GOLD} strokeWidth="1.5" opacity="0.14">
          <animate attributeName="opacity" values="0.05;0.2;0.05" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </path>
      ))}
      {/* towers */}
      <path d="M104 150 V240" stroke={GOLD} strokeWidth="2.5" />
      <path d="M216 150 V240" stroke={GOLD} strokeWidth="2.5" />
      {/* main cable */}
      <path d={cable} stroke={GOLD} strokeWidth="2.5" opacity="0.9" />
      {/* suspenders */}
      {suspenders.map(([x, y], i) => (
        <path key={x} d={`M${x} ${y} V214`} stroke={GOLD} strokeWidth="1.4" opacity="0.55">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.4s" begin={`${i * 0.24}s`} repeatCount="indefinite" />
        </path>
      ))}
      {/* deck */}
      <path id="pgDeck" d="M40 214 H280" stroke={GOLD} strokeWidth="2.5" />
      {/* traveling light */}
      <circle r="6.5" fill={GOLD_LT}>
        <animateMotion dur="4.4s" repeatCount="indefinite">
          <mpath href="#pgDeck" />
        </animateMotion>
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const motifs = [Cage, Loop, Lens, Bridge];

export default function ShiftGraphic({ index }: { index: number }) {
  return (
    <div className="pinned-graphic" aria-hidden>
      {motifs.map((Motif, i) => (
        <div key={i} className={`pg-layer ${i === index ? "is-active" : ""}`}>
          <Motif />
        </div>
      ))}
    </div>
  );
}
