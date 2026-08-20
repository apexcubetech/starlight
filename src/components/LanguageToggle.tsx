"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import type { SiteLanguage } from "@/lib/i18n";

const options: { value: SiteLanguage; label: string; tamilFont?: boolean }[] = [
  { value: "ta", label: "தமிழ்", tamilFont: true },
  { value: "en", label: "English" },
];

type Props = {
  className?: string;
  compact?: boolean;
};

export function LanguageToggle({ className, compact = false }: Props) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex rounded-sm border border-border-strong p-0.5",
        className,
      )}
      role="group"
      aria-label="Site language"
    >
      {options.map((option) => {
        const isActive = language === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className={cn(
              "cursor-pointer rounded-sm font-bold transition-colors",
              compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-1.5 text-sm",
              option.tamilFont && "font-tamil",
              isActive
                ? "bg-gold text-background shadow-sm"
                : "text-muted hover:text-foreground",
            )}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
