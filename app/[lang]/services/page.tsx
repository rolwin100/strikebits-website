import { notFound } from "next/navigation";
import ServicesPage, { servicesMetadata } from "../../_routes/services";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLocale(lang) ? servicesMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <ServicesPage locale={lang} />;
}
