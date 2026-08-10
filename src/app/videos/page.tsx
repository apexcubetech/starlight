import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { videosContent } from "@/content/videos";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Cinematic references and film connections from N. Sathaiah's work and writings.",
};

export default function VideosPage() {
  const c = videosContent;

  return (
    <SiteShell>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lead font-semibold">{c.introduction}</p>
          <TamilText className="mt-4">{c.introductionTamil}</TamilText>

          <Card static className="mt-8 p-5">
            <p className="text-body text-sm font-medium">{c.note}</p>
            <TamilText className="mt-2 text-sm">{c.noteTamil}</TamilText>
          </Card>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {c.references.map((ref) => (
              <Card key={ref.title} static>
                <span className="kicker text-[0.7rem]">{ref.type}</span>
                <h2 className="section-heading mt-3 text-lg">{ref.title}</h2>
                <p className="text-body mt-3 text-sm">{ref.context}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
