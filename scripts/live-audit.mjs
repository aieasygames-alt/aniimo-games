import { readFileSync } from "node:fs";
import { sitemapRoutes, siteUrl } from "../src/lib/routes.js";

const issues = [];
const expected = sitemapRoutes().map((route) => `${siteUrl}${route}`);
const importantPages = [
  `${siteUrl}/`,
  `${siteUrl}/aniimo/`,
  `${siteUrl}/platforms/ps5/`,
  `${siteUrl}/platforms/xbox/`,
  `${siteUrl}/platforms/epic-games/`,
  `${siteUrl}/platforms/ios/`,
  `${siteUrl}/platforms/android/`,
  `${siteUrl}/launch-tracker/`,
  `${siteUrl}/robots.txt`,
  `${siteUrl}/sitemap.xml`,
];

const localSitemap = readFileSync("public/sitemap.xml", "utf8");
const localRoutes = [...localSitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

for (const route of expected) {
  if (!localRoutes.includes(route)) issues.push(`Local sitemap is missing expected route: ${route}`);
}

for (const url of importantPages) {
  await checkUrl(url);
}

const sitemapSample = sampleUrls(expected.filter((url) => !importantPages.includes(url)), 24);
for (const url of sitemapSample) {
  await checkUrl(url, { sampled: true });
}

if (issues.length) {
  console.error(`Live audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Live audit passed: ${importantPages.length} important URLs, ${sitemapSample.length} sampled sitemap URLs, ${expected.length} sitemap routes expected.`);

async function checkUrl(url, { sampled = false } = {}) {
  const response = await fetch(url, { redirect: "manual" }).catch((error) => {
    issues.push(`Failed to fetch ${url}: ${error.message}`);
    return null;
  });
  if (!response) return;

  if (response.status < 200 || response.status >= 400) {
    issues.push(`Bad status for ${url}: ${response.status}`);
    return;
  }

  const text = await response.text();
  if (url.endsWith("/robots.txt")) {
    if (!text.includes("Allow: /")) issues.push("Production robots.txt does not allow crawling.");
    if (!text.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) issues.push("Production robots.txt does not reference the production sitemap.");
  } else if (url.endsWith("/sitemap.xml")) {
    const urls = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
    if (!urls.length) issues.push("Production sitemap has no URLs.");
    for (const sitemapUrl of urls) {
      if (!sitemapUrl.startsWith(`${siteUrl}/`)) issues.push(`Production sitemap URL uses wrong domain: ${sitemapUrl}`);
    }
    for (const route of expected) {
      if (!urls.includes(route)) issues.push(`Production sitemap is missing expected route: ${route}`);
    }
  } else {
    const canonical = text.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
    if (canonical !== url) issues.push(`Canonical mismatch for ${url}: ${canonical || "missing"}`);
    if (!text.includes("<script")) issues.push(`No script tag found for ${url}`);
    if (!sampled && !text.includes("Aniimo")) issues.push(`Important page does not contain Aniimo text: ${url}`);
  }
}

function sampleUrls(urls, limit) {
  if (urls.length <= limit) return urls;
  const step = Math.max(1, Math.floor(urls.length / limit));
  const sampled = [];
  for (let index = 0; index < urls.length && sampled.length < limit; index += step) {
    sampled.push(urls[index]);
  }
  return sampled;
}
