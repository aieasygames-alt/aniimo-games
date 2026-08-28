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
