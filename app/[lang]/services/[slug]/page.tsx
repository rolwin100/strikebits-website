import { notFound } from "next/navigation";
import ServiceRoute, { serviceMetadata, serviceSlugs } from "../../../_routes/service";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ lang: string; slug: string }> };

export const generateStaticParams = serviceSlugs;

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  return isLocale(lang) ? serviceMetadata(lang, slug) : {};
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  return <ServiceRoute locale={lang} slug={slug} />;
}
