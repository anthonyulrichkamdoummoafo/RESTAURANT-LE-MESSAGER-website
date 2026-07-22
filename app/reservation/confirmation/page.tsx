"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Home } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  const { dict } = useLocale();
  const [waLink, setWaLink] = React.useState<string | null>(null);

  React.useEffect(() => {
    setWaLink(window.sessionStorage.getItem("lemessager-whatsapp-link"));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-16">
      <div className="container-narrow container text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-leaf-500/10 text-leaf-500"
        >
          <CheckCircle2 className="h-10 w-10" />
        </motion.div>
        <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
          {dict.reservation.confirmTitle}
        </h1>
        <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.reservation.confirmBody}</p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="h-4 w-4" />
              {dict.reservation.confirmBack}
            </Link>
          </Button>
          {waLink && (
            <Button asChild variant="primary" size="lg">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {dict.reservation.confirmWhatsapp}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
