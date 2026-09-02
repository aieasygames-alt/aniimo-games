import { gscObservationDate } from "./site-meta.js";
import { officialLinks, releaseInfo } from "./sources.js";

export const verificationStatus = {
  Ready: "Template is ready for verified launch data.",
  Watchlist: "Waiting for official source or in-game confirmation.",
  Verified: "Confirmed by official source or direct in-game verification.",
};

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

export const gscObservationTemplate = {
  firstReviewWindow: "Review after Google Search Console starts showing impressions for submitted sitemap pages.",
  status: "Watchlist",
  fieldsToCapture: verificationTemplates.gscObservation.requiredFields.concat(verificationTemplates.gscObservation.optionalFields),
};

export const gscLatestObservations = {
  date: gscObservationDate,
  range: "3 months, visible data through 2026-08-30",
  summary: "Google Search Console shows early ranking traction around Aniimo brand, guide, rewards, map, element chart, server-status and character-name searches, with homepage and database pages receiving most impressions.",
  metrics: [
    ["Clicks", "10"],
    ["Impressions", "553"],
    ["CTR", "1.8%"],
    ["Average position", "11.2"],
  ],
  actions: [
    ["Canonical consolidation", "Keep www traffic redirected to the non-www canonical domain so Search Console signals are not split."],
    ["Homepage CTR", "Use release date, codes, map and database language in the homepage title and first screen."],
    ["Map-size intent", "Answer map-size searches without inventing exact world measurements before launch verification."],
    ["Localized demand", "Support Brazil, Germany, Spain and France with lightweight launch, download, code and official-link entry pages."],
    ["Element intent", "Add stronger element chart and typing copy without inventing matchup values before launch verification."],
    ["Character searches", "Make Aniimo detail pages easy to scan by number, element, role, stage, location and verification status."],
  ],
  queryWatchlist: [
    ["aniimo guide", "Improve guide hub links and homepage wording."],
    ["aniimo map size", "Add map-size status, region count and verification policy to the map page."],
    ["aniimo codes", "Keep codes pages fresh and separate rewards from redeemable strings."],
    ["glacy aniimo", "Make character detail snippets direct and source-labeled."],
    ["aniimo element chart", "Strengthen element and typing pages with source-safe matchup language."],
    ["aniimo rare forms", "Keep rare, shiny, sparkling and skin pages clearly marked as watchlist until verified."],
    ["can i play aniimo with steam account", "Prepare account-linking and Steam account guidance without confirming cross-save."],
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
