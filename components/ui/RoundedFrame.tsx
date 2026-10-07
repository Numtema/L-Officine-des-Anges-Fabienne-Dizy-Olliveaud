import React from "react";
import { cn } from "@/lib/utils";

type FrameVariant = "hero" | "section" | "card" | "image" | "alcove" | "asymmetric";

interface RoundedFrameProps {
  children: React.ReactNode;
  variant?: FrameVariant;
  className?: string;
  background?: "ivory" | "paper" | "limestone" | "petrol" | "transparent";
}

export function RoundedFrame({
  children,
  variant = "section",
  className,
  background = "paper",
}: RoundedFrameProps) {
  const variantRadii: Record<FrameVariant, string> = {
    hero: "rounded-[28px] sm:rounded-[44px] lg:rounded-[64px]",
    section: "rounded-[32px] sm:rounded-[48px] lg:rounded-[56px]",
    card: "rounded-[24px] sm:rounded-[32px]",
    image: "rounded-[24px] sm:rounded-[36px] lg:rounded-[44px]",
    alcove: "rounded-t-[140px] rounded-b-[36px]",
    asymmetric: "rounded-[32px] sm:rounded-[48px_48px_110px_48px]",
  };

  const bgStyles: Record<string, string> = {
    ivory: "bg-[#F7F2E8]",
    paper: "bg-[#FCF8F0]",
    limestone: "bg-[#E9DDCA]",
    petrol: "bg-[#063840] text-[#F7F2E8]",
    transparent: "bg-transparent",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all",
        variantRadii[variant],
        bgStyles[background],
        className
      )}
    >
      {children}
    </div>
  );
}
