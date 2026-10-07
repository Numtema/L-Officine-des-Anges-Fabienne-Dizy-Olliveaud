import React from "react";
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
  theme?: "light" | "petrol";
}

export function QuoteBlock({
  quote,
  author,
  role,
  className,
  theme = "light",
}: QuoteBlockProps) {
  const isPetrol = theme === "petrol";

  return (
    <div
      className={cn(
        "relative py-16 sm:py-24 px-6 sm:px-12 text-center max-w-5xl mx-auto flex flex-col items-center justify-center",
        isPetrol ? "text-[#F7F2E8]" : "text-[#063840]",
        className
      )}
    >
      <div
        className="w-12 h-[1px] bg-[#C7A363] mb-8 sm:mb-12 opacity-60"
        aria-hidden="true"
      />
      <blockquote className="font-editorial text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] leading-[1.08] sm:leading-[1.05] tracking-[-0.02em] font-normal italic">
        {quote}
      </blockquote>
      {author && (
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-1.5">
          <cite className="not-italic font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#C7A363]">
            {author}
          </cite>
          {role && (
            <span
              className={cn(
                "text-[12px] font-sans tracking-wide",
                isPetrol ? "text-[#F7F2E8]/60" : "text-[#6F756F]"
              )}
            >
              {role}
            </span>
          )}
        </div>
      )}
      <div
        className="w-12 h-[1px] bg-[#C7A363] mt-8 sm:mt-12 opacity-60"
        aria-hidden="true"
      />
    </div>
  );
}
