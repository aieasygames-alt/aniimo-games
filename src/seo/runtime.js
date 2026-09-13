import { aniimoPath, canonicalUrl, resolveRoute } from "../lib/routes.js";
import { localeForPath } from "../../data/locales/index.js";
import { gameInfo, localizedTopics, siteLastUpdated } from "../../data/content.js";

export function applySeo(path) {
  const routeInfo = resolveRoute(path);
  const locale = localeForPath(path);
  document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : "en";

  document.title = routeInfo.title;
  setMeta("meta[name='description']", "content", routeInfo.description);
  setMeta("link[rel='canonical']", "href", canonicalUrl(routeInfo.path));
  setMeta("meta[property='og:title']", "content", routeInfo.title);
  setMeta("meta[property='og:url']", "content", canonicalUrl(routeInfo.path));
  setMeta("meta[property='og:description']", "content", routeInfo.description);
  setMeta("meta[property='og:image']", "content", gameInfo.ogImage?.startsWith("http") ? gameInfo.ogImage : `https://aniimo.games${gameInfo.ogImage}`);
  setMeta("meta[name='dateModified']", "content", siteLastUpdated);
  syncHreflang(routeInfo.path, locale);
}

function syncHreflang(path, locale) {
  document.querySelectorAll("link[data-locale-alternate]").forEach((node) => node.remove());
  document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((node) => node.remove());
  const portugueseMatch = localizedTopics.find((topic) => `/${topic.locale === "pt" ? "pt-br" : topic.locale}/${topic.slug}/` === path);
  const routeInfo = resolveRoute(path);
  const englishHref = routeInfo.type === "localized-aniimo" ? aniimoPath(routeInfo.detail) : (portugueseMatch ? "/" : path);
  const links = locale === "pt-BR"
    ? [{ lang: "en", href: englishHref }, { lang: "pt-BR", href: path }, { lang: "x-default", href: englishHref }]
    : [{ lang: "en", href: path }, { lang: "x-default", href: path }];
  links.forEach(({ lang, href }) => {
    const node = document.createElement("link");
    node.rel = "alternate";
    node.hreflang = lang;
    node.href = canonicalUrl(href);
    node.dataset.localeAlternate = "true";
    document.head.appendChild(node);
  });
}

function setMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}
