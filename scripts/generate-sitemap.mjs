import { writeFileSync } from "node:fs";
import { sitemapRoutes, siteUrl } from "../src/lib/routes.js";

const lastmod = "2026-08-28";
const routes = sitemapRoutes();

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
