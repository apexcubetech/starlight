"use client";

import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { mainNavigation, siteConfig, uiStrings } from "@/lib/navigation";
import { pickLocalized } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const copyright = uiStrings.copyright[language].replace(
    "{year}",
    String(currentYear),
  );

  return (
    <footer className="relative border-t border-border bg-surface/80 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 justify-items-start md:justify-items-between">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoMark size="md" />
              <span className="text-sm font-bold tracking-[0.2em] text-gold-text uppercase">
                Starlight Reels
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm font-semibold leading-relaxed text-foreground/90">
              {pickLocalized(
                siteConfig.footerRole,
                siteConfig.footerRoleTamil,
                language,
              )}
            </p>
            <p className="mt-2 max-w-xs text-sm font-medium leading-relaxed text-muted">
              {pickLocalized(
                siteConfig.description,
                siteConfig.descriptionTamil,
                language,
              )}
            </p>
          </div>
          <div className="w-full md:text-center">
            <h2 className="kicker">{uiStrings.navigation[language]}</h2>
            <ul className="mt-5 space-y-2.5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                  >
                    {pickLocalized(item.label, item.labelTamil, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:text-center">
            <h2 className="kicker">{uiStrings.connect[language]}</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                >
                  <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {uiStrings.whatsapp[language]} ({siteConfig.whatsappDisplay})
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted transition-colors hover:text-gold-text"
                >
                  <HiOutlineMail
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  {uiStrings.email[language]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-14" />

        <div className="mt-8 text-sm font-medium text-muted">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
