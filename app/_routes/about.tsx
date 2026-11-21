import type { Metadata } from "next";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const aboutMetadata = (locale: Locale): Metadata => getMessages(locale).meta.about;

export default function AboutPage({ locale }: { locale: Locale }) {
  return (
    <>
      <About locale={locale} />
      {/* Client logos, with space before the footer */}
      <div className="pb-20 md:pb-28">
        <Clients locale={locale} />
      </div>
    </>
  );
}
