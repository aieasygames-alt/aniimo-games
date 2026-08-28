export const officialLinks = {
  website: "https://www.aniimo.com/",
  main: "https://www.aniimo.com/main",
  officialWiki: "https://wiki.aniimo.com/",
  googlePlay: "https://play.google.com/store/apps/details?hl=en&id=com.x.aniimos",
  appStore: "https://apps.apple.com/app/aniimo/id6759098797",
  steam: "https://store.steampowered.com/app/4126040/Aniimo/",
  epic: "https://store.epicgames.com/p/aniimo-759396",
  xbox: "https://www.xbox.com/games/store/aniimo/9pk8phlcqdf6",
  playstation: "https://store.playstation.com/concept/10018491",
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
  timezoneNote: "Official dates are listed by calendar date. Store availability can vary by platform, region and local storefront update timing.",
  note:
    "Official site news lists PC and console launch on September 16, 2026, with mobile launch on September 23, 2026.",
  source: officialLinks.main,
  timeline: [
    ["2025-06-30", "Global closed beta signup deadline"],
    ["2025-07-04", "Global closed beta start"],
    ["2026-08-26", "Official global launch dates announced"],
    ["2026-09-16", "PC and console launch window"],
    ["2026-09-23", "Mobile launch window"],
  ],
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
  bubbeep: "/images/aniimo/aniimo-bubbeep.png",
  budclaw: "/images/aniimo/aniimo-budclaw.png",
  celestis: "/images/aniimo/aniimo-celestis.png",
  cheekie: "/images/aniimo/aniimo-cheekie.png",
  coraliz: "/images/aniimo/aniimo-coraliz.png",
  chirpi: "/images/aniimo/aniimo-chirpi.png",
  cornet: "/images/aniimo/aniimo-cornet.png",
  cubbo: "/images/aniimo/aniimo-cubbo.png",
  dreaple: "/images/aniimo/aniimo-dreaple.png",
  emberpup: "/images/aniimo/aniimo-emberpup.png",
  eko: "/images/aniimo/aniimo-eko.png",
  eklue: "/images/aniimo/aniimo-eklue.png",
  flamerion: "/images/aniimo/aniimo-flamerion.png",
  flameruff: "/images/aniimo/aniimo-flameruff.png",
  flutternym: "/images/aniimo/aniimo-flutternym.png",
  glacy: "/images/aniimo/aniimo-glacy.png",
  geoclaw: "/images/aniimo/aniimo-geoclaw.png",
  glameep: "/images/aniimo/aniimo-glameep.png",
  gracewing: "/images/aniimo/aniimo-gracewing.png",
  leafy: "/images/aniimo/aniimo-leafy.png",
  lavazar: "/images/aniimo/aniimo-lavazar.png",
  hummin: "/images/aniimo/aniimo-hummin.png",
  inferlupa: "/images/aniimo/aniimo-inferlupa.png",
  iris: "/images/aniimo/aniimo-iris.png",
  irisal: "/images/aniimo/aniimo-irisal.png",
  nimbi: "/images/aniimo/aniimo-nimbi.png",
  panpanta: "/images/aniimo/aniimo-panpanta.png",
  pebbling: "/images/aniimo/aniimo-pebbling.png",
  piopiota: "/images/aniimo/aniimo-piopiota.png",
  magmarex: "/images/aniimo/aniimo-magmarex.png",
  popota: "/images/aniimo/aniimo-popota.png",
  pranky: "/images/aniimo/aniimo-pranky.png",
  reefish: "/images/aniimo/aniimo-reefish.png",
  scorchhowl: "/images/aniimo/aniimo-scorchhowl.png",
  sheldon: "/images/aniimo/aniimo-sheldon.png",
  shelly: "/images/aniimo/aniimo-shelly.png",
  sparki: "/images/aniimo/aniimo-sparki.webp",
  shrubclaw: "/images/aniimo/aniimo-shrubclaw.png",
  skippy: "/images/aniimo/aniimo-skippy.png",
  somniwing: "/images/aniimo/aniimo-somniwing.png",
  susuta: "/images/aniimo/aniimo-susuta.png",
  sherro: "/images/aniimo/aniimo-sherro.png",
  stellarys: "/images/aniimo/aniimo-stellarys.png",
  tuckin: "/images/aniimo/aniimo-tuckin.png",
  tubster: "/images/aniimo/aniimo-tubster.png",
  tromber: "/images/aniimo/aniimo-tromber.png",
  turbo: "/images/aniimo/aniimo-turbo.png",
  wavwal: "/images/aniimo/aniimo-wavwal.png",
  witchin: "/images/aniimo/aniimo-witchin.png",
  waleetle: "/images/aniimo/aniimo-waleetle.png",
  grizbo: "/images/aniimo/aniimo-grizbo.png",
};

const officialDescriptions = {
  emberpup: "The lively creatures like to follow Flameruffs around. Once the smoldering fur starts to burn, they thrive.",
  flameruff: "Pack creatures that prize loyalty and unity, these hunters maintain focused, calm eyes that mask their fiery hearts.",
  scorchhowl: "They enjoy the thrill of the fight since flame and burning mark their growth.",
  inferlupa: "A Flameruff who challenged the strong and lost, absorbing the souls of companions who fell with equal bitterness. It is driven by the desire for revenge.",
  celestis: "They love food! When they search the forest for food, the glowing stars on their heads are often mistaken for comets. They like hoarding food, adorning their nest with it.",
  stellarys: "They prefer solitude and often move through the night. With their starry, cloak-like forms, they resemble mysterious mages and can teleport using psychic energy.",
  chirpi: "They often hover at low altitudes, paying attention to every movement on the beach so they won't miss any opportunity.",
  tromber: "They like having fun and producing rhythmic music, so don't be surprised to see a grand symphony.",
  cornet: "They can produce loud, piercing noises that resonate throughout the entire beach just to draw attention.",
  tubster: "Creates deep, tuba-like sounds that match its steady, friendly character.",
  iris: "Iris possesses an extremely lightweight body, often lifted by the wind. It then either slowly spirals downward using the resistance from its petal skirt, or simply allows itself to be carried away by the wind.",
  irisal: "Devoted to the art of dance, they constantly hone their craft, hoping to share the pure joy and energy of movement.",
  skippy: "They like to hide underwater and observe their surroundings using a lotus leaf as a strikingly ineffective disguise.",
  pranky: "They like to stay cool and moist. That's what the layer of film over their bodies is for.",
  glacy: "They are elegant and kind aniimo that always take care of weaker ones, and freeze anyone who crosses them in ice.",
  leafy: "They live among lotus flowers and use their lotus leaf tails to conceal their face and show off their elegant nature.",
  nimbi: "Don't be surprised to see them floating in the clouds in small groups above the grasslands.",
  turbo: "They like to sleep hidden in the clouds, because with the presence of wind pressure and static electricity, the fluffy wool easily attracts things that drift by on the wind.",
  dreaple: "Their fur that has absorbed dream energy presents a mesmerizing illusion of colors. When they use this fur as a pillow to sleep, they sink into sweet dreams.",
  hummin: "They live on the grassland in groups, they like burrowing for nutrients, and they love singing off-key together!",
  witchin: "They make bizarre noises to drive intruders to madness, lower their defenses and even cause them to pass out.",
  tuckin: "They need to absorb nutrients from the soil through their roots to maintain vitality and hate leaving the ground.",
  budclaw: "The first form in the Budclaw line. Track its official entry for updated habitat, encounter and skill details.",
  shrubclaw: "The lush plants that cover their shells convert sunlight into nutrients, so they don't even need to eat on sunny days.",
  geoclaw: "They live in caves, feed on minerals, and use their beautifully crystallized shells to lure prey.",
  sparki: "Though they look like fire, those flames are only flowing energy. They give off no heat at all. In fact, they absorb heat from their surroundings.",
  flamerion: "They only come out at night and their bodies are made of gaseous energy and can split as they want!",
  flutternym: "They are timid and hide whenever they sense danger, but the fluorescent scales they shake off always give them away.",
  gracewing: "Lone wanderers. They create illusions by shedding scales from their wings when threats approach.",
  somniwing: "Their magnificent wings spread scales to help flowers grow and spread vitality wherever they fly.",
  eko: "With their big ears perked up, they are extremely sensitive to sound. They won't miss any movement that catches their attention, near or far.",
  eklue: "Curious and keen on searching for traces and tracking targets. The ring on their tail amplifies ultrasound, allowing them to easily see through cloaked creatures.",
  susuta: "They dig around to search for gifts to give to their crushes, but their wooing always fails because they are so shy.",
  popota: "They select shells and make them into shovels. It's said that they produce pink bubbles when they see someone they love.",
  piopiota: "Narcissistic little creatures who spend a large amount of time grooming their fur and striking the perfect pose.",
  panpanta: "They are strong and powerful, but they'd rather stay in their nests and decorate than show off their muscles.",
  shelly: "Conceals itself among beach shells using its soft appendages to hold shells in place. Remains sealed during daylight.",
  sheldon: "Lying on their shells, they face the night sky, drowning in a dream woven by the stars.",
  sherro: "They turn the shells that once covered them into swords and shields to protect fragile Shellies along the coastline.",
  baleetle: "They never go anywhere without their stone balls, and the constant rolling makes the balls rounder and stranger.",
  waleetle: "They move backwards like their kin, but in a much fancier way.",
  bouldus: "A round stone that had stayed with Baleetle day and night woke up from all that bumping. Tired of being controlled, it swallowed an insect and could finally move by its own will.",
  cubbo: "They spend the day sleepwalking. If woken up, they instantly become violent and lose control. Once they exhaust their energy, they fall back asleep like a baby.",
  grizbo: "They hide constant endurance and restraint beneath a gentle exterior. However, if provoked or hungry, they lose control and fall into a frenzy.",
  pebbling: "They are natural geologists who like eating all kinds of minerals. And what they eat determines how they grow.",
  lavazar: "They use hard claws to crush crystals and eat them to store heat, causing fiery red patterns to appear on their body. Though small, they can continuously spew high-heat flame streams from their mouth.",
  magmarex: "Scorching crystals grow on their body like solidified lava. If the stored heat erupts, it can melt everything in their path.",
  reefish: "They burrow underground to camouflage as coral and bite any prey that comes near. However, they sometimes get impatient and peek around.",
  coraliz: "They love to bury themselves in sand, mimicking coral clumps. They use the glow of the coral on their head and back to lure creatures for a surprise attack.",
  cheekie: "People often mistake the circles on their cheeks for eyes. They love to gather in groups on the shore, feeling safe only when they huddle closely with their companions.",
  wavwal: "They move clumsily on land using their four limbs, but they are experts at sliding on their bellies. The males are highly territorial against other males, once angered, they unleash their wrath like a tsunami.",
  bubbeep: "It stretches its leafy feathers with lazy ease, always chewing away as it turns algae and slime into floating bubbles. One light hop, and off it drifts, riding the bubbles like a little boat in the breeze.",
  glameep: "Draped in fresh green leaf-feathers, Glameep moves lightly along the lake shore. It adores clear water most of all, especially when that water reflects its own graceful, unhurried beauty.",
};

const regionByAniimo = {
  emberpup: "Mistwoods",
  flameruff: "Mistwoods",
  scorchhowl: "Mistwoods",
  inferlupa: "Mistwoods",
  celestis: "Forest of Falling Stars",
  stellarys: "Forest of Falling Stars",
  chirpi: "Echoback Landing",
  tromber: "Echoback Landing",
  cornet: "Echoback Landing",
  tubster: "Echoback Landing",
  iris: "Sea of Flowers",
  irisal: "Sea of Flowers",
  skippy: "Sea of Flowers",
  pranky: "Sea of Flowers",
  glacy: "Nimbus Fields",
  leafy: "Sea of Flowers",
  nimbi: "Nimbus Fields",
  turbo: "Blitzwood",
  dreaple: "Nimbus Fields",
  hummin: "Mistwoods",
  witchin: "Mistwoods",
  tuckin: "Mistwoods",
  budclaw: "Sea of Flowers",
  shrubclaw: "Sea of Flowers",
  geoclaw: "Mistwoods",
  sparki: "Blitzwood",
  flamerion: "Blitzwood",
  flutternym: "Sea of Flowers",
  gracewing: "Sea of Flowers",
  somniwing: "Forest of Falling Stars",
  eko: "Blitzwood",
  eklue: "Blitzwood",
  susuta: "Forest of Falling Stars",
  popota: "Forest of Falling Stars",
  piopiota: "Forest of Falling Stars",
  panpanta: "Forest of Falling Stars",
  shelly: "Echoback Landing",
  sheldon: "Echoback Landing",
  sherro: "Echoback Landing",
  baleetle: "Blitzwood",
  waleetle: "Blitzwood",
  bouldus: "Blitzwood",
  cubbo: "Nimbus Fields",
  grizbo: "Nimbus Fields",
  pebbling: "Mistwoods",
  lavazar: "Blitzwood",
  magmarex: "Blitzwood",
  reefish: "Echoback Landing",
  coraliz: "Echoback Landing",
  cheekie: "Echoback Landing",
  wavwal: "Echoback Landing",
  bubbeep: "Sea of Flowers",
  glameep: "Sea of Flowers",
};

const evolutionFamilies = [
  ["emberpup", "flameruff", "scorchhowl", "inferlupa"],
  ["celestis", "stellarys"],
  ["chirpi", "tromber", "cornet", "tubster"],
  ["iris", "irisal"],
  ["skippy", "pranky", "glacy", "leafy"],
  ["nimbi", "turbo", "dreaple"],
  ["hummin", "witchin", "tuckin"],
  ["budclaw", "shrubclaw", "geoclaw"],
  ["sparki", "flamerion"],
  ["flutternym", "gracewing", "somniwing"],
  ["eko", "eklue"],
  ["susuta", "popota", "piopiota", "panpanta"],
  ["shelly", "sheldon", "sherro"],
  ["baleetle", "waleetle", "bouldus"],
  ["cubbo", "grizbo"],
  ["pebbling", "lavazar", "magmarex"],
  ["reefish", "coraliz"],
  ["cheekie", "wavwal"],
  ["bubbeep", "glameep"],
];

const evolutionLineById = Object.fromEntries(
  evolutionFamilies.flatMap((family) => family.map((id) => [id, family])),
);

const roleUse = {
  BREAK: "Break-focused Aniimo are good candidates for shield pressure, object interaction and combat openings.",
  DPS: "DPS Aniimo are built around damage pressure, active combat windows and fast encounter clears.",
  Heal: "Heal Aniimo are useful for recovery, sustain and safer exploration routes.",
  Support: "Support Aniimo help with utility, control, traversal and puzzle support.",
};

export const aniimo = names.map(([no, id, name, element, role, stage]) => ({
  no,
  id,
  name,
  element,
  role,
  stage,
  region: regionByAniimo[id] || "Official Wiki",
  habitat: `${regionByAniimo[id] || "Official Wiki"} watchlist. Use this page to connect official region data, map routes and verified spawn notes as launch data expands.`,
  acquisition:
    id === "susuta"
      ? "Official pre-registration reward includes a mysterious Susuta egg."
      : "Catch with Aniipods or obtain through official launch systems once exact encounter routes are verified.",
  condition: "Unique Aniimo may appear according to environment, weather, phenomena and time of day.",
  evolution:
    (evolutionLineById[id] || [id]).length > 1
      ? `${name} is part of the ${evolutionLineById[id].map((familyId) => names.find((entry) => entry[1] === familyId)?.[2]).filter(Boolean).join(" -> ")} line.`
      : `${stage} form listed in the official Aniimo Wiki index.`,
  forms: (evolutionLineById[id] || [id]).map((familyId) => names.find((entry) => entry[1] === familyId)?.[2]).filter(Boolean),
  ability: officialDescriptions[id],
  description: officialDescriptions[id],
  use: `${roleUse[role]} Twine can turn ${name}'s traits into exploration, combat or route-solving utility.`,
  status: "Confirmed",
  source: officialLinks.officialWiki,
  image: aniimoImages[id] || "/images/aniimo/aniimo-group.webp",
}));

export const regions = [
  ["mistwoods", "Mistwoods", "An off-key singing echoes among withered twigs, while swamp mists and glimmer fruits guide lost travelers.", ["Emberpup", "Iris", "Leafy"], ["Exploration", "Weather encounters", "Time-of-day discovery"]],
  ["echoback-landing", "Echoback Landing", "A stranded giant Aniimo waits away from the sea, with answers hidden in the enchanting Echoback singing.", ["Chirpi", "Tromber", "Cornet"], ["Traversal", "Route discovery", "Twine puzzle paths"]],
  ["sea-of-flowers", "Sea of Flowers", "Endless flowers paint the landscape, surrounding a perfume village that has lived beside Aniimo for generations.", ["Irisal", "Flutternym", "Gracewing"], ["Collection routes", "Environmental encounters", "Aniilog progression"]],
  ["blitzwood", "Blitzwood", "Thunder drawn by Bolties carves scorched furrows through grassy slopes as electric sparks crackle in the woods.", ["Turbo", "Sparki", "Eko", "Eklue"], ["Phenomena encounters", "Electric Aniimo routes", "Weather timing"]],
  ["nimbus-fields", "Nimbus Fields", "Soft clouds caress thick grassland, where Nimbis bounce across fields and green waves carry the scent of fresh grass.", ["Nimbi", "Hummin", "Somniwing"], ["Gliding", "Open-world travel", "Field exploration"]],
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
    checklist: ["Official website news", "Official Discord/social posts", "Platform storefront campaigns", "Launch livestream or event posts"],
  },
];

export const platforms = [
  ["Official website", "Pre-registration", "Official pre-registration and launch reward hub.", officialLinks.website],
  ["App Store", "Pre-order", "Official iOS listing for mobile launch tracking.", officialLinks.appStore],
  ["Google Play", "Pre-register", "Android store page by Pawprint Studio with wishlist and pre-registration support.", officialLinks.googlePlay],
  ["Steam", "Wishlist", "Official PC storefront listing for the September 16 PC launch window.", officialLinks.steam],
  ["Epic Games Store", "Wishlist", "Official Epic listing for the September 16 PC launch window.", officialLinks.epic],
  ["Xbox", "Wishlist", "Official Xbox listing for the September 16 console launch window.", officialLinks.xbox],
  ["PlayStation 5", "Wishlist", "Official PlayStation concept page for the September 16 console launch window.", officialLinks.playstation],
].map(([name, action, note, url]) => ({ name, action, note, url, status: "Confirmed" }));

export const mechanics = [
  ["Creature catching", "Players catch Aniimo with Aniipods, set traps, and time catches around encounter behavior."],
  ["Twine", "Players can Twine with collected Aniimo, essentially becoming them to use skills for puzzles, battles and traversal."],
  ["Environment-based encounters", "Unique Aniimo can appear according to environment, weather, phenomena and time of day."],
  ["Egg Heist", "Egg Heist is described as a PVEVP mode where three-player teams search and battle in the Lost Isles."],
  ["Homeland and RV", "Pathfinders have a personal RV and Homeland where they can plant crops, build decorations and interact with Aniimo."],
].map(([title, text]) => ({ title, text, source: officialLinks.googlePlay }));

export const mapGuide = [
  ["Region coverage", "All six public world regions now have official artwork and launch-ready guide pages."],
  ["Encounter routing", "Each region links to representative Aniimo and keeps route details separate from claims that still need launch verification."],
  ["Verification pass", "After launch, update each area with coordinates, weather windows, time-of-day notes and traversal requirements."],
  ["Internal linking", "Region pages link back into Aniimo details so search visitors can move between map, evolution and database pages."],
];

export const editorialGuides = {
  download: [
    ["Use official storefronts", "Start from the official website or platform store page for your device. Avoid APK mirrors or unofficial installers until Pawprint Studio publishes direct files."],
    ["Check platform dates", "PC and console availability is tracked for September 16, 2026, while mobile availability is tracked for September 23, 2026."],
    ["Wishlist or pre-register", "Store pages can use different labels, but wishlist, pre-order and pre-register actions all help you follow launch availability."],
  ],
  release: [
    ["PC and console first", "The official launch announcement lists PC and console launch before mobile."],
    ["Mobile follows one week later", "The mobile launch window is September 23, 2026, giving store pages time to roll out by region."],
    ["Exact unlock times", "Exact hourly unlock timing is not listed here yet; use store pages and official news for the final countdown."],
  ],
  codes: [
    ["Redeem codes", "No public redeem code is confirmed here yet. Keep code claims separate from official pre-registration rewards."],
    ["Reward milestones", "Milestone rewards are confirmed through official launch and pre-registration pages, even when they are not typed as redeem codes."],
    ["Verification rule", "A code should only be marked active after it appears on an official channel or can be redeemed in-game."],
  ],
  wiki: [
    ["Aniimo index", "The database currently focuses on 53 public Aniimo entries with official names, elements, roles, stages and descriptions."],
    ["Map index", "Six public world regions are connected to guide pages with official artwork and representative Aniimo."],
    ["Maintenance", "New official Wiki and site updates should flow into the changelog before pages are refreshed."],
  ],
};

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
    date: "2026-08-28",
    title: "Official detail and map content expanded",
    text: "Expanded Aniimo detail pages with official descriptions, evolution lines, region mapping, platform links, release timeline notes and complete region artwork.",
  },
  {
    date: "2026-08-27",
    title: "Official launch information added",
    text: "Added official launch dates, platform notes, Google Play details, official Wiki names, regions, mechanics and launch rewards.",
  },
  {
    date: "2026-08-27",
    title: "Aniimo Wiki foundation launched",
    text: "Created the initial database, map, evolution, codes, download, beginner guide, and data-status pages.",
  },
];

export const statuses = {
  Confirmed: "Official or in-game verified data.",
  Unconfirmed: "Seen in previews, community reports, or incomplete sources.",
  Estimated: "Planning note based on currently public information.",
  Watchlist: "Tracked for launch; verify before publishing as active.",
};
