import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { isNoindexRoute, prerenderRoutes, resolveRoute } from "../src/lib/routes.js";

export function validateBuildArtifacts({ html, route, expectedRobots }) {
  const issues = [];
  if (!html.includes(`<meta name="robots" content="${expectedRobots}"`)) issues.push(`Missing robots meta for ${route}`);
  if (!html.includes("<link rel=\"canonical\"")) issues.push(`Missing canonical link for ${route}`);
  return issues;
}

if (process.argv[1]?.endsWith("build-artifact-audit.mjs")) {
  const issues = [];
  const routes = prerenderRoutes();

  for (const route of routes) {
    const file = route === "/" ? "dist/index.html" : join("dist", route, "index.html");
    if (!existsSync(file)) {
      issues.push(`Missing prerendered HTML: ${route}`);
      continue;
    }

    const html = readFileSync(file, "utf8");
    const routeInfo = resolveRoute(route);
    const expectedRobots = routeInfo.type === "not-found" || isNoindexRoute(routeInfo.path) ? "noindex,follow" : "index,follow";
    validateBuildArtifacts({ html, route, expectedRobots }).forEach((issue) => issues.push(issue));
  }

  if (!existsSync("dist/assets")) issues.push("Missing dist/assets directory");
  if (!existsSync("dist/sitemap.xml")) issues.push("Missing dist/sitemap.xml");
  if (!existsSync("dist/robots.txt")) issues.push("Missing dist/robots.txt");

  if (issues.length) {
    console.error(`Build artifact audit failed with ${issues.length} issue(s):`);
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exit(1);
  }

  console.log(`Build artifact audit passed: ${routes.length} HTML routes verified.`);
}
