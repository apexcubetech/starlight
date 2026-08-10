import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../../layout";
import { articlesContent } from "@/content/articles";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles and reflections on Tamil cinema, storytelling, and screenwriting by N. Sathaiah.",
};

export default function ArticlesPage() {
  const c = articlesContent;

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
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Philosophy", href: "/philosophy" },
              { label: "Articles" },
            ]}
          />

          <div className="space-y-20">
            {c.articles.map((article) => (
              <article
                key={article.slug}
                id={article.slug}
                className="scroll-mt-28 border-t border-border pt-12 first:border-t-0 first:pt-0"
              >
                <span className="kicker">{article.category}</span>
                <h2 className="section-heading mt-3 text-2xl">{article.title}</h2>
                <TamilText className="mt-2 text-gold-text-soft">{article.titleTamil}</TamilText>
                <p className="text-body mt-5 font-semibold italic">{article.excerpt}</p>
                <TamilText className="mt-2 text-sm italic text-muted/80">{article.excerptTamil}</TamilText>
                <div className="prose-content mt-8">
                  {article.content.map((para) => (
                    <p key={para.slice(0, 30)} className="text-body">{para}</p>
                  ))}
                </div>
                <div className="prose-content mt-6 border-l-2 border-gold/30 pl-6">
                  {article.contentTamil.map((para) => (
                    <TamilText key={para.slice(0, 30)} className="text-muted/80">{para}</TamilText>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/philosophy" className="link-gold">
              Read full chapters from the manuscript →
            </Link>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
