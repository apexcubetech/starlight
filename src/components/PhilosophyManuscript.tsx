"use client";

import { useState } from "react";
import {
  sathaiahNoteContent,
  sathaiahSynopsis,
  type SathaiahSection,
} from "@/content/sathaiah-note";
import { PageHero } from "@/components/PageHero";
import { TamilText } from "@/components/TamilText";
import { PhilosophySynopsis } from "@/components/PhilosophySynopsis";
import {
  PhilosophyLanguageToggle,
  type ManuscriptLanguage,
} from "@/components/PhilosophyLanguageToggle";

function SectionTitle({
  language,
  titleEn,
  titleEnSub,
  titleTa,
}: Pick<SathaiahSection, "titleEn" | "titleEnSub" | "titleTa"> & {
  language: ManuscriptLanguage;
}) {
  if (language === "ta") {
    return (
      <TamilText as="h2" className="section-heading mt-4 text-2xl text-gold-text">
        {titleTa}
      </TamilText>
    );
  }

  return (
    <>
      <h2 className="section-heading mt-4 text-2xl">{titleEn}</h2>
      {titleEnSub && (
        <p className="mt-1 text-lg font-semibold text-gold-text">{titleEnSub}</p>
      )}
    </>
  );
}

function ManuscriptContent({ language }: { language: ManuscriptLanguage }) {
  const c = sathaiahNoteContent;
  const isTamil = language === "ta";
  const introParagraphs = isTamil ? c.introTa : c.introEn;
  const closingParagraphs = isTamil ? c.closingTa : c.closingEn;
  const introTitle = isTamil ? "அறிமுகம்" : "Introduction";
  const closingTitle = isTamil ? "முடிவுரை" : "Closing";

  return (
    <div lang={isTamil ? "ta" : "en"} className="min-w-0">
      <article id="introduction" className="scroll-mt-28">
        {isTamil ? (
          <TamilText as="h2" className="section-heading text-2xl text-gold-text">
            {introTitle}
          </TamilText>
        ) : (
          <h2 className="section-heading text-2xl">{introTitle}</h2>
        )}

        <div className="prose-content mt-6">
          {introParagraphs.map((para, index) =>
            isTamil ? (
              <TamilText key={index} className="text-body whitespace-pre-line">
                {para}
              </TamilText>
            ) : (
              <p key={index} className="text-body whitespace-pre-line">
                {para}
              </p>
            ),
          )}
        </div>
      </article>

      {c.sections.map((section) => {
        const paragraphs = isTamil ? section.contentTa : section.contentEn;

        return (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-t border-border pt-16 mt-16"
          >
            {section.number > 0 && (
              <span className="num-badge">{String(section.number).padStart(2, "0")}</span>
            )}
            <SectionTitle language={language} {...section} />

            <div className="prose-content mt-8">
              {paragraphs.map((para, index) =>
                isTamil ? (
                  <TamilText key={index} className="text-body whitespace-pre-line">
                    {para}
                  </TamilText>
                ) : (
                  <p key={index} className="text-body whitespace-pre-line">
                    {para}
                  </p>
                ),
              )}
            </div>
          </article>
        );
      })}

      <article id="closing" className="scroll-mt-28 border-t border-border pt-16 mt-16">
        {isTamil ? (
          <TamilText as="h2" className="section-heading text-2xl text-gold-text">
            {closingTitle}
          </TamilText>
        ) : (
          <h2 className="section-heading text-2xl text-gold-text">{closingTitle}</h2>
        )}

        <blockquote className="mt-8 border-l-4 border-gold/50 pl-6">
          {closingParagraphs.map((para, index) =>
            isTamil ? (
              <TamilText key={index} className="text-body text-lg italic">
                {para}
              </TamilText>
            ) : (
              <p key={index} className="text-body text-lg italic">
                {para}
              </p>
            ),
          )}
        </blockquote>
      </article>
    </div>
  );
}

export function PhilosophyManuscript() {
  const [language, setLanguage] = useState<ManuscriptLanguage>("ta");
  const c = sathaiahNoteContent;
  const isTamil = language === "ta";

  return (
    <>
      <PageHero
        title={isTamil ? c.titleTamil : c.title}
        subtitle={isTamil ? c.subtitleTamil : c.subtitle}
        large
      />

      <section className="section-block relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PhilosophyLanguageToggle language={language} onChange={setLanguage} />

          <div className="mt-10 lg:hidden">
            <PhilosophySynopsis items={sathaiahSynopsis} collapsible />
          </div>

          <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="sticky top-24 z-20 hidden self-start lg:block">
              <PhilosophySynopsis items={sathaiahSynopsis} />
            </aside>

            <ManuscriptContent key={language} language={language} />
          </div>
        </div>
      </section>
    </>
  );
}
