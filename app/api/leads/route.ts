import { NextResponse } from "next/server";

/**
 * Lead capture endpoint for all site forms:
 *  - free-training  (masterclass registration modal)
 *  - clarity-call   (pre-qualification modal)
 *  - waitlist       (program page waitlist form)
 *
 * TODO before launch: forward leads to the approved destination
 * (Supabase table, Resend email, or the client's CRM) per the
 * agreed scope. Until then submissions are logged server-side.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const type = typeof payload.type === "string" ? payload.type : "unknown";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "A valid email is required" },
      { status: 400 }
    );
  }

  console.log(`[lead:${type}]`, JSON.stringify(payload));

  return NextResponse.json({ ok: true });
}
