import { readFileSync } from "node:fs";
import {
  aniimoPath,
  beginnerTopicPath,
  choiceTopicPath,
  codeRewardTopicPath,
  downloadTopicPath,
  fullSitemapRoutes,
  glossaryTopicPath,
  locationTopicPath,
  localizedTopicPath,
  mechanicDeepDiveTopicPath,
  mediaDetailTopicPath,
  newsTopicPath,
  officialPitchTopicPath,
  searchSuggestionTopicPath,
  regionPath,
  sitemapRoutes,
  socialIntentTopicPath,
  troubleshootingTopicPath,
} from "../src/lib/routes.js";
import {
  aniimo,
  beginnerTopics,
  choiceTopics,
  codeRewardTopics,
  downloadTopics,
  glossaryTopics,
  localizedTopics,
  mechanicDeepDiveTopics,
  mediaDetailTopics,
  newsTopics,
  officialPitchTopics,
  regions,
  searchSuggestionTopics,
  socialIntentTopics,
  troubleshootingTopics,
} from "../data/content.js";

const issues = [];
const discoverableRoutes = fullSitemapRoutes();
const primaryRoutes = sitemapRoutes();
const exemptRoutes = new Set(["/"]);
const contentFiles = [
  "src/main.jsx",
  "src/pages/pages.jsx",
  "data/content/content-clusters.js",
  "data/content/guides.js",
  "data/content/freshness.js",
  "data/content/verification.js",
  "data/content/regions.js",
  "data/content/aniimo.js",
];

const contentLinks = new Map();

for (const file of contentFiles) {
  const source = readFileSync(file, "utf8");
  for (const link of extractLinks(source)) {
    if (!contentLinks.has(link)) contentLinks.set(link, new Set());
    contentLinks.get(link).add(file);
  }
}

for (const link of generatedHubLinks()) {
  if (!contentLinks.has(link)) contentLinks.set(link, new Set());
  contentLinks.get(link).add("generated route helpers");
}

for (const route of primaryRoutes) {
  if (exemptRoutes.has(route)) continue;

  if (!contentLinks.has(route)) {
    issues.push(`Primary sitemap route is not referenced by source content: ${route}`);
  }
}

for (const route of [
  "/topics/aniimo-combat/",
  "/topics/aniimo-solo/",
  "/topics/aniimo-evolution-list/",
  "/topics/aniimo-locations/",
  "/topics/aniimo-cross-save/",
  "/topics/aniimo-controller-support/",
  "/topics/aniimo-system-requirements/",
  "/topics/aniimo-vs-temtem/",
  "/topics/games-like-aniimo/",
  "/codes/aniimo-codes-not-working/",
]) {
  if (!contentLinks.has(route)) {
    issues.push(`Expanded intent route needs a source-link signal: ${route}`);
  }

  if (!primaryRoutes.includes(route)) {
    issues.push(`Expanded intent route should stay in the primary sitemap: ${route}`);
  }
}

for (const [target, files] of contentLinks) {
  if (target.startsWith("/") && !discoverableRoutes.includes(target) && !target.includes(".") && target !== "/platforms/") {
    issues.push(`Internal link target is not discoverable: ${[...files].join(", ")} -> ${target}`);
  }
}

if (issues.length) {
  console.error(`Internal link audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Internal link audit passed: ${primaryRoutes.length} primary routes and ${contentLinks.size} source links checked.`);

function normalizeHref(href) {
  if (!href.startsWith("/") || href.startsWith("//") || href.includes("#")) return null;
  if (href === "/") return "/";
  if (href.includes("?")) href = href.split("?")[0];
  return href.endsWith("/") ? href : `${href}/`;
}

function extractLinks(source) {
  const quotedLinks = [...source.matchAll(/["'`]((?:\/[a-z0-9][^"'`\s]*)|\/)["'`]/gi)]
    .map((match) => normalizeHref(match[1]))
    .filter(Boolean);
  return [...new Set(quotedLinks)];
}

function generatedHubLinks() {
  return [
    ...aniimo.map(aniimoPath),
    ...regions.map(regionPath),
    ...regions.map(locationTopicPath),
    ...beginnerTopics.map(beginnerTopicPath),
    ...downloadTopics.map(downloadTopicPath),
    ...codeRewardTopics.map(codeRewardTopicPath),
    ...newsTopics.map(newsTopicPath),
    ...choiceTopics.map(choiceTopicPath),
    ...officialPitchTopics.map(officialPitchTopicPath),
    ...socialIntentTopics.map(socialIntentTopicPath),
    ...searchSuggestionTopics.map(searchSuggestionTopicPath),
    ...glossaryTopics.map(glossaryTopicPath),
    ...troubleshootingTopics.map(troubleshootingTopicPath),
    ...mechanicDeepDiveTopics.map(mechanicDeepDiveTopicPath),
    ...mediaDetailTopics.map(mediaDetailTopicPath),
    ...localizedTopics.map(localizedTopicPath),
  ];
}
