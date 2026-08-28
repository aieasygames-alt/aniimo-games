import { officialLinks, releaseInfo } from "./sources.js";

export const beginnerTopics = [
  {
    slug: "how-to-catch-aniimo",
    title: "How to Catch Aniimo",
    description: "Learn how Aniimo catching works with Aniipods, traps, encounter behavior and post-launch verification notes.",
    intro: "Catching is one of Aniimo's core loops. Before launch, the safest guide is to track official mechanics, then add exact route, item and timing data after in-game verification.",
    points: [
      ["Use Aniipods", "Official store text describes catching Aniimo with Aniipods. Exact item tiers and catch-rate behavior should be verified after launch."],
      ["Watch encounter behavior", "Unique Aniimo may react to environment, weather, phenomena and time of day, so route notes should capture more than a single coordinate."],
      ["Record the source", "When a catch route is added, include the region, condition, screenshot or official source, and verification date."],
    ],
    faq: [["Can I catch every Aniimo before launch?", "No. Exact live catch routes should wait for launch or official route information."]],
  },
  {
    slug: "what-is-twine",
    title: "What Is Twine in Aniimo?",
    description: "Understand Aniimo Twine, the system that lets players become collected Aniimo for puzzles, combat and traversal.",
    intro: "Twine is the transformation-style system that turns collected Aniimo into active tools for exploration, battles, traversal and route solving.",
    points: [
      ["Exploration utility", "Twine can turn an Aniimo's traits into puzzle or traversal options."],
      ["Combat utility", "Role and element tags help identify which Aniimo might support damage, healing, control or break pressure."],
      ["Verification rule", "Exact skill values, cooldowns and route requirements should be added only after official or in-game confirmation."],
    ],
    faq: [["Is Twine confirmed?", "Yes. Official store text describes Twine as a core system for using collected Aniimo abilities."]],
  },
  {
    slug: "aniipod-guide",
    title: "Aniipod Guide",
    description: "Track what Aniipods are, how they relate to catching, and what item details need launch verification.",
    intro: "Aniipods are tied to catching and launch rewards. This guide keeps confirmed reward mentions separate from unknown catch-rate or item-tier details.",
    points: [
      ["Catching item", "Aniipods are described as catching tools for Aniimo encounters."],
      ["Reward connection", "Aniipod Ultra appears in official milestone rewards and launch event item mentions."],
      ["After launch", "Add item tiers, acquisition paths, catch-rate behavior and usage restrictions after verification."],
    ],
    faq: [["Are Aniipod Ultra rewards confirmed?", "Yes. Aniipod Ultra appears in confirmed official reward tracking on this site."]],
  },
  {
    slug: "aniimo-beginner-tips",
    title: "Aniimo Beginner Tips",
    description: "Beginner-friendly Aniimo tips for launch planning, official downloads, rewards, Twine and source-safe route tracking.",
    intro: "This beginner page focuses on practical pre-launch planning: where to download, which systems to learn, and what to verify when the game becomes playable.",
    points: [
      ["Start official", "Use official website and storefront links instead of mirrors or reposted installers."],
      ["Track rewards separately", "Pre-registration rewards and redeem codes are different. Do not treat rewards as active codes."],
      ["Use the database", "Start with the Aniimo database, then follow region, role and element links for comparison."],
    ],
    faq: [["What should beginners check first?", "Start with download status, launch date, rewards, beginner systems and the Aniimo database."]],
  },
  {
    slug: "aniimo-elements",
    title: "Aniimo Elements Guide",
    description: "Browse Aniimo elements and learn how element pages connect to roles, regions, abilities and launch verification.",
    intro: "Element pages help players compare Aniimo by type before exact launch balance is known.",
    points: [
      ["Confirmed and unknown fields", "Known entries use confirmed element labels while index-only entries stay marked Unknown."],
      ["Search path", "Element pages connect to detail pages, roles, regions and evolution notes."],
      ["After launch", "Add combat interactions, route requirements and team notes once verified."],
    ],
    faq: [["Are all Aniimo elements known?", "No. Some official index entries still need element verification."]],
  },
  {
    slug: "aniimo-roles",
    title: "Aniimo Roles Guide",
    description: "Understand Aniimo roles such as DPS, Support, Heal, BREAK and watchlist role labels.",
    intro: "Role pages help readers choose what to track before launch without pretending final combat balance is known.",
    points: [
      ["Known roles", "The database uses labels such as DPS, Support, Heal and BREAK where available."],
      ["Watchlist entries", "Role data stays marked Watchlist when official detail fields are incomplete."],
      ["After launch", "Update role pages with tested team utility, Twine usage and combat notes."],
    ],
    faq: [["Is there a final Aniimo meta yet?", "No. Role pages are pre-launch planning guides until live balance can be tested."]],
  },
];

export const downloadTopics = [
  ["pc", "Aniimo PC Download Status & Safe Install Guide", "Track Aniimo PC download status, official storefronts, release timing, wishlist actions and safe installer guidance before launch.", "Use Steam, Epic Games Store or the official website for PC launch tracking."],
  ["mobile", "Aniimo Mobile Download Guide", "Track Aniimo mobile download status, iOS and Android availability, pre-registration and safe app-store guidance.", "Use App Store, Google Play or the official website for mobile launch tracking."],
  ["ios", "Aniimo iOS Download Guide", "Track Aniimo iOS pre-order, App Store availability, mobile launch timing and safe download guidance.", "Use the official App Store listing when it is visible in your region."],
  ["android", "Aniimo Android Download Guide", "Track Aniimo Android pre-registration, Google Play availability, mobile launch timing and safe APK guidance.", "Use Google Play and avoid APK mirrors before launch."],
  ["ps5", "Aniimo PS5 Download Guide", "Track Aniimo PS5 wishlist, PlayStation listing, console release timing and official download guidance.", "Use the official PlayStation listing for console availability."],
  ["xbox", "Aniimo Xbox Download Guide", "Track Aniimo Xbox wishlist, Microsoft Store listing, console release timing and official download guidance.", "Use the official Xbox store listing for console availability."],
  ["epic-games", "Aniimo Epic Games Store Download Status", "Track Aniimo Epic Games Store wishlist status, PC release timing, official storefront access and safe installer guidance before launch.", "Use the official Epic Games Store listing for PC availability."],
  ["steam", "Aniimo Steam Download Status", "Track Aniimo Steam wishlist status, PC release timing, official storefront access and safe installer guidance before launch.", "Use the official Steam listing for PC availability."],
].map(([slug, title, description, intro]) => ({
  slug,
  title,
  description,
  intro,
  points: [
    ["Official source", intro],
    ["Release timing", slug === "mobile" || slug === "ios" || slug === "android" ? `Mobile launch is tracked for ${releaseInfo.mobile}.` : `PC and console launch is tracked for ${releaseInfo.pcConsole}.`],
    ["Safety note", "Avoid unofficial installers, APK mirrors and reposted download buttons before official storefront access is live."],
  ],
}));

export const codeRewardTopics = [
  ["how-to-redeem", "How to Redeem Aniimo Codes", "Prepare for Aniimo code redemption with source checks, reward fields, platform restrictions and last-tested timestamps.", "Redeem steps should be filled only after the game client or official support pages expose a redemption flow."],
  ["active", "Active Aniimo Codes", "Track active Aniimo codes, rewards, expiration dates and verification status once official codes are published.", "No active public redeem code is confirmed on Aniimo.games yet."],
  ["expired", "Expired Aniimo Codes", "Archive expired Aniimo codes with reward history, expiration dates and source notes after launch.", "Expired codes should be moved here only after an active code has passed its official expiration."],
  ["junior-wayfarer", "Junior Wayfarer Rewards", "Track Junior Wayfarer Aniimo rewards, Prismana choice notes and official claim status.", "Junior Wayfarer reward details should stay tied to official campaign pages."],
  ["susuta-egg", "Mysterious Susuta Egg Reward", "Track the Aniimo Susuta egg reward, pre-registration source and claim verification notes.", "The mysterious Susuta egg is tracked as a confirmed pre-registration reward."],
  ["milestones", "Aniimo Milestone Rewards", "Track Aniimo pre-registration milestone rewards including Glimmer, Aniipod Ultra, avatar frame and outfit rewards.", "Milestone rewards are confirmed rewards, not redeem codes unless an official code string is published."],
].map(([slug, title, description, intro]) => ({ slug, title, description, intro }));

export const newsTopics = [
  ["launch-date-announcement", "Aniimo Launch Date Announcement", "Official launch timing is tracked as PC and console first, followed by mobile one week later.", releaseInfo.source],
  ["closed-beta", "Aniimo Closed Beta Timeline", "Closed beta signup and start dates are treated as past milestones, separate from global launch timing.", officialLinks.main],
  ["platform-announcement", "Aniimo Platform Announcement", "Platform pages cover PC, console, iOS and Android official storefront availability.", officialLinks.website],
  ["pre-registration-rewards", "Aniimo Pre-Registration Rewards News", "Pre-registration rewards include milestone items and campaign rewards tracked from official sources.", officialLinks.website],
].map(([slug, title, summary, source]) => ({ slug, title, summary, source, date: "2026-08-28" }));

export const choiceTopics = [
  ["best-starter-aniimo", "Best Starter Aniimo to Track", "A pre-launch watchlist for early Aniimo choices, written without final tier-list claims."],
  ["best-fire-aniimo", "Best Fire Aniimo to Track", "Compare confirmed Fire Aniimo for pre-launch planning by role, stage and evolution line."],
  ["best-support-aniimo", "Best Support Aniimo to Track", "Compare confirmed Support Aniimo before launch by utility, region and source status."],
  ["best-dps-aniimo", "Best DPS Aniimo to Track", "Compare confirmed DPS Aniimo before launch by element, evolution line and source status."],
  ["best-healer-aniimo", "Best Healer Aniimo to Track", "Compare Heal-tagged Aniimo before launch by recovery role, element and route notes."],
  ["aniimo-tier-list", "Aniimo Tier List Watchlist", "A cautious pre-launch tier-list watchlist that avoids final rankings until live testing exists."],
].map(([slug, title, description]) => ({ slug, title, description }));

export const officialPitchTopics = [
  {
    slug: "aniimo-official-features",
    title: "Aniimo Official Features",
    description: "Review the official Aniimo feature pillars including creature catching, Twine, Idyll exploration, Homeland, Egg Heist and platform availability.",
    intro: "This page organizes the public marketing points that can be safely written as confirmed Aniimo information. It keeps official positioning separate from community expectations and launch-day watchlist details.",
    points: [
      ["Free-to-play open-world RPG", "Official storefront language positions Aniimo as a free-to-play creature-catching open-world RPG set in Idyll."],
      ["Creature catching with Aniipods", "Players catch and collect Aniimo with Aniipods. Item tiers, catch rates and route-specific tricks should wait for launch testing."],
      ["Twine transformation system", "Twine lets players become collected Aniimo and use their abilities for combat, traversal, exploration and puzzles."],
      ["Homeland and RV", "Pathfinders can build a Homeland around a personal RV, with crops, decorations and Aniimo interactions."],
      ["Egg Heist", "Egg Heist is presented as a PVEVP mode where three-player teams search and battle in the Lost Isles."],
      ["Multi-platform launch", `Official tracking covers PC and consoles on ${releaseInfo.pcConsole}, followed by mobile on ${releaseInfo.mobile}.`],
    ],
    faq: [
      ["What are Aniimo's official feature pillars?", "The safest official pillars are creature catching, Twine, Idyll exploration, Homeland, Egg Heist, official platform links and launch rewards."],
      ["Can community theories be added here?", "No. Community theories can become research leads, but this page should stay limited to official or storefront-supported claims."],
    ],
  },
  {
    slug: "aniimo-twine-guide",
    title: "Aniimo Twine Guide",
    description: "Learn how Aniimo Twine is officially described and what combat, traversal and puzzle details still need launch verification.",
    intro: "Twine is the most distinctive Aniimo mechanic for SEO because users will search what it means, how it works and whether it changes exploration or combat.",
    points: [
      ["What Twine means", "Twine is the system that lets a player become a collected Aniimo and use that Aniimo's abilities."],
      ["Why it matters", "Twine can connect creature collection to puzzle routes, traversal locks, combat roles and team planning."],
      ["What to verify later", "After launch, each Aniimo detail page should list tested Twine use cases, route requirements, cooldowns and combat utility."],
    ],
    faq: [
      ["Is Twine like a transformation system?", "Yes, it is safest to describe Twine as a transformation-style system because official text says players become collected Aniimo."],
      ["Do all Aniimo have Twine abilities?", "That should be verified after launch. Current pages should avoid exact skill claims unless official details exist."],
    ],
  },
  {
    slug: "aniimo-egg-heist-guide",
    title: "Aniimo Egg Heist Guide",
    description: "Track Aniimo Egg Heist as an official PVEVP mode and prepare launch verification for team size, rewards, routes and combat rules.",
    intro: "Egg Heist deserves a standalone guide because it answers a different intent from database, download and map searches: players want to know how the mode works.",
    points: [
      ["Mode identity", "Egg Heist is described as a PVEVP mode, so pages should explain that it combines exploration, enemy pressure and player-versus-player risk."],
      ["Team structure", "Official text describes three-player teams. Matchmaking, party limits and rewards need live verification."],
      ["Lost Isles watchlist", "The Lost Isles setting should be tracked separately from the six public region pages until route details are confirmed."],
    ],
    faq: [
      ["Is Egg Heist confirmed?", "Yes. Egg Heist is an official gameplay mode mentioned in public Aniimo material."],
      ["Are Egg Heist rewards known?", "Not fully. Rewards and event cadence should remain watchlist data until official launch or in-game confirmation."],
    ],
  },
  {
    slug: "aniimo-homeland-guide",
    title: "Aniimo Homeland Guide",
    description: "Track Aniimo Homeland, RV, crops, decoration and Aniimo interaction systems from official public information.",
    intro: "Homeland content gives the site a non-combat guide path for players searching building, farming, housing and companion interaction questions.",
    points: [
      ["Personal RV", "Official text presents the RV as part of the player's personal home base."],
      ["Build and decorate", "Homeland pages can cover decoration planning while keeping exact recipes and unlock costs for launch verification."],
      ["Aniimo interactions", "Companion interactions are a useful guide topic, but exact affinity, farming and production values should wait for tested data."],
    ],
    faq: [
      ["Does Aniimo have housing?", "Aniimo has a Homeland/RV system in official public material."],
      ["Can Homeland guides include recipes now?", "Only if an official source publishes them. Otherwise recipes should be added after launch testing."],
    ],
  },
];

export const socialIntentTopics = [
  {
    slug: "aniimo-vs-pokemon",
    title: "Aniimo vs Pokemon-Style Creature Collecting",
    description: "Compare Aniimo with familiar creature-collecting expectations while keeping official Aniimo facts separate from community comparisons.",
    intro: "Many players explain Aniimo by comparing it with well-known creature-collection games. This page should capture that search intent without claiming the games are equivalent.",
    points: [
      ["Shared user intent", "Players looking for this comparison usually want to know whether Aniimo has collecting, catching, evolution-style forms and battles."],
      ["Aniimo difference", "Aniimo's official differentiators are open-world exploration, Twine, Homeland and Egg Heist."],
      ["Editorial boundary", "Avoid using competitor names as factual proof of Aniimo mechanics. Use the comparison only to answer user expectations."],
    ],
    faq: [
      ["Is Aniimo a Pokemon game?", "No. Aniimo is its own free-to-play creature-catching open-world RPG from Pawprint Studio."],
      ["Why compare Aniimo with Pokemon-style games?", "Because search users use familiar genre language to understand catching, collecting, battles and creature lists."],
    ],
  },
  {
    slug: "aniimo-vs-palworld",
    title: "Aniimo vs Palworld-Style Open-World Expectations",
    description: "Explain how Aniimo fits open-world creature-collecting search expectations without overstating combat, survival or crafting claims.",
    intro: "Open-world creature games create comparison searches. Aniimo.pages should answer those searches by describing official Aniimo systems, not by copying another game's feature set.",
    points: [
      ["What users are asking", "Searchers usually want to know whether Aniimo has open-world exploration, creature collecting, combat and multiplayer-style modes."],
      ["What Aniimo confirms", "Official material confirms creature catching, Twine, Homeland, real-time challenges, Egg Heist and multiple platforms."],
      ["What not to imply", "Do not imply survival crafting, weapon systems or monetization details unless official Aniimo sources confirm them."],
    ],
    faq: [
      ["Is Aniimo like Palworld?", "Aniimo shares broad open-world creature-collection search intent, but its confirmed systems and tone are different."],
      ["Should this page include rankings?", "No. Keep it as an expectation guide until launch reviews and live systems can be verified."],
    ],
  },
  {
    slug: "is-aniimo-on-switch",
    title: "Is Aniimo on Nintendo Switch?",
    description: "Track whether Aniimo has an official Nintendo Switch or Switch 2 listing and explain the currently confirmed platforms.",
    intro: "Switch availability is a natural community question for creature-collecting games. The page should answer it clearly without inventing an unconfirmed platform.",
    points: [
      ["Current confirmed platforms", "Confirmed tracking covers official website, Steam, Epic Games Store, Xbox, PlayStation 5, App Store and Google Play."],
      ["Switch status", "Do not list Nintendo Switch as confirmed unless Aniimo announces an official Nintendo store page or platform announcement."],
      ["User action", "Players should use official Aniimo channels and this platform hub for updates instead of third-party rumors."],
    ],
    faq: [
      ["Is Aniimo confirmed for Nintendo Switch?", "No Nintendo Switch or Switch 2 listing is treated as confirmed on Aniimo.games right now."],
      ["What platforms are confirmed?", "Official tracking covers PC, PlayStation 5, Xbox, iOS and Android storefronts."],
    ],
  },
  {
    slug: "is-aniimo-pay-to-win",
    title: "Is Aniimo Pay to Win?",
    description: "Track Aniimo monetization questions with careful wording around free-to-play status, rewards and unknown launch economy details.",
    intro: "Free-to-play games naturally create monetization questions. This page should answer what is known and clearly label what remains unknown before launch.",
    points: [
      ["Known fact", "Official storefront language describes Aniimo as free-to-play."],
      ["Known rewards", "Pre-registration rewards and launch event items are tracked separately from redeem codes and paid purchases."],
      ["Unknown economy", "Final shop structure, paid currency, battle pass details and competitive impact should wait for official or in-game verification."],
    ],
    faq: [
      ["Is Aniimo free to play?", "Yes. Official storefront language describes Aniimo as free-to-play."],
      ["Is Aniimo pay to win?", "Aniimo.games does not label the game pay-to-win without verified launch economy and balance data."],
    ],
  },
];

export const searchSuggestionTopics = [
  {
    slug: "aniimo-characters",
    title: "Aniimo Characters and Creature List",
    description: "Browse Aniimo creature-list search intent with links to the database, official names, roles, elements and detail pages.",
    intro: "Search users often type characters when they mean playable creatures, companions, Aniimo names or official database entries.",
    points: [
      ["Start with the database", "Use the database for the current public Aniimo list, official numbers, names, elements, roles and source status."],
      ["Use detail pages", "Detail pages connect descriptions, region notes, evolution lines, related roles and source labels."],
      ["After launch", "Add exact routes, screenshots and tested ability notes once live verification exists."],
    ],
    faq: [
      ["How many Aniimo characters are listed?", "Aniimo.games currently tracks 89 public Aniimo entries from the official Wiki workflow."],
      ["Are all characters playable?", "The site should avoid final playable claims unless official or in-game sources confirm the exact status."],
    ],
  },
  {
    slug: "aniimo-platforms",
    title: "Aniimo Platforms",
    description: "Find confirmed Aniimo platforms, storefront links, release windows and platform-specific download guides.",
    intro: "Platform searches are high-intent because users are deciding where they can wishlist, pre-register or download Aniimo.",
    points: [
      ["PC", "PC tracking includes Steam and Epic Games Store pages."],
      ["Console", "Console tracking includes PlayStation 5 and Xbox pages."],
      ["Mobile", "Mobile tracking includes App Store and Google Play listings."],
    ],
    faq: [
      ["What platforms is Aniimo on?", "Aniimo.games tracks PC, PlayStation 5, Xbox, iOS and Android as confirmed platform paths."],
      ["Is every platform live now?", "No. Storefront visibility, pre-order and download access can vary by date, country and store rollout."],
    ],
  },
  {
    slug: "aniimo-beta",
    title: "Aniimo Beta and Test Timeline",
    description: "Track Aniimo closed beta history, test timing and what should be separated from global launch information.",
    intro: "Beta searches need careful handling because old test dates can be confused with launch dates.",
    points: [
      ["Past test milestone", `Closed beta is tracked as a past milestone from ${releaseInfo.closedBeta}.`],
      ["Signup deadline", `The beta signup deadline is tracked as ${releaseInfo.betaSignupDeadline}.`],
      ["Launch separation", "Release-date pages should keep closed beta history separate from global launch availability."],
    ],
    faq: [
      ["Is Aniimo beta still open?", "Aniimo.games treats the listed closed beta as a past milestone unless official sources announce another test."],
      ["Where should new test news go?", "New test news should update the beta page, launch tracker, update log and sitemap metadata."],
    ],
  },
  {
    slug: "aniimo-news",
    title: "Aniimo News Tracker",
    description: "Track Aniimo official news topics including launch dates, platform announcements, rewards, beta updates and source changes.",
    intro: "A news tracker gives returning users and crawlers a freshness path without turning every update into speculative gameplay claims.",
    points: [
      ["Official-first updates", "News should start from official posts, storefront updates and official Wiki changes."],
      ["Structured freshness", "Each update should include date, source, affected pages and what needs follow-up."],
      ["Launch watchlist", "Before launch, the highest-value checks are codes, unlock hours, platform availability and new Aniimo entries."],
    ],
    faq: [
      ["How often should Aniimo news be checked?", "Before launch, weekly checks are useful; around launch, daily checks are more appropriate."],
      ["Can rumors go in the news tracker?", "Rumors should stay out unless they are clearly labeled as unverified leads and not indexed as facts."],
    ],
  },
];
