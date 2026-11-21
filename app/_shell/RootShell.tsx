import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer, FooterReveal } from "@/components/Footer";
import { I18nProvider } from "@/i18n/client";
import { defaultLocale, translatedLocales, type Locale } from "@/i18n/config";
import { getServices } from "@/data/services";
import { getMessages } from "@/i18n/messages";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const isTranslated = (locale: Locale) => translatedLocales.includes(locale);

/** Site-wide title and description. Languages without real translations are hidden from search engines. */
export function rootMetadata(locale: Locale): Metadata {
  const { site } = getMessages(locale);
  return {
    title: site.title,
    description: site.description,
    ...(isTranslated(locale) ? {} : { robots: { index: false, follow: true } }),
  };
}

/** Everything shared by every page of one language: <html>, header, footer and the text for client components */
export default function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const messages = getMessages(locale);
  // Only the text the header needs goes to the browser, not whole service pages
  const headerServices = getServices(locale).map(({ slug, title, short, href }) => ({
    slug,
    label: title,
    text: short,
    href,
  }));

  return (
    <html
      // Until a language is really translated its pages show English, so they say so
      lang={isTranslated(locale) ? locale : defaultLocale}
      id="top"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider locale={locale} messages={messages}>
          <Header services={headerServices} />
          {/* z-10 keeps the page above the footer as it slides out from underneath */}
          <main className="relative z-10 flex-1 bg-white">{children}</main>
          <FooterReveal>
            <Footer locale={locale} />
          </FooterReveal>
        </I18nProvider>
      </body>
    </html>
  );
}
