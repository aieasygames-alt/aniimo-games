import { gscLatestObservations, launchPriorityPages } from "../data/content.js";

const issues = [];

for (const [query] of gscLatestObservations.queryWatchlist) {
  const path = resolveWatchlistPath(query);
  if (!path) issues.push(`Unmapped GSC watchlist query: ${query}`);
}

for (const [, label, query, action] of launchPriorityPages) {
  if (!label || !query || !action) issues.push("Launch priority page has incomplete query mapping.");
  if (!gscLatestObservations.queryWatchlist.some(([watchQuery]) => watchQuery === query)) {
    issues.push(`Launch priority query is missing from GSC watchlist: ${query}`);
  }
}

for (const [label, value] of gscLatestObservations.metrics) {
  if (!label || !value) issues.push("GSC metrics contain an incomplete value.");
}

if (!/^\d{4}-\d{2}-\d{2}$/.test(gscLatestObservations.date)) {
  issues.push("GSC observation date must use YYYY-MM-DD format.");
}

if (issues.length) {
  console.error(`GSC watchlist audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`GSC watchlist audit passed: ${gscLatestObservations.queryWatchlist.length} queries mapped.`);

function resolveWatchlistPath(query) {
  const value = query.toLowerCase();
  if (value.includes("controller")) return "/topics/aniimo-controller-support/";
  if (value.includes("discord")) return "/topics/aniimo-discord/";
  if (value.includes("reddit")) return "/topics/aniimo-reddit/";
  if (value.includes("blitzwood")) return "/regions/blitzwood/";
  if (value.includes("mistwoods")) return "/regions/mistwoods/";
  if (value.includes("eko location")) return "/aniimo/eko/";
  if (value.includes("geschenkcode")) return "/codes/";
  if (value.includes("reroll")) return "/aniimo-reroll-guide/";
  if (value.includes("guide")) return "/guides/";
  if (value.includes("celestis")) return "/aniimo/celestis/";
  if (value.includes("inferlupa")) return "/aniimo/inferlupa/";
  if (value.includes("glacy")) return "/aniimo/glacy/";
  if (value.includes("junior")) return "/rewards/junior-wayfarer/";
  if (value.includes("milestone")) return "/rewards/milestones/";
  if (value.includes("server")) return "/troubleshooting/aniimo-server-status/";
  if (value.includes("logo")) return "/media/aniimo-logo/";
  if (value.includes("demo")) return "/topics/aniimo-demo/";
  if (value.includes("developer")) return "/compare/aniimo-developer/";
  if (value.includes("carried items") || value.includes("held items")) return "/topics/aniimo-carried-items/";
  if (value.includes("google play") || value.includes("android")) return "/platforms/android/";
  if (value.includes("mobile")) return "/platforms/mobile/";
  if (value.includes("pre registro")) return "/pt-br/aniimo-pre-registro/";
  if (value.includes("pre register")) return "/launch/aniimo-pre-register-guide/";
  if (value.includes("shiny") || value.includes("forms") || value.includes("rare")) return "/topics/aniimo-shiny/";
  if (value.includes("mmo")) return "/topics/aniimo-mmo/";
  if (value.includes("ai")) return "/compare/aniimo-ai/";
  if (value.includes("element chart") || value.includes("element")) return "/elements/fire/";
  if (value.includes("steam account")) return "/platforms/steam/";
  if (value.includes("wiki") || value.includes("list")) return "/topics/aniimo-wiki-dex/";
  if (value.includes("map")) return "/map/";
  if (value.includes("codes")) return "/codes/";
  if (value.includes("download")) return "/download/";
  return null;
}
