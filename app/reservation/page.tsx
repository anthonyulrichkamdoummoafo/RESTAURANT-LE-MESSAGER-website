import type { Metadata } from "next";
import { ReservationClient } from "./reservation-client";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre table au Restaurant Le Messager à Ange Raphaël, Douala. Confirmation rapide par téléphone ou WhatsApp.",
};

export default function ReservationPage() {
  return <ReservationClient />;
}
