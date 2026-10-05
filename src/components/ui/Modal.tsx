"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy: string;
  className?: string;
};

/**
 * Overlay genérico para experiências focadas em uma tarefa (RSVP, fraldas).
 * Bloqueia o scroll do body, fecha com Escape/clique no backdrop e devolve
 * o foco ao botão de fechar ao abrir.
 */
export function Modal({ open, onClose, children, labelledBy, className }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 bg-brown-dark/40 backdrop-blur-sm animate-fade-in"
      />

      <div
        className={cn(
          "relative z-10 max-h-[92svh] w-full max-w-lg animate-fade-in-scale overflow-y-auto rounded-t-4xl bg-cream p-6 shadow-soft sm:rounded-4xl sm:p-8",
          className
        )}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-lg font-semibold text-brown hover:bg-white"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
