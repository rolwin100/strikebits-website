import type { Metadata } from "next";
import { ServicesHero } from "@/components/ServicePage";
import { Services } from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import { WhyStrikeBits } from "@/components/WhyStrikeBits";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Shopify Services | StrikeBits",
  description:
    "Shopify app development, store development, theme development, Shopify Plus and ongoing support from StrikeBits, a Shopify Partner agency.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services showHeader={false} />
      <ProcessSection />
      <WhyStrikeBits />
      <Faq />
    </>
  );
}
