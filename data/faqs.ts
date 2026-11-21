import type { Locale } from "@/i18n/config";
import { contentOverrides } from "@/i18n/content";
import { en } from "@/i18n/content/en";
import { deepMerge } from "@/i18n/merge";

// The FAQ text is in i18n/content/en.ts (English) and de.ts / fr.ts (translations).
export type Faq = { q: string; a: string };

/** FAQs in a language: translations from i18n/content laid over the English text (same order) */
export const getFaqs = (locale: Locale): Faq[] => deepMerge(en.faqs, contentOverrides[locale].faqs);
