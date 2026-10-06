import { officialLinks } from "./sources.js";

const regionDetails = {
  mistwoods: {
    mapUrl: "https://aniimoguide.com/interactive-map?region=mistwoods",
    mapProvider: "Aniimo Guide community map",
    mapSummary: "Use the Mistwoods region filter, then switch between Aniimo, Eggs, Lumin Amber and travel layers to build a route around your current objective.",
    practicalNotes: ["Start with one creature or resource layer instead of viewing every marker at once.", "Use the in-game weather display before treating a map route as a confirmed conditional encounter.", "Keep a nearby Bloom or transporter selected so a resource loop remains easy to reset."],
  },
  "echoback-landing": {
    mapUrl: "https://aniimoguide.com/interactive-map?region=echoback+landing",
    mapProvider: "Aniimo Guide community map",
    mapSummary: "Filter the interactive map to Echoback Landing, then use the Aniimo and travel layers to plan creature checks and return routes.",
    practicalNotes: ["Choose a creature first to reduce the map to its recorded habitat zones.", "Use travel markers to group beach, shoreline and traversal checks in one loop.", "Confirm time, weather and event conditions in the live client before assuming a marker is active."],
  },
  "sea-of-flowers": {
    mapUrl: "https://aniimoguide.com/interactive-map?region=sea+of+flowers",
    mapProvider: "Aniimo Guide community map",
    mapSummary: "Use the map's region filter to show Sea of Flowers, then enable Aniimo, Eggs, Lumin Amber or travel layers based on your objective.",
    practicalNotes: ["Search the region first, then select an Aniimo in the map rail to reveal its recorded habitat zones.", "Check the weather layer before making a route for Thornblade, Flutternym, or other conditional encounters.", "Pin a transporter or Bloom before clearing nearby eggs and resource loops so return travel stays simple."],
  },
  "forest-of-falling-stars": {
    mapUrl: "https://aniipedia.com/en/maps/forest-of-falling-stars",
    mapProvider: "Aniipedia community map",
    mapSummary: "The community map groups creature zones, teleporters, a Nomad Challenge, a dungeon, eggs and Lumin Amber for this region.",
    practicalNotes: ["Start from the region teleporter and set the map to the creature or resource layer you need.", "Use the weather filter for Stellarys variants before committing to a farming loop.", "Collect route objectives in one pass: nearby eggs, Lumin Amber, challenge, then creature habitat zones."],
  },
  "blitzwood": {
    mapUrl: "https://aniimo.cc/map?region=blitzwood",
    mapProvider: "Aniimo.cc community map",
    mapSummary: "Open the Blitzwood region filter and choose an Aniimo marker or resource layer; use the map as a route aid, then verify the encounter in your live client.",
    practicalNotes: ["Filter to an individual Aniimo before traveling so markers are not buried under the full collection layer.", "Plan separate daylight and night checks for conditional encounters; do not assume one visit covers every spawn.", "Keep a nearby travel point selected before exploring the electric-woodland routes and returning to a resource loop."],
  },
  "nimbus-fields": {
    mapUrl: "https://aniimoguide.com/interactive-map?region=nimbus+fields",
    mapProvider: "Aniimo Guide community map",
    mapSummary: "Use the Nimbus Fields filter to view starter-area Aniimo, travel points, eggs, resources and exploration layers in one planning map.",
    practicalNotes: ["Search for a target Aniimo before traveling to focus the displayed habitat zones.", "Use the travel layer to plan a route around nearby Blooms and returns.", "Check the live weather and time display for conditional forms before treating a route as complete."],
  },
};

export const regions = [
  ["mistwoods", "Mistwoods", "An off-key singing echoes among withered twigs, while swamp mists and glimmer fruits guide lost travelers.", ["Emberpup", "Iris", "Leafy"], ["Exploration", "Weather encounters", "Time-of-day discovery"]],
  ["echoback-landing", "Echoback Landing", "A stranded giant Aniimo waits away from the sea, with answers hidden in the enchanting Echoback singing.", ["Chirpi", "Tromber", "Cornet"], ["Traversal", "Route discovery", "Twine puzzle paths"]],
  ["sea-of-flowers", "Sea of Flowers", "Endless flowers paint the landscape, surrounding a perfume village that has lived beside Aniimo for generations.", ["Irisal", "Flutternym", "Gracewing"], ["Collection routes", "Environmental encounters", "Aniilog progression"]],
  ["blitzwood", "Blitzwood", "Thunder drawn by Bolties carves scorched furrows through grassy slopes as electric sparks crackle in the woods.", ["Bolty", "Blazen", "Sparki", "Eko", "Eklue"], ["Phenomena encounters", "Electric Aniimo routes", "Weather timing"]],
  ["nimbus-fields", "Nimbus Fields", "Soft clouds caress thick grassland, where field Aniimo move through open routes and sky-adjacent paths.", ["Fentuft", "Hummin", "Somniwing"], ["Gliding", "Open-world travel", "Field exploration"]],
  ["forest-of-falling-stars", "Forest of Falling Stars", "Upstream from the forest, Celestises glide among starine trees like tiny shooting stars.", ["Celestis", "Stellarys", "Susuta"], ["Rare Aniimo discovery", "Story quests", "Special encounters"]],
].map(([id, name, theme, aniimoNames, mechanics]) => ({
  id,
  name,
  theme,
  aniimo: aniimoNames,
  mechanics,
  checklist: [
    `Confirm exact ${name} route boundaries after launch.`,
    `Add spawn screenshots and route notes for ${aniimoNames.join(", ")}.`,
    `Check whether ${mechanics[0].toLowerCase()} changes encounters by weather or time of day.`,
  ],
  guideNote: `${name} should act as a hub page for map searches, creature searches and launch verification. Keep preview-based scenery separate from exact coordinates until in-game checks are available.`,
  status: "Confirmed",
  source: officialLinks.main,
  map: regionDetails[id] || null,
  image:
    id === "mistwoods"
      ? "/images/regions/region-mistwoods.webp"
      : id === "echoback-landing"
        ? "/images/regions/region-echoback-landing.webp"
      : id === "sea-of-flowers"
        ? "/images/regions/region-sea-of-flowers.webp"
        : id === "blitzwood"
          ? "/images/regions/region-blitzwood.webp"
          : id === "nimbus-fields"
            ? "/images/regions/region-nimbus-fields.webp"
            : "/images/regions/region-forest-of-falling-stars.webp",
}));
