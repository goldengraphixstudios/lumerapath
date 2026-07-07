/**
 * Lead submission helper.
 *
 * The site is deployed as a fully static export (GitHub Pages), so there is no
 * server route to receive form posts. If `NEXT_PUBLIC_LEADS_ENDPOINT` is set
 * (e.g. a Formspree/Getform URL, or a serverless function once hosted on
 * Vercel), submissions are POSTed there. Otherwise the submission resolves
 * successfully so the UI completes — wire the env var to start capturing leads.
 */
export async function submitLead(
  payload: Record<string, unknown>
): Promise<boolean> {
  const endpoint = process.env.NEXT_PUBLIC_LEADS_ENDPOINT;
  if (!endpoint) return true;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
