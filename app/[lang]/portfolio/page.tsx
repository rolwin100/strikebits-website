import { notFound } from "next/navigation";
import PortfolioPage, { portfolioMetadata } from "../../_routes/portfolio";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLocale(lang) ? portfolioMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <PortfolioPage locale={lang} />;
}
