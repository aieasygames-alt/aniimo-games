import { officialLinks } from "./sources.js";

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
  status: "Confirmed",
  source: officialLinks.main,
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
