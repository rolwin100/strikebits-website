import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// One 404 page for the whole site (the site has two root layouts, so there is no shared layout to use).
// It shows no menu or footer, and stays in English because it can't tell which language the visitor was in.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page not found | StrikeBits",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="grid min-h-full place-items-center bg-white px-6 py-20 text-center">
        <main>
          <p className="font-display text-7xl font-semibold text-pine-600 md:text-8xl">404</p>
          <h1 className="mt-4 text-3xl md:text-4xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link href="/" className="btn btn-lime mt-8">
            Back to the home page
          </Link>
        </main>
      </body>
    </html>
  );
}
