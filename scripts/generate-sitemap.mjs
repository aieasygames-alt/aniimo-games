import { writeFileSync } from "node:fs";
import { siteLastUpdated } from "../data/content.js";
import { fullSitemapRoutes, sitemapRoutes, siteUrl } from "../src/lib/routes.js";

const lastmod = siteLastUpdated;
const routes = sitemapRoutes();
const supplementalRoutes = fullSitemapRoutes().filter((route) => !routes.includes(route));

function sitemapXml(routeList) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeList.map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
}

writeFileSync("public/sitemap.xml", sitemapXml(routes));
writeFileSync("public/sitemap-supplemental.xml", sitemapXml(supplementalRoutes));
writeFileSync("public/robots.txt", `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
Sitemap: ${siteUrl}/sitemap-supplemental.xml
`);
