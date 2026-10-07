"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  ratio?: "16/10" | "golden" | "4/5" | "1/1" | "3/4" | "custom";
  radius?: "card" | "image" | "alcove" | "asymmetric" | "full" | "none";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  fallbackColor?: string;
}

export function EditorialImage({
  src,
  alt,
  ratio = "4/5",
  radius = "image",
  priority = false,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fallbackColor = "#E9DDCA",
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const ratioStyles: Record<string, string> = {
    "16/10": "aspect-[16/10]",
    golden: "aspect-[1.618/1]",
    "4/5": "aspect-[4/5]",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
    custom: "",
  };

  const radiusStyles: Record<string, string> = {
    card: "rounded-[24px] sm:rounded-[32px]",
    image: "rounded-[28px] sm:rounded-[36px] lg:rounded-[44px]",
    alcove: "rounded-t-[140px] rounded-b-[28px] sm:rounded-b-[36px]",
    asymmetric: "rounded-[32px] sm:rounded-[44px_44px_100px_44px]",
    full: "rounded-full",
    none: "rounded-none",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden group select-none",
        ratioStyles[ratio],
        radiusStyles[radius],
        className
      )}
      style={{ backgroundColor: fallbackColor }}
    >
      <motion.div
        className="w-full h-full relative"
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                scale: 1.025,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              }
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "object-cover object-center transition-all duration-700 ease-out",
            isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-sm",
            imageClassName
          )}
        />
      </motion.div>
      {/* Subtle warm grain / light gradient highlight */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/15 via-transparent to-white/10 opacity-60"
        aria-hidden="true"
      />
    </div>
  );
}
