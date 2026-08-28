import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import { execFileSync } from "node:child_process";
import { aniimo } from "../data/content.js";

const wikiUrl = "https://wiki.aniimo.com/item/10002877";
const aniimoFile = "data/content/aniimo.js";
const imageDir = "public/images/aniimo";

const response = await fetch(wikiUrl, {
  headers: {
    "user-agent": "aniimo-games-sync/1.0",
  },
});

if (!response.ok) {
  throw new Error(`Failed to fetch official Wiki: ${response.status}`);
}

const officialEntries = extractWikiAniimo(await response.text());
const localNames = new Set(aniimo.map((item) => item.name));
const missing = officialEntries.filter((item) => !localNames.has(item.name));

if (!missing.length) {
  console.log("No missing official Aniimo entries.");
  process.exit(0);
}

mkdirSync(imageDir, { recursive: true });

const imageLines = [];
const descriptionLines = [];
const nameRows = [];
const regionLines = [];
const syncedImages = [];

for (const item of missing) {
  const slug = slugify(item.name);
  const imageName = `aniimo-${slug}.webp`;
  const imagePath = `${imageDir}/${imageName}`;
  const imageResponse = await fetch(item.image, {
    headers: {
      "user-agent": "aniimo-games-sync/1.0",
    },
  });
  if (imageResponse.ok) {
    const tempPath = `/tmp/${basename(item.image)}`;
    writeFileSync(tempPath, Buffer.from(await imageResponse.arrayBuffer()));
    execFileSync("magick", [tempPath, "-resize", "512x512>", "-quality", "82", imagePath]);
    syncedImages.push(imagePath);
  }

  nameRows.push(`  ["${item.no}", "${slug}", "${item.name}", "Unknown", "Watchlist", "Official Index"],`);
  imageLines.push(`  ${slug}: "/images/aniimo/${imageName}",`);
  descriptionLines.push(`  ${slug}: ${JSON.stringify(item.description)},`);
  regionLines.push(`  ${slug}: "Official Wiki",`);
}

let source = readFileSync(aniimoFile, "utf8");
source = insertBefore(source, "];", nameRows.join("\n"), source.indexOf("const names = ["));
source = insertBefore(source, "};", imageLines.join("\n"), source.indexOf("const aniimoImages = {"));
source = insertBefore(source, "};", descriptionLines.join("\n"), source.indexOf("const officialDescriptions = {"));
source = insertBefore(source, "};", regionLines.join("\n"), source.indexOf("const regionByAniimo = {"));
writeFileSync(aniimoFile, source);

console.log(`Synced ${missing.length} official Aniimo entries.`);
console.log(syncedImages.join("\n"));

function extractWikiAniimo(html) {
  const matches = [...html.matchAll(/"(\d{3})",\d+,"([^"]+)","(https:\/\/worldx-website-cdn\.aniimo\.com\/official-website\/worldx\/wiki_stage\/init\/Wiki_Aniimo_[^"]+\.png)","([^"]*)"/g)];
  return matches.map(([, no, name, image, description]) => ({
    no,
    name: name.replace(/[.。]+$/, ""),
    image,
    description,
  }));
}

function insertBefore(source, marker, insertion, fromIndex) {
  const index = source.indexOf(marker, fromIndex);
  if (index < 0) throw new Error(`Could not find marker ${marker}`);
  return `${source.slice(0, index)}${insertion}\n${source.slice(index)}`;
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
