"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom" | "blur";
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : {};

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`reveal ${className}`}
      data-reveal={variant}
      style={style}
    >
      {children}
    </Tag>
  );
}
