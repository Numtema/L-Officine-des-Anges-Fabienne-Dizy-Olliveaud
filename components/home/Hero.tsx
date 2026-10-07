"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, Compass, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { BotanicalParallax } from "@/components/motion/BotanicalParallax";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="p-1.5 sm:p-3 lg:p-3.5 bg-[#063840]">
      <section
        className="relative min-h-[94vh] sm:min-h-[96vh] lg:min-h-[calc(100dvh-28px)] rounded-[28px] sm:rounded-[44px] lg:rounded-[56px] overflow-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(6,56,64,0.35)]"
        aria-label="Accueil L'Officine des Anges"
      >
        {/* Z0 & Z1: MEDITERRANEAN BACKGROUND IMAGE WITH WARM SUNLIGHT AND STONE */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2400&q=85"
            alt="Maison méditerranéenne en pierre baignée de soleil et végétation d'oliviers"
            fill
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
            className="object-cover object-[center_35%] scale-105"
          />

          {/* Warm Ivory & Petrol Architectural Glaze Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#FCF8F0]/85 via-[#FCF8F0]/55 to-[#F7F2E8]/90 mix-blend-normal"
            aria-hidden="true"
          />

          {/* Gentle Warm Sunbeam Gradient */}
          <div
            className="absolute top-0 right-0 w-[80vw] h-[70vh] bg-radial from-[#FFECC4]/45 via-[#E6D4B5]/20 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Z2 & Z3: BOTANICAL FOREGROUND PARALLAX AND TEXTURES */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Subtle Olive Branch Silhouette Top-Left (travel 18px within 10-24px limit) */}
          <BotanicalParallax
            variant="olive-branch"
            travel={18}
            direction="up"
            horizontalDrift
            className="absolute -top-10 -left-10 w-64 h-64 sm:w-80 sm:h-80 opacity-30"
          />

          {/* Delicate White Jasmine / Orange Blossom Petals Foreground Bottom-Right (travel 14px) */}
          <BotanicalParallax
            variant="white-flower"
            travel={14}
            direction="down"
            horizontalDrift
            className="absolute -bottom-8 right-6 sm:right-16 w-44 h-44 sm:w-56 sm:h-56 opacity-40"
          />

          {/* Soft Botanical Shadow Sway Bottom-Left */}
          <div className="absolute -bottom-16 -left-16 w-96 h-96 opacity-10 animate-botanical-sway pointer-events-none">
            <svg viewBox="0 0 300 300" fill="#555B42">
              <path d="M 50,150 C 120,80 220,100 280,240 C 220,290 140,260 50,150 Z" />
            </svg>
          </div>
        </div>

        {/* Z4: SIGNATURE GOLDEN THREAD FLOWING FROM SEAL */}
        <div className="absolute top-[160px] sm:top-[180px] left-1/2 -translate-x-1/2 w-[140px] sm:w-[180px] h-[280px] sm:h-[340px] z-20 pointer-events-none opacity-80">
          <GoldenThread variant="hero" strokeWidth={1.4} opacity={0.75} />
        </div>

        {/* TOP SPACER (Keeps space for the floating header) */}
        <div className="pt-24 sm:pt-28 lg:pt-32" />

        {/* Z5: MAIN EDITORIAL CONTENT & TYPOGRAPHY */}
        <div className="relative z-30 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center my-auto">
          {/* Subtle Floating Monogram Badge */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[rgba(19,40,51,0.08)] shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-[#C7A363]" />
            <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.26em] uppercase text-[#064D58]">
              L’Écrin Vivant · Maison Méditerranéenne
            </span>
          </motion.div>

          {/* Primary Bespoke Editorial Title */}
          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-editorial text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.88] sm:leading-[0.90] tracking-[-0.03em] text-[#063840] select-none"
          >
            <span className="block">L’OFFICINE</span>
            <span className="block italic text-[#064D58]">DES ANGES</span>
          </motion.h1>

          {/* Practitioner Name */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 sm:mt-7"
          >
            <span className="font-sans text-[12px] sm:text-[14px] uppercase font-medium tracking-[0.28em] sm:tracking-[0.32em] text-[#7C8061] block">
              {siteConfig.practitioner}
            </span>
          </motion.div>

          {/* Poetic Supporting Line */}
          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-[18px] text-[#063840]/80 font-editorial italic leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
          >
            <PrimaryButton
              href="/prendre-rendez-vous"
              variant="petrol"
              icon={<CalendarDays className="w-4 h-4 text-[#C7A363]" />}
            >
              Prendre rendez-vous
            </PrimaryButton>

            <SecondaryButton
              href="/prestations"
              variant="outline-petrol"
              icon={<Compass className="w-4 h-4 text-[#064D58]" />}
            >
              Découvrir les prestations
            </SecondaryButton>
          </motion.div>
        </div>

        {/* BOTTOM LIVING CASE BORDER ACCENT */}
        <div className="relative z-30 pb-6 sm:pb-8 text-center">
          <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#7C8061] font-sans">
            <span className="w-8 h-[1px] bg-[#C7A363]/40" />
            <span>Cabinet & Pratique à distance</span>
            <span className="w-8 h-[1px] bg-[#C7A363]/40" />
          </div>
        </div>
      </section>
    </div>
  );
}
