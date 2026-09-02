"use client";

import { storySubmissionContent } from "@/content/story-submission";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StorySubmissionForm } from "@/components/StorySubmissionForm";
import { Localized } from "@/components/Localized";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";

export function SubmitDetailsPageContent() {
  const c = storySubmissionContent;
  const { language } = useLanguage();
  const guidelines =
    language === "ta" ? c.guidelinesTamil : c.guidelines;

  return (
    <>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
      />

      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Localized
              en={c.introduction}
              ta={c.introductionTamil}
              as="p"
              className="text-lead font-semibold"
            />

            <h2 className="section-heading mt-12 text-xl">
              {language === "ta" ? "வழிகாட்டுதல்கள்" : "Guidelines"}
            </h2>
            <ul className="mt-5 space-y-3">
              {guidelines.map((g) => (
                <li key={g.slice(0, 40)} className="text-body font-medium">
                  • {g}
                </li>
              ))}
            </ul>
          </div>

          <Card static className="p-6 sm:p-8">
            <StorySubmissionForm />
          </Card>
        </div>
      </Section>
    </>
  );
}
