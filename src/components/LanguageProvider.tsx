"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  LANGUAGE_COOKIE_KEY,
  LANGUAGE_STORAGE_KEY,
  readStoredLanguage,
  type SiteLanguage,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  isTamil: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persistLanguage(language: SiteLanguage) {
  document.documentElement.lang = language === "ta" ? "ta" : "en";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.cookie = `${LANGUAGE_COOKIE_KEY}=${language};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

type LanguageProviderProps = {
  children: React.ReactNode;
  initialLanguage: SiteLanguage;
};

export function LanguageProvider({
  children,
  initialLanguage,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<SiteLanguage>(initialLanguage);

  useEffect(() => {
    const stored = readStoredLanguage();
    const resolved = stored !== initialLanguage ? stored : initialLanguage;
    setLanguageState(resolved);
    persistLanguage(resolved);
  }, [initialLanguage]);

  const setLanguage = useCallback((next: SiteLanguage) => {
    setLanguageState(next);
    persistLanguage(next);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isTamil: language === "ta",
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
