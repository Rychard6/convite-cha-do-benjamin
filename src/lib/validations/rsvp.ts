import type { RsvpRequest } from "@/types/rsvp";
import type { AttendanceStatus } from "@/types/guest";
import { eventConfig } from "@/config/event";

export type ValidationResult =
  | { valid: true; data: RsvpRequest }
  | {
      valid: false;
      fieldErrors: Partial<Record<"name" | "attendanceStatus" | "companions", string>>;
    };

function sanitizeName(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.trim().replace(/\s+/g, " ");
}

/**
 * Valida o payload de RSVP recebido pela Route Handler.
 * Mantida sem dependências externas por ser uma validação simples.
 */
export function validateRsvpPayload(body: unknown): ValidationResult {
  const fieldErrors: Partial<Record<"name" | "attendanceStatus" | "companions", string>> = {};

  const payload = (body ?? {}) as Partial<{
    name: unknown;
    attendanceStatus: unknown;
    companions: unknown;
    requestId: unknown;
  }>;

  const name = sanitizeName(payload.name);
  if (!name) {
    fieldErrors.name = "Informe seu nome completo.";
  } else if (name.length < 2) {
    fieldErrors.name = "Nome muito curto.";
  } else if (name.length > 120) {
    fieldErrors.name = "Nome muito longo.";
  }

  const attendanceStatus: AttendanceStatus | undefined =
    payload.attendanceStatus === "confirmed" || payload.attendanceStatus === "declined"
      ? payload.attendanceStatus
      : undefined;
  if (!attendanceStatus) {
    fieldErrors.attendanceStatus = "Selecione se você irá ou não.";
  }

  let companions: { name: string }[] = [];
  if (attendanceStatus === "confirmed") {
    const rawCompanions = Array.isArray(payload.companions) ? payload.companions : [];

    if (rawCompanions.length > eventConfig.maxCompanions) {
      fieldErrors.companions = `No máximo ${eventConfig.maxCompanions} acompanhantes.`;
    } else {
      const cleaned = rawCompanions
        .map((c) => sanitizeName((c as { name?: unknown })?.name))
        .filter((n) => n.length > 0);

      const hasEmptyEntry = rawCompanions.some(
        (c) => sanitizeName((c as { name?: unknown })?.name).length === 0
      );

      if (hasEmptyEntry) {
        fieldErrors.companions = "O nome do acompanhante não pode ficar vazio.";
      } else {
        companions = cleaned.map((n) => ({ name: n }));
      }
    }
  }

  const requestId =
    typeof payload.requestId === "string" && payload.requestId.length > 0
      ? payload.requestId
      : undefined;

  if (!requestId) {
    fieldErrors.name = fieldErrors.name ?? "Requisição inválida.";
  }

  if (Object.keys(fieldErrors).length > 0 || !requestId || !attendanceStatus) {
    return { valid: false, fieldErrors };
  }

  return {
    valid: true,
    data: {
      name,
      attendanceStatus,
      companions,
      requestId,
    },
  };
}
