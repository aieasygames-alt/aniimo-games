import { aniimo, faqs, gameInfo, platforms, regions, releaseInfo } from "../../data/content.js";

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
  { path: "/sources/", label: "Sources", title: "Aniimo Official Sources", description: "Review official Aniimo sources used for launch dates, platform links, Wiki names, regions, rewards and mechanics." },
  { path: "/best-aniimo/", label: "Best Aniimo", title: "Best Aniimo to Track Before Launch | Aniimo Wiki", description: "Review useful Aniimo picks to track before launch by role, element, region coverage and official source status." },
  { path: "/platforms/steam/", label: "Steam", title: "Aniimo Steam Download & Wishlist Guide", description: "Find the official Aniimo Steam page, PC launch date, wishlist notes and safe download guidance." },
  { path: "/platforms/mobile/", label: "Mobile", title: "Aniimo Mobile Download, App Store & Google Play Guide", description: "Track Aniimo mobile release timing, App Store and Google Play links, pre-registration notes and device guidance." },
  { path: "/rewards/pre-registration/", label: "Pre-Registration", title: "Aniimo Pre-Registration Rewards Guide", description: "Track official Aniimo pre-registration rewards, milestone items, Susuta egg notes and claim status." },
  { path: "/about/", label: "About", title: "About Aniimo.games", description: "Learn what Aniimo.games covers, how the independent guide site uses official public Aniimo sources and how content is maintained." },
  { path: "/editorial-policy/", label: "Editorial Policy", title: "Aniimo.games Editorial Policy", description: "Review Aniimo.games source policy, verification labels, update workflow and correction standards." },
  { path: "/contact/", label: "Contact", title: "Contact Aniimo.games", description: "Contact Aniimo.games about corrections, missing Aniimo data, source updates, image issues and site feedback." },
];

export const navRoutes = staticRoutes.filter((item) => item.nav !== false && !["/release-date/", "/best-aniimo/", "/platforms/steam/", "/platforms/mobile/", "/rewards/pre-registration/", "/about/", "/editorial-policy/", "/contact/"].includes(item.path));

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
  return [
    ...staticRoutes.map((item) => item.path),
    ...[...new Set(aniimo.map((item) => item.element))].map(elementPath),
    ...[...new Set(aniimo.map((item) => item.role))].map(rolePath),
    ...aniimo.map(aniimoPath),
    ...regions.map(regionPath),
  ];
}

export function prerenderRoutes() {
  return [
    ...sitemapRoutes().filter((path) => path !== "/"),
    ...aniimo.flatMap((item) => (item.aliases || []).map((alias) => normalizePath(`/aniimo/${alias}`))),
  ];
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
