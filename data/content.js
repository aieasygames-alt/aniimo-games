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

export const platforms = [
  {
    name: "iOS",
    status: "Watchlist",
    note: "Track App Store availability, pre-order status, regional launch timing, and official download links.",
  },
  {
    name: "Android",
    status: "Watchlist",
    note: "Track Google Play, TapTap or regional Android store pages, beta signups, and APK policy notes.",
  },
  {
    name: "PC",
    status: "Unconfirmed",
    note: "Keep PC client, launcher, and cross-save details separated until official platform support is verified.",
  },
];

export const faqs = {
  home: [
    ["What is Aniimo Wiki?", "Aniimo Wiki is a fan-made database for Aniimo locations, forms, evolution notes, map routes, codes, and launch information."],
    ["Is every Aniimo page confirmed?", "No. Early launch pages use status labels so readers can separate confirmed facts from estimates and watchlist items."],
    ["What should be updated first after launch?", "Codes, download links, release date information, starter Aniimo, region names, and verified encounter locations should be updated first."],
  ],
  database: [
    ["How is the Aniimo list organized?", "The database is organized by name, element, region, acquisition method, forms, link ability, and source status."],
    ["Can I filter by region or element?", "Yes. The current MVP supports search plus element and region filters, with room for ability and acquisition filters later."],
  ],
  codes: [
    ["Are the Aniimo codes active?", "Codes marked Watchlist or Unconfirmed should be verified before users treat them as active rewards."],
    ["How often should this page be updated?", "During launch week, the codes page should be checked daily because redeem codes and reward campaigns change quickly."],
  ],
  download: [
    ["Where can I download Aniimo?", "This page should link only to official store pages or official publisher pages once they are available."],
    ["Will Aniimo support PC and mobile?", "Platform support should stay marked as watchlist or unconfirmed until official channels publish final availability."],
  ],
};

export const updates = [
  {
    date: "2026-08-27",
    title: "Aniimo Wiki MVP launched",
    text: "Created the initial database, map, evolution, codes, download, beginner guide, and data-status pages.",
  },
  {
    date: "2026-08-27",
    title: "Custom domain prepared",
    text: "Configured sitemap and robots metadata for aniimo.games and connected Cloudflare Pages deployment.",
  },
];

export const statuses = {
  Confirmed: "Official or in-game verified data.",
  Unconfirmed: "Seen in previews, community reports, or incomplete sources.",
  Estimated: "Planning placeholder based on currently public information.",
  Watchlist: "Tracked for launch; verify before publishing as active.",
};
