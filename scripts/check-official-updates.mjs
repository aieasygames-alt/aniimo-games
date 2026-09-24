import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { aniimo, regions, releaseInfo } from "../data/content.js";

const officialMain = "https://www.aniimo.com/main";
const officialWikiHome = "https://wiki.aniimo.com/";
const legacyWikiProbe = "https://wiki.aniimo.com/item/10002877";
const reportPath = "official-update-report.md";
const snapshotPath = "official-wiki-snapshot.json";
const newsSnapshotPath = "official-news-snapshot.json";

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "aniimo-games-update-check/1.0",
      },
    });
    if (!response.ok) throw new Error(`${url} returned ${response.status}`);
    return { url, ok: true, text: await response.text() };
  } catch (error) {
    return { url, ok: false, text: "", error: error.message };
  }
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function extractWikiCandidates(html) {
  const urls = [...html.matchAll(/href=["']([^"']+)["']/g)]
    .map((match) => match[1].replaceAll("\\/", "/"))
    .map((value) => value.startsWith("/") ? `https://wiki.aniimo.com${value}` : value)
    .filter((value) => value.startsWith("https://wiki.aniimo.com/"));
  return uniq(urls).filter((url) => /item|wiki|aniimo/i.test(url)).slice(0, 12);
}

function extractWikiAniimo(html) {
  const matches = [...html.matchAll(/"(\d{3})",\d+,"([^"]+)","(https:\/\/worldx-website-cdn\.aniimo\.com\/official-website\/worldx\/wiki_stage\/init\/Wiki_Aniimo_[^"]+\.png)","([^"]*)"/g)];
  return matches.map(([, no, name, image, description]) => ({
    no,
    name: name.replace(/[.。]+$/, ""),
    image,
    description,
  }));
}

function extractRegions(html) {
  return uniq([...html.matchAll(/"englishName":?"?([^",]+)"?/g)].map((match) => match[1]))
    .filter((name) => regions.some((region) => region.name === name));
}

function extractKnownRegionNames(html) {
  return regions.filter((region) => html.includes(region.name)).map((region) => region.name);
}

function extractNewsTitles(html) {
  return uniq([...html.matchAll(/title="([^"]+)"/g)].map((match) => match[1].trim()))
    .filter((title) => /Aniimo|Global|Beta|Launch|Wayfarer/i.test(title))
    .slice(0, 20);
}

function markdownList(items, emptyText) {
  if (!items.length) return `- ${emptyText}`;
  return items.map((item) => `- ${item}`).join("\n");
}

function readSnapshot() {
  if (!existsSync(snapshotPath)) return null;
  try {
    const snapshot = JSON.parse(readFileSync(snapshotPath, "utf8"));
    return Array.isArray(snapshot?.numbers) ? snapshot : null;
  } catch {
    return null;
  }
}

function readNewsSnapshot() {
  if (!existsSync(newsSnapshotPath)) return null;
  try {
    const snapshot = JSON.parse(readFileSync(newsSnapshotPath, "utf8"));
    return Array.isArray(snapshot?.items) ? snapshot : null;
  } catch {
    return null;
  }
}

const mainFetch = await fetchText(officialMain);
const wikiHomeFetch = await fetchText(officialWikiHome);
const wikiCandidates = uniq([
  ...extractWikiCandidates(mainFetch.text),
  ...extractWikiCandidates(wikiHomeFetch.text),
  legacyWikiProbe,
]);
const wikiFetches = await Promise.all(wikiCandidates.map(fetchText));
const wikiFetch = wikiFetches.find((result) => result.ok && extractWikiAniimo(result.text).length > 0)
  || wikiFetches.find((result) => result.ok)
  || wikiFetches[0];
const mainHtml = mainFetch.text;
const wikiHtml = wikiFetch.text;

const officialAniimo = extractWikiAniimo(wikiHtml);
const officialNames = officialAniimo.map((item) => item.name);
const localNames = aniimo.map((item) => item.name);
const officialNumbers = officialAniimo.map((item) => item.no);
const localNumbers = aniimo.map((item) => item.no);
const matchedByName = officialNames.filter((name) => localNames.includes(name));
const matchedByNumber = officialNumbers.filter((no) => localNumbers.includes(no));
const wikiIsLocalized = officialAniimo.length > 20 && matchedByName.length === 0 && matchedByNumber.length > 20;
const missingLocally = wikiFetch.ok
  ? officialAniimo.filter((item) => !localNames.includes(item.name) && !localNumbers.includes(item.no)).map((item) => `${item.no} ${item.name}`)
  : [];
const localOnly = wikiFetch.ok ? aniimo.filter((item) => !officialNames.includes(item.name) && !officialNumbers.includes(item.no)).map((item) => `${item.no} ${item.name}`) : [];
const missingDescriptions = aniimo.filter((item) => !item.description || item.description.length < 20).map((item) => item.name);
const watchlistEntries = aniimo.filter((item) => item.element === "Unknown" || item.role === "Watchlist" || item.region === "Official Wiki").map((item) => `${item.no} ${item.name}`);
const regionNames = extractKnownRegionNames(mainHtml);
const missingRegions = mainFetch.ok ? regions.map((region) => region.name).filter((name) => !regionNames.includes(name)) : [];
const newsTitles = extractNewsTitles(mainHtml);
const newsItems = [...mainHtml.matchAll(/href="([^"?]+)"[^>]*title="([^"]+)"/g)]
  .map((match) => ({ url: new URL(match[1], officialMain).href, title: match[2].trim() }))
  .filter((item) => /Aniimo|Global|Beta|Launch|Wayfarer/i.test(item.title))
  .slice(0, 20);
const previousSnapshot = readSnapshot();
const previousNewsSnapshot = readNewsSnapshot();
const currentNumbers = [...new Set(officialNumbers)].sort();
const previousNumbers = previousSnapshot?.numbers || [];
const newlyVisibleNumbers = previousSnapshot ? currentNumbers.filter((no) => !previousNumbers.includes(no)) : [];
const noLongerVisibleNumbers = previousSnapshot ? previousNumbers.filter((no) => !currentNumbers.includes(no)) : [];
const snapshot = {
  checkedAt: new Date().toISOString(),
  source: wikiFetch.url,
  numbers: currentNumbers,
};
const newsSnapshot = {
  checkedAt: new Date().toISOString(),
  source: officialMain,
  items: newsItems,
};
const priorNewsUrls = new Set((previousNewsSnapshot?.items || []).map((item) => item.url));
const newNewsItems = previousNewsSnapshot ? newsItems.filter((item) => !priorNewsUrls.has(item.url)) : [];

const report = `# Aniimo Official Update Report

Generated: ${new Date().toISOString()}

## Summary

- Local Aniimo entries: ${aniimo.length}
- Official Wiki entries found in probe page: ${officialAniimo.length}
- Wiki comparison mode: ${wikiIsLocalized ? "Localized names with number-first matching" : "Names with number-first fallback matching"}
- Previous Wiki snapshot: ${previousSnapshot ? previousSnapshot.checkedAt : "None (baseline created this run)"}
- Local regions: ${regions.length}
- Official regions seen on main page: ${regionNames.length}
- PC/console launch date: ${releaseInfo.pcConsole}
- Mobile launch date: ${releaseInfo.mobile}
- Watchlist entries needing field verification: ${watchlistEntries.length}

## Fetch Status

- ${mainFetch.url}: ${mainFetch.ok ? "OK" : `Failed - ${mainFetch.error}`}
- ${wikiHomeFetch.url}: ${wikiHomeFetch.ok ? "OK" : `Failed - ${wikiHomeFetch.error}`}
- Wiki data probe: ${wikiFetch.ok ? `${wikiFetch.url} (${officialAniimo.length} entries)` : `Failed - ${wikiFetch.error}`}

## New Official Aniimo Missing Locally

${officialAniimo.length ? markdownList(missingLocally, "None") : "- Skipped because no fetchable official Wiki entry list was found."}

## Local Aniimo Not Seen In Probe

${officialAniimo.length ? markdownList(localOnly, "None") : "- Skipped because no fetchable official Wiki entry list was found."}

## Wiki Probe Changes Since Last Snapshot

- Newly visible official numbers: ${previousSnapshot ? (newlyVisibleNumbers.join(", ") || "None") : "Baseline created"}
- No longer visible official numbers: ${previousSnapshot ? (noLongerVisibleNumbers.join(", ") || "None") : "Baseline created"}

## Local Entries Needing Description Review

${markdownList(missingDescriptions, "None")}

## Watchlist Entries Needing Field Verification

${markdownList(watchlistEntries, "None")}

## Region Names Not Seen On Main Page

${mainFetch.ok ? markdownList(missingRegions, "None") : "- Skipped because the official main site request failed."}

## Recent Official News Titles

${markdownList(newsTitles, "No news titles extracted")}

## Official News Changes Since Last Snapshot

${previousNewsSnapshot ? markdownList(newNewsItems.map((item) => `${item.title} - ${item.url}`), "None") : "- Baseline created"}

## Recommended Next Actions

- If the Wiki data probe reports zero entries, review the discovered official Wiki links before treating the database as current.
- If "New Official Aniimo Missing Locally" is not empty, run \`npm run sync:aniimo\` and review the generated data before publishing.
- If watchlist entries shrink after official Wiki updates, replace Unknown and Watchlist fields with sourced values.
- If official news titles change, review release date, rewards, codes, download and launch tracker pages.
- After publishing, run \`npm run build\`, \`npm run check:seo\`, \`npm run check:framework\`, \`npm run check:assets\` and \`npm run check:live\`.
`;

writeFileSync(reportPath, report);
writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`);
writeFileSync(newsSnapshotPath, `${JSON.stringify(newsSnapshot, null, 2)}\n`);
console.log(report);
