import type { LegalDocument } from "@/components/Legal";
import type { Locale } from "@/i18n/config";
import { contentOverrides } from "@/i18n/translations/content";
import { en } from "@/i18n/translations/content/en";
import { deepMerge } from "@/i18n/merge";

// The privacy policy text is in i18n/translations/content/en.ts (English) and de.ts / fr.ts (translations).

/** Privacy policy in a language: translations from i18n/translations/content laid over the English text (same section order) */
export const getPrivacyPolicy = (locale: Locale): LegalDocument => deepMerge(en.privacy, contentOverrides[locale].privacy);
