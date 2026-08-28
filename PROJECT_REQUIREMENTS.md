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
- Current content-development focus: user-intent SEO clusters for beginner education, safe downloads, rewards, news freshness, location discovery and pre-launch choices

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
- Documented the project framework, update workflow, SEO generation and deployment baseline in `PROJECT_FRAMEWORK.md`.
- Recovered from a production blank-page regression by replacing retired route helpers and adding framework audit coverage.
- Added Aniimo detail differentiation fields for location notes, evolution details, ability use cases, related route logic and source notes.
- Added dedicated platform landing pages for PS5, Xbox, Epic Games Store, iOS and Android.
- Expanded region guide pages with launch checklists, verification priorities and source notes.
- Added snippet-ready FAQ coverage for launch status, Steam, codes, confirmed count, free-to-play status and mobile availability.
- Added a visible `/site-index/` hub to improve internal discovery across guides, platform pages, regions, elements, roles and featured Aniimo pages.
- Added `/launch-tracker/` to centralize launch dates, platform readiness, reward status, code watchlist status and post-launch verification tasks.
- Fixed platform detail pages for PS5, Xbox, Epic Games Store, iOS and Android after a runtime variable-shadowing regression.
- Added `check:live` for production robots, sitemap, canonical and important page health checks.
- Added `check:assets` for production image reference and size-budget checks.
- Expanded `check:live` to sample sitemap URLs in addition to key production pages.
- Enhanced `check:official` with watchlist field verification counts and recommended next actions.
- Converted remaining production Aniimo PNG portraits to WebP and moved the old PNG files into `assets/source/aniimo-png-backup`.
- Added `/launch-verification/` with structured post-launch templates for spawn points, redeem codes, platform unlocks and Search Console observations.
- Added `check:verification` to validate post-launch verification templates and queues.
- Added user-intent SEO content clusters for beginner questions, download decisions, codes and rewards, news updates, location guides and pre-launch choice watchlists.

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

Status: Completed

Reduce thin-content risk by giving each Aniimo detail page more unique content.

Fields to add:

- `locationNote`
- `evolutionDetail`
- `abilityUseCase`
- `relatedRegionReason`
- `sourceNote`

Implementation notes:

- Detail content is generated from structured role, element, region and evolution data in `data/content/aniimo.js`.
- `src/pages/pages.jsx` renders the new fields in detail panels and editorial guide blocks.
- Unknown or watchlist entries continue to avoid exact route claims until official or in-game verification exists.

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
- `/platforms/ps5/`
- `/platforms/xbox/`
- `/platforms/epic-games/`
- `/platforms/ios/`
- `/platforms/android/`

Each page should have unique title, meta description, JSON-LD coverage, sitemap inclusion and internal links.

### Priority 5: Monitoring

Status: In progress

Add automated checks for:

- Official Wiki new entries
- Official news title changes
- robots.txt and sitemap availability
- Sitemap URL status
- Missing images and broken internal links

Completed first public monitoring layer:

- `/launch-tracker/` gives users and crawlers a source-aware launch readiness hub.
- The page separates confirmed official facts from watchlist items such as exact unlock hours, redeem codes and spawn routes.
- `npm run check:live` verifies deployed robots, sitemap, canonical tags and key page availability.
- `npm run check:live` now also samples sitemap URLs to catch production route regressions beyond the most important pages.
- `npm run check:official` outputs watchlist field counts and next actions for source-driven updates.

### Priority 6: Performance

Status: In progress

Completed first-round WebP conversion for the largest unreferenced production PNG files. Added `npm run check:assets` for image budgets, compressed the Blitzwood region artwork under the current region-image threshold, and converted remaining production Aniimo PNG portraits to WebP.

### Priority 7: Core Search Page Expansion

Status: Completed

Expanded high-intent search pages without inventing launch-only facts.

Pages covered:

- `Aniimo download`
- `Aniimo release date`
- `Aniimo codes`
- `Aniimo wiki`
- `Aniimo map`
- `Best Aniimo`

Implementation notes:

- Core pages use source-aware SEO guide blocks and FAQ coverage.
- Codes page separates confirmed rewards from unconfirmed redeem codes.
- Map and region pages keep route coordinates, weather windows and spawn tables marked for post-launch verification.

### Priority 8: Post-Launch Verification

Status: In progress

Add live-game verified information after launch:

- exact spawn coordinates
- route screenshots
- weather and time-of-day windows
- platform-specific unlock timing
- first redeem codes
- tested combat or Twine use cases
- GSC indexing and query performance notes

Completed preparation layer:

- `/launch-verification/` defines the fields needed for spawn, code, platform unlock and GSC observations.
- `data/content/verification.js` stores reusable queues and templates.
- `npm run check:verification` validates template completeness before release.

Remaining after launch:

- Fill the prepared templates with official or in-game verified data.
- Update related Aniimo detail pages, region pages, codes page and launch tracker from the verified records.

### Priority 9: Internal Linking Hub

Status: Completed

Add a crawler- and reader-friendly internal index that distributes links across important pages.

Pages covered:

- `/site-index/`

Implementation notes:

- Links core guide hubs, platform pages, region guides, element guides, role guides, trust pages and featured Aniimo detail pages.
- Added a homepage quick-card entry for the site index.
- Included the page in route metadata, sitemap generation and static prerendering.

### Priority 10: User-Intent SEO Content Clusters

Status: Completed

Add search pages that answer what players are likely to ask before launch while avoiding unverified gameplay claims.

Beginner question pages:

- `/how-to-catch-aniimo/`
- `/what-is-twine/`
- `/aniipod-guide/`
- `/aniimo-beginner-tips/`
- `/aniimo-elements/`
- `/aniimo-roles/`

Download decision pages:

- `/download/pc/`
- `/download/mobile/`
- `/download/ios/`
- `/download/android/`
- `/download/ps5/`
- `/download/xbox/`
- `/download/epic-games/`
- `/download/steam/`

Codes and rewards pages:

- `/codes/how-to-redeem/`
- `/codes/active/`
- `/codes/expired/`
- `/rewards/junior-wayfarer/`
- `/rewards/susuta-egg/`
- `/rewards/milestones/`

News and freshness pages:

- `/news/launch-date-announcement/`
- `/news/closed-beta/`
- `/news/platform-announcement/`
- `/news/pre-registration-rewards/`

Location guide pages:

- `/locations/mistwoods/`
- `/locations/echoback-landing/`
- `/locations/sea-of-flowers/`
- `/locations/blitzwood/`
- `/locations/nimbus-fields/`
- `/locations/forest-of-falling-stars/`

Choice and comparison pages:

- `/best-starter-aniimo/`
- `/best-fire-aniimo/`
- `/best-support-aniimo/`
- `/best-dps-aniimo/`
- `/best-healer-aniimo/`
- `/aniimo-tier-list/`

Implementation notes:

- Page definitions live in `data/content/content-clusters.js`.
- Route generation, sitemap inclusion and metadata are centralized in `src/lib/routes.js`.
- Rendering uses reusable page components in `src/pages/pages.jsx`.
- Choice pages are written as pre-launch watchlists, not final rankings.

## Acceptance Criteria

- `npm run build` passes.
- `npm run check:seo` passes.
- `npm run check:framework` passes.
- Sitemap uses only `https://aniimo.games/.../` canonical URLs.
- New indexable pages are included in `sitemap.xml`.
- New pages have unique title and meta description.
- Referenced images exist under `public`.
- Large source images are not shipped from `public` unless directly used.
