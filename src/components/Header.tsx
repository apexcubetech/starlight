"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/lib/navigation";
import { pickLocalized } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/MobileMenu";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";
import { LogoMark } from "@/components/LogoMark";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

export function Header({ variant = "solid" }: HeaderProps) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [philosophyOpen, setPhilosophyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isOverlay = variant === "overlay" && !scrolled && !menuOpen;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-xl",
          isOverlay
            ? "bg-transparent"
            : "border-b border-border bg-background/90 backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <LogoMark size="sm" priority className="transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden text-sm font-bold tracking-[0.2em] text-gold-text uppercase sm:block">
              Starlight Reels
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main"
          >
            {mainNavigation.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setPhilosophyOpen(true)}
                  onMouseLeave={() => setPhilosophyOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-[var(--radius-ui)] px-3 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href)
                        ? "text-gold-bright"
                        : "text-muted hover:text-foreground",
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {pickLocalized(item.label, item.labelTamil, language)}
                  </Link>
                  <div
                    className={cn(
                      "absolute top-full left-0 min-w-[200px] pt-2 transition-all duration-200",
                      philosophyOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="card-static py-2 shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm font-semibold transition-colors",
                            isActive(child.href)
                              ? "text-gold-bright"
                              : "text-muted hover:bg-gold-dim hover:text-foreground",
                          )}
                        >
                          {pickLocalized(
                            child.label,
                            child.labelTamil,
                            language,
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[var(--radius-ui)] px-3 py-2 text-sm font-semibold transition-colors",
                    isActive(item.href)
                      ? "text-gold-bright"
                      : "text-muted hover:text-foreground",
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {pickLocalized(item.label, item.labelTamil, language)}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle compact />
          </div>

          <button
            type="button"
            className="relative z-10 flex h-10 w-10 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-[var(--radius-ui)] border border-border-strong bg-surface/80 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="block h-0.5 w-5 bg-gold" />
            <span className="block h-0.5 w-5 bg-gold" />
            <span className="block h-0.5 w-3 bg-gold" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
