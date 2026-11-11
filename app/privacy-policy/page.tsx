import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { privacyPolicy } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | StrikeBits",
  description: "How StrikeBits collects, uses and protects personal information on this website, in its Shopify apps and across its development services.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage content={privacyPolicy} />;
}
