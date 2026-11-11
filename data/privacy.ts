import type { LegalDocument } from "@/components/Legal";
import { site } from "@/data/site";

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
export const privacyPolicy: LegalDocument = {
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
