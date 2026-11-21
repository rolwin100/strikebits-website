import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/seo";
import { getMessages } from "@/i18n/translations/messages";

export const contactMetadata = (locale: Locale): Metadata => pageMetadata(locale, "/contact/", getMessages(locale).meta.contact);

export default function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <Contact locale={locale} />
      {/* The FAQ's "Ask us a question" button would link back to this page, so hide it here */}
      <Faq locale={locale} showContactButton={false} />
    </>
  );
}
