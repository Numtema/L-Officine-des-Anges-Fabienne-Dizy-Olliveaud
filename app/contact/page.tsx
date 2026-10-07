import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FirstExchange } from "@/components/home/FirstExchange";

export const metadata: Metadata = {
  title: "Contact & Informations — L’Officine des Anges",
  description:
    "Prenez contact avec Fabienne Dizy Olliveaud pour toute demande d'information, accompagnement individuel ou questions sur L'Officine des Anges.",
};

export default function ContactPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-12 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              Lien & Échange
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
              PRENDRE <br />
              <span className="italic text-[#C7A363]">CONTACT</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Un mot, une interrogation ou le souhait de convenir d’un moment d’échange : nous vous répondons avec soin et discrétion.
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-12 px-2 sm:px-6">
            <FirstExchange />
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
