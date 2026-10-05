"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SectionInfo = {
  id: string;
  label: string;
};

/**
 * Indicador discreto de progresso + atalho de navegação entre as cenas
 * (seções 19 e 20). Some automaticamente se não houver seções visíveis.
 */
export function ScrollProgressNav({ sections }: { sections: SectionInfo[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0.4, 0.6, 0.8] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      aria-label="Navegação do convite"
      className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 sm:right-5 md:flex"
    >
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => goTo(section.id)}
            aria-label={`Ir para ${section.label}`}
            aria-current={active}
            className="group relative flex h-4 w-4 items-center justify-center"
          >
            <span
              className={cn(
                "rounded-full border-2 border-green-main/60 transition-all duration-300",
                active ? "h-2.5 w-2.5 bg-green-main" : "h-1.5 w-1.5 bg-transparent"
              )}
            />
            <span className="pointer-events-none absolute right-5 whitespace-nowrap rounded-full bg-brown-dark/80 px-2.5 py-1 text-xs font-medium text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
