import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Hero } from "@/components/home/Hero";
import { ServicePortals } from "@/components/home/ServicePortals";
import { Manifesto } from "@/components/home/Manifesto";
import { FabienneIntroduction } from "@/components/home/FabienneIntroduction";
import { Practices } from "@/components/home/Practices";
import { OfficineChapter } from "@/components/home/OfficineChapter";
import { Process } from "@/components/home/Process";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FirstExchange } from "@/components/home/FirstExchange";
import { generateWebsiteJsonLd, generatePersonJsonLd, generateFaqJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  const websiteSchema = generateWebsiteJsonLd();
  const personSchema = generatePersonJsonLd();
  const faqSchema = generateFaqJsonLd();

  return (
    <MotionProvider>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col selection:bg-[#C7A363]/30 selection:text-[#063840]">
        {/* Floating Architectural Header */}
        <Header />

        <main className="flex-grow">
          {/* 01. Hero / L'Écrin Vivant */}
          <Hero />

          {/* 02. Integrated Service Portals */}
          <ServicePortals />

          {/* Large Architectural Living Case Container (Ivory & Paper Body) */}
          <div className="relative mt-12 sm:mt-16 bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] overflow-hidden">
            {/* 03. Manifesto */}
            <Manifesto />

            {/* 04. Fabienne Introduction */}
            <FabienneIntroduction />

            {/* 05 - 08. Practices (Soins, Lemniscate, Aromathérapie) */}
            <Practices />

            {/* 09. L'Officine des Anges (Artisanal Apothecary Stage) */}
            <OfficineChapter />

            {/* 10. Process (Sticky Split Timeline) */}
            <Process />

            {/* 11. Editorial Pause / Breathing Quote */}
            <QuoteBlock
              quote="« Il existe des moments où l’on n’a pas besoin d’aller plus vite. Mais d’écouter autrement. »"
              author="L’Officine des Anges"
              role="Rituel de présence & d'harmonie"
            />

            {/* 12. Testimonials */}
            <Testimonials />

            {/* 13. FAQ */}
            <FAQ />

            {/* 14. First Exchange (Private Invitation Contact Section) */}
            <FirstExchange />
          </div>
        </main>

        {/* 15. Architectural Footer */}
        <Footer />
      </div>
    </MotionProvider>
  );
}
