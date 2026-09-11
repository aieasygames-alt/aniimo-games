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
    code: "No official redeem code published",
    reward: "Track this page for launch codes and global campaign rewards.",
    status: "Watchlist",
    updated: sourceLastChecked,
    source: officialLinks.main,
    checklist: ["Official website news", "Official Discord/social posts", "Platform storefront campaigns", "Launch livestream or event posts"],
  },
];

export const platforms = [
  ["Official website", "Pre-registration", "Official pre-registration and launch reward hub.", officialLinks.website],
  ["App Store", "Pre-order", "Official iOS listing for mobile launch tracking.", officialLinks.appStore],
  ["Google Play", "Pre-register", "Android store page by Pawprint Studio with wishlist and pre-registration support.", officialLinks.googlePlay],
  ["Steam", "Wishlist", "Official PC storefront listing for the September 16 PC launch window.", officialLinks.steam],
  ["Epic Games Store", "Wishlist", "Official Epic listing for the September 16 PC launch window.", officialLinks.epic],
  ["Xbox", "Wishlist", "Official Xbox listing for the September 16 console launch window.", officialLinks.xbox],
  ["PlayStation 5", "Wishlist", "Official PlayStation concept page for the September 16 console launch window.", officialLinks.playstation],
].map(([name, action, note, url]) => ({ name, action, note, url, status: "Watchlist", lastChecked: sourceLastChecked }));

export const mechanics = [
  ["Creature catching", "Players catch Aniimo with Aniipods, set traps, and time catches around encounter behavior."],
  ["Twine", "Players can Twine with collected Aniimo, essentially becoming them to use skills for puzzles, battles and traversal."],
  ["Environment-based encounters", "Unique Aniimo can appear according to environment, weather, phenomena and time of day."],
  ["Egg Heist", "Egg Heist is described as a PVEVP mode where three-player teams search and battle in the Lost Isles."],
  ["Homeland and RV", "Pathfinders have a personal RV and Homeland where they can plant crops, build decorations and interact with Aniimo."],
].map(([title, text]) => ({ title, text, source: officialLinks.googlePlay }));

export const mapGuide = [
  ["Region coverage", "All six public world regions now have official artwork and launch-ready guide pages."],
  ["Map size searches", "Aniimo.games tracks map-size intent through the six public regions, visible region art and launch verification queues. Exact world scale, border size and travel-time measurements should be added only after official or in-game confirmation."],
  ["Encounter routing", "Each region links to representative Aniimo and keeps route details separate from claims that still need launch verification."],
  ["Verification pass", "After launch, update each area with coordinates, weather windows, time-of-day notes and traversal requirements."],
  ["Internal linking", "Region pages link back into Aniimo details so search visitors can move between map, evolution and database pages."],
];

export const seoGuides = {
  download: [
    {
      title: "How to download Aniimo safely",
      body:
        "The safest way to download Aniimo is to start from an official storefront or the official Aniimo website. Aniimo is listed as a free-to-play creature-catching open-world RPG, and each platform page can use a slightly different call to action before launch. Steam and Epic Games Store use wishlist flows for PC discovery, console pages use platform store wishlists, and mobile pages can show pre-order or pre-registration depending on region. Avoid APK mirrors, reposted installers, and unofficial download buttons, especially before the global launch windows are active.",
    },
    {
      title: "Which Aniimo platform should you choose?",
      body:
        "PC and console players should track the September 16, 2026 launch window through Steam, Epic Games Store, Xbox, PlayStation and the official website. Mobile players should track the September 23, 2026 launch window through Google Play and the App Store. If a store page is not visible in your country yet, use the official website as the source of truth and check again closer to launch because regional storefront visibility can change without a separate news post.",
    },
    {
      title: "Before installing",
      body:
        "Use the same account ecosystem you plan to play on at launch, confirm that the publisher and developer match the official listing, and keep launch rewards separate from redeem codes. Pre-registration and wishlist rewards are usually delivered through official systems, while redeem codes require a separate code field or redemption page. This site tracks both, but it does not link to unofficial installers.",
    },
    {
      title: "Why mobile dates may look different",
      body:
        "The official developer announcement tracks mobile launch for September 23, 2026, one week after PC and console launch. App Store or Google Play pages may show a different expected date, a pre-registration state or no date depending on country and store approval timing. Use the official Aniimo announcement and the live storefront listing together; do not treat a placeholder date as a confirmed delay.",
    },
  ],
  release: [
    {
      title: "Aniimo global release date summary",
      body:
        "The official launch announcement lists Aniimo for PC and consoles on September 16, 2026, followed by mobile on September 23, 2026. That gives the game two visible launch moments: one for Steam, Epic Games Store, Xbox and PlayStation discovery, and one for iOS and Android store availability. The dates should be treated as official calendar dates, while exact hourly unlock timing can still vary by platform, country and storefront update schedule.",
    },
    {
      title: "What is confirmed before launch?",
      body:
        "Confirmed public information includes the developer and publisher, platform availability, the free-to-play open-world RPG positioning, core systems such as catching with Aniipods, Twine, Homeland, real-time challenges and region-based exploration. Exact launch-day server opening time, complete spawn tables, balance values and final event cadence should remain marked as watchlist data until official sources or in-game verification confirm them.",
    },
    {
      title: "How this release tracker is maintained",
      body:
        "Release pages are updated from official public sources first. Storefront text, official news posts and the official Aniimo Wiki are preferred over reposted summaries. If an older beta date or closed test detail appears beside launch information, it is labeled as a past milestone so readers do not confuse it with the global release window.",
    },
    {
      title: "What the September developer letter clarified",
      body:
        "The September 3 developer letter re-confirmed the global launch sequence: PC, console and Xbox Cloud Gaming on September 16, 2026, followed by mobile on September 23, 2026. Community questions about a later iOS store date should be treated as storefront timing or a placeholder until the official mobile listing changes. Exact hourly unlocks and regional rollout details remain platform-specific watchlist items.",
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
    ["Use official storefronts", "Start from the official website or platform store page for your device. Avoid APK mirrors or unofficial installers until Pawprint Studio publishes direct files."],
    ["Check platform dates", "PC and console availability is tracked for September 16, 2026, while mobile availability is tracked for September 23, 2026."],
    ["Wishlist or pre-register", "Store pages can use different labels, but wishlist, pre-order and pre-register actions all help you follow launch availability."],
  ],
  release: [
    ["PC and console first", "The official launch announcement lists PC and console launch before mobile."],
    ["Mobile follows one week later", "The mobile launch window is September 23, 2026, giving store pages time to roll out by region."],
    ["Exact unlock times", "Exact hourly unlock timing is not listed here yet; use store pages and official news for the final countdown."],
  ],
  codes: [
    ["Redeem codes", "No public redeem code is confirmed here yet. Keep code claims separate from official pre-registration rewards."],
    ["Reward milestones", "Milestone rewards are confirmed through official launch and pre-registration pages, even when they are not typed as redeem codes."],
    ["Verification rule", "A code should only be marked active after it appears on an official channel or can be redeemed in-game."],
  ],
  wiki: [
    ["Aniimo index", "The database currently tracks all 89 public Aniimo entries discoverable from the official Wiki probe page. Entries with incomplete element, role or stage data remain labeled as watchlist fields."],
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
    ["How many Aniimo names are listed?", "This site currently tracks 89 public Aniimo names discoverable from the official Aniimo Wiki probe page."],
    ["Are elements and roles official?", "Confirmed entries use official Wiki element, role and stage labels. Newly synced index-only entries keep unknown fields labeled until verified."],
  ],
  codes: [
    ["Are there official Aniimo codes?", "No public redeem code is confirmed here yet. This page separates redeem codes from official milestone rewards."],
    ["What are the official pre-registration rewards?", "Official rewards include Glimmer, Aniipod Ultra, Companion Promise avatar frame, Sunlit Meadow outfit, a Prismana Aniimo choice and a Susuta egg."],
  ],
  download: [
    ["Where can I pre-register for Aniimo?", "Use the official Aniimo website and official store pages such as Google Play when available in your region."],
    ["What platforms is Aniimo launching on?", "Official news lists PC and consoles on September 16, 2026, and mobile on September 23, 2026."],
  ],
  snippets: [
    ["Is Aniimo out yet?", "Aniimo is not treated as live here until official launch availability is confirmed. The current official dates are September 16, 2026 for PC and consoles and September 23, 2026 for mobile."],
    ["Is Aniimo on Steam?", "Yes. Aniimo has an official Steam listing for PC wishlist and launch tracking."],
    ["Are there Aniimo codes?", "No public redeem code is confirmed on Aniimo.games yet. Confirmed pre-registration and milestone rewards are tracked separately from redeem codes."],
    ["How many Aniimo are confirmed?", "Aniimo.games currently tracks 89 public Aniimo names from the official Wiki probe workflow."],
    ["Is Aniimo free to play?", "Official storefront language describes Aniimo as a free-to-play creature-catching open-world RPG."],
    ["Is Aniimo on mobile?", "Yes. Mobile availability is tracked through iOS and Android storefronts for the September 23, 2026 launch window."],
  ],
};

export const updates = [
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
  summary: "Aniimo.games is tracking the public launch path from official sources, with PC and console availability first and mobile availability one week later.",
  readiness: [
    ["PC and console date", releaseInfo.pcConsole, "Confirmed"],
    ["Mobile date", releaseInfo.mobile, "Confirmed"],
    ["Official platform links", "Website, Steam, Epic, Xbox, PlayStation, App Store and Google Play", "Confirmed"],
    ["Pre-registration rewards", "Milestones, Prismana Aniimo choice and mysterious Susuta egg", "Confirmed"],
    ["Redeem codes", "No public redeem code confirmed yet", "Watchlist"],
    ["Exact unlock hour", "Storefront-specific timing still pending", "Watchlist"],
    ["Spawn routes", "Coordinates and route screenshots need live verification", "Watchlist"],
  ],
  nextChecks: [
    "Check official website and main news for launch posts.",
    "Check Steam, Epic, Xbox, PlayStation, App Store and Google Play for storefront copy changes.",
    "Check official Wiki for new Aniimo entries, renamed entries or changed stage labels.",
    "Update codes only after a redeemable string appears on an official channel or in-game redemption screen.",
    "After launch, add verified route screenshots, weather windows, time windows and platform unlock notes.",
  ],
};

export const launchDayCommandCenter = {
  updated: "2026-08-30",
  summary: "A launch-day operating page for players who need the fastest path to official downloads, platform unlock status, redeem code checks, server status and common launch fixes.",
  statusRows: [
    ["PC and console launch", releaseInfo.pcConsole, "Confirmed"],
    ["Mobile launch", releaseInfo.mobile, "Confirmed"],
    ["Exact unlock hour", "Pending official storefront confirmation", "Watchlist"],
    ["Server status", "No live server incident tracked before launch", "Watchlist"],
    ["Active redeem codes", "No public redeem code confirmed yet", "Watchlist"],
    ["Known launch errors", "No live-game error confirmed before launch", "Watchlist"],
  ],
  quickActions: [
    ["Download safely", "/download/", "Use official website, Steam, Epic Games Store, Xbox, PlayStation, App Store or Google Play links."],
    ["Check active codes", "/codes/", "Separate confirmed rewards from redeemable code strings and verify each code before marking it active."],
    ["Track release timing", "/release-date/", "Use confirmed calendar dates while exact unlock hours remain platform-specific watchlist data."],
    ["Fix launch issues", "/troubleshooting/", "Start with store visibility, region availability, pre-registration, server-status and download-unavailable checks."],
    ["Verify live data", "/launch-verification/", "Capture spawn, unlock, code and Search Console observations with timestamps and sources."],
  ],
  firstDayChecks: [
    ["Hour 0", "Confirm official launch posts, storefront availability and exact unlock-hour language."],
    ["Hour 1", "Update download, release-date and platform pages with any store-specific availability changes."],
    ["Hour 2", "Check official social channels, Discord/news posts and in-game notices for redeem codes or compensation."],
    ["Hour 4", "Record common launch errors only after repeated reports or official support acknowledgement."],
    ["Hour 8", "Refresh homepage, launch hub, codes, troubleshooting and update log with verified changes."],
    ["Hour 24", "Review Search Console discovery, update sitemap if needed and prepare IndexNow submission after deployment."],
  ],
  searchIntents: [
    ["Aniimo server status", "Answer whether the game is live, under maintenance or waiting for official launch."],
    ["Aniimo not working", "Route users to download, region and storefront checks before suggesting unsupported fixes."],
    ["Aniimo redeem codes", "Show the active-code policy and link to confirmed rewards when no code string exists."],
    ["Aniimo unlock time", "Explain the difference between confirmed dates and platform-specific hourly rollout."],
    ["Aniimo download button missing", "Send users to official platform pages and avoid mirrors or APK reposts."],
  ],
  faq: [
    ["Is Aniimo live right now?", "Aniimo.games treats Aniimo as live only after official launch availability or storefront access is confirmed. Current confirmed dates are September 16, 2026 for PC and consoles and September 23, 2026 for mobile."],
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
