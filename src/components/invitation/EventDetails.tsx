import { eventConfig } from "@/config/event";

/**
 * Bloco de informações essenciais do evento (texto + data + horário).
 * Mantém a tela de convite enxuta, sem excesso de informação.
 */
export function EventDetails() {
  return (
    <div className="mt-4 flex flex-col items-center gap-3 text-center sm:mt-6 sm:gap-4">
      <p className="max-w-xs text-balance text-base text-brown-dark/90 sm:text-lg">
        {eventConfig.invitationMessage}
      </p>

      <div className="flex flex-col items-center gap-1.5 rounded-3xl border border-gold/40 bg-white/50 px-6 py-3 shadow-soft backdrop-blur-sm sm:py-4">
        <p className="text-base font-semibold text-brown">{eventConfig.date}</p>
        <p className="text-sm font-medium text-brown/80">às {eventConfig.time}</p>
      </div>
    </div>
  );
}
