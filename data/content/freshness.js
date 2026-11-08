import { officialLinks, releaseInfo } from "./sources.js";
import { inferlupaEventSource, octoberReviewDate } from "./october-field-notes.js";

export const freshnessPages = [
  {
    slug: "official-news",
    title: "Aniimo Official News Tracker",
    description: "Track official Aniimo news, launch announcements, platform posts, reward updates and source-aware page refreshes.",
    intro: "This tracker turns official Aniimo updates into a repeatable publishing workflow. Each item records the source, the site pages affected and the next action before claims are expanded.",
    sourceType: "Official news",
    source: officialLinks.octoberPartTwoLaunch,
    points: [
      ["Season 1 Part 2 launch", "The October 29 update adds Whisperwake Isles, 51 new Aniimo, new Prismana forms, a level cap increase to 70, real-time 1v1 and an Egg Heist PvP test. Restart the client after maintenance."],
      ["iOS update storage issue", "The official notice says some iOS updates require more than 40 GB of free storage during the update process; the expected installed size is approximately 20 GB. Compensation is listed separately."],
      ["Post-launch known issues", "The October 29 issue notice lists current problems and fixes after the season update. Check it before treating a loading, quest, shop or visual report as a new outage."],
      ["Earlier known issues", "The October 16 notice remains in the source history, while the October 29 post-season notice is the current issue reference. Check the latest issue page before treating a report as a new outage."],
      ["Season 1 Part 2 preview", "The preview is a planning source, not a dated release notice. Keep announced plans separate from features confirmed as live in a patch or client."],
      ["Current event boundary", "Event rewards, pre-registration campaigns and redeem codes remain separate support paths. An active-looking code string is not official until an official notice or direct in-game verification confirms it."],
      ["Official feature claims", "Feature pages should only expand when the official site, storefronts or official Wiki provide stronger wording."],
      ["Source archive", "Meaningful source changes should be logged in the source archive and update log before dependent pages are refreshed."],
    ],
    faq: [
      ["What counts as official Aniimo news?", "Official Aniimo website posts, official storefront changes, official Wiki updates and verified publisher or developer channels count as primary sources."],
      ["Should community posts be used as news?", "Community posts can be research leads, but Aniimo.games should not turn them into confirmed facts without official or in-game verification."],
    ],
  },
  {
    slug: "platform-changes",
    title: "Aniimo Platform Change Tracker",
    description: "Track Aniimo Steam, Epic Games Store, Xbox, PlayStation, iOS and Android page changes before and after launch.",
    intro: "Platform pages can change quietly before launch. This tracker keeps storefront visibility, wishlist wording, pre-registration actions and unlock timing separate from broader news posts.",
    sourceType: "Storefront changes",
    source: officialLinks.website,
    points: [
      ["PC storefronts", "Steam and Epic Games Store pages should be checked for wishlist wording, install buttons, regional availability and launch notices."],
      ["Console storefronts", "Xbox and PlayStation pages should be checked for release-date labels, download state and preorder or wishlist changes."],
      ["Mobile storefronts", "App Store and Google Play pages should be checked for pre-order, pre-registration, device notes and region visibility."],
    ],
    faq: [
      ["Why track platform changes separately?", "Storefront pages often update download buttons, availability and release wording without a full official news post."],
      ["When should platform pages be refreshed?", "Refresh platform pages whenever a store listing changes action text, date wording, region availability or download status."],
    ],
  },
  {
    slug: "site-changelog",
    title: "Aniimo.games Changelog",
    description: "Review Aniimo.games content updates, source checks, SEO page additions, image improvements and launch verification workflow changes.",
    intro: "The changelog explains what changed on Aniimo.games, why the change matters for players and which source or verification rule drove the update.",
    sourceType: "Site updates",
    source: officialLinks.website,
    points: [
      ["Content updates", "New guide pages should explain the search intent they serve and link back to related database, map or launch pages."],
      ["Asset updates", "New images should be compressed, referenced from structured data and checked by the asset audit before release."],
      ["Verification updates", "Launch-only facts such as spawn coordinates, code strings and unlock hours should be added with a verified date and source."],
    ],
    faq: [
      ["Is the changelog for players or maintainers?", "Both. Players can see what changed, while maintainers can trace which pages need follow-up after official updates."],
      ["Should minor text edits be logged?", "Minor copy fixes do not need a full changelog entry, but source, route, reward, code and platform changes should be logged."],
    ],
  },
];

export const liveUpdate = {
  title: "Season 1: Departure with the Wind Part 2",
  date: "2026-10-29",
  source: officialLinks.octoberPartTwoLaunch,
  summary: "The October 29 season update adds Whisperwake Isles, 51 new Aniimo, new Prismana forms, level 70 progression, real-time 1v1 and an Egg Heist PvP test. Restart the client after maintenance.",
  maintenance: "The APAC maintenance window was listed as 07:00–15:00 UTC+8 on October 29, with Glimmer ×500 compensation for eligible Pathfinders. Check the current client for completion status.",
  events: [
    { name: "Season 1 Part 2: Whisperwake Isles", startsAt: "2026-10-29T15:00:00+08:00", endsAt: "2026-12-10T03:59:00+08:00", requirements: "Complete the current story and client unlock requirements; exact progression should be checked in-game.", detail: "Explore four new island regions, discover 51 new Aniimo and follow the new season story. The update window ends with the December 10 season transition listed by the official notice.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-10-30" },
    { name: "Aniimo Go!", startsAt: "2026-11-12T10:00:00+08:00", endsAt: "2026-12-10T07:59:00+08:00", requirements: "Reach character level 40.", detail: "An open-world racing event with three tracks. A new track opens every two weeks; solo and multiplayer racing are listed in the official update notice.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-11-08" },
    { name: "Prismana Photo: Phase 1", startDate: "2026-11-12", endDate: "2026-11-16", requirements: "Reach Student II and check the current event page.", detail: "The official Season 1 Part 2 notice lists a three-phase Prismana Photo event. This record preserves the published date window without inventing an exact local closing hour.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-11-08" },
    { name: "Prismana Photo: Phase 2", startDate: "2026-11-16", endDate: "2026-11-23", requirements: "Reach Student II and check the current event page.", detail: "The official Season 1 Part 2 notice lists the second Prismana Photo phase. Confirm the target form and rewards in the current client.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-11-08" },
    { name: "Prismana Photo: Phase 3", startDate: "2026-11-23", endDate: "2026-11-30", requirements: "Reach Student II and check the current event page.", detail: "The official Season 1 Part 2 notice lists the third Prismana Photo phase. Confirm the target form and rewards in the current client.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-11-08" },
    { name: "Real-time 1v1 Spar", startsAt: "2026-10-29T15:00:00+08:00", endsAt: "2026-12-10T03:59:00+08:00", requirements: "Check the current Spar mode for rank, lineup and matchmaking requirements.", detail: "Season 1 Part 2 adds real-time 1v1 competition. Detailed balance and matchmaking advice is not established here yet.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-10-30" },
    { name: "Prismana Inferlupa: Nimbus Fields", startDate: "2026-10-12", endDate: "2026-10-19", checked: octoberReviewDate, requirements: "Confirm entry requirements in your server's client; the post does not list a level.", detail: "Nurture the bloom in Nimbus Fields and trigger a Prismana Flow to attract special Prismana Inferlupa. Limited-time availability, not a permanent spawn. Exact closing hour and time zone are unspecified.", source: inferlupaEventSource },
    { name: "Legendary Journey: Windchaser's Departure", startsAt: "2026-09-25T04:00:00+08:00", endsAt: "2026-12-10T03:59:00+08:00", requirements: "Follow the current Legendary Journey progression in the client.", detail: "The Version 1.1 update introduces Irisalis and related Aniipod progression through this journey. Exact progression steps and weekly limits should be confirmed in the current client.", source: officialLinks.versionOneOne },
    { name: "Holo-Battle Interlink", startsAt: "2026-09-24T04:00:00+08:00", endsAt: null, recurrence: { opens: 4 * 1440 + 240, closes: 1 * 1440 + 240 }, requirements: "Reach Trailblazer I.", detail: "Open Thursday 04:00 through Monday 03:59 UTC+8 for co-op or AI play, with three replayable routes. Star and Support rewards reset weekly; confirm current-client changes.", source: officialLinks.versionOneOne },
    { name: "Egg Heist PvP Test", startsAt: "2026-10-29T00:00:00+08:00", endsAt: "2026-12-10T03:59:00+08:00", recurrence: { opens: 18 * 60, closes: 24 * 60 }, requirements: "Reach the published character and Egg Heist rank requirements; verify eligibility in the current mode screen.", detail: "Three teams compete for one Legendary Giga-Egg in a fair mode with adjusted Aniimo stats and no carried equipment or items. The official notice describes this as a test; confirm the daily opening window in the client.", source: officialLinks.octoberPartTwoLaunch, checked: "2026-10-30" },
    { name: "Egg Heist Team Mode: Chaos Mode", startsAt: "2026-09-24T04:00:00+08:00", endsAt: null, requirements: "Reach Tier IV: Elite Egg Seeker and use a Chaos Ticket.", detail: "Higher Prismana Aniimo Egg and Prismatic Collectible drop rates are listed; strict escape conditions apply and team play is recommended.", source: officialLinks.versionOneOne },
    { name: "Glamour Star", startsAt: "2026-09-25T04:00:00+08:00", endsAt: "2026-10-02T03:59:00+08:00", requirements: "Reach Student II.", detail: "Submit a Floral Soiree-themed Aniimo entry for score-milestone rewards.", source: officialLinks.versionOneOne },
    { name: "Aniimo Discovery", startsAt: "2026-09-25T04:00:00+08:00", endsAt: "2026-10-09T03:59:00+08:00", requirements: "Reach Student II.", detail: "Free Search Attempts replenish periodically and do not stack; use Search Buffs as research progresses.", source: officialLinks.versionOneOne },
    { name: "Vein Abundance: Rosetower Woods", startsAt: "2026-09-28T04:00:00+08:00", endsAt: "2026-10-05T03:59:00+08:00", requirements: "Reach Student II.", detail: "Prismana Form Melloblum is listed for Rosetower Woods. This is event availability, not a permanent spawn route.", source: officialLinks.versionOneOne },
    { name: "Vein Abundance: Berylline Vale", startsAt: "2026-10-05T04:00:00+08:00", endsAt: "2026-10-12T03:59:00+08:00", requirements: "Reach Student II.", detail: "Prismana Form Waleetle is listed for Berylline Vale. This is event availability, not a permanent spawn route.", source: officialLinks.versionOneOne },
    { name: "Journey Chronicles", startsAt: "2026-10-01T04:00:00+08:00", endsAt: "2026-10-29T03:59:00+08:00", requirements: "Reach Student I.", detail: "Log in for the designated days during the event to claim travel gifts.", source: officialLinks.versionOneOne },
    { name: "Home Season: Harvest Gathering", startsAt: "2026-10-20T04:00:00+08:00", endsAt: null, requirements: "Check the Home Season stage and current client eligibility.", detail: "Stage 3 opens at 20:00 UTC on Aniimo-Europe, 16:00 UTC-4 on Aniimo-Americas and 04:00 UTC+8 on Aniimo-Apac. Host or join a Harvest Gathering to earn rewards; confirm the current client for the closing time.", source: officialLinks.octoberWeeklyUpdate, checked: "2026-10-20" },
  ],
};

export const currentPatch = {
  title: "November 4 post-update fixes",
  date: "2026-11-04",
  source: officialLinks.octoberPostLaunchIssues,
  summary: "The latest directly verified official notice records November 4 fixes for Egg Heist, Elite Training, Storage Boxes, PS5 invitations, controller mail and other Season 1 Part 2 issues.",
  eligibility: "The October 29 Season 1 Part 2 notice lists Glimmer ×500 maintenance compensation for eligible Pathfinders; check the in-game mailbox.",
  highlights: [
    ["Egg Heist", "The November fixes address Giga-Egg wind, disconnect protection, Egg Nests, Blink Chip and extraction-related behavior."],
    ["Controls and PS5", "The notice fixes controller mail reading, emote selection and PS5 team invitations."],
    ["Events and progression", "Elite Training, Stamp Rush, Night Parade and the evolution screen receive fixes."],
    ["Pending build check", "Search data mentions a November 6 build; keep its exact primary announcement pending until the official Steam detail is directly verified."],
  ],
};

export function eventStatus(event, now = new Date()) {
  if (!Number.isFinite(now.getTime())) return "Check in client";
  if (event.startDate) {
    // Unknown source time zone: UTC±14 guard band, never assert Active.
    const earliestStart = Date.parse(`${event.startDate}T00:00:00+14:00`);
    const latestEnd = Date.parse(`${event.endDate}T23:59:59.999-12:00`);
    if (now.getTime() < earliestStart) return "Upcoming";
    if (now.getTime() > latestEnd) return "Ended";
    return "Check in client";
  }
  const start = new Date(event.startsAt);
  const end = event.endsAt ? new Date(event.endsAt) : null;
  if (!Number.isFinite(start.getTime()) || (end && !Number.isFinite(end.getTime()))) return "Check in client";
  if (now < start) return "Upcoming";
  if (end && now > end) return "Ended";
  if (event.recurrence) {
    const local = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const minute = local.getUTCDay() * 1440 + local.getUTCHours() * 60 + local.getUTCMinutes();
    const { opens, closes } = event.recurrence;
    const open = opens > closes ? minute >= opens || minute < closes : minute >= opens && minute < closes;
    return open ? "Active" : "Closed this week";
  }
  return "Active";
}

export function eventSchedule(event) {
  if (event.startDate) return `${event.startDate} to ${event.endDate} — dates only; exact closing hour and time zone not specified. Check your server's client.`;
  if (event.recurrence) return "Every Thursday 04:00 to Monday 03:59 UTC+8; check current-client changes.";
  const start = new Date(event.startsAt).toLocaleString("en-GB", { timeZone: "Asia/Shanghai", dateStyle: "medium", timeStyle: "short" });
  const end = event.endsAt ? new Date(event.endsAt).toLocaleString("en-GB", { timeZone: "Asia/Shanghai", dateStyle: "medium", timeStyle: "short" }) : "No end time listed";
  return `${start} to ${end} UTC+8`;
}

export const postLaunchEvidence = {
  monetization: {
    title: "Economy and Monetization: Evidence Status",
    rows: [
      ["Confirmed", "Aniimo is free to play. Official storefronts disclose in-app purchases."],
      ["Not a conclusion", "A store disclosure does not establish pay-to-win, gacha, a progression wall or competitive advantage by itself."],
      ["Evidence needed", "Capture the purchase screen, price and currency, earnable alternative, affected system, platform, region, version and a reproducible impact."],
      ["Community input", "Player reports can identify questions to test, but cannot be promoted to a product-wide economy claim without direct evidence."],
    ],
  },
  firstWeek: [
    ["Secure account and server", "Use the account and server you intend to keep before creating extra characters or claiming account-bound rewards."],
    ["Finish current update prerequisites", "Check the official event page for Student I, Student II or Egg Heist tier requirements before planning an event route."],
    ["Use resources with a purpose", "Do not copy unverified resource-hoarding or purchase advice. Record version, resource name and repeatable outcome before publishing a recommendation."],
    ["Record useful evidence", "When a route, event, shop or issue is tested, keep platform, server, region, time, screenshots and the current client version."],
  ],
  mobileTroubleshooting: [
    ["Store page not visible", "Confirm country, store account, device compatibility and official listing URL; do not install an APK mirror."],
    ["Install or update fails", "Check free storage, current client version, official maintenance notice and platform-store error message before reinstalling."],
    ["Wrong progress or character", "Sign in with the intended Aniimo account and confirm the server. Different servers keep independent data."],
    ["Performance or controls", "Capture device model, operating-system version, client version, graphics setting, network state and repeatable steps before reporting it as a known issue."],
  ],
  eventAniimo: {
    melloblum: {
      title: "Prismana Form Melloblum event availability",
      eventName: "Vein Abundance: Rosetower Woods",
      detail: "The September update lists Prismana Form Melloblum in Vein Abundance at Rosetower Woods.",
      source: officialLinks.septemberUpdate,
    },
    waleetle: {
      title: "Prismana Form Waleetle event availability",
      eventName: "Vein Abundance: Berylline Vale",
      detail: "The September update lists Prismana Form Waleetle at Berylline Vale.",
      source: officialLinks.septemberUpdate,
    },
  },
};

export const freshnessWatchlist = [
  ["Official news", "Check launch posts, rewards posts, feature pages and official Wiki changes.", "Update news tracker, source archive and affected guide pages."],
  ["Platform changes", "Check Steam, Epic Games Store, Xbox, PlayStation, App Store and Google Play.", "Update download, platform and launch tracker pages."],
  ["Redeem code changes", "Check only official channels or in-game redemption screens for redeemable strings.", "Update codes, active codes, expired codes and IndexNow after deployment."],
  ["Map verification", "Check live route screenshots, weather windows and time-of-day conditions after launch.", "Update map, region, location and Aniimo detail pages."],
  ["Search Console data", "Review GSC queries after pages receive impressions.", "Refresh titles, FAQs and internal links where queries show clear intent."],
];

export const updateWorkflowMatrix = [
  ["Launch date change", "Release date, download, launch tracker, platform pages", "Official news or storefront date field"],
  ["New platform state", "Platform page, download hub, safe-download guide, launch tracker", "Storefront listing and action label"],
  ["New Aniimo entry", "Database, detail page, element, role, stage, region and site index", "Official Wiki entry plus image or source status"],
  ["New redeem code", "Codes, active codes, rewards, launch tracker and changelog", "Official channel or in-game redemption screen"],
  ["New region or route proof", "Map, region, location page and related Aniimo detail pages", "Official map source or in-game screenshot evidence"],
  ["Search query movement", "Target page, FAQ block, title, meta description and internal links", "Google Search Console query data"],
];

export const recentResearchNotes = [
  ["Official update", "The September 3 developer letter re-confirmed PC, console and Xbox Cloud Gaming for September 16, 2026, followed by mobile on September 23, 2026."],
  ["Social discussion", "Current community questions center on mobile timing, account and server boundaries, code claims, launch performance, shop value and whether optional purchases feel gacha-like."],
  ["Search demand", "Search results are clustering around release date, download, Steam, PS5, Xbox, mobile, codes, launch rewards, gameplay, map, multiplayer and PAX East."],
];

export const socialDiscussionResearch = [
  {
    topic: "Pokemon and Palworld comparisons",
    signals: "Creature-catching comparisons appear naturally in community comments, Reddit-style discussion and video reactions.",
    contentOpportunity: "Strengthen comparison pages with careful framing around collecting, open-world exploration, Twine and official differences.",
    sourcePolicy: "Use as search-intent evidence only; do not claim Aniimo is equivalent to another game.",
  },
  {
    topic: "Platform availability and download timing",
    signals: "Players repeatedly ask whether Aniimo is on Steam, Xbox, PlayStation, iOS, Android, Epic Games Store and Switch.",
    contentOpportunity: "Keep platform pages fresh, add store visibility notes and expand troubleshooting for unavailable pages by region.",
    sourcePolicy: "Confirm final availability through official storefronts or official Aniimo posts.",
  },
  {
    topic: "Mobile release delay and regional access",
    signals: "Mobile players focus on why iOS and Android timing differs from PC and console, and whether store pages appear in their country.",
    contentOpportunity: "Add FAQ coverage around mobile timing, region visibility and safe download behavior.",
    sourcePolicy: "Use official date and storefront visibility checks before updating download guidance.",
  },
  {
    topic: "Codes, rewards and free gifts",
    signals: "Code and reward searches cluster around pre-registration bonuses, Susuta egg, milestone rewards and future redeemable strings.",
    contentOpportunity: "Keep code pages split between active, expired, rewards and claim guidance so speculative code posts do not pollute confirmed rewards.",
    sourcePolicy: "Only mark a code active after an official channel or in-game redemption screen confirms it.",
  },
  {
    topic: "Twine and transformation mechanics",
    signals: "Players discuss what Twine means, whether it affects traversal, combat, puzzles and creature utility.",
    contentOpportunity: "Expand Twine guides with launch-safe examples, then add tested use cases after the game is playable.",
    sourcePolicy: "Keep cooldowns, damage values and route requirements as watchlist data until verified.",
  },
  {
    topic: "Map, regions and spawn routes",
    signals: "Community interest clusters around where specific Aniimo appear, which regions are public and whether weather or time matters.",
    contentOpportunity: "Prepare region pages for post-launch screenshots, route notes and weather/time filters.",
    sourcePolicy: "Treat preview footage as context, not exact coordinate proof.",
  },
  {
    topic: "Beta access and launch readiness",
    signals: "Players ask about closed beta history, future test access, server opening time and launch countdown details.",
    contentOpportunity: "Maintain beta, launch countdown and launch tracker pages with clear past-versus-upcoming date labels.",
    sourcePolicy: "Separate past beta milestones from current global launch dates.",
  },
  {
    topic: "Monetization and pay-to-win concerns",
    signals: "Post-launch discussion centers on shop density, paid packs, gacha-like expectations and competitive fairness.",
    contentOpportunity: "Separate official free-to-play and in-app-purchase disclosures from player sentiment, then add purchase-effect evidence as it is verified.",
    sourcePolicy: "Do not turn a store label or social-media opinion into a pay-to-win verdict; require official detail and reproducible impact evidence.",
  },
];
