// Content for the /portfolio page: StrikeBits' own Shopify apps.

import type { LucideIcon } from "lucide-react";

export type AppStatus = "live" | "coming-soon";

export type PortfolioApp = {
  /** Stable key, also used for anchors (#sugar-rush) */
  slug: string;
  name: string;
  /** One-line pitch shown under the name */
  tagline: string;
  /** Checklist shown on the card */
  features: string[];
  status: AppStatus;
  /** App icon in /public/apps (square, at least 256×256) */
  logo?: string;
  /** Set for a logo that isn't a full square app icon: it's fitted inside a padded white tile */
  logoInset?: boolean;
  /** Shown instead of `logo` until the real one exists: an icon on a coloured tile */
  placeholder?: { icon: LucideIcon; tone: string };
  /** Shopify App Store listing; omit until the app is published */
  appStoreUrl?: string;
};

export const portfolioHero = {
  tag: "Portfolio",
  /** [light part, bold part] of the heading */
  headline: ["Apps we've", "built and shipped."] as [string, string],
  intro:
    "We build and run our own apps on the Shopify App Store. Each one does one job well, installs in minutes and is supported by the people who built it.",
};

export const apps: PortfolioApp[] = [
  {
    slug: "sugar-rush",
    name: "Sugar Rush",
    // Taken from the Sugar Rush App Store listing
    tagline: "Upsell and cross-sell in a popup at add to cart. Shoppers add discounted extras with one tap.",
    features: [
      "Add-to-cart popup with one-tap adds and a variant picker",
      "Upsell widgets on product pages, in the cart and in a slide-out cart drawer",
      "Automatic percentage or fixed discounts at checkout",
      "Views, adds and revenue tracked for every upsell",
    ],
    status: "live",
    logo: "/apps/sugar-rush.png",
    appStoreUrl: "https://apps.shopify.com/sugar-rush-upsell",
  },
  {
    slug: "sugar-ship",
    name: "Sugar Ship",
    // TODO: confirm the final name and pitch before launch
    tagline: "Live carrier shipping rates at checkout, for merchants shipping anywhere in the world.",
    features: [
      "Real-time rates from multiple carriers",
      "Works for stores in any country",
      "Available in English, French and German",
    ],
    status: "coming-soon",
    logo: "/apps/sugar-ship.png",
  },
];

export const portfolioCta = {
  /** [light part, bold part] of the heading */
  headline: ["Need a custom app?", "Let's build it."] as [string, string],
  text: "Tell us what your store needs. We'll scope it, build it and take it through App Store review if it's going public.",
  button: { label: "Get a quote", href: "/contact" },
};
