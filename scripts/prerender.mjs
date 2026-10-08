import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { aniimo, gameInfo, launchPriorityPages, launchRewards, releaseInfo, regions, siteLastUpdated, sourceLastChecked } from "../data/content.js";
import { aniimoPath, canonicalUrl, isIndexableAniimo, isNoindexRoute, pageFaqsForRoute, prerenderRoutes, resolveRoute, structuredDataForRoute } from "../src/lib/routes.js";
import { localeForPath } from "../data/locales/index.js";

const indexHtml = "dist/index.html";
const indexTemplate = readFileSync(indexHtml, "utf8");
// Alias URLs are handled by host-level redirects and should not get indexable HTML.
const routes = prerenderRoutes().filter((route) => !["/aniimo/dreaple", "/aniimo/nimbi", "/aniimo/turbo"].includes(route));
const priorityAniimoIds = ["celestis", "inferlupa", "glacy", "susuta", "emberpup", "eklue", "skippy"];

function injectMeta(html, route) {
  const routeInfo = resolveRoute(route);
  const lang = localeForPath(route);
  if (routeInfo.type === "freshness-page-redirect" || routeInfo.type === "localized-legacy") {
    return html
      .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(routeInfo.title)}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]+"\s*\/>/, `<meta name="description" content="${escapeHtml(routeInfo.description)}" />`)
      .replace(/<link\s+rel="canonical"\s+href="[^"]+"\s*\/>/, `<link rel="canonical" href="${canonicalUrl(routeInfo.redirectTo)}" />`)
      .replace("</head>", `<meta http-equiv="refresh" content="0;url=${routeInfo.redirectTo}"><link rel="alternate" hreflang="en" href="${canonicalUrl("/")}"><link rel="alternate" hreflang="pt-BR" href="${canonicalUrl(routeInfo.redirectTo)}"></head>`)
      .replace('<div id="root"></div>', `<div id="root"><main><h1>${escapeHtml(routeInfo.title)}</h1><p>This page has moved to <a href="${routeInfo.redirectTo}">${escapeHtml(routeInfo.redirectTo)}</a>.</p></main></div>`);
  }
  const title = routeInfo.title;
  const desc = routeInfo.description;
  const url = canonicalUrl(routeInfo.type === "not-found" ? route : routeInfo.path);
  const isThinAniimoDetail = routeInfo.detail && !isIndexableAniimo(routeInfo.detail);
  if (isThinAniimoDetail) {
    return html
      .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(routeInfo.detail.name)} Entry Not Yet Published | Aniimo.games</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]+"\s*\/>/, `<meta name="description" content="${escapeHtml(`${routeInfo.detail.name} is listed in the Aniimo.games database while its core game data is being verified.`)}" />`)
      .replace(/<meta\s+name="robots"\s+content="[^"]+"\s*\/>/, `<meta name="robots" content="noindex,follow" />`)
      .replace('<div id="root"></div>', `<div id="root"><main class="prerender-fallback"><h1>${escapeHtml(routeInfo.detail.name)} entry is being verified</h1><p>This official-name entry remains available in the Aniimo database, but its element, role, stage, region and gameplay details are not yet sufficiently verified for a standalone guide.</p><p><a href="/aniimo/">Browse the verified Aniimo database</a> | <a href="/sources/">Review sources</a></p></main></div>`);
  }
  const fallback = fallbackHtml(routeInfo);
  // JSON-LD is raw JSON inside a script element; HTML entity escaping makes it invalid JSON.
  const structuredData = JSON.stringify(structuredDataForRoute(routeInfo, pageFaqsForRoute(routeInfo)))
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026");
  const englishAlternate = routeInfo.type === "localized-aniimo" ? canonicalUrl(aniimoPath(routeInfo.detail)) : canonicalUrl(lang === "pt-BR" ? "/" : routeInfo.path);
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]+"\s*\/?\s*>/g, "");
  return html
    .replace(/<html lang="[^"]+">/, `<html lang="${lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]+"\s*\/>/, `<meta name="description" content="${escapeHtml(desc)}" />`)
    .replace(/<meta\s+name="robots"\s+content="[^"]+"\s*\/>/, `<meta name="robots" content="${routeInfo.type === "not-found" || isNoindexRoute(routeInfo.path) ? "noindex,follow" : "index,follow"}" />`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]+"\s*\/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]+"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]+"\s*\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]+"\s*\/>/, `<meta property="og:description" content="${escapeHtml(desc)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`)
    .replace("</head>", `<link rel="alternate" hreflang="${lang === "pt-BR" ? "pt-BR" : "en"}" href="${url}"><link rel="alternate" hreflang="en" href="${englishAlternate}"><link rel="alternate" hreflang="x-default" href="${englishAlternate}"><script type="application/ld+json">${structuredData}</script></head>`);
}

function escapeHtml(value) {
  return String(value || "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function fallbackHtml(routeInfo) {
  const links = fallbackLinks(routeInfo)
    .map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`)
    .join("");

  return `<main class="prerender-fallback">
    <h1>${escapeHtml(routeInfo.title)}</h1>
    <p>${escapeHtml(routeInfo.description)}</p>
    <nav aria-label="Important Aniimo pages"><ul>${links}</ul></nav>
    ${fallbackBody(routeInfo)}
  </main>`;
}

function fallbackBody(routeInfo) {
  if (routeInfo.path === "/") {
    const priorityLinks = launchPriorityPages.slice(0, 6)
      .map(([href, label, query, action]) => `<li><a href="${href}">${escapeHtml(label)}</a>: ${escapeHtml(query)}. ${escapeHtml(action)}</li>`)
      .join("");
    const rewards = launchRewards.slice(0, 4)
      .map((item) => `<li><strong>${escapeHtml(item.title)}:</strong> ${escapeHtml(item.reward)}</li>`)
      .join("");
    return `<section><h2>What is Aniimo?</h2><p>${escapeHtml(gameInfo.summary)}</p><p>Official public information lists PC and console launch for ${escapeHtml(releaseInfo.pcConsole)} and mobile launch for ${escapeHtml(releaseInfo.mobile)}. Exact unlock times, active redeem codes, live server incidents and route coordinates remain clearly labeled until official or in-game verification confirms them.</p></section><section><h2>Launch Information</h2><p>Aniimo.games tracks official download links, release dates, rewards, codes, server status, map regions and Aniimo database entries. Last source check: ${escapeHtml(sourceLastChecked)}. Last site update: ${escapeHtml(siteLastUpdated)}.</p><ul>${priorityLinks}</ul></section><section><h2>Confirmed Rewards</h2><ul>${rewards}</ul></section><section><h2>Editorial Policy</h2><p>Aniimo.games is an independent guide site. Official Aniimo, publisher, storefront and Wiki sources are preferred; community reports are treated as research leads until they can be verified.</p><p><a href="/about/">About Aniimo.games</a> | <a href="/editorial-policy/">Editorial policy</a> | <a href="/contact/">Contact</a> | <a href="/sources/">Official sources</a> | <a href="/privacy-policy/">Privacy</a></p></section>`;
  }

  if (routeInfo.path === "/aniimo/") {
    const entries = priorityAniimo();
    return `<section><h2>Popular Aniimo To Check First</h2>${entries.map((item) => `<article><h3><a href="/aniimo/${item.id}/">${escapeHtml(item.name)}</a></h3><p>${escapeHtml(item.description)}</p><p>${escapeHtml([item.no, item.element, item.role, item.stage, item.region].join(" | "))}</p></article>`).join("")}</section>`;
  }

  if (routeInfo.choiceTopic) {
    const topic = routeInfo.choiceTopic;
    const picks = aniimo.filter(isIndexableAniimo).slice(0, 8);
    return `<section><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.description)}</p><p>These selections are planning aids based on currently sourced taxonomy. They are not final combat rankings; player experience, patches and team composition can change value.</p><section><h2>How to compare a choice</h2><ol><li>Check the role, element, stage and region shown for each entry.</li><li>Compare official descriptions and verified mechanics before building a team.</li><li>Use live-game evidence for damage, PvP, route speed or tier claims.</li></ol></section><section><h2>Verified entries to review</h2>${picks.map((item) => `<article><h3><a href="/aniimo/${item.id}/">${escapeHtml(item.name)}</a></h3><p>${escapeHtml(`${item.element} ${item.role}, ${item.stage}, associated with ${item.region}.`)}</p><p>${escapeHtml(item.description)}</p></article>`).join("")}</section></section>`;
  }

  if (routeInfo.beginnerTopic || routeInfo.downloadTopic || routeInfo.codeRewardTopic || routeInfo.newsTopic || routeInfo.officialPitchTopic || routeInfo.socialIntentTopic || routeInfo.searchSuggestionTopic || routeInfo.glossaryTopic || routeInfo.troubleshootingTopic || routeInfo.mechanicDeepDiveTopic || routeInfo.mediaDetailTopic || routeInfo.conversionTopic || routeInfo.refreshPlanningTopic || routeInfo.freshnessPage || routeInfo.localizedTopic) {
    const topic = routeInfo.beginnerTopic || routeInfo.downloadTopic || routeInfo.codeRewardTopic || routeInfo.newsTopic || routeInfo.officialPitchTopic || routeInfo.socialIntentTopic || routeInfo.searchSuggestionTopic || routeInfo.glossaryTopic || routeInfo.troubleshootingTopic || routeInfo.mechanicDeepDiveTopic || routeInfo.mediaDetailTopic || routeInfo.conversionTopic || routeInfo.refreshPlanningTopic || routeInfo.freshnessPage || routeInfo.localizedTopic;
    const points = topic.points?.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("") || "";
    const faq = topic.faq?.map(([question, answer]) => `<article><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></article>`).join("") || "";
    return `<section><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.intro || topic.description || "")}</p>${points}${faq}<section><h2>Source and update standard</h2><p>Aniimo.games links readers to official Aniimo, publisher and storefront information where available. Claims about availability, rewards, codes, routes and live gameplay are updated only when the current source supports them.</p><p>Last source review: ${escapeHtml(sourceLastChecked)}. Check the linked official source before acting on time-sensitive information.</p></section></section>`;
  }

  if (routeInfo.detail) {
    const item = routeInfo.detail;
    return `<section><h2>${escapeHtml(item.name)} at a glance</h2><p>${escapeHtml(item.description)}</p><dl><dt>Official index number</dt><dd>${escapeHtml(item.no)}</dd><dt>Element</dt><dd>${escapeHtml(item.element)}</dd><dt>Role</dt><dd>${escapeHtml(item.role)}</dd><dt>Stage</dt><dd>${escapeHtml(item.stage)}</dd><dt>Region</dt><dd>${escapeHtml(item.region)}</dd></dl><section><h2>Location and acquisition</h2><p>${escapeHtml(item.locationNote)}</p><p>${escapeHtml(item.acquisition)}</p><p>Region association is a starting point, not a precise spawn coordinate. Check current in-game conditions and the official source before relying on a route.</p></section><section><h2>Forms, abilities and team use</h2><p>${escapeHtml(item.evolution)}</p><p>${escapeHtml(item.ability)}</p><p>${escapeHtml(item.abilityUseCase)}</p><p>${escapeHtml(item.use)}</p></section><section><h2>Source and verification boundary</h2><p>${escapeHtml(item.sourceNote)}</p><p>Last reviewed: ${escapeHtml(sourceLastChecked)}. This entry is maintained from the official Aniimo Wiki and linked official sources; exact route, timing and balance claims are updated only after sufficient evidence is available.</p></section>`;
  }

  if (routeInfo.path === "/map/") {
    return `<section><h2>Aniimo region map and route planning</h2><p>The map hub is a route-planning starting point, not a list of guaranteed spawn coordinates. Choose a region, confirm the current game version, and use the region guide to separate official information from live encounter checks.</p>${regions.map((region) => `<article><h3><a href="/regions/${region.id}/">${escapeHtml(region.name)}</a></h3><p>${escapeHtml(region.description)}</p><p>${escapeHtml(region.theme)}</p><p>Check: ${escapeHtml(region.checklist.slice(0, 2).join(" "))}</p></article>`).join("")}<section><h2>How to use a location guide</h2><ol><li>Start from the region associated with the Aniimo or activity you want to find.</li><li>Review weather, time, server and version details in the live client before following a route.</li><li>Use official sources and reproducible gameplay evidence for exact encounter claims.</li></ol></section>`;
  }

  if (routeInfo.regionDetail) {
    const region = routeInfo.regionDetail;
    const routes = region.map?.practicalNotes || ["Check your server and game version before travelling.", "Confirm conditions in the current game client.", "Treat community markers as planning aids until you verify the encounter."];
    return `<section><h2>${escapeHtml(region.name)} route overview</h2><p>${escapeHtml(region.description)}</p><p>${escapeHtml(region.theme)}</p><section><h2>What to check before travelling</h2><ul>${region.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section><section><h2>Known Aniimo associations</h2><p>${escapeHtml(region.aniimo.join(", "))}</p><p>These are source-labeled region associations. Exact coordinates, conditions and encounter timing require current in-game or official confirmation.</p></section><section><h2>Practical route method</h2><ol>${routes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol><p>When a route changes, Aniimo.games updates the region guide rather than copying unverified markers across creature pages. Last source review: ${escapeHtml(sourceLastChecked)}.</p></section>`;
  }

  if (["element", "role", "stage", "status"].includes(routeInfo.type)) {
    const key = routeInfo.type;
    const value = routeInfo[key];
    const entries = aniimo.filter(isIndexableAniimo).filter((item) => item[key].toLowerCase() === value.toLowerCase());
    return `<section><h2>${escapeHtml(routeInfo.title.replace(" | Aniimo Wiki", ""))}</h2><p>${escapeHtml(routeInfo.description)}</p><p>This curated collection contains entries with verified core taxonomy, rather than name-only records still awaiting confirmation.</p><div>${entries.map((item) => `<article><h3><a href="/aniimo/${item.id}/">${escapeHtml(item.name)}</a></h3><p>${escapeHtml(item.description)}</p><p>${escapeHtml(`${item.element} | ${item.role} | ${item.stage} | ${item.region}`)}</p></article>`).join("")}</div></section>`;
  }

  if (routeInfo.path === "/aniimo/") {
    const entries = priorityAniimo();
    return `<section><h2>Verified Aniimo database</h2><p>Browse entries with sourced element, role, stage and region details. Name-only Official Wiki records remain visible in the interactive database, but do not receive standalone guide pages until their core fields are verified.</p>${entries.map((item) => `<article><h3><a href="/aniimo/${item.id}/">${escapeHtml(item.name)}</a></h3><p>${escapeHtml(item.description)}</p><p>${escapeHtml(`${item.no} | ${item.element} | ${item.role} | ${item.stage} | ${item.region}`)}</p></article>`).join("")}</section>`;
  }

  if (routeInfo.path === "/guides/") {
    return `<section><h2>Aniimo guides for practical player questions</h2><p>Use this hub for catching, Twine, progression, map planning, platform setup and troubleshooting. Each guide links to the official source where that source is available and identifies details that still need current-client confirmation.</p><section><h2>Start with the player task</h2><ul><li><a href="/beginner-guide/">Beginner guide</a>: learn the public systems and early planning questions.</li><li><a href="/mechanics/">Mechanics</a>: understand Twine, Homeland, Egg Heist and related terms.</li><li><a href="/map/">Map and regions</a>: plan a region route without treating a guide as a fixed spawn-coordinate list.</li><li><a href="/troubleshooting/">Troubleshooting</a>: resolve store, account, availability and update questions safely.</li></ul></section><section><h2>Editorial standard</h2><p>Guides are updated from official Aniimo and storefront sources. Community information is not presented as a confirmed game fact until it is reproducible or supported by an official source.</p></section></section>`;
  }

  return staticFallback(routeInfo);
}

function staticFallback(routeInfo) {
  const route = routeInfo.path;
  const related = fallbackLinks(routeInfo).slice(0, 7).map(([href, label]) => `<li><a href="${href}">${escapeHtml(label)}</a></li>`).join("");
  const body = {
    "/about/": "Aniimo.games is maintained as an independent player guide. It organizes public official sources, separates known information from verification-pending details, and updates material when a source changes.",
    "/editorial-policy/": "The editorial policy prioritizes official Aniimo, publisher, storefront and Wiki material. Community reports are research leads only; an entry is not treated as confirmed until its supporting evidence is reviewed.",
    "/contact/": "Use the contact route for corrections, missing source links, factual errors and feedback. Include the affected page and a source where possible so the editorial review can reproduce the issue.",
    "/privacy-policy/": "Aniimo.games explains its use of advertising services, cookies and third-party links in the privacy policy. The site does not require player accounts to browse its guides.",
    "/sources/": "Every guide should point readers toward the official Aniimo website, official Wiki, publisher announcements or verified storefronts. Source labels identify what a claim supports and when it was last checked.",
    "/guides/": "Use the guide hub to move from beginner systems to verified mechanics, maps and troubleshooting. Each guide is organized around a player task and identifies where live-game confirmation remains necessary.",
    "/mechanics/": "Mechanics pages explain public Aniimo systems such as catching, Twine, Homeland and Egg Heist while separating confirmed descriptions from unverified performance or route claims.",
    "/launch/": "The launch hub collects practical platform, download, rewards, codes and support paths. It directs users to official storefronts and avoids unsafe mirrors, modified clients and unverified account offers.",
    "/download/": "Download guidance links to official PC, console and mobile storefronts. Availability can vary by region and device, so players should confirm the publisher and current store listing before installation.",
    "/codes/": "Redeem-code guidance distinguishes official campaign rewards from live code strings. A code is published only when an official source or current in-game redemption flow confirms it.",
    "/troubleshooting/": "Troubleshooting starts with official store availability, account, region and server checks. It does not recommend unofficial files, account purchases or modified clients as fixes.",
    "/site-index/": "The site index groups database, map, guide, platform and source pages so players can find a relevant task without searching through duplicate or speculative landing pages.",
  }[route] || routeInfo.description;
  return `<section><h2>${escapeHtml(routeInfo.title.replace(" | Aniimo Wiki", ""))}</h2><p>${escapeHtml(body)}</p><p>${escapeHtml(routeInfo.description)}</p><section><h2>How this guide is maintained</h2><p>Aniimo.games reviews official sources and records a verification boundary when current evidence does not support a specific gameplay, route or balance claim. Last source review: ${escapeHtml(sourceLastChecked)}.</p></section><section><h2>Related player guides</h2><ul>${related}</ul></section></section>`;
}

function priorityAniimo() {
  return [
    ...priorityAniimoIds.map((id) => aniimo.find((item) => item.id === id)).filter(isIndexableAniimo),
    ...aniimo.filter(isIndexableAniimo),
  ].filter((item, index, list) => list.findIndex((candidate) => candidate.id === item.id) === index).slice(0, 36);
}

function fallbackLinks(routeInfo) {
  const base = [
    ["/", "Aniimo Wiki"],
    ["/aniimo/", "Aniimo Database"],
    ["/map/", "Aniimo Map"],
    ["/guides/", "Aniimo Guides"],
    ["/codes/", "Aniimo Codes"],
    ["/download/", "Aniimo Download"],
    ["/release-date/", "Aniimo Release Date"],
    ["/launch/", "Aniimo Launch Hub"],
    ["/topics/aniimo-discord/", "Aniimo Discord"],
    ["/pt-br/aniimo-pre-registro/", "Aniimo Pre Registro"],
    ["/topics/aniimo-wiki-dex/", "Aniimo Wiki Dex"],
  ];

  if (routeInfo.detail) return [["/aniimo/", "All Aniimo"], ...base.slice(2)];
  return base.filter(([href]) => href !== routeInfo.path);
}

for (const route of routes) {
  const target = route === "/" ? indexHtml : join("dist", route, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, injectMeta(indexTemplate, route));
}

console.log(`Prerendered ${routes.length} routes.`);
