type LeafProps = {
  className?: string;
  size?: number;
};

/** Small botanical gold leaf used as a brand accent. */
export function Leaf({ className = "", size = 14 }: LeafProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M21 3c0 9-5.5 15-13 15-1.6 0-3-.3-4.2-.9C4.6 9.6 10.6 4.2 21 3Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M3 21c2.2-4.6 5.6-8.2 10.4-10.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

type DividerProps = { className?: string; align?: "left" | "center" };

/** Thin gold line + leaf, echoing the logo's line work. */
export function LeafDivider({ className = "", align = "center" }: DividerProps) {
  return (
    <div
      className={`flex items-center gap-3 text-gold ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
      <Leaf size={15} className="shrink-0 text-gold-light" />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
    </div>
  );
}
