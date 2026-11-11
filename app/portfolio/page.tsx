import type { Metadata } from "next";
import { AppShowcase, PortfolioCta, PortfolioHero } from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio | StrikeBits",
  description:
    "Shopify apps built and run by StrikeBits, including Sugar Rush for upsells and cross-sells and Sugar Ship for live shipping rates.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <AppShowcase />
      <PortfolioCta />
    </>
  );
}
