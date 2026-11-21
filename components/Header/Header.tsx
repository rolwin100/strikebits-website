"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown, LayoutGrid, Menu, X } from "lucide-react";
import Logo from "../Logo";
import { LocaleLink, useMessages } from "@/i18n/client";
import { parsePathname } from "@/i18n/config";
import { LanguageDropdown } from "./LanguageMenu";
import { cta, links, serviceIcon, type HeaderService } from "./navigation";

// The address without its language prefix, so "/de/about/" counts as "/about/"
const isActive = (pathname: string, href: string) => {
  const { path } = parsePathname(pathname);
  return href === "/" ? path === "/" : path.startsWith(href);
};

const linkBase = "rounded-pill px-3.5 py-1.5 text-sm font-medium transition";
const linkState = (active: boolean) =>
  active ? "bg-lime-soft text-pine-900" : "text-ink-soft hover:bg-pine-50 hover:text-ink";

/* ---------------- Desktop ---------------- */

function ServicesDropdown({ active, services }: { active: boolean; services: HeaderService[] }) {
  const m = useMessages();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

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

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`${linkBase} ${linkState(active)} inline-flex items-center gap-1`}
      >
        {m.nav.services}
        <ChevronDown className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 w-88 -translate-x-1/2 pt-3"
          >
            <ul className="rounded-card border border-line bg-white p-2 shadow-xl shadow-pine-900/10">
              {services.map((s) => {
                const Icon = serviceIcon(s.slug);
                return (
                <li key={s.slug}>
                  <LocaleLink
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-mist"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700 transition group-hover:bg-lime group-hover:text-pine-900">
                      {Icon && <Icon className="size-5" />}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{s.label}</span>
                      <span className="block text-xs text-ink-muted">{s.text}</span>
                    </span>
                  </LocaleLink>
                </li>
                );
              })}
              <li className="mt-1 border-t border-line pt-1">
                <LocaleLink
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-semibold text-pine-700 transition hover:bg-mist"
                >
                  {m.nav.viewAllServices}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </LocaleLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function DesktopLinks({ pathname, services }: { pathname: string; services: HeaderService[] }) {
  const m = useMessages();
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {links.map((link, i) => (
        <FragmentWithDropdown
          key={link.href}
          showDropdown={i === 0}
          servicesActive={isActive(pathname, "/services")}
          services={services}
        >
          <li>
            <LocaleLink href={link.href} className={`${linkBase} ${linkState(isActive(pathname, link.href))}`}>
              {m.nav[link.key]}
            </LocaleLink>
          </li>
        </FragmentWithDropdown>
      ))}
    </ul>
  );
}

function FragmentWithDropdown({
  children, showDropdown, servicesActive, services,
}: {
  children: React.ReactNode; showDropdown: boolean; servicesActive: boolean; services: HeaderService[];
}) {
  return (
    <>
      {children}
      {showDropdown && <ServicesDropdown active={servicesActive} services={services} />}
    </>
  );
}

/* ---------------- Mobile ---------------- */

// Same tile as the desktop dropdown, a size smaller
const mobileIconTile =
  "grid size-8 shrink-0 place-items-center rounded-lg bg-pine-50 text-pine-700 transition group-hover:bg-lime group-hover:text-pine-900";

function MobileLinks({
  pathname, onNavigate, services,
}: {
  pathname: string; onNavigate: () => void; services: HeaderService[];
}) {
  const m = useMessages();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <ul className="space-y-1">
      {links.map((link, i) => (
        <FragmentWithMobileServices
          key={link.href}
          show={i === 0}
          open={servicesOpen}
          onToggle={() => setServicesOpen(!servicesOpen)}
          onNavigate={onNavigate}
          services={services}
        >
          <li>
            <LocaleLink
              href={link.href}
              onClick={onNavigate}
              className={`block rounded-2xl px-4 py-3 font-medium ${
                isActive(pathname, link.href) ? "bg-lime-soft text-pine-900" : "hover:bg-mist"
              }`}
            >
              {m.nav[link.key]}
            </LocaleLink>
          </li>
        </FragmentWithMobileServices>
      ))}
    </ul>
  );
}

function FragmentWithMobileServices({
  children, show, open, onToggle, onNavigate, services,
}: {
  children: React.ReactNode; show: boolean; open: boolean; onToggle: () => void; onNavigate: () => void;
  services: HeaderService[];
}) {
  const m = useMessages();
  return (
    <>
      {children}
      {show && (
        <li>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="flex w-full items-center justify-between rounded-2xl px-4 py-3 font-medium hover:bg-mist"
          >
            {m.nav.services}
            <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <ul className="mb-2 ml-4 space-y-1 border-l border-line pl-3">
              <li>
                <LocaleLink
                  href="/services"
                  onClick={onNavigate}
                  className="group flex items-center gap-3 rounded-xl px-2 py-1.5 text-sm font-semibold text-pine-700 hover:bg-mist"
                >
                  <span className={mobileIconTile}>
                    <LayoutGrid className="size-4" />
                  </span>
                  {m.nav.allServices}
                </LocaleLink>
              </li>
              {services.map((s) => {
                const Icon = serviceIcon(s.slug);
                return (
                <li key={s.slug}>
                  <LocaleLink
                    href={s.href}
                    onClick={onNavigate}
                    className="group flex items-center gap-3 rounded-xl px-2 py-1.5 text-sm text-ink-soft hover:bg-mist hover:text-ink"
                  >
                    <span className={mobileIconTile}>
                      {Icon && <Icon className="size-4" />}
                    </span>
                    {s.label}
                  </LocaleLink>
                </li>
                );
              })}
            </ul>
          )}
        </li>
      )}
    </>
  );
}

/* ------- Active-page wrappers (usePathname needs Suspense with cacheComponents) ------- */

function ActiveDesktopLinks({ services }: { services: HeaderService[] }) {
  return <DesktopLinks pathname={usePathname()} services={services} />;
}

function ActiveMobileLinks({ onNavigate, services }: { onNavigate: () => void; services: HeaderService[] }) {
  return <MobileLinks pathname={usePathname()} onNavigate={onNavigate} services={services} />;
}

/* ---------------- Header ---------------- */

export default function Header({ services }: { services: HeaderService[] }) {
  const m = useMessages();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="wrap">
      <nav
        aria-label={m.nav.ariaLabel}
        className={`flex items-center justify-between gap-4 rounded-pill border bg-white/85 py-2 pr-2 pl-5 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-line shadow-lg shadow-pine-900/5" : "border-line/70"
        }`}
      >
        <Logo />

        <Suspense fallback={<DesktopLinks pathname="" services={services} />}>
          <ActiveDesktopLinks services={services} />
        </Suspense>

        <div className="flex items-center gap-2">
          <LanguageDropdown />
          <LocaleLink href={cta.href} className="btn btn-pine hidden py-2.5 sm:inline-flex">
            {m.nav.getQuote} <ArrowUpRight className="size-4" />
          </LocaleLink>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? m.nav.closeMenu : m.nav.openMenu}
            aria-expanded={menuOpen}
            className="grid size-10 place-items-center rounded-full border border-line text-ink transition hover:bg-mist lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-card border border-line bg-white p-3 shadow-xl shadow-pine-900/10 lg:hidden"
          >
            <Suspense fallback={<MobileLinks pathname="" onNavigate={closeMenu} services={services} />}>
              <ActiveMobileLinks onNavigate={closeMenu} services={services} />
            </Suspense>
            <LocaleLink href={cta.href} onClick={closeMenu} className="btn btn-pine mt-3 w-full justify-center sm:hidden">
              {m.nav.getQuote} <ArrowUpRight className="size-4" />
            </LocaleLink>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
