import type { Metadata } from "next";
import { MenuPageClient } from "./menu-client";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Découvrez la carte du Restaurant Le Messager : plats traditionnels camerounais, grillades, poissons, boissons et desserts, préparés avec des produits frais.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
