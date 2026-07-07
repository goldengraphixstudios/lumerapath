"use client";

import { useState, type FormEvent } from "react";
import { useModal } from "./ModalContext";
import { submitLead as postLead } from "@/lib/leads";

type Status = "idle" | "submitting" | "success" | "error";

async function submitLead(
  type: string,
  form: HTMLFormElement
): Promise<boolean> {
  const data = Object.fromEntries(new FormData(form).entries());
  return postLead({ type, ...data });
}

function ModalShell({
  children,
  labelledBy,
}: {
  children: React.ReactNode;
  labelledBy: string;
}) {
  const { closeModal } = useModal();
  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-navy-950/70 px-4 py-3 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <div className="modal-panel relative max-h-[calc(100svh-1.5rem)] w-full max-w-2xl overflow-y-auto rounded-3xl bg-cream shadow-[0_40px_90px_-30px_rgb(10_18_35/0.7)]">
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 transition-colors hover:bg-gold-400 hover:text-navy-950"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

function SuccessState({
  heading,
  message,
}: {
  heading: string;
  message: string;
}) {
  const { closeModal } = useModal();
  return (
    <div className="px-8 py-14 text-center sm:px-12">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/20">
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
      <h3 className="font-display mt-6 text-3xl font-semibold text-navy-900">
        {heading}
      </h3>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
        {message}
      </p>
      <button type="button" onClick={closeModal} className="btn btn-navy mt-8">
        Close
      </button>
    </div>
  );
}

function FreeTrainingModal() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitLead("free-training", e.currentTarget);
    setStatus(ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <SuccessState
        heading="You're on the list."
        message="Watch your inbox, we'll send you the details for the next free masterclass. We can't wait to meet you."
      />
    );
  }

  return (
    <div className="px-8 pb-9 pt-12 sm:px-12">
      <p className="overline-label">Free Masterclass</p>
      <h3
        id="training-modal-title"
        className="font-display mt-3 text-[1.9rem] font-semibold leading-tight text-navy-900"
      >
        How Executive Women Are Reclaiming Their Leadership, {" "}
        <span className="italic text-gold-600">
          Without Sacrificing the Life They Actually Want
        </span>
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        For driven women in senior leadership who are ready for a clearer, more
        fulfilling path forward, with the impact, alignment, and success that
        actually feels like theirs.
      </p>

      <ul className="mt-5 space-y-3">
        {[
          "Identify what's been quietly driving your decisions, and how to change it from the inside out.",
          "Gain immediate clarity on your next move, and the confidence to act on it without second-guessing yourself.",
          "Build a leadership foundation that protects your energy, your relationships, and your future.",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
            <span className="mt-0.5 font-semibold text-gold-600" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} className="mt-7 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="ft-first">
              First Name
            </label>
            <input
              id="ft-first"
              name="firstName"
              required
              className="field-input"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ft-email">
              Email
            </label>
            <input
              id="ft-email"
              name="email"
              type="email"
              required
              className="field-input"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[110px_1fr]">
          <div>
            <label className="field-label" htmlFor="ft-code">
              Country Code
            </label>
            <input
              id="ft-code"
              name="countryCode"
              className="field-input"
              placeholder="+1"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ft-phone">
              Phone Number
            </label>
            <input
              id="ft-phone"
              name="phone"
              type="tel"
              className="field-input"
              placeholder="555 000 0000"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-gold mt-2 w-full disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting"
            ? "Saving your seat…"
            : "Register for the Next Free Masterclass"}
        </button>
        {status === "error" && (
          <p className="text-center text-sm text-red-700">
            Something went wrong, please try again.
          </p>
        )}
      </form>

      <p className="mt-5 text-center text-xs leading-relaxed text-ink-soft/80">
        We host a free masterclass every month so you can experience our work, 
        and get to know Allye + Amanda, before deciding what&rsquo;s next. No
        pressure, no pitch. Just 90 minutes of real work that moves you forward.
        <br />
        We respect your privacy and will never share your information.
      </p>
    </div>
  );
}

function ClarityCallModal() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitLead("clarity-call", e.currentTarget);
    setStatus(ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <SuccessState
        heading="Request received."
        message="Thank you for sharing where you are. We'll reach out shortly to schedule your Clarity Call, a no-pressure conversation about your next step."
      />
    );
  }

  return (
    <div className="px-6 pb-7 pt-10 sm:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="overline-label">Private Fit Check</p>
          <h3
            id="clarity-modal-title"
            className="font-display mt-3 text-[1.85rem] font-semibold leading-tight text-navy-900 sm:text-[2.1rem]"
          >
            Book a Clarity Call
          </h3>
        </div>
        <div className="rounded-2xl border border-gold-400/35 bg-white/70 px-4 py-3 text-sm text-ink-soft shadow-[0_12px_28px_-22px_rgb(18_32_63/0.4)]">
          <span className="font-semibold text-navy-900">15 min</span>
          <span className="mx-2 text-gold-600">•</span>
          no pressure
        </div>
      </div>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
        Tell us where the pressure is sitting right now. We will use this to
        make the call specific, useful, and honest about whether The Bridge is
        the right next step.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="cc-first">
              First Name
            </label>
            <input
              id="cc-first"
              name="firstName"
              required
              className="field-input"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="cc-email">
              Email
            </label>
            <input
              id="cc-email"
              name="email"
              type="email"
              required
              className="field-input"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div>
            <label className="field-label" htmlFor="cc-level">
              Leadership Level
            </label>
            <select
              id="cc-level"
              name="leadershipLevel"
              required
              defaultValue=""
              className="field-input"
            >
              <option value="" disabled>
                Select one...
              </option>
              <option>Manager</option>
              <option>Director</option>
              <option>VP</option>
              <option>C-Suite</option>
              <option>Founder</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="cc-decision">
              Current Crossroads
            </label>
            <select
              id="cc-decision"
              name="decision"
              required
              defaultValue=""
              className="field-input"
            >
              <option value="" disabled>
                Select one...
              </option>
              <option>Stay and lead differently</option>
              <option>Prepare for a pivot</option>
              <option>Recover after a layoff</option>
              <option>Ask for more</option>
              <option>Change direction</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor="cc-pressure">
            What would make this call worth your time?
          </label>
          <textarea
            id="cc-pressure"
            name="pressure"
            rows={4}
            required
            className="field-input resize-none"
            placeholder="A decision, a pattern, or a pressure point you want to untangle..."
          />
        </div>

        <div className="grid gap-3 rounded-2xl border border-gold-400/25 bg-white/55 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-xs leading-relaxed text-ink-soft">
            Your details stay private. We only use them to prepare for this
            conversation and follow up about scheduling.
          </p>
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-navy-900">
            <input
              type="checkbox"
              name="readyForCall"
              value="Yes"
              required
              className="h-4 w-4 accent-gold-600"
            />
            I am open to a real conversation
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-gold w-full disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request My Clarity Call"}
        </button>
        {status === "error" && (
          <p className="text-center text-sm text-red-700">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default function Modals() {
  const { open } = useModal();

  if (open === "training") {
    return (
      <ModalShell labelledBy="training-modal-title">
        <FreeTrainingModal />
      </ModalShell>
    );
  }
  if (open === "clarity") {
    return (
      <ModalShell labelledBy="clarity-modal-title">
        <ClarityCallModal />
      </ModalShell>
    );
  }
  return null;
}
