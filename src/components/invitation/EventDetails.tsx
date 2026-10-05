import { eventConfig } from "@/config/event";

/**
 * Bloco de informações essenciais do evento (texto + data + horário).
 * Mantém a tela de convite enxuta, sem excesso de informação.
 */
export function EventDetails() {
  return (
    <div className="mt-6 flex flex-col items-center gap-4 text-center">
      <p className="max-w-xs text-balance text-lg text-brown-dark/90">
        {eventConfig.invitationMessage}
      </p>

      <div className="flex flex-col items-center gap-1.5 rounded-3xl border border-gold/40 bg-white/50 px-6 py-4 shadow-soft backdrop-blur-sm">
        <p className="text-base font-semibold text-brown">{eventConfig.date}</p>
        <p className="text-sm font-medium text-brown/80">às {eventConfig.time}</p>
      </div>
    </div>
  );
}
