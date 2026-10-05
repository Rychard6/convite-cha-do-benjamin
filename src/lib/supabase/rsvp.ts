import type { RsvpRequest } from "@/types/rsvp";
import { getSupabaseServerClient } from "./server";

export type PersistRsvpResult = {
  guestId: string;
};

/**
 * Persiste a confirmação de presença no Supabase (guests + companions).
 * Esta é a fonte oficial de dados do RSVP.
 */
export async function persistRsvp(data: RsvpRequest): Promise<PersistRsvpResult> {
  const supabase = getSupabaseServerClient();

  const { data: existing, error: lookupError } = await supabase
    .from("guests")
    .select("id")
    .eq("request_id", data.requestId)
    .maybeSingle();

  if (lookupError) {
    throw new Error(`Falha ao verificar RSVP existente: ${lookupError.message}`);
  }

  let guestId = existing?.id as string | undefined;

  if (guestId) {
    const { error: updateError } = await supabase
      .from("guests")
      .update({
        name: data.name,
        attendance_status: data.attendanceStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", guestId);

    if (updateError) {
      throw new Error(`Falha ao atualizar convidado: ${updateError.message}`);
    }

    const { error: deleteError } = await supabase
      .from("companions")
      .delete()
      .eq("guest_id", guestId);

    if (deleteError) {
      throw new Error(`Falha ao limpar acompanhantes: ${deleteError.message}`);
    }
  } else {
    const { data: inserted, error: insertError } = await supabase
      .from("guests")
      .insert({
        name: data.name,
        attendance_status: data.attendanceStatus,
        request_id: data.requestId,
      })
      .select("id")
      .single();

    if (insertError || !inserted) {
      throw new Error(`Falha ao registrar convidado: ${insertError?.message}`);
    }

    guestId = inserted.id as string;
  }

  if (data.attendanceStatus === "confirmed" && data.companions.length > 0) {
    const { error: companionsError } = await supabase.from("companions").insert(
      data.companions.map((companion) => ({
        guest_id: guestId,
        name: companion.name,
      }))
    );

    if (companionsError) {
      throw new Error(`Falha ao registrar acompanhantes: ${companionsError.message}`);
    }
  }

  return { guestId: guestId as string };
}
