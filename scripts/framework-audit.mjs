import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { aniimo, beginnerTopics, gameInfo, mediaGalleryItems, mechanicDeepDiveTopics, officialPitchTopics, regions } from "../data/content.js";
import { canonicalUrl, fullSitemapRoutes, prerenderRoutes, sitemapRoutes } from "../src/lib/routes.js";

const issues = [];
const sitemap = sitemapRoutes();
const fullSitemap = fullSitemapRoutes();
const prerender = prerenderRoutes();
const sourceFiles = [
  "src/main.jsx",
  "src/pages/pages.jsx",
  "src/components/ui.jsx",
  "src/lib/routes.js",
  "src/seo/runtime.js",
];
const retiredHelpers = ["aniimoHref(", "regionHref(", "const platform = platformMap[type]", "platform.names.includes(platform.name)"];

findDuplicates(sitemap).forEach((path) => issues.push(`Duplicate sitemap route: ${path}`));
findDuplicates(fullSitemap).forEach((path) => issues.push(`Duplicate full sitemap route: ${path}`));
findDuplicates(prerender).forEach((path) => issues.push(`Duplicate prerender route: ${path}`));

for (const path of fullSitemap) {
  if (!path.startsWith("/")) issues.push(`Route must start with slash: ${path}`);
  if (path !== "/" && !path.endsWith("/")) issues.push(`Route must end with slash: ${path}`);
  if (!canonicalUrl(path).startsWith("https://aniimo.games/")) issues.push(`Bad canonical URL: ${canonicalUrl(path)}`);
}

for (const path of sitemap) {
  if (!fullSitemap.includes(path)) issues.push(`Primary sitemap route is not in full sitemap routes: ${path}`);
}

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  retiredHelpers.forEach((helper) => {
    if (source.includes(helper)) issues.push(`Retired or unsafe helper pattern still referenced in ${file}: ${helper}`);
  });
}

const seoRuntime = readFileSync("src/seo/runtime.js", "utf8");
if (seoRuntime.includes("application/ld+json") || seoRuntime.includes("JSON.stringify(items)")) {
  issues.push("Client-side JSON-LD injection is still enabled in src/seo/runtime.js.");
}

const pagesSource = readFileSync("src/pages/pages.jsx", "utf8");
const redirectsSource = readFileSync("public/_redirects", "utf8");

const hasHostConditionRedirect = redirectsSource.includes("Host=www.aniimo.games") && redirectsSource.includes("https://aniimo.games/:splat");
const hasAbsoluteDomainRedirect = redirectsSource.includes("https://www.aniimo.games/* https://aniimo.games/:splat 301!");
if (!hasHostConditionRedirect && !hasAbsoluteDomainRedirect) {
  issues.push("Missing www to non-www redirect rule in public/_redirects.");
}

for (const platformRoute of ["/platforms/ps5/", "/platforms/xbox/", "/platforms/epic-games/", "/platforms/ios/", "/platforms/android/"]) {
  if (!sitemap.includes(platformRoute)) issues.push(`Platform route missing from sitemap routes: ${platformRoute}`);
  if (!pagesSource.includes(platformRoute.replace("/platforms/", "").replace("/", ""))) {
    issues.push(`Platform route missing from page switch or platform config: ${platformRoute}`);
  }
}

const referencedAssets = new Set([
  gameInfo.heroImage,
  gameInfo.ogImage,
  "/images/brand/aniimo-logo.webp",
  "/images/banners/banner-susuta-hunt.webp",
  ...aniimo.map((item) => item.image).filter(Boolean),
  ...regions.map((item) => item.image).filter(Boolean),
  ...beginnerTopics.map((item) => item.image).filter(Boolean),
  ...officialPitchTopics.map((item) => item.image).filter(Boolean),
  ...mechanicDeepDiveTopics.map((item) => item.image).filter(Boolean),
  ...mediaGalleryItems.map((item) => item.image).filter(Boolean),
]);

for (const asset of referencedAssets) {
  if (!existsSync(`public${asset}`)) issues.push(`Missing referenced asset: ${asset}`);
}

for (const file of listFiles("public/images")) {
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
