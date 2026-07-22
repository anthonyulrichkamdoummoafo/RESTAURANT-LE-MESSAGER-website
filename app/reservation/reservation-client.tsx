"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Users, Calendar, Clock, Phone, Mail, User, MessageSquare } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { whatsappLink } from "@/lib/data/restaurant-info";
import type { ReservationFormData } from "@/types";

const initialState: ReservationFormData = {
  name: "",
  phone: "",
  email: "",
  guests: 2,
  date: "",
  time: "19:00",
  occasion: "",
  specialRequests: "",
};

export function ReservationClient() {
  const { dict, locale } = useLocale();
  const router = useRouter();
  const [form, setForm] = React.useState<ReservationFormData>(initialState);
  const [submitting, setSubmitting] = React.useState(false);

  function update<K extends keyof ReservationFormData>(key: K, value: ReservationFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: replace with a Supabase insert into `reservations` once the
    // backend/CMS phase is wired up. For now we notify via WhatsApp and
    // route to the confirmation screen.
    const message =
      locale === "fr"
        ? `Nouvelle réservation :\nNom : ${form.name}\nTéléphone : ${form.phone}\nConvives : ${form.guests}\nDate : ${form.date}\nHeure : ${form.time}\nOccasion : ${form.occasion || "-"}\nDemandes : ${form.specialRequests || "-"}`
        : `New reservation:\nName: ${form.name}\nPhone: ${form.phone}\nGuests: ${form.guests}\nDate: ${form.date}\nTime: ${form.time}\nOccasion: ${form.occasion || "-"}\nRequests: ${form.specialRequests || "-"}`;

    window.sessionStorage.setItem("lemessager-last-reservation", JSON.stringify(form));
    window.sessionStorage.setItem("lemessager-whatsapp-link", whatsappLink(message));

    setTimeout(() => {
      router.push("/reservation/confirmation");
    }, 500);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="pt-32 pb-20">
      <div className="container-narrow container">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.reservation.eyebrow}
            <span className="kicker-divider" />
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold sm:text-5xl">
            {dict.reservation.title}
          </h1>
          <p className="mt-4 text-[rgb(var(--ink-muted))]">{dict.reservation.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-[rgb(var(--border-subtle))] bg-[rgb(var(--surface-elevated))] p-6 shadow-soft md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">
                  <User className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.name}
                </Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={dict.reservation.form.namePlaceholder}
                />
              </div>
              <div>
                <Label htmlFor="phone">
                  <Phone className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.phone}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={dict.reservation.form.phonePlaceholder}
                />
              </div>
              <div>
                <Label htmlFor="email">
                  <Mail className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder={dict.reservation.form.emailPlaceholder}
                />
              </div>
              <div>
                <Label htmlFor="guests">
                  <Users className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.guests}
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min={1}
                  max={40}
                  required
                  value={form.guests}
                  onChange={(e) => update("guests", Number(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="date">
                  <Calendar className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.date}
                </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  min={today}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="time">
                  <Clock className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.time}
                </Label>
                <Input
                  id="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="occasion">{dict.reservation.form.occasion}</Label>
                <Input
                  id="occasion"
                  value={form.occasion}
                  onChange={(e) => update("occasion", e.target.value)}
                  placeholder={dict.reservation.form.occasionPlaceholder}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="requests">
                  <MessageSquare className="mr-1 inline h-3.5 w-3.5" /> {dict.reservation.form.requests}
                </Label>
                <Textarea
                  id="requests"
                  value={form.specialRequests}
                  onChange={(e) => update("specialRequests", e.target.value)}
                  placeholder={dict.reservation.form.requestsPlaceholder}
                />
              </div>
            </div>

            <Button type="submit" size="lg" variant="primary" className="mt-8 w-full" disabled={submitting}>
              {submitting ? dict.reservation.form.submitting : dict.reservation.form.submit}
            </Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
