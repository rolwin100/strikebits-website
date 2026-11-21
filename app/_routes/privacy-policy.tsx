import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { getPrivacyPolicy } from "@/data/privacy";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const privacyMetadata = (locale: Locale): Metadata => getMessages(locale).meta.privacy;

export default function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  return <LegalPage content={getPrivacyPolicy(locale)} locale={locale} />;
}
