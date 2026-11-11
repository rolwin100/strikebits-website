import type { Metadata } from "next";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";

export const metadata: Metadata = {
  title: "About | StrikeBits",
  description:
    "StrikeBits is a software development company and Shopify Partner that specializes in building custom Shopify stores and apps.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      {/* Client logos, with space before the footer */}
      <div className="pb-20 md:pb-28">
        <Clients />
      </div>
    </>
  );
}
