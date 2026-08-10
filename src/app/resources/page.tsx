import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../layout";
import { resourcesContent } from "@/content/resources";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Books, films, references, and resources for storytellers and Tamil cinema enthusiasts.",
};

export default function ResourcesPage() {
  const c = resourcesContent;

  return (
    <SiteShell>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {c.categories.map((category) => (
            <div key={category.title}>
              <h2 className="section-heading text-2xl">{category.title}</h2>
              <TamilText className="mt-2 text-gold-text-soft">{category.titleTamil}</TamilText>
              <div className="gold-line mt-4 w-12" />
              <ul className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <Card static className="p-5">
                      {"href" in item && item.href ? (
                        <Link href={item.href} className="font-bold text-foreground hover:text-gold-text transition-colors">
                          {item.title}
                        </Link>
                      ) : (
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                      )}
                      <p className="text-body mt-2 text-sm">{item.description}</p>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
