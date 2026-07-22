import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        gold: "bg-gold-400/15 text-gold-600 dark:text-gold-300 border border-gold-400/30",
        wine: "bg-wine-500/10 text-wine-500 dark:text-wine-300 border border-wine-500/25",
        leaf: "bg-leaf-500/10 text-leaf-600 dark:text-leaf-300 border border-leaf-500/25",
        muted: "bg-ink/5 dark:bg-cream/10 text-[rgb(var(--ink-muted))] border border-transparent",
        outline: "border border-current text-current",
      },
    },
    defaultVariants: { variant: "muted" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
