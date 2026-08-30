type Props = {
  className?: string;
  opacity?: number;
};

const NODES = [
  [8, 18],
  [22, 9],
  [17, 38],
  [33, 27],
  [46, 14],
  [41, 46],
  [58, 33],
  [69, 12],
  [74, 44],
  [88, 25],
  [92, 55],
  [63, 62],
  [30, 66],
  [12, 58],
  [50, 80],
  [80, 78],
  [24, 88],
  [95, 88],
] as const;

const LINKS: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [6, 7],
  [6, 8],
  [7, 9],
  [8, 9],
  [8, 10],
  [5, 11],
  [11, 8],
  [2, 12],
  [12, 13],
  [12, 5],
  [12, 14],
  [14, 11],
  [14, 15],
  [15, 10],
  [14, 16],
  [15, 17],
];

/**
 * Decorative neural / branch network. Purely ornamental, kept low contrast
 * so it never competes with text.
 */
export function NeuralBackground({ className = "", opacity = 0.28 }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="animate-drift h-full w-full"
        fill="none"
      >
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="var(--gold)"
            strokeWidth="0.12"
            strokeOpacity="0.75"
          />
        ))}
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 0.5 : 0.28}
            fill="var(--gold-bright)"
            className="animate-pulse-soft"
            style={{ animationDelay: `${(i % 6) * 0.9}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
