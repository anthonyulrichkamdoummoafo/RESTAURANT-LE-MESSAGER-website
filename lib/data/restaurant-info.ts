import type { OpeningHour } from "@/types";

export const RESTAURANT = {
  name: "Restaurant Le Messager",
  shortName: "Le Messager",
  plusCode: "3P3P+6P4",
  neighborhood: "Ange Raphaël",
  city: "Douala",
  country: "Cameroun",
  addressFr: "3P3P+6P4 Ange Raphaël, Douala, Cameroun",
  addressEn: "3P3P+6P4 Ange Raphaël, Douala, Cameroon",
  phoneDisplay: "+237 672 99 22 31",
  phoneE164: "+237672992231",
  whatsappNumber: "237672992231",
  email: "contact@restaurantlemessager.cm",
  siteUrl: "https://restaurantlemessager.cm",
  // Approximate coordinates for Ange Raphaël, Douala — replace with exact
  // plus-code coordinates once confirmed in Google Maps / Supabase.
  lat: 4.0715,
  lng: 9.7457,
  social: {
    instagram: "https://instagram.com/restaurantlemessager",
    facebook: "https://facebook.com/restaurantlemessager",
    tiktok: "https://tiktok.com/@restaurantlemessager",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${RESTAURANT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function googleMapsEmbedSrc() {
  const query = encodeURIComponent(`${RESTAURANT.plusCode} ${RESTAURANT.neighborhood}, ${RESTAURANT.city}`);
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function googleMapsDirectionsUrl() {
  const query = encodeURIComponent(`${RESTAURANT.plusCode} ${RESTAURANT.neighborhood}, ${RESTAURANT.city}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}

export const OPENING_HOURS: OpeningHour[] = [
  { day: { fr: "Lundi", en: "Monday" }, hours: "11:00 – 22:00" },
  { day: { fr: "Mardi", en: "Tuesday" }, hours: "11:00 – 22:00" },
  { day: { fr: "Mercredi", en: "Wednesday" }, hours: "11:00 – 22:00" },
  { day: { fr: "Jeudi", en: "Thursday" }, hours: "11:00 – 22:00" },
  { day: { fr: "Vendredi", en: "Friday" }, hours: "11:00 – 23:30" },
  { day: { fr: "Samedi", en: "Saturday" }, hours: "10:00 – 23:30" },
  { day: { fr: "Dimanche", en: "Sunday" }, hours: "10:00 – 22:00" },
];
