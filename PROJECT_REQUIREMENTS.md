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
- Content coverage: 89 local Aniimo entries, 6 public regions, official platform links, release dates, rewards, mechanics, official feature guides, social-intent comparison pages, search-topic pages, glossary terms, troubleshooting pages, media gallery and source archive
- Current content-development focus: official feature extraction, social discussion search intent, search-suggestion pages, support content, source freshness and post-launch verification readiness

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
- Added official feature pages for Aniimo's marketing pillars: official features, Twine, Egg Heist and Homeland.
- Added social-intent pages for Pokemon-style comparisons, Palworld-style comparisons, Switch availability and pay-to-win questions.
- Added search-topic pages for characters, platforms, beta/test history and news tracking.
- Added glossary pages for Pathfinder, Idyll, Twine, Aniipod, Homeland, RV, Prismana and Egg Heist.
- Added troubleshooting pages for download unavailable, store page visibility, pre-registration issues and region availability.
- Added `/media/` and `/source-archive/` hubs for image discovery, source trust and future update workflow.
- Added Genshin-style open-world comparison, Twine ability planning, Egg Heist rules/rewards, Lost Isles and media detail pages.
- Added launch conversion pages for countdown, wishlist, pre-registration and safe-download intent.
- Added GSC-driven refresh planning pages for query watchlists and post-indexing page improvement.
- Added directory hub pages for guides, comparisons, mechanics, launch and growth planning to improve crawl paths beyond the single site index.
- Added stage and data-status collection pages so Lumin, Gamma, Nova, Official Index and Confirmed entries have crawlable index pages.
- Expanded collection pages with summary panels, represented elements/roles/stages/regions, taxonomy links and collection-specific FAQ blocks.
- Added `npm run check:content` to validate topic depth, FAQ coverage, unique slugs, media entries, source archive entries and Aniimo field completeness.
- Added `npm run check:release` as the standard pre-commit gate for build, content, SEO, framework, asset and verification checks.
- Added IndexNow support with a public key file and `npm run submit:indexnow` for sitemap URL submission after deployment.

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

### Priority 11: International SEO Planning

Status: Planned, not started

Use public market signals, genre fit and future GSC country data to decide multilingual rollout. Do not build this yet; keep it as a planning basis until English pages have enough Search Console impressions.

Recommended first language batch:

- Japanese: high fit for creature collection, wiki pages, character guides and release-date searches.
- Korean: strong fit for RPG, mobile, PC and guide-search behavior.
- Traditional Chinese: good fit for Taiwan and Hong Kong users, with lower long-tail competition than English.

Recommended second language batch after GSC data:

- Spanish: strong free-to-play, mobile, codes and launch-search demand across Latin America and Spain.
- Portuguese Brazil: strong free-to-play and mobile search opportunity.
- Simplified Chinese: useful for overseas Chinese users, Singapore and Malaysia; mainland Google traffic should not be overestimated.
- Thai or Indonesian: possible Southeast Asia expansion after country-level impressions justify it.

Initial localized page set, when development starts:

- Home
- Aniimo download
- Aniimo release date
- Aniimo codes
- Aniimo wiki / database
- Aniimo map
- Best Aniimo
- Aniimo tier list watchlist
- How to catch Aniimo
- What is Twine
- Aniipod guide
- Pre-registration rewards
- Steam download
- Mobile download
- Launch tracker

Implementation requirements when started:

- Add localized route prefixes such as `/ja/`, `/ko/`, `/zh-hant/`.
- Add hreflang and x-default tags.
- Keep translated pages source-aware and avoid machine-translated duplicates with no localization value.
- Start with 10-15 high-value pages before translating all Aniimo detail pages.
- Use GSC country and query data to decide whether to expand to the full database.

### Priority 12: Future Content Opportunities

Status: In progress

Potential content additions after the current user-intent clusters mature:

- Glossary pages for terms such as Pathfinder, Idyll, Twine, Aniipod, Homeland, RV, Prismana and Egg Heist.
- Comparison pages such as Aniimo vs Palworld, Aniimo vs Pokemon-style creature collecting, and Aniimo vs Genshin-style open-world expectations, written carefully as editorial comparisons rather than claims of equivalence.
- Official source archive pages that preserve source links, dates checked and what changed.
- Media gallery pages for official trailers, screenshots, character art and region art with compressed assets and descriptive alt text.
- Troubleshooting pages for download unavailable, store page not visible, pre-registration not showing, and region availability.
- GSC-driven refresh pages once impressions show which queries are close to ranking.

Completed first execution layer:

- `/guides/aniimo-official-features/`
- `/guides/aniimo-twine-guide/`
- `/guides/aniimo-egg-heist-guide/`
- `/guides/aniimo-homeland-guide/`
- `/compare/aniimo-vs-pokemon/`
- `/compare/aniimo-vs-palworld/`
- `/compare/aniimo-vs-genshin/`
- `/compare/is-aniimo-on-switch/`
- `/compare/is-aniimo-pay-to-win/`
- `/topics/aniimo-characters/`
- `/topics/aniimo-platforms/`
- `/topics/aniimo-beta/`
- `/topics/aniimo-news/`
- `/glossary/`
- `/glossary/pathfinder/`
- `/glossary/idyll/`
- `/glossary/twine/`
- `/glossary/aniipod/`
- `/glossary/homeland/`
- `/glossary/rv/`
- `/glossary/prismana/`
- `/glossary/egg-heist/`
- `/media/`
- `/troubleshooting/`
- `/troubleshooting/aniimo-download-not-available/`
- `/troubleshooting/aniimo-store-page-not-visible/`
- `/troubleshooting/aniimo-pre-registration-not-working/`
- `/troubleshooting/aniimo-region-availability/`
- `/source-archive/`
- `/mechanics/twine-abilities/`
- `/mechanics/egg-heist-rules/`
- `/mechanics/egg-heist-rewards/`
- `/mechanics/lost-isles-guide/`
- `/media/aniimo-trailers/`
- `/media/aniimo-screenshots/`
- `/media/aniimo-region-art/`
- `/guides/`
- `/compare/`
- `/mechanics/`
- `/launch/`
- `/growth/`
- `/stages/lumin-stage/`
- `/stages/gamma-stage/`
- `/stages/nova-stage/`
- `/stages/official-index/`
- `/status/confirmed/`
- `/launch/aniimo-launch-countdown/`
- `/launch/aniimo-wishlist-guide/`
- `/launch/aniimo-pre-register-guide/`
- `/launch/aniimo-safe-download-checklist/`
- `/growth/gsc-refresh-plan/`
- `/growth/query-refresh-watchlist/`

Implementation notes:

- Official feature pages only use storefront or official-site supported claims.
- Social-intent pages answer community comparison/search questions without presenting competitor comparisons as official facts.
- Search-topic pages target autocomplete-style queries and connect users back to database, platform, news and launch-tracker hubs.
- Glossary pages give internal-link targets for recurring terms without overloading guide pages.
- Troubleshooting pages answer launch friction questions without sending users to unofficial download mirrors.
- Media and source archive hubs improve trust, image discovery and update workflow transparency.
- Mechanic deep dives prepare launch verification fields for Twine ability use, Egg Heist rules, Egg Heist rewards and Lost Isles routing.
- Media detail pages separate official trailer, screenshot and region-art discovery from unverified gameplay claims.
- Launch conversion pages connect countdown, wishlist, pre-registration and safe-download searches back to official storefronts.
- Growth refresh pages define how future Search Console queries should become page updates, FAQ additions or new content.
- Directory hubs group related long-tail pages into crawlable, user-facing clusters so important pages are not only discoverable from `/site-index/`.
- Stage and status collection pages reuse the database card pattern and are linked from taxonomy chips plus the site index.
- Element, role, stage and status collection pages now include unique summary context beyond repeated database cards.
- New topic groups are included in route resolution, prerender routes, sitemap generation and the visible site index.

## Acceptance Criteria

- `npm run build` passes.
- `npm run check:release` passes.
- `npm run check:seo` passes.
- `npm run check:framework` passes.
- `npm run check:content` passes.
- IndexNow key file is deployed before `npm run submit:indexnow` is run.
- Sitemap uses only `https://aniimo.games/.../` canonical URLs.
- New indexable pages are included in `sitemap.xml`.
- New pages have unique title and meta description.
- Referenced images exist under `public`.
- Large source images are not shipped from `public` unless directly used.
