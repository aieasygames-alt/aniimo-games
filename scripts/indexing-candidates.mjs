import { writeFileSync } from "node:fs";
import { indexingCandidateSections } from "./indexing-candidate-rules.mjs";

const { sections, urls } = indexingCandidateSections();

const markdown = `# Aniimo Indexing Candidates

Generated: ${new Date().toISOString()}

Use this list after a GitHub push and Cloudflare deployment. Submit the first sections first when manual indexing quota is limited.

${sections.map(sectionMarkdown).join("\n\n")}

## Plain URL List

${urls.map((url) => `- ${url}`).join("\n")}
`;

writeFileSync("indexing-candidates.md", markdown);
console.log(markdown);

function sectionMarkdown(section) {
  return `## ${section.title}

${section.routes.map((route) => `- ${route.url} - ${route.title}`).join("\n") || "- No matching URLs found."}`;
}
