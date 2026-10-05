import { cn } from "@/lib/utils";

/**
 * Indicação discreta de que há mais conteúdo abaixo (seção 8).
 * Puramente decorativa: nunca deve competir com o conteúdo principal.
 */
export function ScrollCue({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none flex flex-col items-center gap-1 text-brown/50",
        className
      )}
    >
      <span className="text-xs font-medium tracking-wide">role para descobrir</span>
      <span className="animate-float-slow text-lg leading-none">↓</span>
    </div>
  );
}
