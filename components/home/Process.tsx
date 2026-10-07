"use client";

import React from "react";
import { processSteps } from "@/content/services";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Process() {
  return (
    <section
      className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
      aria-label="Le déroulement d'une rencontre"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: STICKY EDITORIAL TITLE & INVITATION */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <ScrollReveal>
            <SectionLabel index="05" theme="champagne" className="mb-4">
              L’Art de l’Accompagnement
            </SectionLabel>

            <h2 className="font-editorial text-[clamp(2.6rem,4.8vw,4.5rem)] leading-[0.98] text-[#063840] tracking-[-0.02em]">
              UN PREMIER <br />
              <span className="italic text-[#064D58]">TEMPS D’ÉCHANGE.</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-[17px] text-[#6F756F] font-sans font-light leading-relaxed">
              Une consultation ne commence pas sur une table de soin, mais dans la clarté d’un dialogue préalable. Nous posons les bases ensemble pour que chaque geste réponde exactement à vos attentes.
            </p>

            <div className="mt-10">
              <PrimaryButton href="/prendre-rendez-vous" variant="petrol">
                Prendre rendez-vous
              </PrimaryButton>
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT COLUMN: SCROLLING TIMELINE STEPS WITH GOLDEN THREAD */}
        <div className="lg:col-span-7 relative pl-4 sm:pl-8">
          {/* Subtle Vertical Golden Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none hidden sm:block">
            <GoldenThread variant="timeline" strokeWidth={1.2} opacity={0.65} />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={step.number} delay={0.08 * idx}>
                <div className="group relative pb-8 border-b border-[rgba(19,40,51,0.10)]">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-editorial italic text-[36px] sm:text-[44px] text-[#C7A363] leading-none group-hover:text-[#064D58] transition-colors">
                      {step.number}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#7C8061]">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="font-editorial text-[1.8rem] sm:text-[2.2rem] text-[#063840] leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] text-[#6F756F] font-sans font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
