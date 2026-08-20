"use client";

import { aboutContent } from "@/content/about";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutTimeline } from "@/components/AboutTimeline";
import { Localized } from "@/components/Localized";
import { SathaiahPortrait } from "@/components/SathaiahPortrait";

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
          <blockquote className="quote-block">
            <Localized
              en={`"${c.pullQuote.text}"`}
              ta={`"${c.pullQuote.textTamil}"`}
              as="p"
              className="text-xl font-bold italic leading-relaxed text-foreground sm:text-2xl"
            />
          </blockquote>
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
        <div className="mx-auto max-w-3xl space-y-16">
          {c.sections.map((section) => (
            <article key={section.title}>
              <Localized
                en={section.title}
                ta={section.titleTamil}
                as="h2"
                className="section-heading text-2xl"
              />
              <Localized
                en={section.content}
                ta={section.contentTamil}
                as="p"
                className="text-body mt-5"
              />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
