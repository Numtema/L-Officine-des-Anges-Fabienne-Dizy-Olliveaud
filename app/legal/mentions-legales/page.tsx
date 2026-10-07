import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions Légales — L’Officine des Anges",
  description: "Mentions légales de L'Officine des Anges et de Fabienne Dizy Olliveaud.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        <div className="max-w-4xl mx-auto px-6 text-center pb-12 text-[#F7F2E8]">
          <h1 className="font-editorial text-[3rem] sm:text-[4rem] text-[#F7F2E8]">
            Mentions Légales
          </h1>
          <p className="font-sans text-[14px] text-[#F7F2E8]/70 mt-2">
            L’Officine des Anges — Fabienne Dizy Olliveaud
          </p>
        </div>

        <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] py-16 px-6 sm:px-12">
          <div className="max-w-3xl mx-auto space-y-8 text-[15px] text-[#063840]/80 font-sans font-light leading-relaxed">
            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                1. Édition du site
              </h2>
              <p>
                Le présent site internet est édité par Fabienne Dizy Olliveaud, exerçant sous la dénomination <strong>L’Officine des Anges</strong>.
              </p>
              <p className="mt-2">
                Localisation de la pratique : {siteConfig.address.city}, {siteConfig.address.country}.
              </p>
              <p className="mt-2">
                Contact électronique : {siteConfig.email}.
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé sur une infrastructure Cloud sécurisée avec déploiement continu en Europe (Google Cloud Run / CDN mondial).
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus (textes, photographies, univers graphique de l'Écrin Vivant, logotypes, charte éditoriale du Fil d'Or) sont la propriété exclusive de Fabienne Dizy Olliveaud et protégés par le droit d'auteur. Toute reproduction totale ou partielle sans accord préalable est formellement interdite.
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                4. Avertissement déontologique et médical
              </h2>
              <p>
                {siteConfig.disclaimer}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
