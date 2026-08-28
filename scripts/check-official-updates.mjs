import { writeFileSync } from "node:fs";
import { aniimo, regions, releaseInfo } from "../data/content.js";

const officialMain = "https://www.aniimo.com/main";
const officialWikiProbe = "https://wiki.aniimo.com/item/10002877";
const reportPath = "official-update-report.md";

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
  return uniq([...html.matchAll(/title="([^"]+)"/g)].map((match) => match[1]))
    .filter((title) => /Aniimo|Global|Beta|Launch|Wayfarer/i.test(title))
    .slice(0, 20);
}

function markdownList(items, emptyText) {
  if (!items.length) return `- ${emptyText}`;
  return items.map((item) => `- ${item}`).join("\n");
}

const mainFetch = await fetchText(officialMain);
const wikiFetch = await fetchText(officialWikiProbe);
const mainHtml = mainFetch.text;
const wikiHtml = wikiFetch.text;

const officialAniimo = extractWikiAniimo(wikiHtml);
const officialNames = officialAniimo.map((item) => item.name);
const localNames = aniimo.map((item) => item.name);
const missingLocally = wikiFetch.ok ? officialNames.filter((name) => !localNames.includes(name)) : [];
const localOnly = wikiFetch.ok ? localNames.filter((name) => !officialNames.includes(name)) : [];
const missingDescriptions = aniimo.filter((item) => !item.description || item.description.length < 20).map((item) => item.name);
const regionNames = extractKnownRegionNames(mainHtml);
const missingRegions = mainFetch.ok ? regions.map((region) => region.name).filter((name) => !regionNames.includes(name)) : [];
const newsTitles = extractNewsTitles(mainHtml);

const report = `# Aniimo Official Update Report

Generated: ${new Date().toISOString()}

## Summary

- Local Aniimo entries: ${aniimo.length}
- Official Wiki entries found in probe page: ${officialAniimo.length}
- Local regions: ${regions.length}
- Official regions seen on main page: ${regionNames.length}
- PC/console launch date: ${releaseInfo.pcConsole}
- Mobile launch date: ${releaseInfo.mobile}

## Fetch Status

- ${mainFetch.url}: ${mainFetch.ok ? "OK" : `Failed - ${mainFetch.error}`}
- ${wikiFetch.url}: ${wikiFetch.ok ? "OK" : `Failed - ${wikiFetch.error}`}

## New Official Aniimo Missing Locally

${wikiFetch.ok ? markdownList(missingLocally, "None") : "- Skipped because the official Wiki request failed."}

## Local Aniimo Not Seen In Probe

${wikiFetch.ok ? markdownList(localOnly, "None") : "- Skipped because the official Wiki request failed."}

## Local Entries Needing Description Review

${markdownList(missingDescriptions, "None")}

## Region Names Not Seen On Main Page

${mainFetch.ok ? markdownList(missingRegions, "None") : "- Skipped because the official main site request failed."}

## Recent Official News Titles

${markdownList(newsTitles, "No news titles extracted")}
`;

writeFileSync(reportPath, report);
console.log(report);
