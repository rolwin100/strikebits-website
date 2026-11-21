import { ArrowUpRight, Check, Clock } from "lucide-react";
import type { AppStatus, PortfolioApp } from "@/data/portfolio";
import AppLogo from "./AppLogo";
import type { Locale } from "@/i18n/config";
import { getMessages, type Messages } from "@/i18n/messages";

/** Status text for an app: the full label, or a short form for tight spaces (hero quick links) */
export function statusTexts(t: Messages["portfolio"]): { label: Record<AppStatus, string>; short: Record<AppStatus, string> } {
  return {
    label: { live: t.statusLive, "coming-soon": t.statusComingSoon },
    short: { live: t.statusLiveShort, "coming-soon": t.statusComingSoon },
  };
}

/** One app in the portfolio grid. `tone` is the pastel background class. */
export default function AppCard({ app, tone, locale }: { app: PortfolioApp; tone: string; locale: Locale }) {
  const t = getMessages(locale).portfolio;
  const status = statusTexts(t).label;
  const live = app.status === "live";

  return (
    <article id={app.slug} className={`card-pastel ${tone} flex h-full scroll-mt-28 flex-col`}>
      <div className="flex items-center gap-4">
        <AppLogo app={app} size={64} className="size-16 rounded-2xl" />
        <div>
          <h3 className="text-2xl font-bold">{app.name}</h3>
          <span
            className={`mt-1.5 inline-flex items-center gap-1.5 rounded-pill px-2.5 py-0.5 text-xs font-medium ${
              live ? "bg-pine-800 text-lime" : "bg-white/70 text-ink-soft"
            }`}
          >
            {live ? <span className="size-1.5 rounded-full bg-lime" /> : <Clock className="size-3" />}
            {status[app.status]}
          </span>
        </div>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-ink">{app.tagline}</p>

      <ul className="mt-6 space-y-3 text-ink-soft">
        {app.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink/20">
              <Check className="size-3 text-ink" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Button sits at the bottom so both cards line up */}
      <div className="mt-auto pt-8">
        {live && app.appStoreUrl ? (
          <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-pine">
            {t.viewOnAppStore} <ArrowUpRight className="size-4" />
          </a>
        ) : (
          <span aria-disabled="true" className="btn btn-line cursor-not-allowed text-ink-muted hover:border-line">
            {t.statusComingSoon}
          </span>
        )}
      </div>
    </article>
  );
}
