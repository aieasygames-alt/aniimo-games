import { codeVerificationTemplate, eventStatus, gscObservationTemplate, launchEvidenceQueues, launchStatusEntries, liveUpdate, platformUnlockQueue, searchIntentStatus, spawnVerificationQueue, tierListSnapshots, verificationTemplates, wikiProbeGaps } from "../data/content.js";

const issues = [];
const allowedStatuses = new Set(["Confirmed", "Verified", "Watchlist", "Unconfirmed", "Estimated", "Unknown", "Online", "Maintenance", "Degraded", "Outage", "Upcoming", "Active", "Ended"]);

for (const [name, template] of Object.entries(verificationTemplates)) {
  if (!template.requiredFields?.length) issues.push(`${name} template has no required fields.`);
  if (!template.optionalFields?.length) issues.push(`${name} template has no optional fields.`);
}

for (const item of spawnVerificationQueue) {
  if (!item.region || !item.aniimo || !item.task || !item.status || !item.source) {
    issues.push(`Spawn verification queue item is incomplete: ${JSON.stringify(item)}`);
  }
}

for (const item of platformUnlockQueue) {
  if (!item.platform || !item.releaseDate || !item.status || !item.source) {
    issues.push(`Platform unlock queue item is incomplete: ${JSON.stringify(item)}`);
  }
}

if (!codeVerificationTemplate.fieldsToCapture.includes("code")) issues.push("Code verification template must capture code.");
if (!gscObservationTemplate.fieldsToCapture.includes("page")) issues.push("GSC observation template must capture page.");

for (const [name, queue] of Object.entries(launchEvidenceQueues)) {
  if (!queue.title || !queue.rows?.length) issues.push(`${name} evidence queue is incomplete.`);
  for (const row of queue.rows || []) {
    if (row.length !== 3 || row.some((value) => !value)) issues.push(`${name} evidence queue has an incomplete row: ${JSON.stringify(row)}`);
  }
}

for (const entry of launchStatusEntries) {
  for (const field of ["id", "label", "value", "status", "source", "lastChecked", "note"]) {
    if (!entry[field]) issues.push(`Launch status entry ${entry.id || "unknown"} is missing ${field}.`);
  }
  if (!allowedStatuses.has(entry.status)) issues.push(`Launch status entry ${entry.id} uses unsupported status: ${entry.status}.`);
}

for (const snapshot of tierListSnapshots) {
  for (const field of ["id", "label", "status", "updated", "context", "evidence", "nextCheck"]) {
    if (!snapshot[field]) issues.push(`Tier list snapshot ${snapshot.id || "unknown"} is missing ${field}.`);
  }
  if (!allowedStatuses.has(snapshot.status)) issues.push(`Tier list snapshot ${snapshot.id} uses unsupported status: ${snapshot.status}.`);
}

for (const [slug, item] of Object.entries(searchIntentStatus)) {
  if (!item.statusId || !item.action || !launchStatusEntries.some((entry) => entry.id === item.statusId)) {
    issues.push(`Search intent status mapping is incomplete: ${slug}.`);
  }
}

if (wikiProbeGaps.status !== "Watchlist" || !wikiProbeGaps.lastChecked || !wikiProbeGaps.note || !wikiProbeGaps.numbers?.length) {
  issues.push("Wiki probe gap policy is incomplete.");
}

for (const event of liveUpdate.events) {
  if (!event.name || !(event.startsAt || event.startDate) || !event.detail || !event.source) issues.push(`Live update event is incomplete: ${JSON.stringify(event)}`);
  if (event.startDate && (!/^\d{4}-\d{2}-\d{2}$/.test(event.startDate) || !/^\d{4}-\d{2}-\d{2}$/.test(event.endDate || ""))) issues.push(`Date-only event must include both ISO dates: ${event.name}`);
  const start = new Date(event.startsAt || event.startDate);
  const end = event.endsAt || event.endDate ? new Date(event.endsAt || event.endDate) : null;
  if (Number.isNaN(start.valueOf()) || (end && Number.isNaN(end.valueOf()))) issues.push(`Live update event has an invalid date: ${event.name}`);
  if (end && end <= start) issues.push(`Live update event ends before it starts: ${event.name}`);
  if (!new Set(["Active", "Upcoming", "Ended", "Check in client", "Closed this week"]).has(eventStatus(event))) issues.push(`Live update event has an unsupported calculated status: ${event.name}`);
  if (event.recurrence && ![event.recurrence.opens, event.recurrence.closes].every((value) => Number.isInteger(value) && value >= 0 && value < 10080)) issues.push(`Invalid weekly window: ${event.name}`);
}

if (issues.length) {
  console.error(`Verification audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Verification audit passed: ${spawnVerificationQueue.length} spawn queues, ${platformUnlockQueue.length} platform queues, ${launchStatusEntries.length} launch statuses.`);
