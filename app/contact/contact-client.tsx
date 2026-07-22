"use client";

import * as React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { RESTAURANT, OPENING_HOURS, googleMapsEmbedSrc, whatsappLink } from "@/lib/data/restaurant-info";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { t } from "@/lib/utils";

export function ContactClient() {
  const { dict, locale } = useLocale();
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to an email service (Resend, etc.) or Supabase `messages` table.
    setSent(true);
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.contact.eyebrow}
            <span className="kicker-divider" />
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            {dict.contact.title}
          </h1>
          <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.contact.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 shadow-soft">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-wine-500 dark:text-gold-400" />
                    <div>
                      <p className="font-semibold">{dict.contact.address}</p>
                      <p className="text-[rgb(var(--ink-muted))]">
                        {locale === "fr" ? RESTAURANT.addressFr : RESTAURANT.addressEn}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-4 w-4 mt-0.5 shrink-0 text-wine-500 dark:text-gold-400" />
                    <div>
                      <p className="font-semibold">{dict.contact.phone}</p>
                      <a href={`tel:${RESTAURANT.phoneE164}`} className="text-[rgb(var(--ink-muted))] hover:text-wine-500">
                        {RESTAURANT.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 shrink-0 text-wine-500 dark:text-gold-400" />
                    <div>
                      <p className="font-semibold">{dict.contact.email}</p>
                      <a href={`mailto:${RESTAURANT.email}`} className="text-[rgb(var(--ink-muted))] hover:text-wine-500">
                        {RESTAURANT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 shrink-0 text-wine-500 dark:text-gold-400" />
                    <div>
                      <p className="font-semibold">{dict.contact.hours}</p>
                      <ul className="mt-1 space-y-0.5 text-[rgb(var(--ink-muted))]">
                        {OPENING_HOURS.map((oh) => (
                          <li key={oh.day.fr} className="flex justify-between gap-6">
                            <span>{t(oh.day, locale)}</span>
                            <span>{oh.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="primary" size="sm">
                    <a
                      href={whatsappLink(
                        locale === "fr" ? "Bonjour Le Messager !" : "Hello Le Messager!"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> {dict.contact.whatsapp}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={`tel:${RESTAURANT.phoneE164}`}>
                      <Phone className="h-3.5 w-3.5" /> {dict.contact.call}
                    </a>
                  </Button>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(var(--ink-muted))]">
                    {dict.contact.social}
                  </p>
                  <div className="mt-2 flex gap-3">
                    <a
                      href={RESTAURANT.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border-subtle))] hover:border-wine-500 hover:text-wine-500 dark:hover:border-gold-400 dark:hover:text-gold-400"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={RESTAURANT.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--border-subtle))] hover:border-wine-500 hover:text-wine-500 dark:hover:border-gold-400 dark:hover:text-gold-400"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="min-h-[240px] flex-1 overflow-hidden rounded-3xl border border-[rgb(var(--border-subtle))] shadow-soft">
                <iframe
                  title="Carte Restaurant Le Messager"
                  src={googleMapsEmbedSrc()}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 240 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 shadow-soft md:p-8">
              <h2 className="font-display text-2xl font-semibold">{dict.contact.formTitle}</h2>
              {sent ? (
                <p className="mt-6 rounded-xl bg-leaf-500/10 p-4 text-sm text-leaf-600">
                  {locale === "fr"
                    ? "Merci, votre message a bien été envoyé !"
                    : "Thank you, your message has been sent!"}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="c-name">{dict.contact.formName}</Label>
                    <Input id="c-name" required />
                  </div>
                  <div>
                    <Label htmlFor="c-email">{dict.contact.formEmail}</Label>
                    <Input id="c-email" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="c-subject">{dict.contact.formSubject}</Label>
                    <Input id="c-subject" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="c-message">{dict.contact.formMessage}</Label>
                    <Textarea id="c-message" required />
                  </div>
                  <Button type="submit" size="lg" className="sm:col-span-2">
                    {dict.contact.formSubmit} <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            <div className="mt-8 rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 shadow-soft md:p-8">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
