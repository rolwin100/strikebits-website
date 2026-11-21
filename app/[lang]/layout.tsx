import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RootShell, { rootMetadata } from "../_shell/RootShell";
import { isLocale, prefixedLocales } from "@/i18n/config";

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

// /de/... and /fr/... are built ahead of time; any other first segment is a 404
export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? rootMetadata(lang) : {};
}

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <RootShell locale={lang}>{children}</RootShell>;
}
