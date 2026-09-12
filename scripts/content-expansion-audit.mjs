import { existsSync, readFileSync } from "node:fs";
import { canonicalUrl, fullSitemapRoutes, localizedTopicPath, resolveRoute, sitemapRoutes } from "../src/lib/routes.js";
import { localizedTopics } from "../data/content.js";

const planPath = "CONTENT_EXPANSION_PLAN.md";
const issues = [];

if (!existsSync(planPath)) {
  issues.push("Missing CONTENT_EXPANSION_PLAN.md.");
} else {
  const plan = readFileSync(planPath, "utf8");
  const candidates = parseCandidateMatrix(plan);
  const fullRoutes = new Set(fullSitemapRoutes());
  const primaryRoutes = new Set(sitemapRoutes());
  const requiredPrimaryRoutes = candidates
    .filter((candidate) => ["V1", "V6"].includes(candidate.priority))
    .map((candidate) => candidate.route);

  for (const candidate of candidates) {
    if (!candidate.page || !candidate.cluster || !candidate.intent || !candidate.factStatus || !candidate.priority) {
      issues.push(`Candidate row is incomplete: ${JSON.stringify(candidate)}`);
      continue;
    }

    if (!candidate.route) {
      issues.push(`No implemented route found for candidate page: ${candidate.page}`);
      continue;
    }

    if (!fullRoutes.has(candidate.route)) {
      issues.push(`Candidate route is not discoverable: ${candidate.page} -> ${candidate.route}`);
      continue;
    }

    const routeInfo = resolveRoute(candidate.route);
    if (routeInfo.type === "not-found") {
      issues.push(`Candidate route resolves to not-found: ${candidate.page} -> ${candidate.route}`);
    }

    if (candidate.factStatus.toLowerCase().includes("watchlist") && !usesWatchlistLanguage(routeInfo.description)) {
      issues.push(`Watchlist candidate needs cautious description language: ${candidate.page}`);
    }
  }

  for (const route of requiredPrimaryRoutes) {
    if (!primaryRoutes.has(route)) {
      issues.push(`Priority candidate is not in the primary sitemap: ${route}`);
    }
  }

  if (!plan.includes("Implementation Rules")) {
    issues.push("Expansion plan is missing implementation rules.");
  }

  if (!plan.includes("Success criteria")) {
    issues.push("Expansion plan is missing success criteria.");
  }
}

if (issues.length) {
  console.error(`Content expansion audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log("Content expansion audit passed.");

function parseCandidateMatrix(plan) {
  return plan
    .split("\n")
    .filter((line) => line.startsWith("| ") && !line.includes("---") && !line.includes("Page | Cluster"))
    .map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()))
    .filter((cells) => cells.length === 5)
    .map(([page, cluster, intent, factStatus, priority]) => ({
      page,
      cluster,
      intent,
      factStatus,
      priority,
      route: routeForPage(page),
    }));
}

function routeForPage(page) {
  const manualRoutes = {
    "Aniimo server status": "/troubleshooting/aniimo-server-status/",
    "Aniimo known issues": "/troubleshooting/aniimo-known-issues/",
    "Aniimo codes not working": "/codes/aniimo-codes-not-working/",
    "Aniimo APK safety": "/topics/aniimo-apk/",
    "Aniimo torrent safety": "/topics/aniimo-torrent/",
    "Aniimo beta key safety": "/topics/aniimo-beta-key/",
    "Aniimo official website": "/topics/aniimo-official-website/",
    "Aniimo cross-save": "/topics/aniimo-cross-save/",
    "Aniimo controller support": "/topics/aniimo-controller-support/",
    "Aniimo system requirements": "/topics/aniimo-system-requirements/",
    "Aniimo Steam Deck": "/topics/aniimo-steam-deck/",
    "Aniimo Game Pass": "/topics/aniimo-game-pass/",
    "Aniimo PS4": "/topics/aniimo-ps4/",
    "Aniimo Switch": "/compare/is-aniimo-on-switch/",
    "Aniimo character list": "/topics/aniimo-characters/",
    "Aniimo creatures": "/topics/aniimo-characters/",
    "Aniimo monsters": "/topics/aniimo-characters/",
    "Aniimo evolution list": "/topics/aniimo-evolution-list/",
    "Aniimo locations": "/topics/aniimo-locations/",
    "Aniimo elements": "/aniimo-elements/",
    "Aniimo roles": "/aniimo-roles/",
    "Best starter Aniimo": "/best-starter-aniimo/",
    "Aniimo gameplay": "/topics/aniimo-gameplay/",
    "Aniimo combat": "/topics/aniimo-combat/",
    "Can you play Aniimo solo?": "/topics/aniimo-solo/",
    "Aniimo Twine": "/guides/aniimo-twine-guide/",
    "Aniimo Egg Heist": "/guides/aniimo-egg-heist-guide/",
    "Aniimo Homeland": "/guides/aniimo-homeland-guide/",
    "Aniimo first hour": "/aniimo-first-hour-guide/",
    "Aniimo best settings": "/aniimo-best-settings/",
    "Aniimo vs Pokemon": "/compare/aniimo-vs-pokemon/",
    "Aniimo vs Palworld": "/compare/aniimo-vs-palworld/",
    "Aniimo vs Genshin": "/compare/aniimo-vs-genshin/",
    "Aniimo vs Temtem": "/topics/aniimo-vs-temtem/",
    "Games like Aniimo": "/topics/games-like-aniimo/",
    "Is Aniimo multiplayer?": "/compare/aniimo-multiplayer/",
    "Is Aniimo pay to win?": "/compare/is-aniimo-pay-to-win/",
    "Spanish release date": "/es/aniimo-fecha-de-lanzamiento/",
    "Portuguese release date": localizedTopicPath(localizedTopics.find((topic) => topic.slug === "aniimo-data-de-lancamento")),
    "French download": "/fr/aniimo-telecharger/",
    "German download": "/de/aniimo-herunterladen/",
  };

  return manualRoutes[page];
}

function usesWatchlistLanguage(description) {
  const normalized = description.toLowerCase();
  return ["track", "prepare", "watchlist", "verification", "status", "whether"].some((term) => normalized.includes(term));
}
