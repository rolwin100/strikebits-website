import { LocaleLink } from "@/i18n/client";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import FaqAccordion from "./FaqAccordion";
import { getFaqs } from "@/data/faqs";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default function Faq({ locale, showContactButton = true }: { locale: Locale; showContactButton?: boolean }) {
  const t = getMessages(locale).faq;

  return (
    <section id="faq" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <Reveal blur={6} className="lg:sticky lg:top-32 lg:self-start">
          <span className="tag">{t.tag}</span>
          <h2 className="heading text-balance">{t.heading}</h2>
          <p className="lead">{t.lead}</p>
          {showContactButton && (
            <LocaleLink href="/contact" className="btn btn-pine mt-8">
              {t.ask} <ArrowUpRight className="size-4" />
            </LocaleLink>
          )}
        </Reveal>

        <Reveal delay={0.15} y={32} blur={6}>
          <FaqAccordion faqs={getFaqs(locale)} />
        </Reveal>
      </div>
    </section>
  );
}
