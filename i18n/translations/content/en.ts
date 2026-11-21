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
  Handshake,
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
  Target,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import type { LegalDocument } from "@/components/Legal";
import type { Faq } from "@/data/faqs";
import type { Post } from "@/data/posts";
import type { PortfolioApp } from "@/data/portfolio";
import type { Service } from "@/data/services";
import type { TeamMember, Value } from "@/data/about";
import { site } from "@/data/site";

/**
 * English page content: the source for every language.
 *
 * - This is the one place to edit English copy for services, FAQs, blog posts, the About page,
 *   the portfolio and the privacy policy. (Interface text such as buttons and headings is in
 *   i18n/translations/messages/en.ts.)
 * - German and French only list the fields they translate, in de.ts and fr.ts. Anything they leave
 *   out stays English, and lists are matched by position, so keep the same order in every language.
 * - Icons, colours, links and photo paths below are not text; translations leave them alone.
 */

// ---------------------------------------------------------------- Services (data/services.ts adds the page links)
// Single source for services: used by the header dropdown, the service cards,
// the footer and each service page. The first service is the large featured card.
//
// TODO: the page content (features, "good fit" cards and FAQs) is draft copy
// describing what these Shopify services normally involve. Check that each item
// matches what you actually offer, and remove anything that doesn't.
const services: Omit<Service, "href">[] = [
  {
    slug: "shopify-app-development",
    title: "Shopify app development",
    topic: "Shopify app development",
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
    topic: "Shopify store development",
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
    topic: "Shopify theme development",
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
    topic: "Shopify Plus development",
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
    topic: "ongoing support",
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

// ---------------------------------------------------------------- FAQs
// Edit FAQ questions and answers here.
// TODO: check the timelines and details match how you actually work.
const faqs: Faq[] = [
  {
    q: "How long does it take to build a custom Shopify app?",
    a: "A focused private app usually takes 2–4 weeks. A public app for the Shopify App Store typically takes 6–12 weeks, including time for Shopify's app review. We give you a clear timeline after our discovery call.",
  },
  {
    q: "How much does a Shopify project cost?",
    a: "It depends on the scope. After a short discovery call we send a fixed quote, so you know the full cost before any work starts. Ongoing support is available as a simple monthly plan.",
  },
  {
    q: "Do you work with Shopify Plus stores?",
    a: "Yes. We build for Shopify Plus brands, including checkout customisation, B2B and wholesale setups, Shopify Flow automations and custom integrations.",
  },
  {
    q: "Can you redesign or migrate my existing store?",
    a: "Yes. We can redesign your current Shopify store or migrate you from another platform, moving your products, customers and order history while protecting your search rankings.",
  },
  {
    q: "Will I own the code and the app?",
    a: "Yes. Once the project is paid, you own the code, designs and app. We hand over everything, with documentation, so you're never locked in.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We offer maintenance plans that cover bug fixes, Shopify updates, performance monitoring and small improvements, so your store and apps keep running smoothly.",
  },
];

// ---------------------------------------------------------------- Blog posts
// TODO: these are SAMPLE posts — replace with your real articles.
const posts: Post[] = [
  {
    slug: "speed-up-your-shopify-store",
    title: "7 ways to speed up your Shopify store",
    excerpt: "Practical fixes for images, apps and theme code that cut load times and lift conversions.",
    category: "Performance",
    date: "2026-10-28",
    readTime: "6 min read",
    cover: { color: "bg-sage", icon: Zap },
  },
  {
    slug: "public-vs-private-shopify-apps",
    title: "Public vs private Shopify apps: which do you need?",
    excerpt: "How the two app types differ in cost, review and maintenance, and when each one makes sense.",
    category: "Shopify apps",
    date: "2026-10-14",
    readTime: "5 min read",
    cover: { color: "bg-butter", icon: Blocks },
  },
  {
    slug: "shopify-plus-checkout-customisation",
    title: "A guide to Shopify Plus checkout customisation",
    excerpt: "What you can change with checkout extensions and Functions, and what to plan before you start.",
    category: "Shopify Plus",
    date: "2026-09-30",
    readTime: "8 min read",
    cover: { color: "bg-sky", icon: ShoppingCart },
  },
];

// ---------------------------------------------------------------- About page
// The first paragraph is shown large; **double asterisks** mark the highlighted words.
// TODO: add your own story here: when StrikeBits started, who started it and why.
const story = {
  lead: "StrikeBits is a **software development company** that specializes in building **custom Shopify stores and apps**.",
  paragraphs: [
    "We're a Shopify Partner agency based in Bengaluru, India. Our work covers the whole Shopify platform: private and public apps, complete store builds, custom themes and Shopify Plus.",
    "We stay focused on one platform on purpose. It means the people working on your project know Shopify's APIs, its app review process and its best practices in depth, and can tell you early what will and won't work.",
  ],
};

// TODO: adjust these so they describe how you actually work.
const values: Value[] = [
  {
    icon: Target,
    title: "Shopify specialists",
    text: "We focus on one platform and know it in depth: its APIs, its review process and its limits.",
    color: "bg-sage",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "Plain-language updates and honest timelines, so you always know where your project stands.",
    color: "bg-butter",
  },
  {
    icon: Gauge,
    title: "Built to perform",
    text: "Fast, reliable code that keeps stores quick and apps stable as your business grows.",
    color: "bg-peach",
  },
  {
    icon: Handshake,
    title: "Long-term partners",
    text: "We stay after launch, with maintenance, updates and improvements.",
    color: "bg-sky",
  },
];

// TODO: confirm the roles for Rolwin and Arjun are accurate. Replace the two "To be announced" cards as new people join.
const team: TeamMember[] = [
  { name: "Rolwin Monteiro", role: "Shopify Developer & Conversion Specialist", photo: "/team/rolwin.webp", linkedin: "https://www.linkedin.com/in/reevan/", color: "bg-sage" },
  { name: "Arjun Karanth", role: "Shopify Expert & Growth Marketer", photo: "/team/arjun.webp", linkedin: "https://www.linkedin.com/in/arjunkaranth/", color: "bg-butter" },
  { name: "To be announced", role: "Joining soon", photo: "", linkedin: "", color: "bg-peach" },
  { name: "To be announced", role: "Joining soon", photo: "", linkedin: "", color: "bg-sky" },
];

// ---------------------------------------------------------------- Portfolio page
const portfolioHero = {
  tag: "Portfolio",
  /** [light part, bold part] of the heading */
  headline: ["Apps we've", "built and shipped."] as [string, string],
  intro:
    "We build and run our own apps on the Shopify App Store. Each one does one job well, installs in minutes and is supported by the people who built it.",
};

const apps: PortfolioApp[] = [
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

const portfolioCta = {
  /** [light part, bold part] of the heading */
  headline: ["Need a custom app?", "Let's build it."] as [string, string],
  text: "Tell us what your store needs. We'll scope it, build it and take it through App Store review if it's going public.",
  button: { label: "Get a quote", href: "/contact" },
};

// ---------------------------------------------------------------- Privacy policy

/**
 * Privacy policy content.
 *
 * IMPORTANT: the wording below was written from a summary of the policy on the
 * current strikebits.com/privacy-policy page. It follows the same sections in the
 * same order, but it is NOT the original text word for word.
 * TODO: before going live, paste your original wording over each section
 * (or have the text reviewed), and update `updated` if anything changes.
 *
 * Each section is a list of blocks: { p: "paragraph" } or { list: ["item", ...] }.
 */
const privacyPolicy: LegalDocument = {
  title: ["Privacy", "Policy"],
  updated: "December 2024",
  intro: [
    `${site.legalName} ("we", "us", "our") is a digital agency that provides Shopify app development and custom Shopify store development. This policy explains how we handle personal information on this website, in our Shopify apps and across our development services.`,
    "We collect personal information only when we need it to provide our services, by lawful means and with your consent. We keep it only for as long as necessary and protect it with commercially reasonable security measures.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "What information do we collect?",
      blocks: [
        { p: "We collect information when you enquire about our services, install one of our apps, subscribe to our marketing emails, submit a form or browse our website. Depending on how you interact with us, this may include:" },
        {
          list: [
            "Contact details, such as your name, email address and phone number",
            "Business and project information",
            "Shopify store details",
            "Payment information",
            "Technical specifications for your project",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How do we use your information?",
      blocks: [
        { p: "We use the information we collect to:" },
        {
          list: [
            "Build and maintain Shopify apps and stores",
            "Provide customer support",
            "Process payments",
            "Communicate with you about your project",
            "Send service updates",
            "Improve our services",
            "Meet our legal obligations",
          ],
        },
      ],
    },
    {
      id: "how-we-protect-information",
      title: "How do we protect your information?",
      blocks: [
        { p: "We protect your information with measures that include:" },
        {
          list: [
            "SSL encryption",
            "Secure hosting",
            "Regular security audits",
            "Access controls",
            "Trusted third-party payment processors",
            "Backups and disaster recovery",
            "Privacy training for our staff",
            "Adherence to industry security standards",
          ],
        },
      ],
    },
    {
      id: "cookies",
      title: "Do we use cookies?",
      blocks: [
        { p: "Yes. We use cookies and similar technologies to:" },
        {
          list: [
            "Remember your preferences",
            "Analyse website traffic",
            "Personalise content",
            "Improve performance",
            "Track project progress",
          ],
        },
        { p: "You can control cookies through your browser settings. If you turn cookies off, some parts of the website may not work properly." },
      ],
    },
    {
      id: "third-party-disclosure",
      title: "Third-party disclosure",
      blocks: [
        { p: "We do not sell, trade or otherwise transfer your personally identifiable information to outside parties, except:" },
        {
          list: [
            "To deliver our services, for example through Shopify API integrations and payment processing",
            "To trusted service providers who help us run our business",
            "When required by law",
            "With your explicit consent",
            "As part of a business transfer or acquisition",
          ],
        },
      ],
    },
    {
      id: "shopify-services",
      title: "Shopify services",
      blocks: [
        { p: "When we work on a client project, we may need to process additional data, such as:" },
        {
          list: [
            "Store credentials (with your permission)",
            "Product catalogues",
            "Customer and order data",
            "Technical specifications",
            "Performance metrics",
            "Custom code",
          ],
        },
        { p: "This data is used solely to provide our development services." },
      ],
    },
    {
      id: "third-party-links",
      title: "Third-party links",
      blocks: [
        { p: "Our website may include or link to third-party products or services. These third-party sites have their own, independent privacy policies, and we are not responsible for their content or practices." },
      ],
    },
    {
      id: "google",
      title: "Google",
      blocks: [{ p: "Our advertising practices follow Google's Advertising Principles." }],
    },
    {
      id: "caloppa",
      title: "California Online Privacy Protection Act",
      blocks: [
        { p: "CalOPPA is a California law that requires commercial websites and online services that collect personal information from California consumers to post a privacy policy stating what information is collected and who it is shared with." },
      ],
    },
    {
      id: "coppa",
      title: "Children's Online Privacy Protection Act",
      blocks: [
        { p: "COPPA governs the collection of personal information from children under 13 and puts parents in control of that information. The US Federal Trade Commission enforces the COPPA Rule." },
      ],
    },
    {
      id: "fair-information-practices",
      title: "Fair Information Practices",
      blocks: [
        { p: "The Fair Information Practice Principles form the backbone of privacy law in the United States and have influenced data protection laws around the world." },
      ],
    },
    {
      id: "can-spam",
      title: "CAN-SPAM Act",
      blocks: [
        { p: "The CAN-SPAM Act is a US law that sets the rules for commercial email, gives recipients the right to stop receiving emails and sets out penalties for violations." },
      ],
    },
    {
      id: "your-rights",
      title: "Your rights and choices",
      blocks: [
        { p: "You have the right to:" },
        {
          list: [
            "Access the personal information we hold about you",
            "Have it corrected",
            "Ask us to delete it",
            "Opt out of marketing communications",
            "Withdraw your consent",
            "Receive a copy of your data (data portability)",
          ],
        },
        { p: "To make a request, contact us using the details below." },
      ],
    },
    {
      id: "contacting-us",
      title: "Contacting us",
      blocks: [{ p: "If you have any questions about this privacy policy, you can contact us using the details below." }],
      showContact: true,
    },
  ],
};

export const en = {
  services,
  faqs,
  posts,
  about: { story, values, team },
  portfolio: { hero: portfolioHero, apps, cta: portfolioCta },
  privacy: privacyPolicy,
};
