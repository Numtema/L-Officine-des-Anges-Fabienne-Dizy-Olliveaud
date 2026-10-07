import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { servicesData } from "@/content/services";
import { Users, Clock, Calendar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ateliers & Formations — L’Officine des Anges",
  description:
    "Cercles intimistes et ateliers de transmission en herboristerie, automassage et rituels de soin avec Fabienne Dizy Olliveaud en Provence.",
};

export default function AteliersPage() {
  const service = servicesData.find((s) => s.id === "ateliers-formations")!;

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
              ATELIERS <br />
              <span className="italic text-[#C7A363]">& CERCLES BOTANIQUES</span>
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
                      <Users className="w-4 h-4 text-[#7C8061]" />
                      4 à 6 personnes maximum
                    </span>
                  </div>

                  <h2 className="font-editorial text-[2.4rem] sm:text-[3rem] text-[#063840] leading-snug">
                    Un espace d'apprentissage bienveillant en petit comité.
                  </h2>

                  <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#063840]/80 font-sans font-light leading-relaxed">
                    {service.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryButton href="/contact" variant="petrol">
                      Se renseigner sur les prochaines dates
                    </PrimaryButton>
                  </div>
                </div>
              </div>

              {/* Workshops Topics */}
              <div className="my-16 pt-16 border-t border-[rgba(19,40,51,0.10)] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[32px] bg-white border border-[rgba(19,40,51,0.08)]">
                  <h3 className="font-editorial text-[1.8rem] text-[#063840] mb-3">
                    Ce que vous pratiquez
                  </h3>
                  <ul className="space-y-3">
                    {service.gestures.map((gesture, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#063840]/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#C7A363] mt-1 flex-shrink-0" />
                        <span>{gesture}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-[32px] bg-white border border-[rgba(19,40,51,0.08)]">
                  <h3 className="font-editorial text-[1.8rem] text-[#063840] mb-3">
                    Les acquis partagés
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#063840]/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#7C8061] mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
