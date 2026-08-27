import { writeFileSync } from "node:fs";
import { aniimo, regions } from "../data/content.js";

const siteUrl = "https://aniimo.games";
const lastmod = "2026-08-27";
const staticRoutes = [
  "/",
  "/aniimo",
  "/map",
  "/evolution",
  "/codes",
  "/rewards",
  "/download",
  "/release-date",
  "/beginner-guide",
  "/updates",
  "/sources",
];

const routes = [
  ...staticRoutes,
  ...aniimo.map((item) => `/aniimo/${item.id}`),
  ...regions.map((item) => `/regions/${item.id}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", sitemap);
writeFileSync("public/robots.txt", `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);
