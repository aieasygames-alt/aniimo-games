import { officialLinks, releaseInfo } from "./sources.js";

export const freshnessPages = [
  {
    slug: "official-news",
    title: "Aniimo Official News Tracker",
    description: "Track official Aniimo news, launch announcements, platform posts, reward updates and source-aware page refreshes.",
    intro: "This tracker turns official Aniimo updates into a repeatable publishing workflow. Each item records the source, the site pages affected and the next action before claims are expanded.",
    sourceType: "Official news",
    source: officialLinks.main,
    points: [
      ["Launch dates", `PC and console launch remain tracked for ${releaseInfo.pcConsole}; mobile launch remains tracked for ${releaseInfo.mobile}.`],
      ["Developer letter", "The September 3 developer letter re-confirmed worldwide PC, console and Xbox Cloud Gaming launch on September 16, followed by mobile on September 23."],
      ["Event closeout", "The Bond Pact event has ended; event rewards and launch rewards should stay separated from redeem codes until the live client confirms claim rules."],
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
