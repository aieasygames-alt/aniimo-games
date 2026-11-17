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
    label: "Known post-update issues",
    value: "October 29 platform, mobile, reward and gameplay issues are tracked",
    status: "Watchlist",
    source: officialLinks.octoberPostLaunchIssues,
    lastChecked: sourceLastChecked,
    note: "The October 29 notice separates post-season issues from dated fixes. Check the current client and later notices before treating an item as still active.",
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

export const liveSupportStatus = {
  state: "No confirmed Aniimo-wide outage",
  status: "Verified",
  lastChecked: sourceLastChecked,
  source: officialLinks.main,
  sourceType: "Official Aniimo news and storefront checks",
  summary: "Aniimo.games has not identified a current Aniimo-wide outage from the latest official-source review. A local sign-in or install issue can still be platform, account, region, device, or client-version specific.",
  platformScope: "PC, console, iOS, and Android availability remains source-checked by platform and storefront.",
  nextAction: "Check official Aniimo news, the matching storefront, and the known-issues index before retrying or changing account settings.",
  incidentHistory: [
    {
      date: "2026-09-23",
      state: "Scheduled maintenance",
      scope: "Official historical September update notice",
      detail: "The official update listed maintenance from 00:00 to 10:00 UTC+8. This historical notice is not evidence of a current outage.",
      source: officialLinks.septemberUpdate,
    },
  ],
};

export const liveIssueRegistry = [
  {
    issue: "November 12 update: new features and fixes",
    category: "Version",
    platforms: "All platforms; check the current client after maintenance",
    status: "Verified",
    workaround: "Restart after maintenance. Check Aniimo Affinity, Aniimo Dash, Prismana Snapshots and the in-match Egg Heist report button in the current client.",
    source: officialLinks.novemberTwelveUpdate,
    checked: sourceLastChecked,
  },
  {
    issue: "November patch and post-update fixes",
    category: "Version",
    platforms: "All platforms; exact client build should be checked in-game",
    status: "Watchlist",
    workaround: "Confirm the installed build and compare the official November fix notices before treating an older issue as unresolved.",
    source: officialLinks.octoberPostLaunchIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Network request failed or parameter error",
    category: "Login and network",
    platforms: "PC, console and mobile",
    status: "Watchlist",
    workaround: "Record the exact error, platform, region, server, client build and time; check server status before reinstalling or changing accounts.",
    source: officialLinks.main,
    checked: sourceLastChecked,
  },
  {
    issue: "Loading screen or area fails after the season update",
    category: "Loading",
    platforms: "All platforms; mobile and PC reports need separate checks",
    status: "Watchlist",
    workaround: "Restart the updated client, capture the stuck percentage or area, and record whether the issue reproduces after changing server or character.",
    source: officialLinks.octoberPostLaunchIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Egg Heist PvP, Giga-Egg or extraction problem",
    category: "Egg Heist",
    platforms: "Operation: Egg Heist and its PvP modes",
    status: "Watchlist",
    workaround: "Record mode, difficulty, team state, objective state and exact failure. Do not assume a Chaos Mode fix applies to PvP.",
    source: officialLinks.octoberPostLaunchIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Controller, PS5 invitation or input problem",
    category: "Controls",
    platforms: "Steam, Epic, PS5, Xbox and mobile controllers",
    status: "Watchlist",
    workaround: "Record platform, controller model, connection type, prompt mismatch and client build; keep Steam Input steps separate from console and mobile paths.",
    source: officialLinks.octoberPostLaunchIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Login queue or slower loading",
    platforms: "All platforms during high traffic",
    status: "Watchlist",
    workaround: "Wait briefly, confirm the current client version and check server status before retrying repeated sign-ins.",
    source: officialLinks.liveLaunch,
    checked: sourceLastChecked,
  },
  {
    issue: "Server not ready or sign-in failure",
    platforms: "Platform, account, or region dependent",
    status: "Watchlist",
    workaround: "Check for a confirmed outage first. Then verify account, storefront region, connection, and current game update before reinstalling.",
    source: officialLinks.main,
    checked: sourceLastChecked,
  },
  {
    issue: "Code or reward claim does not appear",
    category: "Rewards and codes",
    platforms: "All platforms; account and campaign eligibility can differ",
    status: "Watchlist",
    workaround: "Verify the official source, exact code case, expiry, region and account eligibility; then restart the current client and check in-game mail.",
    source: officialLinks.main,
    checked: sourceLastChecked,
  },
  {
    issue: "Download, update or store page is unavailable",
    category: "Download and store",
    platforms: "PC, console and mobile storefronts",
    status: "Watchlist",
    workaround: "Check the matching official storefront, country, account region, free storage and client version. Do not use APK mirrors or modified installers.",
    source: officialLinks.main,
    checked: sourceLastChecked,
  },
  {
    issue: "Android Stars and the Knight Journey freeze",
    platforms: "Android devices",
    status: "Watchlist",
    workaround: "Try Performance Mode, disable Shadows, or use the upper-right skip button as described in the official notice.",
    source: officialLinks.octoberKnownIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Mobile reward claim after PC login",
    platforms: "Mobile after switching from PC",
    status: "Watchlist",
    workaround: "Log in again and confirm the current client before reporting the reward as missing.",
    source: officialLinks.octoberKnownIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Irisalis Ultimate damage or clone failure",
    platforms: "Rare cases under poor network conditions",
    status: "Watchlist",
    workaround: "Confirm the client is current and record network conditions, platform and the affected skill before reporting it.",
    source: officialLinks.octoberKnownIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Alpha capture status error",
    platforms: "All platforms; rare capture cases",
    status: "Watchlist",
    workaround: "Retry only after confirming the current client; record the Alpha, platform, server and exact error message.",
    source: officialLinks.octoberKnownIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Forest of Butterfly Dreams event page display issue",
    platforms: "Indoor locations such as ChillBeanz",
    status: "Watchlist",
    workaround: "Leave the current area and reopen the event page as described in the official notice.",
    source: officialLinks.octoberKnownIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Monthly Pass or Companion Handbook gifting failure",
    platforms: "Some mobile accounts",
    status: "Watchlist",
    workaround: "Avoid repeated purchases; record the account, character, platform and purchase result for official support.",
    source: officialLinks.octoberKnownIssues,
    checked: sourceLastChecked,
  },
  {
    issue: "Store page or install button missing",
    platforms: "Steam, Epic, PlayStation, Xbox, App Store, Google Play",
    status: "Watchlist",
    workaround: "Open the official store for the same country and account. Confirm device support and regional availability; do not use mirrors or unofficial installers.",
    source: officialLinks.website,
    checked: sourceLastChecked,
  },
  {
    issue: "Code or reward claim does not complete",
    platforms: "Platform and campaign dependent",
    status: "Watchlist",
    workaround: "Confirm that the code or reward is official, current, and eligible for the account, platform, and region before retrying.",
    source: officialLinks.main,
    checked: sourceLastChecked,
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

export const wikiProbeGaps = {
  status: "Watchlist",
  lastChecked: sourceLastChecked,
  note: "A missing individual Wiki route is a retrieval gap, not proof that a local Aniimo was removed. Keep the local name-only record until a stable official source or correction confirms a change.",
  numbers: ["083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093"],
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
  ["Whisperwake Isles", "51 new Aniimo and new Prismana forms", "Verify the four new area names, unlock path, route screenshots, encounter conditions and current-client availability before publishing individual location pages."],
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
  range: "2026-10-01 to 2026-10-30; 30 daily rows from the attached GSC export",
  summary: "The attached GSC export shows 263 clicks and 6,155 impressions, with a weighted CTR of 4.27%. Server status and known issues dominate page demand; Somniwing has 154 page impressions but only 1 click, while mobile has a higher CTR than desktop.",
  metrics: [
    ["Clicks", "263"],
    ["Impressions", "6,155"],
    ["Weighted CTR", "4.27%"],
    ["Top day", "2026-10-28: 86 clicks / 960 impressions"],
  ],
  actions: [
    ["Server and issues", "Server status and known-issues pages generated 4,626 impressions and 221 clicks in the page export. Keep these pages as the primary update and troubleshooting hubs."],
    ["Maintenance answer", "Maintenance and downtime queries rank near positions 1–3. Put current maintenance window, region times, build check and next action in the first screen."],
    ["Somniwing", "Somniwing generated 154 page impressions and 1 click, while related queries rank around positions 8–9. Replace generic region-route language with a cautious acquisition answer."],
    ["Database", "The database generated 692 impressions and 22 clicks. Feature current high-intent character searches and preserve shareable filter URLs."],
    ["Controller", "Controller support generated 288 impressions and 13 clicks at average position 4.12. Add a visible PC/console/mobile/Steam Deck device matrix and bug-report fields."],
    ["Mobile audience", "Mobile generated 394 impressions and 34 clicks at 8.63% CTR versus desktop 3.98%. Prioritize mobile update, login, storage and controller troubleshooting."],
    ["Data limitation", "The attached daily export ends on October 30 despite the November 8 file name. Obtain October 31–November 8 GSC rows before making post-patch trend claims."],
  ],
  queryWatchlist: [
    ["aniimo server status", "Keep server status, maintenance timing and issue routing above the fold."],
    ["aniimo maintenance", "Show region-specific maintenance times and distinguish scheduled downtime from local errors."],
    ["aniimo network request failed", "Add the exact-error report checklist without claiming a universal fix."],
    ["aniimo parameter error", "Add a source-labeled login/error troubleshooting path."],
    ["somniwing aniimo", "Rewrite the Somniwing first-screen answer around acquisition verification and avoid a false wild-route implication."],
    ["aniimo infergon", "Add a direct acquisition/location answer only after official or live-client verification."],
    ["aniimo report bug", "Expose the local copyable bug-report template on the known-issues page."],
    ["aniimo controller support", "Keep device-specific controller paths and current post-update fixes visible."],
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
