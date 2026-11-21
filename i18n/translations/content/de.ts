import type { ContentOverrides } from "./types";

// German page content. Lists follow the same order as i18n/translations/content/en.ts; anything missing shows in English.
// The privacy policy is not translated here: it is a legal text and should be translated by a professional.
export const de: ContentOverrides = {
  services: [
    {
      title: "Shopify-App-Entwicklung",
      topic: "Shopify-App-Entwicklung",
      short: "Private Apps und Apps für den App Store",
      description:
        "Individuelle Apps, die Ihre Abläufe automatisieren, Ihre Tools verbinden oder im Shopify App Store starten, von der Idee bis zur Freigabe.",
      points: [
        "Private Apps für interne Abläufe",
        "Öffentliche Apps, gebaut für die App-Store-Prüfung",
        "Integrationen mit Drittanbietern und ERP",
        "Checkout-, Flow- und Admin-Erweiterungen",
      ],
      page: {
        headline: ["Individuelle Shopify-Apps,", "gebaut für Ihr Geschäft."],
        intro:
          "Unser Team ist darauf spezialisiert, leistungsstarke, skalierbare und sichere Shopify-Apps zu entwickeln, die genau auf Ihre Anforderungen zugeschnitten sind.",
        features: [
          {
            title: "Eingebettete Admin-Apps",
            text: "Apps direkt im Shopify-Admin, entwickelt mit Polaris und App Bridge, damit sie sich für Ihr Team wie ein Teil von Shopify anfühlen.",
          },
          {
            title: "Individuelle Apps für einen Store",
            text: "Tools, die zu Ihren Abläufen passen: Sie automatisieren Handarbeit, synchronisieren Daten und ergänzen Funktionen, die Shopify nicht bietet.",
          },
          {
            title: "Öffentliche App-Store-Apps",
            text: "Apps nach den Anforderungen von Shopify, mit Unterstützung bei Einreichung und App-Prüfung.",
          },
          {
            title: "Integrationen",
            text: "Verbinden Sie Shopify über die Admin-API und Webhooks mit Ihrem ERP-, CRM-, Lager- oder Buchhaltungssystem.",
          },
          {
            title: "Erweiterungen",
            text: "Checkout-, Theme-, Admin- und Shopify-Flow-Erweiterungen, die Funktionen genau dort ergänzen, wo sie gebraucht werden.",
          },
          {
            title: "App-Abrechnung",
            text: "Abonnements und nutzungsbasierte Gebühren, eingerichtet über die Billing-API von Shopify.",
          },
        ],
        fits: [
          {
            title: "Sie erledigen wiederkehrende Arbeit von Hand",
            text: "Bestellungen taggen, Bestände abgleichen oder Berichte erstellen: Das kann eine App automatisch übernehmen.",
          },
          {
            title: "Keine bestehende App passt wirklich",
            text: "Sie brauchen eine Funktion, die App-Store-Apps nur halb abdecken oder die speziell zu Ihren Abläufen passt.",
          },
          {
            title: "Sie haben eine App-Idee",
            text: "Sie möchten ein Produkt für andere Händler im Shopify App Store veröffentlichen.",
          },
        ],
        faqs: [
          {
            q: "Was ist der Unterschied zwischen einer individuellen und einer öffentlichen App?",
            a: "Eine individuelle App wird für einen einzigen Store entwickelt und direkt installiert, ohne den App Store. Eine öffentliche App kann jeder Händler installieren; sie muss vor der Veröffentlichung die App-Prüfung von Shopify bestehen.",
          },
          {
            q: "Können Sie meine App im Shopify App Store einreichen?",
            a: "Ja. Wir entwickeln nach den App-Anforderungen von Shopify und begleiten Sie durch Einreichung und Prüfung, einschließlich aller Änderungen, die das Prüfteam verlangt.",
          },
          {
            q: "Welche Technologien verwenden Sie?",
            a: "Wir arbeiten mit den Tools von Shopify, darunter die GraphQL Admin API, App Bridge und Polaris, auf Basis von JavaScript und TypeScript. Wir empfehlen das passende Setup für Ihr Projekt.",
          },
        ],
      },
    },
    {
      title: "Shopify-Store-Entwicklung",
      topic: "Shopify-Store-Entwicklung",
      short: "Individuelle Stores, die verkaufen",
      description: "Komplette Store-Projekte und Überarbeitungen, gestaltet rund um Ihre Marke und Ihre Kunden.",
      points: ["Store-Einrichtung und Migrationen", "Auf Konversion ausgelegtes Design", "App-Einrichtung und Integrationen"],
      page: {
        headline: ["Shopify-Stores,", "die verkaufen."],
        intro:
          "Wir gestalten und entwickeln komplette Shopify-Stores rund um Ihre Marke, Ihre Produkte und die Art, wie Ihre Kunden einkaufen.",
        features: [
          {
            title: "Store-Einrichtung",
            text: "Produkte, Kollektionen, Zahlungen, Versand und Steuern von Anfang an richtig konfiguriert.",
          },
          {
            title: "Migrationen",
            text: "Wechseln Sie von WooCommerce, Magento oder einer anderen Plattform, mit Ihren Produkten, Kunden und Ihrer Bestellhistorie.",
          },
          {
            title: "Auf Konversion ausgelegtes Design",
            text: "Klare Navigation, Produktseiten und Warenkorb, gestaltet, um Käufer vom Einstieg bis zum Checkout zu führen.",
          },
          {
            title: "Mobile first",
            text: "Layouts, die zuerst für Smartphones gestaltet sind, denn dort finden heute die meisten Einkäufe statt.",
          },
          {
            title: "App-Einrichtung und Integrationen",
            text: "Die richtigen Apps für Bewertungen, Abos, E-Mail und mehr, ausgewählt und eingerichtet, ohne den Store zu verlangsamen.",
          },
          {
            title: "SEO-Grundlagen",
            text: "Saubere URLs, Weiterleitungen, Metadaten und strukturierte Daten, damit Suchmaschinen Ihren Store finden und verstehen.",
          },
        ],
        fits: [
          { title: "Sie starten eine neue Marke", text: "Sie brauchen einen Store, der vom ersten Tag an verkaufsbereit ist." },
          {
            title: "Sie wechseln zu Shopify",
            text: "Sie sind einer anderen Plattform entwachsen und möchten wechseln, ohne Daten oder Suchmaschinen-Rankings zu verlieren.",
          },
          {
            title: "Ihr aktueller Store bremst Sie aus",
            text: "Er ist langsam, schwer zu pflegen oder passt nicht mehr zu Ihrer Marke.",
          },
        ],
        faqs: [
          {
            q: "Können Sie meinen bestehenden Store zu Shopify migrieren?",
            a: "Ja. Wir übertragen Ihre Produkte, Kunden und Bestellhistorie und richten Weiterleitungen von Ihren alten URLs ein, um Ihre Rankings zu schützen.",
          },
          {
            q: "Kann ich den Store selbst aktualisieren?",
            a: "Ja. Wir bauen Seiten aus Abschnitten, die Sie im Theme-Editor von Shopify bearbeiten können, und schulen Ihr Team vor der Übergabe. Für alltägliche Änderungen brauchen Sie keinen Entwickler.",
          },
          {
            q: "Gestalten Sie den Store auch, oder entwickeln Sie ihn nur?",
            a: "Beides. Wir gestalten Ihren Store von Grund auf oder setzen vorhandene Designs um.",
          },
        ],
      },
    },
    {
      title: "Shopify-Theme-Entwicklung",
      topic: "Shopify-Theme-Entwicklung",
      short: "Maßgeschneiderte, schnell ladende Themes",
      description: "Individuelle und angepasste Themes, die einzigartig aussehen und auf jedem Gerät schnell laden.",
      points: [
        "Individuelle Online Store 2.0 Themes",
        "Abschnitte, die Ihr Team bearbeiten kann",
        "Optimierung der Core Web Vitals",
      ],
      page: {
        headline: ["Shopify-Themes,", "gemacht für Ihre Marke."],
        intro:
          "Individuelle und angepasste Shopify-Themes, die nach Ihrer Marke aussehen, schnell laden und für Ihr Team leicht zu bearbeiten bleiben.",
        features: [
          {
            title: "Individuelle Themes",
            text: "Themes, von Grund auf gestaltet und entwickelt auf der Online-Store-2.0-Architektur von Shopify.",
          },
          {
            title: "Theme-Anpassung",
            text: "Neue Abschnitte, Vorlagen und Funktionen für das Theme, das Sie bereits nutzen.",
          },
          {
            title: "Bearbeitbare Abschnitte",
            text: "Abschnitte und Blöcke auf jeder Seite, damit Ihr Team Inhalte im Theme-Editor anordnen und bearbeiten kann.",
          },
          {
            title: "Performance",
            text: "Schlanker Code sowie optimierte Bilder und Skripte, abgestimmt auf die Core Web Vitals.",
          },
          {
            title: "Barrierefreiheit",
            text: "Semantisches Markup, Tastaturbedienung und gut lesbare Kontraste, damit alle einkaufen können.",
          },
          {
            title: "App-Blöcke und Metafelder",
            text: "Unterstützung für App-Blöcke, Metafelder und Metaobjekte, damit sich Apps und strukturierte Inhalte sauber einfügen.",
          },
        ],
        fits: [
          {
            title: "Ihr Store sieht aus wie alle anderen",
            text: "Sie möchten einen Shop, der unverkennbar Ihre Marke zeigt.",
          },
          { title: "Ihr Store ist langsam", text: "Schwerer Theme-Code und Skripte kosten Sie Geschwindigkeit." },
          {
            title: "Ihrem Theme fehlt eine Funktion",
            text: "Sie brauchen einen Abschnitt, eine Vorlage oder ein Layout, das Ihr aktuelles Theme nicht bietet.",
          },
        ],
        faqs: [
          {
            q: "Brauche ich ein individuelles Theme, oder reicht es, ein bestehendes anzupassen?",
            a: "Ein bestehendes Theme anzupassen geht schneller und passt zu den meisten Stores. Ein komplett individuelles Theme lohnt sich, wenn Ihr Design oder Ihre Funktionen deutlich über ein bestehendes Theme hinausgehen. Wir empfehlen eine Lösung, nachdem wir uns Ihren Store angesehen haben.",
          },
          {
            q: "Wirkt sich die Arbeit am Theme auf meinen Live-Store aus?",
            a: "Nein. Wir arbeiten an einer unveröffentlichten Kopie Ihres Themes und veröffentlichen erst nach Ihrer Freigabe.",
          },
          {
            q: "Kann mein Team das Theme bearbeiten?",
            a: "Ja. Wir arbeiten mit Abschnitten und Blöcken, sodass Ihr Team Inhalte und Layouts im Theme-Editor von Shopify ändern kann, ohne Code anzufassen.",
          },
        ],
      },
    },
    {
      title: "Shopify-Plus-Entwicklung",
      topic: "Shopify-Plus-Entwicklung",
      short: "Lösungen für Marken mit hohem Volumen",
      description: "Anspruchsvolle Projekte für wachsende Marken, die mehr brauchen als einen Store von der Stange.",
      points: ["B2B- und Großhandels-Setups", "Checkout-Anpassung", "Automatisierungen mit Shopify Flow"],
      page: {
        headline: ["Shopify-Plus-Projekte", "für Marken mit hohem Volumen."],
        intro:
          "Anspruchsvolle Shopify-Plus-Entwicklung für Marken, die einem Standard-Store entwachsen sind: individueller Checkout, B2B, Automatisierung und Integrationen.",
        features: [
          {
            title: "Checkout-Anpassung",
            text: "Checkout-UI-Erweiterungen und Shopify Functions für eigene Felder, Upsells, Rabatte sowie Zahlungs- und Versandregeln.",
          },
          {
            title: "B2B und Großhandel",
            text: "Firmenkonten, kundenspezifische Preislisten, Zahlungsbedingungen und Mengenregeln mit B2B auf Shopify.",
          },
          {
            title: "Automatisierung",
            text: "Workflows mit Shopify Flow und Zeitpläne mit Launchpad, die Ihrem Team Routineaufgaben und Kampagnenstarts abnehmen.",
          },
          {
            title: "Internationaler Verkauf",
            text: "Shopify Markets, eingerichtet für lokale Währungen, Sprachen, Domains und Zölle.",
          },
          {
            title: "Enterprise-Integrationen",
            text: "Zuverlässige Verbindungen zu Ihren ERP-, Auftragsverwaltungs- und Produktinformationssystemen.",
          },
          {
            title: "Migration zu Plus",
            text: "Wechseln Sie von Magento, einer anderen Enterprise-Plattform oder einem Standard-Shopify-Tarif mit minimaler Unterbrechung.",
          },
        ],
        fits: [
          {
            title: "Ihr Checkout muss mehr können",
            text: "Sie brauchen eigene Felder, Regeln oder Angebote, die der Standard-Checkout nicht erlaubt.",
          },
          {
            title: "Sie verkaufen im Groß- und Einzelhandel",
            text: "Sie möchten B2B und Direktvertrieb aus einem einzigen Shopify-Store betreiben.",
          },
          {
            title: "Sie expandieren international",
            text: "Sie brauchen lokale Währungen, Sprachen und Preise für jeden Markt.",
          },
        ],
        faqs: [
          {
            q: "Brauche ich Shopify Plus?",
            a: "Plus richtet sich an Händler mit hohem Volumen. Es bietet tiefere Checkout-Anpassung, B2B-Funktionen, mehr Automatisierung und höhere API-Limits. Wenn Sie unsicher sind, prüfen wir Ihre Anforderungen und sagen Ihnen ehrlich, ob ein Standardtarif ausreicht.",
          },
          {
            q: "Können Sie den Shopify-Checkout anpassen?",
            a: "Ja, mit Shopify Plus. Wir nutzen Checkout-UI-Erweiterungen und Shopify Functions, den von Shopify unterstützten, updatesicheren Weg, den Checkout anzupassen.",
          },
          {
            q: "Können Sie unsere alten checkout.liquid-Anpassungen übernehmen?",
            a: "Ja. Shopify hat checkout.liquid eingestellt, und wir bauen diese Anpassungen mit Checkout Extensibility neu auf.",
          },
        ],
      },
    },
    {
      title: "Laufender Support",
      topic: "laufender Support",
      short: "Wartung, Updates und Monitoring",
      description: "Wir halten Ihren Store und Ihre Apps nach dem Launch stabil, sicher und aktuell.",
      points: ["Fehlerbehebung und Updates", "Performance-Monitoring", "Monatliche Support-Pakete"],
      page: {
        headline: ["Laufender Support", "für Ihren Store und Ihre Apps."],
        intro:
          "Wir halten Ihren Shopify-Store und Ihre Apps nach dem Launch in Form, mit Korrekturen, Updates und Verbesserungen von Menschen, die Ihr Setup kennen.",
        features: [
          { title: "Fehlerbehebung", text: "Probleme gefunden, behoben und getestet, bevor sie Sie Umsatz kosten." },
          {
            title: "Shopify- und API-Updates",
            text: "Shopify veröffentlicht jedes Quartal eine neue API-Version. Wir halten Ihre Apps und Integrationen auf unterstützten Versionen.",
          },
          {
            title: "Monitoring",
            text: "Wir überwachen Fehler und fehlgeschlagene Integrationen, damit Probleme früh erkannt werden.",
          },
          {
            title: "Performance",
            text: "Regelmäßige Geschwindigkeitschecks und Optimierungen, damit Ihr Store auch beim Wachsen schnell bleibt.",
          },
          {
            title: "Kleine Verbesserungen",
            text: "Neue Abschnitte, Anpassungen und Funktionen, ohne jedes Mal ein neues Projekt zu starten.",
          },
          {
            title: "Ein Team, das Ihren Store kennt",
            text: "Sie arbeiten mit Menschen, die Ihr Setup bereits verstehen, nicht jedes Mal mit einem neuen Entwickler.",
          },
        ],
        fits: [
          {
            title: "Sie sind gerade gestartet",
            text: "Sie möchten nach dem Go-live ein Team für Korrekturen und Verbesserungen zur Hand haben.",
          },
          {
            title: "Ihr Entwickler ist nicht mehr da",
            text: "Sie haben einen Store oder eine App übernommen und brauchen jemanden, der sich darum kümmert.",
          },
          {
            title: "Sie möchten stetige Verbesserung",
            text: "Ihr Store soll immer besser werden, ohne ein großes Projekt aufzusetzen.",
          },
        ],
        faqs: [
          {
            q: "Betreuen Sie auch Stores und Apps, die Sie nicht entwickelt haben?",
            a: "Ja. Wir beginnen mit einer Prüfung des vorhandenen Codes und Setups, damit wir wissen, was wir übernehmen.",
          },
          {
            q: "Wie funktioniert ein Support-Paket?",
            a: "Die Pakete laufen monatlich. Wir vereinbaren, was abgedeckt ist, etwa Korrekturen, Updates und ein festes Kontingent an Verbesserungen, und wie Sie uns erreichen.",
          },
          {
            q: "Was passiert, wenn Shopify etwas ändert?",
            a: "Shopify stellt ältere API-Versionen nach festem Zeitplan ein. Wir verfolgen diese Änderungen und aktualisieren Ihre Apps und Ihr Theme, bevor sie betroffen sind.",
          },
        ],
      },
    },
  ],

  faqs: [
    {
      q: "Wie lange dauert die Entwicklung einer individuellen Shopify-App?",
      a: "Eine fokussierte private App dauert meist 2–4 Wochen. Eine öffentliche App für den Shopify App Store braucht in der Regel 6–12 Wochen, einschließlich der App-Prüfung durch Shopify. Nach unserem Erstgespräch erhalten Sie einen klaren Zeitplan.",
    },
    {
      q: "Was kostet ein Shopify-Projekt?",
      a: "Das hängt vom Umfang ab. Nach einem kurzen Erstgespräch senden wir Ihnen ein Festpreisangebot, sodass Sie die vollen Kosten kennen, bevor die Arbeit beginnt. Laufender Support ist als einfaches Monatspaket verfügbar.",
    },
    {
      q: "Arbeiten Sie mit Shopify-Plus-Stores?",
      a: "Ja. Wir entwickeln für Shopify-Plus-Marken, einschließlich Checkout-Anpassung, B2B- und Großhandels-Setups, Shopify-Flow-Automatisierungen und individueller Integrationen.",
    },
    {
      q: "Können Sie meinen bestehenden Store neu gestalten oder migrieren?",
      a: "Ja. Wir können Ihren aktuellen Shopify-Store neu gestalten oder Sie von einer anderen Plattform migrieren und dabei Produkte, Kunden und Bestellhistorie übertragen, ohne Ihre Suchmaschinen-Rankings zu gefährden.",
    },
    {
      q: "Gehören mir der Code und die App?",
      a: "Ja. Sobald das Projekt bezahlt ist, gehören Ihnen Code, Designs und App. Wir übergeben alles mit Dokumentation, damit Sie nie an uns gebunden sind.",
    },
    {
      q: "Bieten Sie nach dem Launch Support an?",
      a: "Ja. Wir bieten Wartungspakete mit Fehlerbehebung, Shopify-Updates, Performance-Monitoring und kleinen Verbesserungen, damit Ihr Store und Ihre Apps reibungslos laufen.",
    },
  ],

  posts: [
    {
      title: "7 Wege, Ihren Shopify-Store schneller zu machen",
      excerpt: "Praktische Lösungen für Bilder, Apps und Theme-Code, die Ladezeiten verkürzen und Konversionen steigern.",
      category: "Performance",
      readTime: "6 Min. Lesezeit",
    },
    {
      title: "Öffentliche oder private Shopify-Apps: Was brauchen Sie?",
      excerpt: "Wie sich die beiden App-Typen bei Kosten, Prüfung und Wartung unterscheiden und wann welcher sinnvoll ist.",
      category: "Shopify-Apps",
      readTime: "5 Min. Lesezeit",
    },
    {
      title: "Ein Leitfaden zur Checkout-Anpassung mit Shopify Plus",
      excerpt: "Was Sie mit Checkout-Erweiterungen und Functions ändern können und was Sie vorab planen sollten.",
      category: "Shopify Plus",
      readTime: "8 Min. Lesezeit",
    },
  ],

  about: {
    story: {
      lead: "StrikeBits ist ein **Softwareentwicklungsunternehmen**, das auf **individuelle Shopify-Stores und -Apps** spezialisiert ist.",
      paragraphs: [
        "Wir sind eine Shopify-Partner-Agentur mit Sitz in Bengaluru, Indien. Unsere Arbeit deckt die gesamte Shopify-Plattform ab: private und öffentliche Apps, komplette Store-Projekte, individuelle Themes und Shopify Plus.",
        "Wir konzentrieren uns bewusst auf eine Plattform. So kennen die Menschen, die an Ihrem Projekt arbeiten, die APIs von Shopify, den App-Prüfprozess und die Best Practices genau und können Ihnen früh sagen, was funktioniert und was nicht.",
      ],
    },
    values: [
      {
        title: "Shopify-Spezialisten",
        text: "Wir konzentrieren uns auf eine Plattform und kennen sie genau: ihre APIs, ihren Prüfprozess und ihre Grenzen.",
      },
      {
        title: "Klare Kommunikation",
        text: "Verständliche Updates und ehrliche Zeitpläne, damit Sie immer wissen, wo Ihr Projekt steht.",
      },
      {
        title: "Auf Leistung gebaut",
        text: "Schneller, zuverlässiger Code, der Stores schnell und Apps stabil hält, während Ihr Geschäft wächst.",
      },
      {
        title: "Langfristige Partner",
        text: "Wir bleiben nach dem Launch, mit Wartung, Updates und Verbesserungen.",
      },
    ],
    team: [
      { role: "Shopify-Entwickler & Conversion-Spezialist" },
      { role: "Shopify-Experte & Growth-Marketer" },
      { name: "Wird bekannt gegeben", role: "Kommt bald dazu" },
      { name: "Wird bekannt gegeben", role: "Kommt bald dazu" },
    ],
  },

  portfolio: {
    hero: {
      tag: "Portfolio",
      headline: ["Apps, die wir", "entwickelt und veröffentlicht haben."],
      intro:
        "Wir entwickeln und betreiben eigene Apps im Shopify App Store. Jede erledigt eine Aufgabe richtig gut, ist in Minuten installiert und wird von den Menschen betreut, die sie gebaut haben.",
    },
    apps: [
      {
        tagline:
          "Upsells und Cross-Sells in einem Pop-up beim Hinzufügen zum Warenkorb. Käufer fügen rabattierte Extras mit einem Tipp hinzu.",
        features: [
          "Warenkorb-Pop-up mit Hinzufügen per Tipp und Variantenauswahl",
          "Upsell-Widgets auf Produktseiten, im Warenkorb und in einer ausklappbaren Warenkorb-Leiste",
          "Automatische prozentuale oder feste Rabatte im Checkout",
          "Aufrufe, Hinzufügungen und Umsatz für jeden Upsell erfasst",
        ],
      },
      {
        tagline: "Live-Versandkosten von Paketdiensten im Checkout, für Händler, die weltweit versenden.",
        features: [
          "Echtzeit-Tarife mehrerer Versanddienstleister",
          "Funktioniert für Stores in jedem Land",
          "Verfügbar auf Englisch, Französisch und Deutsch",
        ],
      },
    ],
    cta: {
      headline: ["Sie brauchen eine individuelle App?", "Wir bauen sie."],
      text: "Sagen Sie uns, was Ihr Store braucht. Wir planen den Umfang, entwickeln die App und begleiten sie durch die App-Store-Prüfung, wenn sie öffentlich wird.",
      button: { label: "Angebot anfordern" },
    },
  },
};
