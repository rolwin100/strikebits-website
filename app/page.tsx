import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyStrikeBits } from "@/components/WhyStrikeBits";
import { BlogSection } from "@/components/Blog";
import { Faq } from "@/components/Faq";
import ProcessSection from "@/components/ProcessSection";

// The header and footer come from app/layout.tsx
export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Stats />
      <Services />
      <ProcessSection />
      <WhyStrikeBits />
      <BlogSection />
      <Faq />
    </>
  );
}
