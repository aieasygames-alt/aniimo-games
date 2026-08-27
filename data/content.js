export const aniimo = [
  {
    id: "sprigpaw",
    name: "Sprigpaw",
    element: "Nature",
    region: "Verdant Coast",
    habitat: "Grassland edges and shaded groves",
    acquisition: "Wild encounter",
    condition: "Daytime, clear weather",
    evolution: "Evolves after bonding milestones are confirmed",
    forms: ["Sprigpaw", "Bloomclaw"],
    ability: "Vine Link",
    use: "Early exploration, gap crossing, light puzzle routes",
    status: "Estimated",
  },
  {
    id: "emberlynx",
    name: "Emberlynx",
    element: "Fire",
    region: "Cinder Ridge",
    habitat: "Warm cliffs and ember fields",
    acquisition: "Wild encounter or event reward",
    condition: "Dusk or volcanic weather",
    evolution: "Branch form details pending launch data",
    forms: ["Emberlynx", "Ashmane"],
    ability: "Heat Link",
    use: "Burning obstacles and aggressive combat openings",
    status: "Unconfirmed",
  },
  {
    id: "tidelume",
    name: "Tidelume",
    element: "Water",
    region: "Moonlit Shoals",
    habitat: "Shallow reefs and tide pools",
    acquisition: "Wild encounter",
    condition: "Night, high tide",
    evolution: "Requires water-region progression, pending verification",
    forms: ["Tidelume", "Pearlfin"],
    ability: "Current Link",
    use: "Water traversal, hidden route access",
    status: "Estimated",
  },
  {
    id: "voltickit",
    name: "Voltickit",
    element: "Electric",
    region: "Stormplain",
    habitat: "Open plains during storms",
    acquisition: "Rare wild encounter",
    condition: "Thunderstorm",
    evolution: "Unknown",
    forms: ["Voltickit"],
    ability: "Spark Link",
    use: "Power nodes, timed mechanisms",
    status: "Unconfirmed",
  },
];

export const regions = [
  {
    id: "verdant-coast",
    name: "Verdant Coast",
    theme: "Starter grasslands, coast paths, grove puzzles",
    aniimo: ["Sprigpaw"],
    status: "Estimated",
  },
  {
    id: "cinder-ridge",
    name: "Cinder Ridge",
    theme: "Cliffs, heat gates, volcanic weather routes",
    aniimo: ["Emberlynx"],
    status: "Unconfirmed",
  },
  {
    id: "moonlit-shoals",
    name: "Moonlit Shoals",
    theme: "Reefs, tide pools, night-only encounters",
    aniimo: ["Tidelume"],
    status: "Estimated",
  },
];

export const codes = [
  {
    code: "ANIIMO2026",
    reward: "Launch reward placeholder",
    status: "Watchlist",
    updated: "2026-08-27",
  },
  {
    code: "PREREG",
    reward: "Pre-registration reward placeholder",
    status: "Unconfirmed",
    updated: "2026-08-27",
  },
];

export const statuses = {
  Confirmed: "Official or in-game verified data.",
  Unconfirmed: "Seen in previews, community reports, or incomplete sources.",
  Estimated: "Planning placeholder based on currently public information.",
  Watchlist: "Tracked for launch; verify before publishing as active.",
};
