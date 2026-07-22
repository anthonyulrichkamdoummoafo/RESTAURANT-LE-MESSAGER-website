export type Locale = "fr" | "en";

export interface LocalizedText {
  fr: string;
  en: string;
}

export type MenuCategorySlug =
  | "petit-dejeuner"
  | "dejeuner"
  | "diner"
  | "plats-traditionnels"
  | "grillades"
  | "poissons"
  | "boissons"
  | "desserts";

export interface MenuCategory {
  slug: MenuCategorySlug;
  label: LocalizedText;
  icon: string;
}

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  category: MenuCategorySlug;
  description: LocalizedText;
  price: number;
  currency: "FCFA";
  image: string;
  available: boolean;
  popular: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: LocalizedText;
  category: "interieur" | "exterieur" | "plats" | "cuisine" | "evenements";
  span?: "tall" | "wide" | "large" | "normal";
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  rating: number;
  avatarInitials: string;
}

export interface EventType {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  features: LocalizedText[];
  minGuests: number;
  maxGuests: number;
}

export interface StaffMember {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  image: string;
}

export interface OpeningHour {
  day: LocalizedText;
  hours: string;
  closed?: boolean;
}

export interface FAQItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  occasion?: string;
  specialRequests?: string;
}
