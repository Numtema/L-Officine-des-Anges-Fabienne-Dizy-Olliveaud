import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { testimonialsData } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Témoignages & Retours d'Expérience — L’Officine des Anges",
  description:
    "Retours d'expérience et témoignages des personnes accompagnées au cabinet de Fabienne Dizy Olliveaud en Provence.",
};

export default function TemoignagesPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              Paroles d'Accompagnés
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
              TÉMOIGNAGES <br />
              <span className="italic text-[#C7A363]">& EXPÉRIENCES</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Des mots authentiques partagés par celles et ceux qui ont franchi le seuil de L’Officine des Anges.
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto space-y-12">
              {testimonialsData.map((item, index) => (
                <article
                  key={item.id}
                  className="p-8 sm:p-12 rounded-[36px] sm:rounded-[44px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.10)] shadow-[0_12px_28px_rgba(6,56,64,0.04)]"
                >
                  <blockquote className="font-editorial text-[1.8rem] sm:text-[2.2rem] text-[#063840] leading-snug italic font-normal">
                    « {item.quote} »
                  </blockquote>

                  <div className="mt-8 pt-5 border-t border-[rgba(19,40,51,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <cite className="not-italic font-sans text-[14px] font-semibold text-[#064D58]">
                        {item.author}
                      </cite>
                      <span className="block text-[12px] text-[#7C8061] font-sans">
                        {item.detail} · {item.practice}
                      </span>
                    </div>
                    <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#C7A363]">
                      {item.date}
                    </span>
                  </div>
                </article>
              ))}

              <div className="pt-12 text-center">
                <QuoteBlock
                  quote="« La confiance se tisse dans le secret de chaque geste et dans la permanence du respect. »"
                  author="Fabienne Dizy Olliveaud"
                  role="L'Officine des Anges"
                />

                <div className="mt-8">
                  <PrimaryButton href="/prendre-rendez-vous" variant="petrol">
                    Vivre une première séance
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
