"use client";

import { cn } from "@/lib/utils";
import type { AttendanceStatus } from "@/types/guest";

type AttendanceSelectorProps = {
  value: AttendanceStatus | null;
  onChange: (value: AttendanceStatus) => void;
  error?: string;
};

const options: { value: AttendanceStatus; label: string }[] = [
  { value: "confirmed", label: "Sim, participarei" },
  { value: "declined", label: "Não poderei ir" },
];

/**
 * Seletor de presença em formato de cards, com estado selecionado claro.
 */
export function AttendanceSelector({ value, onChange, error }: AttendanceSelectorProps) {
  return (
    <fieldset className="w-full">
      <legend className="mb-3 text-sm font-semibold text-brown">Você irá?</legend>
      <div
        role="radiogroup"
        aria-invalid={Boolean(error)}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {options.map((option) => {
          const selected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className={cn(
                "rounded-2xl border-2 px-5 py-4 text-left text-base font-semibold transition-all duration-200",
                selected
                  ? "border-green-main bg-green-light text-green-dark shadow-card"
                  : "border-gold/30 bg-white/60 text-brown hover:border-green-main/60"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
