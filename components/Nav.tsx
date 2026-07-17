"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "./ModalContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/program", label: "The Program" },
  { href: "/program#curriculum", label: "Curriculum" },
  { href: "/program#coaches", label: "Meet the Coaches" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="The Bridge Identity Reset home"
    >
      <Image
        src="/images/bridge-lp-logo.png"
        alt=""
        aria-hidden
        width={48}
        height={48}
        priority
        className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.12rem] font-semibold leading-[1.05] tracking-[0.02em] text-navy-900 sm:text-[1.2rem]">
          The Bridge
        </span>
        <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-600">
          Identity Reset&trade;
        </span>
        <span className="mt-1 text-[0.52rem] font-medium uppercase tracking-[0.18em] text-ink-soft/60">
          by LumeraPath
        </span>
      </span>
    </Link>
  );
}

export default function Nav() {
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-cream/85 shadow-[0_10px_36px_-18px_rgb(18_32_63/0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent transition-opacity duration-500 ${
          scrolled || menuOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 lg:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-navy-900"
            >
              {l.label}
              <span
                className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-300 group-hover:w-full"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => openModal("clarity")}
            className="btn btn-outline !px-5 !py-2.5 text-sm"
          >
            Book a Clarity Call
          </button>
          <button
            type="button"
            onClick={() => openModal("training")}
            className="btn btn-gold !px-5 !py-2.5 text-sm"
          >
            Get the Free Training
          </button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-navy-900 transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-navy-900 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-navy-900 transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid transition-all duration-500 lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-navy-900/10 bg-cream/95 px-5 pb-6 pt-4 backdrop-blur-xl">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-navy-900"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openModal("training");
                }}
                className="btn btn-gold w-full"
              >
                Get the Free Training
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openModal("clarity");
                }}
                className="btn btn-outline w-full"
              >
                Book a Clarity Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
