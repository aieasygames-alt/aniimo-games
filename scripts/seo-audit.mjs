import { readFileSync } from "node:fs";
import { aniimo, regions } from "../data/content.js";

const siteUrl = "https://aniimo.games";
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");
const index = readFileSync("dist/index.html", "utf8");

const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const issues = [];

if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  issues.push("robots.txt does not point to the production sitemap.");
}

if (!robots.includes("Allow: /")) {
  issues.push("robots.txt does not allow crawling.");
}

for (const route of routes) {
  if (!route.startsWith(`${siteUrl}/`)) {
    issues.push(`Sitemap URL uses the wrong domain: ${route}`);
  }
}

const expectedRoutes = [
  `${siteUrl}/`,
  `${siteUrl}/aniimo`,
  `${siteUrl}/map`,
  `${siteUrl}/download`,
  `${siteUrl}/release-date`,
  ...aniimo.map((item) => `${siteUrl}/aniimo/${item.id}`),
  ...regions.map((region) => `${siteUrl}/regions/${region.id}`),
];

for (const route of expectedRoutes) {
  if (!routes.includes(route)) {
    issues.push(`Missing sitemap route: ${route}`);
  }
}

const indexChecks = [
  ['meta name="description"', /<meta\s+name="description"/],
  ['canonical link', /<link rel="canonical"/],
  ["Open Graph title", /property="og:title"/],
  ["Open Graph image", /property="og:image"/],
  ["Twitter card", /name="twitter:card"/],
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
