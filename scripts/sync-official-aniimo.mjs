import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import { execFileSync } from "node:child_process";
import { aniimo } from "../data/content.js";

const wikiHomeUrl = "https://wiki.aniimo.com/";
const legacyWikiUrl = "https://wiki.aniimo.com/item/10002877";
const aniimoFile = "data/content/aniimo.js";
const imageDir = "public/images/aniimo";
const applyChanges = process.argv.includes("--apply");

const wikiHome = await fetchText(wikiHomeUrl);
const candidates = uniq([
  wikiHomeUrl,
  ...extractWikiCandidates(wikiHome.text),
  legacyWikiUrl,
]);
const probes = await Promise.all(candidates.map(fetchText));
const isAggregateSource = (url) => url === wikiHomeUrl || /\/item\/\d+\/basic-form\/?$/.test(url);
const sourceFetch = probes.find((result) => isAggregateSource(result.url) && result.ok && extractWikiAniimo(result.text).length > 20);

if (!sourceFetch) {
  throw new Error("Failed to find a complete aggregate official Wiki source; refusing to sync from a single variant detail route.");
}

const officialEntries = extractWikiAniimo(sourceFetch.text);
if (!officialEntries.length) {
  throw new Error(`No Aniimo entries found in ${sourceFetch.url}. Review the official Wiki source before syncing.`);
}
const localNames = new Set(aniimo.map((item) => item.name));
const localNumbers = new Set(aniimo.map((item) => item.no));
const matchedByName = officialEntries.filter((item) => localNames.has(item.name));
const matchedByNumber = officialEntries.filter((item) => localNumbers.has(item.no));
const missing = officialEntries.filter((item) => !localNames.has(item.name) && !localNumbers.has(item.no));
const languageMismatch = officialEntries.length > 20 && matchedByName.length === 0 && matchedByNumber.length > 20;

if (languageMismatch) {
  console.log("Official Wiki content appears localized. Matching is using official numbers; do not apply name changes from this source.");
}

if (!missing.length) {
  console.log(`No missing official Aniimo entries in ${sourceFetch.url}.`);
  process.exit(0);
}

console.log(`Official Wiki source: ${sourceFetch.url}`);
console.log(`Potential new entries: ${missing.map((item) => `${item.no} ${item.name}`).join(", ") || "None"}`);
if (!applyChanges) {
  console.log("Dry run only. Re-run with `npm run sync:aniimo -- --apply` after reviewing the official source and generated changes.");
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

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      headers: { "user-agent": "aniimo-games-sync/1.0" },
    });
    if (!response.ok) return { url, ok: false, text: "" };
    return { url, ok: true, text: await response.text() };
  } catch {
    return { url, ok: false, text: "" };
  }
}

function extractWikiCandidates(html) {
  return uniq([...html.matchAll(/href=["']([^"']+)["']/g)]
    .map((match) => match[1].replaceAll("\\/", "/"))
    .map((value) => value.startsWith("/") ? `https://wiki.aniimo.com${value}` : value)
    .filter((value) => value.startsWith("https://wiki.aniimo.com/"))
    .filter((value) => /item\/\d+\/basic-form(?:\/\d+)?\/?$/i.test(value))).slice(0, 120);
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function insertBefore(source, marker, insertion, fromIndex) {
  const index = source.indexOf(marker, fromIndex);
  if (index < 0) throw new Error(`Could not find marker ${marker}`);
  return `${source.slice(0, index)}${insertion}\n${source.slice(index)}`;
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
