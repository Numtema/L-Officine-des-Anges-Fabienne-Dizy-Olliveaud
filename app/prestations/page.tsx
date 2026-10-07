import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { servicesData } from "@/content/services";
import { Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Prestations & Espaces de Soin — L’Officine des Anges",
  description:
    "Explorez les accompagnements de Fabienne Dizy Olliveaud : soins énergétiques, massage Lemniscate, aromathérapie et ateliers en Provence.",
};

export default function PrestationsPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          {/* Header Banner */}
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              Les Espaces de Pratique
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] select-none">
              PRESTATIONS <br />
              <span className="italic text-[#C7A363]">& RITUELS</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Une sélection d’accompagnements individuels et d’ateliers intimistes façonnés pour écouter votre sensibilité et renouer avec la paix corporelle.
            </p>
          </div>

          {/* Cards & Hub Section */}
          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {servicesData.map((service) => (
                  <article
                    key={service.id}
                    className="p-8 sm:p-10 rounded-[36px] sm:rounded-[44px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.10)] shadow-[0_16px_36px_rgba(6,56,64,0.06)] flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="mb-8">
                        <EditorialImage
                          src={service.image}
                          alt={service.imageAlt}
                          ratio="16/10"
                          radius="card"
                          className="shadow-sm"
                        />
                      </div>

                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-editorial text-[20px] text-[#C7A363] italic">
                          {service.index}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.24em] font-medium text-[#7C8061]">
                          {service.pillar}
                        </span>
                      </div>

                      <h2 className="font-editorial text-[2.2rem] sm:text-[2.6rem] text-[#063840] leading-tight group-hover:text-[#064D58] transition-colors">
                        {service.title}
                      </h2>

                      <p className="font-editorial text-[1.15rem] text-[#064D58] italic mt-1">
                        {service.subtitle}
                      </p>

                      <p className="mt-4 text-[14px] sm:text-[15px] text-[#6F756F] font-sans font-light leading-relaxed">
                        {service.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="mt-6 pt-5 border-t border-[rgba(19,40,51,0.08)] flex items-center justify-between text-[12px] font-sans text-[#064D58]">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#C7A363]" />
                          {service.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#6F756F]">
                          <MapPin className="w-3.5 h-3.5 text-[#7C8061]" />
                          {service.location}
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <PrimaryButton
                        href={`/${service.slug}`}
                        variant="petrol"
                        className="w-full"
                        icon={<ArrowRight className="w-4 h-4 text-[#C7A363]" />}
                      >
                        Consulter les détails du soin
                      </PrimaryButton>
                    </div>
                  </article>
                ))}
              </div>

              {/* Bottom Guidance Box */}
              <div className="mt-20 p-8 sm:p-12 rounded-[36px] bg-[#063840] text-[#F7F2E8] flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#C7A363] block mb-2 font-medium">
                    Besoin de conseils pour débuter ?
                  </span>
                  <h3 className="font-editorial text-[2.2rem] sm:text-[2.8rem] leading-none">
                    Un premier échange pour vous guider.
                  </h3>
                  <p className="mt-3 text-[14px] text-[#F7F2E8]/75 font-sans font-light max-w-xl">
                    Si vous hésitez entre plusieurs pratiques, contactez Fabienne. Nous prendrons le temps d'identifier ce qui correspond le mieux à votre état intérieur.
                  </p>
                </div>
                <PrimaryButton href="/contact" variant="champagne" className="flex-shrink-0">
                  Échanger avec Fabienne
                </PrimaryButton>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
