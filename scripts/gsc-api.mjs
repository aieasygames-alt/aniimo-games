import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const configDir = join(root, ".gsc");
const clientPath = join(configDir, "oauth-client.json");
const tokenPath = join(configDir, "token.json");
const outputPath = join(root, "gsc-api-analysis.md");
const property = process.env.GSC_PROPERTY || "sc-domain:aniimo.games";
const scope = "https://www.googleapis.com/auth/webmasters.readonly";
const command = process.argv[2] || "help";

try {
  if (command === "auth") {
    await authorize();
  } else if (command === "report") {
    await report();
  } else {
    help();
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

async function authorize() {
  ensureClientFile();
  const client = readClient();
  const device = await postForm("https://oauth2.googleapis.com/device/code", {
    client_id: client.client_id,
    scope,
  });

  console.log("\nGoogle Search Console authorization");
  console.log(`1. Open: ${device.verification_url}`);
  console.log(`2. Enter code: ${device.user_code}`);
  console.log("3. Approve read-only Search Console access.");
  console.log("\nWaiting for authorization...");

  const token = await pollDeviceToken(client, device);
  writeJson(tokenPath, {
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    expires_at: Date.now() + token.expires_in * 1000,
    scope: token.scope,
    token_type: token.token_type,
  });

  console.log(`Authorized GSC API access for ${property}. Token saved locally at .gsc/token.json.`);
}

async function report() {
  const token = await accessToken();
  const endDate = isoDate(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000));
  const startDate = isoDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
  const [queries, pages, countries, devices, sitemaps] = await Promise.all([
    searchAnalytics(token, { startDate, endDate, dimensions: ["query"], rowLimit: 100 }),
    searchAnalytics(token, { startDate, endDate, dimensions: ["page"], rowLimit: 100 }),
    searchAnalytics(token, { startDate, endDate, dimensions: ["country"], rowLimit: 50 }),
    searchAnalytics(token, { startDate, endDate, dimensions: ["device"], rowLimit: 10 }),
    listSitemaps(token),
  ]);

  const markdown = `# Aniimo.games GSC API Report

Generated: ${new Date().toISOString()}

Property: ${property}
Date range: ${startDate} to ${endDate}

## Query Opportunities

${table(["Query", "Clicks", "Impressions", "CTR", "Position", "Suggested action"], rows(queries).map((row) => [
  row.keys[0],
  row.clicks,
  row.impressions,
  percent(row.ctr),
  row.position.toFixed(2),
  queryAction(row.keys[0]),
]))}

## Page Performance

${table(["Page", "Clicks", "Impressions", "CTR", "Position"], rows(pages).map((row) => [
  row.keys[0],
  row.clicks,
  row.impressions,
  percent(row.ctr),
  row.position.toFixed(2),
]))}

## Countries

${table(["Country", "Clicks", "Impressions", "CTR", "Position"], rows(countries).map((row) => [
  row.keys[0],
  row.clicks,
  row.impressions,
  percent(row.ctr),
  row.position.toFixed(2),
]))}

## Devices

${table(["Device", "Clicks", "Impressions", "CTR", "Position"], rows(devices).map((row) => [
  row.keys[0],
  row.clicks,
  row.impressions,
  percent(row.ctr),
  row.position.toFixed(2),
]))}

## Submitted Sitemaps

${table(["Path", "Last submitted", "Warnings", "Errors"], (sitemaps.sitemap || []).map((item) => [
  item.path,
  item.lastSubmitted || "Unknown",
  item.warnings || 0,
  item.errors || 0,
]))}
`;

  writeFileSync(outputPath, markdown);
  console.log(markdown);
}

function help() {
  console.log(`Usage:
  npm run gsc:auth
  npm run gsc:api

Before auth, create .gsc/oauth-client.json with an OAuth desktop client:
{
  "client_id": "...apps.googleusercontent.com",
  "client_secret": "..."
}

The OAuth scope is read-only: ${scope}
Default property: ${property}`);
}

async function accessToken() {
  if (!existsSync(tokenPath)) {
    throw new Error("Missing .gsc/token.json. Run npm run gsc:auth first.");
  }

  const token = readJson(tokenPath);
  if (token.access_token && token.expires_at && token.expires_at > Date.now() + 60_000) {
    return token.access_token;
  }

  const client = readClient();
  const refreshed = await postForm("https://oauth2.googleapis.com/token", {
    client_id: client.client_id,
    client_secret: client.client_secret,
    refresh_token: token.refresh_token,
    grant_type: "refresh_token",
  });

  const next = {
    ...token,
    access_token: refreshed.access_token,
    expires_at: Date.now() + refreshed.expires_in * 1000,
    token_type: refreshed.token_type,
  };
  writeJson(tokenPath, next);
  return next.access_token;
}

async function searchAnalytics(token, body) {
  return googleFetch(token, `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ searchType: "web", ...body }),
  });
}

async function listSitemaps(token) {
  return googleFetch(token, `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/sitemaps`);
}

async function googleFetch(token, url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(json)}`);
  }
  return json;
}

async function pollDeviceToken(client, device) {
  const started = Date.now();
  while (Date.now() - started < device.expires_in * 1000) {
    await sleep((device.interval || 5) * 1000);
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: client.client_id,
        client_secret: client.client_secret,
        device_code: device.device_code,
        grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      }),
    });
    const json = await response.json();
    if (response.ok) return json;
    if (json.error === "authorization_pending") continue;
    if (json.error === "slow_down") {
      await sleep(5000);
      continue;
    }
    throw new Error(`Authorization failed: ${JSON.stringify(json)}`);
  }
  throw new Error("Authorization timed out. Run npm run gsc:auth again.");
}

async function postForm(url, fields) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(fields),
  });
  const json = await response.json();
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(json)}`);
  return json;
}

function ensureClientFile() {
  mkdirSync(configDir, { recursive: true });
  if (!existsSync(clientPath)) {
    writeJson(clientPath, {
      client_id: "PASTE_OAUTH_DESKTOP_CLIENT_ID_HERE",
      client_secret: "PASTE_OAUTH_DESKTOP_CLIENT_SECRET_HERE",
    });
    throw new Error("Created .gsc/oauth-client.json. Add your OAuth desktop client_id/client_secret, then run npm run gsc:auth again.");
  }
}

function readClient() {
  ensureClientFile();
  const client = readJson(clientPath);
  if (!client.client_id || client.client_id.includes("PASTE_") || !client.client_secret || client.client_secret.includes("PASTE_")) {
    throw new Error("Fill .gsc/oauth-client.json with a Google OAuth Desktop client before authorizing.");
  }
  return client;
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function rows(response) {
  return response.rows || [];
}

function percent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function queryAction(query) {
  const value = String(query || "").toLowerCase();
  if (value.includes("code")) return "Refresh codes, active-code status and rewards distinction.";
  if (value.includes("download") || value.includes("apk")) return "Strengthen official download and safety links.";
  if (value.includes("map") || value.includes("location")) return "Improve map, region and launch verification links.";
  if (value.includes("cross") || value.includes("controller") || value.includes("requirement")) return "Update platform compatibility pages.";
  if (value.includes("vs") || value.includes("like")) return "Improve comparison pages with source-safe matrices.";
  if (value.includes("aniimo")) return "Improve title, FAQ and internal links for matching Aniimo pages.";
  return "Watch until impressions or position justify a content refresh.";
}

function table(headers, rows) {
  const escape = (value) => String(value ?? "").replaceAll("|", "\\|");
  return [
    `| ${headers.map(escape).join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(escape).join(" | ")} |`),
  ].join("\n");
}
