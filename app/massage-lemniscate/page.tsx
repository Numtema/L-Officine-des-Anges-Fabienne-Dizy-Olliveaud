import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { servicesData } from "@/content/services";
import { Clock, MapPin, CheckCircle2, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Massage Lemniscate — L’Officine des Anges",
  description:
    "Le massage en Lemniscate par Fabienne Dizy Olliveaud : le mouvement perpétuel en huit (∞) pour relier, apaiser et unifier le corps en Provence.",
};

export default function MassageLemniscatePage() {
  const service = servicesData.find((s) => s.id === "massage-lemniscate")!;

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
              MASSAGE <br />
              <span className="italic text-[#C7A363]">LEMNISCATE</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              {service.tagline}
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                <div className="lg:col-span-6 relative">
                  <EditorialImage
                    src={service.image}
                    alt={service.imageAlt}
                    ratio="4/5"
                    radius="alcove"
                    className="shadow-xl"
                  />
                  {/* Dedicated Lemniscate Golden Path */}
                  <div className="absolute -bottom-10 -left-6 w-72 h-36 pointer-events-none z-20">
                    <GoldenThread variant="lemniscate" strokeWidth={1.6} opacity={0.85} showTracer />
                  </div>
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
                    Le mouvement perpétuel qui berce le vivant.
                  </h2>

                  <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#063840]/80 font-sans font-light leading-relaxed">
                    {service.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryButton href="/prendre-rendez-vous" variant="petrol">
                      Réserver une séance
                    </PrimaryButton>
                    <SecondaryButton href="/tarifs" variant="outline-petrol">
                      Consulter les tarifs
                    </SecondaryButton>
                  </div>
                </div>
              </div>

              {/* Unique Characteristic Focus */}
              <div className="p-8 sm:p-12 rounded-[36px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.10)] my-16 shadow-sm">
                <div className="flex items-center gap-3 text-[#C7A363] mb-4">
                  <Waves className="w-5 h-5" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.24em] font-semibold">
                    Le Rythme du Huit Infini (∞)
                  </span>
                </div>
                <h3 className="font-editorial text-[2rem] sm:text-[2.4rem] text-[#063840] mb-4">
                  Pourquoi l'absence de rupture transforme la détente ?
                </h3>
                <p className="text-[15px] text-[#6F756F] font-sans font-light leading-relaxed mb-6">
                  Dans la vie moderne, les stimulations sont fragmentées et hachées. Lorsque les mains maintiennent un contact continu sans jamais se détacher brusquement de la peau, le cerveau reptilien et le système nerveux autonome désamorcent l'état d'alerte. Le receveur entre dans un état de flottaison propice à la régénération profonde.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[rgba(19,40,51,0.08)]">
                  {service.gestures.map((gesture, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#063840]/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A363] mt-2 flex-shrink-0" />
                      <span>{gesture}</span>
                    </div>
                  ))}
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
