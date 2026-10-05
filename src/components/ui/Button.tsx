import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-green-main text-cream hover:bg-green-dark active:scale-[0.98] shadow-soft",
  secondary:
    "bg-cream text-green-dark border-2 border-green-main hover:bg-green-light active:scale-[0.98]",
  ghost:
    "bg-transparent text-brown underline-offset-4 hover:underline active:scale-[0.98]",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonBaseClasses,
        fullWidth && "w-full",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

/** Variante em formato de link (`<a>`) com a mesma aparência de `Button`. */
export function ButtonLink({
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        buttonBaseClasses,
        fullWidth && "w-full",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
