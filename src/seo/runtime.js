import { canonicalUrl, resolveRoute } from "../lib/routes.js";

export function applySeo(path) {
  const routeInfo = resolveRoute(path);

  document.title = routeInfo.title;
  setMeta("meta[name='description']", "content", routeInfo.description);
  setMeta("link[rel='canonical']", "href", canonicalUrl(routeInfo.path));
  setMeta("meta[property='og:title']", "content", routeInfo.title);
  setMeta("meta[property='og:url']", "content", canonicalUrl(routeInfo.path));
  setMeta("meta[property='og:description']", "content", routeInfo.description);
}

function setMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}
