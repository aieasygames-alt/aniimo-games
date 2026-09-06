import { existsSync, readFileSync } from "node:fs";
import { aniimo, regions, siteLastUpdated, sourceArchiveItems, sourceLastChecked } from "../data/content.js";
import { canonicalUrl, fullSitemapRoutes, pageFaqsForRoute, resolveRoute, sitemapRoutes, siteUrl, structuredDataForRoute } from "../src/lib/routes.js";
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const supplementalSitemap = readFileSync("public/sitemap-supplemental.xml", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");
const index = readFileSync("dist/index.html", "utf8");

const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const supplementalRoutes = [...supplementalSitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapLastmods = [...sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((match) => match[1]);
const supplementalLastmods = [...supplementalSitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((match) => match[1]);
const discoverableRoutes = [...routes, ...supplementalRoutes];
const issues = [];

if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  issues.push("robots.txt does not point to the production sitemap.");
}

if (!robots.includes(`Sitemap: ${siteUrl}/sitemap-supplemental.xml`)) {
  issues.push("robots.txt does not point to the supplemental sitemap.");
}

if (!robots.includes("Allow: /")) {
  issues.push("robots.txt does not allow crawling.");
}

for (const route of discoverableRoutes) {
  if (!route.startsWith(`${siteUrl}/`)) {
    issues.push(`Sitemap URL uses the wrong domain: ${route}`);
  }
}

for (const lastmod of [...sitemapLastmods, ...supplementalLastmods]) {
  if (lastmod !== siteLastUpdated) {
    issues.push(`Sitemap lastmod ${lastmod} does not match siteLastUpdated ${siteLastUpdated}.`);
  }
}

for (const source of sourceArchiveItems) {
  if (source.lastChecked !== sourceLastChecked) {
    issues.push(`Source archive freshness mismatch for ${source.title}: ${source.lastChecked}`);
  }
}

const expectedRoutes = sitemapRoutes().map(canonicalUrl);
const expectedDiscoverableRoutes = fullSitemapRoutes().map(canonicalUrl);

for (const route of expectedRoutes) {
  if (!routes.includes(route)) {
    issues.push(`Missing sitemap route: ${route}`);
  }
}

for (const route of expectedDiscoverableRoutes) {
  if (!discoverableRoutes.includes(route)) {
    issues.push(`Missing discoverable sitemap route: ${route}`);
  }
}

for (const route of expectedDiscoverableRoutes.filter((route) => route !== `${siteUrl}/`)) {
  const pathname = route.replace(siteUrl, "").replace(/\/$/, "");
  if (!existsSync(`dist${pathname}/index.html`)) {
    issues.push(`Missing prerendered HTML: ${pathname}/index.html`);
  }
}

const sitemapSet = new Set(discoverableRoutes);
const titleCounts = new Map();
const descriptionCounts = new Map();

for (const route of expectedDiscoverableRoutes) {
  const htmlPath = route === `${siteUrl}/` ? "dist/index.html" : `dist${route.replace(siteUrl, "").replace(/\/$/, "")}/index.html`;
  if (!existsSync(htmlPath)) continue;

  const html = readFileSync(htmlPath, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];

  if (!title) issues.push(`Missing title in ${htmlPath}`);
  if (!description) issues.push(`Missing meta description in ${htmlPath}`);
  if (!canonical) issues.push(`Missing canonical in ${htmlPath}`);
  if (canonical && canonical !== route) issues.push(`Canonical mismatch in ${htmlPath}: ${canonical} should be ${route}`);
  if (canonical && !sitemapSet.has(canonical)) issues.push(`Canonical is not in sitemap: ${canonical}`);
  if (description && description.length < 80) issues.push(`Meta description is too short in ${htmlPath}`);

  const routeInfo = resolveRoute(route.replace(siteUrl, ""));
  const graph = structuredDataForRoute(routeInfo, pageFaqsForRoute(routeInfo));
  const faqPage = graph.find((item) => item["@type"] === "FAQPage");
  const article = graph.find((item) => item["@type"] === "Article");
  const collectionPage = graph.find((item) => item["@type"] === "CollectionPage");
  if (route !== `${siteUrl}/` && isTopicRoute(routeInfo) && !faqPage?.mainEntity?.length) issues.push(`Missing FAQPage entities for ${route}`);
  if (isTopicRoute(routeInfo) && !article) issues.push(`Missing Article schema for topic route: ${route}`);
  if ((route === `${siteUrl}/aniimo/` || route === `${siteUrl}/map/`) && !collectionPage) {
    issues.push(`Missing CollectionPage schema for ${route}`);
  }
  if (article?.dateModified && article.dateModified !== siteLastUpdated) {
    issues.push(`Article schema dateModified mismatch for ${route}: ${article.dateModified}`);
  }

  if (title) titleCounts.set(title, [...(titleCounts.get(title) || []), htmlPath]);
  if (description) descriptionCounts.set(description, [...(descriptionCounts.get(description) || []), htmlPath]);

  for (const href of [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1])) {
    if (href.startsWith("/") && !href.startsWith("//") && !href.includes("#")) {
      const target = href === "/" ? "dist/index.html" : `dist${href.replace(/\/$/, "")}/index.html`;
      if (!existsSync(target) && !href.includes(".")) issues.push(`Broken internal link in ${htmlPath}: ${href}`);
    }
  }

  for (const src of [...html.matchAll(/\ssrc="([^"]+)"/g)].map((match) => match[1])) {
    if (src.startsWith("/") && !existsSync(`dist${src}`)) issues.push(`Missing image/script asset in ${htmlPath}: ${src}`);
  }
}

for (const [title, files] of titleCounts) {
  if (files.length > 1) issues.push(`Duplicate title "${title}" in ${files.join(", ")}`);
}

for (const [description, files] of descriptionCounts) {
  if (files.length > 1) issues.push(`Duplicate meta description "${description}" in ${files.join(", ")}`);
}

const indexChecks = [
  ['meta name="description"', /<meta\s+name="description"/],
  ['canonical link', /<link rel="canonical"/],
  ["Open Graph title", /property="og:title"/],
  ["Open Graph image", /property="og:image"/],
  ["Twitter card", /name="twitter:card"/],
  ["server-rendered H1", /<h1>[^<]+<\/h1>/],
  ["server-rendered Aniimo content", /What is Aniimo\?/],
  ["Organization JSON-LD", /"@type":"Organization"/],
  ["WebPage JSON-LD", /"@type":"WebPage"/],
  ["machine-readable modified date", new RegExp(`"dateModified":"${siteLastUpdated}"`)],
];

for (const [label, pattern] of indexChecks) {
  if (!pattern.test(index)) issues.push(`Missing ${label} in index.html.`);
}

if (issues.length) {
  console.error(`SEO audit failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`SEO audit passed: ${routes.length} sitemap URLs, ${aniimo.length} Aniimo pages, ${regions.length} region pages.`);

function isTopicRoute(routeInfo) {
  return [
    "beginner-topic",
    "download-topic",
    "code-reward-topic",
    "news-topic",
    "choice-topic",
    "official-pitch-topic",
    "social-intent-topic",
    "search-suggestion-topic",
    "glossary-topic",
    "troubleshooting-topic",
    "mechanic-deep-dive-topic",
    "media-detail-topic",
    "conversion-topic",
    "refresh-planning-topic",
    "freshness-page",
    "localized-topic",
  ].includes(routeInfo.type);
}
