import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { contentOverrides } from "@/i18n/content";
import { en } from "@/i18n/content/en";
import { deepMerge } from "@/i18n/merge";

export type ServiceFeature = { icon: LucideIcon; title: string; text: string };

export type Service = {
  /** Used in the page address: /services/<slug> */
  slug: string;
  title: string;
  /** The service name as it reads inside a sentence, e.g. "What we do in <topic>" */
  topic: string;
  /** One-liner used in the header dropdown */
  short: string;
  /** Longer description used on service cards */
  description: string;
  /** Checklist shown on service cards */
  points: string[];
  icon: LucideIcon;
  href: string;
  /** Content for the service's own page */
  page: {
    /** [light part, bold part] of the page heading */
    headline: [string, string];
    intro: string;
    features: ServiceFeature[];
    /** "This is a good fit if…" cards */
    fits: { title: string; text: string }[];
    faqs: { q: string; a: string }[];
  };
};

// The service text is in i18n/content/en.ts (English) and de.ts / fr.ts (translations).
// This file adds each service's page link and picks the right language.

/** English services. Use getServices(locale) wherever text is shown. */
export const services: Service[] = en.services.map((service) => ({ ...service, href: `/services/${service.slug}` }));

/** Services in a language: translations from i18n/content laid over the English text */
export const getServices = (locale: Locale): Service[] => deepMerge(services, contentOverrides[locale].services);

export const getService = (slug: string, locale: Locale) => getServices(locale).find((service) => service.slug === slug);
