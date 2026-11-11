import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static build: `pnpm build` writes the site to the `out` folder.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
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
