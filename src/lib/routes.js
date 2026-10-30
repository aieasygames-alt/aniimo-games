import { aniimo, beginnerTopics, choiceTopics, codeRewardTopics, conversionTopics, downloadTopics, faqs, freshnessPages, gameInfo, glossaryTopics, localizedTopics, mechanicDeepDiveTopics, mediaDetailTopics, newsTopics, officialPitchTopics, platforms, refreshPlanningTopics, regions, releaseInfo, searchSuggestionTopics, siteLastUpdated, socialIntentTopics, troubleshootingTopics } from "../../data/content.js";

export const siteUrl = "https://aniimo.games";

export const editorialEntity = {
  "@type": "Organization",
  name: "Aniimo.games Editorial Team",
  url: `${siteUrl}/about/`,
  description: "The editorial team maintains Aniimo.games using official public sources, storefront checks, and clearly labeled live-game verification.",
};

export const staticRoutes = [
  {
    path: "/",
    label: "Home",
    title: "Aniimo Wiki: Map, Download, Locations & 90-Creature Database",
    description: "Find Aniimo map regions, creature locations, official downloads, current issues, updates and a 90-entry Aniimo database.",
    nav: false,
  },
  { path: "/aniimo/", label: "Database", title: "All 90 Aniimo: Names, Locations & Evolutions", description: "Search all 90 public Aniimo entries by name, element, role, region, stage and evolution, with source and location-verification status." },
  { path: "/map/", label: "Map", title: "Aniimo Map & Locations: 6 Region Route Guides", description: "Open route-planning maps for six Aniimo regions, find creature location guides and check source-labeled weather, time and spawn notes." },
  { path: "/evolution/", label: "Evolution", title: "Aniimo Evolution & Forms Guide", description: "Track Aniimo Lumin, Gamma and Nova stages, evolution lines, form paths and launch update notes." },
  { path: "/codes/", label: "Codes", title: "Aniimo Codes: Active Redeem Codes & Rewards", description: "Check active Aniimo redeem codes, launch rewards, pre-registration bonuses and code verification status. Avoid expired or fake codes." },
  { path: "/rewards/", label: "Rewards", title: "Aniimo Rewards & Claim Status", description: "Check confirmed Aniimo campaign rewards, milestone items, Susuta egg rewards and current claim-status guidance." },
  { path: "/download/", label: "Download", title: "Aniimo Download: Official PC, Console & Mobile Stores", description: "Find official Aniimo game download links for Steam, Epic, PS5, Xbox, iOS and Android, plus release dates and safe install guidance. Avoid APK mirrors." },
  { path: "/release-date/", label: "Release Date", title: "Aniimo Release Date: PC, Console & Mobile", description: "Track Aniimo global release dates for PC, console and mobile with official timeline notes and launch status." },
  { path: "/beginner-guide/", label: "Guides", title: "Aniimo Beginner Guide: Catching, Twine & Progression", description: "Learn Aniimo basics including catching, Twine, environment encounters, Homeland, RV systems and beginner progression." },
  { path: "/updates/", label: "Updates", title: "Aniimo Updates & Source Log", description: "Follow Aniimo.games update history, official source checks, content freshness notes and launch tracking changes." },
  { path: "/events/", label: "Events", title: "Aniimo Events: Whisperwake Isles, PvP & Weekly Windows", description: "Check Season 1 Part 2 activities, Whisperwake Isles, Egg Heist PvP, 1v1 Spar, weekly windows and source-labeled event timing." },
  { path: "/weekly-plan/", label: "Weekly Plan", title: "Aniimo Weekly Plan: Current Events & Repeatable Activities", description: "Plan a useful Aniimo week using current event status, known repeatable activities, eligibility checks and official source links." },
  { path: "/launch-day/", label: "Launch Day", title: "Aniimo Launch Day Server Status, Codes & Fixes", description: "Use the Aniimo launch day command center for server status, official downloads, active codes, unlock timing and common launch fixes." },
  { path: "/launch-tracker/", label: "Launch Tracker", title: "Aniimo Launch Tracker", description: "Track Aniimo launch readiness across platform dates, official rewards, code status, source checks and post-launch verification tasks." },
  { path: "/launch-verification/", label: "Launch Verification", title: "Aniimo Launch Verification Checklist", description: "Prepare Aniimo post-launch verification templates for spawn routes, redeem codes, platform unlock times and Search Console observations." },
  { path: "/sources/", label: "Sources", title: "Aniimo Official Sources", description: "Review official Aniimo sources used for launch dates, platform links, Wiki names, regions, rewards and mechanics." },
  { path: "/site-index/", label: "Site Index", title: "Aniimo.games Site Index", description: "Browse every major Aniimo.games guide hub including database pages, platform pages, region guides, elements, roles and official source pages." },
  { path: "/guides/", label: "Guide Hub", title: "Aniimo Guides Hub: Beginner & Mechanics", description: "Browse Aniimo beginner guides, official feature guides, mechanics, glossary terms and launch planning pages." },
  { path: "/compare/", label: "Compare", title: "Aniimo Comparisons: Platforms, AI & Multiplayer", description: "Compare Aniimo with common creature-collecting and open-world expectations while keeping official facts clear." },
  { path: "/mechanics/", label: "Mechanics", title: "Aniimo Mechanics Guides: Twine & Homeland", description: "Learn Aniimo mechanics including Twine, Aniipods, Egg Heist, Lost Isles, Homeland and launch verification notes." },
  { path: "/launch/", label: "Launch Hub", title: "Aniimo Launch Hub: Platforms, Rewards & Support", description: "Check live PC and console platforms, mobile availability, safe downloads, rewards, codes and current support guidance." },
  { path: "/growth/", label: "Growth Plan", title: "Aniimo.games Growth Plan", description: "Review Aniimo.games search refresh plans, GSC query watchlists and future content update workflow." },
  { path: "/glossary/", label: "Glossary", title: "Aniimo Glossary", description: "Learn Aniimo terms such as Pathfinder, Idyll, Twine, Aniipod, Homeland, Prismana and Egg Heist." },
  { path: "/media/", label: "Media", title: "Aniimo Images, Screenshots & Media Gallery", description: "Browse Aniimo.games media assets, official-style banners, region art and image source notes." },
  { path: "/troubleshooting/", label: "Troubleshooting", title: "Aniimo Download & Store Availability Troubleshooting", description: "Fix Aniimo download, storefront visibility, login, region and reward-claim questions using official paths." },
  { path: "/source-archive/", label: "Source Archive", title: "Aniimo Source Archive", description: "Track official Aniimo sources, storefront links, checked dates and which pages each source supports." },
  { path: "/best-aniimo/", label: "Best Aniimo", title: "Best Aniimo Watchlist | Aniimo Wiki", description: "Review source-labeled Aniimo picks by role, element, region coverage and current evidence status; this is not a final tier list." },
  { path: "/compare/aniimo/", label: "Aniimo Compare", title: "Compare Aniimo | Aniimo Wiki", description: "Compare Aniimo by element, role, stage, region, evolution, abilities and source status." },
  { path: "/team-builder/", label: "Team Builder", title: "Aniimo Team Builder | Aniimo Wiki", description: "Build and share a six-slot Aniimo team while checking element coverage, role coverage, regions, stages and public data status." },
  { path: "/collection-tracker/", label: "Collection Tracker", title: "Aniimo Collection Tracker | Aniimo Wiki", description: "Track viewed, wanted, captured and verified Aniimo entries locally in your browser." },
  { path: "/platforms/steam/", label: "Steam", title: "Aniimo Steam Download Guide", description: "Open the official Aniimo Steam page, check PC requirements and use safe download guidance." },
  { path: "/platforms/mobile/", label: "Mobile", title: "Aniimo Mobile Download: iOS, Android & Availability", description: "Check Aniimo mobile availability by country, official App Store and Google Play links, device guidance and safe install paths." },
  { path: "/platforms/ps5/", label: "PS5", title: "Aniimo on PS5: Official Store & Server Guide", description: "Open the official Aniimo PlayStation 5 listing, confirm PSN-region details and use safe download guidance." },
  { path: "/platforms/xbox/", label: "Xbox", title: "Aniimo on Xbox: Official Store & Access Guide", description: "Open the official Aniimo Xbox listing, check current access and use safe download guidance." },
  { path: "/platforms/epic-games/", label: "Epic Games", title: "Aniimo Epic Games Store Download Guide", description: "Open the official Aniimo Epic Games Store page, check current client access and use safe installer guidance." },
  { path: "/platforms/ios/", label: "iOS", title: "Aniimo iOS Download & App Store Guide", description: "Track Aniimo iOS launch timing, App Store availability, pre-order status and official mobile download guidance." },
  { path: "/platforms/android/", label: "Android", title: "Aniimo Android Download & Google Play Guide", description: "Check Aniimo Android availability on Google Play by country and use safe APK guidance." },
  { path: "/rewards/pre-registration/", label: "Pre-Registration", title: "Aniimo Pre-Registration Rewards Guide", description: "Track official Aniimo pre-registration rewards, milestone items, Susuta egg notes and claim status." },
  { path: "/about/", label: "About", title: "About Aniimo.games", description: "Learn what Aniimo.games covers, how the independent guide site uses official public Aniimo sources and how content is maintained." },
  { path: "/editorial-policy/", label: "Editorial Policy", title: "Aniimo.games Editorial Policy", description: "Review Aniimo.games source policy, verification labels, update workflow and correction standards." },
  { path: "/contact/", label: "Contact", title: "Contact Aniimo.games", description: "Contact Aniimo.games about corrections, missing Aniimo data, source updates, image issues and site feedback." },
  { path: "/privacy-policy/", label: "Privacy Policy", title: "Aniimo.games Privacy Policy", description: "Learn how Aniimo.games uses cookies, Google advertising services and visitor information." },
];

const primaryNavPaths = ["/aniimo/", "/map/", "/guides/", "/mechanics/", "/launch/", "/codes/", "/site-index/"];
const localizedFeaturedIds = ["emberpup", "inferlupa", "glacy", "celestis", "eklue", "skippy", "susuta", "fragrancier", "wisptis", "helgon", "cozite"];

export const navRoutes = primaryNavPaths
  .map((path) => staticRoutes.find((item) => item.path === path))
  .filter(Boolean);

// An individual detail page is indexable only once its core game data is sourced.
// Official Wiki name-only entries remain available in the database, but do not make
// useful standalone search landing pages until their taxonomy and region are known.
export function isIndexableAniimo(item) {
  return item.status === "Confirmed" && item.element !== "Unknown" && item.role !== "Watchlist" && item.stage !== "Official Index" && item.region !== "Official Wiki";
}

// These operational pages remain available to editors, but are not player-facing
// search destinations and must never be included in discovery surfaces.
export const maintenanceNoindexRoutes = [
  "/growth/",
  "/growth/gsc-refresh-plan/",
  "/growth/query-refresh-watchlist/",
  "/launch-tracker/",
  "/launch-verification/",
];

export const archivedNoindexRoutes = [
  ...newsTopics.map(newsTopicPath),
  "/topics/aniimo-review/",
  "/topics/aniimo-demo/",
  "/topics/aniimo-pax-east/",
  "/topics/aniimo-tgs/",
];

export const noindexRoutes = [...maintenanceNoindexRoutes, ...archivedNoindexRoutes];

export function isMaintenanceNoindexRoute(path) {
  return maintenanceNoindexRoutes.includes(normalizePath(path));
}

export function isNoindexRoute(path) {
  return noindexRoutes.includes(normalizePath(path));
}

export function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function aniimoPath(item) {
  return normalizePath(`/aniimo/${item.id}`);
}

export function localizedAniimoPath(item, locale = "pt-BR") {
  return normalizePath(`/${locale === "pt-BR" ? "pt-br" : locale}/aniimo/${item.id}`);
}

export function regionPath(region) {
  return normalizePath(`/regions/${region.id}`);
}

export function elementPath(element) {
  return normalizePath(`/elements/${element.toLowerCase()}`);
}

export function rolePath(role) {
  return normalizePath(`/roles/${role.toLowerCase()}`);
}

export function stagePath(stage) {
  return normalizePath(`/stages/${slugify(stage)}`);
}

export function statusPath(status) {
  return normalizePath(`/status/${slugify(status)}`);
}

export function beginnerTopicPath(topic) {
  return normalizePath(`/${topic.slug}`);
}

export function downloadTopicPath(topic) {
  return normalizePath(`/download/${topic.slug}`);
}

export function codeRewardTopicPath(topic) {
  const rewardSlugs = ["junior-wayfarer", "susuta-egg", "milestones"];
  return normalizePath(`/${rewardSlugs.includes(topic.slug) ? "rewards" : "codes"}/${topic.slug}`);
}

export function newsTopicPath(topic) {
  return normalizePath(`/news/${topic.slug}`);
}

export function locationTopicPath(region) {
  return normalizePath(`/locations/${region.id}`);
}

export function choiceTopicPath(topic) {
  return normalizePath(`/${topic.slug}`);
}

export function officialPitchTopicPath(topic) {
  return normalizePath(`/guides/${topic.slug}`);
}

export function socialIntentTopicPath(topic) {
  return normalizePath(`/compare/${topic.slug}`);
}

export function searchSuggestionTopicPath(topic) {
  return normalizePath(`/topics/${topic.slug}`);
}

export function glossaryTopicPath(topic) {
  return normalizePath(`/glossary/${topic.slug}`);
}

export function troubleshootingTopicPath(topic) {
  return normalizePath(`/troubleshooting/${topic.slug}`);
}

export function mechanicDeepDiveTopicPath(topic) {
  return normalizePath(`/mechanics/${topic.slug}`);
}

export function mediaDetailTopicPath(topic) {
  return normalizePath(`/media/${topic.slug}`);
}

export function conversionTopicPath(topic) {
  return normalizePath(`/launch/${topic.slug}`);
}

export function refreshPlanningTopicPath(topic) {
  return normalizePath(`/growth/${topic.slug}`);
}

export function freshnessPagePath(topic) {
  return normalizePath(`/updates/${topic.slug}`);
}

export function localizedTopicPath(topic) {
  return normalizePath(`/${topic.locale === "pt" ? "pt-br" : topic.locale}/${topic.slug}`);
}

export function canonicalUrl(path) {
  return `${siteUrl}${normalizePath(path)}`;
}

export function findAniimoBySlug(slug) {
  return aniimo.find((item) => item.id === slug || item.aliases?.includes(slug));
}

export function findRegionBySlug(slug) {
  return regions.find((item) => item.id === slug);
}

export function resolveRoute(path) {
  const normalized = normalizePath(path);
  if (isMaintenanceNoindexRoute(normalized)) {
    return {
      type: "not-found",
      path: normalized,
      title: "Page Not Available | Aniimo.games",
      description: "This Aniimo.games page is not available as a public guide.",
    };
  }
  const localizedAniimoMatch = normalized.match(/^\/pt-br\/aniimo\/([^/]+)\/$/);
  if (localizedAniimoMatch) {
    const item = findAniimoBySlug(localizedAniimoMatch[1]);
    if (item && isIndexableAniimo(item)) return { type: "localized-aniimo", path: localizedAniimoPath(item), title: `${item.name} Aniimo: Localização, Evolução e Habilidades`, description: `Guia em português sobre ${item.name}: região, formas, evolução, função, habilidade e status da fonte oficial.`, detail: item, locale: "pt-BR" };
  }
  if (normalized.startsWith("/pt/")) {
    const legacy = normalized.replace(/^\/pt\//, "/pt-br/");
    const target = localizedTopics.find((item) => localizedTopicPath(item) === legacy);
    if (target) return { type: "localized-legacy", path: normalized, redirectTo: legacy, title: target.title, description: target.description, localizedTopic: target };
  }
  if (normalized === "/updates/official-news-tracker/") {
    const target = freshnessPages.find((item) => item.slug === "official-news");
    return {
      type: "freshness-page-redirect",
      path: "/updates/official-news-tracker/",
      redirectTo: freshnessPagePath(target),
      title: target.title,
      description: target.description,
      freshnessPage: target,
    };
  }
  if (normalized === "/compare/aniimo/") return { type: "aniimo-compare", path: normalized, title: "Compare Aniimo | Aniimo Wiki", description: "Compare Aniimo by element, role, stage, region, evolution, abilities and source status." };
  if (normalized === "/team-builder/") return { type: "team-builder", path: normalized, title: "Aniimo Team Builder | Aniimo Wiki", description: "Build and share a six-slot Aniimo team while checking element coverage, role coverage, regions, stages and public data status." };
  if (normalized === "/collection-tracker/") return { type: "collection-tracker", path: normalized, title: "Aniimo Collection Tracker | Aniimo Wiki", description: "Track viewed, wanted, captured and verified Aniimo entries locally in your browser." };
  if (normalized === "/weekly-plan/") return { type: "weekly-plan", path: normalized, title: "Aniimo Weekly Plan: Current Events & Repeatable Activities", description: "Plan a useful Aniimo week using current event status, known repeatable activities, eligibility checks and official source links." };
  const aniimoMatch = normalized.match(/^\/aniimo\/([^/]+)\//);
  if (aniimoMatch) {
    const detail = findAniimoBySlug(aniimoMatch[1]);
    if (detail && isIndexableAniimo(detail)) {
      return {
        type: "aniimo",
        path: aniimoPath(detail),
        title: `${detail.name}: Location, Evolution & Abilities | Aniimo`,
        description: `Find ${detail.name} location, element, region, forms, evolution notes, ability, official description, and source status in the Aniimo Wiki.`,
        detail,
      };
    }
  }

  const regionMatch = normalized.match(/^\/regions\/([^/]+)\//);
  if (regionMatch) {
    const regionDetail = findRegionBySlug(regionMatch[1]);
    if (regionDetail) {
      const highIntentRegions = new Set(["sea-of-flowers", "forest-of-falling-stars", "blitzwood"]);
      return {
        type: "region",
        path: regionPath(regionDetail),
        title: highIntentRegions.has(regionDetail.id) ? `${regionDetail.name} Aniimo Map, Locations & Route Guide` : `${regionDetail.name} Aniimo Locations & Route Guide`,
        description: highIntentRegions.has(regionDetail.id)
          ? `Plan a ${regionDetail.name} Aniimo route: choose a creature or resource, open the region map layer, use travel points, and verify live encounter conditions.`
          : `${regionDetail.name} route guide with official region art, representative Aniimo, mechanics and verification notes.`,
        regionDetail,
      };
    }
  }

  const elementMatch = normalized.match(/^\/elements\/([^/]+)\//);
  if (elementMatch) {
    const label = titleCase(elementMatch[1]);
    return {
      type: "element",
      path: elementPath(elementMatch[1]),
      title: `${label} Aniimo Element Guide | Aniimo Wiki`,
      description: `Browse ${label} Aniimo by official Wiki number, role, stage, region and related detail pages.`,
      element: elementMatch[1],
    };
  }

  const roleMatch = normalized.match(/^\/roles\/([^/]+)\//);
  if (roleMatch) {
    const label = roleMatch[1].toUpperCase() === "DPS" ? "DPS" : titleCase(roleMatch[1]);
    return {
      type: "role",
      path: rolePath(roleMatch[1]),
      title: `${label} Aniimo Role Guide | Aniimo Wiki`,
      description: `Browse ${label} Aniimo by official Wiki number, element, stage, region and related detail pages.`,
      role: roleMatch[1],
    };
  }

  const stageMatch = normalized.match(/^\/stages\/([^/]+)\//);
  if (stageMatch) {
    const stage = findBySlug([...new Set(aniimo.map((item) => item.stage))], stageMatch[1]);
    if (stage) {
      return {
        type: "stage",
        path: stagePath(stage),
        title: `${stage} Aniimo Guide | Aniimo Wiki`,
        description: `Browse ${stage} Aniimo by official Wiki number, element, role, region and related detail pages.`,
        stage,
      };
    }
  }

  const statusMatch = normalized.match(/^\/status\/([^/]+)\//);
  if (statusMatch) {
    const status = findBySlug([...new Set(aniimo.map((item) => item.status))], statusMatch[1]);
    if (status) {
      return {
        type: "status",
        path: statusPath(status),
        title: `${status} Aniimo Data Guide | Aniimo Wiki`,
        description: `Browse ${status} Aniimo entries by official Wiki number, element, role, stage, region and source notes.`,
        status,
      };
    }
  }

  const beginnerTopic = beginnerTopics.find((item) => beginnerTopicPath(item) === normalized);
  if (beginnerTopic) return { type: "beginner-topic", path: beginnerTopicPath(beginnerTopic), title: beginnerTopic.title, description: beginnerTopic.description, beginnerTopic };

  const downloadTopic = downloadTopics.find((item) => downloadTopicPath(item) === normalized);
  if (downloadTopic) return { type: "download-topic", path: downloadTopicPath(downloadTopic), title: downloadTopic.title, description: downloadTopic.description, downloadTopic };

  const codeRewardTopic = codeRewardTopics.find((item) => codeRewardTopicPath(item) === normalized);
  if (codeRewardTopic) return { type: "code-reward-topic", path: codeRewardTopicPath(codeRewardTopic), title: codeRewardTopic.title, description: codeRewardTopic.description, codeRewardTopic };

  const newsTopic = newsTopics.find((item) => newsTopicPath(item) === normalized);
  if (newsTopic) return { type: "news-topic", path: newsTopicPath(newsTopic), title: newsTopic.title, description: newsTopic.summary, newsTopic };

  const locationMatch = normalized.match(/^\/locations\/([^/]+)\//);
  if (locationMatch) {
    const locationRegion = findRegionBySlug(locationMatch[1]);
    if (locationRegion) {
      return {
        type: "location-topic",
        path: locationTopicPath(locationRegion),
        title: `${locationRegion.name} Aniimo Location Guide`,
        description: `Track ${locationRegion.name} Aniimo locations, route checks, public region notes and post-launch spawn verification tasks.`,
        locationRegion,
      };
    }
  }

  const choiceTopic = choiceTopics.find((item) => choiceTopicPath(item) === normalized);
  if (choiceTopic) return { type: "choice-topic", path: choiceTopicPath(choiceTopic), title: choiceTopic.title, description: choiceTopic.description, choiceTopic };

  const officialPitchTopic = officialPitchTopics.find((item) => officialPitchTopicPath(item) === normalized);
  if (officialPitchTopic) return { type: "official-pitch-topic", path: officialPitchTopicPath(officialPitchTopic), title: officialPitchTopic.title, description: officialPitchTopic.description, officialPitchTopic };

  const socialIntentTopic = socialIntentTopics.find((item) => socialIntentTopicPath(item) === normalized);
  if (socialIntentTopic) return { type: "social-intent-topic", path: socialIntentTopicPath(socialIntentTopic), title: socialIntentTopic.title, description: socialIntentTopic.description, socialIntentTopic };

  const searchSuggestionTopic = searchSuggestionTopics.find((item) => searchSuggestionTopicPath(item) === normalized);
  if (searchSuggestionTopic) return { type: "search-suggestion-topic", path: searchSuggestionTopicPath(searchSuggestionTopic), title: searchSuggestionTopic.title, description: searchSuggestionTopic.description, searchSuggestionTopic };

  if (normalized === "/guides/" || normalized === "/guide/") {
    return { type: "static", path: "/guides/", label: "Guide Hub", title: "Aniimo Guides Hub", description: "Browse Aniimo beginner guides, official feature guides, mechanics, glossary terms and launch planning pages." };
  }

  const glossaryTopic = glossaryTopics.find((item) => glossaryTopicPath(item) === normalized);
  if (glossaryTopic) return { type: "glossary-topic", path: glossaryTopicPath(glossaryTopic), title: glossaryTopic.title, description: glossaryTopic.description, glossaryTopic };

  const troubleshootingTopic = troubleshootingTopics.find((item) => troubleshootingTopicPath(item) === normalized);
  if (troubleshootingTopic) return { type: "troubleshooting-topic", path: troubleshootingTopicPath(troubleshootingTopic), title: troubleshootingTopic.title, description: troubleshootingTopic.description, troubleshootingTopic };

  const mechanicDeepDiveTopic = mechanicDeepDiveTopics.find((item) => mechanicDeepDiveTopicPath(item) === normalized);
  if (mechanicDeepDiveTopic) return { type: "mechanic-deep-dive-topic", path: mechanicDeepDiveTopicPath(mechanicDeepDiveTopic), title: mechanicDeepDiveTopic.title, description: mechanicDeepDiveTopic.description, mechanicDeepDiveTopic };

  const mediaDetailTopic = mediaDetailTopics.find((item) => mediaDetailTopicPath(item) === normalized);
  if (mediaDetailTopic) return { type: "media-detail-topic", path: mediaDetailTopicPath(mediaDetailTopic), title: mediaDetailTopic.title, description: mediaDetailTopic.description, mediaDetailTopic };

  const conversionTopic = conversionTopics.find((item) => conversionTopicPath(item) === normalized);
  if (conversionTopic) return { type: "conversion-topic", path: conversionTopicPath(conversionTopic), title: conversionTopic.title, description: conversionTopic.description, conversionTopic };

  const refreshPlanningTopic = refreshPlanningTopics.find((item) => refreshPlanningTopicPath(item) === normalized);
  if (refreshPlanningTopic) return { type: "refresh-planning-topic", path: refreshPlanningTopicPath(refreshPlanningTopic), title: refreshPlanningTopic.title, description: refreshPlanningTopic.description, refreshPlanningTopic };

  const freshnessPage = freshnessPages.find((item) => freshnessPagePath(item) === normalized);
  if (freshnessPage) return { type: "freshness-page", path: freshnessPagePath(freshnessPage), title: freshnessPage.title, description: freshnessPage.description, freshnessPage };

  const localizedTopic = localizedTopics.find((item) => localizedTopicPath(item) === normalized);
  if (localizedTopic) return { type: "localized-topic", path: localizedTopicPath(localizedTopic), title: localizedTopic.title, description: localizedTopic.description, localizedTopic };

  const staticRoute = staticRoutes.find((item) => item.path === normalized);
  if (staticRoute) return { type: "static", ...staticRoute };

  return {
    type: "not-found",
    path: "/",
    title: "Aniimo Wiki: Release Date, Codes, Map & Database",
    description: gameInfo.summary,
  };
}

export function sitemapRoutes() {
  return primarySitemapRoutes();
}

export function fullSitemapRoutes() {
  const indexableAniimo = aniimo.filter(isIndexableAniimo);
  return uniqueRoutes([
    ...staticRoutes.filter((item) => !noindexRoutes.includes(item.path)).map((item) => item.path),
    ...[...new Set(indexableAniimo.map((item) => item.element))].map(elementPath),
    ...[...new Set(indexableAniimo.map((item) => item.role))].map(rolePath),
    ...[...new Set(indexableAniimo.map((item) => item.stage))].map(stagePath),
    ...[...new Set(indexableAniimo.map((item) => item.status))].map(statusPath),
    ...beginnerTopics.map(beginnerTopicPath),
    ...downloadTopics.map(downloadTopicPath),
    ...codeRewardTopics.map(codeRewardTopicPath),
    ...regions.map(locationTopicPath),
    ...choiceTopics.map(choiceTopicPath),
    ...officialPitchTopics.map(officialPitchTopicPath),
    ...socialIntentTopics.map(socialIntentTopicPath),
    ...searchSuggestionTopics.filter((topic) => !noindexRoutes.includes(searchSuggestionTopicPath(topic))).map(searchSuggestionTopicPath),
    ...glossaryTopics.map(glossaryTopicPath),
    ...troubleshootingTopics.map(troubleshootingTopicPath),
    ...mechanicDeepDiveTopics.map(mechanicDeepDiveTopicPath),
    ...mediaDetailTopics.map(mediaDetailTopicPath),
    ...conversionTopics.map(conversionTopicPath),
    ...freshnessPages.map(freshnessPagePath),
    ...localizedTopics.map(localizedTopicPath),
    ...indexableAniimo.map(aniimoPath),
    ...indexableAniimo.filter((item) => ["emberpup", "inferlupa", "glacy", "celestis", "eklue", "skippy", "susuta"].includes(item.id)).map((item) => localizedAniimoPath(item)),
    ...regions.map(regionPath),
  ]);
}

export function primarySitemapRoutes() {
  const featuredAniimo = [
    "glacy",
    "inferlupa",
    "fragrancier",
    "wisptis",
    "eklue",
    "skippy",
    "cozite",
    "helgon",
    "emberpup",
    "susuta",
  ];

  return uniqueRoutes([
    "/",
    "/aniimo/",
    "/map/",
    "/guides/",
    "/codes/",
    "/rewards/",
    "/download/",
    "/release-date/",
    "/launch/",
    "/launch-day/",
    "/events/",
    "/weekly-plan/",
    "/site-index/",
    "/mechanics/",
    "/evolution/",
    "/best-aniimo/",
    "/media/",
    "/troubleshooting/",
    ...localizedTopics.map(localizedTopicPath),
    "/platforms/steam/",
    "/platforms/mobile/",
    "/platforms/ps5/",
    "/platforms/xbox/",
    "/platforms/epic-games/",
    "/platforms/ios/",
    "/platforms/android/",
    ...downloadTopics.map(downloadTopicPath),
    ...codeRewardTopics.map(codeRewardTopicPath),
    ...beginnerTopics.map(beginnerTopicPath),
    ...officialPitchTopics.map(officialPitchTopicPath),
    ...socialIntentTopics
      .filter((topic) => ["aniimo-crossplay", "aniimo-cross-save", "aniimo-controller-support", "aniimo-system-requirements", "aniimo-coop", "aniimo-pvp", "aniimo-price", "aniimo-developer", "aniimo-vs-temtem", "games-like-aniimo"].includes(topic.slug))
      .map(socialIntentTopicPath),
    ...searchSuggestionTopics
      .filter((topic) => ["aniimo-apk", "aniimo-torrent", "aniimo-beta-key", "aniimo-official-website", "aniimo-wiki-dex", "aniimo-combat", "aniimo-solo", "aniimo-evolution-list", "aniimo-locations", "aniimo-cross-save", "aniimo-controller-support", "aniimo-system-requirements", "aniimo-vs-temtem", "games-like-aniimo"].includes(topic.slug))
      .map(searchSuggestionTopicPath),
    ...troubleshootingTopics.map(troubleshootingTopicPath),
    ...mechanicDeepDiveTopics.map(mechanicDeepDiveTopicPath),
    ...mediaDetailTopics.filter((topic) => ["aniimo-trailers", "aniimo-logo"].includes(topic.slug)).map(mediaDetailTopicPath),
    ...regions.map(regionPath),
    ...regions.map(locationTopicPath),
    ...featuredAniimo.map((slug) => aniimo.find((item) => item.id === slug)).filter(isIndexableAniimo).map(aniimoPath),
    ...aniimo.filter((item) => localizedFeaturedIds.includes(item.id)).filter(isIndexableAniimo).map((item) => localizedAniimoPath(item)),
  ]).filter((path) => fullSitemapRoutes().includes(path));
}

export function prerenderRoutes() {
  return uniqueRoutes([
    ...fullSitemapRoutes(),
    ...archivedNoindexRoutes,
    ...aniimo.flatMap((item) => (item.aliases || []).map((alias) => normalizePath(`/aniimo/${alias}`))),
  ]);
}

export function pageFaqsForRoute(routeInfo) {
  const topic = topicForRoute(routeInfo);
  if (topic?.faq) return topic.faq;

  if (routeInfo.detail) {
    const detail = routeInfo.detail;
    return [
      [`Where can I find ${detail.name}?`, `${detail.name} is tracked under ${detail.region}. Spawn and route details stay separated from official index facts until verified.`],
      [`How does ${detail.name} evolve?`, detail.evolution],
    ];
  }

  if (routeInfo.path === "/aniimo/") return faqs.database;
  if (routeInfo.path === "/codes/") return faqs.codes;
  if (routeInfo.path === "/download/") return faqs.download;
  return faqs.home;
}

export function structuredDataForRoute(routeInfo, pageFaqs) {
  const url = canonicalUrl(routeInfo.path);
  const base = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aniimo.games",
      url: siteUrl,
      description: "Independent Aniimo wiki and guide site using official public sources and clearly labeled launch verification notes.",
      logo: canonicalAssetUrl("/images/brand/aniimo-logo.webp"),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "editorial support",
        url: `${siteUrl}/contact/`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Aniimo Wiki",
      url: siteUrl,
      publisher: {
        "@type": "Organization",
        name: "Aniimo.games",
        url: siteUrl,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/aniimo/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  if (routeInfo.path !== "/") {
    const breadcrumbs = [
      { name: "Home", item: siteUrl },
      { name: routeInfo.detail?.name || routeInfo.regionDetail?.name || routeInfo.title.replace(" | Aniimo Wiki", ""), item: url },
    ];
    base.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    });
  }

  if (routeInfo.path === "/" || routeInfo.path === "/download/" || routeInfo.path === "/release-date/") {
    base.push({
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: gameInfo.title,
      description: gameInfo.summary,
      genre: gameInfo.genre,
      gamePlatform: platforms.map((platform) => platform.name),
      publisher: gameInfo.publisher,
      url: siteUrl,
      image: canonicalAssetUrl(gameInfo.ogImage),
      datePublished: releaseInfo.pcConsole,
    });
  }

  if (routeInfo.path === "/") {
    base.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: routeInfo.title,
      description: routeInfo.description,
      url,
      dateModified: siteLastUpdated,
      datePublished: "2026-08-27",
      author: {
        ...editorialEntity,
      },
      publisher: {
        "@type": "Organization",
        name: "Aniimo.games",
        url: siteUrl,
      },
    });
  }

  if (routeInfo.path === "/aniimo/") {
    base.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Aniimo Database",
      description: routeInfo.description,
      url,
      mainEntity: {
        "@type": "ItemList",
        name: "Aniimo database",
        itemListElement: aniimo.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: canonicalUrl(aniimoPath(item)),
          name: item.name,
        })),
      },
    });
  }

  if (routeInfo.path === "/map/") {
    base.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Aniimo Map",
      description: routeInfo.description,
      url,
      mainEntity: {
        "@type": "ItemList",
        name: "Aniimo region guide",
        itemListElement: regions.map((region, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: canonicalUrl(regionPath(region)),
          name: region.name,
        })),
      },
    });
  }

  if (routeInfo.detail || routeInfo.regionDetail) {
    const entity = routeInfo.detail || routeInfo.regionDetail;
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: routeInfo.title,
      description: routeInfo.detail ? routeInfo.detail.description : routeInfo.regionDetail.theme,
      image: canonicalAssetUrl(entity.image),
      dateModified: siteLastUpdated,
      datePublished: "2026-08-27",
      author: {
        ...editorialEntity,
      },
      publisher: {
        "@type": "Organization",
        name: "Aniimo.games",
      },
      mainEntityOfPage: url,
    });
  }

  const topic = topicForRoute(routeInfo);
  if (topic) {
    if (pageFaqs?.length && !routeInfo.detail && !routeInfo.regionDetail) {
      base.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: pageFaqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      });
    }
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: routeInfo.title,
      description: routeInfo.description,
      image: canonicalAssetUrl(topic.image || gameInfo.ogImage),
      dateModified: siteLastUpdated,
      datePublished: "2026-08-27",
      author: {
        ...editorialEntity,
      },
      publisher: {
        "@type": "Organization",
        name: "Aniimo.games",
      },
      mainEntityOfPage: url,
    });
  }

  return base;
}

function topicForRoute(routeInfo) {
  return routeInfo.beginnerTopic
    || routeInfo.downloadTopic
    || routeInfo.codeRewardTopic
    || routeInfo.newsTopic
    || routeInfo.choiceTopic
    || routeInfo.officialPitchTopic
    || routeInfo.socialIntentTopic
    || routeInfo.searchSuggestionTopic
    || routeInfo.glossaryTopic
    || routeInfo.troubleshootingTopic
    || routeInfo.mechanicDeepDiveTopic
    || routeInfo.mediaDetailTopic
    || routeInfo.conversionTopic
    || routeInfo.refreshPlanningTopic
    || routeInfo.freshnessPage
    || routeInfo.localizedTopic;
}

function canonicalAssetUrl(path) {
  return path?.startsWith("http") ? path : `${siteUrl}${path}`;
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function findBySlug(values, slug) {
  return values.find((value) => slugify(value) === slug);
}

function uniqueRoutes(routes) {
  return [...new Set(routes.map(normalizePath))];
}
