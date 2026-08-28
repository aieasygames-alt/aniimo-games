import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { canonicalUrl, prerenderRoutes, resolveRoute } from "../src/lib/routes.js";

const indexHtml = "dist/index.html";
const routes = prerenderRoutes();

function injectMeta(html, route) {
  const routeInfo = resolveRoute(route);
  const title = routeInfo.title;
  const desc = routeInfo.description;
  const url = canonicalUrl(routeInfo.path);
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/content="Aniimo Wiki with database pages, locations, evolution guides, codes, rewards, download info, and beginner tips\."/,
      `content="${escapeHtml(desc)}"`)
    .replace(/<link rel="canonical" href="[^"]+" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]+" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:url" content="[^"]+" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:description" content="[^"]+" \/>/, `<meta property="og:description" content="${escapeHtml(desc)}" />`);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

for (const route of routes) {
  const target = join("dist", route, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, injectMeta(readFileSync(indexHtml, "utf8"), route));
}

console.log(`Prerendered ${routes.length} routes.`);
