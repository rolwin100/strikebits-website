import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { contentOverrides } from "@/i18n/translations/content";
import { en } from "@/i18n/translations/content/en";
import { deepMerge } from "@/i18n/merge";

// The portfolio text and apps are in i18n/translations/content/en.ts (English) and de.ts / fr.ts (translations).

export type AppStatus = "live" | "coming-soon";

export type PortfolioApp = {
  /** Stable key, also used for anchors (#sugar-rush) */
  slug: string;
  name: string;
  /** One-line pitch shown under the name */
  tagline: string;
  /** Checklist shown on the card */
  features: string[];
  status: AppStatus;
  /** App icon in /public/apps (square, at least 256×256) */
  logo?: string;
  /** Set for a logo that isn't a full square app icon: it's fitted inside a padded white tile */
  logoInset?: boolean;
  /** Shown instead of `logo` until the real one exists: an icon on a coloured tile */
  placeholder?: { icon: LucideIcon; tone: string };
  /** Shopify App Store listing; omit until the app is published */
  appStoreUrl?: string;
};

export type PortfolioContent = typeof en.portfolio;

/** Portfolio page content in a language: translations from i18n/translations/content laid over the English text (same order) */
export const getPortfolio = (locale: Locale): PortfolioContent => deepMerge(en.portfolio, contentOverrides[locale].portfolio);
