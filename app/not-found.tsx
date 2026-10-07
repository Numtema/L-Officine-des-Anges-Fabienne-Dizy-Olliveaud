import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#063840] text-[#F7F2E8] flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-md mx-auto">
          <span className="font-editorial text-[72px] sm:text-[96px] text-[#C7A363] block leading-none">
            404
          </span>
          <h1 className="font-editorial text-[2.2rem] sm:text-[2.8rem] text-[#F7F2E8] mt-4 mb-3">
            Page introuvable
          </h1>
          <p className="text-[15px] text-[#F7F2E8]/75 font-sans font-light mb-8 leading-relaxed">
            Le chemin emprunté ne mène à aucun espace de L'Officine. Laissez-vous guider pour revenir à la maison.
          </p>
          <PrimaryButton href="/" variant="champagne">
            Retourner à l’accueil
          </PrimaryButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
