import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { projectsContent } from "@/content/projects";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and film work — stories discovered, evaluated, and championed by N. Sathaiah.",
};

export default function ProjectsPage() {
  const c = projectsContent;

  return (
    <SiteShell>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
      />

      <Section>
        <p className="text-lead mx-auto max-w-3xl font-semibold">{c.introduction}</p>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {c.projects.map((project) => (
            <Card key={project.title}>
              <h2 className="section-heading text-xl">{project.title}</h2>
              <p className="kicker mt-2 text-[0.7rem]">{project.role}</p>
              <p className="text-body mt-4 text-sm">{project.description}</p>
              {"films" in project && project.films && (
                <ul className="mt-4 space-y-1.5">
                  {project.films.map((film) => (
                    <li key={film} className="text-xs font-medium text-muted/70">• {film}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          kicker="Cinema"
          title="Lessons from Cinema"
          titleTamil="திரைப்படங்களிலிருந்து கற்ற பாடங்கள்"
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.filmLessons.map((item) => (
            <div key={item.title} className="relative pl-5">
              <div className="gold-line-vertical absolute top-0 left-0 h-full" />
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-body mt-2 text-sm">{item.lesson}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
