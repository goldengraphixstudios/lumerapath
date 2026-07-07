"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...data }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex min-h-[22rem] flex-col items-center justify-center rounded-[1.75rem] bg-white px-8 py-14 text-center shadow-card">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/20">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 12.5l5 5L20 6.5"
              stroke="#a97c26"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-display mt-6 text-3xl font-semibold text-navy-900">
          Your note is on its way.
        </p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          Thank you for reaching out. We read every message personally and will
          reply within two business days with a genuinely useful next step.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_70px_-34px_rgb(10_18_35/0.6)] sm:p-8">
      <div className="flex items-center justify-between">
        <p className="overline-label overline-label--bare">Private message</p>
        <span className="rounded-full bg-gold-400/15 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold-700">
          Replies in 48h
        </span>
      </div>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="contact-name">
              Your Name
            </label>
            <input
              id="contact-name"
              name="firstName"
              required
              className="field-input"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="field-input"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="contact-focus">
            What&rsquo;s the best next step for you?
          </label>
          <select
            id="contact-focus"
            name="focus"
            required
            defaultValue=""
            className="field-input"
          >
            <option value="" disabled>
              Choose one, we&rsquo;ll point you the right way
            </option>
            <option>Get the free training</option>
            <option>Join the Bridge Accelerator waitlist</option>
            <option>Book a clarity call</option>
            <option>Ask about private 1:1 coaching</option>
            <option>Something else</option>
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="contact-message">
            What&rsquo;s on your mind?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            className="field-input resize-none"
            placeholder="Share the crossroads you're navigating and the kind of support that would actually help."
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-gold w-full disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send My Message"}
          {status !== "submitting" && (
            <span className="btn-arrow" aria-hidden>
              →
            </span>
          )}
        </button>
        {status === "error" && (
          <p className="text-center text-sm text-red-700">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-center text-xs leading-relaxed text-ink-soft/70">
          Your details stay completely private. No spam, no sales pressure, ever.
        </p>
      </form>
    </div>
  );
}
