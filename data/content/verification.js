import { gscObservationDate } from "./site-meta.js";
import { officialLinks, releaseInfo } from "./sources.js";

export const verificationStatus = {
  Ready: "Template is ready for verified launch data.",
  Watchlist: "Waiting for official source or in-game confirmation.",
  Verified: "Confirmed by official source or direct in-game verification.",
};

export const launchStatusEntries = [
  {
    id: "server",
    label: "Server status",
    value: "No live server incident tracked before launch",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: gscObservationDate,
    note: "Change to Online, Maintenance, Degraded, or Outage only after an official post or direct storefront and in-game verification.",
  },
  {
    id: "pc-console",
    label: "PC and console availability",
    value: releaseInfo.pcConsole,
    status: "Confirmed",
    source: officialLinks.website,
    lastChecked: gscObservationDate,
    note: "Calendar date is confirmed; store-specific unlock hour and regional rollout remain watchlist data.",
  },
  {
    id: "mobile",
    label: "Mobile availability",
    value: releaseInfo.mobile,
    status: "Confirmed",
    source: officialLinks.website,
    lastChecked: gscObservationDate,
    note: "Check App Store and Google Play availability by country before saying install is live.",
  },
  {
    id: "codes",
    label: "Active redeem codes",
    value: "No public redeem code confirmed yet",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: gscObservationDate,
    note: "A code becomes active only after an official channel or direct in-game redemption test confirms it.",
  },
  {
    id: "known-issues",
    label: "Known launch issues",
    value: "No live-game error confirmed before launch",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: gscObservationDate,
    note: "Publish issue guidance only after official support acknowledgement or repeated, reproducible reports.",
  },
  {
    id: "discord",
    label: "Official community updates",
    value: "Verify Discord announcements against official Aniimo channels",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: gscObservationDate,
    note: "Community discussion can identify questions but does not confirm codes, downtime, or release changes.",
  },
];

export const tierListSnapshots = [
  {
    id: "pre-launch-watchlist",
    label: "Pre-launch watchlist",
    status: "Watchlist",
    updated: gscObservationDate,
    context: "No live balance, complete ability values, team synergy, or progression data has been verified yet.",
    evidence: "Official Aniimo names, public roles, elements, stages, descriptions, and release materials.",
    nextCheck: "Replace this snapshot with dated PVE, PVP, support, and early-game notes after direct live testing.",
  },
];

export const searchIntentStatus = {
  "aniimo-discord": { statusId: "discord", action: "Verify invite from the official website before publishing it as official." },
  "aniimo-demo": { statusId: "pc-console", action: "Keep demo, playtest, beta history, and full launch availability separate." },
  "aniimo-official-website": { statusId: "discord", action: "Use this page as a safe navigation hub for official site, Wiki, and storefront links." },
  "aniimo-reddit": { statusId: "discord", action: "Treat community posts as research signals and link back to verified sources." },
  "aniimo-logo": { statusId: "discord", action: "Keep image source and usage notes tied to official brand materials." },
};

export const launchPriorityPages = [
  ["/aniimo-tier-list/", "Tier list", "aniimo tier list", "Refresh with dated PVE/PVP evidence after live testing."],
  ["/rewards/junior-wayfarer/", "Junior Wayfarer rewards", "aniimo junior wayfarer", "Verify eligibility and delivery after launch."],
  ["/troubleshooting/aniimo-server-status/", "Server status", "aniimo servers", "Update online, maintenance, degraded, or outage state."],
  ["/aniimo/", "Aniimo database", "aniimo wiki", "Improve character snippets and verified fields."],
  ["/rewards/", "Rewards hub", "aniimo pre register rewards", "Keep claim status and official reward details current."],
  ["/compare/aniimo-ai/", "AI source check", "does aniimo use ai", "Keep developer and official-source wording current."],
  ["/topics/aniimo-discord/", "Official Discord", "aniimo discord", "Verify invite and announcement freshness."],
  ["/download/", "Download hub", "aniimo download", "Update platform availability and safe-download paths."],
  ["/rewards/milestones/", "Milestone rewards", "aniimo milestone rewards", "Confirm reward delivery and campaign status."],
  ["/topics/aniimo-demo/", "Demo status", "aniimo demo", "Separate demo, playtest, beta history, and live availability."],
];

export const verificationTemplates = {
  spawnPoint: {
    requiredFields: ["aniimo", "region", "route", "condition", "verifiedAt", "source"],
    optionalFields: ["coordinates", "weather", "timeOfDay", "screenshot", "notes"],
  },
  redeemCode: {
    requiredFields: ["code", "reward", "status", "verifiedAt", "source"],
    optionalFields: ["expiresAt", "platforms", "regions", "redemptionSteps", "lastTestedAt"],
  },
  platformUnlock: {
    requiredFields: ["platform", "releaseDate", "status", "source"],
    optionalFields: ["unlockTime", "timezone", "regions", "storefrontNote"],
  },
  gscObservation: {
    requiredFields: ["date", "page", "observation", "action"],
    optionalFields: ["query", "clicks", "impressions", "position", "indexStatus"],
  },
};

export const spawnVerificationQueue = [
  ["Mistwoods", "Emberpup, Flameruff, Hummin, Tuckin", "Add route screenshots, weather notes and time-of-day checks after launch."],
  ["Echoback Landing", "Chirpi, Tromber, Cornet, Shelly, Reefish", "Verify beach routes, sound cues and Twine traversal notes."],
  ["Sea of Flowers", "Iris, Irisal, Leafy, Flutternym, Bubbeep", "Verify collection paths, perfume village routes and environmental encounter notes."],
  ["Blitzwood", "Bolty, Blazen, Sparki, Eko, Eklue", "Verify electric phenomena, weather timing and charged route behavior."],
  ["Nimbus Fields", "Glacy, Fentuft, Cubbo, Grizbo", "Verify open-field traversal, cold routes and sky-adjacent travel notes."],
  ["Forest of Falling Stars", "Celestis, Stellarys, Susuta, Popota", "Verify story route timing, rare encounter cues and special discoveries."],
].map(([region, aniimo, task]) => ({
  region,
  aniimo,
  task,
  status: "Watchlist",
  source: officialLinks.main,
}));

export const codeVerificationTemplate = {
  currentStatus: "No public redeem code confirmed",
  status: "Watchlist",
  source: officialLinks.main,
  fieldsToCapture: verificationTemplates.redeemCode.requiredFields.concat(verificationTemplates.redeemCode.optionalFields),
};

export const platformUnlockQueue = [
  ["Steam", releaseInfo.pcConsole, officialLinks.steam],
  ["Epic Games Store", releaseInfo.pcConsole, officialLinks.epic],
  ["Xbox", releaseInfo.pcConsole, officialLinks.xbox],
  ["PlayStation 5", releaseInfo.pcConsole, officialLinks.playstation],
  ["App Store", releaseInfo.mobile, officialLinks.appStore],
  ["Google Play", releaseInfo.mobile, officialLinks.googlePlay],
].map(([platform, releaseDate, source]) => ({
  platform,
  releaseDate,
  unlockTime: "Watchlist",
  timezone: "Watchlist",
  status: "Watchlist",
  source,
}));

export const platformStatusByName = Object.fromEntries(platformUnlockQueue.map((item) => [item.platform, item]));

export const gscObservationTemplate = {
  firstReviewWindow: "Review after Google Search Console starts showing impressions for submitted sitemap pages.",
  status: "Watchlist",
  fieldsToCapture: verificationTemplates.gscObservation.requiredFields.concat(verificationTemplates.gscObservation.optionalFields),
};

export const gscLatestObservations = {
  date: gscObservationDate,
  range: "2026-08-28 through 2026-09-05",
  summary: "Google Search Console shows launch-ready demand around rewards, Junior Wayfarer, tier lists, servers, demo status, Discord, downloads and character pages. Prioritize verified updates for pages already earning clicks or ranking near the first page.",
  metrics: [
    ["Clicks", "181"],
    ["Impressions", "6.18k"],
    ["CTR", "2.9%"],
    ["Average position", "8.5"],
  ],
  actions: [
    ["Canonical consolidation", "Keep www traffic redirected to the non-www canonical domain so Search Console signals are not split."],
    ["Homepage CTR", "Use release date, codes, tier list, map and database language in the homepage title and first screen."],
    ["AI trust intent", "Strengthen the AI-use page with official-source language because that query has clear trust intent."],
    ["Localized demand", "Support Brazil, Spain, France and the US with launch, download, code and official-link entry pages."],
    ["Tier list intent", "Make the tier-list page more explicit about provisional rankings and pre-launch evidence boundaries."],
    ["Community intent", "Refresh Discord and Reddit pages because both continue to attract investigation-style searches."],
    ["Logo intent", "Improve logo and media pages so brand-image queries land on a clear source-and-usage answer."],
    ["Character detail", "Prioritize Celestis, Glacy, Junior Wayfarer and carried-item follow-up pages from the newest queries."],
    ["Character searches", "Make Aniimo detail pages easy to scan by number, element, role, stage, location and verification status."],
  ],
  queryWatchlist: [
    ["aniimo pre register rewards", "Keep claim eligibility, reward status, official source, and launch-day delivery guidance current."],
    ["aniimo wiki", "Improve the database entry point with all Aniimo list, number, element, role, and source-status language."],
    ["aniimo junior wayfarer", "Keep the reward page separate from code claims and add official delivery verification after launch."],
    ["aniimo milestone rewards", "Keep milestone thresholds, delivery state, and official campaign source current."],
    ["aniimo tier list", "Publish dated, mode-specific rankings only after live ability and balance evidence is recorded."],
    ["aniimo servers", "Update server state and incident guidance immediately after official or reproducible evidence appears."],
    ["aniimo demo", "Clarify demo, playtest, beta history, and live availability without implying an unannounced test."],
    ["aniimo discord", "Place the official community path and freshness context above discussion links."],
    ["aniimo logo png", "Keep official logo source and usage guidance clear on the media page."],
    ["aniimo celestis", "Refresh the character detail page when forms, abilities, locations, or evolution evidence is confirmed."],
    ["does aniimo use ai", "Keep trust claims limited to named official sources and current publisher information."],
    ["aniimo download", "Route installation intent to official stores, platform availability, and safe-download guidance."],
  ],
};

export const launchEvidenceQueues = {
  codes: {
    title: "Redeem Code Evidence Queue",
    rows: [
      ["Code string", "Exact uppercase/lowercase string as shown in official source or in-game UI.", "Watchlist"],
      ["Reward and quantity", "Item name, currency amount, Aniipod tier, outfit, frame or creature reward.", "Watchlist"],
      ["Expiration and region", "End date, timezone, platform or country restrictions when visible.", "Watchlist"],
      ["Last tested", "Timestamp, platform and result from a direct redemption attempt after launch.", "Watchlist"],
    ],
  },
  download: {
    title: "Download Evidence Queue",
    rows: [
      ["Store availability", "Visible install, wishlist, pre-order or pre-register state on each official storefront.", "Watchlist"],
      ["Publisher identity", "Developer and publisher text visible on the store page before linking users onward.", "Watchlist"],
      ["File and device notes", "Client size, device requirements, region limits and account requirements after launch.", "Watchlist"],
      ["Mirror risk", "Any unsafe APK, torrent or fake client claim should route to safety pages, not downloads.", "Watchlist"],
    ],
  },
  gameplay: {
    title: "Gameplay Evidence Queue",
    rows: [
      ["Core loop", "Screenshots or footage for catching, Aniipods, Twine, exploration and Homeland.", "Watchlist"],
      ["Mode rules", "Egg Heist team size, scoring, rewards, matchmaking and Lost Isles access.", "Watchlist"],
      ["Performance notes", "Platform, device, graphics setting, frame pacing and connection quality.", "Watchlist"],
      ["Review boundary", "Do not publish verdicts until live playtime, platform and test date are recorded.", "Watchlist"],
    ],
  },
  events: {
    title: "Event And Reveal Evidence Queue",
    rows: [
      ["Event source", "Official Aniimo post, platform channel, event page or verified video upload.", "Watchlist"],
      ["Material shown", "Trailer, playable demo, interview, booth footage, platform news or release update.", "Watchlist"],
      ["Pages to refresh", "Trailers, gameplay, demo status, media gallery, news tracker and source archive.", "Watchlist"],
      ["Claim boundary", "Show-floor comments should remain research leads until official material supports them.", "Watchlist"],
    ],
  },
  variants: {
    title: "Variant And Item Evidence Queue",
    rows: [
      ["Rare forms", "Name, appearance, screenshot, odds or trigger before confirming shiny-style variants.", "Watchlist"],
      ["Carried items", "Item name, source, affected Aniimo, restrictions, reward table and screenshot.", "Watchlist"],
      ["Aniilog term", "Menu location, official wording, progression use and related reward or collection impact.", "Watchlist"],
      ["Database updates", "Verified details should update database pages, glossary, map notes and launch verification.", "Watchlist"],
    ],
  },
};
