import { Hero } from "@/components/sections/hero";
import { PopularDishes } from "@/components/sections/popular-dishes";
import { Story } from "@/components/sections/story";
import { ChefSpotlight } from "@/components/sections/chef-spotlight";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { HoursMap } from "@/components/sections/hours-map";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularDishes />
      <Story />
      <ChefSpotlight />
      <GalleryPreview />
      <Testimonials />
      <HoursMap />
      <NewsletterSection />
    </>
  );
}
