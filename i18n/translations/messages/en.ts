/**
 * English interface text, the source for every language.
 *
 * - German and French live in de.ts and fr.ts. They only need the lines that are
 *   translated; anything missing falls back to the English below.
 * - Keep the same keys and, for lists, the same order in every language.
 * - Page content that lives in data/ (services, FAQs, privacy policy...) is
 *   translated separately, see i18n/translations/content.
 */
export const en = {
  site: {
    title: "StrikeBits | Shopify App & Store Development Agency",
    description:
      "StrikeBits is a Shopify Partner agency building custom Shopify apps, Shopify stores and themes for growing brands.",
  },

  // Page titles and descriptions (what search results and browser tabs show)
  meta: {
    contact: {
      title: "Contact | StrikeBits",
      description:
        "Ready to transform your e-commerce business? Get in touch with StrikeBits to discuss your Shopify project. We usually reply within 24 hours.",
    },
    about: {
      title: "About | StrikeBits",
      description:
        "StrikeBits is a software development company and Shopify Partner that specializes in building custom Shopify stores and apps.",
    },
    portfolio: {
      title: "Portfolio | StrikeBits",
      description:
        "Shopify apps built and run by StrikeBits, including Sugar Rush for upsells and cross-sells and Sugar Ship for live shipping rates.",
    },
    privacy: {
      title: "Privacy Policy | StrikeBits",
      description:
        "How StrikeBits collects, uses and protects personal information on this website, in its Shopify apps and across its development services.",
    },
    services: {
      title: "Shopify Services | StrikeBits",
      description:
        "Shopify app development, store development, theme development, Shopify Plus and ongoing support from StrikeBits, a Shopify Partner agency.",
    },
    /** Added after a service name: "Shopify app development | StrikeBits" */
    titleSuffix: " | StrikeBits",
  },

  nav: {
    ariaLabel: "Main",
    homeAria: "StrikeBits home",
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    getQuote: "Get a quote",
    viewAllServices: "View all services",
    allServices: "All services",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  language: {
    label: "Language",
    switchTo: "Switch language",
  },

  footer: {
    cta: "Have a Shopify project in mind? Let's build it together.",
    scheduleCall: "Schedule a call",
    blurb: "A Shopify Partner agency building custom Shopify apps, stores and themes for growing brands.",
    columns: {
      company: "Company",
      services: "Services",
      resources: "Resources",
    },
    links: {
      about: "About us",
      portfolio: "Portfolio",
      shopifyPartner: "Shopify Partner",
      careers: "Careers",
      contact: "Contact",
      blog: "Blog",
      faqs: "FAQs",
      support: "Support",
      demoStore: "Demo store",
      scheduleCall: "Schedule a call",
    },
    newsletter: {
      title: "Newsletter",
      text: "Shopify tips and e-commerce growth ideas, once a month. No spam.",
      emailLabel: "Email address",
      placeholder: "you@company.com",
      subscribe: "Subscribe",
    },
    rights: "All rights reserved.",
    legal: {
      privacy: "Privacy policy",
      terms: "Terms of service",
      cookies: "Cookie policy",
    },
    backToTop: "Back to top",
  },

  social: {
    linkedin: "LinkedIn",
    x: "X (Twitter)",
    github: "GitHub",
  },

  contact: {
    tag: "Contact",
    headingLight: "Get in ",
    headingBold: "touch.",
    leadBold: "Ready to transform your e-commerce business?",
    lead: " Let's discuss your project and how we can help you achieve your goals with our Shopify expertise.",
    replyNote: "We usually reply within 24 hours",
    hours: "Mon – Fri, 9am – 6pm",
    highlightCall: "30-minute consultation call with our team",
    highlightAvailable: "Available {hours}",
    detailsTitle: "Contact details",
    phone: "Phone",
    email: "Email",
    address: "Address",
    partnersAlt: "Shopify Partners",
    scheduleTitle: "Schedule a meeting",
    scheduleText: "Prefer to have a direct conversation? Book a 30-minute consultation call with our team.",
    bookCall: "Book a call",
    formTitle: "Send us a message",
    requiredNote: "Fields marked {star} are required.",
  },

  form: {
    name: "Your name",
    namePlaceholder: "Jane Smith",
    email: "Email",
    emailPlaceholder: "jane@yourstore.com",
    company: "Company or store URL",
    companyPlaceholder: "yourstore.com",
    service: "What do you need?",
    servicePlaceholder: "Choose a service",
    somethingElse: "Something else",
    budget: "Budget",
    budgetPlaceholder: "Choose a range",
    budgetOptions: ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"],
    message: "Tell us about your project",
    messagePlaceholder: "What are you building, and what would success look like?",
    send: "Send message",
    sending: "Sending",
    sentTitle: "Thanks, your message is on its way",
    sendAnother: "Send another message",
    errorTryAgain: "Please try again, or email us at",
    // Shown when the server rejects a submission (the keys are the codes returned by netlify/functions/contact.mts)
    errors: {
      invalid_request: "Something went wrong with the request.",
      name_required: "Please enter your name.",
      email_invalid: "Please enter a valid email address.",
      message_required: "Please tell us about your project.",
      field_too_long: "One of the fields is too long.",
      not_configured: "The form isn't set up yet.",
      send_failed: "We couldn't send your message.",
      generic: "We couldn't send your message.",
    },
  },

  common: {
    learnMore: "Learn more",
    readMore: "Read more",
    getQuote: "Get a quote",
    viewOurWork: "View our work",
    scheduleCall: "Schedule a call",
  },

  hero: {
    tag: "Shopify apps & store experts",
    headlineLight: "Build powerful ",
    headlineBold: "e\u2011commerce solutions.",
    lead: "Custom Shopify apps, high-converting Shopify stores and themes, from first idea to launch and beyond.",
    slides: [
      "Two colleagues reviewing analytics on a laptop",
      "Two developers reviewing a project on a laptop",
      "The team in a meeting around an office table",
    ],
    trust: [
      { title: "Shopify Partner", text: "Apps, stores & Shopify Plus" },
      { title: "Built for performance", text: "Fast, high-converting stores" },
    ],
    partnersAlt: "Shopify Partners",
    available: "Available for new projects",
    launchedLabel: "Stores & apps launched",
    showSlide: "Show slide {n}",
  },

  clients: {
    heading: "Trusted by growing Shopify brands",
  },

  stats: {
    introBefore: "We're a team of ",
    introStrong1: "Shopify developers, designers and e-commerce specialists",
    introMiddle: " helping brands sell more online. ",
    introStrong2: "Our mission",
    introAfter:
      " is to turn ambitious ideas into fast, reliable Shopify stores and apps that grow with your business.",
    consultation: "Book a free consultation",
    // Same order as the numbers in data/stats.ts
    labels: [
      "Shopify stores & apps launched",
      "Years building on Shopify",
      "Brands served worldwide",
      "Clients who come back",
    ],
  },

  servicesSection: {
    tag: "What we do",
    heading: "Shopify services built around your growth",
    text: "From a single custom app to a full Shopify Plus build, one team handles design, development and support.",
    discussApp: "Discuss your app",
  },

  process: {
    tag: "How we work",
    heading: "From first idea to a store that sells",
    lead: "A clear four-step process for every Shopify app, store and theme we build.",
    step: "Step {n}",
    steps: [
      {
        title: "Discovery & planning",
        text: "We learn your business, customers and goals, then plan the right Shopify solution.",
        points: ["Requirements and audience analysis", "Clear scope, timeline and quote"],
      },
      {
        title: "Design & development",
        text: "We design and build your custom Shopify app, store or theme to your exact specification.",
        points: ["Conversion-focused design", "Custom themes and apps"],
      },
      {
        title: "Testing & integration",
        text: "We test every flow, connect your third-party services and tune performance before launch.",
        points: ["Third-party and ERP integrations", "Speed and performance optimization"],
      },
      {
        title: "Launch & support",
        text: "We deploy to production, train your team and keep everything running smoothly.",
        points: ["Smooth go-live and team training", "Ongoing maintenance and updates"],
      },
    ],
  },

  why: {
    tag: "Why StrikeBits",
    heading: "A Shopify team that builds it right, and sticks around",
    lead: "We focus only on Shopify, so you get specialists who know the platform inside out, not generalists learning on your project.",
    reasons: [
      {
        title: "Official Shopify Partner",
        text: "We work in the Shopify ecosystem every day and follow Shopify's best practices for apps, themes and Plus stores.",
      },
      {
        title: "End-to-end delivery",
        text: "One team from first idea and design through development, App Store submission and launch.",
      },
      {
        title: "Performance first",
        text: "Fast-loading, conversion-focused builds that keep shoppers on your store and moving to checkout.",
      },
      {
        title: "A long-term partner",
        text: "Maintenance, updates and clear communication after launch, so your store keeps improving.",
      },
    ],
  },

  blog: {
    tag: "From the blog",
    heading: "Shopify insights & guides",
    viewAll: "View all posts",
  },

  faq: {
    tag: "FAQ",
    heading: "Questions, answered",
    lead: "Everything you need to know about working with us. Can't find your answer? We're happy to help.",
    ask: "Ask us a question",
  },

  about: {
    tag: "About us",
    headlineLight: "The Shopify team behind ",
    headlineBold: "growing brands.",
    lead: "We design, build and support custom Shopify apps, stores and themes for e\u2011commerce businesses.",
    getInTouch: "Get in touch",
    heroAlt: "A team working together around a table with laptops and notebooks",
    basedIn: "Based in",
    storyTag: "Our story",
    storyHeading: "Specialists in Shopify, by choice",
    valuesTag: "What we value",
    valuesHeading: "How we work with every client",
    teamTag: "The team",
    teamHeading: "The people who build your project",
    teamText: "Developers, designers and e\u2011commerce specialists who work on Shopify every day.",
    linkedinAria: "{name} on LinkedIn (opens in a new tab)",
  },

  portfolio: {
    ourApps: "Our apps",
    builtByLight: "Built by us, ",
    builtByBold: "run by us.",
    builtByText: "Designed, built and supported in-house, and made to fit your theme without code.",
    statusLive: "Live on the App Store",
    statusLiveShort: "Live",
    statusComingSoon: "Coming soon",
    viewOnAppStore: "View on Shopify App Store",
  },

  servicesHero: {
    tag: "Services",
    headlineLight: "Shopify services, ",
    headlineBold: "end to end.",
    lead: "From a single custom app to a full Shopify Plus build, one team handles design, development and support.",
  },

  servicePage: {
    breadcrumbAria: "Breadcrumb",
    includedTag: "What's included",
    whatWeDo: "What we do in {topic}",
    fitTag: "Is this right for you?",
    fitHeading: "This is a good fit if\u2026",
    faqHeading: "Common questions",
    faqLead: "Have a question that isn't answered here? Ask us directly.",
    moreTag: "More services",
    moreHeading: "Explore our other services",
  },

  legal: {
    tag: "Legal",
    lastUpdated: "Last updated: {date}",
    onThisPage: "On this page",
  },
};

export type Messages = typeof en;
