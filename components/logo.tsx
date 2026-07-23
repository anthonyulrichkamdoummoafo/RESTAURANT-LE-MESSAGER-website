"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RESTAURANT } from "@/lib/data/restaurant-info";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
  /** Force a specific variant regardless of theme (e.g. always light on a dark section). */
  variant?: "auto" | "dark-text" | "light-text";
  priority?: boolean;
}

const ASPECT = 1231 / 862; // matches the source crop

/**
 * Renders the Restaurant Le Messager logo, automatically swapping between the
 * navy-text version (for light backgrounds) and a cream-text recolor (for
 * dark backgrounds) so it stays legible in both themes.
 */
export function Logo({ className, height = 40, variant = "auto", priority }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const useLight =
    variant === "light-text" || (variant === "auto" && mounted && resolvedTheme === "dark");

  const src = useLight ? "/images/logo-nav-light.png" : "/images/logo-nav.png";

  return (
    <Image
      src={src}
      alt={RESTAURANT.name}
      width={Math.round(height * ASPECT)}
      height={height}
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
