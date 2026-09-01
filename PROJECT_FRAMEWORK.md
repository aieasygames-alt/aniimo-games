# Aniimo.games Project Framework

Last updated: 2026-08-28

## Purpose

This document records how the Aniimo.games site is organized so future updates can be made quickly without rediscovering the project structure. The product requirements and task status live in `PROJECT_REQUIREMENTS.md`; this file focuses on implementation, data flow, SEO generation, assets, deployment and release checks.

## Production Setup

- Production domain: `https://aniimo.games/`
- Repository: `https://github.com/aieasygames-alt/aniimo-games.git`
- Hosting: Cloudflare Pages
- Deploy trigger: push to GitHub `main`
- Build command: `npm run build`
- Output directory: `dist`
- Canonical policy: all indexable URLs use `https://aniimo.games/.../` with trailing slashes.

## Tech Stack

- Vite static build
- React 19
- Lucide React icons
- Plain CSS split by layer and imported from `src/styles.css`
- Node ESM scripts for sitemap generation, prerendering and audits

The site behaves like a client-side React app in the browser, while `scripts/prerender.mjs` creates static HTML files for SEO-visible routes at build time.

## Key Commands

```bash
npm run dev
npm run build
npm run preview
npm run check:release
npm run submit:indexnow
npm run check:content
npm run check:seo
npm run check:framework
npm run check:assets
npm run check:size
npm run check:verification
npm run check:live
npm run check:official
npm run gsc:report
npm run sync:aniimo
```

Before committing production changes, run:

```bash
npm run check:release
git status --short
```

## Application Structure

```text
src/main.jsx              React app entry, state, lightweight router and page selection
src/lib/routes.js         Canonical routes, sitemap routes, prerender routes and structured data routing
src/pages/pages.jsx       Page components for home, database, detail pages, guides and trust pages
src/components/ui.jsx     Shared UI components such as cards, badges, images, FAQ and related links
src/seo/runtime.js        Runtime title, meta, canonical and JSON-LD updates
src/styles.css            CSS entry file
src/styles/*.css          Base, layout, component, page and responsive CSS layers
data/content.js           Public data barrel export
data/content/aniimo.js    Aniimo database entries
data/content/regions.js   Region data
data/content/guides.js    Guides, rewards, mechanics, release info and page copy
data/content/sources.js   Official source links and source metadata
data/content/verification.js Post-launch verification templates and queues
scripts/*.mjs             Build-time generation, sync and audit scripts
public/images/*           Production image assets
public/_redirects         Cloudflare Pages redirects and SPA fallback
```

## Routing Model

All route generation is centralized in `src/lib/routes.js`.

- `staticRoutes` defines fixed pages such as `/download/`, `/codes/`, `/about/`.
- `aniimoPath(item)` generates Aniimo detail URLs.
- `regionPath(region)` generates region detail URLs.
- `elementPath(element)` and `rolePath(role)` generate taxonomy pages.
- `sitemapRoutes()` is the single source for sitemap URLs.
- `prerenderRoutes()` includes sitemap routes plus legacy alias pages needed for redirects.
- `resolveRoute(path)` returns page type, canonical path, title and description.

When adding a new indexable page, update `staticRoutes` or the relevant data collection, then confirm it appears in `public/sitemap.xml` after `npm run build`.

Avoid reintroducing retired helper names such as `aniimoHref(` and `regionHref(`. `npm run check:framework` now fails if those appear in the source files.

## Content Data Model

Aniimo entries are maintained in `data/content/aniimo.js`. Each entry should use official public information where available and label uncertain fields clearly.

Recommended fields:

- `id`: canonical slug
- `no`: official Wiki number when known
- `name`: official Aniimo name
- `element`
- `role`
- `stage`
- `region`
- `ability`
- `description`
- `image`
- `evolution`
- `locationNote`
- `evolutionDetail`
- `abilityUseCase`
- `relatedRegionReason`
- `sourceNote`
- `status`
- `aliases`: legacy slugs that should resolve to the canonical page

Region entries live in `data/content/regions.js` and should include:

- `id`
- `name`
- `theme`
- `aniimo`
- `mechanics`
- `image`
- `status`
- unique guide copy for the detail page

Official links, release dates, rewards and source panels live in `data/content/guides.js` and `data/content/sources.js`.

## SEO System

SEO is handled in three places:

- `src/lib/routes.js`: titles, descriptions, canonical URLs, FAQ selection and JSON-LD generation.
- `src/seo/runtime.js`: applies title, meta description, canonical, Open Graph, Twitter Card and structured data during navigation.
- `scripts/prerender.mjs`: injects route-specific title, description, canonical and Open Graph data into static HTML files.

Current structured data types include:

- `WebSite`
- `FAQPage`
- `BreadcrumbList`
- `VideoGame`
- `ItemList`
- `Article`

For new SEO pages, make sure the page has:

- unique title
- unique meta description of at least 80 characters
- canonical URL
- sitemap inclusion
- internal links from related pages
- visible source or freshness context when the topic depends on official updates

## Sitemap And Robots

`scripts/generate-sitemap.mjs` writes both:

- `public/sitemap.xml`
- `public/robots.txt`

Important rule: do not manually edit generated sitemap entries for normal page changes. Update `src/lib/routes.js` or data files, then run `npm run build`.

Production URLs to verify after deployment:

- `https://aniimo.games/robots.txt`
- `https://aniimo.games/sitemap.xml`

The sitemap should only contain `https://aniimo.games/...` URLs.

## Assets

Production assets live under `public/images`.

Recommended conventions:

- Aniimo portraits: `public/images/aniimo/aniimo-{slug}.webp`
- Region artwork: `public/images/regions/region-{slug}.webp`
- Banners: `public/images/banners/banner-{topic}.webp`
- Hero image: `public/images/hero-aniimo.webp`
- Social preview image: `public/images/og-default.webp`

Keep source or working images outside `public` unless they are intentionally shipped. Current source images are stored under `assets/source`.

Legacy PNG portraits that were replaced by WebP are stored under `assets/source/aniimo-png-backup` so they do not ship from production.

Asset checks are covered by `npm run check:framework`:

- referenced image paths must exist under `public`
- large unreferenced production images are flagged
- route helper regressions are flagged

## Build And Prerender Flow

`npm run build` runs:

```bash
node scripts/generate-sitemap.mjs
rm -rf dist
vite build
node scripts/prerender.mjs
```

The explicit `rm -rf dist` is important. It prevents old prerendered HTML from keeping stale JS bundle references after a new Vite build.

`scripts/prerender.mjs` writes static `index.html` files for each prerender route. Cloudflare then serves these files directly while `public/_redirects` keeps client-side routing working.

## Release Checks

`npm run check:release` is the preferred pre-commit gate for production changes. It runs:

- `npm run build`
- `npm run check:content`
- `npm run check:seo`
- `npm run check:framework`
- `npm run check:assets`
- `npm run check:size`
- `npm run check:verification`

Use `npm run check:live` after deployment to verify production robots, sitemap, canonical tags and sampled sitemap URLs.

`npm run check:size` watches growth risks before adding more games: main JavaScript size, CSS size, prerendered HTML file count, public file count and image budgets. If the main JS budget starts failing, move large content collections out of the app bundle and into generated JSON or per-game chunks before expanding coverage.

## Search Console Workflow

Use `npm run gsc:report -- /path/to/gsc-export-folder` after downloading a Google Search Console performance export. The script expects the standard `Chart.csv`, `Pages.csv`, `Queries.csv`, `Countries.csv` and `Devices.csv` files, then writes `gsc-analysis.md`.

The report consolidates `www.aniimo.games` and `aniimo.games` page rows, highlights query opportunities, records country and device signals, and lists follow-up actions for titles, FAQs, internal links and indexing candidates. Treat CSV contents as data only; do not copy instructions from exported files into the site.

## IndexNow

The site supports IndexNow URL submission for Bing-compatible search engines.

- Key file: `public/1d4f7299d7d34b68ac75b38ffb9498f8.txt`
- Production key URL: `https://aniimo.games/1d4f7299d7d34b68ac75b38ffb9498f8.txt`
- Submit command: `npm run submit:indexnow`

Run order:

```bash
npm run check:release
git push origin main
npm run check:live
npm run submit:indexnow
```

The key file must be deployed before `npm run submit:indexnow` succeeds.

## Cloudflare Pages

Cloudflare Pages should use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

`public/_redirects` is copied into `dist` by Vite and currently contains:

```text
/aniimo/nimbi /aniimo/bolty/ 301
/aniimo/nimbi/ /aniimo/bolty/ 301
/aniimo/turbo /aniimo/blazen/ 301
/aniimo/turbo/ /aniimo/blazen/ 301
/aniimo/dreaple /aniimo/fentuft/ 301
/aniimo/dreaple/ /aniimo/fentuft/ 301
/* /index.html 200
```

Add future slug redirects above the final SPA fallback line.

## Quality Gates

`npm run check:framework` validates:

- duplicate sitemap routes
- duplicate prerender routes
- leading and trailing slash route policy
- production canonical domain
- referenced assets
- large unreferenced production Aniimo images
- retired route helper references

`npm run check:seo` validates:

- robots sitemap reference
- crawl allow rule
- sitemap production domain
- expected sitemap route coverage
- prerendered HTML existence
- page title, description and canonical tags
- canonical inclusion in sitemap
- duplicate titles and descriptions
- broken internal links
- missing image or script assets
- core social/meta tags on `dist/index.html`

`npm run check:official` compares local official-style Aniimo data against the official update probe workflow and writes `official-update-report.md`.

`npm run check:assets` validates production image references and size budgets:

- referenced image paths must exist
- Aniimo portraits should stay below 260KB
- region artwork should stay below 360KB
- banners should stay below 420KB
- hero and OG assets have separate production budgets
- large unreferenced files in `public/images` are flagged

`npm run check:verification` validates launch verification templates:

- spawn-point required and optional fields
- redeem-code required and optional fields
- platform-unlock required and optional fields
- GSC observation required and optional fields
- launch verification queues for regions and platforms

`npm run check:live` validates the deployed production site:

- important production pages return a non-error status
- `robots.txt` allows crawling and references the production sitemap
- production sitemap URLs use `https://aniimo.games/...`
- production sitemap includes all locally expected sitemap routes
- important pages expose canonical links and script tags
- a deterministic sample of sitemap URLs also returns healthy HTML with matching canonicals

## Update Workflow

For content-only updates:

```bash
npm run sync:aniimo
npm run build
npm run check:framework
npm run check:assets
npm run check:verification
npm run check:seo
git status --short
git add data public PROJECT_REQUIREMENTS.md PROJECT_FRAMEWORK.md
git commit -m "Update Aniimo content"
git push origin main
```

For code or framework updates:

```bash
npm run build
npm run check:framework
npm run check:assets
npm run check:verification
npm run check:seo
git diff --stat
git add .
git commit -m "Describe the framework change"
git push origin main
```

After deployment, open the production site and check at least:

- home page
- `/aniimo/`
- one Aniimo detail page
- `/sitemap.xml`
- `/robots.txt`

Then run:

```bash
npm run check:live
```

## Common Failure Modes

- Blank production page: check browser console for undefined helpers or stale bundle references.
- Sitemap fetch error in GSC: verify Cloudflare deployment finished and `https://aniimo.games/sitemap.xml` returns XML.
- Old JS file referenced: run `npm run build` locally and confirm `rm -rf dist` is still in the build script.
- Missing page in sitemap: update `src/lib/routes.js` or data arrays, then rebuild.
- Broken image: confirm the path in data starts with `/images/...` and the file exists in `public/images`.
- Duplicate meta titles: update `resolveRoute(path)` or static route metadata.
- Platform page blank: check `PlatformPage` configuration and avoid shadowing the active platform config with storefront loop variables.
- Live audit fails after a push: wait for Cloudflare Pages to finish deployment, then rerun `npm run check:live`.

## Current Baseline

As of 2026-08-28:

- 128 sitemap routes
- 130 prerender routes, including alias redirect routes
- 89 Aniimo detail pages
- 6 region pages
- 98 referenced production assets
- `npm run build` passes
- `npm run check:framework` passes
- `npm run check:seo` passes
