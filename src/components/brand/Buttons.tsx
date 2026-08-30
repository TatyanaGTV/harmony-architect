import type { ComponentPropsWithoutRef } from "react";
import { Leaf } from "./Leaf";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  withLeaf?: boolean;
  fullWidth?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] font-body text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300";

export function GoldButton({
  children,
  className = "",
  withLeaf = true,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`${base} px-7 py-[14px] text-ink shadow-[0_10px_30px_-14px_rgba(214,168,79,0.75)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_rgba(232,198,106,0.7)] ${fullWidth ? "w-full" : ""} ${className}`}
      style={{ background: "var(--gradient-gold)" }}
    >
      {children}
      {withLeaf ? <Leaf size={14} className="opacity-80" /> : null}
    </a>
  );
}

export function OutlineButton({
  children,
  className = "",
  withLeaf = true,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`${base} border border-gold px-7 py-[13px] text-gold-light hover:bg-gold hover:text-ink ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
      {withLeaf ? <Leaf size={14} className="opacity-80" /> : null}
    </a>
  );
}
