"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "../Logo";
import { cta, links, services } from "./navigation";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const linkBase = "rounded-pill px-3.5 py-1.5 text-sm font-medium transition";
const linkState = (active: boolean) =>
  active ? "bg-lime-soft text-pine-900" : "text-ink-soft hover:bg-pine-50 hover:text-ink";

/* ---------------- Desktop ---------------- */

function ServicesDropdown({ active }: { active: boolean }) {
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
        Services
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
              {services.map(({ icon: Icon, ...s }) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-mist"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-pine-50 text-pine-700 transition group-hover:bg-lime group-hover:text-pine-900">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{s.label}</span>
                      <span className="block text-xs text-ink-muted">{s.text}</span>
                    </span>
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-line pt-1">
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-semibold text-pine-700 transition hover:bg-mist"
                >
                  View all services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function DesktopLinks({ pathname }: { pathname: string }) {
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {links.map((link, i) => (
        <FragmentWithDropdown key={link.href} showDropdown={i === 0} servicesActive={pathname.startsWith("/services")}>
          <li>
            <Link href={link.href} className={`${linkBase} ${linkState(isActive(pathname, link.href))}`}>
              {link.label}
            </Link>
          </li>
        </FragmentWithDropdown>
      ))}
    </ul>
  );
}

function FragmentWithDropdown({
  children, showDropdown, servicesActive,
}: {
  children: React.ReactNode; showDropdown: boolean; servicesActive: boolean;
}) {
  return (
    <>
      {children}
      {showDropdown && <ServicesDropdown active={servicesActive} />}
    </>
  );
}

/* ---------------- Mobile ---------------- */

function MobileLinks({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
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
        >
          <li>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={`block rounded-2xl px-4 py-3 font-medium ${
                isActive(pathname, link.href) ? "bg-lime-soft text-pine-900" : "hover:bg-mist"
              }`}
            >
              {link.label}
            </Link>
          </li>
        </FragmentWithMobileServices>
      ))}
    </ul>
  );
}

function FragmentWithMobileServices({
  children, show, open, onToggle, onNavigate,
}: {
  children: React.ReactNode; show: boolean; open: boolean; onToggle: () => void; onNavigate: () => void;
}) {
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
            Services
            <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <ul className="mb-2 ml-4 space-y-1 border-l border-line pl-3">
              <li>
                <Link href="/services" onClick={onNavigate} className="block rounded-xl px-3 py-2 text-sm font-semibold text-pine-700 hover:bg-mist">
                  All services
                </Link>
              </li>
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} onClick={onNavigate} className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-mist hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      )}
    </>
  );
}

/* ------- Active-page wrappers (usePathname needs Suspense with cacheComponents) ------- */

function ActiveDesktopLinks() {
  return <DesktopLinks pathname={usePathname()} />;
}

function ActiveMobileLinks({ onNavigate }: { onNavigate: () => void }) {
  return <MobileLinks pathname={usePathname()} onNavigate={onNavigate} />;
}

/* ---------------- Header ---------------- */

export default function Header() {
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
        aria-label="Main"
        className={`flex items-center justify-between gap-4 rounded-pill border bg-white/85 py-2 pr-2 pl-5 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-line shadow-lg shadow-pine-900/5" : "border-line/70"
        }`}
      >
        <Logo />

        <Suspense fallback={<DesktopLinks pathname="" />}>
          <ActiveDesktopLinks />
        </Suspense>

        <div className="flex items-center gap-2">
          <Link href={cta.href} className="btn btn-pine hidden py-2.5 sm:inline-flex">
            {cta.label} <ArrowUpRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            <Suspense fallback={<MobileLinks pathname="" onNavigate={closeMenu} />}>
              <ActiveMobileLinks onNavigate={closeMenu} />
            </Suspense>
            <Link href={cta.href} onClick={closeMenu} className="btn btn-pine mt-3 w-full justify-center sm:hidden">
              {cta.label} <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
