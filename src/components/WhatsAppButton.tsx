"use client";

import { siteConfig, uiStrings } from "@/lib/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "button" | "link";
};

export function WhatsAppButton({ className, variant = "button" }: Props) {
  const { language } = useLanguage();
  const href = `https://wa.me/${siteConfig.whatsappNumber}`;

  if (variant === "link") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("link-gold", className)}
      >
        WhatsApp ({siteConfig.whatsappDisplay})
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("btn-gold", className)}
    >
      {uiStrings.whatsapp[language]} ({siteConfig.whatsappDisplay})
    </a>
  );
}
