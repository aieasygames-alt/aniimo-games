import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const inputDir = process.argv[2] || "/Users/robert/Downloads/aniimo.games-Performance-on-Search-2026-08-31";
const outputPath = process.argv[3] || "gsc-analysis.md";

const files = {
  chart: "Chart.csv",
  countries: "Countries.csv",
  devices: "Devices.csv",
  pages: "Pages.csv",
  queries: "Queries.csv",
};

for (const file of Object.values(files)) {
  if (!existsSync(join(inputDir, file))) {
    console.error(`Missing GSC export file: ${join(inputDir, file)}`);
    process.exit(1);
  }
}

const chart = readCsv(files.chart);
const countries = readCsv(files.countries);
const devices = readCsv(files.devices);
const pages = readCsv(files.pages);
const queries = readCsv(files.queries);

const totals = summarize(chart);
const pageGroups = groupPages(pages);
const pageImpressions = sum(pages, "Impressions");
const wwwSplit = pages.filter((row) => row["Top pages"]?.startsWith("https://www.aniimo.games/"));
const nonWwwSplit = pages.filter((row) => row["Top pages"]?.startsWith("https://aniimo.games/"));

const markdown = `# Aniimo.games GSC Analysis

Generated: ${new Date().toISOString()}

Source: ${inputDir}

## Summary

- Date range: ${filterRange()}
- Clicks: ${totals.clicks}
- Impressions: ${totals.impressions}
- CTR: ${formatPercent(totals.ctr)}
- Average position: ${totals.position.toFixed(2)}
- Export: ${basename(inputDir)}
- Page export impressions: ${pageImpressions} before www/non-www consolidation.

## Technical Findings

- www impressions: ${sum(wwwSplit, "Impressions")}
- non-www impressions: ${sum(nonWwwSplit, "Impressions")}
- Note: page-level and chart-level totals can differ in GSC exports because dimensions are aggregated separately.
- Action: keep the 301 redirect from \`www.aniimo.games\` to \`aniimo.games\` and compare this split after deployment.

## Top Page Groups

${table(["Page", "Clicks", "Impressions", "CTR", "Position"], pageGroups.slice(0, 12).map((row) => [
  row.page,
  row.clicks,
  row.impressions,
  formatPercent(row.ctr),
  row.position.toFixed(2),
]))}

## Query Opportunities

${table(["Query", "Impressions", "Position", "Suggested action"], queries.slice(0, 20).map((row) => [
  row["Top queries"],
  row.Impressions,
  row.Position,
  queryAction(row["Top queries"]),
]))}

## Country Opportunities

${table(["Country", "Clicks", "Impressions", "Position", "Suggested action"], countries.slice(0, 15).map((row) => [
  row.Country,
  row.Clicks,
  row.Impressions,
  row.Position,
  countryAction(row.Country),
]))}

## Device Notes

${table(["Device", "Clicks", "Impressions", "CTR", "Position"], devices.map((row) => [
  row.Device,
  row.Clicks,
  row.Impressions,
  row.CTR,
  row.Position,
]))}

## Next Actions

- Submit the GSC First Refresh section in \`indexing-candidates.md\` after deployment.
- Re-export GSC after Google sees the new canonical and page changes.
- Refresh page titles, FAQs and internal links when a query reaches at least 10 impressions with a top-10 average position and low CTR.
`;

writeFileSync(outputPath, markdown);
console.log(markdown);

function readCsv(file) {
  const text = readFileSync(join(inputDir, file), "utf8").trim();
  if (!text) return [];
  const [headerLine, ...lines] = text.split(/\r?\n/);
  const headers = splitCsvLine(headerLine);
  return lines.filter(Boolean).map((line) => {
    const columns = splitCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, columns[index] || ""]));
  });
}

function splitCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }
  values.push(value);
  return values;
}

function summarize(rows) {
  const clicks = sum(rows, "Clicks");
  const impressions = sum(rows, "Impressions");
  const position = weightedPosition(rows);
  return {
    clicks,
    impressions,
    ctr: impressions ? clicks / impressions : 0,
    position,
  };
}

function groupPages(rows) {
  const groups = new Map();
  for (const row of rows) {
    const page = normalizePage(row["Top pages"]);
    const current = groups.get(page) || { page, clicks: 0, impressions: 0, positionWeight: 0 };
    current.clicks += number(row.Clicks);
    current.impressions += number(row.Impressions);
    current.positionWeight += number(row.Position) * number(row.Impressions);
    groups.set(page, current);
  }
  return [...groups.values()]
    .map((row) => ({
      ...row,
      ctr: row.impressions ? row.clicks / row.impressions : 0,
      position: row.impressions ? row.positionWeight / row.impressions : 0,
    }))
    .sort((a, b) => b.impressions - a.impressions);
}

function normalizePage(url) {
  return url.replace("https://www.aniimo.games", "https://aniimo.games");
}

function queryAction(query) {
  const value = query.toLowerCase();
  if (value.includes("controller")) return "Strengthen controller support guidance, platform limits and links to known issues.";
  if (value.includes("junior wayfarer")) return "Refresh Junior Wayfarer eligibility, delivery status and official reward-source links.";
  if (value.includes("server") || value.includes("down")) return "Keep server-status language source-dated and link to known issues and launch support.";
  if (value.includes("blitzwood") || value.includes("mistwoods")) return "Strengthen the matching region hub and source-labeled location links.";
  if (value.includes("location")) return "Improve the matching Aniimo location answer without claiming unverified coordinates.";
  if (value.includes("reroll")) return "Link to the reroll guide and keep account-reset advice verification-labeled.";
  if (value.includes("map")) return "Strengthen map-size, region count and route-verification content.";
  if (value.includes("code")) return "Keep code pages fresh and separate rewards from redeemable strings.";
  if (value.includes("guide")) return "Route homepage and site-index links toward the guide hub.";
  if (value.includes("beta")) return "Point beta/key searches to safety and closed-beta history pages.";
  if (value.includes("aniimo") || ["inferlupa", "cozite"].includes(value)) return "Improve character detail snippets and internal links.";
  return "Watch until impressions grow before creating new content.";
}

function countryAction(country) {
  if (country === "Brazil") return "Monitor Portuguese launch page performance.";
  if (country === "Spain" || country === "Mexico" || country === "Chile") return "Monitor Spanish launch page performance.";
  if (country === "Germany" || country === "Austria") return "Keep German launch pages linked from release and launch hubs.";
  if (country === "United States" || country === "United Kingdom" || country === "Canada" || country === "Australia") return "Focus title and snippet CTR on English launch intent.";
  return "Watch for repeated impressions before adding country-specific copy.";
}

function filterRange() {
  const filterPath = join(inputDir, "Filters.csv");
  if (!existsSync(filterPath)) return "Unknown";
  const rows = readCsv("Filters.csv");
  return rows.find((row) => row.Filter === "Time range" || row.Filter === "Date")?.Value || "Unknown";
}

function weightedPosition(rows) {
  const impressions = sum(rows, "Impressions");
  if (!impressions) return 0;
  return rows.reduce((total, row) => total + number(row.Position) * number(row.Impressions), 0) / impressions;
}

function sum(rows, key) {
  return rows.reduce((total, row) => total + number(row[key]), 0);
}

function number(value) {
  return Number(String(value).replace("%", "")) || 0;
}

function formatPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function table(headers, rows) {
  const escape = (value) => String(value).replaceAll("|", "\\|");
  return [
    `| ${headers.map(escape).join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(escape).join(" | ")} |`),
  ].join("\n");
}
