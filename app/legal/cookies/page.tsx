import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Gestion des Cookies — L’Officine des Anges",
  description: "Politique d'utilisation des traceurs et cookies sur le site L'Officine des Anges.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        <div className="max-w-4xl mx-auto px-6 text-center pb-12 text-[#F7F2E8]">
          <h1 className="font-editorial text-[3rem] sm:text-[4rem] text-[#F7F2E8]">
            Gestion des Cookies
          </h1>
          <p className="font-sans text-[14px] text-[#F7F2E8]/70 mt-2">
            Transparence sur les traceurs techniques
          </p>
        </div>

        <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] py-16 px-6 sm:px-12">
          <div className="max-w-3xl mx-auto space-y-8 text-[15px] text-[#063840]/80 font-sans font-light leading-relaxed">
            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                1. Utilisation minimale et respectueuse
              </h2>
              <p>
                Le site de L'Officine des Anges respecte votre tranquillité numérique. Aucun cookie publicitaire intrusif ni traceur de profilage commercial n'est déposé sur votre terminal.
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-[1.8rem] text-[#063840] mb-2 font-normal">
                2. Cookies techniques
              </h2>
              <p>
                Seuls des cookies strictement nécessaires au bon fonctionnement de la navigation, au maintien de l'affichage adaptatif et à la sécurité de l'infrastructure peuvent être mobilisés.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
