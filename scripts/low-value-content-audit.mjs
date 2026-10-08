import { existsSync, readFileSync } from "node:fs";
import { aniimo } from "../data/content.js";
import { fullSitemapRoutes, isIndexableAniimo, maintenanceNoindexRoutes, resolveRoute } from "../src/lib/routes.js";

const issues = [];
const indexableIds = new Set(aniimo.filter(isIndexableAniimo).map((item) => item.id));
const headers = readFileSync("public/_headers", "utf8");

for (const item of aniimo) {
  const detailPath = `/aniimo/${item.id}/`;
  const isDiscoverable = fullSitemapRoutes().includes(detailPath);
  if (isIndexableAniimo(item) !== isDiscoverable) {
    issues.push(`${detailPath} indexability does not match its verified data status.`);
  }
  if (isDiscoverable && [item.element, item.role, item.stage, item.region].some((value) => ["Unknown", "Watchlist", "Official Index", "Official Wiki"].includes(value))) {
    issues.push(`${detailPath} has unresolved core fields but is still discoverable.`);
  }
  if (!isIndexableAniimo(item) && !headers.includes(`${detailPath}\n  X-Robots-Tag: noindex, nofollow`)) {
    issues.push(`${detailPath} is retired from search but has no explicit HTTP noindex rule.`);
  }
}

for (const route of maintenanceNoindexRoutes) {
  if (fullSitemapRoutes().includes(route)) {
    issues.push(`${route} is an operational page but remains discoverable.`);
  }
  if (!headers.includes(`${route}\n  X-Robots-Tag: noindex, nofollow`)) {
    issues.push(`${route} is an operational page but has no explicit HTTP noindex rule.`);
  }
}

for (const route of fullSitemapRoutes()) {
  const file = route === "/" ? "dist/index.html" : `dist${route.replace(/\/$/, "")}/index.html`;
  if (!existsSync(file)) {
    issues.push(`Missing prerendered indexable page: ${file}`);
    continue;
  }
  const text = readFileSync(file, "utf8")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const minimum = minimumWords(resolveRoute(route));
  if (text.split(" ").length < minimum) issues.push(`Indexable page is too thin for review: ${route} (${text.split(" ").length}/${minimum} words).`);
}

if (issues.length) {
  console.error(`Low-value content audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Low-value content audit passed: ${indexableIds.size} verified Aniimo detail pages and ${fullSitemapRoutes().length} discoverable routes checked.`);

function minimumWords(routeInfo) {
  if (routeInfo.detail) return 250;
  if (routeInfo.regionDetail) return 180;
  if (["beginner-topic", "download-topic", "code-reward-topic", "news-topic", "choice-topic", "official-pitch-topic", "social-intent-topic", "search-suggestion-topic", "glossary-topic", "troubleshooting-topic", "mechanic-deep-dive-topic", "media-detail-topic", "conversion-topic", "refresh-planning-topic", "freshness-page", "localized-topic"].includes(routeInfo.type)) return 90;
  return 100;
}
