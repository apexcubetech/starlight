"use client";

import { siteConfig, uiStrings } from "@/lib/navigation";
import { contactContent } from "@/content/contact";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Localized } from "@/components/Localized";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLanguage } from "@/components/LanguageProvider";
import { HiOutlineMail } from "react-icons/hi";

export function ConnectPageContent() {
  const c = contactContent;
  const { language } = useLanguage();

  return (
    <>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
        large
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Localized
            en={c.introduction}
            ta={c.introductionTamil}
            as="p"
            className="text-lead font-semibold"
          />

          <Card static className="mt-10 p-6 text-left">
            <Localized
              en={c.whatsappNotice}
              ta={c.whatsappNoticeTamil}
              as="p"
              className="text-body font-semibold text-gold-text"
            />
            <div className="mt-6 flex flex-wrap gap-4">
              <WhatsAppButton />
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-outline inline-flex items-center gap-2"
              >
                <HiOutlineMail aria-hidden="true" />
                {uiStrings.email[language]}
              </a>
            </div>
            <Localized
              en={c.emailNote}
              ta={c.emailNoteTamil}
              as="p"
              className="text-body mt-6 text-sm"
            />
          </Card>

          <blockquote className="mt-16">
            <div className="gold-line mx-auto mb-8 w-16" />
            <Localized
              en={`"${c.closingQuote.text}"`}
              ta={`"${c.closingQuote.textTamil}"`}
              as="p"
              className="text-2xl font-bold italic text-foreground"
            />
          </blockquote>
        </div>
      </Section>
    </>
  );
}
