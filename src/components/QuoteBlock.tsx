"use client";

import { Localized } from "@/components/Localized";
import { cn } from "@/lib/utils";

type Props = {
  en: string;
  ta?: string;
  align?: "left" | "center";
  showGoldLine?: boolean;
  className?: string;
  textClassName?: string;
  italic?: boolean;
};

export function QuoteBlock({
  en,
  ta,
  align = "left",
  showGoldLine = true,
  className,
  textClassName,
  italic = false,
}: Props) {
  const centered = align === "center";

  return (
    <figure className={cn(centered && "mx-auto max-w-4xl text-center", className)}>
      {showGoldLine && (
        <div
          className={cn(
            "gold-line mb-8 w-24",
            centered ? "mx-auto" : "",
          )}
          aria-hidden="true"
        />
      )}
      <blockquote
        className={cn(
          "relative px-2 sm:px-6",
          centered ? "mx-auto" : "max-w-3xl",
        )}
      >
        <span
          className="pointer-events-none absolute -top-2 left-0 font-bold leading-none text-gold/30 select-none sm:-top-3"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          aria-hidden="true"
        >
          {"\u201C"}
        </span>
        <Localized
          en={en}
          ta={ta}
          as="p"
          className={cn(
            "relative z-10 text-xl font-bold leading-relaxed text-foreground sm:text-2xl",
            italic && "italic",
            centered && "sm:text-3xl",
            textClassName,
          )}
        />
        <span
          className={cn(
            "pointer-events-none mt-2 block font-bold leading-none text-gold/30 select-none",
            centered ? "text-right" : "text-right sm:pr-2",
          )}
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          aria-hidden="true"
        >
          {"\u201D"}
        </span>
      </blockquote>
    </figure>
  );
}
