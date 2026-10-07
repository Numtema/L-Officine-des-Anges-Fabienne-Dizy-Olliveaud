"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: "petrol" | "champagne" | "glass";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className,
  icon,
  variant = "petrol",
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "group inline-flex items-center justify-center gap-3.5 h-[56px] sm:h-[60px] px-7 sm:px-9 rounded-full font-sans text-[13px] sm:text-[14px] font-medium tracking-[0.14em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const variantStyles = {
    petrol:
      "bg-[#064D58] text-[#F7F2E8] shadow-[0_8px_24px_rgba(6,77,88,0.18)] hover:bg-[#063840] hover:shadow-[0_12px_32px_rgba(6,56,64,0.28)]",
    champagne:
      "bg-[#C7A363] text-[#063840] shadow-[0_8px_24px_rgba(199,163,99,0.22)] hover:bg-[#b89552]",
    glass:
      "bg-white/80 backdrop-blur-md text-[#064D58] border border-[rgba(19,40,51,0.12)] hover:bg-white hover:border-[#C7A363]/40 shadow-sm",
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
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.018 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {content}
    </motion.button>
  );
}
