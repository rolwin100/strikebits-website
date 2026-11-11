"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, MailCheck } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";

// Edit the dropdown options here
const serviceOptions = [...services.map((s) => s.title), "Something else"];
const budgetOptions = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];

/**
 * TODO: connect this form to a form service (for example Formspree, Web3Forms or Resend).
 * Until then, submitting opens the visitor's own email app with the message
 * already written and addressed to site.email — nothing is sent from the website itself.
 * To switch, replace the body of sendEnquiry() with a fetch() to your service.
 */
function sendEnquiry(data: Record<string, string>) {
  const subject = `New enquiry from ${data.name}${data.service ? ` (${data.service})` : ""}`;
  const details = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Company / store: ${data.company}` : "",
    data.service ? `Service: ${data.service}` : "",
    data.budget ? `Budget: ${data.budget}` : "",
  ].filter(Boolean);
  const body = [...details, "", data.message].join("\n");

  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries([...form.entries()].map(([key, value]) => [key, String(value).trim()]));
    sendEnquiry(data);
    setSent(true);
  }

  return (
    <div aria-live="polite">
      {/* Shown after submitting */}
      {sent && (
        <div className="rounded-2xl bg-mist p-8 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-lime text-pine-900">
            <MailCheck className="size-7" />
          </span>
          <h3 className="mt-5 text-2xl">One more step: press send</h3>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Your email app should have opened with your message ready to go. If it didn&apos;t, email us
            directly at{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-pine-700 underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
          <button type="button" onClick={() => setSent(false)} className="btn btn-line mt-6">
            Back to the form
          </button>
        </div>
      )}

      {/* Kept mounted while hidden, so nothing typed is lost */}
      <form onSubmit={handleSubmit} hidden={sent} className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Your name" required>
          <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" className="input" />
        </Field>

        <Field id="contact-email" label="Email" required>
          <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="jane@yourstore.com" className="input" />
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-company" label="Company or store URL">
            <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="yourstore.com" className="input" />
          </Field>
        </div>

        <Field id="contact-service" label="What do you need?">
          <Select id="contact-service" name="service" options={serviceOptions} placeholder="Choose a service" />
        </Field>

        <Field id="contact-budget" label="Budget">
          <Select id="contact-budget" name="budget" options={budgetOptions} placeholder="Choose a range" />
        </Field>

        <div className="sm:col-span-2">
          <Field id="contact-message" label="Tell us about your project" required>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder="What are you building, and what would success look like?"
              className="input resize-y"
            />
          </Field>
        </div>

        <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">{site.emailNote}.</p>
          <button type="submit" className="btn btn-lime shrink-0 justify-center">
            Send message <ArrowUpRight className="size-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
