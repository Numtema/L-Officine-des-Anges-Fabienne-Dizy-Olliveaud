import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GoldenThread } from "@/components/motion/GoldenThread";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#063840] text-[#F7F2E8] pt-20 pb-12 px-6 sm:px-10 lg:px-16 mt-20 rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] overflow-hidden border-t border-[#C7A363]/20">
      {/* Golden Thread Final Resting Horizon */}
      <div className="max-w-md mx-auto mb-14 opacity-50">
        <GoldenThread variant="footer" strokeWidth={1.2} opacity={0.65} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Section with Brand Identity */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 pb-16 border-b border-white/10">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-14 h-14 rounded-full bg-[#FCF8F0]/10 p-1 border border-[#C7A363]/30">
                <Image
                  src="/assets/logo-officine.svg"
                  alt="Sceau L'Officine des Anges"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-editorial text-[26px] tracking-wide block leading-none text-[#F7F2E8]">
                  L’Officine des Anges
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#C7A363] mt-1.5 block">
                  Fabienne Dizy Olliveaud
                </span>
              </div>
            </div>
            <p className="text-[#F7F2E8]/70 text-[14px] sm:text-[15px] leading-relaxed font-light">
              Maison éditoriale et sanctuaire de présence en Provence. Soins énergétiques, massage en Lemniscate, herboristerie sensorielle et créations sur-mesure pour réconcilier le corps et le calme.
            </p>
          </div>

          {/* 4 Navigation Groups */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full lg:w-auto">
            {/* Group 1: MAISON */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#C7A363] font-medium mb-1">
                Maison
              </span>
              <Link href="/" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Accueil
              </Link>
              <Link href="/fabienne" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Fabienne
              </Link>
              <Link href="/temoignages" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Témoignages
              </Link>
              <Link href="/tarifs" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Tarifs & Formules
              </Link>
            </div>

            {/* Group 2: PRESTATIONS */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#C7A363] font-medium mb-1">
                Prestations
              </span>
              <Link href="/soins-energetiques" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Soins énergétiques
              </Link>
              <Link href="/massage-lemniscate" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Massage Lemniscate
              </Link>
              <Link href="/aromatherapie" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Aromathérapie
              </Link>
              <Link href="/ateliers-formations" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Ateliers & Cercles
              </Link>
            </div>

            {/* Group 3: CRÉATIONS */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#C7A363] font-medium mb-1">
                Créations
              </span>
              <Link href="/creations" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                L’Atelier Olfactif
              </Link>
              <Link href="/creations#brumes" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Brumes d’atmosphère
              </Link>
              <Link href="/creations#elixirs" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Élixirs de Lemniscate
              </Link>
              <Link href="/creations#sur-mesure" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Parfums d’Âme uniques
              </Link>
            </div>

            {/* Group 4: CONTACT */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#C7A363] font-medium mb-1">
                Contact & Accès
              </span>
              <Link href="/prendre-rendez-vous" className="text-[13px] text-[#C7A363] hover:underline font-medium">
                Prendre rendez-vous
              </Link>
              <Link href="/contact" className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors">
                Formulaire d’échange
              </Link>
              <span className="text-[12px] text-[#F7F2E8]/55">
                {siteConfig.address.city}
              </span>
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#F7F2E8]/80 hover:text-[#C7A363] transition-colors"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Large Editorial Wordmark (60-80% viewport) */}
        <div className="py-14 sm:py-20 text-center select-none overflow-hidden">
          <span className="block font-editorial text-[clamp(2.8rem,9vw,8rem)] leading-[0.9] text-[#F7F2E8]/90 tracking-[-0.03em]">
            L’OFFICINE DES ANGES
          </span>
          <span className="block font-sans text-[clamp(0.7rem,1.8vw,1.3rem)] uppercase tracking-[0.38em] text-[#C7A363] mt-3">
            FABIENNE DIZY OLLIVEAUD
          </span>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-center max-w-3xl mx-auto mb-8">
          <p className="text-[12px] leading-relaxed text-[#F7F2E8]/50 font-light">
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Copyright and Legal Links */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#F7F2E8]/60">
          <span>
            © {currentYear} {siteConfig.practitioner} — {siteConfig.brand}. Tous droits réservés.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/legal/mentions-legales" className="hover:text-[#C7A363] transition-colors">
              Mentions légales
            </Link>
            <Link href="/legal/politique-confidentialite" className="hover:text-[#C7A363] transition-colors">
              Confidentialité
            </Link>
            <Link href="/legal/cookies" className="hover:text-[#C7A363] transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
