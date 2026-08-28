import { canonicalUrl, pageFaqsForRoute, resolveRoute, structuredDataForRoute } from "../lib/routes.js";

export function applySeo(path) {
  const routeInfo = resolveRoute(path);
  const pageFaqs = pageFaqsForRoute(routeInfo);

  document.title = routeInfo.title;
  setMeta("meta[name='description']", "content", routeInfo.description);
  setMeta("link[rel='canonical']", "href", canonicalUrl(routeInfo.path));
  setMeta("meta[property='og:title']", "content", routeInfo.title);
  setMeta("meta[property='og:url']", "content", canonicalUrl(routeInfo.path));
  setMeta("meta[property='og:description']", "content", routeInfo.description);
  upsertJsonLd(structuredDataForRoute(routeInfo, pageFaqs));
}

function upsertJsonLd(items) {
  const id = "structured-data-json-ld";
  const previous = document.getElementById(id);
  const script = previous || document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(items);
  if (!previous) document.head.appendChild(script);
}

function setMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}
