"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

export type BotanicalVariant = "olive-branch" | "white-flower" | "wild-herbs" | "custom";

export interface BotanicalParallaxProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * Travel distance in pixels for translateY scroll-linked motion.
   * Clamped strictly between 10px and 24px to ensure natural Mediterranean depth.
   * @default 16
   */
  travel?: number;
  /**
   * Direction of vertical scroll movement:
   * - "up": moves upwards as page scrolls down
   * - "down": moves downwards as page scrolls down
   * @default "up"
   */
  direction?: "up" | "down";
  /**
   * Optional built-in curated floral illustration
   */
  variant?: BotanicalVariant;
  /**
   * Subtle horizontal drift (clamped to max 8px)
   */
  horizontalDrift?: boolean;
}

/**
 * BotanicalParallax
 *
 * Applies subtle, scroll-linked translateY movements to foreground floral
 * elements on the landing page. Adheres strictly to the 10–24px travel limit
 * specified in the master creative guidelines to maintain calm, natural depth
 * without theme-park parallax effects.
 */
export function BotanicalParallax({
  children,
  className,
  travel = 16,
  direction = "up",
  variant = "custom",
  horizontalDrift = false,
}: BotanicalParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Strict adherence to 10–24px travel limit from specification
  const clampedTravel = Math.min(Math.max(travel, 10), 24);

  // Scroll tracking linked to viewport entry and exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth dampening to avoid sudden jumps during fast scroll wheel moves
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.6,
  });

  // Calculate translateY range based on direction
  const yStart = direction === "up" ? clampedTravel : -clampedTravel;
  const yEnd = direction === "up" ? -clampedTravel : clampedTravel;

  const translateY = useTransform(smoothProgress, [0, 1], [yStart, yEnd]);
  const translateX = useTransform(
    smoothProgress,
    [0, 1],
    horizontalDrift ? [-clampedTravel * 0.25, clampedTravel * 0.25] : [0, 0]
  );

  // Fallback for users preferring reduced motion
  if (shouldReduceMotion) {
    return (
      <div
        ref={containerRef}
        className={cn("pointer-events-none select-none", className)}
        aria-hidden="true"
      >
        {children ?? renderBuiltinVariant(variant)}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none select-none overflow-visible", className)}
      aria-hidden="true"
    >
      <motion.div
        style={{
          y: translateY,
          x: translateX,
        }}
        className="will-change-transform w-full h-full"
      >
        {children ?? renderBuiltinVariant(variant)}
      </motion.div>
    </div>
  );
}

/**
 * Built-in delicate Mediterranean botanical SVG motifs
 */
function renderBuiltinVariant(variant: BotanicalVariant) {
  switch (variant) {
    case "olive-branch":
      return (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#7C8061] drop-shadow-[0_8px_16px_rgba(6,56,64,0.06)]"
        >
          {/* Main graceful curved stem */}
          <path
            d="M 15,25 Q 90,85 185,150"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
          {/* Leaves with delicate pointed tips */}
          <path
            d="M 45,45 C 55,25 75,20 85,38 C 75,48 58,50 45,45 Z"
            fill="currentColor"
            fillOpacity="0.75"
          />
          <path
            d="M 80,70 C 100,50 120,55 125,75 C 110,85 92,82 80,70 Z"
            fill="currentColor"
            fillOpacity="0.65"
          />
          <path
            d="M 120,100 C 145,85 160,95 165,115 C 150,122 132,115 120,100 Z"
            fill="currentColor"
            fillOpacity="0.7"
          />
          <path
            d="M 70,85 C 60,105 45,112 35,98 C 45,88 60,86 70,85 Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <path
            d="M 110,120 C 100,140 85,145 78,132 C 88,122 102,120 110,120 Z"
            fill="currentColor"
            fillOpacity="0.65"
          />
          {/* Small Mediterranean olive drupes */}
          <circle cx="88" cy="42" r="5" fill="#555B42" fillOpacity="0.9" />
          <circle cx="128" cy="78" r="5.5" fill="#555B42" fillOpacity="0.9" />
          <circle cx="168" cy="118" r="5" fill="#555B42" fillOpacity="0.85" />
        </svg>
      );

    case "white-flower":
      return (
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_6px_14px_rgba(6,56,64,0.08)]"
        >
          {/* Tender floral stem */}
          <path
            d="M 80,145 Q 85,115 78,85"
            stroke="#7C8061"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Little green sepal leaf */}
          <path
            d="M 79,110 C 95,112 108,122 105,130 C 92,128 82,120 79,110 Z"
            fill="#7C8061"
            fillOpacity="0.7"
          />
          {/* Five delicate white jasmine / orange blossom petals */}
          <g transform="translate(80, 75)">
            {/* Petal 1 (top) */}
            <path
              d="M 0,-4 C -12,-18 -10,-42 0,-50 C 10,-42 12,-18 0,-4 Z"
              fill="#FCF8F0"
              stroke="#E9DDCA"
              strokeWidth="0.8"
            />
            {/* Petal 2 (top right) */}
            <path
              d="M 3,-2 C 16,-14 38,-12 46,-2 C 38,8 16,6 3,-2 Z"
              fill="#FCF8F0"
              stroke="#E9DDCA"
              strokeWidth="0.8"
            />
            {/* Petal 3 (bottom right) */}
            <path
              d="M 2,3 C 14,16 12,38 2,46 C -8,38 -6,16 2,3 Z"
              fill="#FCF8F0"
              stroke="#E9DDCA"
              strokeWidth="0.8"
            />
            {/* Petal 4 (bottom left) */}
            <path
              d="M -2,3 C -14,16 -36,14 -44,4 C -36,-6 -14,-4 -2,3 Z"
              fill="#FCF8F0"
              stroke="#E9DDCA"
              strokeWidth="0.8"
            />
            {/* Petal 5 (top left) */}
            <path
              d="M -3,-2 C -16,-14 -32,-32 -22,-44 C -12,-36 -4,-14 -3,-2 Z"
              fill="#FCF8F0"
              stroke="#E9DDCA"
              strokeWidth="0.8"
            />
            {/* Golden champagne heart pistil & stamens */}
            <circle cx="0" cy="0" r="6" fill="#C7A363" fillOpacity="0.9" />
            <circle cx="-2" cy="-2" r="1.5" fill="#FFECC4" />
            <circle cx="2" cy="1" r="1.5" fill="#FFECC4" />
            <circle cx="0" cy="3" r="1.2" fill="#9A7532" />
          </g>
        </svg>
      );

    case "wild-herbs":
      return (
        <svg
          viewBox="0 0 120 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#7C8061]"
        >
          {/* Slender wild thyme / immortelle sprig */}
          <path
            d="M 60,170 Q 55,100 65,15"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Pairs of linear wild leaves */}
          <path d="M 58,135 Q 40,128 35,135 Q 48,138 58,135 Z" fill="currentColor" fillOpacity="0.8" />
          <path d="M 62,130 Q 80,123 85,130 Q 72,133 62,130 Z" fill="currentColor" fillOpacity="0.8" />
          <path d="M 59,105 Q 38,98 32,105 Q 46,108 59,105 Z" fill="currentColor" fillOpacity="0.75" />
          <path d="M 61,100 Q 82,93 88,100 Q 74,103 61,100 Z" fill="currentColor" fillOpacity="0.75" />
          <path d="M 60,75 Q 42,68 38,75 Q 50,78 60,75 Z" fill="currentColor" fillOpacity="0.7" />
          <path d="M 62,70 Q 80,63 84,70 Q 72,73 62,70 Z" fill="currentColor" fillOpacity="0.7" />
          <path d="M 61,45 Q 45,38 42,45 Q 52,48 61,45 Z" fill="currentColor" fillOpacity="0.65" />
          <path d="M 63,40 Q 78,33 82,40 Q 72,43 63,40 Z" fill="currentColor" fillOpacity="0.65" />
          {/* Small golden solar droplets on tips (Immortelle) */}
          <circle cx="65" cy="15" r="3.5" fill="#C7A363" />
          <circle cx="58" cy="22" r="2.8" fill="#E6C87C" />
          <circle cx="72" cy="24" r="2.8" fill="#C7A363" />
        </svg>
      );

    default:
      return null;
  }
}
