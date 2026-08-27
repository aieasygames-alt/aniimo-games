export const officialLinks = {
  website: "https://www.aniimo.com/",
  main: "https://www.aniimo.com/main",
  officialWiki: "https://wiki.aniimo.com/",
  googlePlay: "https://play.google.com/store/apps/details?hl=en&id=com.x.aniimos",
  privacy: "https://pawprintstudio.com/privacy-policy",
};

export const gameInfo = {
  title: "Aniimo",
  developer: "Pawprint Studio",
  publisher: "Pawprint Interactive Entertainment Pte. Ltd.",
  genre: "Free-to-play creature-catching open-world RPG",
  world: "Idyll",
  playerName: "Pathfinder",
  summary:
    "Aniimo is a free-to-play creature-catching open-world RPG set on the continent of Idyll. Players catch creatures with Aniipods, Twine with collected Aniimo to use their abilities, explore weather and time-based encounters, join real-time challenges, and build a Homeland around a personal RV.",
  source: officialLinks.googlePlay,
  heroImage: "/images/hero-aniimo.webp",
  ogImage: "/images/og-default.webp",
};

export const releaseInfo = {
  pcConsole: "2026-09-16",
  mobile: "2026-09-23",
  closedBeta: "2025-07-04",
  betaSignupDeadline: "2025-06-30",
  launchStatus: "Confirmed",
  note:
    "Official site news lists PC and console launch on September 16, 2026, with mobile launch on September 23, 2026.",
  source: officialLinks.main,
};

const names = [
  ["001", "emberpup", "Emberpup", "Fire", "DPS", "Lumin Stage"],
  ["002", "flameruff", "Flameruff", "Fire", "DPS", "Gamma Stage"],
  ["003", "scorchhowl", "Scorchhowl", "Fire", "DPS", "Nova Stage"],
  ["004", "inferlupa", "Inferlupa", "Fire", "DPS", "Nova Stage"],
  ["005", "celestis", "Celestis", "Holy", "Support", "Lumin Stage"],
  ["006", "stellarys", "Stellarys", "Holy", "Support", "Gamma Stage"],
  ["007", "chirpi", "Chirpi", "Wind", "Support", "Lumin Stage"],
  ["008", "tromber", "Tromber", "Wind", "BREAK", "Gamma Stage"],
  ["009", "cornet", "Cornet", "Wind", "Support", "Gamma Stage"],
  ["010", "tubster", "Tubster", "Water", "Support", "Lumin Stage"],
  ["011", "iris", "Iris", "Grass", "Heal", "Lumin Stage"],
  ["012", "irisal", "Irisal", "Grass", "Heal", "Gamma Stage"],
  ["014", "skippy", "Skippy", "Rock", "Support", "Lumin Stage"],
  ["015", "pranky", "Pranky", "Dark", "Support", "Lumin Stage"],
  ["016", "glacy", "Glacy", "Ice", "DPS", "Lumin Stage"],
  ["017", "leafy", "Leafy", "Grass", "Support", "Lumin Stage"],
  ["018", "nimbi", "Nimbi", "Water", "Support", "Lumin Stage"],
  ["019", "turbo", "Turbo", "Electric", "DPS", "Lumin Stage"],
  ["020", "dreaple", "Dreaple", "Dark", "DPS", "Lumin Stage"],
  ["021", "hummin", "Hummin", "Wind", "Support", "Lumin Stage"],
  ["022", "witchin", "Witchin", "Dark", "Support", "Gamma Stage"],
  ["023", "tuckin", "Tuckin", "Holy", "Heal", "Lumin Stage"],
  ["024", "budclaw", "Budclaw", "Grass", "DPS", "Lumin Stage"],
  ["025", "shrubclaw", "Shrubclaw", "Grass", "DPS", "Gamma Stage"],
  ["026", "geoclaw", "Geoclaw", "Rock", "BREAK", "Nova Stage"],
  ["027", "sparki", "Sparki", "Electric", "DPS", "Lumin Stage"],
  ["028", "flamerion", "Flamerion", "Fire", "DPS", "Gamma Stage"],
  ["029", "flutternym", "Flutternym", "Wind", "Heal", "Lumin Stage"],
  ["030", "gracewing", "Gracewing", "Wind", "Heal", "Gamma Stage"],
  ["031", "somniwing", "Somniwing", "Dark", "Support", "Nova Stage"],
  ["032", "eko", "Eko", "Electric", "Support", "Lumin Stage"],
  ["033", "eklue", "Eklue", "Electric", "Support", "Gamma Stage"],
  ["050", "susuta", "Susuta", "Water", "Support", "Lumin Stage"],
  ["051", "popota", "Popota", "Grass", "Support", "Lumin Stage"],
  ["052", "piopiota", "Piopiota", "Grass", "Support", "Gamma Stage"],
  ["053", "panpanta", "Panpanta", "Grass", "Support", "Nova Stage"],
  ["054", "shelly", "Shelly", "Water", "BREAK", "Lumin Stage"],
  ["055", "sheldon", "Sheldon", "Water", "BREAK", "Gamma Stage"],
  ["056", "sherro", "Sherro", "Rock", "BREAK", "Nova Stage"],
  ["057", "baleetle", "Baleetle", "Rock", "DPS", "Lumin Stage"],
  ["058", "waleetle", "Waleetle", "Rock", "DPS", "Gamma Stage"],
  ["059", "bouldus", "Bouldus", "Rock", "DPS", "Nova Stage"],
  ["069", "cubbo", "Cubbo", "Rock", "DPS", "Lumin Stage"],
  ["070", "grizbo", "Grizbo", "Rock", "DPS", "Gamma Stage"],
  ["071", "pebbling", "Pebbling", "Rock", "Support", "Lumin Stage"],
  ["072", "lavazar", "Lavazar", "Fire", "DPS", "Gamma Stage"],
  ["073", "magmarex", "Magmarex", "Fire", "DPS", "Nova Stage"],
  ["084", "reefish", "Reefish", "Water", "Support", "Lumin Stage"],
  ["085", "coraliz", "Coraliz", "Water", "Support", "Gamma Stage"],
  ["086", "cheekie", "Cheekie", "Electric", "Support", "Lumin Stage"],
  ["087", "wavwal", "Wavwal", "Water", "DPS", "Lumin Stage"],
  ["088", "bubbeep", "Bubbeep", "Water", "Heal", "Lumin Stage"],
  ["089", "glameep", "Glameep", "Water", "Heal", "Gamma Stage"],
];

const aniimoImages = {
  baleetle: "/images/aniimo/aniimo-baleetle.png",
  bouldus: "/images/aniimo/aniimo-bouldus.png",
  emberpup: "/images/aniimo/aniimo-emberpup.png",
  eko: "/images/aniimo/aniimo-eko.png",
  glacy: "/images/aniimo/aniimo-glacy.png",
  gracewing: "/images/aniimo/aniimo-gracewing.png",
  leafy: "/images/aniimo/aniimo-leafy.png",
  sparki: "/images/aniimo/aniimo-sparki.webp",
  susuta: "/images/aniimo/aniimo-susuta.png",
  tubster: "/images/aniimo/aniimo-tubster.png",
  grizbo: "/images/aniimo/aniimo-grizbo.png",
};

export const aniimo = names.map(([no, id, name, element, role, stage]) => ({
  no,
  id,
  name,
  element,
  role,
  stage,
  region: "Official Wiki",
  habitat: "Location data should be expanded from official region and map updates as launch data stabilizes.",
  acquisition:
    id === "susuta"
      ? "Official pre-registration reward includes a mysterious Susuta egg."
      : "Catch with Aniipods or obtain through official launch systems when available.",
  condition: "Unique Aniimo may appear according to environment, weather, phenomena and time of day.",
  evolution:
    stage === "Lumin Stage"
      ? "Lumin Stage entry. Evolution path should be verified against the official index."
      : `${stage} form listed in the official Aniimo Wiki index.`,
  forms: [name],
  ability: "Twine ability details pending per-Aniimo verification.",
  use: `${role} role listed by official Aniimo Wiki filters. Twine skills can support puzzles, battles and exploration.`,
  status: "Confirmed",
  source: officialLinks.officialWiki,
  image: aniimoImages[id] || "/images/aniimo/aniimo-group.webp",
}));

export const regions = [
  ["mistwoods", "Mistwoods", "Official world area shown on Aniimo main site and wiki preview.", ["Emberpup", "Iris", "Leafy"], ["Exploration", "Weather encounters", "Time-of-day discovery"]],
  ["echoback-landing", "Echoback Landing", "Official world area listed by Aniimo as part of the early wiki map.", ["Chirpi", "Tromber", "Cornet"], ["Traversal", "Route discovery", "Twine puzzle paths"]],
  ["sea-of-flowers", "Sea of Flowers", "Official region name suited to grass, wind and support Aniimo discovery pages.", ["Irisal", "Flutternym", "Gracewing"], ["Collection routes", "Environmental encounters", "Aniilog progression"]],
  ["blitzwood", "Blitzwood", "Official region name with strong fit for electric and weather-based encounter guides.", ["Turbo", "Sparki", "Eko", "Eklue"], ["Phenomena encounters", "Electric Aniimo routes", "Weather timing"]],
  ["nimbus-fields", "Nimbus Fields", "Official region name for route, glide, field and sky-adjacent guide content.", ["Nimbi", "Hummin", "Somniwing"], ["Gliding", "Open-world travel", "Field exploration"]],
  ["forest-of-falling-stars", "Forest of Falling Stars", "Official region name for rare encounter and world guide content.", ["Celestis", "Stellarys", "Susuta"], ["Rare Aniimo discovery", "Story quests", "Special encounters"]],
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
      : id === "sea-of-flowers"
        ? "/images/regions/region-sea-of-flowers.webp"
        : id === "nimbus-fields"
          ? "/images/regions/region-nimbus-fields.webp"
          : null,
}));

export const launchRewards = [
  ["Rare Prismana Aniimo choice", "Become a Junior Wayfarer to select a Prismana Form Aniimo."],
  ["Mysterious Susuta egg", "Pre-register on the official website to claim a mysterious Susuta egg."],
  ["10M milestone", "Glimmer x200"],
  ["15M milestone", "Aniipod Ultra x2"],
  ["20M milestone", "Companion Promise limited avatar frame"],
  ["30M milestone", "Sunlit Meadow limited outfit"],
  ["Launch event items", "Sparkling Cube, Aniipod Ultra and Tumbler are listed as free catching items through global launch events."],
].map(([title, reward]) => ({
  title,
  reward,
  status: "Confirmed",
  source: officialLinks.website,
}));

export const codes = [
  {
    code: "No official redeem code published",
    reward: "Track this page for launch codes and global campaign rewards.",
    status: "Watchlist",
    updated: "2026-08-27",
  },
];

export const platforms = [
  ["Official website", "Official pre-registration and launch reward hub.", officialLinks.website],
  ["Google Play", "Android store page by Pawprint Studio with wishlist and pre-registration support.", officialLinks.googlePlay],
  ["PC and consoles", "Official site news lists PC and console launch on September 16, 2026.", officialLinks.main],
  ["Mobile", "Official site news lists mobile launch on September 23, 2026.", officialLinks.main],
].map(([name, note, url]) => ({ name, note, url, status: "Confirmed" }));

export const mechanics = [
  ["Creature catching", "Players catch Aniimo with Aniipods, set traps, and time catches around encounter behavior."],
  ["Twine", "Players can Twine with collected Aniimo, essentially becoming them to use skills for puzzles, battles and traversal."],
  ["Environment-based encounters", "Unique Aniimo can appear according to environment, weather, phenomena and time of day."],
  ["Egg Heist", "Egg Heist is described as a PVEVP mode where three-player teams search and battle in the Lost Isles."],
  ["Homeland and RV", "Pathfinders have a personal RV and Homeland where they can plant crops, build decorations and interact with Aniimo."],
].map(([title, text]) => ({ title, text, source: officialLinks.googlePlay }));

export const faqs = {
  home: [
    ["What is Aniimo?", "Aniimo is a free-to-play creature-catching open-world RPG set on Idyll, developed by Pawprint Studio."],
    ["When does Aniimo launch?", "Official site news lists PC and console launch for September 16, 2026, with mobile launch on September 23, 2026."],
    ["What is Twine in Aniimo?", "Twine lets players become collected Aniimo and use their skills for puzzles, battles, traversal and exploration."],
  ],
  database: [
    ["How many Aniimo names are listed?", "The official Aniimo Wiki currently exposes a numbered Aniimo index, and this site tracks a launch-ready subset first."],
    ["Are elements and roles official?", "The element, role and stage categories come from the official Aniimo Wiki index."],
  ],
  codes: [
    ["Are there official Aniimo codes?", "No public redeem code is confirmed here yet. This page separates redeem codes from official milestone rewards."],
    ["What are the official pre-registration rewards?", "Official rewards include Glimmer, Aniipod Ultra, Companion Promise avatar frame, Sunlit Meadow outfit, a Prismana Aniimo choice and a Susuta egg."],
  ],
  download: [
    ["Where can I pre-register for Aniimo?", "Use the official Aniimo website and official store pages such as Google Play when available in your region."],
    ["What platforms is Aniimo launching on?", "Official news lists PC and consoles on September 16, 2026, and mobile on September 23, 2026."],
  ],
};

export const updates = [
  {
    date: "2026-08-27",
    title: "Official launch information added",
    text: "Added official launch dates, platform notes, Google Play details, official Wiki names, regions, mechanics and launch rewards.",
  },
  {
    date: "2026-08-27",
    title: "Aniimo Wiki MVP launched",
    text: "Created the initial database, map, evolution, codes, download, beginner guide, and data-status pages.",
  },
];

export const statuses = {
  Confirmed: "Official or in-game verified data.",
  Unconfirmed: "Seen in previews, community reports, or incomplete sources.",
  Estimated: "Planning placeholder based on currently public information.",
  Watchlist: "Tracked for launch; verify before publishing as active.",
};
