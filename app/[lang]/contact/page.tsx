import { notFound } from "next/navigation";
import ContactPage, { contactMetadata } from "../../_routes/contact";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLocale(lang) ? contactMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <ContactPage locale={lang} />;
}
