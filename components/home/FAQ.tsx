import React from "react";
import Link from "next/link";
import { faqData } from "@/content/faq";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQ() {
  return (
    <section
      className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto"
      aria-label="Foire aux questions"
    >
      <div className="text-center mb-16">
        <ScrollReveal>
          <SectionLabel index="07" theme="champagne" className="mb-4">
            Questions Fréquentes
          </SectionLabel>

          <h2 className="font-editorial text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[1.0] text-[#063840] tracking-[-0.02em]">
            ÉCLAIRER <br />
            <span className="italic text-[#064D58]">VOTRE DÉMARCHE.</span>
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-[#6F756F] font-sans font-light">
            Les réponses aux interrogations régulières sur le cadre, les pratiques et la préparation d’une séance.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1}>
        <FAQAccordion items={faqData} />
      </ScrollReveal>

      <div className="mt-12 text-center text-[13px] text-[#6F756F] font-sans">
        <span>Une question spécifique demeure sans réponse ? </span>
        <Link href="/contact" className="text-[#064D58] font-medium underline hover:text-[#C7A363]">
          Écrivez-nous directement
        </Link>
      </div>
    </section>
  );
}
