import { launchPriorityPages, launchStatusEntries, tierListSnapshots, gscLatestObservations, platformUnlockQueue, sourceLastChecked } from "../data/content.js";
import { indexingCandidateSections } from "./indexing-candidate-rules.mjs";

const issues = [];
const requiredStatuses = new Set(["server", "pc-console", "mobile", "codes", "known-issues", "discord"]);
const statusIds = new Set(launchStatusEntries.map((entry) => entry.id));

for (const id of requiredStatuses) {
  if (!statusIds.has(id)) issues.push(`Missing required launch status: ${id}`);
}

for (const entry of launchStatusEntries) {
  if (entry.lastChecked !== sourceLastChecked) {
    issues.push(`Stale launch status ${entry.id}: ${entry.lastChecked} (expected ${sourceLastChecked}).`);
  }
  if (!/^https:\/\//.test(entry.source)) issues.push(`Launch status ${entry.id} has an invalid source URL.`);
}

for (const item of platformUnlockQueue) {
  if (!statusIds.has(item.platform === "Steam" || item.platform === "Epic Games Store" || item.platform === "Xbox" || item.platform === "PlayStation 5" ? "pc-console" : "mobile")) {
    issues.push(`Platform queue item is not covered by launch status: ${item.platform}`);
  }
}

for (const snapshot of tierListSnapshots) {
  if (snapshot.updated !== gscLatestObservations.date) issues.push(`Tier snapshot ${snapshot.id} is stale: ${snapshot.updated}.`);
}

const priorityUrls = indexingCandidateSections().urls;
for (const [path] of launchPriorityPages) {
  if (!priorityUrls.some((url) => url.endsWith(path))) issues.push(`Priority launch URL is missing from indexing candidates: ${path}`);
}

if (new Set(launchPriorityPages.map(([path]) => path)).size !== launchPriorityPages.length) {
  issues.push("Launch priority pages contain duplicate paths.");
}

if (issues.length) {
  console.error(`Launch readiness audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Launch readiness audit passed: ${launchStatusEntries.length} statuses, ${platformUnlockQueue.length} platform queues, ${tierListSnapshots.length} tier snapshots.`);
