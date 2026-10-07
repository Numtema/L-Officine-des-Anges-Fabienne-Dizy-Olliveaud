"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, CalendarDays, ArrowUpRight } from "lucide-react";
import { siteConfig, mainNavigation, prestationsSubmenu } from "@/config/site";
import { GoldenThread } from "@/components/motion/GoldenThread";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const shouldReduceMotion = useReducedMotion();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation principale"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, clipPath: "inset(0% 0% 100% 0% round 32px)" }
          }
          animate={{
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0% round 0px)",
          }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, clipPath: "inset(0% 0% 100% 0% round 32px)" }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#FCF8F0] text-[#063840] flex flex-col justify-between overflow-y-auto px-6 py-8"
        >
          {/* Subtle botanical shadow fragment & golden curve */}
          <div className="absolute top-12 right-6 w-32 h-32 opacity-20 pointer-events-none" aria-hidden="true">
            <GoldenThread variant="hero" strokeWidth={1.2} opacity={0.6} />
          </div>

          {/* Top Bar */}
          <div className="flex items-center justify-between relative z-10">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/logo-officine.svg"
                  alt="Sceau L'Officine des Anges"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-editorial text-[18px] tracking-wide block leading-none text-[#064D58]">
                  L’Officine des Anges
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#7C8061] mt-1 block">
                  Fabienne Dizy Olliveaud
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="w-11 h-11 rounded-full border border-[rgba(19,40,51,0.15)] flex items-center justify-center text-[#064D58] hover:bg-[#064D58]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Links List */}
          <nav className="my-8 relative z-10">
            <ul className="flex flex-col gap-4">
              {mainNavigation.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-editorial text-[2.2rem] leading-tight text-[#063840] hover:text-[#C7A363] transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7A363]" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Sub-portal links */}
            <div className="mt-8 pt-6 border-t border-[rgba(19,40,51,0.12)]">
              <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-[#7C8061] block mb-3">
                Prestations & Gestes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {prestationsSubmenu.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onClose}
                    className="p-3 rounded-[18px] bg-white/70 border border-[rgba(19,40,51,0.08)] flex flex-col hover:border-[#C7A363]/40 transition-colors"
                  >
                    <span className="text-[10px] tracking-wider uppercase text-[#C7A363] font-medium">
                      {sub.pillar}
                    </span>
                    <span className="font-editorial text-[17px] text-[#063840]">
                      {sub.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Bottom Actions & Practical Info */}
          <div className="pt-6 border-t border-[rgba(19,40,51,0.12)] relative z-10 flex flex-col gap-4">
            <Link
              href="/prendre-rendez-vous"
              onClick={onClose}
              className="w-full h-[54px] rounded-full bg-[#064D58] text-[#F7F2E8] font-sans text-[13px] font-medium tracking-[0.16em] uppercase flex items-center justify-center gap-3 shadow-md active:scale-[0.99] transition-transform"
            >
              <CalendarDays className="w-4 h-4 text-[#C7A363]" />
              <span>Prendre rendez-vous</span>
            </Link>

            <div className="flex items-center justify-between text-[12px] text-[#6F756F] font-sans">
              <span>{siteConfig.address.city}</span>
              <Link
                href="/contact"
                onClick={onClose}
                className="text-[#064D58] font-medium hover:underline"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
