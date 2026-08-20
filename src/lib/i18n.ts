export type SiteLanguage = "en" | "ta";

export const LANGUAGE_STORAGE_KEY = "starlight-lang";

export const DEFAULT_LANGUAGE: SiteLanguage = "ta";

export function pickLocalized(
  en: string,
  ta: string | undefined,
  lang: SiteLanguage,
): string {
  if (lang === "ta" && ta) return ta;
  return en;
}

export function pickLocalizedOptional(
  en: string | undefined,
  ta: string | undefined,
  lang: SiteLanguage,
): string | undefined {
  if (lang === "ta") return ta ?? en;
  return en ?? ta;
}
