import { gscObservationDate, sourceLastChecked } from "./site-meta.js";
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
    value: "No Aniimo-wide outage currently marked confirmed",
    status: "Verified",
    source: officialLinks.liveLaunch,
    lastChecked: sourceLastChecked,
    note: "Official launch guidance notes possible login queues and slower loading. Mark an incident only when an official notice or reproducible evidence identifies it.",
  },
  {
    id: "pc-console",
    label: "PC and console availability",
    value: "Live on Windows PC, Steam, Epic, PS5 and Xbox",
    status: "Verified",
    source: officialLinks.liveLaunch,
    lastChecked: sourceLastChecked,
    note: "Use the official platform listing for country-specific storefront availability.",
  },
  {
    id: "mobile",
    label: "Mobile availability",
    value: "Live on iOS and Android; check storefront by country and device",
    status: "Verified",
    source: officialLinks.website,
    lastChecked: sourceLastChecked,
    note: "Official news lists iOS and Android availability from September 23. Check App Store and Google Play by country and device before diagnosing a missing install button.",
  },
  {
    id: "codes",
    label: "Active redeem codes",
    value: "Official code list not yet published",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: sourceLastChecked,
    note: "Community-reported code strings remain separately labeled until an official channel or direct in-game redemption test confirms them.",
  },
  {
    id: "known-issues",
    label: "Known launch issues",
    value: "Launch login and storefront issues are being tracked",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: sourceLastChecked,
    note: "Official launch guidance identifies login queues and slower loading as possible at launch. Keep fixes source-labeled and platform-specific.",
  },
  {
    id: "discord",
    label: "Official community updates",
    value: "Verify Discord announcements against official Aniimo channels",
    status: "Watchlist",
    source: officialLinks.main,
    lastChecked: sourceLastChecked,
    note: "Community discussion can identify questions but does not confirm codes, downtime, or release changes.",
  },
];

export const tierListSnapshots = [
  {
    id: "pre-launch-watchlist",
    label: "Live-data watchlist",
    status: "Watchlist",
    updated: gscObservationDate,
    context: "No complete balance, ability values, team synergy or progression data has been verified here yet.",
    evidence: "Official Aniimo names, public roles, elements, stages, descriptions, and release materials.",
    nextCheck: "Replace this snapshot with dated PVE, PVP, support and early-game notes after direct current-client testing.",
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
  launchExperience: {
    requiredFields: ["topic", "platform", "verifiedAt", "source", "status"],
    optionalFields: ["region", "accountType", "reproductionSteps", "screenshot", "notes"],
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
  ["Steam", releaseInfo.pcConsole, officialLinks.steam, "Live", "Verified"],
  ["Epic Games Store", releaseInfo.pcConsole, officialLinks.epic, "Live", "Verified"],
  ["Xbox", releaseInfo.pcConsole, officialLinks.xbox, "Live", "Verified"],
  ["PlayStation 5", releaseInfo.pcConsole, officialLinks.playstation, "Live", "Verified"],
  ["App Store", releaseInfo.mobile, officialLinks.appStore, "Live; check by country and device", "Verified"],
  ["Google Play", releaseInfo.mobile, officialLinks.googlePlay, "Live; check by country and device", "Verified"],
].map(([platform, releaseDate, source, unlockTime, status]) => ({
  platform,
  releaseDate,
  unlockTime,
  timezone: "Watchlist",
  status,
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
  range: "Last 7 days ending 2026-09-21",
  summary: "The latest seven-day GSC export shows 3,952 clicks and 134,961 impressions, with average position 7.16. The largest CTR opportunities are the database, homepage, character details, map and download pages, while controller support, Blitzwood and Junior Wayfarer already show strong intent.",
  metrics: [
    ["Clicks", "3,952"],
    ["Impressions", "134.96k"],
    ["CTR", "2.93%"],
    ["Average position", "7.16"],
  ],
  actions: [
    ["Canonical consolidation", "Keep www traffic redirected to the non-www canonical domain so Search Console signals are not split."],
    ["Homepage and database CTR", "The homepage has 9,708 impressions at 0.75% CTR and the database has 14,159 impressions at 1.36% CTR. Lead with direct search and current player intents."],
    ["Character details", "Celestis, Eko, Sherro and Shelly have high impressions with low CTR. Improve title/snippet alignment and source-labeled location answers."],
    ["Region intent", "Blitzwood and Mistwoods queries have page-one positions. Strengthen region hubs and matching location links without inventing coordinates."],
    ["Controller support", "Controller-support intent generated 1,833 impressions at position 5.78. Keep platform-specific limits, issue reporting and known-issue links visible."],
    ["Junior Wayfarer", "Junior Wayfarer is at position 3.4. Keep eligibility and delivery guidance distinct from codes and link the official reward source."],
    ["Mobile audience", "Mobile generated 68,531 impressions. Continue testing store visibility, device compatibility and account flow by region."],
  ],
  queryWatchlist: [
    ["aniimo controller support", "Keep controller guidance, platform limits and known-issue links visible."],
    ["aniimo junior wayfarer", "Keep eligibility, delivery status and official reward links current."],
    ["blitzwood aniimo", "Strengthen Blitzwood and linked Electric Aniimo routes without publishing unverified coordinates."],
    ["aniimo mistwoods", "Strengthen Mistwoods links and source-labeled encounter notes."],
    ["aniimo eko location", "Improve Eko's location answer while retaining the coordinate verification boundary."],
    ["aniimo server down", "Keep server-status and known-issues guidance source-dated."],
    ["aniimo reroll guide", "Link the beginner hub to the verification-labeled reroll guide."],
    ["aniimo geschenkcode", "Maintain a German code safety path and separate codes from campaign rewards."],
    ["aniimo wiki", "Keep the database entry point explicit about the full public list, numbers, roles and source status."],
    ["aniimo pre register rewards", "Keep claim eligibility, reward status, official source and delivery guidance current."],
    ["aniimo milestone rewards", "Keep milestone thresholds, delivery state, and official campaign source current."],
    ["aniimo tier list", "Publish dated, mode-specific rankings only after live ability and balance evidence is recorded."],
    ["aniimo servers", "Update server state and incident guidance immediately after official or reproducible evidence appears."],
    ["aniimo demo", "Clarify demo, playtest, beta history, and live availability without implying an unannounced test."],
    ["aniimo discord", "Place the official community path and freshness context above discussion links."],
    ["aniimo logo png", "Keep official logo source and usage guidance clear on the media page."],
    ["aniimo celestis", "Refresh the character detail page when forms, abilities, locations, or evolution evidence is confirmed."],
    ["does aniimo use ai", "Keep trust claims limited to named official sources and current publisher information."],
    ["aniimo download", "Route installation intent to official stores, platform availability, and safe-download guidance."],
    ["pre registro aniimo", "Keep the Portuguese pre-registration page focused on reward eligibility, account matching and launch delivery."],
    ["aniimo reddit", "Use Reddit as a research signal and improve the community page's first-screen answer and source boundary."],
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
  launchExperience: {
    title: "Launch Experience Evidence Queue",
    rows: [
      ["Mobile store availability", "App Store and Google Play install or pre-registration state, region, device, timestamp and official listing URL.", "Watchlist"],
      ["Account and cross-platform flow", "Official account guidance plus direct sign-in or account-link verification by platform.", "Watchlist"],
      ["Co-op and PVP rules", "In-game mode screen, official rules or reproducible session evidence; separate Egg Heist wording from unverified open-world claims.", "Watchlist"],
      ["Economy and monetization", "Official purchase screens, published terms or repeatable live-game evidence; distinguish optional purchases from progression requirements.", "Watchlist"],
      ["Localization and known issues", "Reproducible language, login, loading or display issue with platform, region, timestamp and official response when available.", "Watchlist"],
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
