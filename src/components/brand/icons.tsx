type IconProps = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function BrainIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M24 10v28" />
      <path d="M24 12c-2-3-6-3.5-8.5-1.5S12.5 16 14 18c-3 .6-4.7 3.3-4 6.2.5 2 2 3.3 3.8 3.7-1.3 2.3-.6 5.3 1.8 6.7 2.2 1.3 5 .7 6.5-1.2" />
      <path d="M24 12c2-3 6-3.5 8.5-1.5S35.5 16 34 18c3 .6 4.7 3.3 4 6.2-.5 2-2 3.3-3.8 3.7 1.3 2.3.6 5.3-1.8 6.7-2.2 1.3-5 .7-6.5-1.2" />
      <path d="M24 38v3M19 41h10" />
    </svg>
  );
}

export function PuzzleIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 14h7a3 3 0 1 1 6 0h7v7a3 3 0 1 1 0 6v7h-7a3 3 0 1 0-6 0h-7v-7a3 3 0 1 0 0-6v-7Z" />
    </svg>
  );
}

export function LotusIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M24 12c4 4.4 5.8 9.2 5.8 15.4-2.4 2.2-4.2 3.3-5.8 3.3s-3.4-1.1-5.8-3.3C18.2 21.2 20 16.4 24 12Z" />
      <path d="M18.2 27.4c-1.6-4-4.6-6.6-8.2-7.5-.4 5.2 1.6 9.4 5.6 12.4" />
      <path d="M29.8 27.4c1.6-4 4.6-6.6 8.2-7.5.4 5.2-1.6 9.4-5.6 12.4" />
      <path d="M9 30c3.6 5 8.6 7.5 15 7.5S32.4 35 36 30" />
    </svg>
  );
}

export function ParentIcon({ className = "", size = 40 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="18" cy="16" r="5" />
      <circle cx="32" cy="22" r="3.6" />
      <path d="M9 38c0-5.5 4-9.5 9-9.5s9 4 9 9.5" />
      <path d="M28 38c0-3.9 2.2-6.8 5.2-6.8S38 34.1 38 38" />
    </svg>
  );
}

export function ScienceIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 8v10L11 34a4 4 0 0 0 3.5 6h19a4 4 0 0 0 3.5-6l-9-16V8" />
      <path d="M17 8h14" />
      <path d="M16 28h16" />
    </svg>
  );
}

export function PersonIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="24" cy="16" r="6" />
      <path d="M12 40c0-6.6 5.4-12 12-12s12 5.4 12 12" />
    </svg>
  );
}

export function TrustIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M24 39c-8-4.7-13-10-13-16.4A7.6 7.6 0 0 1 24 17a7.6 7.6 0 0 1 13 5.6C37 29 32 34.3 24 39Z" />
    </svg>
  );
}

export function ResultIcon({ className = "", size = 32 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M10 38h28" />
      <path d="M15 38V27M24 38V17M33 38V22" />
    </svg>
  );
}
