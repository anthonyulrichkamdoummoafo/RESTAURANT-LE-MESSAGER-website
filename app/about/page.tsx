import type { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la mission et la vision du Restaurant Le Messager à Ange Raphaël, Douala, ainsi que notre chef et notre équipe.",
};

export default function AboutPage() {
  return <AboutClient />;
}
