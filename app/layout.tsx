import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer, FooterReveal } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StrikeBits | Shopify App & Store Development Agency",
  description:
    "StrikeBits is a Shopify Partner agency building custom Shopify apps, Shopify stores and themes for growing brands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      id="top"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {/* z-10 keeps the page above the footer as it slides out from underneath */}
        <main className="relative z-10 flex-1 bg-white">{children}</main>
        <FooterReveal>
          <Footer />
        </FooterReveal>
      </body>
    </html>
  );
}
