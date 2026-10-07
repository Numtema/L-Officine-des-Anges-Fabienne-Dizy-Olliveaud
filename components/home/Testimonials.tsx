import React from "react";
import Link from "next/link";
import { testimonialsData } from "@/content/testimonials";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Testimonials() {
  const primaryReview = testimonialsData[0];
  const secondaryReviews = testimonialsData.slice(1, 3);

  return (
    <section
      className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto"
      aria-label="Témoignages et retours d'expérience"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <ScrollReveal>
          <SectionLabel index="06" theme="champagne" className="mb-4">
            Paroles d’Accompagnés
          </SectionLabel>

          <h2 className="font-editorial text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.98] text-[#063840] tracking-[-0.03em]">
            CE QUE LE SILENCE <br />
            <span className="italic text-[#064D58]">LAISSE EN EMPREINTE.</span>
          </h2>

          <p className="mt-5 text-[15px] sm:text-[17px] text-[#6F756F] font-sans font-light leading-relaxed">
            Témoignages partagés avec l’accord des personnes accueillies au cabinet de Fabienne Dizy Olliveaud en Provence.
          </p>
        </ScrollReveal>
      </div>

      {/* Asymmetric 61.8% / 38.2% Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LARGE FEATURED TESTIMONIAL (61.8% / col-span-7) */}
        <div className="lg:col-span-7">
          <ScrollReveal>
            <div className="h-full p-8 sm:p-12 lg:p-14 rounded-[36px] sm:rounded-[48px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.10)] shadow-[0_16px_36px_rgba(6,56,64,0.06)] flex flex-col justify-between">
              <div>
                <span className="font-editorial text-[64px] text-[#C7A363]/40 leading-none block -mb-4">
                  “
                </span>
                <blockquote className="font-editorial text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] leading-[1.12] text-[#063840] italic font-normal">
                  {primaryReview.quote}
                </blockquote>
              </div>

              <div className="mt-10 pt-6 border-t border-[rgba(19,40,51,0.08)] flex items-center justify-between">
                <div>
                  <cite className="not-italic font-sans text-[14px] font-semibold tracking-wider text-[#064D58] block">
                    {primaryReview.author}
                  </cite>
                  <span className="text-[12px] text-[#7C8061] font-sans">
                    {primaryReview.detail}
                  </span>
                </div>
                <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#C7A363]">
                  {primaryReview.date}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* STACKED SECONDARY TESTIMONIALS (38.2% / col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {secondaryReviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={0.1 * (i + 1)}>
              <div className="p-7 sm:p-9 rounded-[32px] sm:rounded-[40px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.08)] shadow-[0_12px_28px_rgba(6,56,64,0.04)] flex flex-col justify-between">
                <blockquote className="font-editorial text-[1.4rem] sm:text-[1.6rem] leading-[1.2] text-[#063840] italic">
                  « {review.quote} »
                </blockquote>

                <div className="mt-6 pt-4 border-t border-[rgba(19,40,51,0.06)] flex items-center justify-between">
                  <div>
                    <cite className="not-italic font-sans text-[13px] font-semibold tracking-wider text-[#064D58] block">
                      {review.author}
                    </cite>
                    <span className="text-[11px] text-[#7C8061] font-sans">
                      {review.detail}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#C7A363]">
                    {review.date}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/temoignages"
          className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#064D58] hover:text-[#C7A363] transition-colors font-medium"
        >
          Consulter tous les retours d’expérience →
        </Link>
      </div>
    </section>
  );
}
