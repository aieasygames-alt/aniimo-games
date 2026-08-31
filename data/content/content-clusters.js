import { gameInfo, officialLinks, releaseInfo } from "./sources.js";

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
    slug: "aniimo-first-hour-guide",
    title: "Aniimo First Hour Guide",
    description: "Plan what to check during your first hour in Aniimo, from official downloads and rewards to catching, Twine and route verification.",
    intro: "First-hour searches start as soon as players can log in. This guide gives beginners a practical launch path while keeping exact route, reward and balance claims ready for live verification.",
    points: [
      ["Start from account and platform", "Confirm you installed from an official storefront, then use the same account ecosystem you used for wishlist or pre-registration."],
      ["Check rewards and codes separately", "Claim confirmed launch rewards through official systems, but only enter redeem codes that appear on official channels or in-game redemption screens."],
      ["Record early discoveries", "If you find routes, spawn conditions or Twine uses, capture screenshots, region, time, platform and last checked date before treating them as guide facts."],
    ],
    faq: [
      ["What should I do first in Aniimo?", "Start with official account setup, reward checks, beginner catching, Twine basics and source-safe route notes."],
      ["Should the first hour guide include exact best routes?", "Only after live verification confirms routes, conditions and screenshots."],
    ],
  },
  {
    slug: "aniimo-reroll-guide",
    title: "Aniimo Reroll Guide",
    description: "Track whether Aniimo rerolling exists, what account details to verify, and why final reroll advice should wait for launch testing.",
    intro: "Reroll intent is high around free-to-play launches, but Aniimo.games should not claim a reroll route before the live account, reward and acquisition systems are verified.",
    points: [
      ["Current status", "No final reroll route is confirmed on Aniimo.games before launch."],
      ["What to verify", "Check guest account support, account binding, first rewards, first Aniimo acquisition, deletion rules and platform restrictions after launch."],
      ["Safer alternative", "Use best starter and role watchlist pages for planning until live testing proves whether rerolling is useful or possible."],
    ],
    faq: [
      ["Can you reroll in Aniimo?", "Aniimo.games does not confirm rerolling until the live game shows account, reward and first-acquisition rules."],
      ["What should a reroll guide include after launch?", "A useful reroll guide should include steps, time required, platforms tested, reward sources, account risks and last verified date."],
    ],
  },
  {
    slug: "aniimo-best-settings",
    title: "Aniimo Best Settings",
    description: "Prepare Aniimo best settings checks for graphics, controls, account safety, performance and platform-specific launch options.",
    intro: "Best-settings searches usually come from players already trying the game. Before launch, this page prepares what to test without inventing graphics or control menus.",
    points: [
      ["Graphics and performance", "After launch, test presets, frame-rate options, resolution scaling, battery settings and device-specific behavior."],
      ["Controls and camera", "Check controller support, touch controls, camera sensitivity, aim assist, vibration and accessibility options by platform."],
      ["Account and downloads", "Keep official installer, account binding, notification and store-region settings visible because launch access issues often look like settings problems."],
    ],
    faq: [
      ["What are the best Aniimo settings?", "Final best settings should wait for live testing on PC, console, iOS and Android."],
      ["Will this page cover controller settings?", "Yes, controller and touch settings should be added after platform-specific launch testing."],
    ],
  },
  {
    slug: "aniimo-beginner-mistakes",
    title: "Aniimo Beginner Mistakes",
    description: "Avoid common Aniimo beginner mistakes around unofficial downloads, unverified codes, early route claims, rewards and account setup.",
    intro: "Beginner-mistake pages can protect launch users from bad links and bad assumptions. This page focuses on mistakes that are already clear from source policy and launch planning.",
    points: [
      ["Using unofficial downloads", "Avoid APK mirrors, reposted installers and fake beta clients when official store links are available."],
      ["Confusing rewards with codes", "Pre-registration rewards, milestone rewards and typed redeem codes should stay separate until official claim steps are known."],
      ["Trusting unverified routes", "Do not treat screenshots, short clips or community guesses as final spawn tables without region, condition and timestamp evidence."],
    ],
    faq: [
      ["What is the biggest Aniimo beginner mistake?", "The biggest pre-launch mistake is using unofficial downloads or code claims instead of verified official sources."],
      ["Can this page change after launch?", "Yes. After launch it should add tested mistakes around routing, Twine, rewards, settings and early-game progression."],
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
  {
    slug: "aniimo-ai",
    title: "Does Aniimo Use AI?",
    description: "Track Aniimo AI questions, official-source boundaries, developer information and how Aniimo.games handles AI-related claims.",
    intro: "SEMrush queries show users asking whether Aniimo is AI-made or uses generative AI. This page answers that trust intent carefully: it records what official sources say and avoids claims that are not directly supported.",
    points: [
      ["Current source position", "Aniimo.games does not claim Aniimo is AI-made unless Pawprint Studio or an official platform listing states that directly."],
      ["What is confirmed", "Official public sources identify Aniimo as a free-to-play creature-catching open-world RPG from Pawprint Studio, with Pawprint Interactive Entertainment Pte. Ltd. listed as publisher."],
      ["How to update this page", "If official art, development, trailer or store pages add AI-related disclosures, update this page, the source archive and trust pages with the exact source and date checked."],
    ],
    faq: [
      ["Is Aniimo made with AI?", "Aniimo.games does not confirm that Aniimo is made with AI without an official statement or platform disclosure."],
      ["Why does this page exist?", "Players are searching AI-related trust questions, so this page gives a source-aware answer instead of letting rumors define the topic."],
    ],
  },
  {
    slug: "aniimo-developer",
    title: "Aniimo Developer and Publisher",
    description: "Find Aniimo developer, publisher, official website, storefront links and source notes for trust-focused searches.",
    intro: "Developer and publisher searches are trust checks. This page gives users the official entity names and links them to the source archive, platform pages and update workflow.",
    points: [
      ["Developer", `${gameInfo.developer} is tracked as the Aniimo developer in the local source model.`],
      ["Publisher", `${gameInfo.publisher} is tracked as the Aniimo publisher in the local source model.`],
      ["Official links", "Use the official website, official Wiki and verified storefronts before trusting reposted download, beta key or account-sale pages."],
    ],
    faq: [
      ["Who developed Aniimo?", `${gameInfo.developer} is tracked as Aniimo's developer on Aniimo.games.`],
      ["Who published Aniimo?", `${gameInfo.publisher} is tracked as Aniimo's publisher on Aniimo.games.`],
    ],
  },
  {
    slug: "aniimo-price",
    title: "Aniimo Price and Free-to-Play Status",
    description: "Check whether Aniimo is free to play, what price information is confirmed and which economy details still need launch verification.",
    intro: "Price searches sit close to download intent. Aniimo.games should answer the free-to-play question clearly while keeping paid currency, battle pass and shop details in watchlist status until verified.",
    points: [
      ["Free-to-play status", "Official storefront language describes Aniimo as a free-to-play creature-catching open-world RPG."],
      ["Unknown economy details", "Paid currency, battle pass, shop pricing and competitive impact should wait for official or live-game verification."],
      ["Reward boundary", "Pre-registration rewards and launch gifts are tracked separately from paid purchases and redeem codes."],
    ],
    faq: [
      ["Is Aniimo free?", "Yes. Official storefront language describes Aniimo as free-to-play."],
      ["How much does Aniimo cost?", "Aniimo is tracked as free-to-play, while optional purchases and economy details need official or live-game verification."],
    ],
  },
  {
    slug: "aniimo-multiplayer",
    title: "Is Aniimo Multiplayer?",
    description: "Track Aniimo multiplayer, co-op, PVP, Egg Heist and real-time challenge questions with source-safe wording.",
    intro: "Multiplayer searches are already visible in SEMrush. This page should explain confirmed multiplayer-adjacent systems without overstating matchmaking, co-op campaign or final PVP rules before launch testing.",
    points: [
      ["Confirmed multiplayer-adjacent systems", "Official public material describes real-time challenges and Egg Heist, a PVEVP mode with three-player teams."],
      ["What still needs verification", "Matchmaking rules, friend invites, crossplay, platform pools, co-op exploration and final PVP rewards need official or live-game confirmation."],
      ["Related guides", "Use Egg Heist, platforms, launch verification and beginner pages to keep multiplayer claims tied to the right source context."],
    ],
    faq: [
      ["Is Aniimo multiplayer?", "Aniimo.games tracks real-time challenges and Egg Heist as confirmed public systems, while final multiplayer rules need launch verification."],
      ["Does Aniimo have co-op?", "Co-op details should wait for official wording or live-game testing before being treated as confirmed."],
    ],
  },
  {
    slug: "aniimo-crossplay",
    title: "Does Aniimo Have Crossplay?",
    description: "Track Aniimo crossplay, cross-platform account and platform-pool questions with source-safe launch verification notes.",
    intro: "Crossplay searches usually appear when a multi-platform game nears launch. Aniimo.games should answer confirmed platforms clearly while keeping account linking and cross-platform matchmaking in watchlist status.",
    points: [
      ["Confirmed platforms", "Aniimo.games tracks PC, PlayStation 5, Xbox, iOS and Android as official platform paths."],
      ["Crossplay status", "Crossplay, cross-save, platform pools and account-linking rules should not be marked confirmed until official wording or live testing verifies them."],
      ["Where to verify", "Check platform storefronts, official news, in-game account settings and launch verification notes before updating crossplay claims."],
    ],
    faq: [
      ["Does Aniimo support crossplay?", "Aniimo.games does not confirm crossplay until official sources or live-game testing verify it."],
      ["Will Aniimo have cross-save?", "Cross-save and account-linking rules should stay watchlist data until official or in-game confirmation exists."],
    ],
  },
  {
    slug: "aniimo-coop",
    title: "Does Aniimo Have Co-Op?",
    description: "Track Aniimo co-op questions, team play, real-time challenges and launch verification for friend and matchmaking systems.",
    intro: "Co-op intent is close to multiplayer intent, but users want a direct answer about playing with friends. This page separates confirmed team-mode language from unverified co-op exploration claims.",
    points: [
      ["What is confirmed", "Official public material describes real-time challenges and Egg Heist with three-player teams."],
      ["What needs testing", "Friend invites, open-world co-op, party limits, matchmaking, platform pools and voice or chat tools need launch verification."],
      ["Best internal path", "Use the multiplayer, Egg Heist, launch verification and platform pages together when co-op details change."],
    ],
    faq: [
      ["Can you play Aniimo with friends?", "Aniimo.games tracks team-based Egg Heist language, but friend-invite and open-world co-op details need official or live verification."],
      ["Is Aniimo co-op confirmed?", "Co-op should only be described as confirmed when official wording or live testing verifies the exact mode."],
    ],
  },
  {
    slug: "aniimo-pvp",
    title: "Does Aniimo Have PVP?",
    description: "Track Aniimo PVP, PVEVP, Egg Heist and competitive reward questions without overstating final launch rules.",
    intro: "PVP searches need careful wording because Egg Heist is described as PVEVP, while final matchmaking, combat rules and rewards still need verification.",
    points: [
      ["PVEVP context", "Egg Heist is the safest confirmed competitive reference because official material describes it as a PVEVP mode."],
      ["Unknown final rules", "Ranked play, arena modes, matchmaking brackets, reward tables and balance impact should wait for official or live-game evidence."],
      ["Update workflow", "When PVP rules are verified, update this page, Egg Heist, best Aniimo watchlists, codes and launch verification notes together."],
    ],
    faq: [
      ["Does Aniimo have PVP?", "Aniimo.games tracks Egg Heist as PVEVP, while final PVP mode rules need official or live-game verification."],
      ["Does PVP affect Aniimo rankings?", "Final rankings should wait until combat rules, reward systems and balance values are tested after launch."],
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
  {
    slug: "aniimo-wiki-dex",
    title: "Aniimo Wiki and Dex",
    description: "Browse Aniimo wiki, dex, index and database search intent with links to official names, creature pages, roles and elements.",
    intro: "Wiki and dex searches usually mean users want a complete creature index. This page connects that intent to the Aniimo.games database while keeping official Wiki facts and launch-only route claims separate.",
    points: [
      ["Database path", "Use the Aniimo database for tracked names, official numbers, elements, roles, stages, images and source status."],
      ["Dex meaning", "Dex-style searches map to creature-list, element, role, stage and individual Aniimo detail pages."],
      ["Watchlist names", "Names such as Helion, Lunara or Otti should only become detail pages when official data or the local database confirms them."],
    ],
    faq: [
      ["Does Aniimo.games have an Aniimo dex?", "The database acts as a dex-style index for currently tracked public Aniimo entries."],
      ["Are all Aniimo names confirmed?", "Aniimo.games tracks public official Wiki entries and keeps incomplete fields labeled until verified."],
    ],
  },
  {
    slug: "aniimo-beta-key",
    title: "Aniimo Beta Key and Access Safety",
    description: "Track Aniimo beta key, beta code, account-buying and test-access searches with official-source safety guidance.",
    intro: "SEMrush shows beta key and beta code searches. This page protects users from gray-market account and key pages while explaining what beta access information is actually confirmed.",
    points: [
      ["Past beta context", `The currently tracked closed beta started on ${releaseInfo.closedBeta}, with signup deadline ${releaseInfo.betaSignupDeadline}.`],
      ["Do not buy keys", "Avoid beta key buying, account buying, reposted key lists and unofficial download pages unless official Aniimo channels confirm a legitimate access path."],
      ["Where to update", "If a new beta or playtest is announced, update this page, beta timeline, launch tracker, download pages and source archive."],
    ],
    faq: [
      ["Can I buy an Aniimo beta key?", "Aniimo.games does not recommend buying beta keys or accounts. Use official Aniimo channels for access information."],
      ["Is Aniimo beta still available?", "Aniimo.games treats the tracked closed beta as a past milestone unless official sources announce another test."],
    ],
  },
  {
    slug: "aniimo-steam-deck",
    title: "Aniimo Steam Deck Status",
    description: "Track Aniimo Steam Deck compatibility, PC launch timing, controller checks and performance verification after launch.",
    intro: "Steam Deck searches often follow Steam wishlist searches. This page keeps compatibility claims in watchlist status until Steam or live testing confirms them.",
    points: [
      ["Steam launch path", `Aniimo's PC launch is tracked for ${releaseInfo.pcConsole}, with Steam as an official storefront path.`],
      ["Compatibility status", "Steam Deck verification, controller layout, text readability, frame-rate behavior and battery settings need launch testing."],
      ["Safe download path", "Use the official Steam listing or Aniimo website instead of modified installers or unofficial compatibility files."],
    ],
    faq: [
      ["Is Aniimo Steam Deck verified?", "Aniimo.games does not mark Steam Deck verification confirmed until Steam or live testing supports it."],
      ["Can I play Aniimo on Steam Deck?", "Steam Deck playability should be checked after PC launch through Steam compatibility and live testing."],
    ],
  },
  {
    slug: "aniimo-game-pass",
    title: "Is Aniimo on Game Pass?",
    description: "Track whether Aniimo is on Xbox Game Pass, how it relates to free-to-play status and where to verify official Xbox availability.",
    intro: "Game Pass searches appear around Xbox launches, but Aniimo's free-to-play status should not be confused with Game Pass availability.",
    points: [
      ["Xbox path", "Aniimo.games tracks Xbox as an official platform path through the Microsoft Store listing."],
      ["Game Pass status", "Do not list Aniimo as a Game Pass title unless Microsoft, Xbox or official Aniimo channels state it directly."],
      ["Free-to-play boundary", "Aniimo is tracked as free-to-play from storefront language, which is separate from Game Pass catalog inclusion."],
    ],
    faq: [
      ["Is Aniimo on Game Pass?", "Aniimo.games does not confirm Game Pass availability unless an official Xbox, Microsoft or Aniimo source states it."],
      ["Do I need Game Pass to play Aniimo?", "Aniimo is tracked as free-to-play, but platform-specific access rules should be verified from the official Xbox listing at launch."],
    ],
  },
  {
    slug: "aniimo-ps4",
    title: "Is Aniimo on PS4?",
    description: "Track Aniimo PS4 availability questions, confirmed PS5 listing status and safe PlayStation download guidance.",
    intro: "PS4 searches are natural because Aniimo has PlayStation demand, but the site should separate confirmed PS5 tracking from unconfirmed older-console availability.",
    points: [
      ["Confirmed PlayStation path", "Aniimo.games tracks PlayStation 5 through the official PlayStation listing."],
      ["PS4 status", "Do not list PS4 as confirmed unless an official PlayStation or Aniimo source adds a PS4 listing."],
      ["User action", "Use the PlayStation page, official website and launch tracker for final console availability updates."],
    ],
    faq: [
      ["Is Aniimo on PS4?", "Aniimo.games does not treat PS4 as confirmed unless an official PlayStation or Aniimo source lists it."],
      ["Is Aniimo on PS5?", "Yes. Aniimo.games tracks PlayStation 5 through the official PlayStation listing."],
    ],
  },
  {
    slug: "aniimo-discord",
    title: "Aniimo Discord Server",
    description: "Find source-safe guidance for Aniimo Discord searches, official community checks, codes, beta access and launch updates.",
    intro: "Discord searches often come from players looking for codes, beta access or real-time launch updates. This page keeps users oriented toward official channels and away from reposted invite traps.",
    points: [
      ["Official-first rule", "Use official Aniimo website, storefront and verified social links before trusting a Discord invite shared on a third-party page."],
      ["What to look for", "Discord can be useful for maintenance notices, code announcements, beta access updates and community reports when the source is verified."],
      ["What not to publish", "Do not list private invites, scraped community messages or unverified code screenshots as confirmed facts."],
    ],
    faq: [
      ["Does Aniimo have an official Discord?", "Aniimo.games only treats a Discord server as official when it is linked or verified by official Aniimo channels."],
      ["Can Discord confirm Aniimo codes?", "Only verified official Discord announcements should be used to confirm redeem codes."],
    ],
  },
  {
    slug: "aniimo-reddit",
    title: "Aniimo Reddit Discussions",
    description: "Track Aniimo Reddit discussion intent for launch questions, comparisons, issues and community reports without treating rumors as facts.",
    intro: "Reddit searches can reveal what players are worried about, but they are not the same as official confirmation. This page explains how Aniimo.games uses discussion signals safely.",
    points: [
      ["Useful signal", "Reddit can surface repeated questions about platforms, launch timing, codes, bugs, AI concerns and multiplayer expectations."],
      ["Verification boundary", "Community posts should become research leads, not confirmed guide claims, until official or in-game evidence supports them."],
      ["Refresh workflow", "If a Reddit topic gets repeated traction, update the matching guide page, then add source-safe notes and internal links."],
    ],
    faq: [
      ["Is Reddit an official Aniimo source?", "No. Reddit discussion can provide search-intent signals, but official sources or live verification should confirm facts."],
      ["Should Aniimo.games cover Reddit rumors?", "Only as clearly labeled research leads, not as final guide information."],
    ],
  },
  {
    slug: "aniimo-official-website",
    title: "Aniimo Official Website and Links",
    description: "Find Aniimo official website, official Wiki, storefront links and safe navigation notes for download, codes and launch updates.",
    intro: "Official-link searches are protective: players want the real site, real store pages and real update sources. This page collects the navigation logic without replacing official destinations.",
    points: [
      ["Official website", "Use the Aniimo official website for campaign, launch and registration context."],
      ["Official Wiki", "Use the official Wiki as the preferred source for public Aniimo names, numbers and descriptions."],
      ["Official storefronts", "Use Steam, Epic Games Store, PlayStation, Xbox, App Store and Google Play links for platform-specific availability."],
    ],
    faq: [
      ["What is the official Aniimo website?", "Aniimo.games links users to the official Aniimo website and verified storefront pages from its source archive and platform guides."],
      ["Should I download Aniimo from third-party sites?", "No. Use official website or platform storefront links, especially before launch."],
    ],
  },
  {
    slug: "aniimo-apk",
    title: "Aniimo APK Download Safety",
    description: "Track Aniimo APK searches with official Android download guidance, Google Play status and mirror-safety warnings.",
    intro: "APK searches show download intent, but they are also risky before launch. This page sends users toward official Android sources and avoids hosting or recommending unofficial files.",
    points: [
      ["Official Android path", "Use Google Play and the official Aniimo website for Android availability and pre-registration status."],
      ["Avoid mirrors", "Do not use APK mirrors, modified clients, reposted installers or fake beta APKs before official availability is verified."],
      ["What to update after launch", "Add official Android install status, region notes, file-size details and device requirements only when storefronts or official sources confirm them."],
    ],
    faq: [
      ["Is Aniimo APK available?", "Aniimo.games does not recommend APK mirrors. Use Google Play or official Aniimo sources for Android access."],
      ["Is it safe to download Aniimo APK from third-party sites?", "No. Use official storefronts and avoid unofficial APK files, especially before launch."],
    ],
  },
  {
    slug: "aniimo-torrent",
    title: "Aniimo Torrent Safety",
    description: "Explain why Aniimo torrent searches should use official free-to-play storefronts instead of unofficial downloads.",
    intro: "Torrent searches can appear even for free-to-play games. This page protects users by explaining official platform paths and the risk of unofficial installers.",
    points: [
      ["Official platform path", "Aniimo is tracked through official website, Steam, Epic Games Store, Xbox, PlayStation, App Store and Google Play links."],
      ["Torrent risk", "Torrent files can contain outdated clients, modified files, malware or fake beta builds, and should not be used as a launch source."],
      ["Free-to-play context", "Because Aniimo is tracked as free-to-play, users should not need torrent downloads to access the game when official platform availability goes live."],
    ],
    faq: [
      ["Can I download Aniimo by torrent?", "Aniimo.games does not recommend torrent downloads. Use official storefronts and the official website."],
      ["Why avoid Aniimo torrents?", "Torrents can be unsafe, outdated or unofficial, especially around launch when fake clients often circulate."],
    ],
  },
  {
    slug: "aniimo-gameplay",
    title: "Aniimo Gameplay",
    description: "Summarize confirmed Aniimo gameplay systems including creature catching, Twine, Homeland, Egg Heist and exploration.",
    intro: "Gameplay searches help users decide whether Aniimo is worth following. This page summarizes confirmed public systems while keeping exact balance, route and progression details for launch verification.",
    points: [
      ["Core loop", "Official public material positions Aniimo around creature catching, collecting, open-world exploration and the world of Idyll."],
      ["Distinctive systems", "Twine, Aniipods, Homeland, RV interactions, real-time challenges and Egg Heist are the safest confirmed gameplay anchors."],
      ["What still changes", "Exact combat values, route requirements, progression pacing, rewards and endgame loops need official or live-game confirmation."],
    ],
    faq: [
      ["What is Aniimo gameplay like?", "Aniimo is tracked as a creature-catching open-world RPG with catching, Twine, exploration, Homeland and Egg Heist systems."],
      ["Does Aniimo.games have gameplay guides?", "Yes. Start with beginner guides, mechanics pages, map pages and launch verification notes."],
    ],
  },
  {
    slug: "aniimo-review",
    title: "Aniimo Review Watchlist",
    description: "Prepare Aniimo review coverage with source-safe criteria for gameplay, performance, monetization, multiplayer and launch stability.",
    intro: "Review searches appear before and after launch, but final review claims should wait until the live game can be tested. This page explains what Aniimo.games will evaluate.",
    points: [
      ["Pre-launch boundary", "Before launch, this page should not publish a score or final verdict."],
      ["Review criteria", "After launch, evaluate download stability, performance, combat feel, catching, Twine utility, multiplayer, rewards and monetization."],
      ["Evidence needed", "Use platform, device, playtime, screenshots, issue logs and last-tested date before turning observations into review claims."],
    ],
    faq: [
      ["Is Aniimo reviewed yet?", "Aniimo.games should wait for live testing before publishing a final review."],
      ["What will an Aniimo review cover?", "A useful review should cover gameplay, platform performance, multiplayer, rewards, monetization and launch stability."],
    ],
  },
  {
    slug: "aniimo-demo",
    title: "Aniimo Demo and Playtest Status",
    description: "Track Aniimo demo, playtest and trial searches with official beta history and future test watchlist notes.",
    intro: "Demo searches overlap with beta and playtest searches. This page keeps past test information separate from future demo or trial claims.",
    points: [
      ["Current demo status", "Aniimo.games does not mark a public demo as active unless official sources or storefronts list one."],
      ["Past testing", `The tracked closed beta started on ${releaseInfo.closedBeta}, with signup deadline ${releaseInfo.betaSignupDeadline}.`],
      ["Future updates", "If a demo, trial or new playtest appears, update this page, beta key safety, download, launch tracker and source archive."],
    ],
    faq: [
      ["Is there an Aniimo demo?", "Aniimo.games does not confirm a public demo unless official sources or storefronts list one."],
      ["Is Aniimo playtest still open?", "The tracked closed beta is treated as a past milestone unless official sources announce another test."],
    ],
  },
  {
    slug: "aniimo-mmo",
    title: "Is Aniimo an MMO?",
    description: "Track whether Aniimo is an MMO, multiplayer, co-op or open-world RPG while keeping final online-system claims verified.",
    intro: "MMO searches show genre confusion. This page clarifies Aniimo's confirmed open-world RPG positioning and separates it from unverified MMO-scale claims.",
    points: [
      ["Confirmed genre", "Official storefront language describes Aniimo as a free-to-play creature-catching open-world RPG."],
      ["Online systems", "Real-time challenges and Egg Heist are tracked, while server scale, shared-world rules and MMO-style features need verification."],
      ["Related pages", "Use multiplayer, co-op, PVP and crossplay pages for specific online-system questions."],
    ],
    faq: [
      ["Is Aniimo an MMO?", "Aniimo.games tracks Aniimo as a free-to-play creature-catching open-world RPG, not as a confirmed MMO unless official sources say so."],
      ["Is Aniimo online multiplayer?", "Multiplayer-adjacent systems are tracked, but final online rules need official or live-game verification."],
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
    description: "Track official Aniimo trailers, announcement videos, platform clips, gameplay footage and what each video confirms.",
    intro: "Trailer searches have measurable demand in the SEMrush export. This page should summarize what official videos show, then link users to safer guide pages for confirmed systems and launch information.",
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
    slug: "aniimo-logo",
    title: "Aniimo Logo and Brand Assets",
    description: "Track Aniimo logo search intent, brand asset usage, source notes and where logo images appear on Aniimo.games.",
    intro: "Logo searches can bring image traffic and brand-verification users. This page keeps logo usage tied to site navigation, media assets and official-source context.",
    points: [
      ["Current site logo", "Aniimo.games uses a compressed brand image for site navigation and keeps production media under asset checks."],
      ["Source boundary", "Official logos and brand marks should be used only when rights, source and page purpose are clear."],
      ["Image SEO", "Logo pages should use descriptive alt text, stable dimensions, compressed assets and links to media and source archive pages."],
    ],
    faq: [
      ["Where is the Aniimo logo used?", "Aniimo.games uses a brand image in the site header and tracks media assets through the media gallery and asset audit."],
      ["Can I use the Aniimo logo?", "Check official Aniimo or publisher brand guidance before reusing logos outside this guide context."],
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
