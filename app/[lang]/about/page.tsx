import { notFound } from "next/navigation";
import AboutPage, { aboutMetadata } from "../../_routes/about";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLocale(lang) ? aboutMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <AboutPage locale={lang} />;
}
