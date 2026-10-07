import { Modal } from "@/components/ui/Modal";
import { DiaperCard } from "./DiaperCard";
import { diaperSuggestions } from "@/config/diapers";

type DiaperModalProps = {
  open: boolean;
  onClose: () => void;
};

/** Catálogo completo de fraldas, aberto a partir da prévia no scroll (seção 13). */
export function DiaperModal({ open, onClose }: DiaperModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="diaper-modal-title">
      <h2 id="diaper-modal-title" className="text-center font-script text-3xl font-semibold text-green-dark sm:text-4xl">
        Sugestões de Fraldas
      </h2>
      <p className="mt-2 text-center text-sm text-brown-dark/80">
        Para celebrar a vinda do Benjamin e encher o mundinho dele de carinho, deixamos algumas sugestões por aqui
      </p>
      <div className="mt-5 flex w-full flex-col gap-4">
        {diaperSuggestions.map((product) => (
          <DiaperCard key={product.id} product={product} />
        ))}
      </div>
    </Modal>

  );
}
