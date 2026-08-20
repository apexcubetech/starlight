"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { mainNavigation } from "@/lib/navigation";
import { pickLocalized } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [philosophyExpanded, setPhilosophyExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ignoreCloseRef = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setPhilosophyExpanded(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    ignoreCloseRef.current = true;
    const frame = window.requestAnimationFrame(() => {
      ignoreCloseRef.current = false;
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => {
          if (ignoreCloseRef.current) return;
          onClose();
        }}
        aria-label="Close menu overlay"
      />
      <div className="absolute inset-y-0 right-0 flex w-[min(100%,340px)] flex-col border-l border-border-strong bg-surface shadow-2xl">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="relative flex items-center justify-between gap-3 border-b border-border px-5 py-5">
          <LanguageToggle compact />
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border-strong text-gold-text font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav
          className="relative flex-1 overflow-y-auto px-3 py-4"
          aria-label="Mobile"
          id="mobile-navigation"
        >
          <ul className="space-y-0.5">
            {mainNavigation.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-sm px-4 py-3.5 text-left text-sm font-bold transition-colors",
                      isActive(item.href)
                        ? "text-gold-bright"
                        : "text-foreground",
                    )}
                    onClick={() => setPhilosophyExpanded(!philosophyExpanded)}
                    aria-expanded={philosophyExpanded}
                  >
                    {pickLocalized(item.label, item.labelTamil, language)}
                    <span className="text-gold-text">
                      {philosophyExpanded ? "−" : "+"}
                    </span>
                  </button>
                  <ul
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      philosophyExpanded
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block rounded-sm px-8 py-2.5 text-sm font-semibold",
                            isActive(child.href)
                              ? "text-gold-bright"
                              : "text-muted",
                          )}
                          onClick={onClose}
                        >
                          {pickLocalized(
                            child.label,
                            child.labelTamil,
                            language,
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-sm px-4 py-3.5 text-sm font-bold transition-colors",
                      isActive(item.href)
                        ? "text-gold-bright"
                        : "text-muted hover:text-foreground",
                    )}
                    onClick={onClose}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {pickLocalized(item.label, item.labelTamil, language)}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </div>,
    document.body,
  );
}
