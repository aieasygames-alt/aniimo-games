import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { aniimo, gameInfo, regions } from "../data/content.js";

const issues = [];
const referencedAssets = new Set([
  gameInfo.heroImage,
  gameInfo.ogImage,
  "/images/banners/banner-susuta-hunt.webp",
  "/images/banners/banner-download.webp",
  "/images/banners/banner-rewards.webp",
  ...aniimo.map((item) => item.image).filter(Boolean),
  ...regions.map((item) => item.image).filter(Boolean),
]);

for (const asset of referencedAssets) {
  const file = `public${asset}`;
  if (!existsSync(file)) {
    issues.push(`Missing referenced asset: ${asset}`);
    continue;
  }

  const sizeKb = Math.round(statSync(file).size / 1024);
  if (asset.includes("/aniimo/") && sizeKb > 260) issues.push(`Aniimo portrait is too large: ${asset} (${sizeKb}KB)`);
  if (asset.includes("/regions/") && sizeKb > 360) issues.push(`Region artwork is too large: ${asset} (${sizeKb}KB)`);
  if (asset.includes("/banners/") && sizeKb > 420) issues.push(`Banner image is too large: ${asset} (${sizeKb}KB)`);
  if (asset === gameInfo.heroImage && sizeKb > 520) issues.push(`Hero image is too large: ${asset} (${sizeKb}KB)`);
  if (asset === gameInfo.ogImage && sizeKb > 420) issues.push(`OG image is too large: ${asset} (${sizeKb}KB)`);
}

for (const file of listFiles("public/images")) {
  const publicPath = `/${file.replace(/^public\//, "")}`;
  const sizeKb = Math.round(statSync(file).size / 1024);
  if (!referencedAssets.has(publicPath) && sizeKb > 180) {
    issues.push(`Large unreferenced production image: ${publicPath} (${sizeKb}KB)`);
  }
}

if (issues.length) {
  console.error(`Asset audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Asset audit passed: ${referencedAssets.size} referenced assets checked.`);

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}
