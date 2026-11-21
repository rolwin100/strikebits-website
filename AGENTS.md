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
- `netlify dev`: runs the site together with the contact form function (`pnpm dev` alone returns 404 for `/api/contact`)
- Typecheck: `node node_modules/typescript/bin/tsc --noEmit -p .`

## Static export rules

The site is built with `output: "export"`. Everything must work without a server.

- Do not enable `cacheComponents` or `partialPrefetching`; the build fails with "PPR cannot be enabled in export mode".
- No route handlers that need a server, server actions, `cookies()`, `headers()`, redirects or rewrites in config.
- Server code goes in Netlify Functions instead. The contact form posts to `/api/contact`, served by `netlify/functions/contact.mts`, which emails enquiries through Resend. Its environment variables are listed in `.env.example`.
- Every dynamic route needs `generateStaticParams`; `params` is a Promise and must be awaited.
- Images are unoptimised (`images.unoptimized`); supply files already sized and compressed (webp/avif).
- On `next/image`, use `preload` for above-the-fold images, not the deprecated `priority`.
- Keep `usePathname` consumers inside `<Suspense>`.

## Structure

- `app/`: routes, split into `(en)` and `[lang]` (see Languages). The shared header and footer come from `app/_shell/RootShell.tsx`, so pages only return their sections.
- `i18n/`: language config, interface text (`messages/`), translated page content (`content/`), and the client helpers.
- `components/<Name>/`: one folder per section, exported through `index.ts`.
- `data/`: shared data and types (`site.ts` holds contact details and links; the others pair with `i18n/content/`). Edit copy in `i18n/content/en.ts` (page content) or `i18n/messages/en.ts` (buttons, headings), not in components.

## Routes

`/`, `/about`, `/contact`, `/portfolio`, `/privacy-policy`, `/services`, `/services/<slug>` (five services). Terms and Cookie links point to `/privacy-policy`. The same routes exist under `/de/` and `/fr/`.

`/portfolio` lists our own apps (content in `i18n/content/en.ts`).

Not built yet (links to them 404): `/blog`, `/blog/<slug>`.

## Languages (English, German, French)

English is the site root; German and French are `/de/...` and `/fr/...`. It is a hand-rolled setup (no i18n library), following Next's own dictionary guide, because the site is a static export and Proxy (middleware) does not run.

- **Two route trees, one set of pages.** `app/(en)/` is English and `app/[lang]/` is `de`/`fr`; each has its own root layout. Every `page.tsx` is a few lines that call a shared page in `app/_routes/` with a `locale`. A new page needs its shared version in `_routes/` plus a wrapper in both trees. `app/_shell/RootShell.tsx` holds `<html>`, header and footer.
- **Locale config** is in `i18n/config.ts`: the language list, `localizedHref()` (`/about` becomes `/de/about`) and `translatedLocales`.
- **Interface text** (headings, buttons, labels, page titles) lives in `i18n/messages/en.ts`, never hard-coded in components. `de.ts` and `fr.ts` hold only what is translated; anything missing falls back to English (`deepMerge`). Server components call `getMessages(locale)`; client components call `useMessages()` / `useLocale()` (set up by `I18nProvider` in `RootShell`).
- **Page content** (services, FAQs, blog posts, About, portfolio, privacy policy) lives in English in `i18n/content/en.ts`; edit English copy there. `i18n/content/de.ts` and `fr.ts` list only the fields they translate. The `data/` files hold the types and a `get...(locale)` function that lays the translations over the English. Translated lists must keep the English order, because they are matched by position.
- **Section components** take a `locale` prop from their page. Use `<LocaleLink>` (from `i18n/client`) for internal links so visitors stay in their language; plain `<a>` and `#`/`mailto:` links are left alone.
- **Not translated yet.** `translatedLocales` in `i18n/config.ts` is `["en"]`. While a language is not in it, its pages show English, are `noindex`, and say `<html lang="en">`. To launch German: fill `de.ts` and `i18n/content/de.ts`, add `"de"` to `translatedLocales`, and then add `hreflang` alternates and browser-language redirects (Netlify `[[redirects]]` on `Accept-Language`).
- The language menu is `components/Header/LanguageMenu.tsx`. Switching is a normal page load, since the two trees are separate root layouts.
- The contact function returns error codes (`name_required`, ...); the form shows their text from `form.errors` in the messages.
- `app/global-not-found.tsx` is the single 404 page (English, no header or footer). It needs `experimental.globalNotFound` in `next.config.ts` because there are two root layouts.

## Conventions

- Tailwind v4: `@apply` cannot apply the project's own component classes. Combine classes in markup (`className="btn btn-lime"`).
- Reuse the component classes in `globals.css` (`wrap`, `section`, `tag`, `heading`, `lead`, `btn`, `card-pastel`, `chip-icon`) before writing new ones.
- Wrap sections in `components/Reveal.tsx` for the scroll fade-up. Use `margin="0px"` for content that is visible on load.
- No hover lift or drop-shadow effects on cards.
- Do not reuse the same photo on more than one page.
- Do not mention MedusaJS anywhere. Do not add testimonials unless real ones are supplied.
- Placeholder content is marked `TODO`; never present invented figures, names or quotes as real.
