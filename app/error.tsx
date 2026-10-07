"use client";

import React, { useEffect } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#063840] text-[#F7F2E8] flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="font-editorial text-[2.4rem] sm:text-[3rem] text-[#F7F2E8] mb-3">
          Une respiration interrompue
        </h1>
        <p className="text-[15px] text-[#F7F2E8]/75 font-sans font-light mb-8 leading-relaxed">
          Un imprévu technique s’est produit lors du chargement de cet espace.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="h-[54px] px-8 rounded-full bg-[#C7A363] text-[#063840] font-sans text-[13px] font-semibold tracking-wider uppercase hover:bg-[#b89552] transition-colors cursor-pointer"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
