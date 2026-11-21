import type { Metadata } from "next";
import { ServicesHero } from "@/components/ServicePage";
import { Services } from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import { WhyStrikeBits } from "@/components/WhyStrikeBits";
import { Faq } from "@/components/Faq";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const servicesMetadata = (locale: Locale): Metadata => getMessages(locale).meta.services;

export default function ServicesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <ServicesHero locale={locale} />
      <Services locale={locale} showHeader={false} />
      <ProcessSection locale={locale} />
      <WhyStrikeBits locale={locale} />
      <Faq locale={locale} />
    </>
  );
}
