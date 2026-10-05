import Image from "next/image";
import { cn } from "@/lib/utils";

type IllustrationProps = {
  /** Caminho relativo dentro de /assets/illustrations, ex: "characters/teddy-balloon.png" */
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Wrapper para os assets de ilustração fornecidos pelo desenvolvedor.
 * Utiliza `fill` + container com tamanho definido via Tailwind (className).
 * Enquanto o PNG não existe fisicamente, o navegador exibirá apenas um
 * espaço vazio (sem quebrar o layout) — nada de emoji ou ilustração genérica.
 */
export function Illustration({ src, alt, className, sizes, priority }: IllustrationProps) {
  return (
    <span className={cn("relative block select-none pointer-events-none", className)}>
      <Image
        src={`/assets/illustrations/${src}`}
        alt={alt}
        fill
        sizes={sizes ?? "200px"}
        priority={priority}
        className="object-contain drop-shadow-sm"
      />
    </span>
  );
}
