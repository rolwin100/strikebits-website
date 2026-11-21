import Reveal from "../Reveal";
import AppCard from "./AppCard";
import { getPortfolio } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

// Pastels rotate in the site order: sage, butter, peach, sky
const tones = ["bg-sage", "bg-butter", "bg-peach", "bg-sky"];

/** Grid of StrikeBits' own Shopify apps. */
export default function AppShowcase({ locale }: { locale: Locale }) {
  const t = getMessages(locale).portfolio;
  const { apps } = getPortfolio(locale);

  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <span className="tag">{t.ourApps}</span>
          <h2 className="heading">
            {t.builtByLight}
            <span className="font-bold">{t.builtByBold}</span>
          </h2>
          <p className="lead">{t.builtByText}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.08} className="h-full">
              <AppCard app={app} tone={tones[i % tones.length]} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
