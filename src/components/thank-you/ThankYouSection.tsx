"use client";

import { ScreenShell } from "@/components/ui/ScreenShell";
import { FloatingDecorations } from "@/components/ui/FloatingDecorations";
import { Illustration } from "@/components/ui/Illustration";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { eventConfig } from "@/config/event";

function scrollToTop() {
  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Última cena: encerramento emocional da experiência (seção 31). */
export function ThankYouSection() {
  return (
    <ScreenShell id="thank-you">
      <FloatingDecorations
        items={[
          { src: "decoration/star.png", alt: "", className: "left-6 top-10 h-7 w-7", animation: "animate-twinkle" },
          { src: "decoration/star-small.png", alt: "", className: "right-10 top-16 h-5 w-5", animation: "animate-twinkle" },
          { src: "decoration/sparkles.png", alt: "", className: "right-6 bottom-28 h-10 w-10", animation: "animate-twinkle" },
          { src: "decoration/cloud-01.png", alt: "", className: "left-[-10%] bottom-16 h-16 w-28", animation: "animate-drift-slow" },
        ]}
      />

      <Reveal className="flex w-full flex-col items-center">
        <div className="relative h-48 w-48 sm:h-56 sm:w-56">
          <Illustration
            src="characters/teddy-moon.png"
            alt="Ursinho dormindo tranquilamente sobre a lua"
            className="h-full w-full animate-float-slow"
            sizes="260px"
          />
        </div>

        <h2 className="mt-4 text-center font-script text-5xl font-semibold text-green-dark">
          Obrigado!
        </h2>

        <p className="mt-3 max-w-xs text-center text-lg font-medium text-brown-dark/90">
          {eventConfig.thankYouMessage}
        </p>

        <p className="mt-2 max-w-xs text-balance text-center text-brown-dark/70">
          {eventConfig.thankYouSubMessage}
        </p>

        <Button variant="secondary" className="mt-8" onClick={scrollToTop}>
          Voltar para o início
        </Button>
      </Reveal>
    </ScreenShell>
  );
}

