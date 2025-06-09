export function getLangFromPath(pathname: string): "cy" | "en" {
  return pathname.startsWith("/cy") ? "cy" : "en";
}

export function getLocalisedHomePath(lang: "en" | "cy"): string {
  return lang === "cy" ? "/cy" : "/en";
}

export function getHtmlLangAttribute(pathname: string): string {
  return getLangFromPath(pathname) === "cy" ? "cy" : "en";
}