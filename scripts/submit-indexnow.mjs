import { readFileSync } from "node:fs";
import { siteUrl } from "../src/lib/routes.js";

const key = "1d4f7299d7d34b68ac75b38ffb9498f8";
const keyLocation = `${siteUrl}/${key}.txt`;
const endpoint = "https://www.bing.com/indexnow";
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const chunkSize = 100;
const issues = [];

if (!urls.length) {
  console.error("IndexNow submit failed: no URLs found in public/sitemap.xml.");
  process.exit(1);
}

for (let index = 0; index < urls.length; index += chunkSize) {
  const urlList = urls.slice(index, index + chunkSize);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: new URL(siteUrl).host,
      key,
      keyLocation,
      urlList,
    }),
  }).catch((error) => {
    issues.push(`Request failed for batch ${index / chunkSize + 1}: ${error.message}`);
    return null;
  });

  if (!response) continue;
  if (![200, 202].includes(response.status)) {
    const text = await response.text().catch(() => "");
    issues.push(`Batch ${index / chunkSize + 1} returned ${response.status}: ${text.slice(0, 240)}`);
  } else {
    console.log(`Submitted batch ${index / chunkSize + 1}: ${urlList.length} URLs (${response.status}).`);
  }
}

if (issues.length) {
  console.error(`IndexNow submit finished with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`IndexNow submit finished: ${urls.length} URLs submitted with keyLocation ${keyLocation}.`);
