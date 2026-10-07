import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { servicesData } from "@/content/services";
import { Clock, MapPin, Droplets, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Aromathérapie & Parfums d'Âme — L’Officine des Anges",
  description:
    "Consultation olfactive sur-mesure et création de brumes d'âme par Fabienne Dizy Olliveaud. La noblesse des essences méditerranéennes.",
};

export default function AromatherapiePage() {
  const service = servicesData.find((s) => s.id === "aromatherapie")!;

  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index={service.index} theme="champagne" className="mb-4">
              {service.pillar} · {service.subtitle}
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
              AROMATHÉRAPIE <br />
              <span className="italic text-[#C7A363]">& PARFUMS D'ÂME</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              {service.tagline}
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                <div className="lg:col-span-6">
                  <EditorialImage
                    src={service.image}
                    alt={service.imageAlt}
                    ratio="4/5"
                    radius="image"
                    className="shadow-xl"
                  />
                </div>

                <div className="lg:col-span-6 flex flex-col items-start">
                  <div className="flex items-center gap-4 text-[12px] font-sans text-[#064D58] mb-6">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-[#C7A363]" />
                      {service.duration}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7A363]" />
                    <span className="flex items-center gap-1.5 font-light text-[#6F756F]">
                      <MapPin className="w-4 h-4 text-[#7C8061]" />
                      {service.location}
                    </span>
                  </div>

                  <h2 className="font-editorial text-[2.4rem] sm:text-[3rem] text-[#063840] leading-snug">
                    Le dialogue sensible entre la plante et vos émotions.
                  </h2>

                  <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#063840]/80 font-sans font-light leading-relaxed">
                    {service.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryButton href="/prendre-rendez-vous" variant="petrol">
                      Créer mon accord d'âme
                    </PrimaryButton>
                    <SecondaryButton href="/creations" variant="outline-petrol">
                      Découvrir L'Officine
                    </SecondaryButton>
                  </div>
                </div>
              </div>

              {/* Botanie Méditerranéenne */}
              <div className="my-16 pt-16 border-t border-[rgba(19,40,51,0.10)]">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#7C8061] font-medium block mb-2">
                    Le Jardin de l'Apothicaire
                  </span>
                  <h3 className="font-editorial text-[2.2rem] sm:text-[2.8rem] text-[#063840]">
                    Des essences pures de Haute-Provence.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-[28px] bg-white border border-[rgba(19,40,51,0.08)]">
                    <span className="font-editorial text-[20px] text-[#C7A363] block mb-1">Néroli & Fleur d'Oranger</span>
                    <p className="text-[13px] text-[#6F756F] font-sans font-light">
                      Apaisement du cœur, réconfort de l'enfance et dissolution des angoisses passagères.
                    </p>
                  </div>
                  <div className="p-6 rounded-[28px] bg-white border border-[rgba(19,40,51,0.08)]">
                    <span className="font-editorial text-[20px] text-[#C7A363] block mb-1">Hélichryse Italienne</span>
                    <p className="text-[13px] text-[#6F756F] font-sans font-light">
                      L'Immortelle solaire qui répare les bleus de l'âme et fluidifie la circulation des énergies.
                    </p>
                  </div>
                  <div className="p-6 rounded-[28px] bg-white border border-[rgba(19,40,51,0.08)]">
                    <span className="font-editorial text-[20px] text-[#C7A363] block mb-1">Lavande Fine d'Altitude</span>
                    <p className="text-[13px] text-[#6F756F] font-sans font-light">
                      L'or bleu de Provence pour pacifier le système nerveux et inviter au sommeil profond.
                    </p>
                  </div>
                </div>
              </div>

              <QuoteBlock
                quote={service.quote}
                author="Fabienne Dizy Olliveaud"
                role="L'Officine des Anges"
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
