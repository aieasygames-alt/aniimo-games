import { writeFileSync } from "node:fs";
import { canonicalUrl, resolveRoute, sitemapRoutes } from "../src/lib/routes.js";

const priorityRules = [
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
    match: (route) => route.path.startsWith("/fr/") || route.path.startsWith("/de/"),
  },
  {
    title: "Troubleshooting",
    match: (route) => route.path.startsWith("/troubleshooting/"),
  },
];

const allRoutes = sitemapRoutes().map((path) => {
  const routeInfo = resolveRoute(path);
  return {
    path,
    url: canonicalUrl(path),
    title: routeInfo.title,
    description: routeInfo.description,
  };
});

const selected = new Set();
const sections = priorityRules.map((rule) => {
  const routes = allRoutes.filter((route) => rule.match(route) && !selected.has(route.url));
  routes.forEach((route) => selected.add(route.url));
  return { title: rule.title, routes };
});

const markdown = `# Aniimo Indexing Candidates

Generated: ${new Date().toISOString()}

Use this list after a GitHub push and Cloudflare deployment. Submit the first sections first when manual indexing quota is limited.

${sections.map(sectionMarkdown).join("\n\n")}

## Plain URL List

${[...selected].map((url) => `- ${url}`).join("\n")}
`;

writeFileSync("indexing-candidates.md", markdown);
console.log(markdown);

function sectionMarkdown(section) {
  return `## ${section.title}

${section.routes.map((route) => `- ${route.url} - ${route.title}`).join("\n") || "- No matching URLs found."}`;
}
