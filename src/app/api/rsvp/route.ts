import { NextRequest, NextResponse } from "next/server";
import { validateRsvpPayload } from "@/lib/validations/rsvp";
import { persistRsvp } from "@/lib/supabase/rsvp";
import { appendRsvpToSheet } from "@/lib/google-sheets/appendRsvp";
import type { RsvpResponse } from "@/types/rsvp";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<RsvpResponse>(
      { success: false, error: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  const validation = validateRsvpPayload(body);

  if (!validation.valid) {
    return NextResponse.json<RsvpResponse>(
      {
        success: false,
        error: "Verifique os campos destacados.",
        fieldErrors: validation.fieldErrors,
      },
      { status: 422 }
    );
  }

  try {
    const { guestId } = await persistRsvp(validation.data);

    // Google Sheets é apenas acompanhamento; falhas aqui não devem derrubar o RSVP.
    void appendRsvpToSheet(guestId, validation.data);

    return NextResponse.json<RsvpResponse>({ success: true, guestId });
  } catch (error) {
    console.error("Erro ao processar RSVP:", error);
    return NextResponse.json<RsvpResponse>(
      {
        success: false,
        error: "Não foi possível registrar sua presença agora. Tente novamente em instantes.",
      },
      { status: 500 }
    );
  }
}
