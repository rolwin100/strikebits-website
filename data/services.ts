import {
  Accessibility,
  Activity,
  ArrowLeftRight,
  Blocks,
  Bug,
  Building,
  Code,
  CreditCard,
  Crown,
  Gauge,
  Globe,
  LayoutDashboard,
  LayoutTemplate,
  LifeBuoy,
  MessagesSquare,
  MousePointerClick,
  Palette,
  Plug,
  Puzzle,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  SquarePen,
  Store,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServiceFeature = { icon: LucideIcon; title: string; text: string };

export type Service = {
  /** Used in the page address: /services/<slug> */
  slug: string;
  title: string;
  /** One-liner used in the header dropdown */
  short: string;
  /** Longer description used on service cards */
  description: string;
  /** Checklist shown on service cards */
  points: string[];
  icon: LucideIcon;
  href: string;
  /** Content for the service's own page */
  page: {
    /** [light part, bold part] of the page heading */
    headline: [string, string];
    intro: string;
    features: ServiceFeature[];
    /** "This is a good fit if…" cards */
    fits: { title: string; text: string }[];
    faqs: { q: string; a: string }[];
  };
};

// Single source for services: used by the header dropdown, the service cards,
// the footer and each service page. The first service is the large featured card.
//
// TODO: the page content (features, "good fit" cards and FAQs) is draft copy
// describing what these Shopify services normally involve. Check that each item
// matches what you actually offer, and remove anything that doesn't.
const list: Omit<Service, "href">[] = [
  {
    slug: "shopify-app-development",
    title: "Shopify app development",
    short: "Private and public App Store apps",
    description:
      "Custom apps that automate your operations, connect your tools or launch on the Shopify App Store, from idea to approval.",
    points: [
      "Private apps for internal workflows",
      "Public apps built for App Store review",
      "Third-party and ERP integrations",
      "Checkout, Flow and admin extensions",
    ],
    icon: Code,
    page: {
      headline: ["Custom Shopify apps,", "built for your business."],
      intro:
        "Our team specializes in building powerful, scalable and secure Shopify apps tailored to your unique business requirements.",
      features: [
        {
          icon: LayoutDashboard,
          title: "Embedded admin apps",
          text: "Apps that live inside the Shopify admin, built with Polaris and App Bridge so they feel native to the people using them.",
        },
        {
          icon: Workflow,
          title: "Custom apps for one store",
          text: "Tools built around how you operate: automate manual work, sync data and add features Shopify doesn't have.",
        },
        {
          icon: ShieldCheck,
          title: "Public App Store apps",
          text: "Apps built to Shopify's requirements, with support through submission and app review.",
        },
        {
          icon: Plug,
          title: "Integrations",
          text: "Connect Shopify to your ERP, CRM, warehouse or accounting system through the Admin API and webhooks.",
        },
        {
          icon: Blocks,
          title: "Extensions",
          text: "Checkout, theme, admin and Shopify Flow extensions that add features exactly where they're needed.",
        },
        {
          icon: CreditCard,
          title: "App billing",
          text: "Subscription and usage-based charges set up through Shopify's Billing API.",
        },
      ],
      fits: [
        {
          title: "You're doing repetitive work by hand",
          text: "Order tagging, inventory syncing or reporting that an app could handle automatically.",
        },
        {
          title: "No existing app quite fits",
          text: "You need a feature that App Store apps only half cover, or one that is specific to how you operate.",
        },
        {
          title: "You have an app idea",
          text: "You want to launch a product for other merchants on the Shopify App Store.",
        },
      ],
      faqs: [
        {
          q: "What's the difference between a custom app and a public app?",
          a: "A custom app is built for a single store and installed directly, without going through the App Store. A public app can be installed by any merchant and must pass Shopify's app review before it is listed.",
        },
        {
          q: "Can you submit my app to the Shopify App Store?",
          a: "Yes. We build to Shopify's app requirements and work with you through submission and review, including any changes the review team asks for.",
        },
        {
          q: "Which technologies do you use?",
          a: "We build with Shopify's own tools, including the GraphQL Admin API, App Bridge and Polaris, on a JavaScript and TypeScript stack. We'll recommend the right setup for your project.",
        },
      ],
    },
  },
  {
    slug: "shopify-store-development",
    title: "Shopify store development",
    short: "Custom stores built to convert",
    description: "Complete store builds and overhauls, designed around your brand and your customers.",
    points: ["Store setup and migrations", "Conversion-focused design", "App setup and integrations"],
    icon: Store,
    page: {
      headline: ["Shopify stores", "built to convert."],
      intro:
        "We design and build complete Shopify stores around your brand, your products and the way your customers shop.",
      features: [
        {
          icon: Store,
          title: "Store setup",
          text: "Products, collections, payments, shipping and taxes configured properly from day one.",
        },
        {
          icon: ArrowLeftRight,
          title: "Migrations",
          text: "Move from WooCommerce, Magento or another platform with your products, customers and order history.",
        },
        {
          icon: MousePointerClick,
          title: "Conversion-focused design",
          text: "Clear navigation, product pages and cart, designed to take shoppers from landing to checkout.",
        },
        {
          icon: Smartphone,
          title: "Mobile first",
          text: "Layouts designed for phones first, where most shopping now happens.",
        },
        {
          icon: Plug,
          title: "App setup and integrations",
          text: "The right apps for reviews, subscriptions, email and more, chosen and configured without slowing the store down.",
        },
        {
          icon: Search,
          title: "SEO foundations",
          text: "Clean URLs, redirects, metadata and structured data, so search engines can find and understand your store.",
        },
      ],
      fits: [
        { title: "You're launching a new brand", text: "You need a store that is ready to sell from the first day." },
        {
          title: "You're moving to Shopify",
          text: "You've outgrown another platform and want to switch without losing data or search rankings.",
        },
        {
          title: "Your current store holds you back",
          text: "It's slow, hard to manage or doesn't reflect your brand any more.",
        },
      ],
      faqs: [
        {
          q: "Can you migrate my existing store to Shopify?",
          a: "Yes. We move your products, customers and order history, and set up redirects from your old URLs to protect your search rankings.",
        },
        {
          q: "Will I be able to update the store myself?",
          a: "Yes. We build pages from sections you can edit in Shopify's theme editor, and we train your team before handover, so day-to-day changes don't need a developer.",
        },
        {
          q: "Do you design the store, or only build it?",
          a: "Both. We can design your store from scratch, or build from designs you already have.",
        },
      ],
    },
  },
  {
    slug: "shopify-theme-development",
    title: "Shopify theme development",
    short: "Bespoke, fast-loading themes",
    description: "Custom and customised themes that look unique and load fast on every device.",
    points: ["Custom Online Store 2.0 themes", "Sections your team can edit", "Core Web Vitals tuning"],
    icon: Palette,
    page: {
      headline: ["Shopify themes", "made for your brand."],
      intro:
        "Custom and customised Shopify themes that look like your brand, load fast and stay easy for your team to edit.",
      features: [
        {
          icon: Palette,
          title: "Custom themes",
          text: "Themes designed and built from scratch on Shopify's Online Store 2.0 architecture.",
        },
        {
          icon: SquarePen,
          title: "Theme customisation",
          text: "New sections, templates and features added to the theme you already use.",
        },
        {
          icon: LayoutTemplate,
          title: "Editable sections",
          text: "Sections and blocks on every page, so your team can rearrange and edit content in the theme editor.",
        },
        {
          icon: Gauge,
          title: "Performance",
          text: "Lean code and optimised images and scripts, tuned for Core Web Vitals.",
        },
        {
          icon: Accessibility,
          title: "Accessibility",
          text: "Semantic markup, keyboard support and readable contrast, so everyone can shop.",
        },
        {
          icon: Puzzle,
          title: "App blocks and metafields",
          text: "Support for app blocks, metafields and metaobjects, so apps and structured content fit in cleanly.",
        },
      ],
      fits: [
        {
          title: "Your store looks like everyone else's",
          text: "You want a storefront that is recognisably your brand.",
        },
        { title: "Your store is slow", text: "Heavy theme code and scripts are costing you speed." },
        {
          title: "Your theme is missing a feature",
          text: "You need a section, template or layout your current theme doesn't offer.",
        },
      ],
      faqs: [
        {
          q: "Should I get a custom theme or customise an existing one?",
          a: "Customising an existing theme is quicker and suits most stores. A fully custom theme makes sense when your design or features go well beyond what an existing theme offers. We'll recommend one after looking at your store.",
        },
        {
          q: "Will theme work affect my live store?",
          a: "No. We work on an unpublished copy of your theme and only publish once you've approved it.",
        },
        {
          q: "Will my team be able to edit the theme?",
          a: "Yes. We build with sections and blocks, so your team can change content and layouts in Shopify's theme editor without touching code.",
        },
      ],
    },
  },
  {
    slug: "shopify-plus-development",
    title: "Shopify Plus development",
    short: "Solutions for high-volume brands",
    description: "Advanced builds for growing brands that need more than an off-the-shelf store.",
    points: ["B2B and wholesale setups", "Checkout customisation", "Shopify Flow automations"],
    icon: Crown,
    page: {
      headline: ["Shopify Plus builds", "for high-volume brands."],
      intro:
        "Advanced Shopify Plus development for brands that have outgrown a standard store: custom checkout, B2B, automation and integrations.",
      features: [
        {
          icon: ShoppingCart,
          title: "Checkout customisation",
          text: "Checkout UI extensions and Shopify Functions for custom fields, upsells, discounts, and payment and delivery rules.",
        },
        {
          icon: Building,
          title: "B2B and wholesale",
          text: "Company accounts, customer-specific price lists, payment terms and quantity rules with B2B on Shopify.",
        },
        {
          icon: Workflow,
          title: "Automation",
          text: "Shopify Flow workflows and Launchpad schedules that take routine tasks and campaign launches off your team.",
        },
        {
          icon: Globe,
          title: "International selling",
          text: "Shopify Markets set up for local currencies, languages, domains and duties.",
        },
        {
          icon: Plug,
          title: "Enterprise integrations",
          text: "Reliable connections to your ERP, order management and product information systems.",
        },
        {
          icon: ArrowLeftRight,
          title: "Migration to Plus",
          text: "Move from Magento, another enterprise platform or a standard Shopify plan with minimal disruption.",
        },
      ],
      fits: [
        {
          title: "Your checkout needs to do more",
          text: "You need custom fields, rules or offers the standard checkout doesn't allow.",
        },
        {
          title: "You sell wholesale and retail",
          text: "You want B2B and direct-to-consumer running from one Shopify store.",
        },
        {
          title: "You're expanding internationally",
          text: "You need local currencies, languages and pricing for each market.",
        },
      ],
      faqs: [
        {
          q: "Do I need Shopify Plus?",
          a: "Plus is aimed at high-volume merchants. It adds deeper checkout customisation, B2B features, more automation and higher API limits. If you're unsure, we'll look at what you need and tell you honestly whether a standard plan would do.",
        },
        {
          q: "Can you customise the Shopify checkout?",
          a: "Yes, on Shopify Plus. We use Checkout UI extensions and Shopify Functions, which are Shopify's supported, upgrade-safe way to customise checkout.",
        },
        {
          q: "Can you move our old checkout.liquid customisations?",
          a: "Yes. Shopify has retired checkout.liquid, and we rebuild those customisations with checkout extensibility.",
        },
      ],
    },
  },
  {
    slug: "ongoing-support",
    title: "Ongoing support",
    short: "Maintenance, updates and monitoring",
    description: "We keep your store and apps healthy, secure and up to date after launch.",
    points: ["Bug fixes and updates", "Performance monitoring", "Monthly support plans"],
    icon: LifeBuoy,
    page: {
      headline: ["Ongoing support", "for your store and apps."],
      intro:
        "We keep your Shopify store and apps healthy after launch, with fixes, updates and improvements handled by people who know your setup.",
      features: [
        { icon: Bug, title: "Bug fixes", text: "Problems found, fixed and tested before they cost you sales." },
        {
          icon: RefreshCw,
          title: "Shopify and API updates",
          text: "Shopify releases a new API version every quarter. We keep your apps and integrations on supported versions.",
        },
        {
          icon: Activity,
          title: "Monitoring",
          text: "We watch for errors and failed integrations, so issues are caught early.",
        },
        {
          icon: Gauge,
          title: "Performance",
          text: "Regular speed checks and tuning, so your store stays fast as it grows.",
        },
        {
          icon: Wrench,
          title: "Small improvements",
          text: "New sections, tweaks and features, without starting a new project each time.",
        },
        {
          icon: MessagesSquare,
          title: "A team that knows your store",
          text: "You deal with people who already understand your setup, not a new developer every time.",
        },
      ],
      fits: [
        {
          title: "You've just launched",
          text: "You want a team on hand for fixes and improvements after going live.",
        },
        {
          title: "Your developer has moved on",
          text: "You've inherited a store or app and need someone to look after it.",
        },
        {
          title: "You want steady improvement",
          text: "You'd like your store to keep getting better without running a big project.",
        },
      ],
      faqs: [
        {
          q: "Do you support stores and apps you didn't build?",
          a: "Yes. We start with a review of the existing code and setup, so we know what we're taking on.",
        },
        {
          q: "How does a support plan work?",
          a: "Plans are monthly. We agree what's covered, such as fixes, updates and a set amount of improvement work, and how to reach us.",
        },
        {
          q: "What happens when Shopify changes something?",
          a: "Shopify retires older API versions on a fixed schedule. We track those changes and update your apps and theme before they're affected.",
        },
      ],
    },
  },
];

export const services: Service[] = list.map((service) => ({ ...service, href: `/services/${service.slug}` }));

export const getService = (slug: string) => services.find((service) => service.slug === slug);
