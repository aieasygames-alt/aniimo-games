import { sourceLastChecked } from "./site-meta.js";
import { officialLinks, releaseInfo } from "./sources.js";

export const launchRewards = [
  ["Rare Prismana Aniimo choice", "Become a Junior Wayfarer to select a Prismana Form Aniimo."],
  ["Mysterious Susuta egg", "Pre-register on the official website to claim a mysterious Susuta egg."],
  ["10M milestone", "Glimmer x200"],
  ["15M milestone", "Aniipod Ultra x2"],
  ["20M milestone", "Companion Promise limited avatar frame"],
  ["30M milestone", "Sunlit Meadow limited outfit"],
  ["Launch event items", "Sparkling Cube, Aniipod Ultra and Tumbler are listed as free catching items through global launch events."],
].map(([title, reward]) => ({
  title,
  reward,
  status: "Confirmed",
  source: officialLinks.website,
}));

export const codes = [
  {
    code: "Official code list pending",
    reward: "Official codes are not yet listed by Aniimo. Community-reported strings require an official announcement or direct redemption test before they are marked active here.",
    status: "Watchlist",
    updated: sourceLastChecked,
    source: officialLinks.main,
    checklist: ["Official website news", "Official Discord/social posts", "Platform storefront campaigns", "Launch livestream or event posts"],
  },
];

export const platforms = [
  ["Official website", "Download", "Official launch and platform hub.", officialLinks.website],
  ["App Store", "Play now", "Official iOS listing. Availability and client version can vary by country and device.", officialLinks.appStore],
  ["Google Play", "Play now", "Official Android listing. Availability and client version can vary by country and device.", officialLinks.googlePlay],
  ["Steam", "Play now", "Official PC storefront; Aniimo is live.", officialLinks.steam],
  ["Epic Games Store", "Play now", "Official PC storefront; Aniimo is live.", officialLinks.epic],
  ["Xbox", "Play now", "Official Xbox storefront; Aniimo is live.", officialLinks.xbox],
  ["PlayStation 5", "Play now", "Official PlayStation storefront; Aniimo is live.", officialLinks.playstation],
].map(([name, action, note, url]) => ({ name, action, note, url, status: "Watchlist", lastChecked: sourceLastChecked }));

export const mechanics = [
  ["Creature catching", "Players catch Aniimo with Aniipods, set traps, and time catches around encounter behavior."],
  ["Twine", "Players can Twine with collected Aniimo, essentially becoming them to use skills for puzzles, battles and traversal."],
  ["Environment-based encounters", "Unique Aniimo can appear according to environment, weather, phenomena and time of day."],
  ["Egg Heist", "Egg Heist is described as a PVEVP mode where three-player teams search and battle in the Lost Isles."],
  ["Homeland and RV", "Pathfinders have a personal RV and Homeland where they can plant crops, build decorations and interact with Aniimo."],
].map(([title, text]) => ({ title, text, source: officialLinks.googlePlay }));

export const mapGuide = [
  ["Region coverage", "All six public world regions have official artwork, a route guide and a linked community-map entrance for planning."],
  ["Map size searches", "Aniimo.games tracks map-size intent through the six public regions, visible region art and launch verification queues. Exact world scale, border size and travel-time measurements should be added only after official or in-game confirmation."],
  ["Encounter routing", "Each region links to representative Aniimo, a usable route-planning map and source-labeled location notes; exact spawns remain separate until verified."],
  ["Verification pass", "After launch, update each area with coordinates, weather windows, time-of-day notes and traversal requirements."],
  ["Internal linking", "Region pages link back into Aniimo details so search visitors can move between map, evolution and database pages."],
];

export const seoGuides = {
  download: [
    {
      title: "How to download Aniimo safely",
      body:
        "The safest way to download Aniimo is to start from an official storefront or the official Aniimo website. PC, console and mobile are live through the listed official stores. App Store and Google Play visibility can still differ by country and device, so check the live listing before using any workaround. Avoid APK mirrors, reposted installers and unofficial download buttons.",
    },
    {
      title: "Which Aniimo platform should you choose?",
      body:
        "PC and console players can use Steam, Epic Games Store, Xbox, PlayStation and the official website. Mobile players can use Google Play and the App Store where the official listing is visible. If a mobile store page is not available in your country, compare the official Aniimo announcement with the local storefront; regional visibility can change without a separate news post.",
    },
    {
      title: "Before installing",
      body:
        "Use the Aniimo account you intend to keep, confirm that the publisher and developer match the official listing, and keep campaign rewards separate from redeem codes. PC and mobile share data when the same Aniimo account is used, while data on different servers is independent. A code should only be entered when an official channel or the current game client shows a redemption flow.",
    },
    {
      title: "Why mobile dates may look different",
      body:
        "Mobile launched on September 23, 2026, one week after PC and console. App Store or Google Play pages can still differ by country, account, device compatibility and client-rollout timing. Use the official Aniimo announcement and the live storefront listing together; do not treat a missing install button as proof of a global outage.",
    },
  ],
  release: [
    {
      title: "Aniimo global release date summary",
      body:
        "The official launch announcement lists Aniimo for PC and consoles on September 16, 2026, followed by mobile on September 23, 2026. That gives the game two visible launch moments: one for Steam, Epic Games Store, Xbox and PlayStation discovery, and one for iOS and Android store availability. The dates should be treated as official calendar dates, while exact hourly unlock timing can still vary by platform, country and storefront update schedule.",
    },
    {
      title: "What is confirmed after launch?",
      body:
        "Confirmed public information includes the developer and publisher, live platform availability, the free-to-play open-world RPG positioning, core systems such as catching with Aniipods, Twine, Homeland, real-time challenges and region-based exploration. Complete spawn tables, balance values, exact economic impact and mode-specific competitive rules should remain marked as watchlist data until official sources or in-game verification confirm them.",
    },
    {
      title: "How this release tracker is maintained",
      body:
        "Release pages are updated from official public sources first. Storefront text, official news posts and the official Aniimo Wiki are preferred over reposted summaries. If an older beta date or closed test detail appears beside launch information, it is labeled as a past milestone so readers do not confuse it with the global release window.",
    },
    {
      title: "What the September developer letter clarified",
      body:
        "The September 3 developer letter confirmed the global launch sequence: PC, console and Xbox Cloud Gaming on September 16, 2026, followed by mobile on September 23, 2026. Both launch milestones have now passed. Current questions should focus on storefront visibility, client version, account flow and official maintenance notices rather than countdown timing.",
    },
  ],
  codes: [
    {
      title: "Are there Aniimo codes right now?",
      body:
        "No public Aniimo redeem code is confirmed on this site yet. That distinction matters for search users because pre-registration rewards, milestone rewards and launch event gifts are real rewards, but they are not necessarily typed into a code redemption box. Until an official channel publishes a redeemable string or the game client exposes a redemption flow, code claims should stay in watchlist status.",
    },
    {
      title: "How to verify an Aniimo code",
      body:
        "A code should be checked against official news, verified social posts, platform campaigns, launch livestreams or the in-game redemption screen. If a code is shared only through reposted screenshots or unsourced lists, it should not be marked active. Once launch begins, the best code page experience will include the code, reward, region, platform restrictions, expiration date, redemption steps and a last-tested timestamp.",
    },
    {
      title: "Rewards that are confirmed",
      body:
        "Confirmed rewards currently include pre-registration and milestone items such as Glimmer, Aniipod Ultra, the Companion Promise avatar frame, the Sunlit Meadow outfit, a Prismana Aniimo choice and a mysterious Susuta egg. These belong on the rewards tracker even when there is no active redeem code.",
    },
  ],
  map: [
    {
      title: "How the Aniimo map guide works",
      body:
        "The Aniimo map guide organizes known public regions into search-friendly route pages. Each region page connects official scenery, representative Aniimo, mechanics and verification notes. This is useful before launch because searchers often look for a creature, then need a region, route condition or related evolution line. The map page acts as the hub that connects those intents.",
    },
    {
      title: "What can change after launch?",
      body:
        "Exact spawn points, time windows, weather requirements and traversal locks should be verified after players can test the live game. The current map avoids pretending that preview footage is a final coordinate table. Instead, it separates confirmed region names and public mechanics from launch-day route details that still need in-game confirmation.",
    },
    {
      title: "How big is the Aniimo map?",
      body:
        "Aniimo.games does not list a final square-kilometer map size yet because official sources have not published a complete measured world scale. The map guide currently tracks six public regions, their representative Aniimo, official scenery and route-verification tasks. After launch, this page should add travel-time checks, border screenshots, route screenshots and region-to-region path notes before making exact map-size claims.",
    },
    {
      title: "Best next map upgrades",
      body:
        "After launch, the strongest map upgrades will be coordinates, route screenshots, weather filters, time-of-day filters, required Twine abilities and internal links from every region to related Aniimo pages. That structure helps both players and search crawlers understand the relationship between locations, elements, roles and evolution lines.",
    },
  ],
};

export const editorialGuides = {
  download: [
    ["Use official storefronts", "Start from the official website or platform store page for your device. PC and console are live; avoid APK mirrors and unofficial installers."],
    ["Check mobile by country", "Mobile is live. Check the App Store or Google Play listing for your country, account and device before trying unsupported installation methods."],
    ["Keep your account consistent", "Use the Aniimo account and server you intend to keep. PC and mobile share data with the same account, while different servers are independent."],
  ],
  release: [
    ["PC and console first", "The official launch announcement lists PC and console launch before mobile."],
    ["Mobile is live", "The mobile launch date was September 23, 2026. Use the live App Store or Google Play listing for country and device availability."],
    ["Current availability", "Use store pages and official news for maintenance, region and client-version changes rather than countdown timing."],
  ],
  codes: [
    ["Redeem codes", "No public redeem code is confirmed here yet. Keep code claims separate from official pre-registration rewards."],
    ["Reward milestones", "Milestone rewards are confirmed through official launch and pre-registration pages, even when they are not typed as redeem codes."],
    ["Verification rule", "A code should only be marked active after it appears on an official channel or can be redeemed in-game."],
  ],
  wiki: [
    ["Aniimo index", "The database currently tracks all 90 public Aniimo entries discoverable from the official Wiki probe page. Entries with incomplete element, role or stage data remain labeled as watchlist fields."],
    ["Map index", "Six public world regions are connected to guide pages with official artwork and representative Aniimo."],
    ["Maintenance", "New official Wiki and site updates should flow into the changelog before pages are refreshed."],
  ],
};

export const faqs = {
  home: [
    ["What is Aniimo?", "Aniimo is a free-to-play creature-catching open-world RPG set on Idyll, developed by Pawprint Studio."],
    ["When does Aniimo launch?", "Official site news lists PC and console launch for September 16, 2026, with mobile launch on September 23, 2026."],
    ["What is Twine in Aniimo?", "Twine lets players become collected Aniimo and use their skills for puzzles, battles, traversal and exploration."],
  ],
  database: [
    ["Where can I find Aniimo characters?", "Use the Aniimo database to search all 90 public creatures by name, element, role, region, stage and evolution. Each detail page links to its current source-labeled location guide."],
    ["How many Aniimo names are listed?", "This site currently tracks 90 public Aniimo names discoverable from the official Aniimo Wiki probe page."],
    ["Are elements and roles official?", "Confirmed entries use official Wiki element, role and stage labels. Newly synced index-only entries keep unknown fields labeled until verified."],
  ],
  map: [
    ["How big is the Aniimo map?", "A final measured Aniimo world size is not confirmed here yet. Aniimo.games currently tracks six public regions with linked route-planning maps and will add measurements only after official or reproducible evidence is available."],
    ["Where can I find Aniimo locations?", "Search by region or creature name, then open the linked region guide and community map for current source-labeled location notes. Exact spawn coordinates, weather and time conditions need verification in the live game."],
  ],
  codes: [
    ["Are there official Aniimo codes?", "No public redeem code is confirmed here yet. This page separates redeem codes from official milestone rewards."],
    ["What are the official pre-registration rewards?", "Official rewards include Glimmer, Aniipod Ultra, Companion Promise avatar frame, Sunlit Meadow outfit, a Prismana Aniimo choice and a Susuta egg."],
  ],
  download: [
    ["Where can I download Aniimo?", "Use the official Steam, Epic Games Store, Xbox or PlayStation listing for PC and console. Check the official App Store or Google Play listing for mobile availability in your region."],
    ["What platforms is Aniimo available on?", "Aniimo is live on PC, consoles, iOS and Android. Check the official storefront for country, device and client-version availability."],
  ],
  snippets: [
    ["Is Aniimo out yet?", "Yes. Aniimo is live on PC, consoles, iOS and Android. Availability can still vary by country, storefront and device."],
    ["Is Aniimo on Steam?", "Yes. Aniimo is live through its official Steam listing for PC."],
    ["Are there Aniimo codes?", "No public redeem code is confirmed on Aniimo.games yet. Confirmed pre-registration and milestone rewards are tracked separately from redeem codes."],
    ["How many Aniimo are confirmed?", "Aniimo.games currently tracks 90 public Aniimo names from the official Wiki probe workflow."],
    ["Is Aniimo free to play?", "Official storefront language describes Aniimo as a free-to-play creature-catching open-world RPG."],
    ["Is Aniimo on mobile?", "Yes. Aniimo is live on iOS and Android. Check the official App Store or Google Play listing for your country and device."],
  ],
};

export const updates = [
  { date: "2026-10-20", title: "October 15–17 update and known-issues coverage refreshed", text: "Added the October 15 Home Season and Harvest Gathering update, linked the October 16 known-issues notice, and separated recent fixes from unresolved platform and reward problems." },
  { date: "2026-10-15", title: "October activities and practical guides refreshed", text: "Added the official Inferlupa date-only activity, October 13 Egg Heist explanations and future-plan boundaries, weekly activity states, and a Homeland planning checklist. October reviews are item-dated; older Wiki fields retain their previous review date." },
  {
    date: "2026-10-01",
    title: "Version 1.1 event and player-support coverage refreshed",
    text: "Refreshed live events, controller, code-redeeming, account and Egg Heist guidance from official Version 1.1 and September 30 patch notes. Community reports remain research signals, not confirmed game facts.",
  },
  {
    date: "2026-09-23",
    title: "Mobile launch and September update coverage added",
    text: "Updated platform, launch and download guidance for the live iOS and Android release. Added official update and event planning coverage while keeping code strings, detailed economy claims and location routes behind verification rules.",
  },
  {
    date: "2026-09-11",
    title: "Launch research and verification plan updated",
    text: "Recorded the September 3 developer letter, platform launch sequence, current community questions and search-intent priorities. Added launch verification coverage for mobile availability, multiplayer, economy and localization without turning community reports into confirmed game facts.",
  },
  {
    date: "2026-09-10",
    title: "Player planning tools connected",
    text: "Added Aniimo comparison, team planning, collection tracking, map filters, shareable tool URLs and database status filters. These tools reuse public data and keep unverified combat claims labeled.",
  },
  {
    date: "2026-08-30",
    title: "Social discussion research added",
    text: "Added a social-intent research pool covering comparison searches, platform access, mobile timing, codes, Twine, map routes, beta readiness and monetization concerns for future content planning.",
  },
  {
    date: "2026-08-30",
    title: "Freshness workflow expanded",
    text: "Added official news, platform change and changelog trackers with an update matrix for launch dates, storefront status, Aniimo entries, redeem codes, route proof and Search Console changes.",
  },
  {
    date: "2026-08-28",
    title: "Launch tracker added",
    text: "Added a launch readiness page covering platform windows, reward status, code status, source freshness and post-launch verification tasks.",
  },
  {
    date: "2026-08-28",
    title: "Official detail and map content expanded",
    text: "Expanded Aniimo detail pages with official descriptions, evolution lines, region mapping, platform links, release timeline notes and complete region artwork.",
  },
  {
    date: "2026-08-27",
    title: "Official launch information added",
    text: "Added official launch dates, platform notes, Google Play details, official Wiki names, regions, mechanics and launch rewards.",
  },
  {
    date: "2026-08-27",
    title: "Aniimo Wiki foundation launched",
    text: "Created the initial database, map, evolution, codes, download, beginner guide, and data-status pages.",
  },
];

export const launchTracker = {
  updated: sourceLastChecked,
  summary: "Aniimo.games tracks the live PC, console and mobile game using official announcements, storefront checks and clearly labeled in-game verification.",
  readiness: [
    ["PC and console date", releaseInfo.pcConsole, "Confirmed"],
    ["Mobile availability", "Live on iOS and Android; check storefront by country and device", "Verified"],
    ["Official platform links", "Website, Steam, Epic, Xbox, PlayStation, App Store and Google Play", "Confirmed"],
    ["Pre-registration rewards", "Milestones, Prismana Aniimo choice and mysterious Susuta egg", "Confirmed"],
    ["Redeem codes", "No public redeem code confirmed yet", "Watchlist"],
    ["Exact unlock hour", "Storefront-specific timing still pending", "Watchlist"],
    ["Spawn routes", "Coordinates and route screenshots need live verification", "Watchlist"],
  ],
  nextChecks: [
    "Check official website and main news for live updates, maintenance and event notices.",
    "Check Steam, Epic, Xbox, PlayStation, App Store and Google Play for live storefront, client and regional availability changes.",
    "Check the official Wiki entry path for new Aniimo entries, renamed entries or changed stage labels.",
    "Update codes only after a redeemable string appears on an official channel or in-game redemption screen.",
    "Add verified route screenshots, weather windows, time windows and platform-specific issue notes.",
  ],
};

export const launchDayCommandCenter = {
  updated: sourceLastChecked,
  summary: "A live launch support page for players who need official download paths, account guidance, code checks, server status and platform-specific fixes.",
  statusRows: [
    ["Current client update", "October 15 resource update: restart the client to download current resources", "Verified"],
    ["PC and console availability", "Live on PC, Steam, Epic, PS5 and Xbox", "Verified"],
    ["Mobile availability", "Live on iOS and Android; check storefront by country and device", "Verified"],
    ["PC and mobile data", "Shared with the same account", "Verified"],
    ["Server status", "No Aniimo-wide outage currently marked confirmed", "Verified"],
    ["Active redeem codes", "Official code list pending", "Watchlist"],
    ["Known issues", "October platform, mobile, reward and gameplay issues are tracked", "Watchlist"],
  ],
  quickActions: [
    ["Current events", "/events/", "Check active status, UTC+8 windows, requirements and official event details."],
    ["Download safely", "/download/", "Use official website, Steam, Epic Games Store, Xbox, PlayStation, App Store or Google Play links."],
    ["Check active codes", "/codes/", "Separate confirmed rewards from redeemable code strings and verify each code before marking it active."],
    ["Account and cross-platform", "/topics/aniimo-cross-save/", "Continue PC data on mobile with the same account; check server boundaries before creating a character."],
    ["Fix launch issues", "/troubleshooting/", "Start with server status, known issues, store visibility, region and download checks."],
    ["Check current updates", "/updates/", "Review dated official updates, source notes and current player guidance."],
  ],
  firstDayChecks: [
    ["Now", "Check official launch posts, storefront availability and account guidance."],
    ["Mobile availability", "Verify App Store and Google Play availability, same-account continuation and region-specific store behavior."],
    ["Code review", "Check official news and in-game redemption before publishing a code string as active."],
    ["Issue review", "Record common errors only after official support acknowledgement or reproducible platform reports."],
    ["Daily refresh", "Update homepage, launch hub, codes, troubleshooting and update log with verified changes."],
    ["Weekly review", "Review Search Console discovery, sitemap freshness and high-intent search paths."],
  ],
  searchIntents: [
    ["Aniimo server status", "Answer whether the game is live, under maintenance or affected by a confirmed incident."],
    ["Aniimo not working", "Route users to download, region and storefront checks before suggesting unsupported fixes."],
    ["Aniimo redeem codes", "Show the active-code policy and link to confirmed rewards when no code string exists."],
    ["Aniimo mobile download", "Explain live iOS and Android availability, same-account PC progress and country-specific storefront checks."],
    ["Aniimo download button missing", "Send users to official platform pages and avoid mirrors or APK reposts."],
  ],
  faq: [
    ["Is Aniimo live right now?", "Aniimo is live on Windows PC, Steam, Epic Games Store, PS5, Xbox, iOS and Android according to official launch news. Check storefront availability for your country and device."],
    ["Where should I check first on launch day?", "Start with the Launch Day page, then open download, release-date, codes, troubleshooting and platform pages for the specific issue."],
    ["Will launch errors be listed here?", "Yes, but only after official support posts, storefront behavior or repeated verified reports make the issue clear enough to publish responsibly."],
  ],
};

export const statuses = {
  Confirmed: "Official or in-game verified data.",
  Unconfirmed: "Seen in previews, community reports, or incomplete sources.",
  Estimated: "Planning note based on currently public information.",
  Watchlist: "Tracked for launch; verify before publishing as active.",
  Unknown: "Official index entry exists, but this specific field still needs verification.",
};
