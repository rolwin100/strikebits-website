import type { Locale } from "@/i18n/config";
import type { ContentOverrides } from "./types";
import { de } from "./de";
import { fr } from "./fr";

/**
 * Translated page content for the files in data/ (services, FAQs, privacy policy...).
 * English is the data files themselves, so it has no overrides.
 */
export const contentOverrides: Record<Locale, ContentOverrides> = { en: {}, de, fr };
