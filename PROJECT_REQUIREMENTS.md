# Aniimo.games Project Requirements

Last updated: 2026-08-28

## Goal

Build Aniimo.games as an SEO-focused Aniimo wiki and guide site that attracts search users through official game information, structured detail pages, map pages, download guidance, release-date tracking, codes and rewards coverage.

## Current Status

- Production domain: `https://aniimo.games/`
- Deployment: Cloudflare Pages triggered from GitHub `main`
- Search setup: Google Search Console and Bing Webmaster sitemap submitted
- Framework: Vite + React static site with build-time sitemap generation and static route prerendering
- Canonical URL policy: trailing-slash canonical URLs
- Content coverage: 89 local Aniimo entries, 6 public regions, official platform links, release dates, rewards, mechanics, and SEO guide pages

## Completed

- Created initial Aniimo wiki structure with database, map, evolution, codes, rewards, download, release-date, beginner guide, updates and sources pages.
- Added official public launch dates, platform links, pre-registration rewards, public Aniimo names, public regions and gameplay mechanics.
- Added custom domain and verified production robots and sitemap access.
- Added static HTML prerendering for sitemap routes.
- Unified sitemap, canonical, internal links and JSON-LD around `https://aniimo.games/.../` trailing-slash URLs.
- Replaced internal planning labels such as `P0`, `P1`, `P2` and SEO tool wording with user-facing copy.
- Added official-name redirects and aliases for legacy Aniimo slugs.
- Added official region artwork and compressed large character images to WebP.
- Split framework modules into route, page, component, SEO runtime, data and style layers.
- Added build-time `check:seo` and `check:framework` validation.

## Active Growth Priorities

### Priority 1: Official Wiki Coverage

Status: Completed

Expanded the local database from 53 Aniimo to the 89 entries currently discoverable from the official Wiki probe page. Newly synced entries use official names, numbers, descriptions and WebP images. Element, role, stage and region fields remain explicitly labeled as watchlist or unknown where not yet verified.

Needed fields for each new Aniimo:

- Official number
- Official name
- Slug
- Element
- Role
- Stage
- Official description
- Image, when available
- Region assignment or watchlist region
- Evolution family
- Source status

### Priority 2: Detail Page Differentiation

Status: Not started

Reduce thin-content risk by giving each Aniimo detail page more unique content.

Fields to add:

- `locationNote`
- `evolutionDetail`
- `abilityUseCase`
- `relatedRegionReason`
- `sourceNote`

### Priority 3: Trust Pages

Status: Completed

Add E-E-A-T support pages:

- `/about/`
- `/editorial-policy/`
- `/contact/`

These pages should explain that Aniimo.games is an independent guide site, how official sources are used, how speculative data is labeled, and how users can report corrections.

### Priority 4: Content Clusters

Status: Completed

Add high-intent SEO landing pages:

- `/best-aniimo/`
- `/platforms/steam/`
- `/platforms/mobile/`
- `/rewards/pre-registration/`

Each page should have unique title, meta description, JSON-LD coverage, sitemap inclusion and internal links.

### Priority 5: Monitoring

Status: Not started

Add automated checks for:

- Official Wiki new entries
- Official news title changes
- robots.txt and sitemap availability
- Sitemap URL status
- Missing images and broken internal links

### Priority 6: Performance

Status: In progress

Completed first-round WebP conversion for the largest unreferenced production PNG files. Continue with remaining 150-250KB PNG files after confirming visual quality.

## Acceptance Criteria

- `npm run build` passes.
- `npm run check:seo` passes.
- `npm run check:framework` passes.
- Sitemap uses only `https://aniimo.games/.../` canonical URLs.
- New indexable pages are included in `sitemap.xml`.
- New pages have unique title and meta description.
- Referenced images exist under `public`.
- Large source images are not shipped from `public` unless directly used.
