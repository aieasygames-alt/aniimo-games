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
    faq: [
      ["Can I catch every Aniimo before launch?", "No. Exact live catch routes should wait for launch or official route information."],
      ["What should a catch guide include after launch?", "A useful catch guide should include region, route, condition, required item, screenshot evidence and last verified date."],
    ],
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
    faq: [
      ["Is Twine confirmed?", "Yes. Official store text describes Twine as a core system for using collected Aniimo abilities."],
      ["Should Twine pages list exact ability values now?", "No. Exact ability values should wait for official details or live-game verification."],
    ],
  },
  {
    slug: "aniipod-guide",
    title: "Aniipod Guide",
    description: "Track what Aniipods are, how they relate to catching, and what item details need launch verification.",
    image: "/images/mechanics/mechanic-aniipod.webp",
    intro: "Aniipods are tied to catching and launch rewards. This guide keeps confirmed reward mentions separate from unknown catch-rate or item-tier details.",
    points: [
      ["Catching item", "Aniipods are described as catching tools for Aniimo encounters."],
      ["Reward connection", "Aniipod Ultra appears in official milestone rewards and launch event item mentions."],
      ["After launch", "Add item tiers, acquisition paths, catch-rate behavior and usage restrictions after verification."],
    ],
    faq: [
      ["Are Aniipod Ultra rewards confirmed?", "Yes. Aniipod Ultra appears in confirmed official reward tracking on this site."],
      ["Are Aniipod catch rates known?", "Not fully on Aniimo.games. Catch rates and item tiers should remain watchlist data until launch verification."],
    ],
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
    faq: [
      ["What should beginners check first?", "Start with download status, launch date, rewards, beginner systems and the Aniimo database."],
      ["Should beginners use unofficial downloads?", "No. Beginners should use official storefronts or the official Aniimo website for download and pre-registration actions."],
    ],
  },
  {
    slug: "aniimo-elements",
    title: "Aniimo Elements Guide",
    description: "Browse Aniimo elements and learn how element pages connect to roles, regions, abilities and launch verification.",
    intro: "Element pages help players compare Aniimo by type before exact launch balance is known. They are useful for browsing the database, finding related detail pages and planning which entries to watch after launch.",
    points: [
      ["Confirmed and unknown fields", "Known entries use confirmed element labels while index-only entries stay marked Unknown."],
      ["Search path", "Element pages connect to detail pages, roles, regions and evolution notes."],
      ["After launch", "Add combat interactions, route requirements and team notes once verified."],
    ],
    faq: [
      ["Are all Aniimo elements known?", "No. Some official index entries still need element verification."],
      ["Will element pages include combat matchups?", "Only after official or live-game data confirms combat interactions and balance behavior."],
    ],
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
    faq: [
      ["Is there a final Aniimo meta yet?", "No. Role pages are pre-launch planning guides until live balance can be tested."],
      ["What roles are tracked?", "Aniimo.games tracks roles such as DPS, Support, Heal, BREAK and watchlist labels where public data is incomplete."],
    ],
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
    image: "/images/mechanics/mechanic-twine.webp",
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
    image: "/images/mechanics/mechanic-egg-heist.webp",
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
    image: "/images/mechanics/mechanic-homeland.webp",
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
    slug: "aniimo-vs-genshin",
    title: "Aniimo vs Genshin-Style Open-World Expectations",
    description: "Compare Aniimo with Genshin-style open-world search expectations while keeping Aniimo's confirmed creature-catching systems clear.",
    intro: "Some players use Genshin-style language to ask about exploration, regions, characters, combat and live-service structure. This page answers that intent without claiming Aniimo copies another game's systems.",
    points: [
      ["Shared search intent", "Users are usually asking whether Aniimo has open-world exploration, regions, collection goals, combat and long-term updates."],
      ["Aniimo's confirmed identity", "Aniimo is better framed around creature catching, Aniipods, Twine, Homeland, Egg Heist and the continent of Idyll."],
      ["Careful wording", "Do not imply gacha, elemental reaction systems, artifact systems or party rules unless official Aniimo sources confirm them."],
    ],
    faq: [
      ["Is Aniimo like Genshin Impact?", "Aniimo shares broad open-world search expectations, but its confirmed identity centers on creature catching and Twine."],
      ["Does Aniimo have gacha?", "Aniimo.games does not claim a gacha system without official or in-game confirmation."],
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
    intro: "Beta searches need careful handling because old test dates can be confused with launch dates. This page separates past closed beta milestones from current global launch planning and future test announcements.",
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

export const mechanicDeepDiveTopics = [
  {
    slug: "twine-abilities",
    title: "Aniimo Twine Abilities",
    description: "Track how Aniimo Twine abilities should be documented for combat, traversal, puzzles and route verification.",
    image: "/images/mechanics/mechanic-twine.webp",
    intro: "Twine ability searches will grow after launch because players will want to know which Aniimo helps with routes, combat roles and puzzle checks.",
    points: [
      ["Ability categories", "Use combat, traversal, puzzle, exploration and support as the first practical categories until official values are complete."],
      ["Detail-page workflow", "Each Aniimo detail page should receive a tested Twine use case only after official source text or live-game checks confirm it."],
      ["Avoid premature rankings", "Do not turn Twine ability pages into final tier lists until cooldowns, route access, combat values and team synergy can be tested."],
    ],
    faq: [
      ["Which Aniimo has the best Twine ability?", "Aniimo.games should not publish final Twine rankings before launch testing."],
      ["What should a Twine ability entry include?", "Useful entries should include source, ability purpose, route use, combat use, restrictions and last verified date."],
    ],
  },
  {
    slug: "egg-heist-rules",
    title: "Aniimo Egg Heist Rules",
    description: "Prepare a source-safe Egg Heist rules guide for team size, PVEVP structure, Lost Isles routing and post-launch verification.",
    image: "/images/mechanics/mechanic-egg-heist.webp",
    intro: "Egg Heist rule searches need a clear page before launch, but exact scoring, rewards and matchmaking details should remain watchlist fields.",
    points: [
      ["Confirmed mode shape", "Egg Heist is described as a PVEVP mode with three-player teams."],
      ["Rules to verify", "Scoring, extraction conditions, rewards, penalties, matchmaking and event cadence need official or live-game confirmation."],
      ["Internal links", "Egg Heist pages should connect to Twine, roles, best Aniimo watchlists, codes and launch verification."],
    ],
    faq: [
      ["How many players are in Egg Heist?", "Official public material describes three-player teams."],
      ["Are Egg Heist rewards confirmed?", "Not fully on Aniimo.games yet. Reward details should stay watchlist until verified."],
    ],
  },
  {
    slug: "egg-heist-rewards",
    title: "Aniimo Egg Heist Rewards",
    description: "Track Aniimo Egg Heist reward questions without inventing unconfirmed event drops or code rewards.",
    image: "/images/mechanics/mechanic-egg-heist.webp",
    intro: "Reward searches can attract users, but they are also easy to mislead. This page keeps Egg Heist reward status separate from pre-registration rewards and redeem codes.",
    points: [
      ["Known boundary", "Egg Heist is an official mode, but full reward tables are not treated as confirmed on Aniimo.games."],
      ["What to capture later", "After launch, capture item name, quantity, mode requirement, weekly limits, platform restrictions and last tested date."],
      ["Related rewards", "Keep Egg Heist rewards separate from pre-registration milestones, launch event gifts and active redeem codes."],
    ],
    faq: [
      ["Does Egg Heist give rewards?", "Aniimo.games should wait for official or in-game confirmation before publishing exact reward tables."],
      ["Where will Egg Heist rewards be updated?", "Update this page, the codes page, rewards page and launch verification page once verified."],
    ],
  },
  {
    slug: "lost-isles-guide",
    title: "Aniimo Lost Isles Guide",
    description: "Track Lost Isles as the Egg Heist setting and prepare route, reward and rules verification after launch.",
    image: "/images/mechanics/mechanic-egg-heist.webp",
    intro: "Lost Isles is useful as a standalone page because it may not map cleanly to the six public region pages already used by the map hub.",
    points: [
      ["Mode context", "Lost Isles should be tied to Egg Heist until official sources clarify broader map access."],
      ["Verification fields", "Track route screenshots, team objectives, enemy pressure, extraction rules and reward sources after launch."],
      ["Map boundary", "Do not merge Lost Isles with public region pages unless official map data confirms that relationship."],
    ],
    faq: [
      ["Is Lost Isles a region?", "Aniimo.games treats Lost Isles as an Egg Heist setting until official map information confirms more."],
      ["Will Lost Isles appear on the map page?", "It can be linked from the map page as a watchlist area, but exact routes need launch verification."],
    ],
  },
];

export const mediaDetailTopics = [
  {
    slug: "aniimo-trailers",
    title: "Aniimo Trailers",
    description: "Track official Aniimo trailers, announcement videos, platform clips and what each video confirms.",
    intro: "Trailer pages should summarize what official videos show, then link users to safer guide pages for confirmed systems and launch information.",
    points: [
      ["What to catalog", "Track video title, official channel, publish date, featured systems, featured Aniimo, platform mentions and source URL."],
      ["What to avoid", "Do not convert trailer visuals into exact spawn, route or combat values without official or live-game confirmation."],
      ["Best internal links", "Trailer pages should link to download, release date, Twine, Egg Heist, media gallery and source archive pages."],
    ],
    faq: [
      ["Can trailer footage confirm gameplay mechanics?", "It can support broad public features, but exact values and routes still need stronger verification."],
      ["Where should new Aniimo trailers be added?", "Add them to this page, the media gallery, source archive and update log."],
    ],
  },
  {
    slug: "aniimo-screenshots",
    title: "Aniimo Screenshots",
    description: "Browse Aniimo screenshot coverage for regions, creatures, platform pages and guide visuals.",
    intro: "Screenshot pages support image search and help users inspect regions and creatures without burying media inside long guide pages.",
    points: [
      ["Image SEO", "Each screenshot should have descriptive alt text, compressed WebP format, stable dimensions and a page it supports."],
      ["Source clarity", "Official images, site-prepared composites and community captures should be labeled differently."],
      ["After launch", "Add route screenshots only when they are tied to a verified location, time, condition and source."],
    ],
    faq: [
      ["Why make screenshot pages?", "They help image discovery, internal linking and user inspection of official regions and character art."],
      ["Can community screenshots be used?", "Only when rights and source status are clear, and they should not replace official verification."],
    ],
  },
  {
    slug: "aniimo-region-art",
    title: "Aniimo Region Art",
    description: "Browse Aniimo region art for Mistwoods, Echoback Landing, Sea of Flowers, Blitzwood, Nimbus Fields and Forest of Falling Stars.",
    intro: "Region art helps map pages feel useful before exact coordinates are available. It also gives each region a stronger image-search target.",
    points: [
      ["Covered regions", "The current gallery covers six public region pages with compressed WebP artwork."],
      ["Alt text plan", "Each region image should describe the region name and purpose, not generic fantasy scenery."],
      ["Future updates", "After launch, add verified route screenshots beside each region artwork when available."],
    ],
    faq: [
      ["Which Aniimo regions have art?", "Mistwoods, Echoback Landing, Sea of Flowers, Blitzwood, Nimbus Fields and Forest of Falling Stars currently have region artwork."],
      ["Should region art claim exact spawn data?", "No. Region art supports context, while spawn data needs live verification."],
    ],
  },
];

export const conversionTopics = [
  {
    slug: "aniimo-launch-countdown",
    title: "Aniimo Launch Countdown",
    description: "Track Aniimo launch countdown planning for PC, console, iOS and Android without claiming exact unlock hours before storefront confirmation.",
    intro: "Countdown searches become stronger as launch approaches. This page gives players a source-safe place to check dates, platform windows and what still needs confirmation.",
    points: [
      ["PC and console window", `Aniimo.games tracks PC and console launch for ${releaseInfo.pcConsole}.`],
      ["Mobile window", `Aniimo.games tracks mobile launch for ${releaseInfo.mobile}.`],
      ["Unlock-hour watchlist", "Exact hourly unlock timing can vary by platform, region and storefront, so it should remain watchlist until official confirmation."],
    ],
    faq: [
      ["When is the Aniimo launch countdown?", `Use ${releaseInfo.pcConsole} for PC and console planning, and ${releaseInfo.mobile} for mobile planning.`],
      ["Does Aniimo.games know the exact unlock time?", "Not yet. Exact unlock hours should come from official posts or storefront updates."],
    ],
  },
  {
    slug: "aniimo-wishlist-guide",
    title: "Aniimo Wishlist Guide",
    description: "Find where to wishlist Aniimo on Steam, Epic Games Store, PlayStation and Xbox before launch.",
    intro: "Wishlist intent is close to conversion. This guide sends users toward official platform pages and away from unsafe installers.",
    points: [
      ["PC wishlist", "Use Steam or Epic Games Store for PC wishlist tracking."],
      ["Console wishlist", "Use PlayStation and Xbox listings for console wishlist tracking."],
      ["Account planning", "Wishlist with the account you expect to use at launch so notifications and store access stay aligned."],
    ],
    faq: [
      ["Where can I wishlist Aniimo?", "Use official Steam, Epic Games Store, PlayStation, Xbox or Aniimo website links."],
      ["Is wishlisting the same as downloading?", "No. Wishlist and pre-registration flows track launch availability; downloads appear when the storefront makes them available."],
    ],
  },
  {
    slug: "aniimo-pre-register-guide",
    title: "Aniimo Pre-Register Guide",
    description: "Learn where to pre-register for Aniimo and how to separate pre-registration rewards from redeem codes.",
    intro: "Pre-registration pages should answer reward and platform questions clearly, because users often confuse milestone rewards with active codes.",
    points: [
      ["Use official sources", "Start with the official Aniimo website, App Store and Google Play listings when available in your region."],
      ["Reward tracking", "Confirmed rewards include milestone items, Prismana choice and the mysterious Susuta egg."],
      ["Codes boundary", "Pre-registration rewards are not active redeem codes unless an official code string is published."],
    ],
    faq: [
      ["Where do I pre-register for Aniimo?", "Use the official Aniimo website and official mobile store pages when available."],
      ["Are pre-registration rewards Aniimo codes?", "Not automatically. Aniimo.games tracks rewards and redeem codes separately."],
    ],
  },
  {
    slug: "aniimo-safe-download-checklist",
    title: "Aniimo Safe Download Checklist",
    description: "Use this Aniimo safe download checklist before installing the game on PC, console, iOS or Android.",
    intro: "Safe-download searches are protective and commercial-intent adjacent. This checklist helps users choose official links before launch.",
    points: [
      ["Confirm publisher and store", "Check that the listing matches official Aniimo, Pawprint Studio or the official storefront path."],
      ["Avoid unofficial files", "Avoid APK mirrors, reposted installers, fake beta clients and compressed game files before official availability."],
      ["Use platform pages", "Follow Aniimo.games platform pages to move from overview to the exact official storefront."],
    ],
    faq: [
      ["Is Aniimo APK available?", "Aniimo.games does not recommend APK mirrors. Use Google Play or official sources."],
      ["What is the safest way to download Aniimo?", "Use the official website or the official platform store for your device."],
    ],
  },
];

export const refreshPlanningTopics = [
  {
    slug: "gsc-refresh-plan",
    title: "Aniimo GSC Refresh Plan",
    description: "Plan how Aniimo.games should use Google Search Console impressions, queries and countries to refresh pages after indexing begins.",
    intro: "GSC-driven refresh pages should not guess demand. They should wait for impressions, then improve pages that are close to ranking or getting unexpected queries.",
    points: [
      ["First review window", "Review Search Console after sitemap discovery and again when important pages have enough impressions to show query patterns."],
      ["What to prioritize", "Prioritize pages with impressions, low CTR, average positions near page one, or unexpected country/language demand."],
      ["What to update", "Refresh title tags, FAQ blocks, internal links, content depth and source freshness before creating duplicate pages."],
    ],
    faq: [
      ["When should Aniimo.games use GSC data?", "Use it after Google has discovered and sampled enough pages to show query and country patterns."],
      ["Should every query become a new page?", "No. Improve existing pages first unless a query has distinct intent."],
    ],
  },
  {
    slug: "query-refresh-watchlist",
    title: "Aniimo Query Refresh Watchlist",
    description: "Track Aniimo queries that should trigger page updates, new FAQs or future content expansion.",
    intro: "This watchlist turns future GSC queries into an editorial workflow so the site can grow from real demand rather than guesses.",
    points: [
      ["Download queries", "If users search platform plus download terms, improve the matching platform and download pages first."],
      ["Codes queries", "If code impressions grow before official codes exist, strengthen the no-code explanation and rewards/codes distinction."],
      ["Creature queries", "If individual Aniimo names get impressions, expand detail pages with stronger internal links and source notes."],
    ],
    faq: [
      ["What queries should be watched first?", "Download, release date, codes, platforms, creature names, Twine, Egg Heist and region searches."],
      ["How should refreshes be logged?", "Update the page, source archive, update log and requirements status when a meaningful refresh ships."],
    ],
  },
];

export const glossaryTopics = [
  ["pathfinder", "Pathfinder", "The player identity used in Aniimo public material. Use this term for guides about exploration, progression and player-side launch planning."],
  ["idyll", "Idyll", "The continent where Aniimo takes place. Use this term for world, region and map pages."],
  ["twine", "Twine", "The official system that lets players become collected Aniimo and use their abilities for combat, traversal, exploration and puzzles."],
  ["aniipod", "Aniipod", "The catching item associated with finding and collecting Aniimo. Exact item tiers and catch rates need launch verification."],
  ["homeland", "Homeland", "The personal home-base system tied to RV, crops, decoration and Aniimo interactions."],
  ["rv", "RV", "The personal vehicle and home-base anchor mentioned in official Homeland descriptions."],
  ["prismana", "Prismana", "A special form/reward term connected to the Junior Wayfarer reward choice. Exact form behavior should stay tied to official source updates."],
  ["egg-heist", "Egg Heist", "An official PVEVP mode where three-player teams search and battle in the Lost Isles."],
].map(([slug, term, definition]) => ({
  slug,
  title: `${term} Meaning in Aniimo`,
  description: `Learn what ${term} means in Aniimo and where the term fits in official guides, wiki pages and launch tracking.`,
  term,
  definition,
  intro: `${term} is a recurring Aniimo term used across guide, wiki, launch or rewards pages. This glossary entry gives players a plain-English definition, links the term to related site sections and keeps exact launch-only values separate until official or in-game verification exists.`,
  points: [
    ["Plain meaning", definition],
    ["Where it appears", `${term} should be linked from related guide pages so players can move between mechanics, rewards, regions and database entries.`],
    ["Verification note", "If a later official source changes the wording or adds exact values, update this glossary page before refreshing related guides."],
  ],
  faq: [
    [`What does ${term} mean in Aniimo?`, definition],
    [`Is ${term} final launch data?`, "This glossary tracks public terminology. Exact values, unlock rules and route requirements should still be verified after launch when needed."],
  ],
}));

export const troubleshootingTopics = [
  {
    slug: "aniimo-server-status",
    title: "Aniimo Server Status",
    description: "Track Aniimo server status, maintenance watchlist notes, launch availability and where to verify official outage updates.",
    intro: "Server-status searches spike the moment a game opens. Before launch, this page keeps the status tied to official availability and avoids inventing outage reports.",
    points: [
      ["Current status policy", "Aniimo.games only marks a server issue active after official support, storefront behavior or repeated verified live-game evidence confirms it."],
      ["What to check first", "Check the launch day command center, platform storefronts, official website news and official social channels."],
      ["What changes after launch", "Add maintenance windows, affected platforms, start time, resolved time, compensation notes and last checked timestamp when verified."],
    ],
    faq: [
      ["Are Aniimo servers down?", "Aniimo.games does not mark servers down before official launch availability or verified reports confirm a live issue."],
      ["Where should I check Aniimo server status?", "Start with official Aniimo news, storefront notices and the Aniimo.games launch day command center."],
    ],
  },
  {
    slug: "aniimo-known-issues",
    title: "Aniimo Known Issues",
    description: "Track Aniimo known issues for launch errors, login problems, black screen reports, stuck loading and platform-specific fixes.",
    intro: "Known-issue pages are useful only when they separate verified problems from rumor. This page prepares the structure for launch errors without publishing unverified fixes.",
    points: [
      ["Issue threshold", "List an issue only after official acknowledgement, repeatable storefront behavior or multiple consistent verified reports."],
      ["Fields to capture", "Record affected platform, error text, first seen time, workaround, fix status, source and last checked timestamp."],
      ["Related pages", "Route download problems to the download-not-available guide, region problems to region availability, and code problems to the codes page."],
    ],
    faq: [
      ["Does Aniimo have known launch issues?", "No live-game issue is marked confirmed on Aniimo.games before launch. This page will update when verified evidence exists."],
      ["Should I trust random Aniimo fix downloads?", "No. Avoid unofficial fix files, APK mirrors or modified installers. Use official sources and storefront updates."],
    ],
  },
  {
    slug: "aniimo-download-not-available",
    title: "Aniimo Download Not Available",
    description: "Troubleshoot why Aniimo download, wishlist, pre-order or pre-registration may not appear on your platform yet.",
    intro: "Before launch, a missing download button is usually a storefront timing, region or pre-launch availability issue rather than a reason to use mirrors.",
    points: [
      ["Check the date", `PC and console launch is tracked for ${releaseInfo.pcConsole}; mobile launch is tracked for ${releaseInfo.mobile}.`],
      ["Check the right storefront", "Use Steam, Epic Games Store, PlayStation, Xbox, App Store, Google Play or the official Aniimo website."],
      ["Avoid mirrors", "Do not use APK mirrors, reposted installers or unofficial download buttons when official store access is not live."],
    ],
    faq: [
      ["Why can't I download Aniimo yet?", "The game may not be live on your platform, region or storefront account yet."],
      ["Should I use an APK mirror?", "No. Use official storefronts and avoid mirrors, especially before launch."],
    ],
  },
  {
    slug: "aniimo-store-page-not-visible",
    title: "Aniimo Store Page Not Visible",
    description: "Check why an Aniimo Steam, Epic, PlayStation, Xbox, App Store or Google Play listing may not be visible in your region.",
    intro: "Storefront visibility can vary by country, account region, device support and rollout timing. This page gives users a safe checklist.",
    points: [
      ["Use official links", "Start from the platform hub or official website rather than searching through reposted links."],
      ["Check account region", "Mobile and console store pages can vary by country or storefront account settings."],
      ["Try another official source", "If one platform page is not visible, use the official website or another confirmed storefront to track updates."],
    ],
    faq: [
      ["Does a missing store page mean Aniimo is canceled?", "No. Store visibility can change by region and rollout timing."],
      ["Where should I check first?", "Start from the official Aniimo website or the platform page linked from Aniimo.games."],
    ],
  },
  {
    slug: "aniimo-pre-registration-not-working",
    title: "Aniimo Pre-Registration Not Working",
    description: "Troubleshoot Aniimo pre-registration, wishlist and pre-order issues while staying on official sources.",
    intro: "Pre-registration problems often come from region, account, device or store rollout differences. Keep reward and code claims separate while checking.",
    points: [
      ["Confirm the official page", "Use the official Aniimo website or official mobile storefront pages."],
      ["Check account status", "Use the account you plan to play with at launch so reward notices and store alerts stay aligned."],
      ["Separate rewards from codes", "Pre-registration rewards are not the same as active redeem codes unless an official code string is published."],
    ],
    faq: [
      ["Will pre-registration rewards require a code?", "Not necessarily. Rewards and redeem codes should be tracked separately until official claim steps are known."],
      ["What if pre-registration is unavailable in my region?", "Check again later through official storefronts because regional availability can change before launch."],
    ],
  },
  {
    slug: "aniimo-region-availability",
    title: "Aniimo Region Availability",
    description: "Track Aniimo regional availability questions for mobile stores, console stores and launch timing.",
    intro: "Region availability is a high-intent launch question, but the site should avoid country-by-country claims until storefronts or official news confirm them.",
    points: [
      ["Known platform path", "Aniimo.games tracks official PC, console and mobile storefronts."],
      ["Country-level watchlist", "Exact country availability should be verified from each store or official announcement."],
      ["GSC follow-up", "After impressions arrive, prioritize country pages only when query data proves demand."],
    ],
    faq: [
      ["Is Aniimo available in every country?", "Aniimo.games does not claim full country availability without storefront or official confirmation."],
      ["Should the site build country pages now?", "Not yet. Country pages should wait for Search Console demand and official availability data."],
    ],
  },
];

export const mediaGalleryItems = [
  ["Hero art", "/images/hero-aniimo.webp", "Official-style hero image used for the Aniimo.games home page and social preview planning."],
  ["Default social image", "/images/og-default.webp", "Open Graph fallback image used when guide pages are shared on social platforms, chat apps and search result previews."],
  ["Download banner", "/images/banners/banner-download.webp", "Download guide banner for platform and safe-install pages."],
  ["Rewards banner", "/images/banners/banner-rewards.webp", "Rewards guide banner for pre-registration and milestone pages."],
  ["Susuta Hunt banner", "/images/banners/banner-susuta-hunt.webp", "Event-style banner used for Susuta reward and campaign context."],
  ["Twine mechanic", "/images/mechanics/mechanic-twine.webp", "Mechanic image used by Twine and Twine ability pages."],
  ["Egg Heist mechanic", "/images/mechanics/mechanic-egg-heist.webp", "Mechanic image used by Egg Heist rules, rewards and Lost Isles pages."],
  ["Homeland mechanic", "/images/mechanics/mechanic-homeland.webp", "Mechanic image used by Homeland and home-base guide pages."],
  ["Aniipod mechanic", "/images/mechanics/mechanic-aniipod.webp", "Mechanic image used by catching, Aniipod and safe-download education pages."],
  ["Mistwoods region", "/images/regions/region-mistwoods.webp", "Region artwork used by Mistwoods map and location pages."],
  ["Echoback Landing region", "/images/regions/region-echoback-landing.webp", "Region artwork used by Echoback Landing map and location pages."],
  ["Sea of Flowers region", "/images/regions/region-sea-of-flowers.webp", "Region artwork used by Sea of Flowers map and location pages."],
  ["Blitzwood region", "/images/regions/region-blitzwood.webp", "Region artwork used by Blitzwood map and location pages."],
  ["Nimbus Fields region", "/images/regions/region-nimbus-fields.webp", "Region artwork used by Nimbus Fields map and location pages."],
  ["Forest of Falling Stars region", "/images/regions/region-forest-of-falling-stars.webp", "Region artwork used by Forest of Falling Stars map and location pages."],
].map(([title, image, description]) => ({ title, image, description }));

export const sourceArchiveItems = [
  ["Official website", officialLinks.website, "Launch rewards, registration flow, platform links and campaign messaging."],
  ["Official main site", officialLinks.main, "Launch announcements, beta timeline and news updates."],
  ["Official Wiki", officialLinks.officialWiki, "Public Aniimo names, numbers, descriptions and visible index changes."],
  ["Steam", officialLinks.steam, "PC storefront wording, wishlist state, tags, media and release availability."],
  ["Epic Games Store", officialLinks.epic, "Epic storefront wording, wishlist state and PC release availability."],
  ["PlayStation", officialLinks.playstation, "PS5 listing state, console availability and regional storefront wording."],
  ["Xbox Store", officialLinks.xbox, "Xbox listing state, console availability and regional storefront wording."],
  ["App Store", officialLinks.appStore, "iOS pre-order, mobile release visibility and regional storefront wording."],
  ["Google Play", officialLinks.googlePlay, "Android pre-registration, mobile release visibility and store-description changes."],
].map(([title, url, scope]) => ({ title, url, scope, lastChecked: "2026-08-28" }));
