"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-sm border border-border-strong bg-surface-elevated/90 text-gold-text font-bold shadow-lg backdrop-blur-sm transition-all hover:border-gold hover:bg-gold-dim sm:right-6 sm:bottom-6"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
