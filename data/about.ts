import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { contentOverrides } from "@/i18n/content";
import { en } from "@/i18n/content/en";
import { deepMerge } from "@/i18n/merge";

// The About page text, values and team are in i18n/content/en.ts (English) and de.ts / fr.ts (translations).

export type Value = { icon: LucideIcon; title: string; text: string; color: string };

export type TeamMember = {
  name: string;
  role: string;
  /** Square photo in /public/team, e.g. "/team/priya.webp". Leave empty to show a placeholder. */
  photo: string;
  linkedin: string;
  color: string;
};

export type AboutContent = typeof en.about;

/** About page content in a language: translations from i18n/content laid over the English text (same order) */
export const getAbout = (locale: Locale): AboutContent => deepMerge(en.about, contentOverrides[locale].about);
