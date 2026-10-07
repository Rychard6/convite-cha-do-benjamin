import { Illustration } from "@/components/ui/Illustration";
import type { DiaperSuggestion } from "@/config/diapers";

export function DiaperCard({ product }: { product: DiaperSuggestion }) {
  return (
    <article className="flex gap-4 rounded-3xl border border-gold/30 bg-white/70 p-4 shadow-card">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-green-light">
        <Illustration src={product.image} alt={product.name} className="h-full w-full" sizes="140px" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
        <p className="text-sm font-semibold text-brown">{product.brand}</p>
        <h3 className="text-base font-semibold leading-snug text-brown-dark">
          {product.name}
        </h3>
      </div>
    </article>
  );
}
