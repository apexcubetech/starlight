"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { SynopsisItem } from "@/content/sathaiah-note";
import { TamilText } from "@/components/TamilText";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";

const SCROLL_MARKER_OFFSET = 120;

type Props = {
  items: SynopsisItem[];
  collapsible?: boolean;
  /** Re-bind scroll tracking when main content remounts (e.g. language switch). */
  contentKey?: string;
};

function getActiveSectionId(sectionIds: string[]): string {
  let activeId = sectionIds[0] ?? "";

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    if (element.getBoundingClientRect().top <= SCROLL_MARKER_OFFSET) {
      activeId = id;
    }
  }

  return activeId;
}

function SynopsisLinks({
  items,
  activeId,
  onSelect,
}: {
  items: SynopsisItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { language, isTamil } = useLanguage();

  return (
    <ol className="space-y-1">
      {items.map((item) => {
        const isActive = activeId === item.id;
        const label = pickLocalized(item.labelEn, item.labelTa, language);
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => onSelect(item.id)}
              className={cn(
                "block rounded-sm border-l-2 py-2 pl-3 pr-2 text-sm transition-colors",
                isActive
                  ? "border-gold bg-gold-dim font-bold text-gold-text"
                  : "border-transparent text-muted hover:border-gold/40 hover:text-foreground",
              )}
            >
              {isTamil ? (
                <TamilText as="span" className="block">
                  {label}
                </TamilText>
              ) : (
                <span className="block">{label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

function SynopsisPanel({ items, activeId, onSelect }: {
  items: SynopsisItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="card-modern max-h-[calc(100vh-6.5rem)] overflow-y-auto p-5">
      <p className="kicker mb-4">Synopsis</p>
      <SynopsisLinks items={items} activeId={activeId} onSelect={onSelect} />
    </div>
  );
}

export function PhilosophySynopsis({
  items,
  collapsible = false,
  contentKey,
}: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);

    const syncActiveSection = () => {
      const nextId = getActiveSectionId(sectionIds);
      setActiveId((current) => (current === nextId ? current : nextId));
    };

    syncActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, [items, contentKey]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (collapsible) setOpen(false);
  };

  if (collapsible) {
    return (
      <div className="card-modern overflow-hidden">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-3 p-5 text-left"
        >
          <div>
            <p className="kicker">Synopsis</p>
            <TamilText className="text-xs text-gold-text/90">சுருக்கம்</TamilText>
          </div>
          <span
            aria-hidden="true"
            className={cn("text-gold-text transition-transform", open && "rotate-180")}
          >
            ▾
          </span>
        </button>
        {open && (
          <nav aria-label="Manuscript synopsis" className="border-t border-border px-5 pb-5 pt-3">
            <SynopsisLinks items={items} activeId={activeId} onSelect={handleSelect} />
          </nav>
        )}
      </div>
    );
  }

  return (
    <nav aria-label="Manuscript synopsis">
      <SynopsisPanel items={items} activeId={activeId} onSelect={setActiveId} />
    </nav>
  );
}
