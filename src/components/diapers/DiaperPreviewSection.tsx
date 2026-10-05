import { ScreenShell } from "@/components/ui/ScreenShell";
import { FloatingDecorations } from "@/components/ui/FloatingDecorations";
import { Illustration } from "@/components/ui/Illustration";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type DiaperPreviewSectionProps = {
  onOpenDiapers: () => void;
};

/** Cena de introdução às fraldas; o catálogo completo abre em overlay (seção 13). */
export function DiaperPreviewSection({ onOpenDiapers }: DiaperPreviewSectionProps) {
  return (
    <ScreenShell id="diapers">
      <FloatingDecorations
        items={[
          { src: "decoration/leaf.png", alt: "", className: "left-6 top-8 h-16 w-16", animation: "animate-sway" },
          { src: "decoration/heart.png", alt: "", className: "right-6 top-10 h-6 w-6", animation: "animate-twinkle" },
        ]}
      />

      <Reveal className="flex w-full flex-col items-center">
        <div className="relative h-24 w-24">
          <Illustration
            src="characters/teddy-sitting.png"
            alt="Ursinho sentado"
            className="h-full w-full animate-float-slow"
            sizes="140px"
          />
        </div>

        <h2 className="mt-4 text-center font-script text-4xl font-semibold text-green-dark">
          Sugestões de Fraldas
        </h2>
        <p className="mt-2 max-w-xs text-balance text-center text-brown-dark/80">
          Se quiser nos ajudar com a chegada do Benjamin, separamos algumas sugestões.
        </p>

        <Button variant="secondary" className="mt-6" onClick={onOpenDiapers}>
          Ver sugestões
        </Button>
      </Reveal>
    </ScreenShell>
  );
}
