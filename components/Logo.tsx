"use client";

import { Zap } from "lucide-react";
import { LocaleLink, useMessages } from "@/i18n/client";

export default function Logo({ light = false }: { light?: boolean }) {
  const m = useMessages();

  return (
    <LocaleLink href="/" className="inline-flex items-center gap-2.5" aria-label={m.nav.homeAria}>
      <span className="grid size-9 place-items-center rounded-xl bg-lime text-pine-900">
        <Zap className="size-5" strokeWidth={2.2} fill="currentColor" />
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        StrikeBits
      </span>
    </LocaleLink>
  );
}
