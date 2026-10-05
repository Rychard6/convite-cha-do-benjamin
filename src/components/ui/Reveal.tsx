"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium";
};

const delayClasses: Record<NonNullable<RevealProps["delay"]>, string> = {
  none: "",
  short: "delay-150",
  medium: "delay-300",
};

/**
 * Revela o conteúdo com fade + leve deslocamento quando a cena entra na
 * viewport (seção 16: transições progressivas entre cenas).
 */
export function Reveal({ children, className, delay = "none" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        delayClasses[delay],
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
