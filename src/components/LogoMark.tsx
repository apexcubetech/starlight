import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-10 w-10 sm:h-11 sm:w-11", img: 44, dimension: "h-[72%] w-[72%]" },
  md: { box: "h-14 w-14", img: 52, dimension: "h-[72%] w-[72%]" },
  lg: { box: "h-20 w-20", img: 80, dimension: "h-[72%] w-[72%]" },
  hero: { box: "h-36 w-36 sm:h-40 sm:w-40", img: 140, dimension: "h-[72%] w-[72%]" },
};

export function LogoMark({ size = "sm", className, priority }: Props) {
  const s = sizes[size];

  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full",
        "ring-1 ring-gold/20 shadow-[0_0_24px_rgba(212,175,55,0.08)]",
        s.box,
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full w-full items-center justify-center overflow-hidden rounded-full",
          "bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.12)_0%,rgba(3,3,3,0.95)_70%)]",
        )}
      >
        <Image
          src="/logo.png"
          alt="Starlight Reels"
          width={s.img}
          height={s.img}
          priority={priority}
          className={cn("relative object-contain", s.dimension)}
        />
      </div>
    </div>
  );
}
