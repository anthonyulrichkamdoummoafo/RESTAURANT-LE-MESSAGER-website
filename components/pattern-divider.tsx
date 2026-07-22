import { cn } from "@/lib/utils";

interface PatternDividerProps {
  className?: string;
  tone?: "gold" | "cream" | "wine";
  flip?: boolean;
}

/**
 * Signature motif for Le Messager: a repeating diamond/triangle rhythm drawn
 * from Central African wax-print (pagne) patterns — used sparingly at major
 * section thresholds instead of a generic wave or blob divider.
 */
export function PatternDivider({ className, tone = "gold", flip }: PatternDividerProps) {
  const color = tone === "gold" ? "#D4AF37" : tone === "wine" ? "#8B0000" : "#FAF7F2";
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn("w-full overflow-hidden leading-[0]", flip && "rotate-180", className)}
    >
      <svg
        viewBox="0 0 240 16"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-4 md:h-5"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 12}, 0)`}>
            <polygon points="6,1 11,8 6,15 1,8" fill={color} opacity={i % 2 === 0 ? 0.9 : 0.35} />
          </g>
        ))}
      </svg>
    </div>
  );
}
