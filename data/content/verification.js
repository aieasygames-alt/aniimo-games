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
