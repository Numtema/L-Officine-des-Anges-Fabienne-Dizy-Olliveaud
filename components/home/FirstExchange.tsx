"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Send, CheckCircle2, Clock, MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cn } from "@/lib/utils";

const practiceOptions = [
  "Soins énergétiques",
  "Massage Lemniscate",
  "Aromathérapie & Parfums d’Âme",
  "Création personnalisée",
  "Atelier & Cercles",
  "Autre demande",
];

export function FirstExchange() {
  const [selectedPractice, setSelectedPractice] = useState("Soins énergétiques");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus("error");
      setFeedbackMessage("Veuillez renseigner votre nom et votre adresse email.");
      return;
    }

    setStatus("submitting");

    // Realistic API submission handler simulation
    setTimeout(() => {
      setStatus("success");
      setFeedbackMessage(
        "Votre demande d'échange a bien été transmise. Fabienne vous répondra personnellement sous 24 à 48 heures."
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <section
      className="p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto my-16 sm:my-24"
      aria-label="Prendre contact avec Fabienne"
    >
      <div className="rounded-[36px] sm:rounded-[56px] lg:rounded-[72px] bg-[#063840] text-[#F7F2E8] p-8 sm:p-14 lg:p-20 shadow-[0_30px_70px_rgba(6,56,64,0.30)] border border-[#C7A363]/25 relative overflow-hidden">
        {/* Subtle Decorative Golden Glow Accent */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-radial from-[#C7A363]/15 to-transparent blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* LEFT COLUMN: 38.2% PRIVATE INVITATION & DETAILS */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionLabel index="08" theme="champagne" className="mb-4">
                Invitation Privée
              </SectionLabel>

              <h2 className="font-editorial text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.98] text-[#F7F2E8] tracking-[-0.03em]">
                UN PREMIER <br />
                <span className="italic text-[#C7A363]">ÉCHANGE.</span>
              </h2>

              <p className="mt-6 text-[15px] sm:text-[16px] text-[#F7F2E8]/75 font-sans font-light leading-relaxed">
                Chaque relation commence par un mot déposé. Que ce soit pour une séance au cabinet en Provence, un accompagnement à distance ou une composition d’essence sur-mesure, vos messages sont reçus avec discrétion et bienveillance.
              </p>

              {/* Practical Verified Coordinates */}
              <div className="mt-10 space-y-4 pt-8 border-t border-white/10 text-[13px] sm:text-[14px] font-sans">
                <div className="flex items-start gap-3 text-[#F7F2E8]/85">
                  <MapPin className="w-4 h-4 text-[#C7A363] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">{siteConfig.address.city}</span>
                    <span className="text-[12px] text-[#F7F2E8]/60 font-light">
                      {siteConfig.address.note}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#F7F2E8]/85">
                  <Clock className="w-4 h-4 text-[#C7A363] flex-shrink-0" />
                  <span className="font-light">{siteConfig.consultations.hours}</span>
                </div>

                <div className="flex items-center gap-3 text-[#F7F2E8]/85">
                  <Mail className="w-4 h-4 text-[#C7A363] flex-shrink-0" />
                  <span className="font-light">{siteConfig.email}</span>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-[24px] bg-white/5 border border-white/10">
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C7A363] block mb-1">
                Cadre Déontologique
              </span>
              <p className="text-[12px] text-[#F7F2E8]/60 font-light leading-relaxed">
                Les séances se déroulent dans un respect total de votre sensibilité et de votre intégrité. Aucun protocole n’est imposé.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 61.8% REFINED CONTACT FORM */}
          <div className="lg:col-span-7 bg-[#FCF8F0]/5 backdrop-blur-xl p-6 sm:p-10 rounded-[32px] sm:rounded-[44px] border border-white/10">
            {status === "success" ? (
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#C7A363]/20 flex items-center justify-center text-[#C7A363] mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-[2.2rem] text-[#F7F2E8] mb-3">
                  Message bien reçu
                </h3>
                <p className="text-[#F7F2E8]/80 text-[15px] font-sans font-light max-w-md leading-relaxed">
                  {feedbackMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-6 py-2.5 rounded-full border border-[#C7A363]/40 text-[#C7A363] text-[12px] uppercase font-sans tracking-[0.18em] hover:bg-[#C7A363]/10 transition-colors"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Practice Selection Pills */}
                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#C7A363] font-medium mb-3">
                    Votre demande concerne :
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {practiceOptions.map((opt) => {
                      const isSelected = selectedPractice === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedPractice(opt)}
                          className={cn(
                            "px-4 py-2 rounded-full text-[12px] font-sans transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363]",
                            isSelected
                              ? "bg-[#C7A363] text-[#063840] font-medium shadow-xs"
                              : "bg-white/10 text-[#F7F2E8]/85 hover:bg-white/15 border border-white/5"
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Identity Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-sans text-[11px] uppercase tracking-[0.18em] text-[#F7F2E8]/70 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom et prénom"
                      className="w-full h-[54px] px-5 rounded-[22px] bg-white/10 border border-white/15 text-[#F7F2E8] placeholder-[#F7F2E8]/35 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#C7A363] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-sans text-[11px] uppercase tracking-[0.18em] text-[#F7F2E8]/70 mb-2"
                    >
                      Adresse email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@exemple.fr"
                      className="w-full h-[54px] px-5 rounded-[22px] bg-white/10 border border-white/15 text-[#F7F2E8] placeholder-[#F7F2E8]/35 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#C7A363] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block font-sans text-[11px] uppercase tracking-[0.18em] text-[#F7F2E8]/70 mb-2"
                  >
                    Téléphone (facultatif)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 -- -- -- --"
                    className="w-full h-[54px] px-5 rounded-[22px] bg-white/10 border border-white/15 text-[#F7F2E8] placeholder-[#F7F2E8]/35 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#C7A363] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-sans text-[11px] uppercase tracking-[0.18em] text-[#F7F2E8]/70 mb-2"
                  >
                    Votre message ou vos disponibilités
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Partagez vos besoins, vos questions ou le rythme souhaité..."
                    className="w-full p-5 rounded-[24px] bg-white/10 border border-white/15 text-[#F7F2E8] placeholder-[#F7F2E8]/35 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#C7A363] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[#FFB4A2] text-[13px] font-sans">{feedbackMessage}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-[56px] rounded-full bg-[#C7A363] text-[#063840] font-sans text-[13px] font-semibold tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:bg-[#b89552] transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#063840]" />
                    <span>
                      {status === "submitting" ? "Transmission en cours..." : "Transmettre ma demande"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
