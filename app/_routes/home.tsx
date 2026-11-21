import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyStrikeBits } from "@/components/WhyStrikeBits";
import { BlogSection } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import ProcessSection from "@/components/ProcessSection";
import type { Locale } from "@/i18n/config";

// The header and footer come from app/_shell/RootShell.tsx
export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <Clients locale={locale} />
      <Stats locale={locale} />
      <Services locale={locale} />
      <ProcessSection locale={locale} />
      <WhyStrikeBits locale={locale} />
      <BlogSection locale={locale} />
      <Faq locale={locale} />
    </>
  );
}
