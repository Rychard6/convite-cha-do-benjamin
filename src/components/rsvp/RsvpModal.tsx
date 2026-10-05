"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Illustration } from "@/components/ui/Illustration";
import { Button } from "@/components/ui/Button";
import { RsvpForm } from "./RsvpForm";

type RsvpModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Confirmar presença é uma ação, por isso abre uma experiência dedicada
 * (overlay) em vez de ocupar uma cena inteira do scroll principal (seção 9).
 */
export function RsvpModal({ open, onClose }: RsvpModalProps) {
  const [success, setSuccess] = useState(false);

  function handleClose() {
    onClose();
    // aguarda a animação de saída antes de limpar o estado de sucesso
    setTimeout(() => setSuccess(false), 300);
  }

  return (
    <Modal open={open} onClose={handleClose} labelledBy="rsvp-modal-title">
      {success ? (
        <div className="flex flex-col items-center py-4 text-center">
          <div className="relative h-24 w-24">
            <Illustration
              src="characters/teddy-standing.png"
              alt="Ursinho em pé, feliz"
              className="h-full w-full animate-float-slow"
              sizes="120px"
            />
          </div>

          <h2 id="rsvp-modal-title" className="mt-3 font-script text-4xl font-semibold text-green-dark">
            Presença confirmada!
          </h2>
          <p className="mt-2 max-w-xs text-brown-dark/80">
            Estamos muito felizes com a sua presença.
          </p>

          <Button variant="primary" className="mt-6" onClick={handleClose}>
            Continuar no convite
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative h-14 w-14">
            <Illustration
              src="characters/teddy-standing.png"
              alt="Ursinho em pé, feliz"
              className="h-full w-full animate-float-slow"
              sizes="90px"
            />
          </div>

          <h2 id="rsvp-modal-title" className="mt-2 text-center font-script text-3xl font-semibold text-green-dark sm:text-4xl">
            Confirme sua presença
          </h2>
          <p className="mt-2 max-w-xs text-center text-sm text-brown-dark/80">
            Preencha os dados abaixo para confirmar sua presença no chá.
          </p>

          <div className="mt-5 w-full">
            <RsvpForm onSuccess={() => setSuccess(true)} />
          </div>
        </div>
      )}
    </Modal>
  );
}

