import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { aboutContent } from "@/content/about";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "About",
  description:
    "About N. Sathaiah — Tamil film critic, story listener, and talent scout at Starlight Reels.",
};

export default function AboutPage() {
  const c = aboutContent;

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
        <blockquote className="quote-block mx-auto max-w-3xl">
          <p className="text-xl font-bold italic leading-relaxed text-foreground sm:text-2xl">
            &ldquo;{c.pullQuote.text}&rdquo;
          </p>
          <TamilText className="mt-5 text-base text-gold-text-soft">
            {c.pullQuote.textTamil}
          </TamilText>
        </blockquote>

        <div className="mx-auto mt-20 max-w-3xl space-y-16">
          {c.sections.map((section) => (
            <article key={section.title}>
              <h2 className="section-heading text-2xl">{section.title}</h2>
              <TamilText className="mt-2 text-gold-text-soft">{section.titleTamil}</TamilText>
              <p className="text-body mt-5">{section.content}</p>
              <TamilText className="mt-4 text-muted/80">{section.contentTamil}</TamilText>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading kicker="Journey" title="Timeline" />
        <div className="mx-auto max-w-3xl space-y-4">
          {c.timeline.map((item, i) => (
            <Card key={item.label} static className="flex gap-5">
              <span className="num-badge shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-bold text-foreground">{item.label}</h3>
                <p className="text-body mt-2 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
