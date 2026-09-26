import { existsSync, readFileSync } from "node:fs";
import { fullSitemapRoutes, siteUrl } from "../src/lib/routes.js";

const sitemapFiles = ["public/sitemap.xml", "public/sitemap-supplemental.xml"];
const robots = readFileSync("public/robots.txt", "utf8");
const indexNow = readFileSync("scripts/submit-indexnow.mjs", "utf8");
const issues = [];
const sitemapUrls = new Set();

for (const file of sitemapFiles) {
  if (!existsSync(file)) {
    issues.push(`Missing sitemap: ${file}`);
    continue;
  }
  for (const url of readFileSync(file, "utf8").matchAll(/<loc>(.*?)<\/loc>/g)) sitemapUrls.add(url[1]);
  if (!robots.includes(`Sitemap: ${siteUrl}/${file.replace("public/", "")}`)) {
    issues.push(`robots.txt does not declare ${file}`);
  }
}

for (const route of fullSitemapRoutes()) {
  const url = `${siteUrl}${route}`;
  if (!sitemapUrls.has(url)) issues.push(`Indexable route is absent from all sitemaps: ${url}`);
}

if (!indexNow.includes('"public/sitemap.xml", "public/sitemap-supplemental.xml"')) {
  issues.push("IndexNow submission does not read both published sitemaps.");
}

if (!/const urls = \[\.\.\.new Set/.test(indexNow)) {
  issues.push("IndexNow URL collection is not deduplicated.");
}

if (issues.length) {
  console.error(`Webmaster readiness audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Webmaster readiness audit passed: ${sitemapUrls.size} URLs across ${sitemapFiles.length} sitemaps are eligible for IndexNow.`);
