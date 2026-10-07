import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Clock, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tarifs & Formules — L’Officine des Anges",
  description:
    "Découvrez les modalités et tarifs indicatifs des séances de soins énergétiques, massage Lemniscate et aromathérapie avec Fabienne Dizy Olliveaud.",
};

const pricingGrid = [
  {
    title: "Soin Énergétique",
    pillar: "RECEVOIR",
    duration: "1h15 à 1h30",
    modality: "Au cabinet ou à distance",
    description: "Écoute préalable, harmonisation subtile et recentrage émotionnel.",
    indicativeRate: "Sur devis / consultation préalable",
    notes: "Comprend un temps d'échange et une brume d'ancrage offerte en fin de séance.",
  },
  {
    title: "Massage Lemniscate",
    pillar: "RALENTIR",
    duration: "1h30",
    modality: "Au cabinet exclusivement",
    description: "Toucher rythmique continu en huit infini (∞) avec huiles végétales tiédies solarisées.",
    indicativeRate: "Sur consultation préalable",
    notes: "Comprend l'onction aux extraits méditerranéens et un temps d'intégration silencieuse.",
  },
  {
    title: "Aromathérapie & Parfum d'Âme",
    pillar: "COMPOSER",
    duration: "1h00 à 1h15",
    modality: "À L'Officine ou expédition personnalisée",
    description: "Consultation olfactive à l'aveugle et formulation de votre accord personnalisé.",
    indicativeRate: "Flacon personnalisé inclus",
    notes: "Repartez avec votre flacon d'apothicaire en verre ambré.",
  },
  {
    title: "Atelier & Cercle Botanique",
    pillar: "TRANSMETTRE",
    duration: "Demi-journée (3h)",
    modality: "Groupe restreint (4 à 6 pers.)",
    description: "Initiation aux rituels, confection d'une brume d'ambiance et transmission des gestes doux.",
    indicativeRate: "Matériel et flacon inclus",
    notes: "Livret de rituel et préparation artisanale offerts à chaque participant.",
  },
];

export default function TarifsPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              Transparence & Cadre
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
              TARIFS & <br />
              <span className="italic text-[#C7A363]">MODALITÉS</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Un cadre d'accompagnement clair, respectueux et adapté au rythme de chacun.
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {pricingGrid.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.10)] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#C7A363] font-semibold">
                          {item.pillar}
                        </span>
                        <span className="text-[12px] font-sans text-[#7C8061] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>

                      <h2 className="font-editorial text-[2.2rem] text-[#063840] leading-snug">
                        {item.title}
                      </h2>

                      <span className="block text-[12px] font-sans text-[#064D58] mt-1 font-medium">
                        {item.modality}
                      </span>

                      <p className="mt-4 text-[14px] text-[#6F756F] font-sans font-light leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-6 p-4 rounded-[20px] bg-white border border-[rgba(19,40,51,0.06)]">
                        <span className="block text-[11px] font-sans uppercase tracking-[0.16em] text-[#7C8061] font-medium">
                          Modalités :
                        </span>
                        <span className="block font-editorial text-[1.2rem] text-[#063840] mt-0.5">
                          {item.indicativeRate}
                        </span>
                        <p className="text-[12px] text-[#6F756F] font-sans font-light mt-1">
                          {item.notes}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <PrimaryButton href="/prendre-rendez-vous" variant="petrol" className="w-full">
                        Prendre rendez-vous
                      </PrimaryButton>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ethical notice */}
              <div className="p-8 rounded-[32px] bg-[#063840] text-[#F7F2E8] max-w-3xl mx-auto text-center">
                <ShieldCheck className="w-8 h-8 text-[#C7A363] mx-auto mb-3" />
                <h3 className="font-editorial text-[2rem] text-[#F7F2E8]">
                  Engagement de Transparence
                </h3>
                <p className="mt-2 text-[14px] text-[#F7F2E8]/70 font-sans font-light leading-relaxed">
                  Le montant exact et les disponibilités vous sont confirmés en amont lors de la prise de contact préalable. Aucun frais imprévu. Toute annulation doit être formulée au moins 48 heures avant la séance par courtoisie pour les personnes en attente.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
