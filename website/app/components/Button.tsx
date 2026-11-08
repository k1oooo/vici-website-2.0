import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Button variants
 *  variant: primary (filled) | secondary (outline)
 *  tone:    on-dark (use on Deep Blue) | on-light (use on Off White)
 *  size:    md | lg
 */
type Variant = "primary" | "secondary";
type Tone = "on-dark" | "on-light";
type Size = "md" | "lg";

const BASE =
  "group inline-flex items-center justify-center gap-3 rounded-full font-bold leading-none transition-colors";

const STYLES: Record<Tone, Record<Variant, string>> = {
  "on-dark": {
    primary: "bg-paper text-ink hover:bg-accent",
    secondary:
      "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10",
  },
  "on-light": {
    primary: "bg-surface text-on-surface hover:bg-ink",
    secondary:
      "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
  },
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
};

export default function Button({
  variant = "primary",
  tone = "on-dark",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`${BASE} ${SIZES[size]} ${STYLES[tone][variant]} ${className}`}
      {...props}
    />
  );
}
