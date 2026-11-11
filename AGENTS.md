<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# StrikeBits website

Marketing site for **StrikeBits**, a Shopify app development agency and Shopify Partner. It replaces the old site at strikebits.com. Full design and content guidance lives in `.claude/skills/strikebits-website/SKILL.md`; read it before design or content work.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, pnpm
- Tailwind CSS v4, loaded through `@tailwindcss/turbopack` (see `next.config.ts`); theme tokens are in `app/globals.css`
- `lucide-react` for icons (it has no brand icons; social icons are hand-written SVGs in `components/Footer/SocialIcons.tsx`)
- `motion` for animation (import from `"motion/react"`), `@base-ui/react` for the FAQ accordion

## Commands

- `pnpm dev`: local development
- `pnpm build`: static export to `out/` (preview with `npx serve out`)
- `pnpm lint`
- Typecheck: `node node_modules/typescript/bin/tsc --noEmit -p .`

## Static export rules

The site is built with `output: "export"`. Everything must work without a server.

- Do not enable `cacheComponents` or `partialPrefetching`; the build fails with "PPR cannot be enabled in export mode".
- No route handlers that need a server, server actions, `cookies()`, `headers()`, redirects or rewrites in config.
- Every dynamic route needs `generateStaticParams`; `params` is a Promise and must be awaited.
- Images are unoptimised (`images.unoptimized`); supply files already sized and compressed (webp/avif).
- On `next/image`, use `preload` for above-the-fold images, not the deprecated `priority`.
- Keep `usePathname` consumers inside `<Suspense>`.

## Structure

- `app/`: routes. `layout.tsx` renders the shared Header and Footer, so pages only return their sections.
- `components/<Name>/`: one folder per section, exported through `index.ts`.
- `data/`: all content. Edit copy here, not in components.
  - `site.ts` (name, contact details, socials, booking link), `services.ts` (drives the header dropdown, footer column, home cards and `/services/<slug>` pages), `stats.ts`, `faqs.ts`, `posts.ts`, `about.ts`, `privacy.ts`
- `public/`: images. `public/clients/` holds the client logos.
- `_unused/`: old backups, safe to delete.

## Routes

`/`, `/about`, `/contact`, `/privacy-policy`, `/services`, `/services/<slug>` (five services). Terms and Cookie links point to `/privacy-policy`.

Not built yet (links to them 404): `/portfolio`, `/blog`, `/blog/<slug>`.

## Conventions

- Tailwind v4: `@apply` cannot apply the project's own component classes. Combine classes in markup (`className="btn btn-lime"`).
- Reuse the component classes in `globals.css` (`wrap`, `section`, `tag`, `heading`, `lead`, `btn`, `card-pastel`, `chip-icon`) before writing new ones.
- Wrap sections in `components/Reveal.tsx` for the scroll fade-up. Use `margin="0px"` for content that is visible on load.
- No hover lift or drop-shadow effects on cards.
- Do not reuse the same photo on more than one page.
- Do not mention MedusaJS anywhere. Do not add testimonials unless real ones are supplied.
- Placeholder content is marked `TODO`; never present invented figures, names or quotes as real.
