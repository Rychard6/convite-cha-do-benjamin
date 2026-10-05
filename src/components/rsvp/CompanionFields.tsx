"use client";

import { eventConfig } from "@/config/event";

export type CompanionValue = {
  localId: string;
  name: string;
};

type CompanionFieldsProps = {
  companions: CompanionValue[];
  onAdd: () => void;
  onRemove: (localId: string) => void;
  onChange: (localId: string, name: string) => void;
  error?: string;
};

/**
 * Lista dinâmica de acompanhantes com nome completo (não apenas quantidade),
 * conforme exigido para que os organizadores saibam quem vai com cada convidado.
 */
export function CompanionFields({
  companions,
  onAdd,
  onRemove,
  onChange,
  error,
}: CompanionFieldsProps) {
  const canAddMore = companions.length < eventConfig.maxCompanions;

  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold text-brown">Acompanhantes</h3>
      <p className="mt-1 text-sm text-brown/70">Informe quem irá com você.</p>

      <div className="mt-3 flex flex-col gap-3">
        {companions.map((companion, index) => (
          <div key={companion.localId} className="flex flex-col gap-1.5">
            <label
              htmlFor={`companion-${companion.localId}`}
              className="text-xs font-semibold text-brown/80"
            >
              Acompanhante {index + 1}
            </label>
            <div className="flex items-center gap-2">
              <input
                id={`companion-${companion.localId}`}
                type="text"
                value={companion.name}
                onChange={(e) => onChange(companion.localId, e.target.value)}
                placeholder="Nome completo"
                className="w-full rounded-2xl border-2 border-gold/30 bg-white/70 px-4 py-3 text-base text-brown-dark placeholder:text-brown/40 focus:border-green-main"
              />
              <button
                type="button"
                onClick={() => onRemove(companion.localId)}
                aria-label={`Remover acompanhante ${index + 1}`}
                className="shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-brown/70 hover:text-red-600"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {canAddMore && (
        <button
          type="button"
          onClick={onAdd}
          className="mt-3 rounded-full border-2 border-dashed border-green-main/50 px-4 py-2.5 text-sm font-semibold text-green-dark hover:bg-green-light"
        >
          + Adicionar acompanhante
        </button>
      )}
    </div>
  );
}
