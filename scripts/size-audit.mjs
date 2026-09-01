import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const issues = [];
const warnings = [];
const budgets = {
  mainJsKb: 900,
  mainCssKb: 80,
  htmlFiles: 2500,
  publicFiles: 5000,
  publicImagesMb: 100,
  largestImageKb: 450,
};

const distAssets = listFiles("dist/assets");
const publicFiles = listFiles("public");
const imageFiles = listFiles("public/images");
const htmlFiles = listFiles("dist").filter((file) => file.endsWith(".html"));

const jsFiles = distAssets.filter((file) => file.endsWith(".js"));
const cssFiles = distAssets.filter((file) => file.endsWith(".css"));
const largestJsKb = largestKb(jsFiles);
const largestCssKb = largestKb(cssFiles);
const publicImagesMb = totalBytes(imageFiles) / 1024 / 1024;
const largestImage = largestFile(imageFiles);

if (largestJsKb > budgets.mainJsKb) {
  issues.push(`Largest JS asset is ${largestJsKb}KB, above ${budgets.mainJsKb}KB budget. Split content data or route chunks before adding more games.`);
}

if (largestCssKb > budgets.mainCssKb) {
  warnings.push(`Largest CSS asset is ${largestCssKb}KB, above ${budgets.mainCssKb}KB budget.`);
}

if (htmlFiles.length > budgets.htmlFiles) {
  warnings.push(`Prerendered HTML file count is ${htmlFiles.length}, above ${budgets.htmlFiles} budget. Review Pages file-count limits before adding more games.`);
}

if (publicFiles.length > budgets.publicFiles) {
  warnings.push(`Public file count is ${publicFiles.length}, above ${budgets.publicFiles} budget.`);
}

if (publicImagesMb > budgets.publicImagesMb) {
  warnings.push(`Public images total ${publicImagesMb.toFixed(1)}MiB, above ${budgets.publicImagesMb}MiB budget.`);
}

if (largestImage.kb > budgets.largestImageKb) {
  warnings.push(`Largest public image is ${largestImage.path} at ${largestImage.kb}KB, above ${budgets.largestImageKb}KB budget.`);
}

console.log("Size audit summary:");
console.log(`- Largest JS asset: ${largestJsKb}KB`);
console.log(`- Largest CSS asset: ${largestCssKb}KB`);
console.log(`- Prerendered HTML files: ${htmlFiles.length}`);
console.log(`- Public files: ${publicFiles.length}`);
console.log(`- Public images: ${imageFiles.length} files, ${publicImagesMb.toFixed(1)}MiB`);
console.log(`- Largest public image: ${largestImage.path || "n/a"} (${largestImage.kb}KB)`);

if (warnings.length) {
  console.log("\nWarnings:");
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (issues.length) {
  console.error("\nSize audit failed:");
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log("\nSize audit passed.");

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

function totalBytes(files) {
  return files.reduce((total, file) => total + statSync(file).size, 0);
}

function largestKb(files) {
  return largestFile(files).kb;
}

function largestFile(files) {
  if (!files.length) return { path: "", kb: 0 };
  return files
    .map((file) => ({ path: file, kb: Math.round(statSync(file).size / 1024) }))
    .sort((a, b) => b.kb - a.kb)[0];
}
