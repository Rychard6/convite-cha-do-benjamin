import { ScreenShell } from "@/components/ui/ScreenShell";
import { FloatingDecorations } from "@/components/ui/FloatingDecorations";
import { Illustration } from "@/components/ui/Illustration";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { eventConfig } from "@/config/event";

export function LocationSection() {
  return (
    <ScreenShell id="location">
      <FloatingDecorations
        items={[
          { src: "objects/balloon.png", alt: "", className: "left-1/2 top-[-6rem] h-24 w-24 -translate-x-1/2", animation: "animate-float" },
          { src: "decoration/cloud-02.png", alt: "", className: "left-[-8%] top-24 h-14 w-24", animation: "animate-drift-slow" },
          { src: "decoration/star-small.png", alt: "", className: "left-10 bottom-24 h-5 w-5", animation: "animate-twinkle" },
        ]}
      />

      <Reveal className="flex w-full flex-col items-center">
        <h2 className="mt-3 text-center font-script text-4xl font-semibold text-green-dark">
          Como chegar
        </h2>
        <p className="mt-2 max-w-xs text-center text-brown-dark/80">
          Clique no botão abaixo para abrir o Google Maps com a localização do evento.
        </p>

        <div className="relative mt-6 flex w-full flex-col items-center gap-3 rounded-4xl border border-gold/30 bg-white/60 p-6 shadow-soft">
          <div className="relative h-32 w-full overflow-hidden rounded-3xl bg-green-light">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-10 w-10">
                <Illustration
                  src="objects/moon.png"
                  alt=""
                  className="h-full w-full"
                  sizes="60px"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-sm font-medium text-brown-dark/90">
            {eventConfig.address}
          </p>

          <div className="mt-2 flex w-full flex-col gap-2.5">
            <ButtonLink
              href={eventConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              fullWidth
            >
              Abrir no Google Maps
            </ButtonLink>
            <ButtonLink
              href={eventConfig.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              fullWidth
            >
              Ver rotas no Waze
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </ScreenShell>
  );
}
