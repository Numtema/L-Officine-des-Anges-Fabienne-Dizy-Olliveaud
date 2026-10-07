"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Waves, Clock, MapPin } from "lucide-react";
import { servicesData } from "@/content/services";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/utils";

export function Practices() {
  return (
    <section
      className="relative py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
      aria-label="Chapitre des Prestations"
    >
      {/* Chapter Title */}
      <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
        <ScrollReveal>
          <SectionLabel index="03" theme="champagne" className="mb-4">
            Prestations & Accompagnements
          </SectionLabel>
          <h2 className="font-editorial text-[clamp(2.8rem,5.8vw,5.5rem)] leading-[0.96] text-[#063840] tracking-[-0.03em]">
            DES GESTES, <br />
            <span className="italic text-[#064D58]">DES RITUELS, DES ESPACES.</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-[17px] text-[#6F756F] font-sans font-light leading-relaxed">
            Chaque accompagnement est conçu comme un sanctuaire sur-mesure. Une alternance de toucher continu, d’écoute silencieuse et de matières végétales nobles.
          </p>
        </ScrollReveal>
      </div>

      {/* Alternating Editorial Sections */}
      <div className="space-y-28 sm:space-y-40">
        {servicesData.slice(0, 3).map((service, index) => {
          const isReversed = index % 2 === 1; // Service 02 (Lemniscate) is reversed
          const isLemniscate = service.id === "massage-lemniscate";

          return (
            <article
              key={service.id}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative",
                isReversed && "lg:grid-flow-dense"
              )}
            >
              {/* IMAGE COLUMN */}
              <div
                className={cn(
                  "lg:col-span-6 relative",
                  isReversed ? "lg:col-start-7" : "lg:col-start-1"
                )}
              >
                <ScrollReveal>
                  <div className="relative">
                    <EditorialImage
                      src={service.image}
                      alt={service.imageAlt}
                      ratio="4/5"
                      radius={isLemniscate ? "alcove" : "image"}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="shadow-[0_20px_50px_rgba(6,56,64,0.12)]"
                    />

                    {/* Lemniscate Special Golden Signature */}
                    {isLemniscate && (
                      <div className="absolute -bottom-10 -left-6 sm:-left-10 w-64 sm:w-80 h-32 pointer-events-none z-20">
                        <GoldenThread variant="lemniscate" strokeWidth={1.5} opacity={0.85} showTracer />
                      </div>
                    )}

                    {/* Floating Duration & Location Badge */}
                    <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-[rgba(19,40,51,0.08)] shadow-sm flex items-center gap-3 text-[11px] font-sans text-[#064D58]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#C7A363]" />
                        {service.duration}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#C7A363]" />
                      <span className="flex items-center gap-1.5 font-light text-[#6F756F]">
                        <MapPin className="w-3.5 h-3.5 text-[#7C8061]" />
                        {service.location}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* COPY COLUMN */}
              <div
                className={cn(
                  "lg:col-span-6 flex flex-col items-start",
                  isReversed ? "lg:col-start-1" : "lg:col-start-7"
                )}
              >
                <ScrollReveal delay={0.12}>
                  {/* Micro Index & Pillar */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-editorial text-[24px] text-[#C7A363] italic">
                      {service.index}
                    </span>
                    <span className="w-4 h-[1px] bg-[#C7A363]/40" />
                    <span className="font-sans text-[11px] uppercase tracking-[0.24em] font-medium text-[#7C8061]">
                      {service.pillar}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-editorial text-[clamp(2.3rem,4.2vw,3.8rem)] leading-[1.0] text-[#063840] tracking-[-0.02em]">
                    {service.subtitle}
                  </h3>

                  {/* Subtitle / Tagline */}
                  <p className="mt-3 font-editorial text-[1.2rem] text-[#064D58] italic">
                    {service.title} — {service.tagline}
                  </p>

                  {/* Body Paragraphs */}
                  <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#063840]/75 font-sans font-light leading-relaxed">
                    <p>{service.description[0]}</p>
                    <p>{service.description[1]}</p>
                  </div>

                  {/* Gestures List */}
                  <div className="mt-6 pt-5 border-t border-[rgba(19,40,51,0.08)] w-full">
                    <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#7C8061] block mb-3 font-medium">
                      Les gestes clés :
                    </span>
                    <ul className="space-y-2">
                      {service.gestures.slice(0, 3).map((gesture, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#063840]/80 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A363] mt-2 flex-shrink-0" />
                          <span>{gesture}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <PrimaryButton href={`/${service.slug}`} variant="petrol" icon={<ArrowRight className="w-4 h-4 text-[#C7A363]" />}>
                      Découvrir ce soin
                    </PrimaryButton>
                    <SecondaryButton href="/prendre-rendez-vous" variant="outline-petrol">
                      Réserver
                    </SecondaryButton>
                  </div>
                </ScrollReveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
