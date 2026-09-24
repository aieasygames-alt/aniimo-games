import { existsSync, readFileSync } from "node:fs";
import { fullSitemapRoutes, siteUrl } from "../src/lib/routes.js";

const publisherId = "ca-pub-9405779043815952";
const adsTxtRecord = `google.com, pub-9405779043815952, DIRECT, f08c47fec0942fa0`;
const localChecks = [];
const liveChecks = [];
const index = readFileSync("index.html", "utf8");
const redirects = readFileSync("public/_redirects", "utf8");
const privacySource = readFileSync("src/pages/pages.jsx", "utf8");
const routes = new Set(fullSitemapRoutes());

if (!existsSync("public/ads.txt") || !readFileSync("public/ads.txt", "utf8").trim().split(/\r?\n/).includes(adsTxtRecord)) {
  localChecks.push("Missing the required Google AdSense ads.txt authorization record in public/ads.txt.");
}

if (!existsSync("dist/ads.txt") || !readFileSync("dist/ads.txt", "utf8").trim().split(/\r?\n/).includes(adsTxtRecord)) {
  localChecks.push("Missing the ads.txt authorization record from the production build. Run the production build before auditing.");
}

if (!index.includes(`adsbygoogle.js?client=${publisherId}`)) {
  localChecks.push("Missing the AdSense loader script with the configured publisher ID in index.html.");
}

if (!index.includes('crossorigin="anonymous"')) {
  localChecks.push("The AdSense loader script must include crossorigin=\"anonymous\".");
}

if (!routes.has("/privacy-policy/")) {
  localChecks.push("Privacy policy is not included in the discoverable route set.");
}

if (!existsSync("dist/privacy-policy/index.html")) {
  localChecks.push("Missing prerendered privacy-policy page. Run the production build before auditing.");
}

for (const phrase of ["Cookies and Google advertising", "Your choices", "does not sell personal information"]) {
  if (!privacySource.includes(phrase)) localChecks.push(`Privacy policy is missing required disclosure: ${phrase}.`);
}

if (!redirects.includes("https://www.aniimo.games/* https://aniimo.games/:splat 301!")) {
  localChecks.push("Missing the www to apex-domain permanent redirect rule.");
}

if (localChecks.length) {
  console.error(`AdSense local readiness audit failed with ${localChecks.length} issue(s):`);
  localChecks.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

const pages = ["/", "/about/", "/editorial-policy/", "/contact/", "/privacy-policy/"];
for (const path of pages) {
  const url = `${siteUrl}${path}`;
  const response = await fetch(url, { redirect: "manual" }).catch((error) => {
    liveChecks.push(`${url} could not be fetched: ${error.message}`);
    return null;
  });
  if (!response) continue;
  if (response.status !== 200) {
    liveChecks.push(`${url} returned ${response.status}; deploy the page before applying.`);
    continue;
  }
  const html = await response.text();
  if (!html.includes('<meta name="robots" content="index,follow"')) {
    liveChecks.push(`${url} is not publicly indexable.`);
  }
  if (!html.includes("<h1>")) liveChecks.push(`${url} has no server-rendered H1.`);
  if (path === "/privacy-policy/" && !html.includes(`adsbygoogle.js?client=${publisherId}`)) {
    liveChecks.push(`${url} does not include the deployed AdSense loader script.`);
  }
}

const adsTxtUrl = `${siteUrl}/ads.txt`;
const adsTxtResponse = await fetch(adsTxtUrl, { redirect: "manual" }).catch((error) => {
  liveChecks.push(`${adsTxtUrl} could not be fetched: ${error.message}`);
  return null;
});
if (adsTxtResponse) {
  if (adsTxtResponse.status !== 200) {
    liveChecks.push(`${adsTxtUrl} returned ${adsTxtResponse.status}; deploy ads.txt before applying.`);
  } else if (!(await adsTxtResponse.text()).trim().split(/\r?\n/).includes(adsTxtRecord)) {
    liveChecks.push(`${adsTxtUrl} does not contain the required Google AdSense authorization record.`);
  }
}

for (const path of ["/", "/aniimo/"]) {
  const url = `https://www.aniimo.games${path}`;
  const response = await fetch(url, { redirect: "manual" }).catch((error) => {
    liveChecks.push(`${url} could not be fetched: ${error.message}`);
    return null;
  });
  if (!response) continue;
  const expected = `${siteUrl}${path}`;
  if (![301, 308].includes(response.status) || response.headers.get("location") !== expected) {
    liveChecks.push(`${url} must permanently redirect to ${expected}; received ${response.status} -> ${response.headers.get("location") || "no location"}.`);
  }
}

if (liveChecks.length) {
  console.error(`AdSense deployment readiness audit failed with ${liveChecks.length} issue(s):`);
  liveChecks.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`AdSense readiness audit passed: ${pages.length} public trust pages, ad loader, ads.txt, privacy disclosures and canonical host redirect verified.`);
