"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/navigation";
import { pickLocalized } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

type Props = {
  size?: "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  md: "h-44 w-44 sm:h-52 sm:w-52",
  lg: "h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72",
};

export function SathaiahPortrait({ size = "md", className, priority }: Props) {
  const { language } = useLanguage();
  const alt = pickLocalized(
    siteConfig.personName,
    siteConfig.personNameTamil,
    language,
  );

  return (
    <div className={cn("corner-accent relative shrink-0 p-3", className)}>
      <Image
        src="/face.png"
        alt={alt}
        width={288}
        height={288}
        priority={priority}
        className={cn(
          "relative rounded-full border-2 border-gold/35 bg-surface object-cover object-top shadow-lg",
          sizeClasses[size],
        )}
      />
    </div>
  );
}
