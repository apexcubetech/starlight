"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import { TamilText } from "@/components/TamilText";

type PageHeroProps = {
  title: string;
  titleTamil?: string;
  subtitle?: string;
  subtitleTamil?: string;
  className?: string;
  large?: boolean;
};

export function PageHero({
  title,
  titleTamil,
  subtitle,
  subtitleTamil,
  className,
  large = false,
}: PageHeroProps) {
  const { language, isTamil } = useLanguage();
  const displayTitle = pickLocalized(title, titleTamil, language);
  const displaySubtitle = subtitle
    ? pickLocalized(subtitle, subtitleTamil, language)
    : undefined;

  return (
    <section className={cn("relative pt-28 pb-14 sm:pt-36 sm:pb-20", className)}>
      <div className="absolute inset-0 gold-smudge opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="kicker">Starlight Reels</p>
          {isTamil ? (
            <TamilText
              as="h1"
              className={cn(
                "display-heading mt-4",
                large
                  ? "text-4xl sm:text-6xl lg:text-7xl"
                  : "text-3xl sm:text-5xl lg:text-6xl",
              )}
            >
              {displayTitle}
            </TamilText>
          ) : (
            <h1
              className={cn(
                "display-heading mt-4",
                large
                  ? "text-4xl sm:text-6xl lg:text-7xl"
                  : "text-3xl sm:text-5xl lg:text-6xl",
              )}
            >
              {displayTitle}
            </h1>
          )}
          {displaySubtitle &&
            (isTamil ? (
              <TamilText className="text-lead mt-6 text-justify font-semibold text-foreground/80">
                {displaySubtitle}
              </TamilText>
            ) : (
              <p className="text-lead mt-6 text-justify font-semibold text-foreground/80">
                {displaySubtitle}
              </p>
            ))}
          <div className="gold-line mt-8 w-20" />
        </div>
      </div>
    </section>
  );
}
