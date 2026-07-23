import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";

interface MediaProps {
  id: string;
  category?: string;
  label?: string;
  photo?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a real photo (next/image) when one is supplied via `photo`,
 * otherwise falls back to the branded gradient PlaceholderImage. This lets
 * real photography be dropped in per-item without touching every call site.
 */
export function Media({ id, category, label, photo, className, sizes, priority }: MediaProps) {
  if (photo) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <Image
          src={photo}
          alt={label ?? ""}
          fill
          sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return <PlaceholderImage id={id} category={category} label={label} className={className} />;
}
