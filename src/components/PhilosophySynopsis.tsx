"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { SynopsisItem } from "@/content/sathaiah-note";
import { TamilText } from "@/components/TamilText";

type Props = {
  items: SynopsisItem[];
  collapsible?: boolean;
};

function SynopsisLinks({
  items,
  activeId,
  onSelect,
}: {
  items: SynopsisItem[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ol className="space-y-1">
      {items.map((item) => {
        const isActive = activeId === item.id;
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
              <span className="block">{item.labelEn}</span>
              <TamilText as="span" className="mt-0.5 block text-xs opacity-80">
                {item.labelTa}
              </TamilText>
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

export function PhilosophySynopsis({ items, collapsible = false }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

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
