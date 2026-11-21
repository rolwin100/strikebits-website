import type { Metadata } from "next";
import { AppShowcase, PortfolioCta, PortfolioHero } from "@/components/Portfolio";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const portfolioMetadata = (locale: Locale): Metadata => getMessages(locale).meta.portfolio;

export default function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PortfolioHero locale={locale} />
      <AppShowcase locale={locale} />
      <PortfolioCta locale={locale} />
    </>
  );
}
