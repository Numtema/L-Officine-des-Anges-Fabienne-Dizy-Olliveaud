"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CalendarDays, Menu, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig, prestationsSubmenu } from "@/config/site";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrestationsOpen, setIsPrestationsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const popoverRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header transformation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close prestations dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPrestationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsPrestationsOpen(false);
  }

  const isPrestationsActive =
    pathname === "/prestations" ||
    pathname === "/soins-energetiques" ||
    pathname === "/massage-lemniscate" ||
    pathname === "/aromatherapie" ||
    pathname === "/ateliers-formations";

  return (
    <>
      {/* DESKTOP FLOATING THREE-ZONE HEADER */}
      <header className="hidden lg:block fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-40 w-[min(calc(100%-48px),1240px)] pointer-events-auto">
        <motion.div
          animate={{
            height: isScrolled ? 58 : 66,
            backgroundColor: isScrolled
              ? "rgba(252, 248, 240, 0.88)"
              : "rgba(252, 248, 240, 0.45)",
            backdropFilter: isScrolled ? "blur(18px)" : "blur(8px)",
            borderColor: isScrolled
              ? "rgba(19, 40, 51, 0.12)"
              : "rgba(255, 255, 255, 0.45)",
            boxShadow: isScrolled
              ? "0 14px 38px rgba(6, 56, 64, 0.08)"
              : "0 6px 20px rgba(6, 56, 64, 0.03)",
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
          }
          className="relative rounded-full border px-7 flex items-center justify-between"
        >
          {/* ZONE 1 (LEFT NAVIGATION) */}
          <nav className="flex items-center gap-7 flex-1" aria-label="Navigation gauche">
            <Link
              href="/"
              className={cn(
                "relative py-1 font-sans text-[12px] uppercase font-medium tracking-[0.18em] transition-colors",
                pathname === "/" ? "text-[#063840]" : "text-[#064D58]/85 hover:text-[#063840]"
              )}
            >
              Accueil
              {pathname === "/" && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A363]"
                />
              )}
            </Link>

            {/* PRESTATIONS WITH EDITORIAL POPOVER */}
            <div
              className="relative"
              ref={popoverRef}
              onMouseEnter={() => setIsPrestationsOpen(true)}
              onMouseLeave={() => setIsPrestationsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsPrestationsOpen(!isPrestationsOpen)}
                aria-expanded={isPrestationsOpen}
                aria-haspopup="true"
                className={cn(
                  "relative py-1 font-sans text-[12px] uppercase font-medium tracking-[0.18em] flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C7A363]",
                  isPrestationsActive
                    ? "text-[#063840]"
                    : "text-[#064D58]/85 hover:text-[#063840]"
                )}
              >
                <span>Prestations</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-250",
                    isPrestationsOpen && "rotate-180"
                  )}
                />
                {isPrestationsActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A363]"
                  />
                )}
              </button>

              {/* EDITORIAL POPOVER (38-42px radius, 480px width) */}
              <AnimatePresence>
                {isPrestationsOpen && (
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 12, scale: 0.98 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 8, scale: 0.98 }
                    }
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-3 w-[480px] p-6 bg-[#FCF8F0]/95 backdrop-blur-2xl rounded-[38px] border border-[rgba(19,40,51,0.12)] shadow-[0_24px_54px_rgba(6,56,64,0.14)] z-50 text-[#063840]"
                  >
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[rgba(19,40,51,0.08)]">
                      <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#7C8061] font-medium">
                        Les Espaces de Pratique
                      </span>
                      <Link
                        href="/prestations"
                        className="font-sans text-[11px] text-[#064D58] hover:text-[#C7A363] hover:underline"
                      >
                        Voir la synthèse →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {prestationsSubmenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group p-3.5 rounded-[22px] bg-white/60 hover:bg-white border border-transparent hover:border-[#C7A363]/40 transition-all shadow-xs"
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#C7A363] font-semibold">
                              {item.pillar}
                            </span>
                          </div>
                          <h4 className="font-editorial text-[17px] leading-snug text-[#063840] group-hover:text-[#064D58] transition-colors">
                            {item.title}
                          </h4>
                          <p className="font-sans text-[11px] text-[#6F756F] line-clamp-2 mt-1 leading-normal font-light">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/creations"
              className={cn(
                "relative py-1 font-sans text-[12px] uppercase font-medium tracking-[0.18em] transition-colors",
                pathname === "/creations" ? "text-[#063840]" : "text-[#064D58]/85 hover:text-[#063840]"
              )}
            >
              L’Officine
              {pathname === "/creations" && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A363]"
                />
              )}
            </Link>

            <Link
              href="/fabienne"
              className={cn(
                "relative py-1 font-sans text-[12px] uppercase font-medium tracking-[0.18em] transition-colors",
                pathname === "/fabienne" ? "text-[#063840]" : "text-[#064D58]/85 hover:text-[#063840]"
              )}
            >
              Fabienne
              {pathname === "/fabienne" && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A363]"
                />
              )}
            </Link>
          </nav>

          {/* ZONE 2 (CENTER EMBLEM / OVERHANGING SEAL) */}
          <div className="relative flex items-center justify-center -my-4 px-4 z-20">
            <Link
              href="/"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363] rounded-full"
              aria-label="Retour à l'accueil L'Officine des Anges"
            >
              <motion.div
                animate={{
                  width: isScrolled ? 72 : 88,
                  height: isScrolled ? 72 : 88,
                  scale: isScrolled ? 0.95 : 1,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                }
                className="relative rounded-full p-1 bg-[#FCF8F0] shadow-[0_8px_24px_rgba(6,56,64,0.12)] border border-[rgba(19,40,51,0.08)] transition-transform group-hover:scale-105"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/logo-officine.svg"
                    alt="Emblème L'Officine des Anges"
                    fill
                    className="object-contain"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* ZONE 3 (RIGHT NAVIGATION + BOOKING CTA PILL) */}
          <div className="flex items-center justify-end gap-6 flex-1" aria-label="Navigation droite">
            <Link
              href="/temoignages"
              className={cn(
                "relative py-1 font-sans text-[12px] uppercase font-medium tracking-[0.18em] transition-colors",
                pathname === "/temoignages" ? "text-[#063840]" : "text-[#064D58]/85 hover:text-[#063840]"
              )}
            >
              Témoignages
              {pathname === "/temoignages" && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A363]"
                />
              )}
            </Link>

            <Link
              href="/contact"
              className={cn(
                "relative py-1 font-sans text-[12px] uppercase font-medium tracking-[0.18em] transition-colors",
                pathname === "/contact" ? "text-[#063840]" : "text-[#064D58]/85 hover:text-[#063840]"
              )}
            >
              Contact
              {pathname === "/contact" && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A363]"
                />
              )}
            </Link>

            {/* PRENDRE RENDEZ-VOUS CTA */}
            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center gap-2 h-[42px] px-5 rounded-full bg-[#064D58] hover:bg-[#063840] text-[#F7F2E8] font-sans text-[11px] font-medium tracking-[0.16em] uppercase shadow-sm hover:shadow transition-all duration-300 select-none group"
            >
              <CalendarDays className="w-3.5 h-3.5 text-[#C7A363] group-hover:scale-110 transition-transform" />
              <span>Prendre RDV</span>
            </Link>
          </div>
        </motion.div>
      </header>

      {/* MOBILE TOP CAPSULE BAR */}
      <header className="lg:hidden fixed top-2 left-2 right-2 z-40 bg-[#FCF8F0]/92 backdrop-blur-md rounded-[26px] border border-[rgba(19,40,51,0.08)] px-4 py-2.5 shadow-[0_8px_24px_rgba(6,56,64,0.06)] flex items-center justify-between">
        {/* Left Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="w-10 h-10 rounded-full border border-[rgba(19,40,51,0.12)] flex items-center justify-center text-[#064D58] hover:bg-[#064D58]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363]"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center Logo Seal */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="L'Officine des Anges"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/assets/logo-officine.svg"
              alt="L'Officine des Anges"
              fill
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-editorial text-[18px] text-[#064D58] leading-none">
            L’Officine
          </span>
        </Link>

        {/* Right Quick Booking Pill */}
        <Link
          href="/prendre-rendez-vous"
          className="h-9 px-3.5 rounded-full bg-[#064D58] text-[#F7F2E8] text-[10px] font-medium tracking-[0.14em] uppercase flex items-center gap-1.5 shadow-xs"
        >
          <CalendarDays className="w-3.5 h-3.5 text-[#C7A363]" />
          <span>RDV</span>
        </Link>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
