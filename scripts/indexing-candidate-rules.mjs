import { canonicalUrl, fullSitemapRoutes, resolveRoute } from "../src/lib/routes.js";

export const indexingPriorityRules = [
  {
    title: "GSC First Refresh",
    match: (route) => ["/", "/aniimo/", "/guides/", "/map/", "/codes/", "/rewards/", "/rewards/junior-wayfarer/", "/rewards/milestones/", "/aniimo-tier-list/", "/troubleshooting/aniimo-server-status/", "/topics/aniimo-discord/", "/topics/aniimo-demo/", "/download/", "/aniimo/glacy/", "/pt/aniimo-data-de-lancamento/", "/es/aniimo-fecha-de-lanzamiento/"].includes(route.path),
  },
  {
    title: "Launch Core",
    match: (route) => ["/", "/launch-day/", "/launch/", "/release-date/", "/download/", "/codes/", "/rewards/", "/launch-tracker/", "/launch-verification/"].includes(route.path),
  },
  {
    title: "SEMrush Safety",
    match: (route) => ["/topics/aniimo-apk/", "/topics/aniimo-torrent/", "/topics/aniimo-beta-key/", "/topics/aniimo-official-website/"].includes(route.path),
  },
  {
    title: "SEMrush Platform",
    match: (route) => route.path.startsWith("/platforms/") || ["/topics/aniimo-steam-deck/", "/topics/aniimo-game-pass/", "/topics/aniimo-ps4/", "/compare/aniimo-crossplay/", "/compare/aniimo-coop/", "/compare/aniimo-pvp/"].includes(route.path),
  },
  {
    title: "SEMrush Community And Media",
    match: (route) => ["/topics/aniimo-discord/", "/topics/aniimo-reddit/", "/topics/aniimo-wiki-dex/", "/media/", "/media/aniimo-trailers/", "/media/aniimo-logo/", "/topics/aniimo-pax-east/", "/topics/aniimo-tgs/"].includes(route.path),
  },
  {
    title: "SEMrush Gameplay And Trust",
    match: (route) => ["/topics/aniimo-gameplay/", "/topics/aniimo-review/", "/topics/aniimo-demo/", "/topics/aniimo-mmo/", "/topics/aniimo-shiny/", "/topics/aniimo-aniilog/", "/topics/aniimo-carried-items/", "/compare/aniimo-ai/", "/compare/aniimo-developer/", "/compare/aniimo-price/", "/compare/aniimo-multiplayer/"].includes(route.path),
  },
  {
    title: "Localized Entrypoints",
    match: (route) => /^\/(fr|de|pt|es)\//.test(route.path),
  },
  {
    title: "Troubleshooting",
    match: (route) => route.path.startsWith("/troubleshooting/"),
  },
];

export function indexingCandidateSections() {
  const allRoutes = fullSitemapRoutes().map((path) => {
    const routeInfo = resolveRoute(path);
    return {
      path,
      url: canonicalUrl(path),
      title: routeInfo.title,
      description: routeInfo.description,
    };
  });

  const selected = new Set();
  const sections = indexingPriorityRules.map((rule) => {
    const routes = allRoutes.filter((route) => rule.match(route) && !selected.has(route.url));
    routes.forEach((route) => selected.add(route.url));
    return { title: rule.title, routes };
  });

  return {
    sections,
    urls: [...selected],
  };
}
