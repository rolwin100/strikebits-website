import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getService, services } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

// One page per service in i18n/content/en.ts, built ahead of time
export const serviceSlugs = () => services.map((service) => ({ slug: service.slug }));

export function serviceMetadata(locale: Locale, slug: string): Metadata {
  const service = getService(slug, locale);
  if (!service) return {};
  return {
    title: `${service.title}${getMessages(locale).meta.titleSuffix}`,
    description: service.page.intro,
  };
}

export default function ServiceRoute({ locale, slug }: { locale: Locale; slug: string }) {
  const service = getService(slug, locale);
  if (!service) notFound();

  return <ServicePage locale={locale} service={service} />;
}
