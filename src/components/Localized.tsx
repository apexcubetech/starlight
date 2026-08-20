"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import { TamilText } from "@/components/TamilText";
import { cn } from "@/lib/utils";

type LocalizedProps = {
  en: string;
  ta?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  className?: string;
};

export function Localized({ en, ta, as = "span", className }: LocalizedProps) {
  const { language, isTamil } = useLanguage();
  const text = pickLocalized(en, ta, language);

  if (isTamil) {
    return (
      <TamilText as={as} className={className}>
        {text}
      </TamilText>
    );
  }

  const Tag = as;
  return <Tag className={className}>{text}</Tag>;
}

type LocalizedParagraphsProps = {
  en: string[];
  ta?: string[];
  className?: string;
  paragraphClassName?: string;
};

export function LocalizedParagraphs({
  en,
  ta,
  className,
  paragraphClassName = "text-body font-medium",
}: LocalizedParagraphsProps) {
  const { language } = useLanguage();
  const paragraphs = language === "ta" && ta && ta.length > 0 ? ta : en;

  return (
    <div className={cn("prose-content space-y-5", className)}>
      {paragraphs.map((para) => (
        <Localized
          key={para.slice(0, 48)}
          en={para}
          ta={para}
          as="p"
          className={paragraphClassName}
        />
      ))}
    </div>
  );
}
