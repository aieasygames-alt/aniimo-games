# Aniimo.games SEO Checklist

Last checked: 2026-11-14

## Current Status

- Google Search Console sitemap submitted.
- Bing Webmaster sitemap submitted.
- `robots.txt` allows search crawlers and points to `https://aniimo.games/sitemap.xml`.
- `sitemap.xml` contains canonical `https://aniimo.games/...` URLs.
- Sitemap coverage includes core pages, element pages, role pages, 90 Aniimo detail pages and 6 modeled region pages.
- Build-time SEO audit passes with `npm run check:seo`.
- Static HTML is generated for sitemap routes during `npm run build`.
- Legacy slugs for `nimbi`, `turbo` and `dreaple` redirect to official-name pages.
- `www.aniimo.games` is redirected to the non-www canonical host in `public/_redirects`.
- The attached October 1–30 GSC snapshot showed 6,155 impressions, 263 clicks and 4.27% weighted CTR. The largest page opportunities were server status, known issues, the database, controller support and Somniwing.
- Current GSC refresh targets are server status, known issues, `/aniimo/`, `/aniimo/somniwing/`, `/aniimo/infergon/`, controller support, mobile troubleshooting and November event pages.

## Structured Data

- FAQ JSON-LD is emitted for core pages and detail pages.
- BreadcrumbList JSON-LD is emitted for navigable pages.
- VideoGame JSON-LD is emitted for home, download and release-date pages.
- ItemList JSON-LD is emitted for Aniimo database and map pages.
- Article JSON-LD is emitted for Aniimo detail and region detail pages.

## Remaining Growth Work

- Add launch-verified spawn points, weather windows and route notes after release.
- Review Search Console coverage after Google reads the GSC first-refresh pages and starts reporting stable query patterns.
- Refresh `Aniimo codes` immediately if official redeem codes appear.
- Re-export GSC after deployment and compare www/non-www impressions to confirm canonical consolidation is taking effect.
- Obtain a separate Bing Webmaster export before making Webmaster-specific performance claims; the current analytics snapshot is GSC-only.
- Run the scheduled maintenance audit and review its GitHub Actions result after the first scheduled execution.
