import { notFound } from "next/navigation";
import PrivacyPolicyPage, { privacyMetadata } from "../../_routes/privacy-policy";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLocale(lang) ? privacyMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <PrivacyPolicyPage locale={lang} />;
}
