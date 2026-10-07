import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  index?: string;
  className?: string;
  theme?: "petrol" | "champagne" | "olive" | "ivory";
}

export function SectionLabel({
  children,
  index,
  className,
  theme = "champagne",
}: SectionLabelProps) {
  const themeStyles = {
    champagne: "text-[#C7A363]",
    petrol: "text-[#064D58]",
    olive: "text-[#7C8061]",
    ivory: "text-[#F7F2E8]/80",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.26em] uppercase select-none",
        themeStyles[theme],
        className
      )}
    >
      {index && (
        <span className="font-editorial italic tracking-normal opacity-85 text-[14px]">
          {index}
        </span>
      )}
      {index && <span className="w-4 h-[1px] bg-current opacity-40 inline-block" />}
      <span>{children}</span>
    </div>
  );
}
