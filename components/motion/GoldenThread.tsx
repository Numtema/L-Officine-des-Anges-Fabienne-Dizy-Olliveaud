"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type SegmentVariant =
  | "hero"
  | "portal"
  | "portrait"
  | "lemniscate"
  | "officine"
  | "timeline"
  | "footer";

interface GoldenThreadProps {
  variant?: SegmentVariant;
  className?: string;
  strokeWidth?: number;
  opacity?: number;
  showTracer?: boolean;
}

export function GoldenThread({
  variant = "hero",
  className,
  strokeWidth = 1.3,
  opacity = 0.65,
  showTracer = false,
}: GoldenThreadProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);
  const tracerOpacity = useTransform(smoothProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0]);

  // Path definitions tailored for each architectural moment
  let pathD = "";
  let viewBox = "0 0 100 200";
  let tracerCx = 50;
  let tracerCy = 100;

  switch (variant) {
    case "hero":
      viewBox = "0 0 120 280";
      // Starts under seal, swings in gentle organic wave
      pathD = "M 60,0 C 60,60 110,90 90,150 C 70,210 30,230 60,280";
      tracerCx = 60;
      tracerCy = 140;
      break;

    case "portal":
      viewBox = "0 0 600 120";
      // Triple graceful distribution path connecting left, center, right
      pathD = "M 300,0 C 300,50 120,60 100,110 M 300,0 C 300,60 300,70 300,110 M 300,0 C 300,50 480,60 500,110";
      break;

    case "portrait":
      viewBox = "0 0 320 400";
      // Curves around asymmetric portrait frame
      pathD = "M 300,10 C 260,10 40,40 30,160 C 20,280 120,380 290,390";
      break;

    case "lemniscate":
      viewBox = "0 0 360 180";
      // Pure continuous ∞ lemniscate path
      // Center at (180, 90). Loops left (60, 90) then right (300, 90)
      pathD = "M 180,90 C 230,10 320,10 320,90 C 320,170 230,170 180,90 C 130,10 40,10 40,90 C 40,170 130,170 180,90 Z";
      tracerCx = 180;
      tracerCy = 90;
      break;

    case "officine":
      viewBox = "0 0 280 280";
      // Gentle elliptical orbital halo
      pathD = "M 140,20 C 210,20 260,70 260,140 C 260,210 210,260 140,260 C 70,260 20,210 20,140 C 20,70 70,20 140,20 Z";
      break;

    case "timeline":
      viewBox = "0 0 40 600";
      // Subtle rhythmic vertical line with small wave inflections
      pathD = "M 20,0 C 32,70 8,150 20,230 C 32,310 8,390 20,470 C 32,540 12,570 20,600";
      break;

    case "footer":
      viewBox = "0 0 300 60";
      // Calming horizontal resting curve
      pathD = "M 20,30 C 90,30 110,45 150,45 C 190,45 210,30 280,30";
      break;
  }

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none overflow-visible relative", className)}
      aria-hidden="true"
    >
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6C87C" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#C7A363" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#A47E3B" stopOpacity="0.7" />
          </linearGradient>
          <filter id={`goldGlow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Static faint baseline background path for subtle presence */}
        <path
          d={pathD}
          stroke="#C7A363"
          strokeWidth={strokeWidth}
          strokeOpacity={opacity * 0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated Golden Thread */}
        <motion.path
          d={pathD}
          stroke={`url(#goldGrad-${variant})`}
          strokeWidth={strokeWidth}
          strokeOpacity={opacity}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#goldGlow-${variant})`}
          style={
            shouldReduceMotion
              ? { pathLength: 1 }
              : { pathLength }
          }
        />

        {/* Optional subtle travelling golden droplet for Lemniscate */}
        {showTracer && !shouldReduceMotion && variant === "lemniscate" && (
          <motion.circle
            cx={tracerCx}
            cy={tracerCy}
            r="3"
            fill="#F7F2E8"
            stroke="#C7A363"
            strokeWidth="1.2"
            style={{ opacity: tracerOpacity }}
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 3,
              repeat: 2,
              ease: "easeInOut",
            }}
          />
        )}
      </svg>
    </div>
  );
}
