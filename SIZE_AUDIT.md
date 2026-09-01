# Aniimo.games Size Audit

Last checked: 2026-09-01

## Current Deployment Shape

- Hosting model: Cloudflare Pages static site
- Workers or Pages Functions entrypoint: none found
- Current build output: `dist`
- Prerendered HTML files: 270
- Public files: 110
- Public images: 106 files, 3.7MiB
- Largest JS asset: 447KB
- Largest CSS asset: 13KB
- Largest public image: `public/images/regions/region-forest-of-falling-stars.webp` at 342KB

## Risk Assessment

The current site is not close to a Workers script-size problem because it does not deploy a Worker or Pages Function entrypoint. The more important growth risk is that content data is imported directly into the React app, so Aniimo entries, topic text, localized pages and guide copy are bundled into the main browser JavaScript.

At the current scale this is acceptable. If the same architecture is copied across many games, the main JS asset will grow linearly and users will download unrelated game data.

## Growth Thresholds

Use `npm run check:size` after build to catch growth early.

Current budgets:

- Largest JS asset: 900KB
- Largest CSS asset: 80KB
- Prerendered HTML files: 2500
- Public files: 5000
- Public images: 100MiB
- Largest public image: 450KB

## Recommended Optimization Path

1. Keep the site on static Cloudflare Pages unless dynamic behavior is truly needed.
2. Before adding multiple games, split content by game so each game has its own route and data module.
3. Move large searchable collections out of the main app bundle and into generated JSON files.
4. Keep list pages on lightweight index data: slug, name, number, image, element, role, stage and region.
5. Keep long guide body text in prerendered HTML or per-route JSON instead of importing every guide into the first JS load.
6. Continue compressing images and keep source assets outside `public`.

## First Refactor To Consider

Create generated files such as:

- `public/data/aniimo/search-index.json`
- `public/data/aniimo/items/{slug}.json`
- `public/data/aniimo/topics/{slug}.json`

Then update the client app so the database page loads only the search index and detail pages load only the currently viewed item. This would make future multi-game expansion much safer without changing the static hosting model.
