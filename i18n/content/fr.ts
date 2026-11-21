import type { ContentOverrides } from "./types";

// French page content. Lists follow the same order as i18n/content/en.ts; anything missing shows in English.
// The privacy policy is not translated here: it is a legal text and should be translated by a professional.
export const fr: ContentOverrides = {
  services: [
    {
      title: "Développement d'applications Shopify",
      topic: "le développement d'applications Shopify",
      short: "Applications privées et publiques sur l'App Store",
      description:
        "Des applications sur mesure qui automatisent vos opérations, connectent vos outils ou se lancent sur l'App Store Shopify, de l'idée à la validation.",
      points: [
        "Applications privées pour vos processus internes",
        "Applications publiques conçues pour la validation de l'App Store",
        "Intégrations tierces et ERP",
        "Extensions de checkout, Flow et admin",
      ],
      page: {
        headline: ["Des applications Shopify sur mesure,", "conçues pour votre activité."],
        intro:
          "Notre équipe est spécialisée dans la création d'applications Shopify puissantes, évolutives et sécurisées, adaptées aux besoins propres à votre activité.",
        features: [
          {
            title: "Applications intégrées à l'admin",
            text: "Des applications intégrées à l'admin Shopify, conçues avec Polaris et App Bridge pour paraître natives à ceux qui les utilisent.",
          },
          {
            title: "Applications sur mesure pour une boutique",
            text: "Des outils construits autour de votre fonctionnement : automatiser les tâches manuelles, synchroniser les données et ajouter des fonctionnalités que Shopify n'a pas.",
          },
          {
            title: "Applications publiques sur l'App Store",
            text: "Des applications conformes aux exigences de Shopify, avec un accompagnement lors de la soumission et de la validation.",
          },
          {
            title: "Intégrations",
            text: "Connectez Shopify à votre ERP, CRM, entrepôt ou logiciel comptable via l'Admin API et les webhooks.",
          },
          {
            title: "Extensions",
            text: "Des extensions de checkout, de thème, d'admin et Shopify Flow qui ajoutent des fonctionnalités exactement là où il le faut.",
          },
          {
            title: "Facturation des applications",
            text: "Abonnements et frais à l'usage configurés via la Billing API de Shopify.",
          },
        ],
        fits: [
          {
            title: "Vous faites des tâches répétitives à la main",
            text: "Étiquetage des commandes, synchronisation des stocks ou reporting qu'une application pourrait gérer automatiquement.",
          },
          {
            title: "Aucune application existante ne convient vraiment",
            text: "Vous avez besoin d'une fonctionnalité que les applications de l'App Store ne couvrent qu'à moitié, ou propre à votre fonctionnement.",
          },
          {
            title: "Vous avez une idée d'application",
            text: "Vous voulez lancer un produit pour d'autres marchands sur l'App Store Shopify.",
          },
        ],
        faqs: [
          {
            q: "Quelle est la différence entre une application sur mesure et une application publique ?",
            a: "Une application sur mesure est créée pour une seule boutique et installée directement, sans passer par l'App Store. Une application publique peut être installée par n'importe quel marchand et doit passer la validation de Shopify avant d'être publiée.",
          },
          {
            q: "Pouvez-vous soumettre mon application à l'App Store Shopify ?",
            a: "Oui. Nous développons selon les exigences de Shopify et vous accompagnons pendant la soumission et la validation, y compris pour les modifications demandées par l'équipe de validation.",
          },
          {
            q: "Quelles technologies utilisez-vous ?",
            a: "Nous travaillons avec les outils de Shopify, notamment la GraphQL Admin API, App Bridge et Polaris, sur une base JavaScript et TypeScript. Nous vous recommandons la configuration adaptée à votre projet.",
          },
        ],
      },
    },
    {
      title: "Développement de boutiques Shopify",
      topic: "le développement de boutiques Shopify",
      short: "Des boutiques sur mesure qui convertissent",
      description: "Création complète ou refonte de boutiques, pensées autour de votre marque et de vos clients.",
      points: [
        "Configuration de boutique et migrations",
        "Design axé sur la conversion",
        "Installation d'applications et intégrations",
      ],
      page: {
        headline: ["Des boutiques Shopify", "conçues pour convertir."],
        intro:
          "Nous concevons et développons des boutiques Shopify complètes autour de votre marque, de vos produits et de la façon dont vos clients achètent.",
        features: [
          {
            title: "Configuration de la boutique",
            text: "Produits, collections, paiements, livraison et taxes correctement configurés dès le premier jour.",
          },
          {
            title: "Migrations",
            text: "Quittez WooCommerce, Magento ou une autre plateforme avec vos produits, vos clients et votre historique de commandes.",
          },
          {
            title: "Design axé sur la conversion",
            text: "Une navigation claire, des pages produit et un panier pensés pour mener les acheteurs de l'arrivée au paiement.",
          },
          {
            title: "Mobile d'abord",
            text: "Des mises en page conçues d'abord pour le mobile, là où se font désormais la plupart des achats.",
          },
          {
            title: "Installation d'applications et intégrations",
            text: "Les bonnes applications pour les avis, les abonnements, l'e-mailing et plus encore, choisies et configurées sans ralentir la boutique.",
          },
          {
            title: "Bases du SEO",
            text: "URL propres, redirections, métadonnées et données structurées, pour que les moteurs de recherche trouvent et comprennent votre boutique.",
          },
        ],
        fits: [
          { title: "Vous lancez une nouvelle marque", text: "Vous avez besoin d'une boutique prête à vendre dès le premier jour." },
          {
            title: "Vous passez à Shopify",
            text: "Votre plateforme actuelle ne suffit plus et vous voulez changer sans perdre de données ni de positionnement.",
          },
          {
            title: "Votre boutique actuelle vous freine",
            text: "Elle est lente, difficile à gérer ou ne reflète plus votre marque.",
          },
        ],
        faqs: [
          {
            q: "Pouvez-vous migrer ma boutique existante vers Shopify ?",
            a: "Oui. Nous transférons vos produits, clients et historique de commandes, et mettons en place des redirections depuis vos anciennes URL pour protéger votre référencement.",
          },
          {
            q: "Pourrai-je mettre à jour la boutique moi-même ?",
            a: "Oui. Nous construisons les pages avec des sections modifiables dans l'éditeur de thème Shopify, et nous formons votre équipe avant la livraison : pas besoin d'un développeur au quotidien.",
          },
          {
            q: "Concevez-vous la boutique ou la développez-vous seulement ?",
            a: "Les deux. Nous pouvons concevoir votre boutique de zéro ou partir de maquettes existantes.",
          },
        ],
      },
    },
    {
      title: "Développement de thèmes Shopify",
      topic: "le développement de thèmes Shopify",
      short: "Des thèmes sur mesure et rapides",
      description: "Des thèmes sur mesure ou personnalisés, uniques et rapides sur tous les appareils.",
      points: [
        "Thèmes Online Store 2.0 sur mesure",
        "Sections modifiables par votre équipe",
        "Optimisation des Core Web Vitals",
      ],
      page: {
        headline: ["Des thèmes Shopify", "à l'image de votre marque."],
        intro:
          "Des thèmes Shopify sur mesure ou personnalisés, à l'image de votre marque, rapides à charger et simples à modifier pour votre équipe.",
        features: [
          {
            title: "Thèmes sur mesure",
            text: "Des thèmes conçus et développés de zéro sur l'architecture Online Store 2.0 de Shopify.",
          },
          {
            title: "Personnalisation de thème",
            text: "Nouvelles sections, nouveaux modèles et fonctionnalités ajoutés au thème que vous utilisez déjà.",
          },
          {
            title: "Sections modifiables",
            text: "Des sections et des blocs sur chaque page, pour que votre équipe réorganise et modifie le contenu dans l'éditeur de thème.",
          },
          {
            title: "Performance",
            text: "Un code léger, des images et des scripts optimisés, réglés pour les Core Web Vitals.",
          },
          {
            title: "Accessibilité",
            text: "Balisage sémantique, navigation au clavier et contrastes lisibles, pour que tout le monde puisse acheter.",
          },
          {
            title: "Blocs d'applications et métachamps",
            text: "Prise en charge des blocs d'applications, métachamps et métaobjets, pour intégrer proprement applications et contenus structurés.",
          },
        ],
        fits: [
          {
            title: "Votre boutique ressemble à toutes les autres",
            text: "Vous voulez une vitrine qui soit clairement à l'image de votre marque.",
          },
          { title: "Votre boutique est lente", text: "Un code de thème et des scripts trop lourds vous font perdre en vitesse." },
          {
            title: "Il manque une fonctionnalité à votre thème",
            text: "Vous avez besoin d'une section, d'un modèle ou d'une mise en page que votre thème actuel ne propose pas.",
          },
        ],
        faqs: [
          {
            q: "Faut-il un thème sur mesure ou personnaliser un thème existant ?",
            a: "Personnaliser un thème existant est plus rapide et convient à la plupart des boutiques. Un thème entièrement sur mesure se justifie quand votre design ou vos fonctionnalités vont bien au-delà de ce qu'offre un thème existant. Nous vous conseillons après avoir examiné votre boutique.",
          },
          {
            q: "Le travail sur le thème affectera-t-il ma boutique en ligne ?",
            a: "Non. Nous travaillons sur une copie non publiée de votre thème et ne la publions qu'après votre validation.",
          },
          {
            q: "Mon équipe pourra-t-elle modifier le thème ?",
            a: "Oui. Nous utilisons des sections et des blocs, pour que votre équipe modifie contenus et mises en page dans l'éditeur de thème Shopify sans toucher au code.",
          },
        ],
      },
    },
    {
      title: "Développement Shopify Plus",
      topic: "le développement Shopify Plus",
      short: "Solutions pour les marques à fort volume",
      description: "Des projets avancés pour les marques en croissance qui ont besoin de plus qu'une boutique standard.",
      points: ["Configurations B2B et vente en gros", "Personnalisation du checkout", "Automatisations Shopify Flow"],
      page: {
        headline: ["Des projets Shopify Plus", "pour les marques à fort volume."],
        intro:
          "Développement Shopify Plus avancé pour les marques qui ont dépassé une boutique standard : checkout personnalisé, B2B, automatisation et intégrations.",
        features: [
          {
            title: "Personnalisation du checkout",
            text: "Extensions d'interface du checkout et Shopify Functions pour des champs personnalisés, des upsells, des remises et des règles de paiement et de livraison.",
          },
          {
            title: "B2B et vente en gros",
            text: "Comptes entreprise, listes de prix par client, conditions de paiement et règles de quantité avec le B2B sur Shopify.",
          },
          {
            title: "Automatisation",
            text: "Des workflows Shopify Flow et des planifications Launchpad qui libèrent votre équipe des tâches routinières et des lancements de campagnes.",
          },
          {
            title: "Vente à l'international",
            text: "Shopify Markets configuré pour les devises, langues, domaines et droits de douane locaux.",
          },
          {
            title: "Intégrations d'entreprise",
            text: "Des connexions fiables avec vos systèmes ERP, de gestion des commandes et d'information produit.",
          },
          {
            title: "Migration vers Plus",
            text: "Quittez Magento, une autre plateforme d'entreprise ou un forfait Shopify standard avec un minimum de perturbations.",
          },
        ],
        fits: [
          {
            title: "Votre checkout doit en faire plus",
            text: "Vous avez besoin de champs, de règles ou d'offres que le checkout standard ne permet pas.",
          },
          {
            title: "Vous vendez en gros et au détail",
            text: "Vous voulez gérer le B2B et la vente directe depuis une seule boutique Shopify.",
          },
          {
            title: "Vous vous développez à l'international",
            text: "Vous avez besoin de devises, de langues et de prix locaux pour chaque marché.",
          },
        ],
        faqs: [
          {
            q: "Ai-je besoin de Shopify Plus ?",
            a: "Plus s'adresse aux marchands à fort volume. Il ajoute une personnalisation plus poussée du checkout, des fonctionnalités B2B, plus d'automatisation et des limites d'API plus élevées. En cas de doute, nous examinons vos besoins et vous disons honnêtement si un forfait standard suffit.",
          },
          {
            q: "Pouvez-vous personnaliser le checkout Shopify ?",
            a: "Oui, avec Shopify Plus. Nous utilisons les extensions d'interface du checkout et Shopify Functions, la méthode prise en charge par Shopify et compatible avec les mises à jour.",
          },
          {
            q: "Pouvez-vous reprendre nos anciennes personnalisations checkout.liquid ?",
            a: "Oui. Shopify a abandonné checkout.liquid, et nous reconstruisons ces personnalisations avec l'extensibilité du checkout.",
          },
        ],
      },
    },
    {
      title: "Support continu",
      topic: "le support continu",
      short: "Maintenance, mises à jour et surveillance",
      description: "Nous gardons votre boutique et vos applications saines, sécurisées et à jour après le lancement.",
      points: ["Corrections de bugs et mises à jour", "Surveillance des performances", "Forfaits de support mensuels"],
      page: {
        headline: ["Un support continu", "pour votre boutique et vos applications."],
        intro:
          "Nous maintenons votre boutique et vos applications Shopify en bonne santé après le lancement, avec des corrections, des mises à jour et des améliorations assurées par des personnes qui connaissent votre configuration.",
        features: [
          { title: "Corrections de bugs", text: "Les problèmes sont détectés, corrigés et testés avant de vous coûter des ventes." },
          {
            title: "Mises à jour Shopify et API",
            text: "Shopify publie une nouvelle version de son API chaque trimestre. Nous maintenons vos applications et intégrations sur des versions prises en charge.",
          },
          {
            title: "Surveillance",
            text: "Nous surveillons les erreurs et les intégrations défaillantes, pour détecter les problèmes tôt.",
          },
          {
            title: "Performance",
            text: "Des contrôles et optimisations de vitesse réguliers, pour que votre boutique reste rapide en grandissant.",
          },
          {
            title: "Petites améliorations",
            text: "Nouvelles sections, ajustements et fonctionnalités, sans lancer un nouveau projet à chaque fois.",
          },
          {
            title: "Une équipe qui connaît votre boutique",
            text: "Vous échangez avec des personnes qui comprennent déjà votre configuration, pas avec un nouveau développeur à chaque fois.",
          },
        ],
        fits: [
          {
            title: "Vous venez de lancer",
            text: "Vous voulez une équipe disponible pour les corrections et améliorations après la mise en ligne.",
          },
          {
            title: "Votre développeur est parti",
            text: "Vous avez hérité d'une boutique ou d'une application et avez besoin de quelqu'un pour s'en occuper.",
          },
          {
            title: "Vous voulez progresser en continu",
            text: "Vous aimeriez que votre boutique s'améliore sans lancer un gros projet.",
          },
        ],
        faqs: [
          {
            q: "Assurez-vous le support de boutiques et d'applications que vous n'avez pas créées ?",
            a: "Oui. Nous commençons par un audit du code et de la configuration existants, pour savoir ce que nous reprenons.",
          },
          {
            q: "Comment fonctionne un forfait de support ?",
            a: "Les forfaits sont mensuels. Nous convenons de ce qui est couvert, comme les corrections, les mises à jour et un volume défini d'améliorations, et de la façon de nous joindre.",
          },
          {
            q: "Que se passe-t-il quand Shopify change quelque chose ?",
            a: "Shopify retire les anciennes versions de son API selon un calendrier fixe. Nous suivons ces changements et mettons à jour vos applications et votre thème avant qu'ils ne soient concernés.",
          },
        ],
      },
    },
  ],

  faqs: [
    {
      q: "Combien de temps faut-il pour créer une application Shopify sur mesure ?",
      a: "Une application privée ciblée prend généralement 2 à 4 semaines. Une application publique pour l'App Store Shopify demande en général 6 à 12 semaines, validation de Shopify comprise. Nous vous donnons un calendrier clair après notre premier échange.",
    },
    {
      q: "Combien coûte un projet Shopify ?",
      a: "Cela dépend du périmètre. Après un court échange de découverte, nous vous envoyons un devis forfaitaire, pour que vous connaissiez le coût total avant le début des travaux. Le support continu est proposé sous forme de forfait mensuel simple.",
    },
    {
      q: "Travaillez-vous avec des boutiques Shopify Plus ?",
      a: "Oui. Nous travaillons pour des marques Shopify Plus, notamment sur la personnalisation du checkout, le B2B et la vente en gros, les automatisations Shopify Flow et les intégrations sur mesure.",
    },
    {
      q: "Pouvez-vous refondre ou migrer ma boutique existante ?",
      a: "Oui. Nous pouvons refondre votre boutique Shopify actuelle ou vous faire migrer depuis une autre plateforme, en transférant vos produits, clients et historique de commandes tout en protégeant votre référencement.",
    },
    {
      q: "Le code et l'application m'appartiendront-ils ?",
      a: "Oui. Une fois le projet payé, le code, les designs et l'application vous appartiennent. Nous vous remettons tout, avec la documentation, pour que vous ne soyez jamais dépendant de nous.",
    },
    {
      q: "Proposez-vous un support après le lancement ?",
      a: "Oui. Nous proposons des forfaits de maintenance qui couvrent les corrections de bugs, les mises à jour Shopify, la surveillance des performances et de petites améliorations, pour que votre boutique et vos applications fonctionnent sans accroc.",
    },
  ],

  posts: [
    {
      title: "7 façons d'accélérer votre boutique Shopify",
      excerpt:
        "Des solutions concrètes pour les images, les applications et le code du thème, qui réduisent les temps de chargement et augmentent les conversions.",
      category: "Performance",
      readTime: "6 min de lecture",
    },
    {
      title: "Applications Shopify publiques ou privées : de laquelle avez-vous besoin ?",
      excerpt:
        "En quoi les deux types d'applications diffèrent en coût, validation et maintenance, et quand chacun a du sens.",
      category: "Applications Shopify",
      readTime: "5 min de lecture",
    },
    {
      title: "Guide de personnalisation du checkout Shopify Plus",
      excerpt:
        "Ce que vous pouvez modifier avec les extensions de checkout et Functions, et ce qu'il faut prévoir avant de commencer.",
      category: "Shopify Plus",
      readTime: "8 min de lecture",
    },
  ],

  about: {
    story: {
      lead: "StrikeBits est une **entreprise de développement logiciel** spécialisée dans la création de **boutiques et d'applications Shopify sur mesure**.",
      paragraphs: [
        "Nous sommes une agence partenaire Shopify basée à Bengaluru, en Inde. Notre travail couvre toute la plateforme Shopify : applications privées et publiques, création complète de boutiques, thèmes sur mesure et Shopify Plus.",
        "Nous restons concentrés sur une seule plateforme, et c'est voulu. Les personnes qui travaillent sur votre projet connaissent en profondeur les API de Shopify, son processus de validation des applications et ses bonnes pratiques, et peuvent vous dire tôt ce qui fonctionnera ou non.",
      ],
    },
    values: [
      {
        title: "Spécialistes Shopify",
        text: "Nous nous concentrons sur une seule plateforme et la connaissons en profondeur : ses API, son processus de validation et ses limites.",
      },
      {
        title: "Communication claire",
        text: "Des points d'étape en langage simple et des délais honnêtes, pour que vous sachiez toujours où en est votre projet.",
      },
      {
        title: "Conçu pour performer",
        text: "Un code rapide et fiable qui garde les boutiques rapides et les applications stables à mesure que votre activité grandit.",
      },
      {
        title: "Partenaires sur le long terme",
        text: "Nous restons après le lancement, avec maintenance, mises à jour et améliorations.",
      },
    ],
    team: [
      { role: "Développeur Shopify & spécialiste de la conversion" },
      { role: "Expert Shopify & growth marketer" },
      { name: "À venir", role: "Bientôt dans l'équipe" },
      { name: "À venir", role: "Bientôt dans l'équipe" },
    ],
  },

  portfolio: {
    hero: {
      tag: "Portfolio",
      headline: ["Les applications", "que nous avons créées et lancées."],
      intro:
        "Nous créons et exploitons nos propres applications sur l'App Store Shopify. Chacune fait une chose et la fait bien, s'installe en quelques minutes et est accompagnée par ceux qui l'ont créée.",
    },
    apps: [
      {
        tagline:
          "Ventes incitatives et complémentaires dans une pop-up à l'ajout au panier. Les acheteurs ajoutent des extras à prix réduit en un geste.",
        features: [
          "Pop-up d'ajout au panier avec ajout en un geste et sélecteur de variantes",
          "Widgets d'upsell sur les pages produit, dans le panier et dans un tiroir de panier coulissant",
          "Remises automatiques en pourcentage ou fixes au checkout",
          "Vues, ajouts et revenus suivis pour chaque upsell",
        ],
      },
      {
        tagline:
          "Tarifs de livraison des transporteurs en direct au checkout, pour les marchands qui expédient partout dans le monde.",
        features: [
          "Tarifs en temps réel de plusieurs transporteurs",
          "Fonctionne pour les boutiques de tous les pays",
          "Disponible en anglais, français et allemand",
        ],
      },
    ],
    cta: {
      headline: ["Besoin d'une application sur mesure ?", "Construisons-la."],
      text: "Dites-nous ce dont votre boutique a besoin. Nous définissons le périmètre, la développons et l'accompagnons jusqu'à la validation de l'App Store si elle est publique.",
      button: { label: "Demander un devis" },
    },
  },
};
