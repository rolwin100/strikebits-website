"use client";

import { createContext, useContext, type ComponentProps } from "react";
import Link from "next/link";
import { localizedHref, type Locale } from "./config";
import type { Messages } from "@/i18n/translations/messages";

type I18n = { locale: Locale; messages: Messages };

const I18nContext = createContext<I18n | null>(null);

/** Wraps the page (see the layouts) so client components can read the language and its text */
export function I18nProvider({ locale, messages, children }: I18n & { children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>;
}

function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("I18nProvider is missing");
  return value;
}

export const useLocale = () => useI18n().locale;
export const useMessages = () => useI18n().messages;

/** next/link that keeps the visitor in their language: "/about" becomes "/de/about" on the German site */
export function LocaleLink({ href, ...props }: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const locale = useLocale();
  return <Link href={localizedHref(href, locale)} {...props} />;
}
