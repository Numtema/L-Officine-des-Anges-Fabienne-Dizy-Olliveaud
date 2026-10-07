"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CalendarDays, CheckCircle2, Clock, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const sessionTypes = [
  {
    id: "soin-energetique",
    title: "Soin Énergétique",
    pillar: "RECEVOIR",
    duration: "1h15 à 1h30",
    modality: "Cabinet ou Distance",
    desc: "Harmonisation subtile et recentrage de vitalité.",
  },
  {
    id: "massage-lemniscate",
    title: "Massage Lemniscate",
    pillar: "RALENTIR",
    duration: "1h30",
    modality: "Cabinet exclusivement",
    desc: "Toucher rythmique continu en huit infini (∞).",
  },
  {
    id: "aromatherapie",
    title: "Aromathérapie & Parfum d'Âme",
    pillar: "COMPOSER",
    duration: "1h00 à 1h15",
    modality: "Cabinet ou Envoi après consultation",
    desc: "Accord olfactif sur-mesure en flacon d'ambre.",
  },
  {
    id: "atelier-cercle",
    title: "Atelier & Cercle Botanique",
    pillar: "TRANSMETTRE",
    duration: "Demi-journée (3h)",
    modality: "Cabinet (4 à 6 pers.)",
    desc: "Pratiques rituelles et création végétale partagée.",
  },
];

export default function PrendreRendezVousPage() {
  const [selectedSession, setSelectedSession] = useState(sessionTypes[0].id);
  const [preferredMode, setPreferredMode] = useState<"cabinet" | "distance">("cabinet");
  const [preferredTime, setPreferredTime] = useState<string>("apres-midi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MotionProvider>
      <div className="min-h-screen bg-[#063840] text-[#063840] flex flex-col">
        <Header />

        <main className="flex-grow pt-28 sm:pt-36">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center pb-16 text-[#F7F2E8]">
            <SectionLabel index="01" theme="champagne" className="mb-4">
              Réservation Individuelle
            </SectionLabel>
            <h1 className="font-editorial text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
              PRENDRE <br />
              <span className="italic text-[#C7A363]">RENDEZ-VOUS</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] text-[#F7F2E8]/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Choisissez votre accompagnement. Fabienne vous confirmera personnellement le créneau sous 24h.
            </p>
          </div>

          <div className="bg-[#F7F2E8] rounded-t-[36px] sm:rounded-t-[56px] lg:rounded-t-[64px] border-t border-[rgba(19,40,51,0.08)] py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              {submitted ? (
                <div className="p-12 sm:p-16 rounded-[44px] bg-white border border-[rgba(19,40,51,0.10)] text-center shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-[#064D58]/10 text-[#064D58] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#C7A363]" />
                  </div>
                  <h2 className="font-editorial text-[2.6rem] text-[#063840] mb-3">
                    Demande transmise avec succès
                  </h2>
                  <p className="text-[16px] text-[#6F756F] font-sans font-light max-w-lg mx-auto leading-relaxed">
                    Merci {formData.name || "infiniment"}. Votre demande a bien été enregistrée pour une séance de{" "}
                    <strong>
                      {sessionTypes.find((s) => s.id === selectedSession)?.title}
                    </strong>
                    . Fabienne vous contactera très rapidement par email ou téléphone pour finaliser votre horaire.
                  </p>
                  <div className="mt-10">
                    <PrimaryButton href="/" variant="petrol">
                      Retourner à l'accueil
                    </PrimaryButton>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-14 rounded-[40px] sm:rounded-[52px] bg-[#FCF8F0] border border-[rgba(19,40,51,0.12)] shadow-sm space-y-12"
                >
                  {/* Step 1: Choix de la séance */}
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#C7A363] font-semibold block mb-2">
                      Étape 01
                    </span>
                    <h3 className="font-editorial text-[2rem] text-[#063840] mb-6">
                      Sélectionnez votre pratique
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sessionTypes.map((session) => {
                        const isSelected = selectedSession === session.id;
                        return (
                          <button
                            key={session.id}
                            type="button"
                            onClick={() => setSelectedSession(session.id)}
                            className={cn(
                              "text-left p-5 rounded-[26px] border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363]",
                              isSelected
                                ? "bg-white border-[#C7A363] shadow-md ring-1 ring-[#C7A363]"
                                : "bg-white/50 border-transparent hover:bg-white"
                            )}
                          >
                            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C7A363] font-semibold block">
                              {session.pillar}
                            </span>
                            <span className="font-editorial text-[1.4rem] text-[#063840] block leading-snug mt-1">
                              {session.title}
                            </span>
                            <span className="text-[11px] text-[#7C8061] font-sans block mt-1">
                              {session.duration} · {session.modality}
                            </span>
                            <span className="text-[12px] text-[#6F756F] font-sans font-light block mt-2">
                              {session.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Modalité & Période */}
                  <div className="pt-8 border-t border-[rgba(19,40,51,0.08)]">
                    <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#C7A363] font-semibold block mb-2">
                      Étape 02
                    </span>
                    <h3 className="font-editorial text-[2rem] text-[#063840] mb-6">
                      Modalités & Préférences
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-sans uppercase tracking-[0.16em] text-[#064D58] font-medium mb-2">
                          Lieu de la séance :
                        </label>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setPreferredMode("cabinet")}
                            className={cn(
                              "flex-1 py-3 px-4 rounded-[18px] text-[13px] font-sans transition-colors cursor-pointer border",
                              preferredMode === "cabinet"
                                ? "bg-[#064D58] text-[#F7F2E8] border-[#064D58]"
                                : "bg-white text-[#063840] border-[rgba(19,40,51,0.10)]"
                            )}
                          >
                            Au cabinet (Provence)
                          </button>
                          <button
                            type="button"
                            onClick={() => setPreferredMode("distance")}
                            className={cn(
                              "flex-1 py-3 px-4 rounded-[18px] text-[13px] font-sans transition-colors cursor-pointer border",
                              preferredMode === "distance"
                                ? "bg-[#064D58] text-[#F7F2E8] border-[#064D58]"
                                : "bg-white text-[#063840] border-[rgba(19,40,51,0.10)]"
                            )}
                          >
                            À distance
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-sans uppercase tracking-[0.16em] text-[#064D58] font-medium mb-2">
                          Moment privilégié :
                        </label>
                        <select
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full h-[48px] px-4 rounded-[18px] bg-white border border-[rgba(19,40,51,0.15)] text-[13px] text-[#063840] focus:outline-none focus:ring-2 focus:ring-[#C7A363]"
                        >
                          <option value="matin">Matinée (9h30 - 12h00)</option>
                          <option value="apres-midi">Après-midi (14h00 - 17h00)</option>
                          <option value="fin-journee">Fin de journée (17h00 - 19h00)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Vos coordonnées */}
                  <div className="pt-8 border-t border-[rgba(19,40,51,0.08)]">
                    <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#C7A363] font-semibold block mb-2">
                      Étape 03
                    </span>
                    <h3 className="font-editorial text-[2rem] text-[#063840] mb-6">
                      Vos Coordonnées
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-[12px] font-sans text-[#064D58] mb-1.5 font-medium">
                          Nom & Prénom *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Votre identité"
                          className="w-full h-[52px] px-4 rounded-[18px] bg-white border border-[rgba(19,40,51,0.15)] text-[14px] text-[#063840] focus:outline-none focus:ring-2 focus:ring-[#C7A363]"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-sans text-[#064D58] mb-1.5 font-medium">
                          Adresse Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nom@exemple.fr"
                          className="w-full h-[52px] px-4 rounded-[18px] bg-white border border-[rgba(19,40,51,0.15)] text-[14px] text-[#063840] focus:outline-none focus:ring-2 focus:ring-[#C7A363]"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-[12px] font-sans text-[#064D58] mb-1.5 font-medium">
                        Numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 -- -- -- --"
                        className="w-full h-[52px] px-4 rounded-[18px] bg-white border border-[rgba(19,40,51,0.15)] text-[14px] text-[#063840] focus:outline-none focus:ring-2 focus:ring-[#C7A363]"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-sans text-[#064D58] mb-1.5 font-medium">
                        Précisions pour la séance (facultatif)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Ressentis particuliers, motifs de la visite ou dates idéales..."
                        className="w-full p-4 rounded-[20px] bg-white border border-[rgba(19,40,51,0.15)] text-[14px] text-[#063840] focus:outline-none focus:ring-2 focus:ring-[#C7A363] resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full h-[60px] rounded-full bg-[#064D58] text-[#F7F2E8] font-sans text-[13px] font-medium tracking-[0.18em] uppercase flex items-center justify-center gap-3 hover:bg-[#063840] shadow-md transition-colors cursor-pointer"
                    >
                      <CalendarDays className="w-4 h-4 text-[#C7A363]" />
                      <span>Envoyer ma demande de rendez-vous</span>
                    </button>
                    <p className="mt-3 text-center text-[11px] text-[#6F756F] font-sans">
                      Sans engagement immédiat. Nous confirmons la date définitive ensemble par retour de message.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MotionProvider>
  );
}
