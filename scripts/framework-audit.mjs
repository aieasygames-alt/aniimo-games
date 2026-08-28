import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { aniimo, gameInfo, regions } from "../data/content.js";
import { canonicalUrl, prerenderRoutes, sitemapRoutes } from "../src/lib/routes.js";

const issues = [];
const sitemap = sitemapRoutes();
const prerender = prerenderRoutes();
const sourceFiles = [
  "src/main.jsx",
  "src/pages/pages.jsx",
  "src/components/ui.jsx",
  "src/lib/routes.js",
  "src/seo/runtime.js",
];
const retiredHelpers = ["aniimoHref(", "regionHref("];

findDuplicates(sitemap).forEach((path) => issues.push(`Duplicate sitemap route: ${path}`));
findDuplicates(prerender).forEach((path) => issues.push(`Duplicate prerender route: ${path}`));

for (const path of sitemap) {
  if (!path.startsWith("/")) issues.push(`Route must start with slash: ${path}`);
  if (path !== "/" && !path.endsWith("/")) issues.push(`Route must end with slash: ${path}`);
  if (!canonicalUrl(path).startsWith("https://aniimo.games/")) issues.push(`Bad canonical URL: ${canonicalUrl(path)}`);
}

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  retiredHelpers.forEach((helper) => {
    if (source.includes(helper)) issues.push(`Retired route helper still referenced in ${file}: ${helper}`);
  });
}

const referencedAssets = new Set([
  gameInfo.heroImage,
  gameInfo.ogImage,
  "/images/banners/banner-susuta-hunt.webp",
  ...aniimo.map((item) => item.image).filter(Boolean),
  ...regions.map((item) => item.image).filter(Boolean),
]);

for (const asset of referencedAssets) {
  if (!existsSync(`public${asset}`)) issues.push(`Missing referenced asset: ${asset}`);
}

for (const file of listFiles("public/images/aniimo")) {
  const publicPath = `/${file.replace(/^public\//, "")}`;
  const sizeKb = Math.round(statSync(file).size / 1024);
  if (!referencedAssets.has(publicPath) && sizeKb > 300) {
    issues.push(`Large unreferenced production image: ${publicPath} (${sizeKb}KB)`);
  }
}

if (issues.length) {
  console.error(`Framework audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Framework audit passed: ${sitemap.length} sitemap routes, ${prerender.length} prerender routes, ${referencedAssets.size} referenced assets.`);

function findDuplicates(items) {
  const seen = new Set();
  const duplicates = new Set();
  items.forEach((item) => {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  });
  return duplicates;
}

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}
