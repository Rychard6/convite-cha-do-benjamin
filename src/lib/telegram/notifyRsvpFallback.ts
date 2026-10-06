import type { RsvpRequest } from "@/types/rsvp";

export async function notifyRsvpFallback(data: RsvpRequest): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("Telegram não configurado, pulando alerta de contingência.");
    return false;
  }

  const status =
    data.attendanceStatus === "confirmed" ? "Confirmado" : "Não poderá ir";
  const companions =
    data.companions.length > 0
      ? data.companions.map(({ name }) => `- ${name}`).join("\n")
      : "Nenhum";
  const message = [
    "ALERTA DE CONTINGÊNCIA: falha ao salvar RSVP no Supabase.",
    `Nome: ${data.name}`,
    `Resposta: ${status}`,
    "Acompanhantes:",
    companions,
    `ID da requisição: ${data.requestId}`,
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
        signal: AbortSignal.timeout(10_000),
      }
    );

    if (!response.ok) {
      console.error(
        `Falha ao enviar alerta de RSVP ao Telegram (HTTP ${response.status}).`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Falha ao enviar alerta de RSVP ao Telegram:",
      error instanceof Error ? error.name : "Erro desconhecido"
    );
    return false;
  }
}
