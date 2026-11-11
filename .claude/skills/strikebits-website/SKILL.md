---
name: strikebits-website
description: Design system, content rules and page patterns for the StrikeBits website (Shopify app development agency). Use when adding or changing pages, sections, copy, styles or animations in this project.
---

# StrikeBits website

## Who the site is for

StrikeBits is a Shopify app development agency and Shopify Partner based in Bengaluru, India (legal name: StrikeBits Labs). Visitors are merchants and brands who need a custom Shopify app, a store, a theme, a Shopify Plus build or ongoing support. Every page should lead them to `/contact` ("Get a quote").

## Voice

- Plain, confident, specific. Say what is built and what the merchant gets.
- Short headlines in two parts, the second part bold: "Shopify stores **built to convert.**"
- Brand name is written "StrikeBits".
- Never mention MedusaJS. No testimonials unless real ones are supplied.
- Never invent facts. Unknown numbers, names, links and dates are placeholders marked `TODO` in `data/`.

## Visual style

"Organic tech": deep pine green, a lime accent, soft pastel cards, pill shapes, generous rounding, lots of white space.

Tokens (defined in `app/globals.css` under `@theme`):

- Colours: `pine-50…950` (brand), `lime-soft / lime / lime-deep` (accent), `sage / butter / peach / sky / mist` (pastels), `ink / ink-soft / ink-muted / line` (text and borders)
- Fonts: `font-display` (Space Grotesk) for headings, `font-sans` (Inter) for body
- Radius: `rounded-card`, `rounded-pill`; shadow: `shadow-card`

Component classes:

| Class | Use |
| --- | --- |
| `wrap` | page-width container |
| `section`, `section-mist` | vertical section spacing, pale background variant |
| `tag` | small lime pill label above a heading |
| `heading`, `lead` | section title and intro paragraph |
| `btn` + `btn-lime` / `btn-pine` / `btn-line` | buttons (primary is lime) |
| `card-pastel` | pastel card; pair with `bg-sage`, `bg-butter`, `bg-peach`, `bg-sky` |
| `chip-icon` | rounded icon holder |
| `label`, `input` | form fields |
| `dots` | dotted background texture |

Rules:

- Dark pine is used for one featured element per section at most (featured service card, contact card, footer).
- Pastels rotate in the order sage, butter, peach, sky.
- Icons come from `lucide-react`, sized `size-4` to `size-6`.
- Checkmarks are a Lucide `Check` inside a `bg-ink/20` circle.
- No hover lift or drop shadows on cards.
- A photo is used on one page only. Service pages use CSS illustrations (`components/ServicePage/ServiceVisual.tsx`), not photos.

## Section pattern

```tsx
<section className="section">
  <div className="wrap">
    <Reveal>
      <span className="tag">Label</span>
      <h2 className="heading">Title</h2>
      <p className="lead">Intro.</p>
    </Reveal>
    {/* cards: stagger with <Reveal delay={i * 0.08}> */}
  </div>
</section>
```

- `Reveal` fades content up when it is about 15% into the viewport. Pass `margin="0px"` for content visible on load (hero, footer).
- The footer slides out from under the page (`FooterReveal`); `<main>` must keep `relative z-10 bg-white`.
- The FAQ uses the Base UI accordion with CSS height transitions. Do not add Motion `layoutId` highlights there; it caused a visible jerk.
- Check every layout at 390px and 1440px. No sideways scrolling.

## Adding things

- **A service**: add an entry to `data/services.ts` (slug, title, short, description, points, icon, `page` content). The header dropdown, footer, home cards and `/services/<slug>` page pick it up. Add a matching illustration in `ServiceVisual.tsx`.
- **A page**: create `app/<route>/page.tsx` returning sections only (the layout supplies header and footer), export `metadata`, put copy in a new `data/` file, add the link in `components/Header/navigation.ts` and the footer.
- **A legal page**: write a `LegalDocument` in `data/` and render `<LegalPage content={...} />`.
- **Contact details, socials, booking link**: `data/site.ts` only.

## Open items

- `/portfolio`, `/blog` and `/blog/<slug>` are linked but not built.
- The contact form opens the visitor's email app; it is not connected to a form service. The newsletter form is not wired.
- Placeholders awaiting real values: stats and the hero "50+", social links, `bookingUrl`, team members and founding story, sample blog posts, service-page copy (draft), privacy policy wording (reconstructed, needs the exact text).
- `public/banner-img-1.webp` needs a rights check before launch.

Technical rules (static export, Next.js 16 specifics, commands) are in `AGENTS.md`.
