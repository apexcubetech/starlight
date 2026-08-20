"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import { TamilText } from "@/components/TamilText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  kickerTamil?: string;
  title: string;
  titleTamil?: string;
  description?: string;
  descriptionTamil?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  kickerTamil,
  title,
  titleTamil,
  description,
  descriptionTamil,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { language, isTamil } = useLanguage();
  const displayKicker = kicker
    ? pickLocalized(kicker, kickerTamil, language)
    : undefined;
  const displayTitle = pickLocalized(title, titleTamil, language);
  const displayDescription = description
    ? pickLocalized(description, descriptionTamil, language)
    : undefined;

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {displayKicker && <p className="kicker">{displayKicker}</p>}
      {isTamil ? (
        <TamilText
          as="h2"
          className={cn(
            "section-heading mt-2 text-3xl sm:text-4xl",
            !displayKicker && "mt-0",
          )}
        >
          {displayTitle}
        </TamilText>
      ) : (
        <h2
          className={cn(
            "section-heading mt-2 text-3xl sm:text-4xl",
            !displayKicker && "mt-0",
          )}
        >
          {displayTitle}
        </h2>
      )}
      {displayDescription &&
        (isTamil ? (
          <TamilText className="text-lead mt-4">{displayDescription}</TamilText>
        ) : (
          <p className="text-lead mt-4">{displayDescription}</p>
        ))}
      <div
        className={cn(
          "gold-line mt-6",
          align === "center" ? "mx-auto w-24" : "w-16",
        )}
      />
    </div>
  );
}
