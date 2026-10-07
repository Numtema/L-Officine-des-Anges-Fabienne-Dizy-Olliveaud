import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { GoldenThread } from "@/components/motion/GoldenThread";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Fabienne Dizy Olliveaud — Parcours, Écoute & Présence",
  description:
    "Découvrez la démarche de Fabienne Dizy Olliveaud : praticienne en soins énergétiques, massage Lemniscate et création d'essences en Provence.",
};

export default function FabiennePage() {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          {/* Header Banner */}
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              La Praticienne
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em] select-none">
              FABIENNE <br />
              <span className="italic text-[#C7A363]">DIZY OLLIVEAUD</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Une présence attentive, un toucher délicat et une écoute fine forgés par des années de pratique intime au contact du vivant.
            </p>
          </div>

          {/* Main Content Case */}
          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto">
              {/* Asymmetric Portrait & Presentation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[3/4] rounded-[36px] sm:rounded-[48px_48px_120px_48px] overflow-hidden bg-[#E9DDCA] shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                      alt="Fabienne Dizy Olliveaud"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="absolute -inset-4 pointer-events-none opacity-60">
                    <GoldenThread variant="portrait" strokeWidth={1.3} opacity={0.7} />
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col items-start">
                  <SectionLabel index="02" theme="champagne" className="mb-3">
                    L'Origine du Geste
                  </SectionLabel>
                  <h2 className="font-editorial text-[2.6rem] sm:text-[3.2rem] leading-snug text-[#063840]">
                    Une vocation née du silence et du ressenti.
                  </h2>
                  <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] text-[#063840]/80 font-sans font-light leading-relaxed">
                    <p>
                      Installée dans le sud de la France, baignée par la lumière et les souffles méditerranéens, Fabienne a choisi de consacrer sa pratique à l’art de l’accueil et du réconfort.
                    </p>
                    <p>
                      Refusant les formules préfabriquées et les dogmes contraignants, elle envisage chaque être humain comme un univers singulier. Ses séances s’articulent autour d’un principe fondamental : laisser au corps le temps et l’espace nécessaires pour réveiller ses propres ressources de calme et d’équilibre.
                    </p>
                    <p>
                      Formée aux subtilités de la gestuelle en Lemniscate et aux savoirs botaniques de l'aromathérapie, elle allie la précision du geste artisanal à une sensibilité respectueuse de l'histoire de chacun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Pilars of Practice */}
              <div className="my-20 pt-16 border-t border-[rgba(19,40,51,0.10)]">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#7C8061] font-medium block mb-2">
                    L'Éthique de la Présence
                  </span>
                  <h3 className="font-editorial text-[2.4rem] sm:text-[3rem] text-[#063840]">
                    Ce qui guide chaque rencontre.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-[32px] bg-white border border-[rgba(19,40,51,0.08)] shadow-sm">
                    <span className="font-editorial text-[32px] text-[#C7A363] block mb-2">01</span>
                    <h4 className="font-editorial text-[1.6rem] text-[#063840] mb-2">L'Écoute sans filtre</h4>
                    <p className="text-[14px] text-[#6F756F] font-sans font-light leading-relaxed">
                      Entendre ce qui est dit et ce qui se tapit dans les silences. Accueillir les émotions sans jugement ni hâte.
                    </p>
                  </div>

                  <div className="p-8 rounded-[32px] bg-white border border-[rgba(19,40,51,0.08)] shadow-sm">
                    <span className="font-editorial text-[32px] text-[#C7A363] block mb-2">02</span>
                    <h4 className="font-editorial text-[1.6rem] text-[#063840] mb-2">La Continuité du Geste</h4>
                    <p className="text-[14px] text-[#6F756F] font-sans font-light leading-relaxed">
                      Des mouvements fluides et rythmés pour apaiser le système nerveux et réunifier les sensations physiques.
                    </p>
                  </div>

                  <div className="p-8 rounded-[32px] bg-white border border-[rgba(19,40,51,0.08)] shadow-sm">
                    <span className="font-editorial text-[32px] text-[#C7A363] block mb-2">03</span>
                    <h4 className="font-editorial text-[1.6rem] text-[#063840] mb-2">La Noblesse Végétale</h4>
                    <p className="text-[14px] text-[#6F756F] font-sans font-light leading-relaxed">
                      Des huiles solarisées pures, des flacons ambrés et des extraits de plantes cueillies avec délicatesse.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <QuoteBlock
                quote="« Le geste de soin n'est ni une manipulation, ni une démonstration. C'est un retour partagé vers la paix du corps. »"
                author="Fabienne Dizy Olliveaud"
                role="Praticienne en Provence"
              />

              {/* CTAs */}
              <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryButton href="/prendre-rendez-vous" variant="petrol">
                  Prendre rendez-vous
                </PrimaryButton>
                <SecondaryButton href="/prestations" variant="outline-petrol">
                  Découvrir les prestations
                </SecondaryButton>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
