"use client";

import { cn } from "@/lib/utils";

export type ManuscriptLanguage = "ta" | "en";

type Props = {
  language: ManuscriptLanguage;
  onChange: (language: ManuscriptLanguage) => void;
};

const options = [
  { value: "ta" as const, label: "தமிழ்" },
  { value: "en" as const, label: "English" },
];

export function PhilosophyLanguageToggle({ language, onChange }: Props) {
  return (
    <fieldset className="flex flex-wrap items-center gap-3 border-0 p-0">
      <legend className="kicker mr-1">Read in</legend>
      <div className="inline-flex rounded-sm border border-border-strong p-1">
        {options.map((option) => {
          const isActive = language === option.value;
          return (
            <label
              key={option.value}
              className={cn(
                "cursor-pointer rounded-sm px-4 py-2 text-sm font-bold transition-colors",
                option.value === "ta" && "font-tamil",
                isActive
                  ? "bg-gold text-background shadow-sm"
                  : "text-muted hover:text-foreground",
              )}
            >
              <input
                type="radio"
                name="manuscript-language"
                value={option.value}
                checked={isActive}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
