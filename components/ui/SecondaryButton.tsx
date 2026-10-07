"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: "outline-petrol" | "outline-champagne" | "outline-ivory";
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className,
  icon,
  variant = "outline-petrol",
}: SecondaryButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "group inline-flex items-center justify-center gap-3 h-[52px] sm:h-[56px] px-6 sm:px-8 rounded-full font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.14em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363] focus-visible:ring-offset-2 select-none cursor-pointer";

  const variantStyles = {
    "outline-petrol":
      "border border-[#064D58]/30 text-[#064D58] hover:border-[#064D58] hover:bg-[#064D58]/5",
    "outline-champagne":
      "border border-[#C7A363]/60 text-[#C7A363] hover:border-[#C7A363] hover:bg-[#C7A363]/10",
    "outline-ivory":
      "border border-[#F7F2E8]/40 text-[#F7F2E8] hover:border-[#F7F2E8] hover:bg-[#F7F2E8]/10",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span
          className={cn(
            "transition-transform duration-300 ease-out",
            !shouldReduceMotion && "group-hover:translate-x-1"
          )}
        >
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variantStyles[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {content}
    </motion.button>
  );
}
