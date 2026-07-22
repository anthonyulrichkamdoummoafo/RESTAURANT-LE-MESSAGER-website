import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/i18n/locale-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { BackToTop } from "@/components/layout/back-to-top";
import { RESTAURANT } from "@/lib/data/restaurant-info";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(RESTAURANT.siteUrl),
  title: {
    default: "Restaurant Le Messager — Cuisine Camerounaise Authentique | Ange Raphaël, Douala",
    template: "%s | Restaurant Le Messager",
  },
  description:
    "Restaurant Le Messager à Ange Raphaël, Douala : cuisine camerounaise authentique, cadre élégant, réservation en ligne, événements privés et livraison WhatsApp.",
  keywords: [
    "restaurant Douala",
    "cuisine camerounaise",
    "Ange Raphaël",
    "restaurant gastronomique Cameroun",
    "ndolé",
    "poulet DG",
    "réservation restaurant Douala",
  ],
  authors: [{ name: RESTAURANT.name }],
  creator: RESTAURANT.name,
  openGraph: {
    type: "website",
    locale: "fr_CM",
    alternateLocale: "en_US",
    url: RESTAURANT.siteUrl,
    siteName: RESTAURANT.name,
    title: "Restaurant Le Messager — Cuisine Camerounaise Authentique",
    description:
      "Découvrez une cuisine camerounaise authentique servie avec passion, à Ange Raphaël, Douala.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: RESTAURANT.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Le Messager — Cuisine Camerounaise Authentique",
    description: "Cuisine camerounaise authentique, servie avec passion à Douala.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: RESTAURANT.siteUrl },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#181818" },
  ],
  width: "device-width",
  initialScale: 1,
};

function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.name,
    image: `${RESTAURANT.siteUrl}/og-image.jpg`,
    servesCuisine: "Cameroonian",
    priceRange: "FCFA 1500 - FCFA 8000",
    telephone: RESTAURANT.phoneE164,
    email: RESTAURANT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${RESTAURANT.plusCode}, ${RESTAURANT.neighborhood}`,
      addressLocality: RESTAURANT.city,
      addressCountry: "CM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.lat,
      longitude: RESTAURANT.lng,
    },
    url: RESTAURANT.siteUrl,
    sameAs: [RESTAURANT.social.instagram, RESTAURANT.social.facebook, RESTAURANT.social.tiktok],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "23:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-body`}>
        <RestaurantJsonLd />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsappButton />
            <BackToTop />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
