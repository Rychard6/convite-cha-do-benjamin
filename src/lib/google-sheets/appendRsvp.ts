import { google } from "googleapis";
import type { RsvpRequest } from "@/types/rsvp";

/**
 * Autentica com a service account do Google e retorna o client do Sheets.
 * Credenciais vêm exclusivamente de variáveis de ambiente server-side.
 */
function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return { sheets: google.sheets({ version: "v4", auth }), spreadsheetId };
}

/**
 * Registra o RSVP na planilha de acompanhamento dos organizadores.
 * Falha de forma silenciosa (apenas loga) pois o Supabase já é a fonte oficial.
 */
export async function appendRsvpToSheet(
  guestId: string,
  data: RsvpRequest
): Promise<void> {
  try {
    const client = getSheetsClient();
    if (!client) {
      console.warn("Google Sheets não configurado, pulando sincronização.");
      return;
    }

    const { sheets, spreadsheetId } = client;
    const confirmedAt = new Date().toISOString();
    const statusLabel = data.attendanceStatus === "confirmed" ? "Confirmado" : "Não poderá ir";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Convidados!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[guestId, data.name, statusLabel, confirmedAt]],
      },
    });

    if (data.attendanceStatus === "confirmed" && data.companions.length > 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Acompanhantes!A:D",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: data.companions.map((companion) => [
            guestId,
            data.name,
            companion.name,
            confirmedAt,
          ]),
        },
      });
    }
  } catch (error) {
    console.error("Falha ao sincronizar com Google Sheets:", error);
  }
}
