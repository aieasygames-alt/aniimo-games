import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { aniimo, regions } from "../data/content.js";

const siteUrl = "https://aniimo.games";
const indexHtml = "dist/index.html";

const staticRoutes = [
  "/aniimo/",
  "/map/",
  "/evolution/",
  "/codes/",
  "/rewards/",
  "/download/",
  "/release-date/",
  "/beginner-guide/",
  "/updates/",
  "/sources/",
];

const routes = [
  ...staticRoutes,
  ...[...new Set(aniimo.map((item) => item.element.toLowerCase()))].map((item) => `/elements/${item}/`),
  ...[...new Set(aniimo.map((item) => item.role.toLowerCase()))].map((item) => `/roles/${item}/`),
  ...aniimo.flatMap((item) => [`/aniimo/${item.id}/`, ...(item.aliases || []).map((alias) => `/aniimo/${alias}/`)]),
  ...regions.map((item) => `/regions/${item.id}/`),
];

function pageTitle(route) {
  const normalizedRoute = normalizeRoute(route);
  const aniimoMatch = route.match(/^\/aniimo\/([^/]+)/);
  if (aniimoMatch) {
    const item = aniimo.find((entry) => entry.id === aniimoMatch[1] || entry.aliases?.includes(aniimoMatch[1]));
    if (item) return `${item.name} Location, Evolution, Forms & Abilities | Aniimo Wiki`;
  }
  const regionMatch = route.match(/^\/regions\/([^/]+)/);
  if (regionMatch) {
    const region = regions.find((entry) => entry.id === regionMatch[1]);
    if (region) return `${region.name} Aniimo Locations & Route Guide`;
  }
  const titles = {
    "/aniimo": "All Aniimo List, Locations & Abilities | Aniimo Wiki",
    "/map": "Aniimo Map & Region Guide | Spawn Locations",
    "/evolution": "Aniimo Evolution & Forms Guide",
    "/codes": "Aniimo Codes & Rewards",
    "/rewards": "Aniimo Pre-Registration Rewards",
    "/download": "Aniimo Download, Release Date & Platforms",
    "/release-date": "Aniimo Release Date",
    "/beginner-guide": "Aniimo Beginner Guide",
    "/updates": "Aniimo Updates & Source Log",
    "/sources": "Aniimo Official Sources",
  };
  return titles[normalizedRoute] || "Aniimo Wiki, Database & Map Guide";
}

function description(route) {
  const aniimoMatch = route.match(/^\/aniimo\/([^/]+)/);
  if (aniimoMatch) {
    const item = aniimo.find((entry) => entry.id === aniimoMatch[1] || entry.aliases?.includes(aniimoMatch[1]));
    if (item) return item.description;
  }
  const regionMatch = route.match(/^\/regions\/([^/]+)/);
  if (regionMatch) {
    const region = regions.find((entry) => entry.id === regionMatch[1]);
    if (region) return region.theme;
  }
  return "Aniimo Wiki with database pages, locations, evolution guides, codes, rewards, download info, and beginner tips.";
}

function canonical(route) {
  const aniimoMatch = route.match(/^\/aniimo\/([^/]+)/);
  if (aniimoMatch) {
    const item = aniimo.find((entry) => entry.aliases?.includes(aniimoMatch[1]));
    if (item) return `${siteUrl}/aniimo/${item.id}/`;
  }
  return `${siteUrl}${route}`;
}

function injectMeta(html, route) {
  const title = pageTitle(route);
  const desc = description(route);
  const url = canonical(route);
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/content="Aniimo Wiki with database pages, locations, evolution guides, codes, rewards, download info, and beginner tips\."/,
      `content="${escapeHtml(desc)}"`)
    .replace(/<link rel="canonical" href="[^"]+" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]+" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:url" content="[^"]+" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:description" content="[^"]+" \/>/, `<meta property="og:description" content="${escapeHtml(desc)}" />`);
}

function normalizeRoute(route) {
  return route === "/" ? "/" : route.replace(/\/$/, "");
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

for (const route of routes) {
  const target = join("dist", route, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, injectMeta(readFileSync(indexHtml, "utf8"), route));
}

console.log(`Prerendered ${routes.length} routes.`);
