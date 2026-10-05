import { Illustration } from "./Illustration";
import { cn } from "@/lib/utils";

export type DecorationItem = {
  src: string;
  alt: string;
  className: string;
  animation?: string;
};

/**
 * Renderiza um conjunto de ilustrações decorativas posicionadas absolutamente.
 * Cada tela define seu próprio conjunto de `items` (ver seção 43 das instruções).
 * Elementos são `aria-hidden` pois são puramente decorativos.
 */
export function FloatingDecorations({ items }: { items: DecorationItem[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, index) => (
        <Illustration
          key={`${item.src}-${index}`}
          src={item.src}
          alt=""
          className={cn("absolute", item.className, item.animation)}
        />
      ))}
    </div>
  );
}
