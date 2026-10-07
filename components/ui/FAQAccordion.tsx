"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { FAQItem } from "@/content/faq";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("divide-y divide-[rgba(19,40,51,0.12)] border-y border-[rgba(19,40,51,0.12)]", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const headerId = `faq-header-${index}`;

        return (
          <div key={index} className="py-6 sm:py-8 transition-colors group">
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left gap-6 group-hover:text-[#064D58] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A363] rounded-lg cursor-pointer"
              >
                <span className="font-editorial text-[1.4rem] sm:text-[1.8rem] text-[#063840] leading-snug group-hover:text-[#064D58] transition-colors">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex-shrink-0 w-9 h-9 rounded-full border border-[rgba(19,40,51,0.15)] flex items-center justify-center text-[#064D58] transition-all duration-300",
                    isOpen
                      ? "bg-[#064D58] text-[#F7F2E8] border-[#064D58]"
                      : "group-hover:border-[#C7A363]"
                  )}
                  aria-hidden="true"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  animate={{ opacity: 1, height: "auto" }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0, height: 0 }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 sm:pt-6 pr-12 text-[15px] sm:text-[16px] text-[#6F756F] leading-relaxed font-sans font-light">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
