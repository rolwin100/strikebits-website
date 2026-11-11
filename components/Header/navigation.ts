import { services as allServices } from "@/data/services";
import type { LucideIcon } from "lucide-react";

export type NavLink = { label: string; href: string };
export type ServiceLink = NavLink & { icon: LucideIcon; text: string };

// Services dropdown items come from data/services.ts
export const services: ServiceLink[] = allServices.map((s) => ({
  label: s.title,
  href: s.href,
  icon: s.icon,
  text: s.short,
}));

// Edit menu items here
export const links: NavLink[] = [
  { label: "Home", href: "/" },
  // "Services" dropdown is inserted after Home
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const cta: NavLink = { label: "Get a quote", href: "/contact" };
