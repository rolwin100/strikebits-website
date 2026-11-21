"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { locales, localeNames, localizedHref, parsePathname, type Locale } from "@/i18n/config";
import { useLocale, useMessages } from "@/i18n/client";

/** The same page in another language: /about/ -> /de/about/ */
const hrefFor = (pathname: string, target: Locale) => localizedHref(parsePathname(pathname).path, target);

type Variant = {
  /** "light" for the white header, "dark" for the pine footer */
  tone?: "light" | "dark";
  /** Which way the list opens: down from the header, up from the bottom of the footer */
  direction?: "down" | "up";
  /** Show the full name ("English") instead of the short code ("EN") on the button */
  fullName?: boolean;
};

const buttonTone = {
  light: "border-line text-ink-soft hover:bg-mist hover:text-ink",
  dark: "border-white/15 text-pine-100 hover:border-lime hover:text-white",
};

function Dropdown({ pathname, tone = "light", direction = "down", fullName = false }: { pathname: string } & Variant) {
  const m = useMessages();
  const current = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const { native, short } = localeNames[current];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${m.language.switchTo}: ${native}`}
        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-pill border px-3 py-2.5 text-sm font-medium transition ${buttonTone[tone]}`}
      >
        <Globe className="size-4" />
        {fullName ? native : short}
        <ChevronDown
          className={`size-3.5 transition-transform duration-300 ${open !== (direction === "up") ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul
          className={`absolute right-0 z-20 min-w-40 rounded-2xl border border-line bg-white p-1.5 shadow-xl shadow-pine-900/10 ${
            direction === "up" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {locales.map((locale) => {
            const active = locale === current;
            return (
              <li key={locale}>
                {/* Plain links on purpose: English and the other languages are separate page trees,
                    so switching is a normal page load */}
                <a
                  href={hrefFor(pathname, locale)}
                  hrefLang={locale}
                  lang={locale}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-6 rounded-xl px-3 py-2 text-sm transition ${
                    active ? "bg-lime-soft font-semibold text-pine-900" : "text-ink-soft hover:bg-mist hover:text-ink"
                  }`}
                >
                  {localeNames[locale].native}
                  {active && <Check className="size-4" />}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ActiveDropdown(props: Variant) {
  return <Dropdown pathname={usePathname()} {...props} />;
}

/** Language menu ("🌐 EN ▾"). Used in the header and the footer. usePathname needs Suspense. */
export function LanguageDropdown(props: Variant) {
  return (
    <Suspense fallback={<Dropdown pathname="/" {...props} />}>
      <ActiveDropdown {...props} />
    </Suspense>
  );
}
