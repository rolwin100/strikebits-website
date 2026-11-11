import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact | StrikeBits",
  description:
    "Ready to transform your e-commerce business? Get in touch with StrikeBits to discuss your Shopify project. We usually reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      {/* The FAQ's "Ask us a question" button would link back to this page, so hide it here */}
      <Faq showContactButton={false} />
    </>
  );
}
