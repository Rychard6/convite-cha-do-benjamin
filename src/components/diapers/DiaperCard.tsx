import { Illustration } from "@/components/ui/Illustration";
import { ButtonLink } from "@/components/ui/Button";
import type { DiaperSuggestion } from "@/config/diapers";

export function DiaperCard({ product }: { product: DiaperSuggestion }) {
  return (
    <article className="flex gap-4 rounded-3xl border border-gold/30 bg-white/70 p-4 shadow-card">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-green-light">
        <Illustration src={product.image.replace("/assets/illustrations/", "")} alt={product.name} className="h-full w-full" sizes="100px" />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-brown">{product.brand}</p>
          {product.promotion && (
            <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brown">
              Em promoção
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold leading-snug text-brown-dark">
          {product.name}
        </h3>

        <p className="text-sm text-brown/70">
          {product.size}
          {product.quantity ? ` · ${product.quantity}` : ""}
        </p>

        {product.price && (
          <p className="text-base font-bold text-green-dark">{product.price}</p>
        )}

        <ButtonLink
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-1 self-start px-4 py-2 text-sm"
        >
          Ver produto
        </ButtonLink>
      </div>
    </article>
  );
}
