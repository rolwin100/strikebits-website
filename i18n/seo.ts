import type { Metadata } from "next";
import { defaultLocale, localizedHref, locales, translatedLocales, type Locale } from "@/i18n/config";
import { site } from "@/data/site";

/** Public address of the site. Used for canonical links and the og:url / og:image tags. */
export const siteUrl = "https://strikebits.com";

/**
 * Picture shown when a page is shared (LinkedIn, X, Slack, WhatsApp...).
 * TODO: replace with a 1200x630 banner in /public (for example /og-image.png) and update the size below.
 * Until then the square logo is used.
 */
const shareImage = { url: "/favicon/android-chrome-512x512.png", width: 512, height: 512 };

const ogLocale: Record<Locale, string> = { en: "en_US", de: "de_DE", fr: "fr_FR" };

/** Favicons, app icon and web manifest (files are in /public/favicon) */
export const iconMetadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/favicon/site.webmanifest",
};

/**
 * Title, description, canonical link, language alternates, Open Graph and X (Twitter) tags for one page.
 * `path` is the English path with a trailing slash, for example "/about/" ("/" for the home page).
 * Next replaces a whole group (openGraph, twitter) when a page sets it, so every page builds the full set here.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description }: { title: string; description: string },
): Metadata {
  const url = localizedHref(path, locale);
  const translated = translatedLocales.includes(locale);
  const alternates = locales.filter((l) => translatedLocales.includes(l));

  return {
    title,
    description,
    alternates: {
      canonical: url,
      // hreflang only for languages that are really translated
      ...(alternates.length > 1
        ? {
            languages: {
              ...Object.fromEntries(alternates.map((l) => [l, localizedHref(path, l)])),
              "x-default": localizedHref(path, defaultLocale),
            },
          }
        : {}),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: ogLocale[locale],
      images: [{ ...shareImage, alt: site.name }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [{ url: shareImage.url, alt: site.name }],
    },
    ...(translated ? {} : { robots: { index: false, follow: true } }),
  };
}
