"use client";

import { useState, type ReactNode, type SubmitEvent } from "react";
import { ArrowUpRight, ChevronDown, LoaderCircle, MailCheck } from "lucide-react";
import { site } from "@/data/site";
import { useMessages } from "@/i18n/client";
// The text is in i18n/translations/messages/en.ts. The budget options are there too.

/**
 * Sends the enquiry to the Netlify Function in netlify/functions/contact.mts,
 * which emails it to the team through Resend.
 * Note: `pnpm dev` does not run Netlify Functions; use `netlify dev` to try the form locally.
 */
class SendError extends Error {
  // The function answers with a short code (see netlify/functions/contact.mts); the text for it is in messages
  constructor(readonly code: string) {
    super(code);
  }
}

async function sendEnquiry(data: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new SendError(result?.error ?? "generic");
  }
}

function Select({ id, name, options, placeholder }: { id: string; name: string; options: string[]; placeholder: string }) {
  return (
    <div className="relative">
      <select id={id} name={name} defaultValue="" className="input appearance-none pr-11">
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-muted" />
    </div>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
        {required && (
          <span className="text-pine-600" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm({ serviceOptions }: { serviceOptions: string[] }) {
  const m = useMessages();
  const t = m.form;
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const sent = status === "sent";

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const data = Object.fromEntries([...form.entries()].map(([key, value]) => [key, String(value).trim()]));

    setStatus("sending");
    setError("");
    try {
      await sendEnquiry(data);
      formElement.reset();
      setStatus("sent");
    } catch (err) {
      const code = err instanceof SendError ? err.code : "generic";
      const errors: Record<string, string> = t.errors;
      setError(errors[code] ?? t.errors.generic);
      setStatus("idle");
    }
  }

  return (
    <div aria-live="polite">
      {/* Shown after submitting */}
      {sent && (
        <div className="rounded-2xl bg-mist p-8 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-lime text-pine-900">
            <MailCheck className="size-7" />
          </span>
          <h3 className="mt-5 text-2xl">{t.sentTitle}</h3>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">{m.contact.replyNote}.</p>
          <button type="button" onClick={() => setStatus("idle")} className="btn btn-line mt-6">
            {t.sendAnother}
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} hidden={sent} className="grid gap-5 sm:grid-cols-2">
        {/* Honeypot for spam bots: hidden from people, so a filled value means a bot */}
        <div aria-hidden="true" className="sr-only">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <Field id="contact-name" label={t.name} required>
          <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder={t.namePlaceholder} className="input" />
        </Field>

        <Field id="contact-email" label={t.email} required>
          <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder={t.emailPlaceholder} className="input" />
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-company" label={t.company}>
            <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder={t.companyPlaceholder} className="input" />
          </Field>
        </div>

        <Field id="contact-service" label={t.service}>
          <Select id="contact-service" name="service" options={serviceOptions} placeholder={t.servicePlaceholder} />
        </Field>

        <Field id="contact-budget" label={t.budget}>
          <Select id="contact-budget" name="budget" options={t.budgetOptions} placeholder={t.budgetPlaceholder} />
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-message" label={t.message} required>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder={t.messagePlaceholder}
              className="input resize-y"
            />
          </Field>
        </div>

        {error && (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2">
            {error} {t.errorTryAgain}{" "}
            <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}

        <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">{m.contact.replyNote}.</p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn btn-lime shrink-0 justify-center disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                {t.sending} <LoaderCircle className="size-4 animate-spin" />
              </>
            ) : (
              <>
                {t.send} <ArrowUpRight className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
