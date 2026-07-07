"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "waitlist", ...data }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold-400/50 bg-cream/10 px-8 py-10 text-center backdrop-blur-sm">
        <p className="font-display text-3xl font-semibold text-gold-300">
          Your seat is saved.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-cream/80">
          You&rsquo;re on the priority list. We&rsquo;ll notify you before the
          next cohort opens to the public.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row"
    >
      <label className="sr-only" htmlFor="wl-first">
        First Name
      </label>
      <input
        id="wl-first"
        name="firstName"
        required
        placeholder="First Name"
        className="field-input flex-1 !border-cream/20 !bg-cream/10 !text-cream placeholder:!text-cream/50 focus:!border-gold-400"
      />
      <label className="sr-only" htmlFor="wl-email">
        Email
      </label>
      <input
        id="wl-email"
        name="email"
        type="email"
        required
        placeholder="Email"
        className="field-input flex-1 !border-cream/20 !bg-cream/10 !text-cream placeholder:!text-cream/50 focus:!border-gold-400"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-gold shrink-0 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Saving…" : "Save My Seat"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-300 sm:hidden">
          Something went wrong, please try again.
        </p>
      )}
    </form>
  );
}
