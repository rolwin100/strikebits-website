/**
 * Contact form endpoint: POST /api/contact
 *
 * Runs as a Netlify Function next to the static site (the site itself stays a
 * static export). It checks the enquiry and emails it to the team through Resend.
 *
 * Environment variables (set them in Netlify: Site configuration > Environment variables):
 * - RESEND_API_KEY      required. Your Resend API key.
 * - CONTACT_TO_EMAIL    where enquiries go. Defaults to hello@strikebits.com.
 * - CONTACT_FROM_EMAIL  sender, on a domain verified in Resend,
 *                       for example "StrikeBits Website <website@strikebits.com>".
 *                       Defaults to Resend's test sender, which can only deliver
 *                       to the email address of your own Resend account.
 */

const DEFAULT_TO = "hello@strikebits.com";
const DEFAULT_FROM = "StrikeBits Website <onboarding@resend.dev>";

// Longest value accepted for each field
const LIMITS = {
  name: 100,
  email: 200,
  company: 200,
  service: 100,
  budget: 100,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;
type Enquiry = Record<Field, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Returns the cleaned enquiry, or an error code. The site shows its own text for each code
 * in the visitor's language (see i18n/messages/en.ts, form.errors), so only codes go out here.
 */
function parseEnquiry(input: unknown): Enquiry | string {
  if (!input || typeof input !== "object") return "invalid_request";
  const raw = input as Record<string, unknown>;

  const enquiry = {} as Enquiry;
  for (const field of Object.keys(LIMITS) as Field[]) {
    const value = typeof raw[field] === "string" ? (raw[field] as string).trim() : "";
    if (value.length > LIMITS[field]) return "field_too_long";
    enquiry[field] = value;
  }

  if (!enquiry.name) return "name_required";
  if (!EMAIL_PATTERN.test(enquiry.email)) return "email_invalid";
  if (!enquiry.message) return "message_required";
  // Names end up in the subject line, so keep them to a single line
  enquiry.name = enquiry.name.replace(/[\r\n]+/g, " ");
  return enquiry;
}

function buildEmail(enquiry: Enquiry) {
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Company / store", enquiry.company],
    ["Service", enquiry.service],
    ["Budget", enquiry.budget],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  const subject = `New enquiry from ${enquiry.name}${enquiry.service ? ` (${enquiry.service})` : ""}`;

  const text = [...rows.map(([label, value]) => `${label}: ${value}`), "", enquiry.message].join("\n");

  const html = `
    <h2 style="margin:0 0 16px">New enquiry from the website</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="color:#666;vertical-align:top">${label}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="margin:20px 0 6px;color:#666">Message</p>
    <p style="margin:0;white-space:pre-wrap">${escapeHtml(enquiry.message)}</p>
  `;

  return { subject, text, html };
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "invalid_request" });
  }

  // Honeypot: a hidden field people never see. Bots that fill it get a fake success.
  if (body && typeof body === "object" && (body as Record<string, unknown>).website) {
    return json(200, { ok: true });
  }

  const enquiry = parseEnquiry(body);
  if (typeof enquiry === "string") return json(400, { error: enquiry });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return json(500, { error: "not_configured" });
  }

  const { subject, text, html } = buildEmail(enquiry);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).split(",").map((address) => address.trim()),
      reply_to: enquiry.email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    // Logged for us in the Netlify function logs; the visitor gets a generic message
    console.error("contact: Resend error", response.status, await response.text());
    return json(502, { error: "send_failed" });
  }

  return json(200, { ok: true });
}

// Serve the function at /api/contact instead of /.netlify/functions/contact
export const config = { path: "/api/contact" };
