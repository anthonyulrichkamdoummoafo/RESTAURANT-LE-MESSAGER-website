import type { Metadata } from "next";
import { EventsClient } from "./events-client";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Organisez votre mariage, anniversaire, événement d'entreprise ou dîner privé au Restaurant Le Messager à Douala.",
};

export default function EventsPage() {
  return <EventsClient />;
}
