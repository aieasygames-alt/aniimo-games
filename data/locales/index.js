import { en } from "./en.js";
import { ptBR } from "./pt-BR.js";

export const locales = { en, "pt-BR": ptBR };
export const supportedLocales = Object.keys(locales);
export const defaultLocale = "en";

export function localeForPath(path) {
  return /^\/(pt-br|pt)\//i.test(path) ? "pt-BR" : defaultLocale;
}

export function localePrefix(locale) {
  return locale === "pt-BR" ? "/pt-br" : "";
}
