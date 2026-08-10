import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "../layout";
import { bookContent } from "@/content/book";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "The Book",
  description:
    "My Philosophy of Cinema — N. Sathaiah's bilingual manuscript on Tamil cinema and storytelling.",
};

export default function BookPage() {
  const c = bookContent;

  return (
    <SiteShell>
      <PageHero title={c.title} titleTamil={c.titleTamil} large />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[320px_1fr]">
          <div className="flex flex-col items-center lg:items-start">
            <Card static className="corner-accent relative aspect-[3/4] w-full max-w-[300px] overflow-hidden p-0">
              <Image
                src="/logo.png"
                alt="My Philosophy of Cinema"
                fill
                className="object-contain p-10"
                sizes="300px"
              />
            </Card>
            <p className="mt-5 text-center text-sm font-semibold text-muted lg:text-left">
              {c.subtitle}
            </p>
          </div>

          <div>
            <h2 className="display-heading text-3xl sm:text-4xl">{c.bookTitle}</h2>
            <TamilText className="mt-3 text-2xl text-gold-text">{c.bookTitleTamil}</TamilText>
            <p className="mt-3 font-bold text-muted">by {c.author}</p>
            <TamilText className="text-sm text-gold-text/90">{c.authorTamil}</TamilText>

            <p className="text-body mt-8">{c.description}</p>
            <TamilText className="mt-3">{c.descriptionTamil}</TamilText>

            <div className="mt-12">
              <h3 className="section-heading text-xl">{c.aboutBook.title}</h3>
              <div className="prose-content mt-5">
                {c.aboutBook.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-body">{p}</p>
                ))}
              </div>
              <div className="prose-content mt-5 border-l-2 border-gold/30 pl-6">
                {c.aboutBook.paragraphsTamil.map((p) => (
                  <TamilText key={p.slice(0, 40)}>{p}</TamilText>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="section-heading text-xl">Table of Contents</h3>
              <ol className="mt-5 space-y-3">
                {c.tableOfContents.map((item) => (
                  <li key={item.number} className="text-body text-sm">
                    <span className="font-bold text-gold-text">
                      {item.number === 0 ? "—" : `${item.number}.`}
                    </span>{" "}
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <TamilText as="span" className="mt-0.5 block text-xs">
                      {item.titleTamil}
                    </TamilText>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 space-y-8">
              {c.excerpts.map((excerpt) => (
                <blockquote key={excerpt.quote.slice(0, 30)} className="quote-block">
                  <p className="text-lg font-bold italic text-foreground">{excerpt.quote}</p>
                  <TamilText className="mt-3 text-sm">{excerpt.quoteTamil}</TamilText>
                </blockquote>
              ))}
            </div>

            <p className="text-body mt-10 text-sm">{c.note}</p>
            <TamilText className="mt-2 text-sm">{c.noteTamil}</TamilText>

            <div className="mt-10">
              <Button href={c.chaptersLink}>Read Chapters</Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
