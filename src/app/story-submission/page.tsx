import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { storySubmissionContent } from "@/content/story-submission";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StorySubmissionForm } from "@/components/StorySubmissionForm";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Story Submission",
  description:
    "Submit your original story to Starlight Reels for collection, review, and evaluation.",
};

export default function StorySubmissionPage() {
  const c = storySubmissionContent;

  return (
    <SiteShell>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
      />

      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-lead font-semibold">{c.introduction}</p>
            <TamilText className="mt-4">{c.introductionTamil}</TamilText>

            <h2 className="section-heading mt-12 text-xl">Guidelines</h2>
            <ul className="mt-5 space-y-3">
              {c.guidelines.map((g) => (
                <li key={g.slice(0, 40)} className="text-body text-sm font-medium">
                  • {g}
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-3 border-l-2 border-gold/30 pl-5">
              {c.guidelinesTamil.map((g) => (
                <TamilText key={g.slice(0, 40)} className="text-sm">• {g}</TamilText>
              ))}
            </ul>
          </div>

          <Card static className="corner-accent p-6 sm:p-8">
            <StorySubmissionForm />
          </Card>
        </div>
      </Section>
    </SiteShell>
  );
}
