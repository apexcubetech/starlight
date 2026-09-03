"use client";

import Link from "next/link";
import { homeContent } from "@/content/home";
import { uiStrings } from "@/lib/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { Localized, LocalizedParagraphs } from "@/components/Localized";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChapterCarousel } from "@/components/ChapterCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SathaiahPortrait } from "@/components/SathaiahPortrait";
import { LogoMark } from "@/components/LogoMark";
import { QuoteBlock } from "@/components/QuoteBlock";

export function HomePageContent() {
  const c = homeContent;
  const { language } = useLanguage();

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-up mx-auto mb-10 inline-flex items-center justify-center">
            <LogoMark size="hero" priority />
          </div>

          <Localized
            en={c.hero.subtitle}
            ta={c.hero.subtitleTamil}
            as="p"
            className="animate-fade-up kicker [animation-delay:100ms]"
          />

          <h1 className="animate-fade-up display-heading mt-6 text-5xl sm:text-7xl lg:text-8xl [animation-delay:200ms]">
            <span className="text-shimmer">{c.hero.title}</span>
          </h1>

          <Localized
            en={c.hero.description}
            ta={c.hero.descriptionTamil}
            as="p"
            className="animate-fade-up mx-auto mt-8 max-w-2xl text-justify text-lg font-medium leading-relaxed text-muted [animation-delay:300ms]"
          />

          <Localized
            en={c.hero.tagline}
            ta={c.hero.taglineTamil}
            as="p"
            className="animate-fade-up mx-auto mt-6 max-w-xl text-base font-semibold text-foreground/80 [animation-delay:400ms]"
          />

          <div className="animate-fade-up mt-12 flex flex-wrap justify-center gap-4 [animation-delay:500ms]">
            <Button href="/about">{uiStrings.aboutSathaiah[language]}</Button>
            <Button href="/story-submission" variant="outline">
              {uiStrings.submitDetails[language]}
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <SectionHeading
              kicker={c.introduction.kicker}
              kickerTamil={c.introduction.kickerTamil}
              title={c.introduction.title}
              titleTamil={c.introduction.titleTamil}
            />
            <LocalizedParagraphs
              en={c.introduction.paragraphs}
              ta={c.introduction.paragraphsTamil}
              className="mt-8"
            />
          </div>
          <SathaiahPortrait size="lg" className="mx-auto lg:mx-0" />
        </div>
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
        <QuoteBlock
          en={c.philosophyHighlight.quote}
          ta={c.philosophyHighlight.quoteTamil}
          align="center"
        />
        <div className="mt-12 text-center">
          <Link href="/philosophy" className="link-gold">
            {uiStrings.explorePhilosophy[language]}
          </Link>
        </div>
      </Section>

      <Section alt>
        <div className="card-static border-gold/20 p-8 sm:p-10 lg:p-12">
          <div className="grid items-stretch gap-8 lg:grid-cols-3 lg:gap-10">
            <Card
              static
              className="flex h-full flex-col border-gold/25 bg-surface/60 lg:col-span-1"
            >
              <Localized
                en={c.bookHighlight.title}
                ta={c.bookHighlight.titleTamil}
                as="h2"
                className="section-heading text-lg text-gold-text"
              />
              <Localized
                en={c.bookHighlight.description}
                ta={c.bookHighlight.descriptionTamil}
                as="p"
                className="text-body mt-5 flex-1 text-justify"
              />
              <Link
                href={c.bookHighlight.href}
                className="link-gold mt-6 inline-block shrink-0"
              >
                {uiStrings.learnMore[language]}
              </Link>
            </Card>

            {[c.ctas.submitDetails, c.ctas.connect].map((cta) => (
              <Card key={cta.href} href={cta.href} className="flex h-full flex-col">
                <Localized
                  en={cta.title}
                  ta={cta.titleTamil}
                  as="h3"
                  className="section-heading text-lg text-gold-text transition-colors group-hover:text-gold-bright"
                />
                <Localized
                  en={cta.description}
                  ta={cta.descriptionTamil}
                  as="p"
                  className="text-body mt-5 flex-1 text-justify"
                />
                <span className="link-gold mt-6 inline-block shrink-0 text-sm">
                  {uiStrings.learnMore[language]}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <QuoteBlock
          en={c.closingQuote.text}
          ta={c.closingQuote.textTamil}
          align="center"
          italic
        />
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href="/contact">{uiStrings.getInTouch[language]}</Button>
          <WhatsAppButton />
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          kicker={c.chapters.kicker}
          kickerTamil={c.chapters.kickerTamil}
          title={c.chapters.title}
          titleTamil={c.chapters.titleTamil}
        />
        <Localized
          en={c.chapters.description}
          ta={c.chapters.descriptionTamil}
          as="p"
          className="text-body mx-auto mt-6 max-w-3xl text-justify"
        />
        <div className="mt-10">
          <ChapterCarousel />
        </div>
      </Section>
    </>
  );
}
