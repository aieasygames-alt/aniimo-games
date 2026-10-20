export function validateRouteCollections({ sitemap, fullSitemap, prerender }) {
  const issues = [];
  findDuplicates(sitemap).forEach((path) => issues.push(`Duplicate sitemap route: ${path}`));
  findDuplicates(fullSitemap).forEach((path) => issues.push(`Duplicate full sitemap route: ${path}`));
  findDuplicates(prerender).forEach((path) => issues.push(`Duplicate prerender route: ${path}`));

  for (const path of fullSitemap) {
    if (!path.startsWith("/")) issues.push(`Route must start with slash: ${path}`);
    if (path !== "/" && !path.endsWith("/")) issues.push(`Route must end with slash: ${path}`);
  }

  for (const path of sitemap) {
    if (!fullSitemap.includes(path)) issues.push(`Route missing from full sitemap routes: ${path}`);
  }

  return issues;
}

function findDuplicates(items) {
  const seen = new Set();
  const duplicates = new Set();
  items.forEach((item) => {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  });
  return duplicates;
}
