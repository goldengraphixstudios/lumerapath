"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"show" | "leaving" | "gone">("show");

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem("lp-intro-seen")
    ) {
      setPhase("gone");
      return;
    }
    const leave = setTimeout(() => setPhase("leaving"), 1150);
    const gone = setTimeout(() => {
      setPhase("gone");
      sessionStorage.setItem("lp-intro-seen", "1");
    }, 1850);
    return () => {
      clearTimeout(leave);
      clearTimeout(gone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`intro-loader ${phase === "leaving" ? "is-leaving" : ""}`}>
      <div className="intro-loader__inner">
        <Image
          src="/images/lumerapath-mark.png"
          alt=""
          aria-hidden
          width={72}
          height={86}
          priority
          className="intro-loader__mark"
        />
        <span className="intro-loader__word">
          LUMERA <span className="intro-loader__path">PATH</span>
        </span>
        <span className="intro-loader__bar" aria-hidden>
          <span />
        </span>
      </div>
    </div>
  );
}
