"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Hand, Waves, Flame, ArrowUpRight } from "lucide-react";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface PortalItem {
  pillar: string;
  category: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const portals: PortalItem[] = [
  {
    pillar: "RECEVOIR",
    category: "Présence & Clarté",
    title: "Soins énergétiques",
    description: "Déposer le trop-plein, apaiser le mental et réaligner la vitalité intérieure.",
    href: "/soins-energetiques",
    icon: <Hand className="w-5 h-5 text-[#C7A363]" />,
  },
  {
    pillar: "RALENTIR",
    category: "Mouvement Infini",
    title: "Massage Lemniscate",
    description: "Le toucher continu en huit (∞) : bercer les tensions et unifier le corps.",
    href: "/massage-lemniscate",
    icon: <Waves className="w-5 h-5 text-[#C7A363]" />,
  },
  {
    pillar: "COMPOSER",
    category: "Matière & Botanique",
    title: "Aromathérapie & Parfums",
    description: "Créer votre accord végétal d'âme en flacon d'ambre pour ancrer vos rituels.",
    href: "/aromatherapie",
    icon: <Flame className="w-5 h-5 text-[#C7A363]" />,
  },
];

export function ServicePortals() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative -mt-6 sm:-mt-10 lg:-mt-14 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Portails de pratique"
    >
      {/* Golden Thread Distributing Flow */}
      <div className="hidden md:block max-w-3xl mx-auto h-16 pointer-events-none mb-2">
        <GoldenThread variant="portal" strokeWidth={1.3} opacity={0.65} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {portals.map((portal, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link
              key={portal.pillar}
              href={portal.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363] rounded-[28px] sm:rounded-[36px]"
            >
              {/* Outer Architectural Capsule Portal */}
              <div
                className={cn(
                  "relative p-7 sm:p-9 rounded-[28px] sm:rounded-[36px] bg-[#FCF8F0]/90 backdrop-blur-xl border border-[rgba(19,40,51,0.12)] shadow-[0_16px_36px_rgba(6,56,64,0.06)] transition-all duration-500 overflow-hidden",
                  isHovered && "bg-[#FCF8F0] border-[#C7A363]/60 shadow-[0_20px_44px_rgba(6,56,64,0.12)]"
                )}
              >
                {/* Subtle Botanical Watermark */}
                <div
                  className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#C7A363]/5 pointer-events-none transition-transform duration-700 group-hover:scale-150"
                  aria-hidden="true"
                />

                {/* Header of Portal: Pillar & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-editorial italic text-[16px] text-[#C7A363]">
                      0{index + 1}
                    </span>
                    <span className="w-3 h-[1px] bg-[#C7A363]/50" />
                    <span className="font-sans text-[10px] uppercase font-semibold tracking-[0.24em] text-[#064D58]">
                      {portal.pillar}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border border-[rgba(19,40,51,0.12)] flex items-center justify-center transition-colors duration-300",
                      isHovered
                        ? "bg-[#064D58] text-[#F7F2E8] border-[#064D58]"
                        : "bg-white/80 text-[#064D58]"
                    )}
                  >
                    {portal.icon}
                  </div>
                </div>

                {/* Subtitle / Category */}
                <span className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#7C8061] mb-1.5">
                  {portal.category}
                </span>

                {/* Title */}
                <h3 className="font-editorial text-[1.7rem] sm:text-[2rem] leading-snug text-[#063840] group-hover:text-[#064D58] transition-colors">
                  {portal.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[13px] sm:text-[14px] text-[#6F756F] font-sans font-light leading-relaxed">
                  {portal.description}
                </p>

                {/* Subtle Interactive Link Cue */}
                <div className="mt-6 pt-5 border-t border-[rgba(19,40,51,0.08)] flex items-center justify-between text-[11px] font-sans tracking-[0.16em] uppercase text-[#064D58] font-medium">
                  <span className="group-hover:text-[#C7A363] transition-colors">
                    Entrer dans le soin
                  </span>
                  <motion.div
                    animate={
                      isHovered && !shouldReduceMotion
                        ? { x: 3, y: -3 }
                        : { x: 0, y: 0 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#C7A363]" />
                  </motion.div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
