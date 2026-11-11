import { ArrowUpRight, Check, Clock } from "lucide-react";
import type { AppStatus, PortfolioApp } from "@/data/portfolio";
import AppLogo from "./AppLogo";

export const statusLabel: Record<AppStatus, string> = {
  live: "Live on the App Store",
  "coming-soon": "Coming soon",
};

/** Short form for tight spaces (hero quick links) */
export const statusShort: Record<AppStatus, string> = {
  live: "Live",
  "coming-soon": "Coming soon",
};

/** One app in the portfolio grid. `tone` is the pastel background class. */
export default function AppCard({ app, tone }: { app: PortfolioApp; tone: string }) {
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
            {statusLabel[app.status]}
          </span>
        </div>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-ink">{app.tagline}</p>

      <ul className="mt-6 space-y-3 text-ink-soft">
        {app.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
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
            View on Shopify App Store <ArrowUpRight className="size-4" />
          </a>
        ) : (
          <span aria-disabled="true" className="btn btn-line cursor-not-allowed text-ink-muted hover:border-line">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}
