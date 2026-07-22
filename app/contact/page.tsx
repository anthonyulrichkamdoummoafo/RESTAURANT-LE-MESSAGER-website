import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le Restaurant Le Messager à Ange Raphaël, Douala : téléphone, WhatsApp, e-mail, adresse et horaires d'ouverture.",
};

export default function ContactPage() {
  return <ContactClient />;
}
