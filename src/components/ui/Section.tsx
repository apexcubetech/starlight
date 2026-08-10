import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
};

export function Section({ children, className, alt = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-block relative py-20 sm:py-24",
        alt && "bg-surface/60",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
