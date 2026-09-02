import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  static?: boolean;
};

export function Card({ children, className, href, static: isStatic }: CardProps) {
  const classes = cn(
    isStatic ? "card-static" : "card-modern",
    "p-6 sm:p-8",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group block")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
