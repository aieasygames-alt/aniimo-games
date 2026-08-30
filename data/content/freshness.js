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
