import { codeVerificationTemplate, gscObservationTemplate, platformUnlockQueue, spawnVerificationQueue, verificationTemplates } from "../data/content.js";

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

if (issues.length) {
  console.error(`Verification audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Verification audit passed: ${spawnVerificationQueue.length} spawn queues, ${platformUnlockQueue.length} platform queues.`);
