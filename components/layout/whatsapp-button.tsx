"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/data/restaurant-info";
import { useLocale } from "@/lib/i18n/locale-provider";

export function WhatsappButton() {
  const { locale } = useLocale();
  const message =
    locale === "fr"
      ? "Bonjour Le Messager, je souhaite avoir des informations."
      : "Hello Le Messager, I'd like some information.";

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-cream shadow-lg"
    >
      <span className="absolute inset-0 rounded-full bg-leaf-500 animate-ping opacity-30" />
      <MessageCircle className="h-6 w-6 relative" />
    </motion.a>
  );
}
