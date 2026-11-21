import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static build: `pnpm build` writes the site to the `out` folder.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // The site has two root layouts (English, and /de /fr), so the 404 page is defined once in app/global-not-found.tsx
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
