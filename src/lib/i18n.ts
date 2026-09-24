export type SiteLanguage = "en" | "ta";

export const LANGUAGE_STORAGE_KEY = "starlight-lang";
export const LANGUAGE_COOKIE_KEY = "starlight-lang";

export const DEFAULT_LANGUAGE: SiteLanguage = "en";

export function parseSiteLanguage(value: string | null | undefined): SiteLanguage {
  if (value === "en" || value === "ta") return value;
  return DEFAULT_LANGUAGE;
}

export function readStoredLanguage(): SiteLanguage {
  if (typeof document === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "ta") return stored;
  } catch {
    /* localStorage unavailable */
  }
  return DEFAULT_LANGUAGE;
}

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
