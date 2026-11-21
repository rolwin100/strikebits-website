export const locales = ["en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];

/** English lives at the site root (/about); other languages get a prefix (/de/about). */
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { native: string; short: string }> = {
  en: { native: "English", short: "EN" },
  de: { native: "Deutsch", short: "DE" },
  fr: { native: "Français", short: "FR" },
};

/**
 * Languages whose text has actually been translated.
 * Any other language still works, but shows English text, is marked noindex so
 * search engines don't see duplicate English pages, and sets <html lang="en">.
 * Add "de" / "fr" here once their messages and content are translated.
 */
export const translatedLocales: readonly Locale[] = ["en"];

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Non-default languages, the ones that get a /<locale> prefix and their own route tree */
export const prefixedLocales = locales.filter((locale) => locale !== defaultLocale);

/** "/about" -> "/de/about" (English and non-site links such as "#faq" or "mailto:" stay as they are) */
export function localizedHref(href: string, locale: Locale) {
  if (locale === defaultLocale || !href.startsWith("/")) return href;
  return href === "/" ? `/${locale}/` : `/${locale}${href}`;
}

/** "/de/about/" -> { locale: "de", path: "/about/" }; "/about/" -> { locale: "en", path: "/about/" } */
export function parsePathname(pathname: string): { locale: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (first !== defaultLocale && isLocale(first)) {
    const path = "/" + rest.join("/");
    return { locale: first, path };
  }
  return { locale: defaultLocale, path: pathname };
}
