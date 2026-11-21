import type { LucideIcon } from "lucide-react";
import { serviceIcons } from "@/data/serviceIcons";

/** A top-level menu item. The label comes from messages (nav.<key>). */
export type NavLink = { key: "home" | "portfolio" | "about" | "contact"; href: string };

/** A services dropdown item. The server fills in the text for the current language. */
export type HeaderService = { slug: string; label: string; text: string; href: string };

export const serviceIcon = (slug: string): LucideIcon | undefined => serviceIcons[slug];

// Edit menu items here
export const links: NavLink[] = [
  { key: "home", href: "/" },
  // "Services" dropdown is inserted after Home
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const cta = { key: "getQuote", href: "/contact" } as const;
