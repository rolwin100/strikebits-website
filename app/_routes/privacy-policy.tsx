import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { getPrivacyPolicy } from "@/data/privacy";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/seo";
import { getMessages } from "@/i18n/translations/messages";

export const privacyMetadata = (locale: Locale): Metadata => pageMetadata(locale, "/privacy-policy/", getMessages(locale).meta.privacy);

export default function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  return <LegalPage content={getPrivacyPolicy(locale)} locale={locale} />;
}
