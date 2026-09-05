type PageBackgroundProps = {
  variant?: "default" | "hero" | "minimal";
};

export function PageBackground({ variant = "default" }: PageBackgroundProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [transform:translateZ(0)]"
      aria-hidden="true"
    >
      <div className="absolute -inset-px grid-bg opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      {variant !== "minimal" && (
        <>
          <div className="absolute inset-0 gold-smudge" />
          <div className="absolute inset-0 gold-smudge-bl" />
          {variant === "hero" && (
            <div className="absolute inset-0 gold-smudge-tr" />
          )}
        </>
      )}

      {variant === "hero" && (
        <>
          <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/[0.04] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
        </>
      )}

      <div className="absolute inset-0 vignette" />
    </div>
  );
}
