import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { aniimo, gameInfo, launchPriorityPages, launchRewards, releaseInfo, regions, siteLastUpdated, sourceLastChecked } from "../data/content.js";
import { canonicalUrl, pageFaqsForRoute, prerenderRoutes, resolveRoute, structuredDataForRoute } from "../src/lib/routes.js";

const indexHtml = "dist/index.html";
const indexTemplate = readFileSync(indexHtml, "utf8");
const routes = prerenderRoutes();
const priorityAniimoIds = ["celestis", "inferlupa", "glacy", "susuta", "emberpup", "eklue", "skippy", "helgon"];

function injectMeta(html, route) {
  const routeInfo = resolveRoute(route);
  const title = routeInfo.title;
  const desc = routeInfo.description;
  const url = canonicalUrl(routeInfo.path);
  const fallback = fallbackHtml(routeInfo);
  // JSON-LD is raw JSON inside a script element; HTML entity escaping makes it invalid JSON.
  const structuredData = JSON.stringify(structuredDataForRoute(routeInfo, pageFaqsForRoute(routeInfo)))
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026");
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]+"\s*\/>/, `<meta name="description" content="${escapeHtml(desc)}" />`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]+"\s*\/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]+"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]+"\s*\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]+"\s*\/>/, `<meta property="og:description" content="${escapeHtml(desc)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`)
    .replace("</head>", `<script type="application/ld+json">${structuredData}</script></head>`);
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
    return `<section><h2>What is Aniimo?</h2><p>${escapeHtml(gameInfo.summary)}</p><p>Official public information lists PC and console launch for ${escapeHtml(releaseInfo.pcConsole)} and mobile launch for ${escapeHtml(releaseInfo.mobile)}. Exact unlock times, active redeem codes, live server incidents and route coordinates remain clearly labeled until official or in-game verification confirms them.</p></section><section><h2>Launch Information</h2><p>Aniimo.games tracks official download links, release dates, rewards, codes, server status, map regions and Aniimo database entries. Last source check: ${escapeHtml(sourceLastChecked)}. Last site update: ${escapeHtml(siteLastUpdated)}.</p><ul>${priorityLinks}</ul></section><section><h2>Confirmed Rewards</h2><ul>${rewards}</ul></section><section><h2>Editorial Policy</h2><p>Aniimo.games is an independent guide site. Official Aniimo, publisher, storefront and Wiki sources are preferred; community reports are treated as research leads until they can be verified.</p><p><a href="/about/">About Aniimo.games</a> | <a href="/editorial-policy/">Editorial policy</a> | <a href="/contact/">Contact</a> | <a href="/sources/">Official sources</a></p></section>`;
  }

  if (routeInfo.path === "/aniimo/") {
    const entries = priorityAniimo();
    return `<section><h2>Popular Aniimo To Check First</h2>${entries.map((item) => `<article><h3><a href="/aniimo/${item.id}/">${escapeHtml(item.name)}</a></h3><p>${escapeHtml(item.description)}</p><p>${escapeHtml([item.no, item.element, item.role, item.stage, item.region].join(" | "))}</p></article>`).join("")}</section>`;
  }

  if (routeInfo.beginnerTopic || routeInfo.downloadTopic || routeInfo.codeRewardTopic || routeInfo.newsTopic || routeInfo.choiceTopic || routeInfo.officialPitchTopic || routeInfo.socialIntentTopic || routeInfo.searchSuggestionTopic || routeInfo.glossaryTopic || routeInfo.troubleshootingTopic || routeInfo.mechanicDeepDiveTopic || routeInfo.mediaDetailTopic || routeInfo.conversionTopic || routeInfo.refreshPlanningTopic || routeInfo.freshnessPage || routeInfo.localizedTopic) {
    const topic = routeInfo.beginnerTopic || routeInfo.downloadTopic || routeInfo.codeRewardTopic || routeInfo.newsTopic || routeInfo.choiceTopic || routeInfo.officialPitchTopic || routeInfo.socialIntentTopic || routeInfo.searchSuggestionTopic || routeInfo.glossaryTopic || routeInfo.troubleshootingTopic || routeInfo.mechanicDeepDiveTopic || routeInfo.mediaDetailTopic || routeInfo.conversionTopic || routeInfo.refreshPlanningTopic || routeInfo.freshnessPage || routeInfo.localizedTopic;
    const points = topic.points?.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("") || "";
    const faq = topic.faq?.map(([question, answer]) => `<article><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></article>`).join("") || "";
    return `<section><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.intro || topic.description || "")}</p>${points}${faq}</section>`;
  }

  if (routeInfo.path === "/guides/") {
    return `<section><h2>Aniimo Guides Hub</h2><p>Browse Aniimo beginner guides, official feature guides, mechanics, glossary terms and launch planning pages.</p></section>`;
  }

  if (routeInfo.detail) {
    const item = routeInfo.detail;
    return `<section><h2>${escapeHtml(item.name)} Details</h2><p>${escapeHtml(item.description)}</p><p>${escapeHtml(`No. ${item.no} | ${item.element} | ${item.role} | ${item.stage} | ${item.region}`)}</p><p>${escapeHtml(item.evolution)}</p></section>`;
  }

  if (routeInfo.path === "/map/") {
    return `<section><h2>Aniimo Regions</h2>${regions.map((region) => `<article><h3><a href="/regions/${region.id}/">${escapeHtml(region.name)}</a></h3><p>${escapeHtml(region.description)}</p></article>`).join("")}</section>`;
  }

  return "";
}

function priorityAniimo() {
  return [
    ...priorityAniimoIds.map((id) => aniimo.find((item) => item.id === id)).filter(Boolean),
    ...aniimo,
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
    ["/pt/aniimo-pre-registro/", "Aniimo Pre Registro"],
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
