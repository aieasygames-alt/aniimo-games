import { codeVerificationTemplate, gscObservationTemplate, launchEvidenceQueues, launchStatusEntries, platformUnlockQueue, spawnVerificationQueue, tierListSnapshots, verificationTemplates } from "../data/content.js";

const issues = [];

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
}

for (const snapshot of tierListSnapshots) {
  for (const field of ["id", "label", "status", "updated", "context", "evidence", "nextCheck"]) {
    if (!snapshot[field]) issues.push(`Tier list snapshot ${snapshot.id || "unknown"} is missing ${field}.`);
  }
}

if (issues.length) {
  console.error(`Verification audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Verification audit passed: ${spawnVerificationQueue.length} spawn queues, ${platformUnlockQueue.length} platform queues, ${launchStatusEntries.length} launch statuses.`);
