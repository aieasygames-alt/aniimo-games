# Aniimo.games SEO Checklist

Last checked: 2026-08-28

## Current Status

- Google Search Console sitemap submitted.
- Bing Webmaster sitemap submitted.
- `robots.txt` allows search crawlers and points to `https://aniimo.games/sitemap.xml`.
- `sitemap.xml` contains canonical `https://aniimo.games/...` URLs.
- Sitemap coverage includes core pages, element pages, role pages, 53 Aniimo detail pages and 6 region pages.
- Build-time SEO audit passes with `npm run check:seo`.

## Structured Data

- FAQ JSON-LD is emitted for core pages and detail pages.
- BreadcrumbList JSON-LD is emitted for navigable pages.
- VideoGame JSON-LD is emitted for home, download and release-date pages.
- ItemList JSON-LD is emitted for Aniimo database and map pages.
- Article JSON-LD is emitted for Aniimo detail and region detail pages.

## Remaining Growth Work

- Expand the local database from 53 tracked Aniimo to the 89 entries currently discoverable from the official Wiki probe page.
- Add launch-verified spawn points, weather windows and route notes after release.
- Review Search Console coverage after Google reads the sitemap and starts reporting indexed pages.
- Refresh `Aniimo codes` immediately if official redeem codes appear.
