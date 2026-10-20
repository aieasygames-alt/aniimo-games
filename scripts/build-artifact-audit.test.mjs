import test from "node:test";
import assert from "node:assert/strict";
import { validateBuildArtifacts } from "../scripts/build-artifact-audit.mjs";

test("build artifact validation accepts a complete prerendered route", () => {
  const issues = validateBuildArtifacts({
    html: '<html><head><meta name="robots" content="index,follow" /><link rel="canonical" href="https://aniimo.games/" /></head></html>',
    route: "/",
    expectedRobots: "index,follow",
  });

  assert.deepEqual(issues, []);
});

test("build artifact validation reports missing SEO markers", () => {
  const issues = validateBuildArtifacts({ html: "<html></html>", route: "/aniimo/", expectedRobots: "index,follow" });
  assert.deepEqual(issues, [
    "Missing robots meta for /aniimo/",
    "Missing canonical link for /aniimo/",
  ]);
});
