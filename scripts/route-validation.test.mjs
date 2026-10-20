import test from "node:test";
import assert from "node:assert/strict";
import { validateRouteCollections } from "../src/lib/route-validation.js";

test("route collections have no duplicates and preserve canonical paths", () => {
  const result = validateRouteCollections({
    sitemap: ["/", "/aniimo/"],
    fullSitemap: ["/", "/aniimo/"],
    prerender: ["/", "/aniimo/"],
  });

  assert.deepEqual(result, []);
});

test("route validation reports duplicates and malformed paths", () => {
  const result = validateRouteCollections({
    sitemap: ["/", "/aniimo", "/aniimo"],
    fullSitemap: ["/", "aniimo/"],
    prerender: ["/"],
  });

  assert.deepEqual(result, [
    "Duplicate sitemap route: /aniimo",
    "Route must start with slash: aniimo/",
    "Route missing from full sitemap routes: /aniimo",
    "Route missing from full sitemap routes: /aniimo",
  ]);
});
