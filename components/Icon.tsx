/**
 * Line-art icon set for The Bridge Accelerator (program + shared sections).
 * Icons are stroke-based and inherit `currentColor`, so they take on whatever
 * text color the parent sets (gold on cream, gold-300 on navy, etc). Keep the
 * homepage untouched; this is used across the program page sections.
 */

type IconName =
  | "doorway"
  | "compass"
  | "sparkle"
  | "users"
  | "coaches"
  | "community"
  | "checklist"
  | "check"
  | "refresh"
  | "clock"
  | "lifebuoy"
  | "quote"
  | "leaf"
  | "shield";

const paths: Record<IconName, React.ReactNode> = {
  // still in the room, wondering why
  doorway: (
    <>
      <path d="M4 21h16" />
      <path d="M7 21V4.5A1.5 1.5 0 0 1 8.5 3h5.6a1.5 1.5 0 0 1 1.5 1.5V21" />
      <path d="M12.4 12.2h.01" />
    </>
  ),
  // laid off, refusing to land anywhere, finding direction
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z" />
    </>
  ),
  // the pull toward something new
  sparkle: (
    <>
      <path d="M12 2.5c.7 4.6 2.9 6.8 7.5 7.5-4.6.7-6.8 2.9-7.5 7.5-.7-4.6-2.9-6.8-7.5-7.5 4.6-.7 6.8-2.9 7.5-7.5Z" />
      <path d="M18.5 15.5c.25 1.6 1 2.4 2.6 2.6-1.6.25-2.35 1-2.6 2.6-.25-1.6-1-2.35-2.6-2.6 1.6-.25 2.35-1 2.6-2.6Z" />
    </>
  ),
  // small-group coaching
  users: (
    <>
      <circle cx="9" cy="7.5" r="3.2" />
      <path d="M2.5 19.5a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 4.6a3.2 3.2 0 0 1 0 6.1" />
      <path d="M18 13.4a6.5 6.5 0 0 1 3.5 5.8" />
    </>
  ),
  // two coaches in the room
  coaches: (
    <>
      <circle cx="8" cy="8" r="2.8" />
      <circle cx="16" cy="8" r="2.8" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
      <path d="M11.5 19a4.5 4.5 0 0 1 9 0" />
    </>
  ),
  // private community access
  community: (
    <>
      <path d="M14 11.5a5.5 5.5 0 0 1-8 4.9L2.5 17.5l1.1-3.4A5.5 5.5 0 1 1 14 11.5Z" />
      <path d="M9.5 5.6A5.5 5.5 0 0 1 21 8a5.4 5.4 0 0 1-1 3.2l1 3.3-3.3-1a5.5 5.5 0 0 1-2.7.6" />
    </>
  ),
  // step-by-step curriculum
  checklist: (
    <>
      <path d="M10 6.5h10" />
      <path d="M10 12h10" />
      <path d="M10 17.5h10" />
      <path d="m3 6 1.3 1.3L7 4.6" />
      <path d="m3 11.5 1.3 1.3L7 10.1" />
      <path d="m3 17 1.3 1.3L7 15.6" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4.2L19 7.2" />,
  // life happens check-in
  refresh: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
      <path d="M20.8 4.2v4.3h-4.3" />
    </>
  ),
  // weekly integration session
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2V12l3.4 2" />
    </>
  ),
  // weekly integration support
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="m5.6 5.6 3.9 3.9" />
      <path d="m14.5 14.5 3.9 3.9" />
      <path d="m18.4 5.6-3.9 3.9" />
      <path d="m9.5 14.5-3.9 3.9" />
    </>
  ),
  quote: (
    <>
      <path d="M9.5 6.5C6.5 7.6 5 10 5 13.4V18h5v-5H7.7c0-2 .8-3.4 2.6-4.2Z" />
      <path d="M19 6.5c-3 1.1-4.5 3.5-4.5 6.9V18h5v-5h-2.3c0-2 .8-3.4 2.6-4.2Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M4.5 19.5C3.5 12 8 5 19.5 4.5 20 16 13 20.5 5.5 19.5" />
      <path d="M4.5 19.5C8 15 12 12 17 10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.3 7 8.5 4-1.2 7-4.2 7-8.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
