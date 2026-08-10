import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { contactContent } from "@/content/contact";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Starlight Reels and N. Sathaiah.",
};

export default function ContactPage() {
  const c = contactContent;

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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lead font-semibold">{c.introduction}</p>
          <TamilText className="mt-4">{c.introductionTamil}</TamilText>

          <Card static className="mt-10 p-6">
            <p className="text-body text-sm font-medium">{c.note}</p>
            <TamilText className="mt-2 text-sm">{c.noteTamil}</TamilText>
          </Card>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {c.ctas.map((cta) => (
              <Card key={cta.href} href={cta.href} className="text-left">
                <h2 className="section-heading text-lg group-hover:text-gold-text transition-colors">
                  {cta.title}
                </h2>
                <TamilText className="text-sm text-gold-text/90">{cta.titleTamil}</TamilText>
                <p className="text-body mt-3 text-sm">{cta.description}</p>
              </Card>
            ))}
          </div>

          <blockquote className="mt-16">
            <div className="gold-line mx-auto mb-8 w-16" />
            <p className="text-2xl font-bold italic text-foreground">
              &ldquo;{c.closingQuote.text}&rdquo;
            </p>
            <TamilText className="mt-4 text-lg">{c.closingQuote.textTamil}</TamilText>
          </blockquote>

          <div className="mt-12">
            <Button href="/story-submission">Submit a Story</Button>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
