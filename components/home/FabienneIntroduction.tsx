"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function FabienneIntroduction() {
  return (
    <section
      className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
      aria-label="Rencontre avec Fabienne Dizy Olliveaud"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: 38.2% ASYMMETRIC PORTRAIT FRAME & GOLDEN THREAD CURVE */}
        <div className="lg:col-span-5 relative">
          <ScrollReveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetric Architectural Rounded Portrait Frame */}
              <div className="relative aspect-[4/5] rounded-[36px] sm:rounded-[48px_48px_120px_48px] overflow-hidden shadow-[0_20px_50px_rgba(6,56,64,0.14)] bg-[#E9DDCA]">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                  alt="Fabienne Dizy Olliveaud — Portrait et regard bienveillant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                  className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#063840]/30 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Signature Golden Thread framing the portrait contour */}
              <div className="absolute -inset-4 pointer-events-none opacity-70">
                <GoldenThread variant="portrait" strokeWidth={1.3} opacity={0.7} />
              </div>

              {/* Floating Discreet Monogram Seal Badge */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#FCF8F0] p-3.5 sm:p-4 rounded-[26px] shadow-[0_12px_30px_rgba(6,56,64,0.12)] border border-[rgba(19,40,51,0.08)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#064D58]/10 flex items-center justify-center text-[#064D58]">
                  <Sparkles className="w-4 h-4 text-[#C7A363]" />
                </div>
                <div>
                  <span className="block font-editorial text-[16px] text-[#063840] leading-none">
                    Présence pure
                  </span>
                  <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#7C8061] mt-1">
                    Cabinet & Distance
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT COLUMN: 61.8% EDITORIAL TEXT */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <ScrollReveal delay={0.15}>
            <SectionLabel index="02" theme="champagne" className="mb-4">
              La Praticienne
            </SectionLabel>

            <h2 className="font-editorial text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[1.0] text-[#063840] tracking-[-0.02em]">
              Écouter avant <br />
              <span className="italic text-[#064D58]">d’accompagner.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[15px] sm:text-[17px] text-[#063840]/80 font-sans font-light leading-relaxed">
              <p>
                Depuis son écrin méditerranéen en Provence, Fabienne Dizy Olliveaud a développé un toucher et une présence fondés sur le respect scrupuleux du rythme de chaque être.
              </p>
              <p>
                Ici, aucun protocole standardisé ni discours ésotérique : l’attention se concentre sur l’accueil chaleureux, la sensibilité du geste et la justesse de l’instant. Que ce soit à travers les ondes douces du massage Lemniscate, l’apaisement profond d’un soin énergétique ou la formulation subtile d’une essence aromatique, l’objectif demeure l’harmonisation durable du corps et de l’esprit.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-[rgba(19,40,51,0.10)]">
              <div>
                <span className="font-editorial text-[1.4rem] text-[#064D58] block leading-none">
                  L’Accueil
                </span>
                <span className="text-[12px] text-[#6F756F] font-sans font-light mt-1.5 block">
                  Écoute bienveillante sans aucun jugement.
                </span>
              </div>
              <div>
                <span className="font-editorial text-[1.4rem] text-[#064D58] block leading-none">
                  Le Rythme
                </span>
                <span className="text-[12px] text-[#6F756F] font-sans font-light mt-1.5 block">
                  Ralentir pour entendre ce qui réclame silence.
                </span>
              </div>
              <div>
                <span className="font-editorial text-[1.4rem] text-[#064D58] block leading-none">
                  La Matière
                </span>
                <span className="text-[12px] text-[#6F756F] font-sans font-light mt-1.5 block">
                  Essences végétales pures et huiles solarisées.
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <PrimaryButton href="/fabienne" variant="petrol" icon={<ArrowRight className="w-4 h-4 text-[#C7A363]" />}>
                Découvrir son parcours
              </PrimaryButton>
              <Link
                href="/prendre-rendez-vous"
                className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#064D58] hover:text-[#C7A363] transition-colors font-medium"
              >
                Prendre rendez-vous avec Fabienne →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
