import { cn } from "@/lib/utils";
import { TamilText } from "./TamilText";

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
  return (
    <section className={cn("relative pt-28 pb-14 sm:pt-36 sm:pb-20", className)}>
      <div className="absolute inset-0 gold-smudge opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="kicker">Starlight Reels</p>
          <h1
            className={cn(
              "display-heading mt-4",
              large ? "text-4xl sm:text-6xl lg:text-7xl" : "text-3xl sm:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </h1>
          {titleTamil && (
            <TamilText className="mt-3 text-xl text-gold-text sm:text-2xl">
              {titleTamil}
            </TamilText>
          )}
          {subtitle && (
            <p className="text-lead mt-6 font-semibold text-foreground/80">{subtitle}</p>
          )}
          {subtitleTamil && (
            <TamilText className="mt-2 text-base text-muted">
              {subtitleTamil}
            </TamilText>
          )}
          <div className="gold-line mt-8 w-20" />
        </div>
      </div>
    </section>
  );
}
