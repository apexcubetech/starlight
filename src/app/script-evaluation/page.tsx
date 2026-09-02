import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { scriptEvaluationContent } from "@/content/script-evaluation";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/ContactCTA";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Script Evaluation",
  description:
    "Script evaluation services by N. Sathaiah — the foundation of every film.",
};

export default function ScriptEvaluationPage() {
  const c = scriptEvaluationContent;

  return (
    <SiteShell>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
        large
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lead font-semibold">{c.introduction}</p>
          <TamilText className="mt-4">{c.introductionTamil}</TamilText>

          <div className="mt-16 space-y-10">
            {c.sections.map((section) => (
              <article key={section.title}>
                <h2 className="section-heading text-2xl">{section.title}</h2>
                <TamilText className="mt-2 text-gold-text-soft">{section.titleTamil}</TamilText>
                <p className="text-body mt-5">{section.content}</p>
              </article>
            ))}
          </div>

          <Card static className="mt-16 p-8">
            <h2 className="section-heading text-xl">How to Begin</h2>
            <ol className="mt-6 space-y-4">
              {c.process.map((step, i) => (
                <li key={step.slice(0, 30)} className="flex gap-4">
                  <span className="num-badge shrink-0 text-xs">{i + 1}</span>
                  <p className="text-body font-medium">{step}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-5 space-y-3 border-l-2 border-gold/30 pl-5">
              {c.processTamil.map((step) => (
                <TamilText key={step.slice(0, 30)} className="text-sm">{step}</TamilText>
              ))}
            </ul>
          </Card>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={c.cta.href}>{c.cta.title}</Button>
            <ContactCTA label="Contact Us" eventName="script_evaluation_cta_clicked" />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
