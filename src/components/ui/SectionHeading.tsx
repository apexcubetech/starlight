import { TamilText } from "@/components/TamilText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  titleTamil?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  titleTamil,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className={cn("section-heading mt-2 text-3xl sm:text-4xl", !kicker && "mt-0")}>
        {title}
      </h2>
      {titleTamil && (
        <TamilText className="mt-2 text-lg text-gold-text-soft sm:text-xl">
          {titleTamil}
        </TamilText>
      )}
      {description && (
        <p className="text-lead mt-4">{description}</p>
      )}
      <div className={cn("gold-line mt-6", align === "center" ? "mx-auto w-24" : "w-16")} />
    </div>
  );
}
