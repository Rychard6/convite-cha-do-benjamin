"use client";

import { useMemo, useState } from "react";
import { AttendanceSelector } from "./AttendanceSelector";
import { CompanionFields, type CompanionValue } from "./CompanionFields";
import { Button } from "@/components/ui/Button";
import type { AttendanceStatus } from "@/types/guest";
import type { RsvpResponse } from "@/types/rsvp";

type RsvpFormProps = {
  onSuccess: () => void;
};

function createCompanion(): CompanionValue {
  return { localId: crypto.randomUUID(), name: "" };
}

export function RsvpForm({ onSuccess }: RsvpFormProps) {
  const requestId = useMemo(() => crypto.randomUUID(), []);

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<AttendanceStatus | null>(null);
  const [companions, setCompanions] = useState<CompanionValue[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    attendanceStatus?: string;
    companions?: string;
    general?: string;
  }>({});

  function handleAttendanceChange(value: AttendanceStatus) {
    setAttendance(value);
    if (value === "declined") {
      setCompanions([]);
    }
  }

  function handleAddCompanion() {
    setCompanions((prev) => [...prev, createCompanion()]);
  }

  function handleRemoveCompanion(localId: string) {
    setCompanions((prev) => prev.filter((c) => c.localId !== localId));
  }

  function handleCompanionChange(localId: string, value: string) {
    setCompanions((prev) =>
      prev.map((c) => (c.localId === localId ? { ...c, name: value } : c))
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting || submitted) return;

    const trimmedName = name.trim();
    const nextErrors: typeof errors = {};

    if (!trimmedName) {
      nextErrors.name = "Informe seu nome completo.";
    }
    if (!attendance) {
      nextErrors.attendanceStatus = "Selecione se você irá ou não.";
    }
    if (attendance === "confirmed" && companions.some((c) => !c.name.trim())) {
      nextErrors.companions = "O nome do acompanhante não pode ficar vazio.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          attendanceStatus: attendance,
          companions:
            attendance === "confirmed"
              ? companions.map((c) => ({ name: c.name.trim() }))
              : [],
          requestId,
        }),
      });

      const result: RsvpResponse = await response.json();

      if (!result.success) {
        setErrors({
          name: result.fieldErrors?.name,
          attendanceStatus: result.fieldErrors?.attendanceStatus,
          companions: result.fieldErrors?.companions,
          general: result.fieldErrors ? undefined : result.error,
        });
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      onSuccess();
    } catch {
      setErrors({ general: "Falha de conexão. Tente novamente." });
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="guest-name" className="text-sm font-semibold text-brown">
          Nome completo
        </label>
        <input
          id="guest-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          className="w-full rounded-2xl border-2 border-gold/30 bg-white/70 px-4 py-3.5 text-base text-brown-dark placeholder:text-brown/40 focus:border-green-main"
        />
        {errors.name && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <AttendanceSelector
        value={attendance}
        onChange={handleAttendanceChange}
        error={errors.attendanceStatus}
      />

      {attendance === "confirmed" && (
        <CompanionFields
          companions={companions}
          onAdd={handleAddCompanion}
          onRemove={handleRemoveCompanion}
          onChange={handleCompanionChange}
          error={errors.companions}
        />
      )}

      {errors.general && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errors.general}
        </p>
      )}

      <Button type="submit" variant="primary" fullWidth disabled={submitting || submitted}>
        {submitting ? "Registrando sua presença..." : "Confirmar presença"}
      </Button>
    </form>
  );
}
