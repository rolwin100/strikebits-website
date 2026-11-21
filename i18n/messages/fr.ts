import type { DeepPartial } from "../merge";
import type { Messages } from "./en";

// French interface text. Anything not listed here shows in English.
// Keep the placeholders ({hours}, {n}, {name}, {star}, {topic}, {date}) and the order of list items unchanged.
export const fr: DeepPartial<Messages> = {
  site: {
    title: "StrikeBits | Agence de développement d'applications et de boutiques Shopify",
    description:
      "StrikeBits est une agence partenaire Shopify qui conçoit des applications, boutiques et thèmes Shopify sur mesure pour les marques en croissance.",
  },

  meta: {
    contact: {
      title: "Contact | StrikeBits",
      description:
        "Prêt à faire évoluer votre activité e-commerce ? Contactez StrikeBits pour discuter de votre projet Shopify. Nous répondons généralement sous 24 heures.",
    },
    about: {
      title: "À propos | StrikeBits",
      description:
        "StrikeBits est une entreprise de développement logiciel et partenaire Shopify, spécialisée dans la création de boutiques et d'applications Shopify sur mesure.",
    },
    portfolio: {
      title: "Portfolio | StrikeBits",
      description:
        "Applications Shopify conçues et exploitées par StrikeBits, dont Sugar Rush pour les ventes incitatives et complémentaires et Sugar Ship pour les tarifs de livraison en direct.",
    },
    privacy: {
      title: "Politique de confidentialité | StrikeBits",
      description:
        "Comment StrikeBits collecte, utilise et protège les données personnelles sur ce site, dans ses applications Shopify et à travers ses services de développement.",
    },
    services: {
      title: "Services Shopify | StrikeBits",
      description:
        "Développement d'applications et de boutiques Shopify, de thèmes, Shopify Plus et support continu par StrikeBits, agence partenaire Shopify.",
    },
    titleSuffix: " | StrikeBits",
  },

  nav: {
    ariaLabel: "Navigation principale",
    homeAria: "Accueil StrikeBits",
    home: "Accueil",
    services: "Services",
    portfolio: "Portfolio",
    about: "À propos",
    contact: "Contact",
    getQuote: "Demander un devis",
    viewAllServices: "Voir tous les services",
    allServices: "Tous les services",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  language: {
    label: "Langue",
    switchTo: "Changer de langue",
  },

  footer: {
    cta: "Vous avez un projet Shopify en tête ? Construisons-le ensemble.",
    scheduleCall: "Planifier un appel",
    blurb:
      "Une agence partenaire Shopify qui conçoit des applications, boutiques et thèmes Shopify sur mesure pour les marques en croissance.",
    columns: {
      company: "Entreprise",
      services: "Services",
      resources: "Ressources",
    },
    links: {
      about: "À propos",
      portfolio: "Portfolio",
      shopifyPartner: "Partenaire Shopify",
      careers: "Carrières",
      contact: "Contact",
      blog: "Blog",
      faqs: "FAQ",
      support: "Support",
      demoStore: "Boutique démo",
      scheduleCall: "Planifier un appel",
    },
    newsletter: {
      title: "Newsletter",
      text: "Conseils Shopify et idées de croissance e-commerce, une fois par mois. Pas de spam.",
      emailLabel: "Adresse e-mail",
      placeholder: "vous@entreprise.com",
      subscribe: "S'abonner",
    },
    rights: "Tous droits réservés.",
    legal: {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookies: "Politique relative aux cookies",
    },
    backToTop: "Retour en haut",
  },

  social: {
    linkedin: "LinkedIn",
    x: "X (Twitter)",
    github: "GitHub",
  },

  contact: {
    tag: "Contact",
    headingLight: "Entrez en ",
    headingBold: "contact.",
    leadBold: "Prêt à transformer votre activité e-commerce ?",
    lead: " Discutons de votre projet et de la façon dont nous pouvons vous aider à atteindre vos objectifs grâce à notre expertise Shopify.",
    replyNote: "Nous répondons généralement sous 24 heures",
    hours: "Lun – ven, 9h – 18h",
    highlightCall: "Consultation de 30 minutes avec notre équipe",
    highlightAvailable: "Disponible {hours}",
    detailsTitle: "Coordonnées",
    phone: "Téléphone",
    email: "E-mail",
    address: "Adresse",
    partnersAlt: "Partenaires Shopify",
    scheduleTitle: "Planifier un rendez-vous",
    scheduleText:
      "Vous préférez un échange direct ? Réservez une consultation de 30 minutes avec notre équipe.",
    bookCall: "Réserver un appel",
    formTitle: "Envoyez-nous un message",
    requiredNote: "Les champs marqués {star} sont obligatoires.",
  },

  form: {
    name: "Votre nom",
    namePlaceholder: "Jeanne Dupont",
    email: "E-mail",
    emailPlaceholder: "jeanne@votre-boutique.fr",
    company: "Entreprise ou URL de la boutique",
    companyPlaceholder: "votre-boutique.fr",
    service: "De quoi avez-vous besoin ?",
    servicePlaceholder: "Choisir un service",
    somethingElse: "Autre chose",
    budget: "Budget",
    budgetPlaceholder: "Choisir une fourchette",
    budgetOptions: ["Moins de 2 000 $", "2 000 – 5 000 $", "5 000 – 15 000 $", "15 000 $ et plus", "Pas encore sûr"],
    message: "Parlez-nous de votre projet",
    messagePlaceholder: "Que construisez-vous, et à quoi ressemblerait la réussite ?",
    send: "Envoyer le message",
    sending: "Envoi en cours",
    sentTitle: "Merci, votre message est en route",
    sendAnother: "Envoyer un autre message",
    errorTryAgain: "Veuillez réessayer ou nous écrire à",
    errors: {
      invalid_request: "Un problème est survenu avec la demande.",
      name_required: "Veuillez saisir votre nom.",
      email_invalid: "Veuillez saisir une adresse e-mail valide.",
      message_required: "Veuillez nous parler de votre projet.",
      field_too_long: "L'un des champs est trop long.",
      not_configured: "Le formulaire n'est pas encore configuré.",
      send_failed: "Nous n'avons pas pu envoyer votre message.",
      generic: "Nous n'avons pas pu envoyer votre message.",
    },
  },

  common: {
    learnMore: "En savoir plus",
    readMore: "Lire la suite",
    getQuote: "Demander un devis",
    viewOurWork: "Voir nos réalisations",
    scheduleCall: "Planifier un appel",
  },

  hero: {
    tag: "Experts en applications et boutiques Shopify",
    headlineLight: "Créez des ",
    headlineBold: "solutions e‑commerce puissantes.",
    lead: "Applications Shopify sur mesure, boutiques et thèmes Shopify à forte conversion, de la première idée au lancement et au-delà.",
    slides: [
      "Deux collègues analysent des statistiques sur un ordinateur portable",
      "Deux développeurs examinent un projet sur un ordinateur portable",
      "L'équipe en réunion autour d'une table de bureau",
    ],
    trust: [
      { title: "Partenaire Shopify", text: "Applications, boutiques & Shopify Plus" },
      { title: "Conçu pour la performance", text: "Boutiques rapides et à forte conversion" },
    ],
    partnersAlt: "Partenaires Shopify",
    available: "Disponibles pour de nouveaux projets",
    launchedLabel: "Boutiques et applications livrées",
    showSlide: "Afficher la diapositive {n}",
  },

  clients: {
    heading: "La confiance des marques Shopify en croissance",
  },

  stats: {
    introBefore: "Nous sommes une équipe de ",
    introStrong1: "développeurs Shopify, designers et spécialistes e-commerce",
    introMiddle: " qui aident les marques à vendre davantage en ligne. ",
    introStrong2: "Notre mission",
    introAfter:
      " est de transformer des idées ambitieuses en boutiques et applications Shopify rapides et fiables, qui grandissent avec votre activité.",
    consultation: "Réserver un conseil gratuit",
    labels: [
      "Boutiques et applications Shopify livrées",
      "Années d'expérience sur Shopify",
      "Marques accompagnées dans le monde",
      "Clients qui reviennent",
    ],
  },

  servicesSection: {
    tag: "Ce que nous faisons",
    heading: "Des services Shopify conçus pour votre croissance",
    text: "D'une application sur mesure à un projet Shopify Plus complet, une seule équipe s'occupe du design, du développement et du support.",
    discussApp: "Discuter de votre application",
  },

  process: {
    tag: "Notre méthode",
    heading: "De la première idée à une boutique qui vend",
    lead: "Un processus clair en quatre étapes pour chaque application, boutique et thème Shopify que nous créons.",
    step: "Étape {n}",
    steps: [
      {
        title: "Découverte & planification",
        text: "Nous découvrons votre activité, vos clients et vos objectifs, puis nous planifions la solution Shopify adaptée.",
        points: ["Analyse des besoins et de l'audience", "Périmètre, calendrier et devis clairs"],
      },
      {
        title: "Conception & développement",
        text: "Nous concevons et développons votre application, boutique ou thème Shopify selon vos spécifications exactes.",
        points: ["Design axé sur la conversion", "Thèmes et applications sur mesure"],
      },
      {
        title: "Tests & intégration",
        text: "Nous testons chaque parcours, connectons vos services tiers et optimisons les performances avant le lancement.",
        points: ["Intégrations tierces et ERP", "Optimisation de la vitesse et des performances"],
      },
      {
        title: "Lancement & support",
        text: "Nous mettons en production, formons votre équipe et veillons à ce que tout fonctionne sans accroc.",
        points: ["Mise en ligne fluide et formation de l'équipe", "Maintenance et mises à jour continues"],
      },
    ],
  },

  why: {
    tag: "Pourquoi StrikeBits",
    heading: "Une équipe Shopify qui fait les choses bien, et qui reste",
    lead: "Nous nous concentrons uniquement sur Shopify : vous bénéficiez de spécialistes qui connaissent la plateforme sur le bout des doigts, et non de généralistes qui apprennent sur votre projet.",
    reasons: [
      {
        title: "Partenaire officiel Shopify",
        text: "Nous travaillons chaque jour dans l'écosystème Shopify et suivons ses bonnes pratiques pour les applications, les thèmes et les boutiques Plus.",
      },
      {
        title: "Livraison de bout en bout",
        text: "Une seule équipe, de la première idée et du design au développement, à la soumission sur l'App Store et au lancement.",
      },
      {
        title: "La performance avant tout",
        text: "Des projets rapides à charger et axés sur la conversion, qui gardent les acheteurs dans votre boutique jusqu'au paiement.",
      },
      {
        title: "Un partenaire sur le long terme",
        text: "Maintenance, mises à jour et communication claire après le lancement, pour que votre boutique continue de progresser.",
      },
    ],
  },

  blog: {
    tag: "Du blog",
    heading: "Conseils & analyses Shopify",
    viewAll: "Voir tous les articles",
  },

  faq: {
    tag: "FAQ",
    heading: "Vos questions, nos réponses",
    lead: "Tout ce qu'il faut savoir pour travailler avec nous. Vous ne trouvez pas votre réponse ? Nous sommes là pour vous aider.",
    ask: "Poser une question",
  },

  about: {
    tag: "À propos",
    headlineLight: "L'équipe Shopify derrière ",
    headlineBold: "des marques en croissance.",
    lead: "Nous concevons, développons et accompagnons des applications, boutiques et thèmes Shopify sur mesure pour les entreprises e-commerce.",
    getInTouch: "Nous contacter",
    heroAlt: "Une équipe qui travaille ensemble autour d'une table, avec des ordinateurs portables et des carnets",
    basedIn: "Basés à",
    storyTag: "Notre histoire",
    storyHeading: "Spécialistes de Shopify, par choix",
    valuesTag: "Ce qui nous guide",
    valuesHeading: "Comment nous travaillons avec chaque client",
    teamTag: "L'équipe",
    teamHeading: "Les personnes qui réalisent votre projet",
    teamText: "Développeurs, designers et spécialistes e-commerce qui travaillent sur Shopify au quotidien.",
    linkedinAria: "{name} sur LinkedIn (s'ouvre dans un nouvel onglet)",
  },

  portfolio: {
    ourApps: "Nos applications",
    builtByLight: "Conçues par nous, ",
    builtByBold: "exploitées par nous.",
    builtByText: "Conçues, développées et accompagnées en interne, et adaptées à votre thème sans code.",
    statusLive: "Disponible sur l'App Store",
    statusLiveShort: "Disponible",
    statusComingSoon: "Bientôt disponible",
    viewOnAppStore: "Voir sur l'App Store Shopify",
  },

  servicesHero: {
    tag: "Services",
    headlineLight: "Services Shopify, ",
    headlineBold: "de bout en bout.",
    lead: "D'une application sur mesure à un projet Shopify Plus complet, une seule équipe s'occupe du design, du développement et du support.",
  },

  servicePage: {
    breadcrumbAria: "Fil d'Ariane",
    includedTag: "Ce qui est inclus",
    whatWeDo: "Ce que nous faisons pour {topic}",
    fitTag: "Est-ce fait pour vous ?",
    fitHeading: "C'est une bonne solution si…",
    faqHeading: "Questions fréquentes",
    faqLead: "Une question sans réponse ici ? Posez-la-nous directement.",
    moreTag: "Autres services",
    moreHeading: "Découvrez nos autres services",
  },

  legal: {
    tag: "Mentions légales",
    lastUpdated: "Dernière mise à jour : {date}",
    onThisPage: "Sur cette page",
  },
};
