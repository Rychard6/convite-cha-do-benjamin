"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Pequeno atalho flutuante para confirmar presença a qualquer momento
 * durante o scroll, sem recriar uma navbar tradicional (seção 19).
 * Some no hero (já tem CTA própria) e no agradecimento (ação concluída).
 */
export function FloatingRsvpButton({ onOpen }: { onOpen: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const thankYou = document.getElementById("thank-you");
    if (!hero || !thankYou) return;

    let heroVisible = true;
    let thankYouVisible = false;

    function update() {
      setVisible(!heroVisible && !thankYouVisible);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "hero") heroVisible = entry.isIntersecting;
          if (entry.target.id === "thank-you") thankYouVisible = entry.isIntersecting;
        });
        update();
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    observer.observe(thankYou);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "fixed bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full bg-green-main px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      Confirmar presença
    </button>
  );
}
