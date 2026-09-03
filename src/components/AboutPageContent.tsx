"use client";

import { aboutContent } from "@/content/about";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutTimeline } from "@/components/AboutTimeline";
import { Localized, LocalizedParagraphs } from "@/components/Localized";
import { SathaiahPortrait } from "@/components/SathaiahPortrait";
import { QuoteBlock } from "@/components/QuoteBlock";

export function AboutPageContent() {
  const c = aboutContent;

  return (
    <>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
        large
      />

      <Section>
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
          <SathaiahPortrait size="lg" priority className="mx-auto lg:mx-0" />
          <QuoteBlock
            en={c.pullQuote.text}
            ta={c.pullQuote.textTamil}
            align="left"
            italic
            showGoldLine={false}
            className="max-w-none"
          />
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          kicker="Journey"
          kickerTamil="பயணம்"
          title="Timeline"
          titleTamil="காலவரிசை"
        />
        <AboutTimeline items={c.timeline} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            kicker={c.dinesh.kicker}
            kickerTamil={c.dinesh.kickerTamil}
            title={c.dinesh.title}
            titleTamil={c.dinesh.titleTamil}
          />
          <LocalizedParagraphs
            en={c.dinesh.paragraphs}
            ta={c.dinesh.paragraphsTamil}
            className="mt-8"
          />
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl space-y-16">
          {c.sections.map((section) => (
            <article key={section.title}>
              <Localized
                en={section.title}
                ta={section.titleTamil}
                as="h2"
                className="section-heading text-2xl"
              />
              {"paragraphs" in section && section.paragraphs ? (
                <LocalizedParagraphs
                  en={section.paragraphs}
                  ta={section.paragraphsTamil}
                  className="mt-5"
                />
              ) : (
                <Localized
                  en={section.content!}
                  ta={section.contentTamil}
                  as="p"
                  className="text-body mt-5 text-justify"
                />
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
