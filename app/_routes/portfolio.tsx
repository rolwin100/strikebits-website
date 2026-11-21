import type { Metadata } from "next";
import { AppShowcase, PortfolioCta, PortfolioHero } from "@/components/Portfolio";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/seo";
import { getMessages } from "@/i18n/translations/messages";

export const portfolioMetadata = (locale: Locale): Metadata => pageMetadata(locale, "/portfolio/", getMessages(locale).meta.portfolio);

export default function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PortfolioHero locale={locale} />
      <AppShowcase locale={locale} />
      <PortfolioCta locale={locale} />
    </>
  );
}
