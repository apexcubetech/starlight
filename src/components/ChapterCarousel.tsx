"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { sathaiahNoteContent } from "@/content/sathaiah-note";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import { uiStrings } from "@/lib/navigation";
import { TamilText } from "@/components/TamilText";
import { cn } from "@/lib/utils";

const chapters = sathaiahNoteContent.sections.filter((s) => s.number > 0);

function getSlidesPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function ChapterCarousel() {
  const { language, isTamil } = useLanguage();
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, chapters.length - slidesPerView);
  const pageCount = maxIndex + 1;

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => Math.max(0, current - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => Math.min(maxIndex, current + 1));
  }, [maxIndex]);

  const slideWidth = 100 / slidesPerView;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * slideWidth}%)` }}
        >
          {chapters.map((chapter, chapterIndex) => {
            const title = pickLocalized(chapter.titleEn, chapter.titleTa, language);
            const chapterNumber = String(chapter.number).padStart(2, "0");
            const isActive = chapterIndex === index;

            return (
              <div
                key={chapter.id}
                className="shrink-0 px-2"
                style={{ width: `${slideWidth}%` }}
              >
                <Link
                  href={`/philosophy#${chapter.id}`}
                  aria-label={`${uiStrings.chapter[language]} ${chapterNumber}: ${title}`}
                  className={cn(
                    "card-modern flex h-full min-h-[200px] flex-col p-6 transition-colors",
                    isActive && "ui-selected",
                  )}
                >
                  <span className="num-badge">{chapterNumber}</span>
                  <p className="kicker mt-4">
                    {uiStrings.chapter[language]} {chapterNumber}
                  </p>
                  {isTamil ? (
                    <TamilText as="h3" className="section-heading mt-3 flex-1 text-base leading-snug">
                      {title}
                    </TamilText>
                  ) : (
                    <h3 className="section-heading mt-3 flex-1 text-base leading-snug">
                      {title}
                    </h3>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          aria-label={uiStrings.carouselPrevious[language]}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-ui)] border border-border transition-colors",
            index === 0
              ? "cursor-not-allowed text-muted/40"
              : "text-gold-text hover:border-gold/40 hover:bg-gold-dim",
          )}
        >
          <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label={uiStrings.carouselPages[language]}>
          {Array.from({ length: pageCount }, (_, page) => (
            <button
              key={page}
              type="button"
              role="tab"
              aria-selected={index === page}
              aria-label={`${uiStrings.carouselPage[language]} ${page + 1}`}
              onClick={() => setIndex(page)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === page
                  ? "w-6 bg-gold-text"
                  : "w-2 bg-border hover:bg-gold/50",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={index >= maxIndex}
          aria-label={uiStrings.carouselNext[language]}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-ui)] border border-border transition-colors",
            index >= maxIndex
              ? "cursor-not-allowed text-muted/40"
              : "text-gold-text hover:border-gold/40 hover:bg-gold-dim",
          )}
        >
          <HiChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
