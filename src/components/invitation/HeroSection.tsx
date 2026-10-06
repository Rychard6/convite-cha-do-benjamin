import { InvitationHero } from "./InvitationHero";
import { EventDetails } from "./EventDetails";
import { Button } from "@/components/ui/Button";
import { ScreenShell } from "@/components/ui/ScreenShell";
import { FloatingDecorations } from "@/components/ui/FloatingDecorations";
import { ScrollCue } from "@/components/ui/ScrollCue";

type HeroSectionProps = {
  onOpenRsvp: () => void;
};

/** Primeira cena: a mais impactante visualmente, abre a experiência (seção 7). */
export function HeroSection({ onOpenRsvp }: HeroSectionProps) {
  return (
    <ScreenShell id="hero" className="py-5 sm:py-16">
      <FloatingDecorations
        items={[
          { src: "decoration/cloud-01.png", alt: "", className: "left-[-10%] top-10 h-20 w-32", animation: "animate-drift" },
          { src: "decoration/cloud-02.png", alt: "", className: "right-[-8%] top-28 h-16 w-28", animation: "animate-drift-slow" },
          { src: "decoration/star.png", alt: "", className: "right-6 top-6 h-8 w-8", animation: "animate-twinkle" },
          { src: "decoration/star-small.png", alt: "", className: "left-8 top-20 h-5 w-5", animation: "animate-twinkle" },
          { src: "decoration/sparkles.png", alt: "", className: "left-4 bottom-32 h-10 w-10", animation: "animate-twinkle" },
          { src: "decoration/cloud-small.png", alt: "", className: "right-4 bottom-24 h-12 w-16", animation: "animate-float-slow" },
        ]}
      />

      <InvitationHero />
      <EventDetails />

      <div className="mt-5 flex w-full flex-col items-center gap-3 sm:mt-10">
        <Button variant="primary" fullWidth className="max-w-xs" onClick={onOpenRsvp}>
          Confirmar presença
        </Button>
      </div>

      <ScrollCue className="mt-3 sm:mt-6" />
    </ScreenShell>
  );
}
