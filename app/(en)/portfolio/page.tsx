import PortfolioPage, { portfolioMetadata } from "../../_routes/portfolio";

export const metadata = portfolioMetadata("en");

export default function Page() {
  return <PortfolioPage locale="en" />;
}
