import React from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BotanicalParallax } from "@/components/motion/BotanicalParallax";

export function Manifesto() {
  return (
    <section
      className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center overflow-visible"
      aria-label="Manifeste de L'Officine"
    >
      {/* Subtle Foreground Botanical Herbal Touch (travel 12px within 10-24px limit) */}
      <BotanicalParallax
        variant="wild-herbs"
        travel={12}
        direction="up"
        className="absolute -top-6 -right-6 sm:right-8 w-24 h-36 sm:w-28 sm:h-44 opacity-25"
      />

      <ScrollReveal>
        <SectionLabel index="01" theme="champagne" className="mb-6">
          La Philosophie du Lieu
        </SectionLabel>

        <h2 className="font-editorial text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-[#063840] max-w-4xl mx-auto">
          « Une approche qui commence par l’écoute. »
        </h2>

        <p className="mt-8 text-[16px] sm:text-[19px] text-[#063840]/75 font-sans font-light leading-relaxed max-w-2xl mx-auto">
          Au cœur de la Provence, Fabienne Dizy Olliveaud accompagne chacun à travers des pratiques singulières de présence, de massage ondulatoire et de compositions aromatiques vivantes.
        </p>

        <div className="mt-12 flex items-center justify-center gap-6 text-[12px] uppercase font-sans tracking-[0.24em] text-[#7C8061]">
          <span>Silence</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A363]" />
          <span>Matière</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A363]" />
          <span>Continuité</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
