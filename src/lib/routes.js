import { aniimo, beginnerTopics, choiceTopics, codeRewardTopics, conversionTopics, downloadTopics, faqs, freshnessPages, gameInfo, glossaryTopics, mechanicDeepDiveTopics, mediaDetailTopics, newsTopics, officialPitchTopics, platforms, refreshPlanningTopics, regions, releaseInfo, searchSuggestionTopics, socialIntentTopics, troubleshootingTopics } from "../../data/content.js";

export const siteUrl = "https://aniimo.games";

export const staticRoutes = [
  {
    path: "/",
    label: "Home",
    title: "Aniimo Wiki, Database & Map Guide",
    description: "Aniimo Wiki with database pages, locations, evolution guides, codes, rewards, download info, and beginner tips.",
    nav: false,
  },
  { path: "/aniimo/", label: "Database", title: "All Aniimo List, Locations & Abilities | Aniimo Wiki", description: "Search every public Aniimo entry by name, element, role, region, stage, abilities and source status." },
  { path: "/map/", label: "Map", title: "Aniimo Map & Region Guide | Spawn Locations", description: "Explore Aniimo regions, representative Aniimo, official scenery, route notes and launch verification status." },
  { path: "/evolution/", label: "Evolution", title: "Aniimo Evolution & Forms Guide", description: "Track Aniimo Lumin, Gamma and Nova stages, evolution lines, form paths and launch update notes." },
  { path: "/codes/", label: "Codes", title: "Aniimo Codes & Rewards", description: "Check active Aniimo codes, launch reward status, pre-registration bonuses and redeem code verification rules." },
  { path: "/rewards/", label: "Rewards", title: "Aniimo Pre-Registration Rewards", description: "Track confirmed Aniimo pre-registration rewards, milestone items, Susuta egg rewards and launch campaign bonuses." },
  { path: "/download/", label: "Download", title: "Aniimo Download, Release Date & Platforms", description: "Find official Aniimo download, wishlist and pre-registration links for PC, console, iOS and Android storefronts." },
  { path: "/release-date/", label: "Release Date", title: "Aniimo Release Date", description: "Track Aniimo global release dates for PC, console and mobile with official timeline notes and launch status." },
  { path: "/beginner-guide/", label: "Guides", title: "Aniimo Beginner Guide", description: "Learn Aniimo basics including catching, Twine, environment encounters, Homeland, RV systems and beginner progression." },
  { path: "/updates/", label: "Updates", title: "Aniimo Updates & Source Log", description: "Follow Aniimo.games update history, official source checks, content freshness notes and launch tracking changes." },
  { path: "/launch-day/", label: "Launch Day", title: "Aniimo Launch Day Server Status, Codes & Fixes", description: "Use the Aniimo launch day command center for server status, official downloads, active codes, unlock timing and common launch fixes." },
  { path: "/launch-tracker/", label: "Launch Tracker", title: "Aniimo Launch Tracker", description: "Track Aniimo launch readiness across platform dates, official rewards, code status, source checks and post-launch verification tasks." },
  { path: "/launch-verification/", label: "Launch Verification", title: "Aniimo Launch Verification Checklist", description: "Prepare Aniimo post-launch verification templates for spawn routes, redeem codes, platform unlock times and Search Console observations." },
  { path: "/sources/", label: "Sources", title: "Aniimo Official Sources", description: "Review official Aniimo sources used for launch dates, platform links, Wiki names, regions, rewards and mechanics." },
  { path: "/site-index/", label: "Site Index", title: "Aniimo.games Site Index", description: "Browse every major Aniimo.games guide hub including database pages, platform pages, region guides, elements, roles and official source pages." },
  { path: "/guides/", label: "Guide Hub", title: "Aniimo Guides Hub", description: "Browse Aniimo beginner guides, official feature guides, mechanics, glossary terms and launch planning pages." },
  { path: "/compare/", label: "Compare", title: "Aniimo Comparisons", description: "Compare Aniimo with common creature-collecting and open-world expectations while keeping official facts clear." },
  { path: "/mechanics/", label: "Mechanics", title: "Aniimo Mechanics Guides", description: "Learn Aniimo mechanics including Twine, Aniipods, Egg Heist, Lost Isles, Homeland and launch verification notes." },
  { path: "/launch/", label: "Launch Hub", title: "Aniimo Launch Hub", description: "Track Aniimo launch countdown, wishlist, pre-registration, safe download, release dates and platform readiness." },
  { path: "/growth/", label: "Growth Plan", title: "Aniimo.games Growth Plan", description: "Review Aniimo.games search refresh plans, GSC query watchlists and future content update workflow." },
  { path: "/glossary/", label: "Glossary", title: "Aniimo Glossary", description: "Learn Aniimo terms such as Pathfinder, Idyll, Twine, Aniipod, Homeland, Prismana and Egg Heist." },
  { path: "/media/", label: "Media", title: "Aniimo Images, Screenshots & Media Gallery", description: "Browse Aniimo.games media assets, official-style banners, region art and image source notes." },
  { path: "/troubleshooting/", label: "Troubleshooting", title: "Aniimo Download & Pre-Registration Troubleshooting", description: "Fix common Aniimo download, store visibility, pre-registration and region availability questions." },
  { path: "/source-archive/", label: "Source Archive", title: "Aniimo Source Archive", description: "Track official Aniimo sources, storefront links, checked dates and which pages each source supports." },
  { path: "/best-aniimo/", label: "Best Aniimo", title: "Best Aniimo to Track Before Launch | Aniimo Wiki", description: "Review useful Aniimo picks to track before launch by role, element, region coverage and official source status." },
  { path: "/platforms/steam/", label: "Steam", title: "Aniimo Steam Download & Wishlist Guide", description: "Find the official Aniimo Steam page, PC launch date, wishlist notes and safe download guidance." },
  { path: "/platforms/mobile/", label: "Mobile", title: "Aniimo Mobile Download, App Store & Google Play Guide", description: "Track Aniimo mobile release timing, App Store and Google Play links, pre-registration notes and device guidance." },
  { path: "/platforms/ps5/", label: "PS5", title: "Aniimo PS5 Download & Wishlist Guide", description: "Track Aniimo PlayStation 5 launch timing, official wishlist source, console release notes and safe download guidance." },
  { path: "/platforms/xbox/", label: "Xbox", title: "Aniimo Xbox Download & Wishlist Guide", description: "Track Aniimo Xbox launch timing, official Microsoft Store source, console release notes and safe download guidance." },
  { path: "/platforms/epic-games/", label: "Epic Games", title: "Aniimo Epic Games Store Download Guide", description: "Find the official Aniimo Epic Games Store page, PC launch date, wishlist notes and safe installer guidance." },
  { path: "/platforms/ios/", label: "iOS", title: "Aniimo iOS Download & App Store Guide", description: "Track Aniimo iOS launch timing, App Store availability, pre-order status and official mobile download guidance." },
  { path: "/platforms/android/", label: "Android", title: "Aniimo Android Download & Google Play Guide", description: "Track Aniimo Android launch timing, Google Play pre-registration, store availability and safe APK guidance." },
  { path: "/rewards/pre-registration/", label: "Pre-Registration", title: "Aniimo Pre-Registration Rewards Guide", description: "Track official Aniimo pre-registration rewards, milestone items, Susuta egg notes and claim status." },
  { path: "/about/", label: "About", title: "About Aniimo.games", description: "Learn what Aniimo.games covers, how the independent guide site uses official public Aniimo sources and how content is maintained." },
  { path: "/editorial-policy/", label: "Editorial Policy", title: "Aniimo.games Editorial Policy", description: "Review Aniimo.games source policy, verification labels, update workflow and correction standards." },
  { path: "/contact/", label: "Contact", title: "Contact Aniimo.games", description: "Contact Aniimo.games about corrections, missing Aniimo data, source updates, image issues and site feedback." },
];

const primaryNavPaths = ["/aniimo/", "/map/", "/guides/", "/mechanics/", "/launch/", "/codes/", "/site-index/"];

export const navRoutes = primaryNavPaths
  .map((path) => staticRoutes.find((item) => item.path === path))
  .filter(Boolean);

export function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function aniimoPath(item) {
  return normalizePath(`/aniimo/${item.id}`);
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
  const aniimoMatch = normalized.match(/^\/aniimo\/([^/]+)\//);
  if (aniimoMatch) {
    const detail = findAniimoBySlug(aniimoMatch[1]);
    if (detail) {
      return {
        type: "aniimo",
        path: aniimoPath(detail),
        title: `${detail.name} Location, Evolution, Forms & Abilities | Aniimo Wiki`,
        description: `Find ${detail.name} location, element, region, forms, evolution notes, ability, official description, and source status in the Aniimo Wiki.`,
        detail,
      };
    }
  }

  const regionMatch = normalized.match(/^\/regions\/([^/]+)\//);
  if (regionMatch) {
    const regionDetail = findRegionBySlug(regionMatch[1]);
    if (regionDetail) {
      return {
        type: "region",
        path: regionPath(regionDetail),
        title: `${regionDetail.name} Aniimo Locations & Route Guide`,
        description: `${regionDetail.name} route guide with official region art, representative Aniimo, mechanics and verification notes.`,
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

  const staticRoute = staticRoutes.find((item) => item.path === normalized);
  if (staticRoute) return { type: "static", ...staticRoute };

  return {
    type: "not-found",
    path: "/",
    title: "Aniimo Wiki, Database & Map Guide",
    description: gameInfo.summary,
  };
}

export function sitemapRoutes() {
  return uniqueRoutes([
    ...staticRoutes.map((item) => item.path),
    ...[...new Set(aniimo.map((item) => item.element))].map(elementPath),
    ...[...new Set(aniimo.map((item) => item.role))].map(rolePath),
    ...[...new Set(aniimo.map((item) => item.stage))].map(stagePath),
    ...[...new Set(aniimo.map((item) => item.status))].map(statusPath),
    ...beginnerTopics.map(beginnerTopicPath),
    ...downloadTopics.map(downloadTopicPath),
    ...codeRewardTopics.map(codeRewardTopicPath),
    ...newsTopics.map(newsTopicPath),
    ...regions.map(locationTopicPath),
    ...choiceTopics.map(choiceTopicPath),
    ...officialPitchTopics.map(officialPitchTopicPath),
    ...socialIntentTopics.map(socialIntentTopicPath),
    ...searchSuggestionTopics.map(searchSuggestionTopicPath),
    ...glossaryTopics.map(glossaryTopicPath),
    ...troubleshootingTopics.map(troubleshootingTopicPath),
    ...mechanicDeepDiveTopics.map(mechanicDeepDiveTopicPath),
    ...mediaDetailTopics.map(mediaDetailTopicPath),
    ...conversionTopics.map(conversionTopicPath),
    ...refreshPlanningTopics.map(refreshPlanningTopicPath),
    ...freshnessPages.map(freshnessPagePath),
    ...aniimo.map(aniimoPath),
    ...regions.map(regionPath),
  ]);
}

export function prerenderRoutes() {
  return uniqueRoutes([
    ...sitemapRoutes().filter((path) => path !== "/"),
    ...aniimo.flatMap((item) => (item.aliases || []).map((alias) => normalizePath(`/aniimo/${alias}`))),
  ]);
}

export function pageFaqsForRoute(routeInfo) {
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
  const breadcrumbs = [
    { name: "Home", item: siteUrl },
    ...(routeInfo.path !== "/" ? [{ name: routeInfo.detail?.name || routeInfo.regionDetail?.name || routeInfo.title.replace(" | Aniimo Wiki", ""), item: url }] : []),
  ];

  const base = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Aniimo Wiki",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/aniimo/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    },
  ];

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

  if (routeInfo.path === "/aniimo/") {
    base.push(itemList("Aniimo database", aniimo.map((item) => [item.name, canonicalUrl(aniimoPath(item))])));
  }

  if (routeInfo.path === "/map/") {
    base.push(itemList("Aniimo region guide", regions.map((region) => [region.name, canonicalUrl(regionPath(region))])));
  }

  if (routeInfo.detail || routeInfo.regionDetail) {
    const entity = routeInfo.detail || routeInfo.regionDetail;
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: routeInfo.title,
      description: routeInfo.detail ? routeInfo.detail.description : routeInfo.regionDetail.theme,
      image: canonicalAssetUrl(entity.image),
      dateModified: "2026-08-28",
      author: {
        "@type": "Organization",
        name: "Aniimo.games",
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

function itemList(name, entries) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: entries.map(([entryName, url], index) => ({
      "@type": "ListItem",
      position: index + 1,
      url,
      name: entryName,
    })),
  };
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
