import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — L’Officine des Anges",
  description: "Protection de vos données personnelles et respect de votre vie privée.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        <div className="max-w-4xl mx-auto px-6 text-center pb-12 text-[#F7F2E8]">
          <h1 className="font-editorial text-[3rem] sm:text-[4rem] text-[#F7F2E8]">
            Politique de Confidentialité
          </h1>
          <p className="font-sans text-[14px] text-[#F7F2E8]/70 mt-2">
            Respect scrupuleux du RGPD et de votre sphère intime
          </p>
        </div>

        <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] py-16 px-6 sm:px-12">
          <div className="max-w-3xl mx-auto space-y-8 text-[15px] text-[#063840]/80 font-sans font-light leading-relaxed">
            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                1. Données collectées
              </h2>
              <p>
                Les seules données recueillies sont celles que vous transmettez volontairement via les formulaires de contact ou de demande de rendez-vous (nom, email, numéro de téléphone, message).
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                2. Finalité des données
              </h2>
              <p>
                Ces informations sont strictement utilisées pour vous répondre et organiser vos séances d'accompagnement. Aucune donnée n'est cédée, louée ou vendue à des tiers.
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                3. Vos droits
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande par email.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
