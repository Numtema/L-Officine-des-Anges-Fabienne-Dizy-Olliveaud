import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { officineCreations } from "@/content/services";
import { Droplets, Sparkles, Feather, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "L’Officine — Créations Botaniques & Flacons d'Âme",
  description:
    "Découvrez les créations de L'Officine des Anges : brumes d'atmosphère, élixirs de massage et concentrés de présence formulés artisanalement par Fabienne Dizy Olliveaud.",
};

export default function CreationsPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              L’Atelier Olfactif
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
              L’OFFICINE <br />
              <span className="italic text-[#C7A363]">DES ANGES</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Des créations à porter, à respirer, à ressentir. Des élixirs et brumes préparés à la main en séries intimistes pour habiter votre quotidien.
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto">
              {/* Introduction to the House */}
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#7C8061] font-medium block mb-2">
                  L'Artisanat de Haute Provence
                </span>
                <h2 className="font-editorial text-[2.4rem] sm:text-[3.2rem] text-[#063840]">
                  L’Apothicaire réinventé au service du calme.
                </h2>
                <p className="mt-4 text-[15px] sm:text-[17px] text-[#6F756F] font-sans font-light leading-relaxed">
                  Dans notre atelier, pas d’additifs artificiels ni de solvants de synthèse. Chaque ingrédient provient de distillations lentes et d’huiles végétales certifiées biologiques.
                </p>
              </div>

              {/* Creations Grid */}
              <div className="space-y-20">
                {officineCreations.map((creation, idx) => (
                  <article
                    key={creation.id}
                    className="p-8 sm:p-12 rounded-[36px] sm:rounded-[48px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.10)] shadow-[0_20px_44px_rgba(6,56,64,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                  >
                    <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#E9DDCA] shadow-md">
                        <Image
                          src={creation.image}
                          alt={creation.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          referrerPolicy="no-referrer"
                          className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col items-start">
                      <div className="flex items-center justify-between w-full mb-3">
                        <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#C7A363] font-semibold">
                          {creation.number} · {creation.type}
                        </span>
                        <span className="text-[12px] font-sans text-[#7C8061] font-light">
                          {creation.volume}
                        </span>
                      </div>

                      <h3 className="font-editorial text-[2.4rem] sm:text-[2.8rem] text-[#063840] leading-none">
                        {creation.name}
                      </h3>

                      <p className="font-editorial text-[1.2rem] text-[#064D58] italic mt-1">
                        {creation.subtitle}
                      </p>

                      <p className="mt-4 text-[15px] text-[#6F756F] font-sans font-light leading-relaxed">
                        {creation.description}
                      </p>

                      {/* Ritual */}
                      <div className="my-5 p-4 rounded-[20px] bg-white border border-[rgba(19,40,51,0.06)] w-full">
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C7A363] font-medium block mb-1">
                          Rituel conseillé :
                        </span>
                        <p className="text-[13px] text-[#063840] font-editorial italic">
                          « {creation.ritual} »
                        </p>
                      </div>

                      {/* Notes tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {creation.notes.map((note) => (
                          <span
                            key={note}
                            className="px-3 py-1 rounded-full bg-[#F7F2E8] text-[#064D58] text-[11px] font-sans tracking-wide"
                          >
                            {note}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <PrimaryButton href="/contact" variant="petrol">
                          Demander un flacon
                        </PrimaryButton>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Custom Fragrance Atelier Box */}
              <div className="mt-20 p-8 sm:p-14 rounded-[40px] bg-[#063840] text-[#F7F2E8] text-center max-w-3xl mx-auto">
                <Sparkles className="w-8 h-8 text-[#C7A363] mx-auto mb-4" />
                <h3 className="font-editorial text-[2.6rem] sm:text-[3.2rem] leading-tight">
                  Votre formule sur-mesure
                </h3>
                <p className="mt-4 text-[15px] sm:text-[17px] text-[#F7F2E8]/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
                  Fabienne conçoit également des accords olfactifs uniques lors d'entretiens individuels d'aromathérapie. Une composition personnelle pensée pour votre énergie propre.
                </p>
                <div className="mt-8 flex justify-center">
                  <PrimaryButton href="/aromatherapie" variant="champagne">
                    Prendre rendez-vous pour une création
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
