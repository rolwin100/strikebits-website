// Company and contact details, used by the footer and the contact page.
// Taken from the current strikebits.com contact page.
export const site = {
  name: "StrikeBits",
  // Name used in legal documents (as in the current privacy policy)
  legalName: "StrikeBits Labs",
  email: "hello@strikebits.com",
  emailNote: "We usually reply within 24 hours",
  phone: "+91 87621 32929",
  phoneNote: "Mon – Fri, 9am – 6pm",
  address: "Bengaluru, KA, India",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Bengaluru%2C+Karnataka%2C+India",
  // TODO: add your scheduling link (for example Calendly). While this is empty,
  // the "Book a call" button opens an email asking for a call instead.
  bookingUrl: "",
  socials: {
    linkedin: "#", // TODO: your LinkedIn page
    x: "#", // TODO: your X profile
    github: "#", // TODO: your GitHub organisation
  },
};

/** "+91 87621 32929" -> "tel:+918762132929" */
export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

/** Where the "Book a call" buttons go */
export const bookingHref =
  site.bookingUrl ||
  `mailto:${site.email}?subject=${encodeURIComponent("Book a 30-minute consultation call")}`;
