import { cn } from "@/lib/utils";

type TamilTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};

export function TamilText({
  children,
  className,
  as: Tag = "p",
}: TamilTextProps) {
  return <Tag className={cn("font-tamil", className)}>{children}</Tag>;
}
