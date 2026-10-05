import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Contêiner base de cada "cena" do convite (hero, localização, fraldas,
 * agradecimento). Cada cena ocupa ~1 viewport e se encaixa via scroll-snap
 * (ver globals.css), criando uma experiência vertical contínua.
 */
export function ScreenShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[100svh] w-full snap-start flex-col items-center justify-center overflow-hidden bg-cream px-6 py-16 sm:px-10",
        className
      )}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center sm:max-w-lg md:max-w-xl">
        {children}
      </div>
    </section>
  );
}

