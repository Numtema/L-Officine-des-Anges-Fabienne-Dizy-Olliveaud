"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles, ArrowRight, Droplets } from "lucide-react";
import { officineCreations } from "@/content/services";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

export function OfficineChapter() {
  const [activeCreationIndex, setActiveCreationIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeCreation = officineCreations[activeCreationIndex] || officineCreations[0];

  return (
    <section
      className="p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto my-16 sm:my-24"
      aria-label="L'Atelier Olfactif de L'Officine"
    >
      {/* Large Rounded Architectural Shell */}
      <div className="relative rounded-[36px] sm:rounded-[56px] lg:rounded-[72px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.12)] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_24px_60px_rgba(6,56,64,0.08)]">
        {/* Background Delicate Botanical Gradient */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-radial from-[#C7A363]/10 via-[#7C8061]/5 to-transparent blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionLabel index="04" theme="champagne" className="mb-4">
              L’Atelier Olfactif & Apothicaire
            </SectionLabel>

            <h2 className="font-editorial text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.96] text-[#063840] tracking-[-0.03em]">
              DES CRÉATIONS <br />
              <span className="italic text-[#064D58]">À PORTER, À RESPIRER, À RESSENTIR.</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] text-[#6F756F] font-sans font-light leading-relaxed max-w-2xl">
              Les élixirs et brumes de L’Officine des Anges sont formulés à la main en Provence dans des flacons d’ambre protecteurs. Des accords vivants qui prolongent le soin au cœur de votre intimité.
            </p>
          </ScrollReveal>
        </div>

        {/* EDITORIAL BOTTLE STAGE (Centerpiece with surrounding compositions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: INTERACTIVE FORMULA SELECTOR & NOTES */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#7C8061] font-medium">
              Les Formules Signatures
            </span>

            {officineCreations.map((item, idx) => {
              const isSelected = activeCreationIndex === idx;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCreationIndex(idx)}
                  className={cn(
                    "text-left p-5 sm:p-6 rounded-[24px] transition-all duration-300 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363]",
                    isSelected
                      ? "bg-white border-[#C7A363]/60 shadow-[0_12px_28px_rgba(6,56,64,0.08)]"
                      : "bg-white/40 border-transparent hover:bg-white/70"
                  )}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C7A363] font-semibold">
                      {item.number} · {item.type}
                    </span>
                    <span className="text-[11px] font-sans text-[#7C8061]">
                      {item.volume}
                    </span>
                  </div>

                  <h3 className="font-editorial text-[1.6rem] sm:text-[1.8rem] text-[#063840] leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-[12px] text-[#6F756F] font-sans mt-1">
                    {item.subtitle}
                  </p>

                  {/* Botanical Notes Pill Tags */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="px-2.5 py-0.5 rounded-full bg-[#F7F2E8] text-[#064D58] text-[10px] font-sans tracking-wide"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: EDITORIAL STAGE DISPLAY WITH GOLDEN ORBIT */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1.1/1] max-w-xl mx-auto rounded-[36px] sm:rounded-[48px] overflow-hidden bg-[#E9DDCA] shadow-[0_24px_50px_rgba(6,56,64,0.14)]">
              {/* Product Image */}
              <Image
                src={activeCreation.image}
                alt={activeCreation.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                referrerPolicy="no-referrer"
                className="object-cover object-center transition-all duration-700 ease-out"
              />

              {/* Delicate Gradient Shade */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#063840]/60 via-[#063840]/10 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Golden Thread Circular Orbit */}
              <div className="absolute inset-4 pointer-events-none opacity-75">
                <GoldenThread variant="officine" strokeWidth={1.3} opacity={0.8} />
              </div>

              {/* Ritual & Information Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-[26px] bg-white/92 backdrop-blur-md border border-[rgba(19,40,51,0.08)] shadow-lg text-[#063840]">
                <div className="flex items-center gap-2 mb-2 text-[#C7A363]">
                  <Droplets className="w-4 h-4" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.24em] font-semibold">
                    Le Rituel d'Usage
                  </span>
                </div>
                <p className="font-editorial text-[16px] sm:text-[18px] text-[#063840] leading-snug italic">
                  « {activeCreation.ritual} »
                </p>
                <p className="mt-2 text-[12px] text-[#6F756F] font-sans font-light">
                  {activeCreation.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Bottom Link */}
        <div className="mt-14 pt-8 border-t border-[rgba(19,40,51,0.08)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7A363]" />
            <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#7C8061]">
              Flaconnage artisanal · Séries limitées
            </span>
          </div>

          <PrimaryButton href="/creations" variant="petrol" icon={<ArrowRight className="w-4 h-4 text-[#C7A363]" />}>
            Explorer toutes les créations
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
