# Koharu website

A simple, responsive Japanese café wireframe built with Next.js App Router, React and TypeScript. Matches the Next.js/React versions used by the existing portfolio project. Uses plain CSS and system fonts, the supplied Koharu logo, and a full-width café photograph with overlaid text.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` followed by `npm start`. `npm run typecheck` checks TypeScript and `npm run lint` checks ESLint.

## File structure

```text
src/
  app/
    globals.css             Brand tokens, global and responsive styles
    layout.tsx              Root layout and metadata
    page.tsx                Landing page section composition
  components/
    site-header.tsx
    site-footer.tsx
    section-heading.tsx     Main headings and kanji labels
    placeholder.tsx         Image-free wireframe blocks
    sections/
      hero.tsx
      house-favourites.tsx  厳選
      our-story.tsx         物語
      menu.tsx              献立
      cafe-moments.tsx      憩
      visit-us.tsx          所在
  lib/
    content.ts              Navigation and illustrative menu content
public/
  brand/                    Logo exported from the supplied brand PDF
  images/                   Optimized hero photograph; room for future imagery
```

## Editing

- Adjust colours and typography in the variables at the top of `src/app/globals.css`.
- Edit sample favourites and menu items in `src/lib/content.ts`.
- Each landing-page section has its own component under `src/components/sections`.
- Replace placeholder blocks with images when ready; keep assets in `public/images`.
- Menu items and café copy are illustrative. Confirm the real menu, prices, address, hours, contact and social details before launch. Those details are intentionally marked as forthcoming; no fake contact or booking links are included.
- Search indexing is disabled in `src/app/layout.tsx` while this is a wireframe. Update that metadata before launch.

The requested structure contains hero, house favourites, story, menu, café moments, visit and footer. No seasonal specials section.

Sections use full-width cream ivory, dark brown and olive beige colour blocks without divider lines or small numbered headings. The hero photograph comes from the supplied `Stock/pexels-fotios-photos-1137745.jpg`; its web version is resized and compressed. The logo is rendered directly from `Koharu V1.pdf` with a transparent background.

The palette uses cream ivory `#FFF9E7`, dark brown `#5C4A3E`, olive beige `#978A5B` and near-black. Typography follows the supplied editorial reference: Times-style serif body text, italic serif headings, compact square uppercase buttons, and sharp rectangular image areas. The supplied logo is displayed in the current brand colour using its original transparency as a CSS mask.
