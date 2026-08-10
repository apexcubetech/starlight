import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "./layout";
import { homeContent } from "@/content/home";
import { TamilText } from "@/components/TamilText";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Starlight Reels — N. Sathaiah. Tamil cinema critic, story listener, and champion of storytellers.",
};

export default function HomePage() {
  const c = homeContent;

  return (
    <SiteShell headerVariant="overlay">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-up mx-auto mb-10 inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl pulse-glow" />
              <div className="corner-accent relative p-4">
                <Image
                  src="/logo.png"
                  alt="Starlight Reels"
                  width={140}
                  height={140}
                  className="relative h-28 w-28 sm:h-36 sm:w-36"
                  priority
                />
              </div>
            </div>
          </div>

          <p className="animate-fade-up kicker [animation-delay:100ms]">
            {c.hero.subtitle}
          </p>
          <TamilText
            as="p"
            className="animate-fade-up mt-2 text-lg text-gold-text-soft [animation-delay:150ms]"
          >
            {c.hero.subtitleTamil}
          </TamilText>

          <h1 className="animate-fade-up display-heading mt-6 text-5xl sm:text-7xl lg:text-8xl [animation-delay:200ms]">
            <span className="text-shimmer">{c.hero.title}</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-xl font-bold text-foreground/90 [animation-delay:300ms]">
            {c.hero.tagline}
          </p>
          <TamilText
            as="p"
            className="animate-fade-up mx-auto mt-3 max-w-2xl text-lg [animation-delay:350ms]"
          >
            {c.hero.taglineTamil}
          </TamilText>

          <p className="animate-fade-up mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-muted [animation-delay:400ms]">
            {c.hero.description}
          </p>

          <div className="animate-fade-up mt-12 flex flex-wrap justify-center gap-4 [animation-delay:500ms]">
            <Button href="/about">About Sathaiah</Button>
            <Button href="/story-submission" variant="outline">
              Submit a Story
            </Button>
          </div>

          <div className="animate-fade-up mx-auto mt-20 flex items-center justify-center gap-3 [animation-delay:600ms]">
            <div className="gold-line w-16" />
            <span className="kicker">Scroll</span>
            <div className="gold-line w-16" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            title={c.introduction.title}
            titleTamil={c.introduction.titleTamil}
          />
          <div className="prose-content space-y-5">
            {c.introduction.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-body font-medium">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy highlight */}
      <Section alt>
        <blockquote className="quote-block mx-auto max-w-4xl text-center">
          <p className="text-2xl font-bold leading-snug text-foreground sm:text-4xl">
            {c.philosophyHighlight.quote}
          </p>
          <TamilText className="mt-6 text-lg text-gold-text-soft">
            {c.philosophyHighlight.quoteTamil}
          </TamilText>
        </blockquote>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {c.philosophyHighlight.principles.map((p) => (
            <Card key={p.number} static className="corner-accent">
              <span className="num-badge">{p.number}</span>
              <h3 className="section-heading mt-5 text-xl">{p.title}</h3>
              <p className="text-body mt-4">{p.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/philosophy" className="link-gold">
            Explore our philosophy →
          </Link>
        </div>
      </Section>

      {/* Featured articles */}
      <Section>
        <SectionHeading kicker="Reading" title="Featured Articles" />
        <div className="grid gap-6 md:grid-cols-3">
          {c.featuredArticles.map((article) => (
            <Card key={article.href} href={article.href}>
              <span className="kicker">Chapter</span>
              <h3 className="section-heading mt-3 text-lg group-hover:text-gold-text transition-colors">
                {article.title}
              </h3>
              <TamilText className="mt-1 text-base text-gold-text/90">
                {article.titleTamil}
              </TamilText>
              <p className="text-body mt-4">{article.excerpt}</p>
              <span className="link-gold mt-5 inline-block text-sm">Read →</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Book + CTAs */}
      <Section alt>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card static className="corner-accent border-gold/25">
            <p className="kicker">The Book</p>
            <h2 className="section-heading mt-4 text-2xl sm:text-3xl">
              {c.bookHighlight.title}
            </h2>
            <TamilText className="mt-2 text-gold-text-soft">
              {c.bookHighlight.titleTamil}
            </TamilText>
            <p className="text-body mt-5">{c.bookHighlight.description}</p>
            <Link href={c.bookHighlight.href} className="link-gold mt-6 inline-block">
              Learn more →
            </Link>
          </Card>

          <div className="space-y-6">
            {[c.ctas.storySubmission, c.ctas.scriptEvaluation].map((cta) => (
              <Card key={cta.href} href={cta.href}>
                <h3 className="section-heading text-lg group-hover:text-gold-text transition-colors">
                  {cta.title}
                </h3>
                <TamilText className="text-base text-gold-text/90">{cta.titleTamil}</TamilText>
                <p className="text-body mt-3">{cta.description}</p>
                <span className="link-gold mt-4 inline-block text-sm">Learn more →</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section>
        <SectionHeading kicker="Portfolio" title="Selected Work" />
        <div className="grid gap-8 md:grid-cols-3">
          {c.selectedProjects.map((project) => (
            <div key={project.title} className="group relative pl-6">
              <div className="gold-line-vertical absolute top-0 left-0 h-full" />
              <h3 className="section-heading text-xl">{project.title}</h3>
              <p className="kicker mt-2">{project.role}</p>
              <p className="text-body mt-4">{project.description}</p>
            </div>
          ))}
        </div>
        <Link href="/projects" className="link-gold mt-10 inline-block">
          View all projects →
        </Link>
      </Section>

      {/* Closing quote */}
      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <div className="gold-line mx-auto mb-10 w-24" />
          <p className="text-2xl font-bold italic leading-relaxed text-foreground sm:text-3xl">
            &ldquo;{c.closingQuote.text}&rdquo;
          </p>
          <TamilText className="mt-6 text-lg">{c.closingQuote.textTamil}</TamilText>
          <div className="mt-12">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
