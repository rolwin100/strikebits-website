import type { DeepPartial } from "../merge";
import type { Messages } from "./en";

// German interface text. Anything not listed here shows in English.
// Keep the placeholders ({hours}, {n}, {name}, {star}, {topic}, {date}) and the order of list items unchanged.
export const de: DeepPartial<Messages> = {
  site: {
    title: "StrikeBits | Shopify-App- & Store-Entwicklungsagentur",
    description:
      "StrikeBits ist eine Shopify-Partner-Agentur, die individuelle Shopify-Apps, Shopify-Stores und Themes für wachsende Marken entwickelt.",
  },

  meta: {
    contact: {
      title: "Kontakt | StrikeBits",
      description:
        "Bereit, Ihr E-Commerce-Geschäft voranzubringen? Sprechen Sie mit StrikeBits über Ihr Shopify-Projekt. Wir antworten in der Regel innerhalb von 24 Stunden.",
    },
    about: {
      title: "Über uns | StrikeBits",
      description:
        "StrikeBits ist ein Softwareentwicklungsunternehmen und Shopify-Partner, das auf individuelle Shopify-Stores und -Apps spezialisiert ist.",
    },
    portfolio: {
      title: "Portfolio | StrikeBits",
      description:
        "Von StrikeBits entwickelte und betriebene Shopify-Apps, darunter Sugar Rush für Upsells und Cross-Sells und Sugar Ship für Live-Versandkosten.",
    },
    privacy: {
      title: "Datenschutzerklärung | StrikeBits",
      description:
        "Wie StrikeBits personenbezogene Daten auf dieser Website, in seinen Shopify-Apps und bei seinen Entwicklungsdienstleistungen erhebt, verwendet und schützt.",
    },
    services: {
      title: "Shopify-Leistungen | StrikeBits",
      description:
        "Shopify-App-Entwicklung, Store-Entwicklung, Theme-Entwicklung, Shopify Plus und laufender Support von StrikeBits, einer Shopify-Partner-Agentur.",
    },
    titleSuffix: " | StrikeBits",
  },

  nav: {
    ariaLabel: "Hauptnavigation",
    homeAria: "StrikeBits Startseite",
    home: "Startseite",
    services: "Leistungen",
    portfolio: "Portfolio",
    about: "Über uns",
    contact: "Kontakt",
    getQuote: "Angebot anfordern",
    viewAllServices: "Alle Leistungen ansehen",
    allServices: "Alle Leistungen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },

  language: {
    label: "Sprache",
    switchTo: "Sprache wechseln",
  },

  footer: {
    cta: "Sie haben ein Shopify-Projekt im Kopf? Lassen Sie es uns gemeinsam umsetzen.",
    scheduleCall: "Gespräch vereinbaren",
    blurb:
      "Eine Shopify-Partner-Agentur, die individuelle Shopify-Apps, -Stores und -Themes für wachsende Marken entwickelt.",
    columns: {
      company: "Unternehmen",
      services: "Leistungen",
      resources: "Ressourcen",
    },
    links: {
      about: "Über uns",
      portfolio: "Portfolio",
      shopifyPartner: "Shopify-Partner",
      careers: "Karriere",
      contact: "Kontakt",
      blog: "Blog",
      faqs: "FAQ",
      support: "Support",
      demoStore: "Demo-Store",
      scheduleCall: "Gespräch vereinbaren",
    },
    newsletter: {
      title: "Newsletter",
      text: "Shopify-Tipps und Ideen für E-Commerce-Wachstum, einmal im Monat. Kein Spam.",
      emailLabel: "E-Mail-Adresse",
      placeholder: "name@firma.de",
      subscribe: "Abonnieren",
    },
    rights: "Alle Rechte vorbehalten.",
    legal: {
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie",
    },
    backToTop: "Zurück nach oben",
  },

  social: {
    linkedin: "LinkedIn",
    x: "X (Twitter)",
    github: "GitHub",
  },

  contact: {
    tag: "Kontakt",
    headingLight: "Sprechen Sie ",
    headingBold: "mit uns.",
    leadBold: "Bereit, Ihr E-Commerce-Geschäft voranzubringen?",
    lead: " Lassen Sie uns Ihr Projekt besprechen und herausfinden, wie wir Ihnen mit unserer Shopify-Expertise helfen können, Ihre Ziele zu erreichen.",
    replyNote: "Wir antworten in der Regel innerhalb von 24 Stunden",
    hours: "Mo – Fr, 9–18 Uhr",
    highlightCall: "30-minütiges Beratungsgespräch mit unserem Team",
    highlightAvailable: "Erreichbar {hours}",
    detailsTitle: "Kontaktdaten",
    phone: "Telefon",
    email: "E-Mail",
    address: "Adresse",
    partnersAlt: "Shopify-Partner",
    scheduleTitle: "Termin vereinbaren",
    scheduleText:
      "Lieber im direkten Gespräch? Buchen Sie ein 30-minütiges Beratungsgespräch mit unserem Team.",
    bookCall: "Gespräch buchen",
    formTitle: "Schreiben Sie uns",
    requiredNote: "Mit {star} markierte Felder sind Pflichtfelder.",
  },

  form: {
    name: "Ihr Name",
    namePlaceholder: "Max Mustermann",
    email: "E-Mail",
    emailPlaceholder: "max@ihr-shop.de",
    company: "Firma oder Shop-URL",
    companyPlaceholder: "ihr-shop.de",
    service: "Was benötigen Sie?",
    servicePlaceholder: "Leistung auswählen",
    somethingElse: "Etwas anderes",
    budget: "Budget",
    budgetPlaceholder: "Bereich auswählen",
    budgetOptions: ["Unter 2.000 $", "2.000 – 5.000 $", "5.000 – 15.000 $", "15.000 $+", "Noch unklar"],
    message: "Erzählen Sie uns von Ihrem Projekt",
    messagePlaceholder: "Was entwickeln Sie, und wie würde der Erfolg aussehen?",
    send: "Nachricht senden",
    sending: "Wird gesendet",
    sentTitle: "Danke, Ihre Nachricht ist unterwegs",
    sendAnother: "Weitere Nachricht senden",
    errorTryAgain: "Bitte versuchen Sie es erneut oder schreiben Sie uns an",
    errors: {
      invalid_request: "Bei der Anfrage ist etwas schiefgelaufen.",
      name_required: "Bitte geben Sie Ihren Namen ein.",
      email_invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      message_required: "Bitte erzählen Sie uns von Ihrem Projekt.",
      field_too_long: "Eines der Felder ist zu lang.",
      not_configured: "Das Formular ist noch nicht eingerichtet.",
      send_failed: "Ihre Nachricht konnte nicht gesendet werden.",
      generic: "Ihre Nachricht konnte nicht gesendet werden.",
    },
  },

  common: {
    learnMore: "Mehr erfahren",
    readMore: "Weiterlesen",
    getQuote: "Angebot anfordern",
    viewOurWork: "Unsere Projekte ansehen",
    scheduleCall: "Gespräch vereinbaren",
  },

  hero: {
    tag: "Shopify-Apps & Store-Experten",
    headlineLight: "Leistungsstarke ",
    headlineBold: "E‑Commerce-Lösungen.",
    lead: "Individuelle Shopify-Apps, konvertierungsstarke Shopify-Stores und Themes, von der ersten Idee bis zum Launch und darüber hinaus.",
    slides: [
      "Zwei Kollegen werten Analysen auf einem Laptop aus",
      "Zwei Entwickler besprechen ein Projekt am Laptop",
      "Das Team in einer Besprechung um einen Bürotisch",
    ],
    trust: [
      { title: "Shopify-Partner", text: "Apps, Stores & Shopify Plus" },
      { title: "Auf Performance ausgelegt", text: "Schnelle, konvertierungsstarke Stores" },
    ],
    partnersAlt: "Shopify-Partner",
    available: "Derzeit für neue Projekte verfügbar",
    launchedLabel: "Realisierte Stores & Apps",
    showSlide: "Folie {n} anzeigen",
  },

  clients: {
    heading: "Vertraut von wachsenden Shopify-Marken",
  },

  stats: {
    introBefore: "Wir sind ein Team aus ",
    introStrong1: "Shopify-Entwicklern, Designern und E-Commerce-Spezialisten",
    introMiddle: " und helfen Marken, online mehr zu verkaufen. ",
    introStrong2: "Unsere Mission",
    introAfter:
      " ist es, ambitionierte Ideen in schnelle, zuverlässige Shopify-Stores und -Apps zu verwandeln, die mit Ihrem Geschäft wachsen.",
    consultation: "Kostenlose Erstberatung buchen",
    labels: [
      "Realisierte Shopify-Stores & Apps",
      "Jahre Erfahrung mit Shopify",
      "Marken weltweit betreut",
      "Kunden, die wiederkommen",
    ],
  },

  servicesSection: {
    tag: "Was wir tun",
    heading: "Shopify-Leistungen, die auf Ihr Wachstum zugeschnitten sind",
    text: "Von einer einzelnen individuellen App bis zum vollständigen Shopify-Plus-Projekt: Ein Team übernimmt Design, Entwicklung und Support.",
    discussApp: "Ihre App besprechen",
  },

  process: {
    tag: "So arbeiten wir",
    heading: "Von der ersten Idee zu einem Store, der verkauft",
    lead: "Ein klarer Prozess in vier Schritten für jede Shopify-App, jeden Store und jedes Theme, das wir entwickeln.",
    step: "Schritt {n}",
    steps: [
      {
        title: "Entdeckung & Planung",
        text: "Wir lernen Ihr Geschäft, Ihre Kunden und Ihre Ziele kennen und planen dann die passende Shopify-Lösung.",
        points: ["Analyse von Anforderungen und Zielgruppe", "Klarer Umfang, Zeitplan und Angebot"],
      },
      {
        title: "Design & Entwicklung",
        text: "Wir entwerfen und entwickeln Ihre individuelle Shopify-App, Ihren Store oder Ihr Theme genau nach Ihrer Vorgabe.",
        points: ["Auf Konversion ausgelegtes Design", "Individuelle Themes und Apps"],
      },
      {
        title: "Tests & Integration",
        text: "Wir testen jeden Ablauf, binden Ihre Drittanbieter-Dienste an und optimieren die Performance vor dem Launch.",
        points: ["Integrationen mit Drittanbietern und ERP", "Optimierung von Geschwindigkeit und Performance"],
      },
      {
        title: "Launch & Support",
        text: "Wir gehen live, schulen Ihr Team und sorgen dafür, dass alles reibungslos läuft.",
        points: ["Reibungsloser Go-live und Schulung des Teams", "Laufende Wartung und Updates"],
      },
    ],
  },

  why: {
    tag: "Warum StrikeBits",
    heading: "Ein Shopify-Team, das es richtig macht und dabei bleibt",
    lead: "Wir konzentrieren uns ausschließlich auf Shopify. Sie bekommen Spezialisten, die die Plattform in- und auswendig kennen, statt Generalisten, die an Ihrem Projekt dazulernen.",
    reasons: [
      {
        title: "Offizieller Shopify-Partner",
        text: "Wir arbeiten jeden Tag im Shopify-Ökosystem und folgen den Best Practices von Shopify für Apps, Themes und Plus-Stores.",
      },
      {
        title: "Umsetzung aus einer Hand",
        text: "Ein Team von der ersten Idee und dem Design über die Entwicklung und Einreichung im App Store bis zum Launch.",
      },
      {
        title: "Performance zuerst",
        text: "Schnell ladende, auf Konversion ausgelegte Projekte, die Käufer in Ihrem Store halten und zum Checkout führen.",
      },
      {
        title: "Ein langfristiger Partner",
        text: "Wartung, Updates und klare Kommunikation nach dem Launch, damit Ihr Store sich laufend verbessert.",
      },
    ],
  },

  blog: {
    tag: "Aus dem Blog",
    heading: "Shopify-Einblicke & Ratgeber",
    viewAll: "Alle Beiträge ansehen",
  },

  faq: {
    tag: "FAQ",
    heading: "Fragen, beantwortet",
    lead: "Alles, was Sie über die Zusammenarbeit mit uns wissen müssen. Ihre Frage ist nicht dabei? Wir helfen gern.",
    ask: "Stellen Sie uns eine Frage",
  },

  about: {
    tag: "Über uns",
    headlineLight: "Das Shopify-Team hinter ",
    headlineBold: "wachsenden Marken.",
    lead: "Wir entwerfen, entwickeln und betreuen individuelle Shopify-Apps, -Stores und -Themes für E‑Commerce-Unternehmen.",
    getInTouch: "Kontakt aufnehmen",
    heroAlt: "Ein Team arbeitet gemeinsam an einem Tisch mit Laptops und Notizbüchern",
    basedIn: "Ansässig in",
    storyTag: "Unsere Geschichte",
    storyHeading: "Spezialisten für Shopify, aus Überzeugung",
    valuesTag: "Was uns wichtig ist",
    valuesHeading: "Wie wir mit jedem Kunden zusammenarbeiten",
    teamTag: "Das Team",
    teamHeading: "Die Menschen, die Ihr Projekt umsetzen",
    teamText: "Entwickler, Designer und E‑Commerce-Spezialisten, die jeden Tag an Shopify arbeiten.",
    linkedinAria: "{name} auf LinkedIn (öffnet in einem neuen Tab)",
  },

  portfolio: {
    ourApps: "Unsere Apps",
    builtByLight: "Von uns entwickelt, ",
    builtByBold: "von uns betrieben.",
    builtByText: "Intern entworfen, entwickelt und betreut, und passend zu Ihrem Theme, ganz ohne Code.",
    statusLive: "Im App Store verfügbar",
    statusLiveShort: "Verfügbar",
    statusComingSoon: "Demnächst",
    viewOnAppStore: "Im Shopify App Store ansehen",
  },

  servicesHero: {
    tag: "Leistungen",
    headlineLight: "Shopify-Leistungen, ",
    headlineBold: "von A bis Z.",
    lead: "Von einer einzelnen individuellen App bis zum vollständigen Shopify-Plus-Projekt: Ein Team übernimmt Design, Entwicklung und Support.",
  },

  servicePage: {
    breadcrumbAria: "Navigationspfad",
    includedTag: "Im Leistungsumfang",
    whatWeDo: "Was wir im Bereich {topic} tun",
    fitTag: "Ist das das Richtige für Sie?",
    fitHeading: "Das passt, wenn …",
    faqHeading: "Häufige Fragen",
    faqLead: "Haben Sie eine Frage, die hier nicht beantwortet wird? Fragen Sie uns direkt.",
    moreTag: "Weitere Leistungen",
    moreHeading: "Entdecken Sie unsere weiteren Leistungen",
  },

  legal: {
    tag: "Rechtliches",
    lastUpdated: "Zuletzt aktualisiert: {date}",
    onThisPage: "Auf dieser Seite",
  },
};
