# Aniimo.games SEO Checklist

Last checked: 2026-08-31

## Current Status

- Google Search Console sitemap submitted.
- Bing Webmaster sitemap submitted.
- `robots.txt` allows search crawlers and points to `https://aniimo.games/sitemap.xml`.
- `sitemap.xml` contains canonical `https://aniimo.games/...` URLs.
- Sitemap coverage includes core pages, element pages, role pages, 89 Aniimo detail pages and 6 region pages.
- Build-time SEO audit passes with `npm run check:seo`.
- Static HTML is generated for sitemap routes during `npm run build`.
- Legacy slugs for `nimbi`, `turbo` and `dreaple` redirect to official-name pages.
- `www.aniimo.games` is redirected to the non-www canonical host in `public/_redirects`.
- The 2026-08-31 GSC export showed 235 impressions, 9 clicks, 3.83% CTR and 9.22 average position across the last 24 hours.
- Current GSC refresh targets are homepage CTR, `/aniimo/`, `/map/`, `/codes/`, `/guides/`, `/aniimo/glacy/`, Portuguese release-date and Spanish release-date pages.

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
