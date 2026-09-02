import {
  aniimo,
  beginnerTopics,
  choiceTopics,
  codeRewardTopics,
  conversionTopics,
  downloadTopics,
  freshnessPages,
  glossaryTopics,
  mechanicDeepDiveTopics,
  mediaDetailTopics,
  mediaGalleryItems,
  newsTopics,
  officialPitchTopics,
  refreshPlanningTopics,
  searchSuggestionTopics,
  socialDiscussionResearch,
  socialIntentTopics,
  sourceArchiveItems,
  sourceLastChecked,
  troubleshootingTopics,
} from "../data/content.js";

const issues = [];

const richTopicGroups = [
  ["beginnerTopics", beginnerTopics],
  ["officialPitchTopics", officialPitchTopics],
  ["socialIntentTopics", socialIntentTopics],
  ["searchSuggestionTopics", searchSuggestionTopics],
  ["glossaryTopics", glossaryTopics],
  ["troubleshootingTopics", troubleshootingTopics],
  ["mechanicDeepDiveTopics", mechanicDeepDiveTopics],
  ["mediaDetailTopics", mediaDetailTopics],
  ["conversionTopics", conversionTopics],
  ["refreshPlanningTopics", refreshPlanningTopics],
  ["freshnessPages", freshnessPages],
];

const simpleTopicGroups = [
  ["choiceTopics", choiceTopics],
  ["codeRewardTopics", codeRewardTopics],
  ["downloadTopics", downloadTopics],
  ["newsTopics", newsTopics],
];

for (const [groupName, topics] of richTopicGroups) {
  checkUniqueSlugs(groupName, topics);
  for (const topic of topics) {
    requireText(groupName, topic, "slug", 2);
    requireText(groupName, topic, "title", 12);
    requireText(groupName, topic, "description", 80);
    requireText(groupName, topic, "intro", 100);
    requirePairs(groupName, topic, "points", 3);
    requirePairs(groupName, topic, "faq", 2);
  }
}

for (const [groupName, topics] of simpleTopicGroups) {
  checkUniqueSlugs(groupName, topics);
  for (const topic of topics) {
    requireText(groupName, topic, "slug", 2);
    requireText(groupName, topic, "title", 12);
    if (groupName === "newsTopics") {
      requireText(groupName, topic, "summary", 70);
    } else {
      requireText(groupName, topic, "description", 70);
    }
  }
}

for (const item of aniimo) {
  for (const field of ["id", "name", "no", "element", "role", "stage", "status", "description", "source"]) {
    requireText("aniimo", item, field, field === "description" ? 50 : 1);
  }
  if (!item.image) issues.push(`aniimo ${item.id} is missing an image path.`);
}

for (const item of mediaGalleryItems) {
  requireText("mediaGalleryItems", item, "title", 5);
  requireText("mediaGalleryItems", item, "image", 5);
  requireText("mediaGalleryItems", item, "description", 50);
}

for (const item of sourceArchiveItems) {
  requireText("sourceArchiveItems", item, "title", 5);
  requireText("sourceArchiveItems", item, "url", 12);
  requireText("sourceArchiveItems", item, "scope", 30);
  requireText("sourceArchiveItems", item, "lastChecked", 10);
  if (item.lastChecked !== sourceLastChecked) {
    issues.push(`sourceArchiveItems ${item.title} lastChecked does not match sourceLastChecked.`);
  }
}

for (const item of socialDiscussionResearch) {
  requireText("socialDiscussionResearch", item, "topic", 8);
  requireText("socialDiscussionResearch", item, "signals", 60);
  requireText("socialDiscussionResearch", item, "contentOpportunity", 60);
  requireText("socialDiscussionResearch", item, "sourcePolicy", 40);
}

if (issues.length) {
  console.error(`Content audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Content audit passed: ${aniimo.length} Aniimo entries and ${totalTopics()} topic pages checked.`);

function requireText(groupName, topic, field, minLength) {
  const value = topic[field];
  if (typeof value !== "string" || value.trim().length < minLength) {
    issues.push(`${groupName} ${topic.slug || topic.id || topic.title || "entry"} has weak ${field}.`);
  }
}

function requirePairs(groupName, topic, field, minCount) {
  const value = topic[field];
  if (!Array.isArray(value) || value.length < minCount) {
    issues.push(`${groupName} ${topic.slug} needs at least ${minCount} ${field} entries.`);
    return;
  }

  value.forEach((entry, index) => {
    if (!Array.isArray(entry) || entry.length < 2 || !entry[0] || !entry[1]) {
      issues.push(`${groupName} ${topic.slug} has invalid ${field} entry ${index + 1}.`);
    }
  });
}

function checkUniqueSlugs(groupName, topics) {
  const seen = new Set();
  for (const topic of topics) {
    if (seen.has(topic.slug)) issues.push(`${groupName} has duplicate slug: ${topic.slug}`);
    seen.add(topic.slug);
  }
}

function totalTopics() {
  return [...richTopicGroups, ...simpleTopicGroups].reduce((sum, [, topics]) => sum + topics.length, 0);
}
