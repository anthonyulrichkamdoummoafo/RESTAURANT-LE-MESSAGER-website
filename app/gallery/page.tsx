import type { Metadata } from "next";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez en images l'intérieur, l'extérieur, la cuisine, les plats et les événements du Restaurant Le Messager à Douala.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
