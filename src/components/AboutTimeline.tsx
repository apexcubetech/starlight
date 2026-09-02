"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import { TamilText } from "@/components/TamilText";
import { cn } from "@/lib/utils";

type TimelineItem = {
  label: string;
  labelTamil?: string;
  description: string;
  descriptionTamil?: string;
};

type Props = {
  items: TimelineItem[];
};

export function AboutTimeline({ items }: Props) {
  const { language, isTamil } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory">
        {items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "shrink-0 snap-start rounded-[var(--radius-ui)] border px-4 py-3 text-left transition-colors",
              index === activeIndex
                ? "border-gold bg-gold-dim text-gold-text"
                : "border-border text-muted hover:border-border-strong hover:text-foreground",
            )}
          >
            <span className="num-badge text-xs">{String(index + 1).padStart(2, "0")}</span>
            <span className="mt-2 block text-sm font-bold">
              {pickLocalized(item.label, item.labelTamil, language)}
            </span>
          </button>
        ))}
      </div>

      <div className="card-static mt-6 p-6 sm:p-8">
        {isTamil ? (
          <>
            <TamilText as="h3" className="section-heading text-xl">
              {pickLocalized(active.label, active.labelTamil, language)}
            </TamilText>
            <TamilText className="text-body mt-4">
              {pickLocalized(
                active.description,
                active.descriptionTamil,
                language,
              )}
            </TamilText>
          </>
        ) : (
          <>
            <h3 className="section-heading text-xl">{active.label}</h3>
            <p className="text-body mt-4">{active.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
