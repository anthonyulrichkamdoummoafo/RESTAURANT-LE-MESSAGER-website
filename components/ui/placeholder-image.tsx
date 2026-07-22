import { cn } from "@/lib/utils";
import {
  UtensilsCrossed,
  Flame,
  Fish,
  GlassWater,
  IceCreamCone,
  CookingPot,
  Coffee,
  Moon,
  Building2,
  Users,
  ChefHat,
  ImageIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "petit-dejeuner": Coffee,
  dejeuner: UtensilsCrossed,
  diner: Moon,
  "plats-traditionnels": CookingPot,
  grillades: Flame,
  poissons: Fish,
  boissons: GlassWater,
  desserts: IceCreamCone,
  interieur: Building2,
  exterieur: Building2,
  plats: UtensilsCrossed,
  cuisine: ChefHat,
  evenements: Users,
};

// A deterministic set of warm, brand-aligned gradient pairs so placeholders
// feel curated rather than random.
const GRADIENTS = [
  ["#5C0000", "#8B0000"],
  ["#8B0000", "#B8912A"],
  ["#2E8B57", "#1C5334"],
  ["#93711F", "#D4AF37"],
  ["#420000", "#750000"],
  ["#181818", "#5C0000"],
];

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface PlaceholderImageProps {
  id: string;
  label?: string;
  category?: string;
  className?: string;
  iconClassName?: string;
}

/**
 * Stands in for real photography. Renders a brand-toned gradient with a
 * contextual icon and subtle texture — swap for next/image + real assets
 * once photography is available (see README).
 */
export function PlaceholderImage({ id, label, category, className, iconClassName }: PlaceholderImageProps) {
  const [from, to] = GRADIENTS[hashString(id) % GRADIENTS.length];
  const Icon = (category && ICONS[category]) || ImageIcon;

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden isolate", className)}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-cream/90">
        <Icon className={cn("h-8 w-8 md:h-10 md:w-10 opacity-80", iconClassName)} strokeWidth={1.5} />
        {label && (
          <span className="text-[10px] md:text-xs font-body tracking-wide uppercase opacity-70 px-4 text-center">
            {label}
          </span>
        )}
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}
